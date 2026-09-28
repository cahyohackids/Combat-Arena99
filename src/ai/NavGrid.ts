import { HeightField } from '@/world/HeightField';
import { ColliderRegistry } from '@/world/Colliders';
import { MAP_RADIUS } from '@/world/Locations';

const CELL_SIZE = 4;

class MinHeap {
  private items: { f: number; idx: number }[] = [];

  get size(): number {
    return this.items.length;
  }

  push(f: number, idx: number): void {
    const arr = this.items;
    arr.push({ f, idx });
    let i = arr.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (arr[p].f <= arr[i].f) break;
      [arr[p], arr[i]] = [arr[i], arr[p]];
      i = p;
    }
  }

  pop(): { f: number; idx: number } | undefined {
    const arr = this.items;
    if (arr.length === 0) return undefined;
    const top = arr[0];
    const last = arr.pop()!;
    if (arr.length > 0) {
      arr[0] = last;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1;
        const r = i * 2 + 2;
        let smallest = i;
        if (l < arr.length && arr[l].f < arr[smallest].f) smallest = l;
        if (r < arr.length && arr[r].f < arr[smallest].f) smallest = r;
        if (smallest === i) break;
        [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
        i = smallest;
      }
    }
    return top;
  }
}

/**
 * Coarse grid over the island used for A* pathfinding. Built once from the same heightfield/collider
 * data that shapes the visual world, so AI never paths through walls or off cliffs the player can see.
 */
export class NavGrid {
  readonly size: number;
  readonly origin: number;
  private walkable: Uint8Array;

  constructor(hf: HeightField, colliders: ColliderRegistry) {
    this.size = Math.ceil((MAP_RADIUS * 2) / CELL_SIZE);
    this.origin = -MAP_RADIUS;
    this.walkable = new Uint8Array(this.size * this.size);

    for (let gz = 0; gz < this.size; gz++) {
      for (let gx = 0; gx < this.size; gx++) {
        const x = this.origin + gx * CELL_SIZE + CELL_SIZE / 2;
        const z = this.origin + gz * CELL_SIZE + CELL_SIZE / 2;
        let ok = !hf.isUnderwater(x, z);
        if (ok) {
          const [, ny] = hf.getNormal(x, z, 1.5);
          if (ny < 0.55) ok = false;
        }
        if (ok && colliders.isBlocked(x, z, hf.getHeight(x, z), 2.2)) ok = false;
        this.walkable[gz * this.size + gx] = ok ? 1 : 0;
      }
    }
  }

  private worldToGrid(x: number, z: number): [number, number] {
    const gx = Math.floor((x - this.origin) / CELL_SIZE);
    const gz = Math.floor((z - this.origin) / CELL_SIZE);
    return [gx, gz];
  }

  private gridToWorld(gx: number, gz: number): [number, number] {
    return [this.origin + gx * CELL_SIZE + CELL_SIZE / 2, this.origin + gz * CELL_SIZE + CELL_SIZE / 2];
  }

  private idx(gx: number, gz: number): number {
    return gz * this.size + gx;
  }

  isWalkableWorld(x: number, z: number): boolean {
    const [gx, gz] = this.worldToGrid(x, z);
    if (gx < 0 || gz < 0 || gx >= this.size || gz >= this.size) return false;
    return this.walkable[this.idx(gx, gz)] === 1;
  }

  private nearestWalkable(gx: number, gz: number): [number, number] | null {
    if (gx >= 0 && gz >= 0 && gx < this.size && gz < this.size && this.walkable[this.idx(gx, gz)] === 1) return [gx, gz];
    for (let r = 1; r < 12; r++) {
      for (let dz = -r; dz <= r; dz++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
          const nx = gx + dx;
          const nz = gz + dz;
          if (nx < 0 || nz < 0 || nx >= this.size || nz >= this.size) continue;
          if (this.walkable[this.idx(nx, nz)] === 1) return [nx, nz];
        }
      }
    }
    return null;
  }

  /** A* over the grid, returns simplified world-space waypoints, or null if unreachable within the search budget. */
  findPath(startX: number, startZ: number, goalX: number, goalZ: number, maxIterations = 6000): Array<[number, number]> | null {
    const s0 = this.worldToGrid(startX, startZ);
    const g0 = this.worldToGrid(goalX, goalZ);
    const start = this.nearestWalkable(s0[0], s0[1]);
    const goal = this.nearestWalkable(g0[0], g0[1]);
    if (!start || !goal) return null;

    const startIdx = this.idx(start[0], start[1]);
    const goalIdx = this.idx(goal[0], goal[1]);
    if (startIdx === goalIdx) return [this.gridToWorld(goal[0], goal[1])];

    const n = this.size * this.size;
    const gScore = new Float32Array(n).fill(Infinity);
    const cameFrom = new Int32Array(n).fill(-1);
    const closed = new Uint8Array(n);
    gScore[startIdx] = 0;

    const heap = new MinHeap();
    const heuristic = (gx: number, gz: number) => Math.hypot(gx - goal[0], gz - goal[1]);
    heap.push(heuristic(start[0], start[1]), startIdx);

    const neighbors = [
      [1, 0, 1],
      [-1, 0, 1],
      [0, 1, 1],
      [0, -1, 1],
      [1, 1, 1.414],
      [1, -1, 1.414],
      [-1, 1, 1.414],
      [-1, -1, 1.414],
    ];

    let iterations = 0;
    while (heap.size > 0 && iterations < maxIterations) {
      iterations++;
      const cur = heap.pop()!;
      if (closed[cur.idx]) continue;
      closed[cur.idx] = 1;
      if (cur.idx === goalIdx) break;

      const cx = cur.idx % this.size;
      const cz = Math.floor(cur.idx / this.size);

      for (const [dx, dz, cost] of neighbors) {
        const nx = cx + dx;
        const nz = cz + dz;
        if (nx < 0 || nz < 0 || nx >= this.size || nz >= this.size) continue;
        const nIdx = this.idx(nx, nz);
        if (this.walkable[nIdx] !== 1 || closed[nIdx]) continue;
        const tentative = gScore[cur.idx] + cost;
        if (tentative < gScore[nIdx]) {
          gScore[nIdx] = tentative;
          cameFrom[nIdx] = cur.idx;
          heap.push(tentative + heuristic(nx, nz), nIdx);
        }
      }
    }

    if (closed[goalIdx] !== 1 && cameFrom[goalIdx] === -1 && goalIdx !== startIdx) {
      // Goal never reached within budget — walk back from the closest explored node to the goal instead.
      let best = -1;
      let bestDist = Infinity;
      for (let i = 0; i < n; i++) {
        if (!closed[i]) continue;
        const gx = i % this.size;
        const gz = Math.floor(i / this.size);
        const d = heuristic(gx, gz);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      }
      if (best === -1) return null;
      return this.reconstruct(cameFrom, best);
    }

    return this.reconstruct(cameFrom, goalIdx);
  }

  private reconstruct(cameFrom: Int32Array, endIdx: number): Array<[number, number]> {
    const path: Array<[number, number]> = [];
    let cur = endIdx;
    let guard = 0;
    while (cur !== -1 && guard < 100000) {
      guard++;
      const gx = cur % this.size;
      const gz = Math.floor(cur / this.size);
      path.push(this.gridToWorld(gx, gz));
      cur = cameFrom[cur];
    }
    path.reverse();
    return this.simplify(path);
  }

  private lineWalkable(a: [number, number], b: [number, number]): boolean {
    const steps = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / (CELL_SIZE * 0.5));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = a[0] + (b[0] - a[0]) * t;
      const z = a[1] + (b[1] - a[1]) * t;
      if (!this.isWalkableWorld(x, z)) return false;
    }
    return true;
  }

  private simplify(path: Array<[number, number]>): Array<[number, number]> {
    if (path.length <= 2) return path;
    const result: Array<[number, number]> = [path[0]];
    let anchor = 0;
    for (let i = 2; i < path.length; i++) {
      if (!this.lineWalkable(path[anchor], path[i])) {
        result.push(path[i - 1]);
        anchor = i - 1;
      }
    }
    result.push(path[path.length - 1]);
    return result;
  }
}

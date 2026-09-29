import { Noise2D } from '@/utils/Noise';
import { LOCATIONS, ROADS, getLocation, MAP_RADIUS, WATER_LEVEL } from './Locations';
import { smoothstep, clamp01, lerp } from '@/utils/MathUtils';

interface RoadSeg {
  a: [number, number];
  b: [number, number];
  ha: number;
  hb: number;
}

/**
 * Analytic terrain height function shared by the visual mesh, character movement,
 * and AI navigation so all three always agree on the ground.
 */
export class HeightField {
  private noise: Noise2D;
  private detail: Noise2D;
  private roads: RoadSeg[] = [];

  constructor(seed: number) {
    this.noise = new Noise2D(seed);
    this.detail = new Noise2D(seed ^ 0x9e3779b9);
    for (const [a, b] of ROADS) {
      const la = getLocation(a);
      const lb = getLocation(b);
      this.roads.push({ a: la.center, b: lb.center, ha: la.baseHeight, hb: lb.baseHeight });
    }
  }

  private distToSeg(px: number, pz: number, seg: RoadSeg): { d: number; t: number } {
    const [ax, az] = seg.a;
    const [bx, bz] = seg.b;
    const abx = bx - ax;
    const abz = bz - az;
    const len2 = abx * abx + abz * abz || 1;
    let t = ((px - ax) * abx + (pz - az) * abz) / len2;
    t = clamp01(t);
    const cx = ax + abx * t;
    const cz = az + abz * t;
    const dx = px - cx;
    const dz = pz - cz;
    return { d: Math.sqrt(dx * dx + dz * dz), t };
  }

  /** Base rolling terrain before location shaping (hills/plateaus/pit). */
  private baseHeight(x: number, z: number): number {
    const macro = this.noise.fbm(x * 0.0016, z * 0.0016, 5, 2.0, 0.5) * 14;
    const micro = this.detail.fbm(x * 0.01, z * 0.01, 3, 2.1, 0.5) * 2.2;
    return macro + micro;
  }

  /** True analytic height at world (x,z), meters. */
  getHeight(x: number, z: number): number {
    let h = this.baseHeight(x, z);

    for (const loc of LOCATIONS) {
      const dx = x - loc.center[0];
      const dz = z - loc.center[1];
      const d = Math.sqrt(dx * dx + dz * dz);
      const w = 1 - smoothstep(loc.radius, loc.radius + loc.falloff, d);
      if (w <= 0.001) continue;

      let target = loc.baseHeight;
      if (loc.kind === 'hill') {
        const domeT = clamp01(1 - d / (loc.radius + loc.falloff * 0.6));
        const dome = domeT * domeT * (3 - 2 * domeT);
        target = loc.baseHeight + dome * loc.shapeAmount + this.detail.fbm(x * 0.02, z * 0.02, 3) * 4;
      } else if (loc.kind === 'pit') {
        const innerW = 1 - smoothstep(loc.radius * 0.35, loc.radius, d);
        target = loc.baseHeight - innerW * loc.shapeAmount;
      } else {
        target = loc.baseHeight + this.detail.fbm(x * 0.03, z * 0.03, 2) * 0.6;
      }

      h = lerp(h, target, w);
    }

    // Roads: flatten a smooth strip along each connective path.
    for (const seg of this.roads) {
      const { d, t } = this.distToSeg(x, z, seg);
      const w = 1 - smoothstep(5, 11, d);
      if (w > 0.001) {
        const roadH = lerp(seg.ha, seg.hb, t);
        h = lerp(h, roadH, w * 0.9);
      }
    }

    // Island edge: fall away to the sea beyond the coast ring.
    const distCenter = Math.sqrt(x * x + z * z);
    const coast = MAP_RADIUS - 55;
    if (distCenter > coast) {
      const w = smoothstep(coast, MAP_RADIUS + 20, distCenter);
      h = lerp(h, WATER_LEVEL - 4, w);
    }

    return h;
  }

  getNormal(x: number, z: number, eps = 0.5): [number, number, number] {
    const hL = this.getHeight(x - eps, z);
    const hR = this.getHeight(x + eps, z);
    const hD = this.getHeight(x, z - eps);
    const hU = this.getHeight(x, z + eps);
    const nx = hL - hR;
    const nz = hD - hU;
    const ny = 2 * eps;
    const len = Math.sqrt(nx * nx + ny * ny + nz * nz);
    return [nx / len, ny / len, nz / len];
  }

  isRoad(x: number, z: number): boolean {
    for (const seg of this.roads) {
      if (this.distToSeg(x, z, seg).d < 9) return true;
    }
    return false;
  }

  isUnderwater(x: number, z: number): boolean {
    return this.getHeight(x, z) < WATER_LEVEL - 0.2;
  }
}

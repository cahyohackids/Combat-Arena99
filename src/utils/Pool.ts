/** Generic object pool to avoid per-frame GC churn (bullets, particles, decals). */
export class Pool<T> {
  private free: T[] = [];
  private active: Set<T> = new Set();
  private factory: () => T;
  private reset: (item: T) => void;

  constructor(factory: () => T, reset: (item: T) => void, prealloc = 0) {
    this.factory = factory;
    this.reset = reset;
    for (let i = 0; i < prealloc; i++) this.free.push(this.factory());
  }

  acquire(): T {
    const item = this.free.pop() ?? this.factory();
    this.active.add(item);
    return item;
  }

  release(item: T): void {
    if (!this.active.has(item)) return;
    this.active.delete(item);
    this.reset(item);
    this.free.push(item);
  }

  forEachActive(fn: (item: T) => void): void {
    this.active.forEach(fn);
  }

  get activeCount(): number {
    return this.active.size;
  }
}

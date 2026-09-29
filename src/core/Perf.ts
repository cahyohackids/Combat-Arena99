/** Rolling FPS tracker plus a simple adaptive-quality controller (drops particle/vegetation/shadow budgets when FPS sags). */
export class PerfMonitor {
  private samples: number[] = [];
  private maxSamples = 60;
  fps = 60;
  frameMs = 16.6;
  drawCalls = 0;
  triangles = 0;

  private lowFrameStreak = 0;
  private highFrameStreak = 0;
  qualityScale = 1.0; // 1.0 = full, decreases under load
  onQualityChange: ((scale: number) => void) | null = null;

  update(dt: number): void {
    const instFps = dt > 0 ? 1 / dt : 60;
    this.samples.push(instFps);
    if (this.samples.length > this.maxSamples) this.samples.shift();
    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length;
    this.fps = avg;
    this.frameMs = 1000 / Math.max(avg, 0.001);

    if (avg < 40) {
      this.lowFrameStreak++;
      this.highFrameStreak = 0;
    } else if (avg > 55) {
      this.highFrameStreak++;
      this.lowFrameStreak = 0;
    } else {
      this.lowFrameStreak = 0;
      this.highFrameStreak = 0;
    }

    if (this.lowFrameStreak > 90 && this.qualityScale > 0.4) {
      this.qualityScale = Math.max(0.4, this.qualityScale - 0.15);
      this.lowFrameStreak = 0;
      this.onQualityChange?.(this.qualityScale);
    } else if (this.highFrameStreak > 240 && this.qualityScale < 1.0) {
      this.qualityScale = Math.min(1.0, this.qualityScale + 0.1);
      this.highFrameStreak = 0;
      this.onQualityChange?.(this.qualityScale);
    }
  }
}

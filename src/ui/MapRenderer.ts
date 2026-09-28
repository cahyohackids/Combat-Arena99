import { LOCATIONS, MAP_RADIUS } from '@/world/Locations';
import { SignalCollapse } from '@/zone/SignalCollapse';

export interface MapDrawState {
  playerX: number;
  playerZ: number;
  playerYaw: number;
  zone: SignalCollapse;
  extraction: { x: number; z: number; active: boolean };
  showLocationLabels: boolean;
}

const LOCATION_COLORS: Record<string, string> = {
  village: '#8a7a5a',
  outpost: '#6b6b52',
  cedarHill: '#3f5a3a',
  northport: '#4a6270',
  quarry: '#6b5a4a',
  facility: '#5a5a58',
  wilds: '#4a5540',
};

/** Shared draw routine for both the corner minimap and the full-screen map (M). */
export function drawMap(ctx: CanvasRenderingContext2D, size: number, state: MapDrawState, zoomedOnPlayer: boolean): void {
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#12130f';
  ctx.fillRect(0, 0, size, size);

  const viewRadius = zoomedOnPlayer ? 130 : MAP_RADIUS + 20;
  const centerX = zoomedOnPlayer ? state.playerX : 0;
  const centerZ = zoomedOnPlayer ? state.playerZ : 0;
  const scale = (size / 2 - 6) / viewRadius;

  const toScreen = (x: number, z: number): [number, number] => [size / 2 + (x - centerX) * scale, size / 2 + (z - centerZ) * scale];

  // Island outline.
  ctx.strokeStyle = 'rgba(126,140,110,0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  const [ox, oz] = toScreen(0, 0);
  ctx.arc(ox, oz, MAP_RADIUS * scale, 0, Math.PI * 2);
  ctx.stroke();

  for (const loc of LOCATIONS) {
    const [x, z] = toScreen(loc.center[0], loc.center[1]);
    ctx.fillStyle = LOCATION_COLORS[loc.id] ?? '#555';
    ctx.beginPath();
    ctx.arc(x, z, Math.max(3, loc.radius * scale), 0, Math.PI * 2);
    ctx.fill();
    if (state.showLocationLabels) {
      ctx.fillStyle = 'rgba(231,226,211,0.85)';
      ctx.font = '11px Consolas, monospace';
      ctx.textAlign = 'center';
      ctx.fillText(loc.name.toUpperCase(), x, z - loc.radius * scale - 6);
    }
  }

  // Zone (current + boundary).
  const [zx, zz] = toScreen(state.zone.center.x, state.zone.center.y);
  ctx.strokeStyle = state.zone.stage === 'final' ? 'rgba(220,60,40,0.9)' : 'rgba(220,140,60,0.85)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(zx, zz, Math.max(1, state.zone.currentRadius * scale), 0, Math.PI * 2);
  ctx.stroke();

  if (state.zone.stage !== 'final') {
    const [nzx, nzz] = toScreen(state.zone.nextCenter.x, state.zone.nextCenter.y);
    ctx.strokeStyle = 'rgba(220,140,60,0.35)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(nzx, nzz, Math.max(1, state.zone.targetRadius * scale), 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Extraction marker.
  const [ex, ez] = toScreen(state.extraction.x, state.extraction.z);
  ctx.strokeStyle = state.extraction.active ? '#f0b361' : 'rgba(240,179,97,0.4)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(ex - 7, ez);
  ctx.lineTo(ex + 7, ez);
  ctx.moveTo(ex, ez - 7);
  ctx.lineTo(ex, ez + 7);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(ex, ez, 10, 0, Math.PI * 2);
  ctx.stroke();

  // Player marker (triangle pointing along yaw).
  const [px, pz] = toScreen(state.playerX, state.playerZ);
  ctx.save();
  ctx.translate(px, pz);
  ctx.rotate(state.playerYaw);
  ctx.fillStyle = '#f0b361';
  ctx.beginPath();
  ctx.moveTo(0, -8);
  ctx.lineTo(5, 6);
  ctx.lineTo(-5, 6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

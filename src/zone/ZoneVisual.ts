import * as THREE from 'three';
import { SignalCollapse } from './SignalCollapse';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  void main() {
    float edge = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y));
    float scan = sin(vUv.y * 40.0 - uTime * 1.5) * 0.5 + 0.5;
    float alpha = edge * (0.28 + scan * 0.18);
    gl_FragColor = vec4(uColor, alpha);
  }
`;

/** A translucent glowing wall marking the Signal Collapse boundary, visible from both sides. */
export class ZoneVisual {
  mesh: THREE.Mesh;
  private material: THREE.ShaderMaterial;

  constructor(scene: THREE.Scene) {
    const geo = new THREE.CylinderGeometry(1, 1, 60, 64, 1, true);
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(0xff5533) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.renderOrder = 5;
    scene.add(this.mesh);
  }

  update(dt: number, zone: SignalCollapse, elapsed: number, groundY: number): void {
    this.mesh.position.set(zone.center.x, groundY + 30, zone.center.y);
    this.mesh.scale.set(zone.currentRadius, 1, zone.currentRadius);
    this.material.uniforms.uTime.value = elapsed;
    const dangerColor = zone.stage === 'final' ? 0xff2a1f : 0xffa04a;
    (this.material.uniforms.uColor.value as THREE.Color).setHex(dangerColor);
    void dt;
  }
}

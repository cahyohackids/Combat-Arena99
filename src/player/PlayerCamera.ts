import * as THREE from 'three';
import { PlayerController } from './PlayerController';
import { damp, lerp } from '@/utils/MathUtils';

const HIP_DISTANCE = 3.6;
const AIM_DISTANCE = 1.5;
const HIP_SHOULDER_OFFSET = 0.55;
const AIM_SHOULDER_OFFSET = 0.42;
const HIP_HEIGHT_OFFSET = 0.25;
const HIP_FOV = 68;
const AIM_FOV_BASE = 52;

export class PlayerCamera {
  camera: THREE.PerspectiveCamera;
  private raycaster = new THREE.Raycaster();
  private currentDistance = HIP_DISTANCE;
  private currentShoulder = HIP_SHOULDER_OFFSET;
  private currentFov = HIP_FOV;
  private shakeTime = 0;
  private shakeMag = 0;
  shakeEnabled = true;
  private recoilPitch = 0;
  private recoilYaw = 0;

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
  }

  addRecoil(pitch: number, yaw: number): void {
    this.recoilPitch += pitch;
    this.recoilYaw += yaw;
  }

  addShake(magnitude: number, duration: number): void {
    if (!this.shakeEnabled) return;
    this.shakeMag = Math.max(this.shakeMag, magnitude);
    this.shakeTime = Math.max(this.shakeTime, duration);
  }

  /**
   * Recoil is a temporary camera-space offset on top of the player's mouse-controlled yaw/pitch —
   * it kicks the view on fire and springs back, so the player counters it by pulling the mouse down
   * (which changes the underlying player.pitch), exactly like controllable weapon recoil should feel.
   */
  update(dt: number, player: PlayerController, raycastTargets: THREE.Object3D[], zoomMultiplier: number): void {
    this.recoilPitch = damp(this.recoilPitch, 0, 9, dt);
    this.recoilYaw = damp(this.recoilYaw, 0, 6, dt);

    const targetDistance = player.aiming ? AIM_DISTANCE : HIP_DISTANCE;
    const targetShoulder = player.aiming ? AIM_SHOULDER_OFFSET : HIP_SHOULDER_OFFSET;
    const targetFov = player.aiming ? AIM_FOV_BASE * zoomMultiplier : HIP_FOV;

    this.currentDistance = damp(this.currentDistance, targetDistance, 14, dt);
    this.currentShoulder = damp(this.currentShoulder, targetShoulder, 14, dt);
    this.currentFov = damp(this.currentFov, targetFov, 12, dt);

    const pivot = player.eyePosition.clone();
    pivot.y += HIP_HEIGHT_OFFSET * (player.aiming ? 0.4 : 1);

    const yaw = player.yaw + this.recoilYaw;
    const pitch = player.pitch + this.recoilPitch;

    const forward = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));

    const desired = pivot.clone().addScaledVector(forward, -this.currentDistance).addScaledVector(right, this.currentShoulder);
    desired.y += this.currentDistance * 0.12;

    // Camera collision: sweep from pivot to desired position, pull in if blocked by geometry.
    const toDesired = desired.clone().sub(pivot);
    const dist = toDesired.length();
    let finalDist = dist;
    if (dist > 0.01) {
      this.raycaster.set(pivot, toDesired.clone().normalize());
      this.raycaster.far = dist;
      this.raycaster.near = 0.05;
      const hits = this.raycaster.intersectObjects(raycastTargets, false);
      if (hits.length > 0) {
        finalDist = Math.max(0.3, hits[0].distance - 0.25);
      }
    }
    const finalPos = pivot.clone().addScaledVector(toDesired.normalize(), finalDist);

    let shakeOffsetX = 0;
    let shakeOffsetY = 0;
    if (this.shakeTime > 0) {
      const decay = this.shakeTime;
      shakeOffsetX = (Math.random() - 0.5) * this.shakeMag * decay;
      shakeOffsetY = (Math.random() - 0.5) * this.shakeMag * decay;
      this.shakeTime = Math.max(0, this.shakeTime - dt);
      if (this.shakeTime === 0) this.shakeMag = 0;
    }

    this.camera.position.set(finalPos.x + shakeOffsetX, finalPos.y + shakeOffsetY, finalPos.z);
    const lookTarget = pivot.clone().addScaledVector(forward, 20);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(lookTarget);
    this.camera.fov = lerp(this.camera.fov, this.currentFov, Math.min(1, dt * 14));
    this.camera.updateProjectionMatrix();
  }

  getAimRay(player: PlayerController): THREE.Ray {
    const yaw = player.yaw + this.recoilYaw;
    const pitch = player.pitch + this.recoilPitch;
    const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    return new THREE.Ray(this.camera.position.clone(), dir.normalize());
  }
}

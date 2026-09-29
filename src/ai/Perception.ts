import * as THREE from 'three';
import { ColliderRegistry } from '@/world/Colliders';
import { ThrowableSystem } from '@/weapons/Throwables';

const raycaster = new THREE.Raycaster();

export interface VisionCheckParams {
  eyePos: THREE.Vector3;
  forwardYaw: number;
  fov: number;
  range: number;
  targetPos: THREE.Vector3;
  colliders: ColliderRegistry;
  throwables: ThrowableSystem;
  selfMeshes?: THREE.Object3D[];
}

export function canPerceiveTarget(params: VisionCheckParams): boolean {
  const { eyePos, forwardYaw, fov, range, targetPos, colliders, throwables } = params;
  const toTarget = targetPos.clone().sub(eyePos);
  const dist = toTarget.length();
  if (dist > range) return false;

  const forward = new THREE.Vector3(Math.sin(forwardYaw), 0, Math.cos(forwardYaw));
  const flatToTarget = new THREE.Vector3(toTarget.x, 0, toTarget.z).normalize();
  const angle = forward.angleTo(flatToTarget);
  if (angle > fov / 2) return false;

  if (throwables.segmentBlockedBySmoke(eyePos, targetPos)) return false;

  raycaster.set(eyePos, toTarget.normalize());
  raycaster.far = dist - 0.2;
  raycaster.near = 0.05;
  const hits = raycaster.intersectObjects(colliders.raycastMeshes, false);
  if (hits.length > 0) return false;

  return true;
}

export interface HearingEvent {
  position: THREE.Vector3;
  loudness: number; // effective radius in meters
}

export function canHear(listenerPos: THREE.Vector3, event: HearingEvent, hearingRangeMult = 1): boolean {
  return listenerPos.distanceTo(event.position) <= event.loudness * hearingRangeMult;
}

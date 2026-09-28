import * as THREE from 'three';
import { InputManager } from '@/core/InputManager';
import { World } from '@/world/World';
import { clamp, clamp01, damp } from '@/utils/MathUtils';

export type Stance = 'stand' | 'crouch';
export type Surface = 'grass' | 'concrete' | 'metal' | 'wood' | 'rock' | 'sand';

const EYE_HEIGHT_STAND = 1.68;
const EYE_HEIGHT_CROUCH = 1.05;
const RADIUS = 0.4;
const GRAVITY = -22;
const JUMP_SPEED = 6.6;

const WALK_SPEED = 4.4;
const SPRINT_SPEED = 7.6;
const CROUCH_SPEED = 2.4;
const AIM_SPEED = 2.6;
const ACCEL = 26;
const AIR_ACCEL = 8;

export class PlayerController {
  position = new THREE.Vector3(0, 0, 0);
  velocity = new THREE.Vector3();
  yaw = 0;
  pitch = 0;
  grounded = true;
  stance: Stance = 'stand';
  sprinting = false;
  aiming = false;
  stamina = 100;
  maxStamina = 100;
  health = 100;
  distanceTraveled = 0;
  private groundY = 0;
  private lastFootstepDist = 0;
  private timeSinceLand = 0;
  private noclip = false;

  onFootstep: ((surface: Surface, sprinting: boolean) => void) | null = null;
  moveInputBlocked = false;

  constructor(
    private world: World,
    private input: InputManager,
  ) {}

  get eyeHeight(): number {
    return this.stance === 'crouch' ? EYE_HEIGHT_CROUCH : EYE_HEIGHT_STAND;
  }

  get eyePosition(): THREE.Vector3 {
    return new THREE.Vector3(this.position.x, this.position.y + this.eyeHeight, this.position.z);
  }

  get speedFraction(): number {
    const horiz = Math.hypot(this.velocity.x, this.velocity.z);
    return clamp01(horiz / SPRINT_SPEED);
  }

  get currentSurface(): Surface {
    const loc = this.groundLocationHint();
    return loc;
  }

  private groundLocationHint(): Surface {
    if (this.world.hf.isRoad(this.position.x, this.position.z)) return 'concrete';
    const loc = this.world.pois.find((p) => Math.hypot(p.x - this.position.x, p.z - this.position.z) < 60);
    if (loc?.id === 'facility' || loc?.id === 'outpost') return 'concrete';
    if (loc?.id === 'quarry') return 'rock';
    if (loc?.id === 'northport') return 'metal';
    return 'grass';
  }

  teleport(x: number, z: number): void {
    this.position.set(x, this.world.heightAt(x, z), z);
    this.velocity.set(0, 0, 0);
  }

  setLookDelta(dx: number, dy: number, sensitivity: number, invertY: boolean): void {
    this.yaw -= dx * 0.0022 * sensitivity;
    const dir = invertY ? -1 : 1;
    this.pitch -= dy * 0.0022 * sensitivity * dir;
    this.pitch = clamp(this.pitch, -1.3, 1.3);
  }

  update(dt: number, canSprint: boolean): void {
    const input = this.input;
    const wantCrouch = input.isDown('KeyC') || input.isDown('ControlLeft');
    this.stance = wantCrouch ? 'crouch' : 'stand';

    let moveX = 0;
    let moveZ = 0;
    if (!this.moveInputBlocked) {
      if (input.isDown('KeyW')) moveZ += 1;
      if (input.isDown('KeyS')) moveZ -= 1;
      if (input.isDown('KeyD')) moveX += 1;
      if (input.isDown('KeyA')) moveX -= 1;
    }
    const hasInput = moveX !== 0 || moveZ !== 0;

    const wantSprint = input.isDown('ShiftLeft') && hasInput && moveZ > 0 && !this.aiming && canSprint;
    this.sprinting = wantSprint && this.stamina > 1;

    if (this.sprinting) {
      this.stamina = Math.max(0, this.stamina - dt * 18);
    } else {
      const regenRate = this.stance === 'crouch' ? 14 : 10;
      this.stamina = Math.min(this.maxStamina, this.stamina + dt * regenRate);
    }

    let targetSpeed = WALK_SPEED;
    if (this.stance === 'crouch') targetSpeed = CROUCH_SPEED;
    else if (this.aiming) targetSpeed = AIM_SPEED;
    else if (this.sprinting) targetSpeed = SPRINT_SPEED;

    const len = Math.hypot(moveX, moveZ) || 1;
    moveX /= len;
    moveZ /= len;

    const sinY = Math.sin(this.yaw);
    const cosY = Math.cos(this.yaw);
    const worldX = moveX * cosY + moveZ * sinY;
    const worldZ = -moveX * sinY + moveZ * cosY;

    const desiredVX = hasInput ? worldX * targetSpeed : 0;
    const desiredVZ = hasInput ? worldZ * targetSpeed : 0;
    const accel = this.grounded ? ACCEL : AIR_ACCEL;
    const t = clamp01(accel * dt);
    this.velocity.x = damp(this.velocity.x, desiredVX, accel, dt) * 1;
    this.velocity.z = damp(this.velocity.z, desiredVZ, accel, dt) * 1;
    void t;

    if (this.grounded && input.wasPressed('Space') && this.stance !== 'crouch') {
      this.velocity.y = JUMP_SPEED;
      this.grounded = false;
    }

    this.velocity.y += GRAVITY * dt;

    let nx = this.position.x + this.velocity.x * dt;
    let nz = this.position.z + this.velocity.z * dt;
    let ny = this.position.y + this.velocity.y * dt;

    if (!this.noclip) {
      [nx, nz] = this.world.colliders.resolve(nx, nz, ny, RADIUS, this.eyeHeight);
      [nx, nz] = this.world.clampToBounds(nx, nz);
    }

    this.groundY = this.world.heightAt(nx, nz);
    if (ny <= this.groundY) {
      ny = this.groundY;
      if (this.velocity.y < 0) this.velocity.y = 0;
      if (!this.grounded) this.timeSinceLand = 0;
      this.grounded = true;
    } else {
      this.grounded = false;
      this.timeSinceLand += dt;
    }

    const moved = Math.hypot(nx - this.position.x, nz - this.position.z);
    this.distanceTraveled += moved;
    this.position.set(nx, ny, nz);

    if (this.grounded && hasInput) {
      this.lastFootstepDist += moved;
      const stepDist = this.sprinting ? 3.2 : this.stance === 'crouch' ? 5.5 : 4.2;
      if (this.lastFootstepDist > stepDist) {
        this.lastFootstepDist = 0;
        this.onFootstep?.(this.currentSurface, this.sprinting);
      }
    }
  }
}

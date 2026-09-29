export interface InputSettings {
  sensitivity: number;
  aimSensitivity: number;
  invertY: boolean;
}

/** Centralizes keyboard/mouse state. Systems poll this each frame rather than attaching their own listeners. */
export class InputManager {
  private keys = new Set<string>();
  private keysPressed = new Set<string>();
  private keysReleased = new Set<string>();
  mouseDX = 0;
  mouseDY = 0;
  mouseButtons = new Set<number>();
  mouseButtonsPressed = new Set<number>();
  mouseButtonsReleased = new Set<number>();
  wheelDelta = 0;
  pointerLocked = false;
  settings: InputSettings = { sensitivity: 1.0, aimSensitivity: 0.6, invertY: false };
  enabled = true;

  private target: HTMLElement;

  constructor(target: HTMLElement) {
    this.target = target;
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    target.addEventListener('mousedown', this.onMouseDown);
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onMouseMove);
    target.addEventListener('wheel', this.onWheel, { passive: true });
    target.addEventListener('click', this.requestLock);
    document.addEventListener('pointerlockchange', this.onLockChange);
    window.addEventListener('blur', this.clearAll);
    target.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  private requestLock = () => {
    if (this.enabled && !this.pointerLocked) {
      this.target.requestPointerLock();
    }
  };

  private onLockChange = () => {
    this.pointerLocked = document.pointerLockElement === this.target;
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (!this.enabled) return;
    const code = e.code;
    if (!this.keys.has(code)) this.keysPressed.add(code);
    this.keys.add(code);
    if (['Space', 'Tab'].includes(code)) e.preventDefault();
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
    this.keysReleased.add(e.code);
  };

  private onMouseDown = (e: MouseEvent) => {
    if (!this.enabled) return;
    this.mouseButtons.add(e.button);
    this.mouseButtonsPressed.add(e.button);
  };

  private onMouseUp = (e: MouseEvent) => {
    this.mouseButtons.delete(e.button);
    this.mouseButtonsReleased.add(e.button);
  };

  private onMouseMove = (e: MouseEvent) => {
    if (!this.enabled || !this.pointerLocked) return;
    this.mouseDX += e.movementX;
    this.mouseDY += e.movementY;
  };

  private onWheel = (e: WheelEvent) => {
    if (!this.enabled) return;
    this.wheelDelta += Math.sign(e.deltaY);
  };

  private clearAll = () => {
    this.keys.clear();
  };

  isDown(code: string): boolean {
    return this.keys.has(code);
  }

  wasPressed(code: string): boolean {
    return this.keysPressed.has(code);
  }

  wasReleased(code: string): boolean {
    return this.keysReleased.has(code);
  }

  isMouseDown(button: number): boolean {
    return this.mouseButtons.has(button);
  }

  wasMousePressed(button: number): boolean {
    return this.mouseButtonsPressed.has(button);
  }

  /** Call once per frame after all systems have polled this-frame edge events. */
  endFrame(): void {
    this.keysPressed.clear();
    this.keysReleased.clear();
    this.mouseButtonsPressed.clear();
    this.mouseButtonsReleased.clear();
    this.mouseDX = 0;
    this.mouseDY = 0;
    this.wheelDelta = 0;
  }

  exitPointerLock(): void {
    if (document.pointerLockElement) document.exitPointerLock();
  }
}

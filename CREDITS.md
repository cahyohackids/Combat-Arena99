# Credits

## Third-party assets

**None.** Every visual and audio asset in this project — terrain, buildings, props, vegetation,
characters, weapons, particle effects, and all sound effects/music — is generated procedurally in
TypeScript at build/runtime. No models, textures, fonts, or audio files are imported from external
sources.

- Geometry: built from Three.js primitive geometries (`BoxGeometry`, `CapsuleGeometry`,
  `CylinderGeometry`, `IcosahedronGeometry`, `ConeGeometry`, `SphereGeometry`, `PlaneGeometry`)
  combined into procedural structures (`src/world/structures/Primitives.ts`,
  `src/characters/CharacterModel.ts`, `src/weapons/WeaponModels.ts`).
- Terrain height/color: analytic Perlin-style noise (`src/utils/Noise.ts`, own implementation) plus
  hand-authored vertex coloring — no heightmap images.
- Textures: none used for terrain/props (vertex-colored materials only). The one procedural
  soft-gradient texture (used for smoke canister sprites) is generated at runtime on an in-memory
  `<canvas>` (`src/weapons/Throwables.ts`), not loaded from a file.
- Audio: every sound effect and the ambient music bed are synthesized at load time via the Web Audio
  API (oscillators, filtered noise, `OfflineAudioContext` rendering) in `src/audio/SoundSynth.ts`. No
  `.wav`/`.mp3`/`.ogg` files are bundled.
- Fonts: system/web-safe fonts only (`Segoe UI`, `Consolas`, `Menlo`, `Courier New`, and generic
  `sans-serif`/`monospace` fallbacks) via CSS `font-family` stacks — no font files are bundled.

## Libraries

- [Three.js](https://threejs.org/) (MIT License) — 3D rendering, including the `EffectComposer`,
  `RenderPass`, `ShaderPass`, and `OutputPass` post-processing examples modules.
- [Vite](https://vitejs.dev/) (MIT License) — build tooling only, not shipped in the runtime bundle.
- [TypeScript](https://www.typescriptlang.org/) (Apache-2.0 License) — build tooling only.

No other runtime dependencies are used.

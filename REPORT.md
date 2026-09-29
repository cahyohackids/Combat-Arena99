# REPORT — LAST SECTOR: Operation Blackridge

Written last, honestly. This documents what's complete, what's partial, known bugs, how the build was
tested, and what I'd do next with more time.

## What's complete

**Full game loop.** Main menu → loadout (4 classes) → deploy → explore/loot across 6 named locations →
combat → Signal Collapse shrinking through 4 phases → final-phase extraction hold (22s, contested by
nearby living enemies) → Mission Complete/Failed results screen with real stats → Retry or Main Menu.
Verified end-to-end multiple times, including a clean extraction success and a combat death, both
producing correct stats and a working Retry that starts a fresh seeded match.

**World.** A ~800m island built from one analytic heightfield (`HeightField.ts`) shared by the visual
terrain mesh, player/AI movement, and the AI navigation grid, so they can't disagree. Six locations
(village, fortified outpost, forested hill, docks, quarry pit, concrete research facility) each with
distinct hand-authored structures, environmental props (wrecked vehicles, sandbags, fences, cranes,
antennas), instanced vegetation (trees/rocks/grass), a shrinking-zone visual wall, and a full day-arc
lighting rig (golden hour → overcast evening) with fog. Player/enemy spawns and loot placement are
seed-randomized per match.

**Player.** Third-person over-the-shoulder camera with camera-collision raycasting and ADS zoom,
accelerated movement with sprint/crouch/stamina, a procedural low-poly humanoid rig shared with every
enemy archetype, and full mouse-look (see **Bugs found and fixed** below — this was broken until late
in development and is now verified working).

**Combat.** Six weapons (RAVEN/VEX/SENTINEL/BREACH/LONGBOW/SIDEWINDER) with distinct damage, fire
rate, spread, recoil, range falloff, and reload timing; shotgun pellet patterns; headshot multipliers;
per-part hit detection (head/torso/limb) shared identically between player and AI fire; pooled tracers,
muzzle flashes, and per-surface impact particles/decals; frag and smoke throwables (smoke genuinely
blocks AI line-of-sight). Verified with a scripted precise-aim test: 8/8 shots landed, dealt the
expected per-shot damage, and correctly triggered a kill event when health reached 0.

**Enemy AI.** Explicit per-enemy state machine (idle/patrol/investigate/search/combat/take
cover/flank/retreat/dead) over a vision-cone + line-of-sight perception system and hearing radius for
gunfire/explosions, running on a coarse-grid A* pathfinder built from the same collision data as the
visual world. Squads share a blackboard (last known player position, alert level, one claimed
flanker, claimed cover slots) so members spread out. Accuracy scales with distance/archetype/target
movement with a reaction delay and aim-in period. Verified: an idle enemy transitions to combat when
it perceives the player, fires back, and can kill the player; the resulting match-end fires correctly.
5 archetypes (Scout/Rifleman/Guard/Marksman/Heavy) are implemented per spec with distinct stats/weapons.

**Loot & inventory.** World pickups with rarity-tinted markers and a live nearest-item prompt; a
tactical inventory (Tab) showing both weapon slots, sidearm, armor, healing, throwables, and ammo
pools by type; ammo is a shared pool per type (light/medium/heavy/shells/precision) that any equipped
weapon of that type draws from on reload, matching how the loot table drops ammo.

**Zone & extraction, UI, audio, settings** — see the corresponding MUST-have sections; all present and
wired: 4-phase shrinking zone with warnings, minimap + full map (never showing enemies), compass,
extraction hold banner; every listed screen (loading, menu, loadout, pause, settings, how-to-play,
results, inventory, map, mobile gate); settings for graphics preset/resolution scale/shadow
quality/vegetation density/post-processing, master/SFX/music volume, mouse & **aim** sensitivity,
invert Y, camera shake, reduced motion, and high-contrast prompts, all persisted to `localStorage`
(with an in-memory fallback if storage is unavailable) and all actually changing behavior — not just
stored values (see below, this needed a real fix). All audio is synthesized in code (oscillators +
filtered noise via `OfflineAudioContext`); positional playback via `THREE.PositionalAudio`.

## Bugs found and fixed during testing (worth being explicit about)

Real playtesting — not just code review — surfaced several serious issues that would have shipped
broken. In order of severity:

1. **Mouse-look was never wired up.** `PlayerController.setLookDelta()` existed and was correct, but
   nothing ever called it. The player could never turn the camera. This is about as critical as a bug
   gets for this genre and was only caught by scripting an actual input simulation rather than trusting
   the code path existed. Fixed by wiring `InputManager`'s accumulated mouse delta into
   `PlayerController` every frame in `PlayerWeaponController.preMovementUpdate`, with separate
   hip-fire/ADS sensitivity (the `aimSensitivity` setting had the same problem — defined and shown in
   Settings, never consumed anywhere — now wired through `InputManager.settings.aimSensitivity`).
2. **`InputManager.endFrame()` was never called.** Pressed-key and pressed-mouse-button state never
   cleared, so `wasPressed()` stayed true indefinitely after the first press. This made `Tab`/`M`
   effectively toggle every frame (visually it looked like the key "didn't work" — it was actually
   toggling 20+ times a second). Fixed by calling it once per frame in the main loop.
3. **Opening Map/Inventory could permanently soft-lock input.** The overlay-open state disabled
   `InputManager` entirely, including the *closing* key press, so once opened there was no way to
   close it. Fixed by keeping input capture always on and only gating movement/fire/camera update
   behind the overlay flag.
4. **The HUD map canvas never redrew while open**, because the whole HUD update (including map/minimap
   drawing) was nested inside the same "skip while overlay is open" block that also skips gameplay
   simulation — the canvas froze on whatever was drawn (usually nothing) before the map opened. Fixed
   by always refreshing the HUD/map every frame, independent of whether gameplay is paused for a menu.
5. **A severe, hard-to-diagnose double color-space bug** made every hex-colored `material.color`
   (i.e. every character, weapon, and prop — anything not using raw vertex colors) render almost black
   regardless of scene light intensity, while vertex-colored terrain looked fine. Root cause: the
   custom post-processing `ShaderPass` was the final pass writing to the screen, but with modern
   Three.js's per-object tone-mapping/color-space shader chunks baking sRGB encoding into whatever
   target they're rendered to (including the composer's intermediate buffer), the color got encoded
   once by the scene pass and effectively re-processed by the final custom pass with no compensating
   decode. Fixed by adding a proper `OutputPass` as the last composer pass (the documented Three.js
   pattern for exactly this) and re-tuning light intensities down to sane values afterward. Diagnosed
   by bisecting with a solid-red test material (proved lighting/material state was correct) and a
   `MeshBasicMaterial` swap (proved the darkening was pipeline-wide, not per-material), not by
   guesswork.
6. **`renderer.info` draw-call/triangle counts on the F3 debug overlay were meaningless** (always
   reporting ~1 draw call) because `EffectComposer` issues several internal `renderer.render()` calls
   per frame and `info.autoReset` (default on) wiped the count between passes. Fixed by disabling
   autoReset and resetting once per frame in `Engine.render()`; the overlay now reports real
   scene-wide totals (~290 draw calls / ~290K triangles in a typical view).
7. **Positional footstep audio and the directional hit indicator were fully implemented but never
   connected** — `PlayerController.onFootstep` had no listener assigned, and the `.hit-dir-indicator`
   CSS existed with no code ever touching it. Both wired up in this pass (footsteps now emit
   `player:footstep` for the audio system; taking damage now computes the attacker's bearing relative
   to the player and shows the on-screen directional arrow).
8. Minor: starting inventory counts were inflated by one flat "always start with a spare" default
   layered underneath the selected loadout's own bandage/frag/smoke counts. Fixed.
9. Enemy count in the six hand-authored locations totaled 26 before trimming (over the 12–24 spec
   range); trimmed outpost tower guards and the open-world "wilds" patrols down to land at 22.
10. Player spawn points could land on steep slopes or partly underwater near the coastline; spawn
    selection now rejects candidates by slope/underwater/collision before accepting them.

I'm flagging these explicitly rather than quietly fixing them because #1, #2, #3, and #5 would each
independently have made the submitted build read as broken or unplayable to a fresh player, despite
the surrounding code being otherwise correct — they were only found by actually driving the game
end-to-end (scripted input simulation + pixel sampling of screenshots), not by reading the code.

## How this was tested

No local display is available in this environment, so testing was done with a headless Chromium
(bundled `chromium-1194`, software/SwiftShader-rendered — see performance caveat below) driven by
Playwright:

- Built with `npm run build`, then served `./dist` from a **nested sub-folder** of a plain Python
  static file server (`/sub/dist/`) to confirm the relative-path build works exactly the way the
  hosting requirement describes.
- Automated the full flow — menu → loadout selection (all 4 classes) → deploy → movement input →
  aiming/firing → reload → inventory (Tab) → map (M) → pause/resume (Esc) → settings (graphics preset,
  a slider) → death → results → Retry — capturing screenshots and console/page-error logs at each step.
- Verified combat correctness directly: teleported the player next to a live enemy, fired with a
  continuously-recomputed precise aim (simulating a player tracking with the mouse), and confirmed
  per-shot damage, headshot/armor math, and the kill event all fired correctly.
- Verified AI reactivity and lethality by fast-forwarding simulation time (calling the match's update
  function directly with fixed timesteps, bypassing real-time rendering) to get an idle enemy through
  perception → combat → a kill in a few seconds of *game* time.
- Verified the zone/extraction state machine in isolation (forcing final phase, teleporting to the
  extraction point, clearing nearby enemies) to confirm the 22-second hold completes and emits
  `extraction:success` with correct bonus stats.
- Sampled raw pixel colors from screenshots (via PIL) to diagnose the lighting bug quantitatively
  rather than by eye.
- Spot-checked all 6 named locations visually for structure placement and lighting.

**Resolutions checked:** 1366×768 primarily (all screenshots above), plus a visual pass at the CSS
breakpoints for the mobile gate. I did not get a real 1920×1080 pixel-level check in this environment,
though the layout uses relative/flex positioning throughout and the HUD was designed against both
target resolutions from the CSS side.

**Performance caveat (important):** this container's Chromium falls back to software rendering
(SwiftShader) with no real GPU — the "Automatic fallback to software WebGL" warning appears in every
session. In that environment, game time visibly runs at a fraction of real time (e.g. ~6 real seconds
elapsed only ~1.5 in-game seconds during one measured stretch) and F3 reports ~15-25 FPS. That number
is **not representative of the target desktop hardware** — it reflects an unaccelerated software
rasterizer running a scene designed for a real GPU. I could not get a genuine "60 FPS on a mid-range
desktop" measurement in this sandbox. What I *can* verify and did fix for real: draw-call/triangle
counts are sane (~290 calls / ~290K triangles with terrain + instanced vegetation + ~22 characters +
all location props in view), vegetation and characters are instanced/pooled rather than one-mesh-per-
blade, shadow map resolution is capped, and the low/medium/high graphics presets and adaptive
`PerfMonitor` quality scaler are wired and don't crash — but the actual frame-rate claim is unverified
on real hardware and should be treated as a design target backed by reasonable engineering choices,
not a measured result.

## Known bugs / limitations

- **No real 60/30 FPS measurement**, per the caveat above — this is the single biggest gap in the QA
  pass, purely due to the environment, not something I could additionally engineer around from inside
  it.
- **Vaulting is simplified to a jump.** Space performs a normal jump; there's no distinct low-obstacle
  vault detection/animation.
- **No true skeletal animation rig.** The shared player/enemy character model is a procedural
  parametric rig (named joint pivots rotated by hand-written formulas based on move speed/aim/crouch
  state), not an imported skinned mesh with animation clips. It reads correctly at a glance
  (walk cycle, aim raise, crouch, death collapse) but has none of the secondary motion a baked
  animation would have.
- **Hitscan, not simulated ballistics.** All six weapons are hitscan with a cosmetic tracer flying at
  the weapon's configured bullet speed after the fact; there's no real projectile drop/travel-time
  simulation (the brief explicitly allows either).
- **1920×1080 was not pixel-checked** in this session (see testing section) — the CSS is written to
  scale, but I'd want a real check there before calling it fully verified.
- **Enemy footstep audio is not wired** (only the player's are) — enemies are otherwise fully audible
  via gunfire.
- Weather variation (stretch goal) and leaning/sliding/attachments (stretch goals) are **not
  implemented** — MUST-have systems took priority per the brief's own ordering, and time went instead
  into finding and fixing the bugs listed above.
- Underground sections at Echo Facility (stretch goal) are **not implemented**.
- No vehicles (stretch goal) — correctly skipped per the brief ("a broken vehicle is worse than none"
  and it was never going to get enough polish time to be worth the risk).

## What I'd do next with more time

1. Get this in front of a real GPU and actually tune the adaptive quality thresholds and shadow/
   vegetation budgets against measured frame time, rather than engineering-judgment defaults.
2. Record a proper skinned/animated rig (or at minimum a richer set of procedural pose blends —
   strafing, turning-in-place, aim-direction-driven spine twist) since the current rig is functional
   but visibly simple next to the rest of the presentation.
3. Add a distinct vault animation/traversal check for low obstacles.
4. Wire enemy footsteps and a couple of ambient one-shots (distant gunfire, wildlife) for extra
   atmosphere.
5. A longer multi-session human playtest pass on real hardware to tune weapon TTK, AI aggression
   pacing, and zone timings for feel rather than by formula.

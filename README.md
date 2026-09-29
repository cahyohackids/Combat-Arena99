# LAST SECTOR — Operation Blackridge

A single-player, third-person, extraction/battle-royale-lite tactical shooter that runs entirely in a
desktop browser. Deploy onto Blackridge Island, loot six distinct locations, fight autonomous combat
units and rogue mercenary squads, survive the shrinking **Signal Collapse**, and hold the extraction
point to complete the mission.

Everything — terrain, buildings, characters, weapons, particles, and audio — is generated procedurally
in code at runtime. There are no external art or sound assets (see `CREDITS.md`).

## Build & Run

```bash
npm install
npm run build      # type-checks then builds ./dist
npm run dev         # local dev server with hot reload
npm run preview     # preview the production build
```

The production build in `./dist` is fully static and relative-pathed (`base: './'` in
`vite.config.ts`), so it can be served from any sub-folder of a static web host, e.g.
`https://host/arena/your-model/`. It has been verified by serving `./dist` from a nested
sub-directory with a plain static file server and playing a full match from that build.

No backend, no CDN scripts, no network requests at runtime. Everything needed to play is inside
`./dist`.

## Controls

| Action | Key/Mouse |
|---|---|
| Move | `WASD` |
| Look | Mouse |
| Sprint | `Shift` (hold, moving forward) |
| Crouch | `C` / `Ctrl` |
| Jump | `Space` |
| Aim | Right mouse button (hold) |
| Fire | Left mouse button |
| Reload | `R` |
| Interact / Pick up loot | `F` |
| Switch to Primary 1 / 2 | `1` / `2` |
| Switch to Sidearm | `3` |
| Use heal item | `4` (medkit if health is low and available, else bandage) |
| Throw grenade | `G` (frag if carried, else smoke) |
| Inventory | `Tab` |
| Map | `M` |
| Pause | `Esc` |
| Debug overlay (FPS, position, draw calls) | `F3` |

## Design Overview

**Tech stack:** TypeScript + Three.js (raw, no framework), Vite for bundling. No React — all game
state and rendering live in plain TypeScript classes so the update loop stays a single, predictable
tick with no virtual-DOM overhead. The HUD and menus are plain DOM/CSS driven by a small `UIManager`
and `HUD` class.

**World:** A ~800m-diameter procedural island (`src/world/`). Terrain height comes from a single
analytic function (`HeightField`) combining layered Perlin-style noise with per-location shaping
(dome for the hill, pit for the quarry, flattened pads for the village/outpost/facility) and road
flattening — the same function drives the visual terrain mesh, player/AI movement, and navigation, so
they can never disagree. Six locations (Blackridge Village, Argo Outpost, Cedar Hill, Northport,
Redstone Quarry, Echo Research Facility) are populated with hand-authored procedural structure
generators (`src/world/structures/`, `LocationBuilders.ts`) built from shared primitives (houses,
containers, watchtowers, cranes, sandbag walls, etc.), all instanced/pooled where repeated (trees,
rocks, grass) for performance.

**Player:** Third-person over-the-shoulder camera with camera-collision raycasting, ADS zoom/shoulder
swap, accel/decel movement with sprint/crouch/stamina, and a procedural low-poly humanoid rig (shared
by the player and every enemy archetype) with a simple walk/aim pose system — no imported skeletal
animation, just parametric joint rotation driven by movement state.

**Combat:** Six hitscan weapons with per-weapon spread, recoil (vertical kick + horizontal jitter,
recoils toward center), range-based damage falloff, and shotgun pellet patterns. Recoil is applied as
a camera-space offset on top of the player's own mouse-controlled aim, so it's genuinely controllable.
Hit detection resolves through a shared `CombatantRegistry` mapping hitbox meshes (head/torso/limb)
back to whichever combatant owns them, used identically for the player and every enemy.

**AI:** Each enemy runs an explicit state machine (idle → patrol → investigate → search → combat →
takeCover / flank / retreat → dead) driven by a perception system (vision cone + line-of-sight raycast,
hearing radius for gunfire/explosions/sprinting) and a coarse-grid A* pathfinder built from the same
heightfield/collider data as the visual world. Squads share a blackboard (last known player position,
alert level, one claimed flanker, claimed cover slots) so members spread out rather than mirror each
other. Accuracy is a function of distance, archetype, and target movement, with a reaction delay and
aim-in period before the first shot — enemies miss, reposition, and occasionally retreat.

**Zone & extraction:** `SignalCollapse` drives four shrinking phases toward a fixed extraction point
that's biased into the zone's drift from the start, culminating in a final phase where the player must
hold a 22-second extraction timer while nearby living enemies contest it.

**Performance:** Instanced meshes for vegetation, pooled particles/decals/tracers, a single terrain
draw call, capped shadow resolution/range, and a simple FPS-driven quality scaler in `PerfMonitor`.
Graphics/shadow/vegetation presets and resolution scale are all live-adjustable from Settings.

## Known simplifications

See `REPORT.md` for a full, honest accounting of what's complete, partial, or a deliberate
simplification (e.g. no full skeletal animation rig, hitscan rather than simulated ballistics,
capsule-based melee-less character collision).

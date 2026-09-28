import { Game } from '@/game/Game';

const gate = document.getElementById('mobile-gate')!;
gate.innerHTML = `
  <h1>LAST SECTOR</h1>
  <p>Operation Blackridge is built for desktop browsers with a mouse and keyboard.
  Please open this page on a desktop or laptop computer for the full tactical experience.</p>
`;

function isLikelyDesktop(): boolean {
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  const wideEnough = window.innerWidth >= 900;
  return hasFinePointer && wideEnough;
}

// The CSS media query is the real gate (and reacts live to resizes); this just avoids booting
// the whole engine on a device that will never be able to show it.
if (isLikelyDesktop()) {
  const viewport = document.getElementById('viewport')!;
  const uiRoot = document.getElementById('ui-root')!;
  new Game(viewport, uiRoot);
}

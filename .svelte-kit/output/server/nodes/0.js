import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.C-9AHtvf.js","_app/immutable/chunks/DmecV4vw.js","_app/immutable/chunks/nEIbVtXC.js","_app/immutable/chunks/DAipmHfo.js","_app/immutable/chunks/ClhI55qv.js","_app/immutable/chunks/DqVQR1WT.js","_app/immutable/chunks/DRzpx-TX.js","_app/immutable/chunks/CMZp4Yo2.js","_app/immutable/chunks/D_bOthvZ.js","_app/immutable/chunks/D9Kol3Ar.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/C_4_zmw1.js","_app/immutable/chunks/B_vp2gQy.js","_app/immutable/chunks/DSNnYFS9.js","_app/immutable/chunks/BEhmXOIg.js","_app/immutable/chunks/gKXUJbX4.js","_app/immutable/chunks/C08p5muZ.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.B2MM276h.css","_app/immutable/assets/0.DeBF66pO.css"];
export const fonts = [];

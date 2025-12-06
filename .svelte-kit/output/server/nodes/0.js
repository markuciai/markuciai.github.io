import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CO07jss_.js","_app/immutable/chunks/BMzvh4gJ.js","_app/immutable/chunks/CkTZ_q4L.js","_app/immutable/chunks/Dc01imot.js","_app/immutable/chunks/BcAwMr-x.js","_app/immutable/chunks/DGpkQZez.js","_app/immutable/chunks/g4DxvPYG.js","_app/immutable/chunks/CcBhAxnP.js","_app/immutable/chunks/CO31cLAy.js","_app/immutable/chunks/-lQneM2e.js","_app/immutable/chunks/Bht_lAUM.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.CKHrRi9n.css","_app/immutable/assets/0.B5jXKQL1.css"];
export const fonts = [];

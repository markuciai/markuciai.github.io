import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DH376hNM.js","_app/immutable/chunks/ClaJ_A0V.js","_app/immutable/chunks/RJ_lMxUe.js","_app/immutable/chunks/ChbJXd1a.js","_app/immutable/chunks/Y33qz5Gr.js","_app/immutable/chunks/DV7nMTdY.js","_app/immutable/chunks/C7PamNFx.js","_app/immutable/chunks/D0VwToFX.js","_app/immutable/chunks/B6ASJA-t.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.D7codewk.css","_app/immutable/assets/0.BmktiBH1.css"];
export const fonts = [];

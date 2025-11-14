import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BdvLyyMo.js","_app/immutable/chunks/CNFE2pxi.js","_app/immutable/chunks/DlmllBX_.js","_app/immutable/chunks/C5wqB5tk.js","_app/immutable/chunks/UqfjSAml.js","_app/immutable/chunks/agoOG-Rh.js","_app/immutable/chunks/DERZbX4g.js","_app/immutable/chunks/Rpe89ysy.js","_app/immutable/chunks/DAZgGzwc.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.CKHrRi9n.css","_app/immutable/assets/0.uGWwOuBz.css"];
export const fonts = [];

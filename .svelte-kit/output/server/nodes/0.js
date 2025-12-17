import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CGaDef10.js","_app/immutable/chunks/CrzBtUSi.js","_app/immutable/chunks/C3Jgq2x9.js","_app/immutable/chunks/DgANjM0E.js","_app/immutable/chunks/Bgsr0-6U.js","_app/immutable/chunks/C82Teli_.js","_app/immutable/chunks/82CHbT2D.js","_app/immutable/chunks/BQ_gcUoZ.js","_app/immutable/chunks/CF1qf9u9.js","_app/immutable/chunks/CilcISNn.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/C_4_zmw1.js","_app/immutable/chunks/B_vp2gQy.js","_app/immutable/chunks/DSNnYFS9.js","_app/immutable/chunks/BEhmXOIg.js","_app/immutable/chunks/DblOqTQK.js","_app/immutable/chunks/CcLLvuRJ.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.B2MM276h.css","_app/immutable/assets/0.BtJ-i4w_.css"];
export const fonts = [];

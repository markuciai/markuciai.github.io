import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B9Nakv2C.js","_app/immutable/chunks/CzbD8HBM.js","_app/immutable/chunks/DQ_zN-yf.js","_app/immutable/chunks/BsfQirpS.js","_app/immutable/chunks/ut-CmhKi.js","_app/immutable/chunks/B8mwo2AJ.js","_app/immutable/chunks/DP9g5cpr.js","_app/immutable/chunks/Dw1LxwTF.js","_app/immutable/chunks/irl12eAd.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.D7codewk.css","_app/immutable/assets/0.BIp_PDqT.css"];
export const fonts = [];

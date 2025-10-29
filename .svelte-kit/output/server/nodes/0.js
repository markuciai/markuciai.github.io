import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.ChM4F9Tr.js","_app/immutable/chunks/BRUZ3jMa.js","_app/immutable/chunks/1-mJzSNA.js","_app/immutable/chunks/CCtzo5cC.js","_app/immutable/chunks/DIfJRpHt.js","_app/immutable/chunks/D4w-WyJH.js","_app/immutable/chunks/DN4QytlU.js","_app/immutable/chunks/BI7Kja02.js","_app/immutable/chunks/DLPUDWTP.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.BOuoOUbW.css","_app/immutable/assets/0.CvhUwJ8C.css"];
export const fonts = [];

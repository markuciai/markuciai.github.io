import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B114o2FN.js","_app/immutable/chunks/BnSVTgLM.js","_app/immutable/chunks/Bpo-ulRz.js","_app/immutable/chunks/D4hOhbAj.js","_app/immutable/chunks/BgyyFh00.js","_app/immutable/chunks/CLL6TOOd.js","_app/immutable/chunks/n1eRu64w.js","_app/immutable/chunks/CJ1hQ3Eu.js","_app/immutable/chunks/BIg5O1t6.js"];
export const stylesheets = ["_app/immutable/assets/0.Sn33sbZv.css"];
export const fonts = [];

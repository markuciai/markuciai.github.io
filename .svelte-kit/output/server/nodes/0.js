import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DAervj1P.js","_app/immutable/chunks/g1lcq900.js","_app/immutable/chunks/BOAvCIJr.js","_app/immutable/chunks/3xwmKQW7.js","_app/immutable/chunks/CbTGiFTU.js","_app/immutable/chunks/z08BpYrH.js","_app/immutable/chunks/DfqifNTS.js","_app/immutable/chunks/DomUdGu8.js","_app/immutable/chunks/BPq9LPTT.js","_app/immutable/chunks/DzGLwIQr.js","_app/immutable/chunks/D-7Wph_L.js","_app/immutable/chunks/DSNnYFS9.js","_app/immutable/chunks/BEhmXOIg.js","_app/immutable/chunks/AZU7KjCS.js","_app/immutable/chunks/Bfvy0Kwn.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.B2MM276h.css","_app/immutable/assets/0.UeMRvQOg.css"];
export const fonts = [];

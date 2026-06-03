import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CNr0T8ip.js","_app/immutable/chunks/DZdc7LsZ.js","_app/immutable/chunks/Dk6tNqkw.js","_app/immutable/chunks/CSd4Y_Yy.js","_app/immutable/chunks/DeJhHXVP.js","_app/immutable/chunks/IjQSXA9Y.js","_app/immutable/chunks/feCDYVHj.js","_app/immutable/chunks/DNo6SOcj.js","_app/immutable/chunks/DMC2tjGC.js","_app/immutable/chunks/IawqwVk0.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/DZz3xF9q.js","_app/immutable/chunks/B_vp2gQy.js","_app/immutable/chunks/DSNnYFS9.js","_app/immutable/chunks/BEhmXOIg.js","_app/immutable/chunks/OLnLXSuS.js","_app/immutable/chunks/CuQtoJqf.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.B2MM276h.css","_app/immutable/assets/0.DeBF66pO.css"];
export const fonts = [];

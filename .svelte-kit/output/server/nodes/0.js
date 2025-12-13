import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CqO1f74P.js","_app/immutable/chunks/MjpCPJOK.js","_app/immutable/chunks/CBufY4PG.js","_app/immutable/chunks/mjzzMbs1.js","_app/immutable/chunks/AaHRKMqj.js","_app/immutable/chunks/D2sUiWJw.js","_app/immutable/chunks/3po8Bmey.js","_app/immutable/chunks/BYKHNmvG.js","_app/immutable/chunks/Dw1Ga9t7.js","_app/immutable/chunks/BiVARc4H.js","_app/immutable/chunks/DSNnYFS9.js","_app/immutable/chunks/BEhmXOIg.js","_app/immutable/chunks/B_I3uieB.js","_app/immutable/chunks/CXOJ8uLt.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.B2MM276h.css","_app/immutable/assets/0.BlL3Vo-T.css"];
export const fonts = [];

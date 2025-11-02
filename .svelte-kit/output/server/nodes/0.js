import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DUivqlyk.js","_app/immutable/chunks/C0aZwFk8.js","_app/immutable/chunks/CvUsXtnB.js","_app/immutable/chunks/BSHlT9Kp.js","_app/immutable/chunks/BzR0kroy.js","_app/immutable/chunks/DM4VyO_K.js","_app/immutable/chunks/BxJrMRv1.js","_app/immutable/chunks/D6gKBpeU.js","_app/immutable/chunks/DzEbYLO3.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.D7codewk.css","_app/immutable/assets/0.DrfYHYEp.css"];
export const fonts = [];

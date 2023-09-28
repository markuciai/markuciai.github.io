import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.8ff9be01.js","_app/immutable/chunks/index.91a1003d.js","_app/immutable/chunks/index.580c95fa.js","_app/immutable/chunks/language.5249e475.js","_app/immutable/chunks/index.1ceca79a.js","_app/immutable/chunks/visited.6c831d63.js"];
export const stylesheets = ["_app/immutable/assets/0.119f3836.css"];
export const fonts = [];

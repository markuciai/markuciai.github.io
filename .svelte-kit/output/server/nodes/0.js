import * as universal from '../entries/pages/_layout.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.d4209861.js","_app/immutable/chunks/index.c61cbb40.js","_app/immutable/chunks/language.320d09d3.js","_app/immutable/chunks/index.fb30c39b.js","_app/immutable/chunks/visited.027f804c.js"];
export const stylesheets = ["_app/immutable/assets/0.d9d930f1.css"];
export const fonts = [];

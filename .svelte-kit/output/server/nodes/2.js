

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0a139acb.js","_app/immutable/chunks/index.91a1003d.js","_app/immutable/chunks/language.5249e475.js","_app/immutable/chunks/index.1ceca79a.js","_app/immutable/chunks/index.580c95fa.js"];
export const stylesheets = ["_app/immutable/assets/2.90b14359.css"];
export const fonts = [];

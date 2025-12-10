import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B9bxTD0F.js","_app/immutable/chunks/BbJ52r7S.js","_app/immutable/chunks/BQyIqlV5.js","_app/immutable/chunks/B3v_TLHs.js","_app/immutable/chunks/COo5ULI4.js","_app/immutable/chunks/CbH6fU83.js","_app/immutable/chunks/B-dAlB7V.js","_app/immutable/chunks/C7-lShaQ.js","_app/immutable/chunks/DuVHuuwi.js","_app/immutable/chunks/C_4_zmw1.js","_app/immutable/chunks/DSNnYFS9.js","_app/immutable/chunks/BEhmXOIg.js","_app/immutable/chunks/DOMdIEYg.js","_app/immutable/chunks/BEsc4N4n.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.BetssJvv.css","_app/immutable/assets/0.CB_-Ucai.css"];
export const fonts = [];

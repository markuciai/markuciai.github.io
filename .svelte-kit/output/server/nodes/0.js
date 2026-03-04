import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DUpZGRda.js","_app/immutable/chunks/DoT7ZRdX.js","_app/immutable/chunks/CvGTeseT.js","_app/immutable/chunks/jdfWIII_.js","_app/immutable/chunks/CIQFOMfp.js","_app/immutable/chunks/CV6crbAN.js","_app/immutable/chunks/QPg8arPk.js","_app/immutable/chunks/ChGHXBNB.js","_app/immutable/chunks/C9oIXpW0.js","_app/immutable/chunks/DlIzNKYY.js","_app/immutable/chunks/PPVm8Dsz.js","_app/immutable/chunks/C_4_zmw1.js","_app/immutable/chunks/B_vp2gQy.js","_app/immutable/chunks/DSNnYFS9.js","_app/immutable/chunks/BEhmXOIg.js","_app/immutable/chunks/P4WpLbIs.js","_app/immutable/chunks/-gvkWqgt.js"];
export const stylesheets = ["_app/immutable/assets/game_manager.B2MM276h.css","_app/immutable/assets/0.WDo03gbZ.css"];
export const fonts = [];

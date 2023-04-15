import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { O as Offer } from "../../../../chunks/Offer.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".where-next.svelte-qxu0sa{padding:clamp(180px, 25vw, 240px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);margin:clamp(-160px, -25vw, -110px) 0 20px 0}.illustration.svelte-qxu0sa{margin:clamp(-80px, -25vw, -40px) 0 clamp(-80px, -12.5vw, -40px) 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-15u8qla_START -->${`${`${`${$$result.title = `<title>Tarnų namelis – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-15u8qla_END -->`, ""}



${`${validate_component(Offer, "Offer").$$render($$result, {}, {}, {})}`} `;
});
export {
  Page as default
};

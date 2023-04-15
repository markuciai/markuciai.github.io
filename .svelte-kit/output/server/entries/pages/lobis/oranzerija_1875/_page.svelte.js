import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { O as Offer } from "../../../../chunks/Offer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-18cv2re_START -->${`${`${`${$$result.title = `<title>Oranžerija – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-18cv2re_END -->`, ""}



${`${validate_component(Offer, "Offer").$$render($$result, {}, {}, {})}`} `;
});
export {
  Page as default
};

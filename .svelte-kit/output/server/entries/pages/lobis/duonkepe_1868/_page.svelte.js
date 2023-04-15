import { c as create_ssr_component, v as validate_component, b as add_attribute } from "../../../../chunks/index.js";
import { O as Offer } from "../../../../chunks/Offer.js";
const map_piece = "/_app/immutable/assets/7.7124b2c4.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-z37e8e_START -->${`${`${`${$$result.title = `<title>Duonkepė – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-z37e8e_END -->`, ""}



${`${validate_component(Offer, "Offer").$$render($$result, {}, {}, {})}
<img class="illustration"${add_attribute("src", map_piece, 0)}>`} `;
});
export {
  Page as default
};

import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { O as Offer } from "../../../../chunks/Offer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-3wug9d_START -->${`${`${`${$$result.title = `<title>Arklidės – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-3wug9d_END -->`, ""}

 


${`${validate_component(Offer, "Offer").$$render($$result, {}, {}, {})}`} 




<div class="map_section">Jūs gavote trečiąją dokumento dalį.

</div>`;
});
export {
  Page as default
};

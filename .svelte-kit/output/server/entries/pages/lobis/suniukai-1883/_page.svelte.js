import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/index2.js";
import { l as language } from "../../../../chunks/language.js";
import { v as visited } from "../../../../chunks/visited.js";
import { O as Offer } from "../../../../chunks/Offer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_visited;
  let $language, $$unsubscribe_language;
  $$unsubscribe_visited = subscribe(visited, (value) => value);
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_visited();
  $$unsubscribe_language();
  return `${$$result.head += `<!-- HEAD_svelte-1by4hl9_START -->${$language == "EN" ? `${$$result.title = `<title>Doggos — Markučiai Treasure</title>`, ""}
	<meta name="description" content="Quest">` : `${$language == "RU" ? `${$$result.title = `<title>Собачки – Клад Маркутья</title>`, ""}
	<meta name="description" content="Квест">` : `${$language == "LA" ? `${$$result.title = `<title> – Markučiai Treasure</title>`, ""}
	<meta name="description" content="Quest">` : `${$$result.title = `<title>Šuniukai – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-1by4hl9_END -->`, ""}



${`${validate_component(Offer, "Offer").$$render($$result, {}, {}, {})}`} `;
});
export {
  Page as default
};

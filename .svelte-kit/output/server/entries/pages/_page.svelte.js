import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/index2.js";
import { l as language } from "../../chunks/language.js";
const dvaras = "/_app/immutable/assets/mdvaras.04f34fa2.jpg";
const map_foundation = "/_app/immutable/assets/foundation.ffbbd507.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-16le9m7{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-16le9m7{width:90%;font-weight:bold;font-size:clamp(40px, 12vw, 64px);color:#D33F37}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  let bazinga = "";
  $$result.css.add(css);
  $$unsubscribe_language();
  return `${$$result.head += `<!-- HEAD_svelte-1ephg36_START -->${$$result.title = `<title>MDM</title>`, ""}<meta name="description" content="Markučių dvaro muziejus"><!-- HEAD_svelte-1ephg36_END -->`, ""}



<section class="svelte-16le9m7"><h1 class="svelte-16le9m7">${$language == "EN" ? `Markučiai manor museum` : `${$language == "RU" ? `Музей-усадьба Маркучай` : `${$language == "LA" ? `Museum manerium Markucis` : `Markučių dvaro muziejus`}`}`}</h1>

<p style="font-style: italic; padding: 10px;">«Ты ужас мира, стыд природы»</p>

<input${add_attribute("value", bazinga, 0)}>

${``}



<br> <br> 
<img width="98%"${add_attribute("src", dvaras, 0)}></section>
<br> 
<img width="105%"${add_attribute("src", map_foundation, 0)}>`;
});
export {
  Page as default
};

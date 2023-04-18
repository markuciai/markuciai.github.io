import { c as create_ssr_component, a as subscribe, b as add_attribute } from "../../chunks/index2.js";
import { l as language } from "../../chunks/language.js";
const dvaras = "/_app/immutable/assets/mdvaras.04f34fa2.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-16le9m7{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-16le9m7{width:90%;font-weight:bold;font-size:clamp(40px, 12vw, 64px);color:#D33F37}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $language, $$unsubscribe_language;
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$result.css.add(css);
  $$unsubscribe_language();
  return `${$$result.head += `<!-- HEAD_svelte-1ephg36_START -->${$$result.title = `<title>MDM</title>`, ""}<meta name="description" content="Markučių dvaro muziejus"><!-- HEAD_svelte-1ephg36_END -->`, ""}



<section class="svelte-16le9m7"><h1 class="svelte-16le9m7">${$language == "EN" ? `Markučiai manor museum` : `${$language == "RU" ? `Музей усадьбы Маркутья` : `${$language == "LA" ? `Museum manerium Markucis` : `Markučių dvaro muziejus`}`}`}</h1>


<a href="/lobis">Lobis:</a>
<ol start="0"><li><a href="/lobis/start_1865">Pradžia</a></li>
	<li><a href="/lobis/kryzius_1880">Kryžius</a></li>
	<li><a href="/lobis/namelis_1855">Namelis</a></li>
	<li><a href="/lobis/arklides_1935">Arklides</a></li>
	<li><a href="/lobis/tvenkiniai_1917">Tvenkiniai</a></li>
	<li><a href="/lobis/virtuve_1899">Virtuvė</a></li>
	<li><a href="/lobis/vistide_1877">Vištidė ir ledainė </a></li>
	<li><a href="/lobis/duonkepe_1868">Duonkepė</a></li>
	<li><a href="/lobis/sulinys_1867">Šulinys</a></li>
	<li><a href="/lobis/oranzerija_1875">Oranžerija</a></li>
	<li><a href="/lobis/cerkve_1903">Cerkvė</a></li>
	<li><a href="/lobis/suniukai-1883">Šuniukai</a></li>
	<li><a href="/lobis/kroketas_1867">Kroketo aikštelė</a></li>
	<li><a href="/lobis/finish_1935">Muziejus (Pabaiga)</a></li></ol>

<br><br>
<img width="98%"${add_attribute("src", dvaras, 0)}>


</section>`;
});
export {
  Page as default
};

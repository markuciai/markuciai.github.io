import { c as create_ssr_component, b as add_attribute } from "../../chunks/index2.js";
const dvaras = "/_app/immutable/assets/mdvaras.04f34fa2.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-16le9m7{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-16le9m7{width:90%;font-weight:bold;font-size:clamp(40px, 12vw, 64px);color:#D33F37}article.svelte-16le9m7{padding:0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ephg36_START -->${$$result.title = `<title>MDM</title>`, ""}<meta name="description" content="Markučių dvaro muziejus"><!-- HEAD_svelte-1ephg36_END -->`, ""}



<section class="svelte-16le9m7"><h1 class="svelte-16le9m7">Markučių dvaro muziejus</h1>
	<article class="svelte-16le9m7"><a href="/lobis">Lobis:</a>
		<ol><li><a href="/lobis/kryzius">Kryžius</a></li>
		<li><a href="/lobis/namelis">Namelis</a></li>
		<li><a href="/lobis/arklides">Arklides</a></li>
		<li><a href="/lobis/tvenkiniai">Tvenkiniai</a></li>
		<li><a href="/lobis/virtuve">Virtuvė</a></li>
		<li><a href="/lobis/vistide">Vištidė ir ledainė </a></li>
		<li><a href="/lobis/duonkepe">Duonkepė</a></li>
		<li><a href="/lobis/sulinys">Šulinys</a></li>
		<li><a href="/lobis/oranzerija">Oranžerija</a></li>
		<li><a href="/lobis/cerkve">Cerkvė</a></li>
		<li><a href="/lobis/suniukai">Šuniukai</a></li>
		<li><a href="/lobis/kroketas">Kroketo aikštelė</a></li>
		<li>Muziejus</li></ol></article>
	<img width="98%"${add_attribute("src", dvaras, 0)}>


</section>`;
});
export {
  Page as default
};

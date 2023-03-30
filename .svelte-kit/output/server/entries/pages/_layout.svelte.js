import { c as create_ssr_component, b as add_attribute } from "../../chunks/index.js";
import { i as icon_2, a as icon_8, b as icon_3, c as icon_4, d as icon_9, e as icon_13, f as icon_1, g as icon_7, h as icon_6, j as icon_12, k as icon_10, l as icon_11 } from "../../chunks/icon-13.js";
const Header_svelte_svelte_type_style_lang = "";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.legend_ul.svelte-16xdkz3{list-style-type:none;color:white}.legend.svelte-16xdkz3{display:block;font-size:36px;border-radius:8px;padding:0 0 80px 0;margin:-0px 0 -80px 0}.legend_icon.svelte-16xdkz3{position:relative;top:40px;left:4px;width:120px}.app.svelte-16xdkz3{display:flex;flex-direction:column;min-height:100vh}main.svelte-16xdkz3{font-family:"Lora";flex:1;display:flex;flex-direction:column;padding:20px;padding-top:100px;width:100%;max-width:800px;margin:0 auto;box-sizing:border-box}footer.svelte-16xdkz3{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px;font-size:12px;text-align:center;width:100%;font-weight:bold;font-family:"Lora";color:wheat;text-transform:uppercase;letter-spacing:1.5px}@media(min-width: 480px){footer.svelte-16xdkz3{padding:12px 0}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

<div class="app svelte-16xdkz3">

	<main class="svelte-16xdkz3">${slots.default ? slots.default({}) : ``}
		<div class="map_section"><ul class="legend_ul svelte-16xdkz3"><li class="legend  svelte-16xdkz3"><img${add_attribute("src", icon_2, 0)} class="legend_icon svelte-16xdkz3">Namelis</li>
				<li class="legend  svelte-16xdkz3"><img${add_attribute("src", icon_8, 0)} class="legend_icon svelte-16xdkz3">Šulinys</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_3, 0)} class="legend_icon svelte-16xdkz3">Arklides</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_4, 0)} class="legend_icon svelte-16xdkz3">Virtuvė</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_9, 0)} class="legend_icon svelte-16xdkz3">Oranžerija</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_13, 0)} class="legend_icon svelte-16xdkz3">Muziejus</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_1, 0)} class="legend_icon svelte-16xdkz3">Kryžius</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_7, 0)} class="legend_icon svelte-16xdkz3">Duonkepė</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_6, 0)} class="legend_icon svelte-16xdkz3">Vištidė ir ledainė</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_12, 0)} class="legend_icon svelte-16xdkz3">Kroketo aikštelė</li>
		
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_10, 0)} class="legend_icon svelte-16xdkz3">Cerkvė</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_11, 0)} class="legend_icon svelte-16xdkz3">Šuniukai</li>
				<li class="legend svelte-16xdkz3"><img${add_attribute("src", icon_3, 0)} class="legend_icon svelte-16xdkz3">Tvenkiniai</li></ul>
		
				</div></main>

	<footer class="svelte-16xdkz3">
		<p>// Demonstracinė versija. Vyksta darbai.</p></footer>
</div>`;
});
export {
  Layout as default
};

import { c as create_ssr_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.app.svelte-1q3a5zp{display:flex;flex-direction:column;min-height:100vh}main.svelte-1q3a5zp{font-family:"Lora";flex:1;display:flex;flex-direction:column;padding:20px;padding-top:100px;width:100%;max-width:800px;margin:0 auto;box-sizing:border-box}footer.svelte-1q3a5zp{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px;font-size:12px;text-align:center;width:100%;font-weight:bold;font-family:"Lora";color:wheat;text-transform:uppercase;letter-spacing:1.5px}@media(min-width: 480px){footer.svelte-1q3a5zp{padding:12px 0}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

<div class="app svelte-1q3a5zp">

	<main class="svelte-1q3a5zp">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-1q3a5zp">
		<p>// Demonstracinė versija. Vyksta darbai.</p></footer>
</div>`;
});
export {
  Layout as default
};

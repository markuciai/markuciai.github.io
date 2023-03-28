import { c as create_ssr_component } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-mtjxui.svelte-mtjxui{display:flex;flex-direction:column;min-height:100vh}main.svelte-mtjxui.svelte-mtjxui{flex:1;display:flex;flex-direction:column;padding:20px;padding-top:100px;width:100%;max-width:800px;margin:0 auto;box-sizing:border-box}footer.svelte-mtjxui.svelte-mtjxui{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-mtjxui a.svelte-mtjxui{font-weight:bold}@media(min-width: 480px){footer.svelte-mtjxui.svelte-mtjxui{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-mtjxui">

	<main class="svelte-mtjxui">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-mtjxui"><p>visit <a href="https://kit.svelte.dev" class="svelte-mtjxui">kit.svelte.dev</a> to learn SvelteKit</p></footer>
</div>`;
});
export {
  Layout as default
};

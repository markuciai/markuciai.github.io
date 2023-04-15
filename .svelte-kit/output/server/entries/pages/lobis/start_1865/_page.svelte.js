import { c as create_ssr_component, e as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let date_started = /* @__PURE__ */ new Date();
  date_started.getTime();
  let date_started_h = date_started.getHours().toString().padStart(2, "0");
  let date_started_m = date_started.getMinutes().toString().padStart(2, "0");
  let date_started_s = date_started.getSeconds().toString().padStart(2, "0");
  return `${$$result.head += `<!-- HEAD_svelte-hk3ssu_START -->${`${`${`${$$result.title = `<title>Startas – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-hk3ssu_END -->`, ""}



${`<section>${`${`${`Žaidimo startas: ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}`}`}`} </section>


<div class="map_section">Спускайтесь вниз. Из музея ко входу. Из настоящего в прошлое.
</div>`} `;
});
export {
  Page as default
};

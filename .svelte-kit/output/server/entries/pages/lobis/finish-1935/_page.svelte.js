import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
const Stopper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section>${`
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${`${`${`				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>`}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-dqn44k_START -->${`${`${`${$$result.title = `<title>Kryžius – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-dqn44k_END -->`, ""}



${`
${`${`${`${validate_component(Stopper, "Stopper").$$render($$result, {}, {}, {
    default: () => {
      return `Seifas užrakintas. <br>Jūs dar turite surinkti kiekvieną žemėlapio dalį!`;
    }
  })}`}`}`}`} `;
});
export {
  Page as default
};

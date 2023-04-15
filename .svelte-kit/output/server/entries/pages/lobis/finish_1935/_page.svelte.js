import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
const Stopper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section>${`${`${`${`${`${`${`${`${`${`${`${`${``}`}`}`}`}`}`}`}`}`}`}`}`}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ftraoe_START -->${`${`${`${$$result.title = `<title>Finišas – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-1ftraoe_END -->`, ""}



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

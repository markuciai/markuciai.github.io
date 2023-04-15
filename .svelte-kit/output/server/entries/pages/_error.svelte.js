import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { O as Offer } from "../../chunks/Offer.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Offer, "Offer").$$render($$result, {}, {}, {})}`;
});
export {
  Error as default
};

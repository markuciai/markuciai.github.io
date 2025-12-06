import { x as head, y as attr_class } from "../../chunks/index.js";
import { g as globe } from "../../chunks/globe.svelte.js";
import { d as dvaras } from "../../chunks/mdvaras.js";
/* empty css                                                      */
import { a as attr } from "../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let bazinga = "";
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>MDM</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Markučių dvaro muziejus"/>`);
    });
    $$renderer2.push(`<section><h1>LOBIS</h1> <p style="font-style: italic; padding: 10px;">«Ты ужас мира, стыд природы»</p> <input${attr("value", bazinga)}${attr_class("laisve_input svelte-1uha8ag", void 0, { "laisvė_success": globe.laisve })} name="password" placeholder="Slaptažodis"/> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <br/> <br/>  <img width="98%"${attr("src", dvaras)}/></section>`);
  });
}
export {
  _page as default
};

import { x as head } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
const dvaras = "/_app/immutable/assets/mdvaras.uf9U8GDs.jpg";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let bazinga = "";
    head($$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>MDM</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Markučių dvaro muziejus"/>`);
    });
    $$renderer2.push(`<section class="svelte-1uha8ag"><h1 class="svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[!-->");
        {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`Markučių dvaro muziejus`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></h1> <p style="font-style: italic; padding: 10px;">«Ты ужас мира, стыд природы»</p> <input${attr("value", bazinga)}/> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <br/> <br/>  <img width="98%"${attr("src", dvaras)}/></section>`);
  });
}
export {
  _page as default
};

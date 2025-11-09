import { x as head } from "../../../../chunks/index.js";
import { g as globe } from "../../../../chunks/globe.svelte.js";
import { O as Offer } from "../../../../chunks/Offer.js";
import { e as escape_html, a as attr } from "../../../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let header_title_text = {
      "EN": "The Stables — Markučiai Treasure",
      "RU": "Конюшня – Клад Маркутья",
      "LT": "Arklidės – Markučių Lobis",
      "LA": "Stables – Markučiai Treasure"
    };
    let header_description_text = {
      "EN": "Quest",
      "RU": "Квест",
      "LT": "Žaidimas",
      "LA": "Quest"
    };
    head("1rjax15", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(header_title_text[globe.language])}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", header_description_text[globe.language])}/>`);
    });
    {
      $$renderer2.push("<!--[-->");
      Offer($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};

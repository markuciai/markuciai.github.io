import { h as head } from "../../../../chunks/renderer.js";
import { O as Offer } from "../../../../chunks/Offer.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1v1vcqj", $$renderer2, ($$renderer3) => {
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.title(($$renderer4) => {
          $$renderer4.push(`<title>Vištidė ir ledainė – Markučių Lobis</title>`);
        });
        $$renderer3.push(`<meta name="description" content="Žaidimas"/>`);
      }
      $$renderer3.push(`<!--]-->`);
    });
    {
      $$renderer2.push("<!--[0-->");
      Offer($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};

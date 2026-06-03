import { a as attr_class, J as slot, h as head } from "../../../../chunks/index.js";
import { g as globe } from "../../../../chunks/globe.svelte.js";
import { t as task$a } from "../../../../chunks/doggo.js";
import { a as attr } from "../../../../chunks/attributes.js";
const task$9 = "/_app/immutable/assets/ball.BARvZG9d.png";
const task$8 = "/_app/immutable/assets/bowl.D4mzeVJD.png";
const task$7 = "/_app/immutable/assets/bucket-empty.1Iv6QKUb.png";
const task$6 = "/_app/immutable/assets/bucket.D4_0hlxX.png";
const task$5 = "/_app/immutable/assets/eggs.D8dE7ceG.png";
const task$4 = "/_app/immutable/assets/fish.C5T-fb7j.png";
const task$3 = "/_app/immutable/assets/fishing_rod.DfkhT1yh.png";
const task$2 = "/_app/immutable/assets/flowers.BA_-ufaU.png";
const task$1 = "/_app/immutable/assets/fodder.BK57aF9V.png";
const task = "/_app/immutable/assets/saddle.CymgCf8n.png";
function Stopper($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let illustrations = [
      task$a,
      task$8,
      task,
      task$3,
      task$4,
      task$1,
      task$5,
      task$7,
      task$6,
      task$2,
      task$a,
      task$9,
      task$a
    ];
    $$renderer2.push(`<section><img${attr_class("illustration", void 0, { "saddle": globe.progress == 2 })}${attr("src", illustrations[globe.progress])}/> <div${attr_class("where-next", void 0, {
      "too_early": globe.progress < globe.location,
      "already_visited": globe.progress > globe.location,
      "saddle-block": globe.progress == 2
    })}><p><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></p> <p>`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></p> <br/> <p class="highlighted-question">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></p></div></section>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1701eov", $$renderer2, ($$renderer3) => {
      {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.title(($$renderer4) => {
          $$renderer4.push(`<title>Finišas – Markučių Lobis</title>`);
        });
        $$renderer3.push(`<meta name="description" content="Žaidimas"/>`);
      }
      $$renderer3.push(`<!--]-->`);
    });
    {
      $$renderer2.push("<!--[-1-->");
      {
        $$renderer2.push("<!--[-1-->");
        Stopper($$renderer2, {
          children: ($$renderer3) => {
            $$renderer3.push(`<!---->Seifas užrakintas. <br/>Jūs dar turite surinkti kiekvieną žemėlapio dalį!`);
          },
          $$slots: { default: true }
        });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};

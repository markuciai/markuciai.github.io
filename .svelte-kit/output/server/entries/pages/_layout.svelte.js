import { x as head } from "../../chunks/index.js";
import "clsx";
/* empty css                                                      */
import { a as attr } from "../../chunks/attributes.js";
const favicon = "/_app/immutable/assets/favicon.XN9wP4KE.svg";
function Game_manager($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Mounted($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="icon" type="image/svg"${attr("href", favicon)}/>`);
  });
  $$renderer.push(`<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;family=Manrope:wght@200;300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/> <link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&amp;family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&amp;family=Manrope:wght@200..800&amp;family=Tinos:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap" rel="stylesheet"/> <div></div> `);
  Game_manager($$renderer);
  $$renderer.push(`<!----> `);
  Mounted($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};

import { x as head } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
/* empty css                                                      */
import "clsx";
const favicon = "/_app/immutable/assets/favicon.XN9wP4KE.svg";
const sound_correct = "/_app/immutable/assets/sound-8-2._BU3LiBy.mp3";
function Game_manager($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<audio${attr(
      "src",
      // console.log("mistake?")
      // })
      // $effect(() => {
      // if(globe.progress != globe.location){
      // 	globe.mistakes += 1
      // }
      // console.log('laisve before', localStorage.laisve,  globe.laisve, globe.laisve );
      // console.log('after', localStorage.laisve,  globe.laisve, globe.laisve );
      sound_correct
    )} id="audio_correct" class="svelte-gieire"></audio> <audio${attr("src", sound_correct)} id="audio_last_piece" class="svelte-gieire"></audio> <audio${attr("src", sound_correct)} id="audio_finish" class="svelte-gieire"></audio> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="enrult title svelte-gieire"><h1 class="svelte-gieire">Markučių<br class="svelte-gieire"/>Lobis</h1></div>`);
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

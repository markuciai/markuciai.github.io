import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
import { m as map_piece, e as entrance, b as bowl, a as map } from "../../../chunks/entrance.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-16le9m7{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-16le9m7{width:90%;font-weight:bold;font-size:clamp(40px, 12vw, 64px);color:#D33F37}article.svelte-16le9m7{padding:0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px)}.highlighted-question.svelte-16le9m7{font-style:italic;font-weight:bold;color:#D33F37}.where-next.svelte-16le9m7{background-color:#EEDC83;color:black;width:105%;box-sizing:border-box;padding:clamp(40px, 12.5vw, 80px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);margin:0px 0 20px 0;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);border-radius:5px;font-size:24px;font-size:clamp(24px, 6vw, 32px)}.illustration.svelte-16le9m7{width:clamp(320px, 100vw, 640px);z-index:10;margin:clamp(-160px, -25vw, -80px) 0 clamp(-80px, -12.5vw, -40px) 0;user-select:none;pointer-events:none}.appendix.svelte-16le9m7{color:white;font-size:16pt;padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""}



<section class="svelte-16le9m7"><img class="illustration svelte-16le9m7"${add_attribute("src", map_piece, 0)}>
	<h1 class="svelte-16le9m7">Крест</h1>
	<article class="svelte-16le9m7">По левой стороне от входа в парк, во времена Варвары Пушкиной, на каменном фундаменте стоял высокий крест, изготовленный из железнодорожных рельсов. У его основания хозяйка усадьбы оставляла чашу с монетками для бедных людей.
	</article>


	<img width="105%"${add_attribute("src", entrance, 0)}>
	<article class="svelte-16le9m7"><br>
	Сейчас в этой чаше лежит только обрывок бумаги с гербовой печатью и подписью. Похоже, это очень важный исторический документ. Но, где же остальная часть текста, и что в нем было написано? Кому следует отдать случайную находку?
	</article>
	<img class="illustration svelte-16le9m7"${add_attribute("src", bowl, 0)}>

	<div class="where-next svelte-16le9m7">Может быть слуги поместья смогут нам помочь? Нужно срочно их найти.
		<br><br>
		<span class="highlighted-question svelte-16le9m7">Где можно найти слуг?</span></div></section>


	<div class="appendix svelte-16le9m7">Теперь у вас есть первая часть карты. Куда дальше?

	</div>
	<img${add_attribute("src", map, 0)} width="100%">

	<div class="appendix svelte-16le9m7"><ul><li>Колодец</li>
			<li>Пекарня</li></ul>
		Обойдите все пункты в нужном порядке чтобы выиграть квест.
	</div>`;
});
export {
  Page as default
};

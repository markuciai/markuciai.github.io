import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index.js";
import { m as map_piece, a as map } from "../../../../chunks/map.js";
const task_object = "/_app/immutable/assets/saddle.c983f419.png";
const servants = "/_app/immutable/assets/servants.ef8f7453.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-3aiag7{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-3aiag7{width:90%;font-weight:800;font-size:clamp(40px, 12vw, 64px);line-height:clamp(40px, 12vw, 64px);;;color:#D33F37;padding:0;margin:50px 0 60px 0}.subh.svelte-3aiag7{font-size:12px;text-align:center;width:89%;margin:-50px 0 30px 0;font-weight:600;text-transform:uppercase;letter-spacing:1.5px}article.svelte-3aiag7{padding:0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);margin-bottom:20px}.where-next.svelte-3aiag7{background-color:#EEDC83;color:black;width:105%;box-sizing:border-box;padding:clamp(160px, 25vw, 240px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);margin:clamp(-160px, -20vw, -120px) 0 20px 0;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);border-radius:5px;font-size:24px;font-size:clamp(24px, 6vw, 32px)}.highlighted-question.svelte-3aiag7{font-style:italic;font-weight:bold;color:#D33F37}.illustration.svelte-3aiag7{width:clamp(320px, 100vw, 640px);z-index:10;margin:clamp(-160px, -25vw, -80px) 0 clamp(-80px, -12.5vw, -40px) 0;user-select:none;pointer-events:none}.task.svelte-3aiag7{padding:0 0 -200px 0}.map_section.svelte-3aiag7{color:white;font-size:16pt;padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ds1kxo_START -->${$$result.title = `<title>Tarnų namelis – Markučių Lobis</title>`, ""}<meta name="description" content="Žaidimas"><!-- HEAD_svelte-1ds1kxo_END -->`, ""}




<section class="svelte-3aiag7"><img class="illustration svelte-3aiag7"${add_attribute("src", map_piece, 0)}>
	<h1 class="svelte-3aiag7">Tarnų namelis</h1>
	<p class="subh svelte-3aiag7">Antroji stotelė<br>jieškant Markučių lobį</p>
	<article class="svelte-3aiag7">Tarnaitė Ona ir jos vyras Viačeslavas jus pasitinka ant savo jaukių namų slenksčio. Jie taip pat parke aptiko panašaus dokumento skiautę su įrašu, bet nežino, ką su ja daryti.
	</article>


	<img width="105%"${add_attribute("src", servants, 0)}>
	<article class="svelte-3aiag7"><br>
	Tarnai užsiėmę nesibaigiančiais darbais sode, todėl neturi laiko nežinomo dokumento paieškoms. Tačiau girdėjo, jog surinkus visas dokumento dalis ir nunešus jį į ponų namą galima gauti radybų.
	</article>
	<img class="illustration task svelte-3aiag7"${add_attribute("src", task_object, 0)}>

	<div class="where-next svelte-3aiag7">Ana ir Viačeslavas sutinka jums atiduoti rastą dokumento dalį, jeigu jūs jiems pagelbėsit ir įvykdysit jų prašymą – nunešit naują balną ponui Michalui.
		<br><br>
		<span class="highlighted-question svelte-3aiag7">Kur reikėtų nunešti balną?</span></div></section>


	<div class="map_section svelte-3aiag7">Теперь у вас есть первая часть карты. Куда дальше?

	</div>
	<img${add_attribute("src", map, 0)} width="100%">


	<div class="map_section svelte-3aiag7"><ul><li>Колодец</li>
			<li>Пекарня</li></ul>
		Обойдите все пункты в нужном порядке чтобы выиграть квест.
	</div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/index.js";
const map = "/_app/immutable/assets/3.d891191f.png";
const task = "/_app/immutable/assets/fishing_rod.d6356b68.png";
const stables = "/_app/immutable/assets/stables.65099b6b.jpg";
const map_piece = "/_app/immutable/assets/3.50e78d88.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1sskqkw{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-1sskqkw{width:90%;font-weight:800;font-size:clamp(40px, 12vw, 64px);line-height:clamp(40px, 12vw, 64px);;;color:#D33F37;padding:0;margin:50px 0 60px 0}.subh.svelte-1sskqkw{font-size:12px;text-align:center;width:89%;margin:-50px 0 30px 0;font-weight:600;text-transform:uppercase;letter-spacing:1.5px}article.svelte-1sskqkw{padding:0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);margin-bottom:20px}.where-next.svelte-1sskqkw{background-color:#EEDC83;color:black;width:105%;box-sizing:border-box;padding:clamp(40px, 12.5vw, 80px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);margin:0px 0 20px 0;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);border-radius:5px;font-size:24px;font-size:clamp(24px, 6vw, 32px)}.highlighted-question.svelte-1sskqkw{font-style:italic;font-weight:bold;color:#D33F37}.illustration.svelte-1sskqkw{width:clamp(320px, 100vw, 640px);z-index:10;margin:clamp(-160px, -25vw, -80px) 0 clamp(-80px, -12.5vw, -40px) 0;user-select:none;pointer-events:none}.map_section.svelte-1sskqkw{color:white;font-size:16pt;padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-6jvhza_START -->${$$result.title = `<title>Arklidės – Markučių Lobis</title>`, ""}<meta name="description" content="Žaidimas"><!-- HEAD_svelte-6jvhza_END -->`, ""}
 



<section class="svelte-1sskqkw"><img class="illustration svelte-1sskqkw"${add_attribute("src", map_piece, 0)}>
	<h1 class="svelte-1sskqkw">Arklidės</h1>
	<p class="subh svelte-1sskqkw">Trečioji stotelė<br>ieškant Markučių lobio</p>
	<article class="svelte-1sskqkw">Šaunuoliai, jūs lengvai įvykdėt tarnų prašymą – naują balną atidavėt vežikui-vadeliotojui ponui Michalui, kuris ilgą laiką tarnavo pas Puškinus Markučių dvare ir vežiojo savo šeimininkus į miestą bei į kitas gubernijas.
	</article>
	<img width="105%"${add_attribute("src", stables, 0)}>
	<br><br>

	<img class="illustration svelte-1sskqkw"${add_attribute("src", task, 0)}>

	<div class="where-next svelte-1sskqkw">Jums užsiminus apie svarbaus dokumento paiešką, vežikas prisiminė, jog prie arklidžių kaip tik rado dokumento skiautę ir mielai ją atiduos, jeigu jūs nunešite meškerę jo jauniausiajam sūnui Tarasui.
		<br><br>
		<span class="highlighted-question svelte-1sskqkw">Kur reikėtų nunešti meškerę?</span></div></section>


	<div class="map_section svelte-1sskqkw">Jūs gavote trečiąją dokumento dalį.

	</div>
	<img${add_attribute("src", map, 0)} width="100%">`;
});
export {
  Page as default
};

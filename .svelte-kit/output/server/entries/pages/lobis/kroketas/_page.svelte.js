import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index.js";
import { m as map_piece, a as map } from "../../../../chunks/map.js";
const nazimov = "/_app/immutable/assets/nazimov.1ec7ea12.jpg";
const kabinetas = "/_app/immutable/assets/kabinetas.9fbcaa03.jpg";
const safe = "/_app/immutable/assets/safe.4d72ce12.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1sskqkw{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-1sskqkw{width:90%;font-weight:800;font-size:clamp(40px, 12vw, 64px);line-height:clamp(40px, 12vw, 64px);;;color:#D33F37;padding:0;margin:50px 0 60px 0}.subh.svelte-1sskqkw{font-size:12px;text-align:center;width:89%;margin:-50px 0 30px 0;font-weight:600;text-transform:uppercase;letter-spacing:1.5px}article.svelte-1sskqkw{padding:0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);margin-bottom:20px}.where-next.svelte-1sskqkw{background-color:#EEDC83;color:black;width:105%;box-sizing:border-box;padding:clamp(40px, 12.5vw, 80px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);margin:0px 0 20px 0;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);border-radius:5px;font-size:24px;font-size:clamp(24px, 6vw, 32px)}.highlighted-question.svelte-1sskqkw{font-style:italic;font-weight:bold;color:#D33F37}.illustration.svelte-1sskqkw{width:clamp(320px, 100vw, 640px);z-index:10;margin:clamp(-160px, -25vw, -80px) 0 clamp(-80px, -12.5vw, -40px) 0;user-select:none;pointer-events:none}.map_section.svelte-1sskqkw{color:white;font-size:16pt;padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-131nyws_START -->${$$result.title = `<title>Kroketo aikštelė – Markučių Lobis</title>`, ""}<meta name="description" content="Žaidimas"><!-- HEAD_svelte-131nyws_END -->`, ""}



<section class="svelte-1sskqkw"><img class="illustration svelte-1sskqkw"${add_attribute("src", map_piece, 0)}>
	<h1 class="svelte-1sskqkw">Kroketo aikštelė</h1>
	<p class="subh svelte-1sskqkw">Dvyliktoji ir priešpaskutinė stotelė<br>jieškant Markučių lobį</p>
	<article class="svelte-1sskqkw">Prie poeto Aleksandro Puškino paminklo grupelė vaikų ir suaugusiųjų žaidžia kroketą. Vienas iš žaidėjų yra architektas ir geras Grigorijaus Puškino draugas Vladimiras Nazimovas.
	</article>
		<img width="105%"${add_attribute("src", nazimov, 0)}>
	<article class="svelte-1sskqkw"><br>
		Jis į Markučius atvyko paskutiniais Varvaros Puškinos gyvenimo metais ir pažadėjo padaryti viską, kas įmanoma, kad dvaro sodyboje būtų atidarytas muziejus, skirtas žymiam poetui Aleksandrui Puškinui. Sodyboje saugomi unikalūs baldai, poeto ir jo artimųjų asmeniniai daiktai čia atvežti iš poeto namų, buvusių Michailovsko gyvenvietėje.
	</article>

	<img width="105%"${add_attribute("src", kabinetas, 0)}>

	<article class="svelte-1sskqkw"><br>
	Vladimirui Nazimovui jūs atiduodate kroketo kamuoliuką bei parodote visas rastas dokumento skiautes. Architektas jums atiduoda paskutinę – dvyliktąją dokumento dalį – ir papasakoja, kad dokumentas, kurį jūs šiandien surinkote, yra ne kas kita, o 1935 m. Markučių dvaro šeimininkės Varvaros Puškinos surašytas testamentas!
	</article>

	<img width="105%"${add_attribute("src", safe, 0)}>

	<article class="svelte-1sskqkw"><br>
	Testamento originalas yra saugomas dvaro sodybos gyvenamajame name, patikimame, nedegiame, dar 1867 m. prie vienos iš krosnių įrengtame seife. Šį smagų žaidimą, kurio tikslas surinkti šį svarbų dokumentą, veikiausiai sugalvojo pats Varvaros testamento vykdytojas Vladimiras Nazimovas su savo vaikais, norėdamas plačiau paskleisti žinią apie Markučių dvaro šeimininkų paskutinę valią.
	</article>

	<div class="where-next svelte-1sskqkw">Loginio mąstymo ir dėmesingumo dėka jums pavyko surinkti dokumentą ir sužinoti, kas parašyta testamente! 
		<br><br>
		<span class="highlighted-question svelte-1sskqkw">O dabar laikas užsukti į muziejų ir gauti apdovanojimą už nuveiktą darbą!</span></div></section>


	<div class="map_section svelte-1sskqkw">Теперь у вас есть первая часть карты. Куда дальше?

	</div>
	<img${add_attribute("src", map, 0)} width="100%">


	<div class="map_section svelte-1sskqkw"><ul><li>Колодец</li>
			<li>Пекарня</li></ul>
		Обойдите все пункты в нужном порядке чтобы выиграть квест.
	</div>`;
});
export {
  Page as default
};

import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../chunks/index2.js";
import { l as language } from "../../../../chunks/language.js";
import { v as visited } from "../../../../chunks/visited.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_visited;
  let $language, $$unsubscribe_language;
  $$unsubscribe_visited = subscribe(visited, (value) => value);
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  let date_started = /* @__PURE__ */ new Date();
  date_started.getTime();
  let date_started_h = date_started.getHours().toString().padStart(2, "0");
  let date_started_m = date_started.getMinutes().toString().padStart(2, "0");
  let date_started_s = date_started.getSeconds().toString().padStart(2, "0");
  $$unsubscribe_visited();
  $$unsubscribe_language();
  return `${$$result.head += `<!-- HEAD_svelte-1fdhjfc_START -->${$language == "EN" ? `${$$result.title = `<title>Start — Markučiai Treasure</title>`, ""}
	<meta name="description" content="Quest">` : `${$language == "RU" ? `${$$result.title = `<title>Старт – Клад Маркутья</title>`, ""}
	<meta name="description" content="Квест">` : `${$language == "LA" ? `${$$result.title = `<title>Start – Markučiai Treasure</title>`, ""}
	<meta name="description" content="Quest">` : `${$$result.title = `<title>Startas – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-1fdhjfc_END -->`, ""}



${`<section>${$language == "EN" ? `Started the game at ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}` : `${$language == "RU" ? `
<h1>Клад Маркутья</h1>
<p class="subh">Вы начали своё путешествие<br>в ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}</p>

<article>Добро пожаловать в игру! Ищите таблички разбросанные по парку. Читайте подсказки и сканируйте таблички в нужном порядке.
</article>



<article>Любое путешествие начинается со входа. У поместья были ворота, а у ворот стоял большой деревянный крест.
</article>



<div class="where-next">Вы, наверно, не с неба упали, а поднялись в музей по лестнице ведущей от входа.
	<br><br>
	<span class="highlighted-question">Где у парка вход? <br>Где раньше стоял крест?</span></div>` : `${$language == "LA" ? `Coepi ludum at: ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}` : `

Žaidimo startas: ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}


<h1>Markučių Lobis</h1>
<p class="subh">JŪS PRADĖJOTE KELIONĘ<br>в ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}</p>

<article>Sveiki atvykę į žaidimą! Ieškokite parke išdėliotų lentelių, skaitykite užuominas ir skenuokite lenteles nurodyta tvarka. 
</article>



<article>Любое путешествие начинается со входа. У поместья были ворота, а у ворот стоял большой деревянный крест.
</article>



<div class="where-next">Вы, наверно, не с неба упали, а поднялись в музей по лестнице ведущей от входа.
	<br><br>
	<span class="highlighted-question">Где у парка вход? <br>Где раньше стоял крест?</span></div>`}`}`} </section>


<div class="map_section">Спускайтесь вниз. Из музея ко входу. Из настоящего в прошлое.
</div>`} `;
});
export {
  Page as default
};

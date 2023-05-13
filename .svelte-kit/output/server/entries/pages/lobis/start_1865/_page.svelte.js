import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "../../../../chunks/index2.js";
import { l as language } from "../../../../chunks/language.js";
import { v as visited } from "../../../../chunks/visited.js";
import { h as head_signs, i as instructions } from "../../../../chunks/instructions.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $visited, $$unsubscribe_visited;
  let $language, $$unsubscribe_language;
  $$unsubscribe_visited = subscribe(visited, (value) => $visited = value);
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



${`<section><img class="illustration"${add_attribute("src", head_signs, 0)}>
${$language == "EN" ? `Started the game at ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}` : `${$language == "RU" ? `<h1>Клад Маркутья</h1>
<p class="subh">Вы начали своё путешествие<br>в ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}</p>

<article>Добро пожаловать в игру! Ищите таблички разбросанные по парку. Читайте подсказки и сканируйте таблички в нужном порядке.
</article>

<img${add_attribute("src", instructions, 0)} width="100%">


<article>Любое путешествие начинается со входа. <br>
	У поместья были ворота, а у ворот стоял большой крест из железнодорожных рельс.
</article>


<div class="where-next"><span class="highlighted-question">Где у парка вход? <br>Где раньше стоял крест?</span>
	<br><br>
	<span>Спускайтесь вниз.<br>
		Из музея ко входу.<br>
		Из настоящего в прошлое.
	</span></div>` : `${$language == "LA" ? `Coepi ludum at: ${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}` : `


<h1>Markučių Lobis</h1>
<p class="subh">JŪS PRADĖJOTE KELIONĘ<br>${escape(date_started_h)}:${escape(date_started_m)}:${escape(date_started_s)}</p>

<article>Sveiki atvykę į žaidimą! Ieškokite parke išdėliotų lentelių, skaitykite užuominas ir skenuokite lenteles nurodyta tvarka. 
</article>

<img${add_attribute("src", instructions, 0)} width="100%">

<article>Žaidimas prasideda prie įėjimo. Dvare buvo įėjimo vartai, o prie jų stovėjo didelis iš geležinkelio bėgių pagamintas kryžius.
</article>



<div class="where-next"><span class="highlighted-question">Kur yra įėjimas į parką? <br>Kur anksčiau stovėjo kryžius?
	</span> <br><br>
	<span>Leiskitės žemyn.<br>
		Iš muziejaus link paminklinės lentos.<br>
		Iš dabarties į praeitį.
	</span></div>`}`}`} </section>

${$visited > 0 ? `<br> 
<button class="button" style="width: 160px">↻ Perkrauti žaidimą</button>` : ``}




`} `;
});
export {
  Page as default
};

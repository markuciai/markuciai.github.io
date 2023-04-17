import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
import { v as visited, l as language } from "../../../../chunks/visited.js";
const task$a = "/_app/immutable/assets/doggo.149c5f38.png";
const task$9 = "/_app/immutable/assets/ball.a747149c.png";
const task$8 = "/_app/immutable/assets/bowl.b639b93e.png";
const task$7 = "/_app/immutable/assets/bucket-empty.3180f998.png";
const task$6 = "/_app/immutable/assets/bucket.fcd45c5b.png";
const task$5 = "/_app/immutable/assets/eggs.0fe2c4bd.png";
const task$4 = "/_app/immutable/assets/fish.b4615236.png";
const task$3 = "/_app/immutable/assets/fishing_rod.d6356b68.png";
const task$2 = "/_app/immutable/assets/flowers.fdf70632.png";
const task$1 = "/_app/immutable/assets/fodder.9b3cb03e.png";
const task = "/_app/immutable/assets/saddle.c983f419.png";
const Stopper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $visited, $$unsubscribe_visited;
  let $language, $$unsubscribe_language;
  $$unsubscribe_visited = subscribe(visited, (value) => $visited = value);
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_visited();
  $$unsubscribe_language();
  return `<section><br><br>
${$visited == 0 ? `<img class="illustration"${add_attribute("src", task$a, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re yet to start the game! <br> Visit the museum.` : `${$language == "RU" ? `Вы ещё не начали игру! <br>Обращайтесь в музей.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `		    		Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 1 ? `<img class="illustration"${add_attribute("src", task$8, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `Наверно слуг стоит поискать <br>где-то ещё.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 2 ? `<img class="illustration saddle"${add_attribute("src", task, 0)}>
<div class="where-next too_early saddle-block">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `У вас в руках седло.<br>Где может быть человек, которому нужно седло?` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `		    		Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 3 ? `<img class="illustration"${add_attribute("src", task$3, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `Удочку надо-бы отнести куда-то к воде.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 4 ? `<img class="illustration"${add_attribute("src", task$4, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `В руках барахтается скользкая рыба. <br>Где искать кухарку?` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 5 ? `<img class="illustration"${add_attribute("src", task$1, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `Несите, скорее, корм курицам. <br> Голодные курицы — злые курицы.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 6 ? `<img class="illustration"${add_attribute("src", task$5, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `Чтобы испечь пирог нужны яйца. <br> А где могут испечь пирог?` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `		    		Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 7 ? `<img class="illustration"${add_attribute("src", task$7, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `А вот пустое ведро нужно наполнить водой.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 8 ? `<img class="illustration"${add_attribute("src", task$6, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `Дивные сады и фруктовые деревья поместья не растут, если их не поливать.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 9 ? `<img class="illustration"${add_attribute("src", task$2, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `От запаха орхидей кружит голову. <br>А могилы, которым нужны цветы, могут быть где-то у церквушки.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 10 ? `<img class="illustration"${add_attribute("src", task$a, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `Издалека слышен весёлый собачий лай. <br>Нельзя просто взять и не посмотреть на собачек.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 11 ? `<img class="illustration"${add_attribute("src", task$9, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `Вы, кажется, уже везде были, кроме площадки для крокета.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : `${$visited == 12 ? `<img class="illustration"${add_attribute("src", task$a, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You&#39;re too early! <br>You need to go somewhere else.` : `${$language == "RU" ? `Вы везде побывали! Возвращайтесь в музей!` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.`}`}`}</div>` : ``}`}`}`}`}`}`}`}`}`}`}`}`}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_visited;
  let $language, $$unsubscribe_language;
  $$unsubscribe_visited = subscribe(visited, (value) => value);
  $$unsubscribe_language = subscribe(language, (value) => $language = value);
  $$unsubscribe_visited();
  $$unsubscribe_language();
  return `${$$result.head += `<!-- HEAD_svelte-125vq6k_START -->${$language == "EN" ? `${$$result.title = `<title>Finish Line - Markučiai Treasure</title>`, ""}
	<meta name="description" content="Quest">` : `${$language == "RU" ? `${$$result.title = `<title>Финиш - Клад Маркутья</title>`, ""}
	<meta name="description" content="Квест">` : `${$language == "LA" ? `${$$result.title = `<title>Finio – Markučiai Treasure</title>`, ""}
	<meta name="description" content="Quest">` : `${$$result.title = `<title>Finišas – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-125vq6k_END -->`, ""}



${`
${$language == "EN" ? `${validate_component(Stopper, "Stopper").$$render($$result, {}, {}, {
    default: () => {
      return `The safe is locked. <br> You&#39;re yet to collect every piece of the map!`;
    }
  })}` : `${$language == "RU" ? `${validate_component(Stopper, "Stopper").$$render($$result, {}, {}, {
    default: () => {
      return `Вы дёргаете за ручку сейфа, но тот заперт. <br>Вы ещё собрали не все кусочки карты!`;
    }
  })}` : `${$language == "LA" ? `${validate_component(Stopper, "Stopper").$$render($$result, {}, {}, {
    default: () => {
      return `Tuta clausa est. <br>Nondum es ad colligendas singulas chartas partes!`;
    }
  })}` : `${validate_component(Stopper, "Stopper").$$render($$result, {}, {}, {
    default: () => {
      return `Seifas užrakintas. <br>Jūs dar turite surinkti kiekvieną žemėlapio dalį!`;
    }
  })}`}`}`}`} `;
});
export {
  Page as default
};

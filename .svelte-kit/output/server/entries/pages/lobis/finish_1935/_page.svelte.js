import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../../../chunks/index2.js";
import { l as language } from "../../../../chunks/language.js";
import { v as visited } from "../../../../chunks/visited.js";
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
${$language == "EN" ? `You&#39;re too early! <br>Find the beginning of the path first.` : `${$language == "RU" ? `Вы рановато пришли! <br>Сначала найдите начало пути.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `		    		Jūs per anksti atėjote. <br>Pirmiausia raskite kelio pradžią.`}`}`}</div>` : `${$visited == 1 ? `<img class="illustration"${add_attribute("src", task$8, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You probably should look <br>for the servants somewhere else.` : `${$language == "RU" ? `Наверно слуг стоит поискать <br>где-то ещё.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Tikriausiai tarnų reikėtų  <br>paieškoti kažkur kitur.`}`}`}</div>` : `${$visited == 2 ? `<img class="illustration saddle"${add_attribute("src", task, 0)}>
<div class="where-next too_early saddle-block">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You are holding a saddle. <br>Where could you find someone in need of a saddle?` : `${$language == "RU" ? `У вас в руках седло.<br>Где может быть человек, которому нужно седло?` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `		    		Rankose laikote balną. <br>Kur galėtų būti žmogus, kuriam reikalingas balnas?`}`}`}</div>` : `${$visited == 3 ? `<img class="illustration"${add_attribute("src", task$3, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You should bring the fishing rod <br>somewhere, where there‘s water.` : `${$language == "RU" ? `Удочку надо-бы отнести куда-то к воде.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Meškerę reikėtų nunešti <br>kažkur prie vandens.`}`}`}</div>` : `${$visited == 4 ? `<img class="illustration"${add_attribute("src", task$4, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `Slippery fish writhe in your hands. <br>Where could you find a cook?` : `${$language == "RU" ? `В руках барахтается скользкая рыба. <br>Где искать кухарку?` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Slidi žuvis raitosi jūsų rankose. <br>Kur ieškoti virėjos?`}`}`}</div>` : `${$visited == 5 ? `<img class="illustration"${add_attribute("src", task$1, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `Quick, bring the chicken feed! <br>Hungry chickens are angry chickens.` : `${$language == "RU" ? `Несите, скорее, корм курицам. <br> Голодные курицы — злые курицы.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Neškite greičiau lesalą vištoms <br>Alkanos vištos – piktos vištos.`}`}`}</div>` : `${$visited == 6 ? `<img class="illustration"${add_attribute("src", task$5, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `Eggs are needed to bake a cake <br>And where can they bake a cake?` : `${$language == "RU" ? `Чтобы испечь пирог нужны яйца. <br>А где могут испечь пирог?` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `		    		Kiaušinių reikia, norint iškepti pyragą <br>O kur gali iškepti pyragą?`}`}`}</div>` : `${$visited == 7 ? `<img class="illustration"${add_attribute("src", task$7, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You need to fill <br>the empty bucket with water.` : `${$language == "RU" ? `А вот пустое ведро <br>нужно наполнить водой.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Į tuščią kibirą <br>reikia pripilti vandens.`}`}`}</div>` : `${$visited == 8 ? `<img class="illustration"${add_attribute("src", task$6, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `Manor&#39;s beautiful gardens <br>don&#39;t grow if you don&#39;t water them.` : `${$language == "RU" ? `Дивные сады поместья <br>не растут, если их не поливать.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Nuostabūs dvaro sodai <br>neaugs, jeigu jų nelaistysi.`}`}`}</div>` : `${$visited == 9 ? `<img class="illustration"${add_attribute("src", task$2, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `The smell of orchids makes you dizzy. <br>The graves, to which you need to take flowers, <br>could be near the chapel.` : `${$language == "RU" ? `От запаха орхидей кружит голову. <br>А могилы, которым нужны цветы, <br>могут быть где-то у церквушки.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Nuo orchidėjų kvapo sukasi galva. <br>O kapai, ant kurių reikia nunešti gėlių, gali būti prie cerkvės.`}`}`}</div>` : `${$visited == 10 ? `<img class="illustration"${add_attribute("src", task$a, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You can hear some happy barking in a distance. <br>One cannot simply ignore the doggos.` : `${$language == "RU" ? `Издалека слышен весёлый собачий лай. <br>Нельзя просто взять и не посмотреть на собачек.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Iš toli girdisi linksmas šunų lojimas. <br>Tiesiog neįmanoma nežvilgtelėti į šuniukus.`}`}`}</div>` : `${$visited == 11 ? `<img class="illustration"${add_attribute("src", task$9, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You seem to have been everywhere, <br>except for the croquet court.` : `${$language == "RU" ? `Вы, кажется, уже везде были, <br>кроме площадки для крокета.` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Išskyrus kroketo aikštelę, <br>jūs jau, berods, visur apsilankėte.`}`}`}</div>` : `${$visited == 12 ? `<img class="illustration"${add_attribute("src", task$a, 0)}>
<div class="where-next too_early">${slots.default ? slots.default({}) : ``}<br><br>
${$language == "EN" ? `You have been everywhere. <br>Return to the museum!` : `${$language == "RU" ? `Вы везде побывали! <br>Возвращайтесь в музей!` : `${$language == "LA" ? `Nimis mane es! <br>Alicubi ire necesse est.` : `			    	Jūs jau aplankėte visas vietas. <br>Grįžkite į muziejų!`}`}`}</div>` : ``}`}`}`}`}`}`}`}`}`}`}`}`}</section>`;
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

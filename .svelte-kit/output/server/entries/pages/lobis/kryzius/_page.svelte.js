import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/index2.js";
const bowl = "/_app/immutable/assets/bowl.b639b93e.png";
const entrance = "/_app/immutable/assets/entrance.49b57398.jpg";
const map_piece = "/_app/immutable/assets/1.97ffe4b4.png";
const map = "/_app/immutable/assets/map-1.8da3bc18.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-17qxhho{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6;background-color:white;border-radius:5px;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);font-size:16pt}h1.svelte-17qxhho{width:90%;font-weight:800;font-size:clamp(40px, 12vw, 64px);line-height:clamp(40px, 12vw, 64px);;;color:#D33F37;padding:0;margin:50px 0 60px 0}.subh.svelte-17qxhho{font-size:12px;text-align:center;width:89%;margin:-50px 0 30px 0;font-weight:600;text-transform:uppercase;letter-spacing:1.5px}article.svelte-17qxhho{padding:0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);margin-bottom:20px}.where-next.svelte-17qxhho{background-color:#EEDC83;color:black;width:105%;box-sizing:border-box;padding:clamp(40px, 12.5vw, 80px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);margin:0px 0 20px 0;box-shadow:0 20px 20px -15px rgba(0,0,0, 0.4);border-radius:5px;font-size:24px;font-size:clamp(24px, 6vw, 32px)}.highlighted-question.svelte-17qxhho{font-style:italic;font-weight:bold;color:#D33F37}.illustration.svelte-17qxhho{width:clamp(320px, 100vw, 640px);z-index:10;margin:clamp(-160px, -25vw, -80px) 0 clamp(-80px, -12.5vw, -40px) 0;user-select:none;pointer-events:none}.map_section.svelte-17qxhho{color:white;font-size:16pt;padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let language = "LT";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1a6xnip_START -->${language == "LT" ? `${$$result.title = `<title>Kryžius – Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">` : `${$$result.title = `<title>Крест – Клад Маркутья</title>`, ""}
	<meta name="description" content="Квест">`}<!-- HEAD_svelte-1a6xnip_END -->`, ""}



${language == "RU" ? `<section class="svelte-17qxhho"><img class="illustration svelte-17qxhho"${add_attribute("src", map_piece, 0)}>
	<h1 class="svelte-17qxhho">Крест</h1>
	<p class="subh svelte-17qxhho">Первая остановка<br>в поисках Клада Маркутья</p>
	<article class="svelte-17qxhho">По левой стороне от входа в парк, во времена Варвары Пушкиной, на каменном фундаменте стоял высокий крест, изготовленный из железнодорожных рельсов. У его основания хозяйка усадьбы оставляла чашу с монетками для бедных людей.
	</article>


	<img width="105%"${add_attribute("src", entrance, 0)}>
	<article class="svelte-17qxhho"><br>
	Сейчас в этой чаше лежит только обрывок бумаги с гербовой печатью и подписью. Похоже, это очень важный исторический документ. Но, где же остальная часть текста, и что в нем было написано? Кому следует отдать случайную находку?
	</article>
	<img class="illustration svelte-17qxhho"${add_attribute("src", bowl, 0)}>

	<div class="where-next svelte-17qxhho">Может быть слуги поместья смогут нам помочь? Нужно срочно их найти.
		<br><br>
		<span class="highlighted-question svelte-17qxhho">Где можно найти слуг?</span></div></section>


	<div class="map_section svelte-17qxhho">Теперь у вас есть первая часть карты. Куда дальше?

	</div>` : `${(language = "LT") ? `<section class="svelte-17qxhho"><img class="illustration svelte-17qxhho"${add_attribute("src", map_piece, 0)}>
	<h1 class="svelte-17qxhho">Kryžius</h1>
	<p class="subh svelte-17qxhho">Pirmoji stotelė<br>ieškant Markučių lobio</p>
	<article class="svelte-17qxhho">Varvaros Puškinos laikais, prie įėjimo į parką iš kairės pusės ant akmeninio postamento stovėjo aukštas, iš geležinkelio bėgių pagamintas kryžius. Prie pat jo pamatų dvaro šeimininkė palikdavo monetų pilną indelį skirtą vargingiems žmonėms. 	</article>


	<img width="105%"${add_attribute("src", entrance, 0)}>
	<article class="svelte-17qxhho"><br>
	Šiandien tame indelyje rasite tik nedidelę popieriaus skiautę su parašu ir herbiniu antspaudu. Atrodo, jog tai turėtų būti svarbus istorinis dokumentas. Tačiau kur kita dokumento dalis? Kas jame parašyta? Kam vertėtų parodyti keistąjį radinį?
	</article>
	<br><br>
	<img class="illustration svelte-17qxhho"${add_attribute("src", bowl, 0)}>

	<div class="where-next svelte-17qxhho">Kam vertėtų parodyti keistąjį radinį? Galbūt dvaro tarnai galėtų jums padėti?
		<br><br>
		<span class="highlighted-question svelte-17qxhho">Kur reikėtų ieškoti tarnų?</span></div></section>


	<div class="map_section svelte-17qxhho">Kur toliau?

	</div>` : ``}`}

	<img${add_attribute("src", map, 0)} width="100%">`;
});
export {
  Page as default
};

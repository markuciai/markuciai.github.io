import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { O as Offer } from "../../../chunks/Offer.js";
const scroller_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--module:100px}#scroller.svelte-qm0gon{position:relative;width:800px;height:300px;border:solid 1px red}.scroller_element.svelte-qm0gon{width:100px;height:var(--bazinga);position:relative;position:absolute;top:0px;right:0px;border:solid 1px blue}#one.svelte-qm0gon{background:blueviolet;top:100px;right:200px}#two.svelte-qm0gon{background:teal;width:200px}",
  map: null
};
const Scroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div style="--bazinga = 150px "></div>




<div id="scroller" class="svelte-qm0gon"><div class="scroller_element svelte-qm0gon" id="one"></div>
<div class="scroller_element svelte-qm0gon" id="two"></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-9b4z94_START -->${`${`${`${$$result.title = `<title>Markučių Lobis</title>`, ""}
	<meta name="description" content="Žaidimas">`}`}`}<!-- HEAD_svelte-9b4z94_END -->`, ""}



${validate_component(Offer, "Offer").$$render($$result, {}, {}, {})}
<br>


${validate_component(Scroller, "Scroller").$$render($$result, {}, {}, {})}
blabl

<section>${`${`${`

<br>
<h1>Markučių Lobis</h1>
<p class="subh">Markučių dvaro muziejaus<br>orientacinis žaidimas</p>
<article>Markučių dvarą 1867 m. savo žmonai ir penkiems vaikams pastatė geležinkelių inžinierius Aleksejus Melnikovas. Be pagrindinio ponų namo buvo įkurtas angliškas parkas, pasodintas vaismedžių sodas, iškasti tvenkiniai ir šulinys, pastatytos arklidės, oranžerija, duonkepė (kepyklėlė), tarnų namelis, ledainė, vištidė, virtuvė, įrengtos kroketo ir teniso žaidimų aikštelės.
<br><br>
Kai vaikai užaugo, dvaras ir jo 270 hektarų valda buvo padovanota vyriausiajai dukrai Varvarai (Barborai). 1883 m. į Markučius atvyko žymaus rusų poeto Aleksandro Puškino sūnus Grigorijus. Jie su Varvara susituokė ir kartu pragyveno 22 metus. Abu daug keliavo, o iki 1899 m. pakaitomis gyveno tai Markučių, tai Michailovsko dvaruose. Vilniuje jie daug laiko ir lėšų skyrė labdarai, išlaikė vaikų prieglaudą „Jasli“.
<br><br>
Po Grigorijaus mirties Varvara dar pragyveno 30 metų, tačiau daugiau nebeištekėjo. Iki pat mirties ji svajojo išpildyti savo velionio vyro valią ir dvare įkurti muziejų, kuriame visi norintys galėtų pamatyti žymaus poeto Aleksandro Puškino daiktus. Varvara mirė 1935 m. ir buvo palaidota šalia savo vyro Grigorijaus. 
<br><br>
O dabar įsivaizduokite, kad jūs laiko mašina nusikeliate į praeitį ir lankotės Markučių dvare jo klestėjimo laikais. Jums reikės atlikti 12 užduočių, kurios padės surinkti paslaptingą senovinį dokumentą ir rasti Markučių dvaro lobį.		
</article>`}`}`} </section>




<section></section>
<br><br>`;
});
export {
  Page as default
};

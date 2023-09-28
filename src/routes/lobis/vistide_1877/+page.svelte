 <script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/6.png';
import task from '$lib/images/illustrations/eggs.png';

import birdhouse from '$lib/images/archival/birdhouse.jpg';
import vanyusha from '$lib/images/archival/vanyusha.jpg';


const station_id = 6

let show_offer = true
let show_station = false


onMount(async () => { 
	if ($visited >= 0) {
		show_offer = false
	}

	if($visited == station_id - 1) {
		$visited = station_id
	}

	if ($visited >= station_id) {
		show_station = true;
	}
});

</script>


<svelte:head>
{#if $language == "EN"}
	<title>Chicken coop — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Птичник и ледник – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Vištidė ir ledainė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>


{#if show_offer}
<Offer />
{:else if show_station}

<section>

<img class="illustration" src={map_piece}>

{#if $language == "EN"}

<h1>Chicken Coop And Icehouse</h1>
<p class="subh">The sixth stop<br>in the quest for Markučiai Treasure</p>
<article>
As you approach the chicken coop, you see Vanyusha waving at you excitedly. After you hand him the chicken feed and explain your quest for the missing document, he eagerly offers his help. 
</article>


<img width=105% src={vanyusha}>
<article>
<br>
He has seen a similar piece of paper near a raspberry bush by the glacier. He'll to bring it to you right away. 
</article>
<br>&nbsp;<br>&nbsp;<br>&nbsp;
<img class="illustration" src={task}>

<div class="where-next">
In return, he asks you to deliver a basket of fresh eggs to Masha. She will make a big pie for the guests and a sweet cream puff for Ilyusha. Today is his birthday.
	<br><br>
	<span class="highlighted-question">Where should you bring a basket full of eggs?</span>
</div>

{:else if $language == "RU"}

<h1>Птичник и ледник</h1>
<p class="subh">Шестая остановка<br>в поисках Клада Маркутья</p>
<article>
	Ванюша увидел вас еще издали и весело замахал руками. Вы отдали ему корм для цыплят и рассказали о своих поисках.
</article>


<img width=105% src={vanyusha}>
<article>
<br>
Мальчик с радостью поможет вам — он видел похожий обрывок бумаги у куста малины рядом с ледником и сейчас же принесет его вам.
</article>
<br>&nbsp;<br>&nbsp;<br>&nbsp;
<img class="illustration" src={task}>

<div class="where-next">
	А вы уж не откажите — отнесите корзинку со свежими яйцами Маше. Пусть она испечет большой пирог для гостей и сладкую ватрушку для Илюши — он сегодня именинник.
	<br><br>
	<span class="highlighted-question">Куда нужно отнести корзинку с яйцами?</span>
</div>

{:else if $language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Vištidė ir ledainė</h1>
<p class="subh">Šeštoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Vaniuša jus pastebi iš tolo ir pamojuoja. Jūs atiduodat jam viščiukų lesalą ir papasakojate apie savo paieškas.
</article>


<img width=105% src={vanyusha}>
<article>
<br>
Berniukas su džiaugsmu pasiruošęs jums padėti – jis matė panašią popieriaus skiautę prie ledainės po aviečių krūmu ir tuoj pat jį atneš.
</article>
<br><br><br><br>
<img class="illustration" src={task}>

<div class="where-next">
	O jūs būkit malonūs ir nuneškite pintinę su šviežiais kiaušiniais Mašai (Marijai). Tegu ji iškepa didelį pyragą svečiams ir saldžių varškės pyragėlių Iliušai (mažajam Iljai), nes šiandien jo vardadienis.
	<br><br>
	<span class="highlighted-question">Kur reikėtų nunešti pintinę su kiaušiniais?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>There's nobody in the chicken coop but a few chickens.</Stopper>
{:else if $language == "RU"}
<Stopper>В курятнике нет никого, кроме нескольких куриц.</Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Vištidėje nėra nieko, apart keleto vištų.</Stopper>
{/if}


{/if} <!-- Module types-->






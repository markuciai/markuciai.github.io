<script>
import { onMount } from 'svelte';
import { browser } from "$app/environment";
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/3.png';
import task from '$lib/images/illustrations/fishing_rod.png';

import stables from '$lib/images/archival/stables.jpg';


const station_id = 3

let show_offer = true
let show_station = false


// onMount(async () => { 
if (browser) {
	if ($visited >= 0) {
		show_offer = false
	}

	if($visited == station_id - 1) {
		$visited = station_id
	}

	if ($visited >= station_id) {
		show_station = true;
	}
}
// });

</script>


<svelte:head>
{#if $language == "EN"}
	<title>The Stables — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Конюшня – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Arklidės – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>

 


{#if show_offer}
<Offer />
{:else if show_station}

<section>
<img class="illustration" src={map_piece}>
{#if $language == "EN"}


<h1>The Stables</h1>
<p class="subh">The third stop<br>in the quest for Markučiai Treasure</p>
<article>
You swiftly fulfilled the request: you handed over the saddle to the coachman and told him of your search for an important document. Mr. Michal had served the Pushkin estate in Markuchiai for many years, driving Grigory and Varvara to the city and neighboring provinces. 
</article>
<img width=105% src={stables}>
<br><br>

<img class="illustration" src={task}>

<div class="where-next">
Today, he found a similar scrap of paper by the stables, which he would gladly give to you if you don't mind taking his fishing rod to his younger son Taras.
	<br><br>
	<span class="highlighted-question">Where should you bring the&nbsp;fishing&nbsp;rod?</span>
</div>


{:else if $language == "RU"}


<h1>Конюшня</h1>
<p class="subh">Третья остановка<br>в поисках Клада Маркутья</p>
<article>
Вы легко справились с этой просьбой — передали кучеру седло и рассказали о поисках важного документа. Пан Михал много лет служил в усадьбе Пушкиных в Маркутье, возил Григория и Варвару в город и соседние губернии. 

</article>
<img width=105% src={stables}>
<br><br>

<img class="illustration" src={task}>

<div class="where-next">
Сегодня у конюшни он обнаружил похожий обрывок бумаги, который с удовольствием отдаст вам, если не откажетесь отнести удочку его младшему сыну Тарасу. 
<br><br>
<span class="highlighted-question">Куда нужно отнести&nbsp;удочку?</span>
</div>

{:else if $language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->

<h1>Конюшня</h1>
<p class="subh">Trečioji stotelė<br>ieškant Markučių lobio</p>
<article>
	Šaunuoliai, jūs lengvai įvykdėt tarnų prašymą – naują balną atidavėt vežikui-vadeliotojui ponui Michalui, kuris ilgą laiką tarnavo pas Puškinus Markučių dvare ir vežiojo savo šeimininkus į miestą bei į kitas gubernijas.
</article>
<img width=105% src={stables}>
<br><br>

<img class="illustration" src={task}>

<div class="where-next">
	Jums užsiminus apie svarbaus dokumento paiešką, vežikas prisiminė, jog prie arklidžių kaip tik rado dokumento skiautę ir mielai ją atiduos, jeigu jūs nunešite meškerę jo jauniausiajam sūnui Tarasui.
	<br><br>
	<span class="highlighted-question">Kur reikėtų nunešti&nbsp;meškerę?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>The coachman has left, only the old horse looks at you and snorts.</Stopper>
{:else if $language == "RU"}
<Stopper>Кучер отошёл, только старая лошадь смотрит вам в лицо и фыркает. </Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Vežikas nuėjo, tik senas arklys žiūri jums į akis ir prunkščia.</Stopper>
{/if}


{/if} <!-- Module types-->




<!-- <div class="map_section">
	Jūs gavote trečiąją dokumento dalį.

</div> -->


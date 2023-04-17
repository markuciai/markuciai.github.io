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
	<title>Stables — Markučiai Treasure</title>
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
{#if $language == "EN"}

English

{:else if $language == "RU"}

<img class="illustration" src={map_piece}>
<h1>Конюшня</h1>
<p class="subh">Trečioji stotelė<br>ieškant Markučių lobio</p>
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

<img class="illustration" src={map_piece}>
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
<Stopper>You've come to the wrong place.</Stopper>
{:else if $language == "RU"}
<Stopper>Кучер отошёл, только старая лошадь смотрит вам в лицо и фыркает. </Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Ne ten atejote.</Stopper>
{/if}


{/if} <!-- Module types-->




<div class="map_section">
	Jūs gavote trečiąją dokumento dalį.

</div>


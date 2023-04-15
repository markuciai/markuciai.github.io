<script>
import {onMount} from 'svelte';
import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/2.png';
import task from '$lib/images/illustrations/eggs.png';

import birdhouse from '$lib/images/archival/birdhouse.jpg';
import vanyusha from '$lib/images/archival/vanyusha.jpg';


const station_id = 6
let visited = -1
let language = "LT"

let show_offer = true
let show_station = false


onMount(async () => { 
	visited = localStorage.visited;

	if (visited >= 0) {
		show_offer = false
	}

	if(visited == station_id - 1) {
		visited = station_id
		localStorage.visited = visited;
		window.location.reload();
	}
	if (visited >= station_id) {
		show_station = true;
	}

	language = localStorage.language;

	a_thing('success')
});

</script>


<svelte:head>
{#if language == "EN"}
	<title>Birdhouse and icehouse — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if language == "RU"}
	<title>Птичник и ледник – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
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
{#if language == "EN"}

English

{:else if language == "RU"}

По-русски

{:else if language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->

<img class="illustration" src={map_piece}>
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
{#if language == "EN"}
<Stopper>You've come to the wrong place.</Stopper>
{:else if language == "RU"}
<Stopper>А зачем вы сюда пришли? </Stopper>
{:else if language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Ne ten atejote.</Stopper>
{/if}


{/if} <!-- Module types-->






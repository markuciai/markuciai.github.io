<script>
import { onMount } from 'svelte';
import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/3.png';
import task from '$lib/images/illustrations/fishing_rod.png';

import stables from '$lib/images/archival/stables.jpg';


const station_id = 3
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
	<title>Stables — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if language == "RU"}
	<title> – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
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
{#if language == "EN"}

English

{:else if language == "RU"}

По-русски

{:else if language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->

<img class="illustration" src={map_piece}>
<h1>Arklidės</h1>
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




<div class="map_section">
	Jūs gavote trečiąją dokumento dalį.

</div>


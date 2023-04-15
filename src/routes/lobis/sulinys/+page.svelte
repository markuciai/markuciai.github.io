<script>
import {onMount} from 'svelte';
import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/8.png';
import task from '$lib/images/illustrations/bucket.png';

import sulinys from '$lib/images/archival/sulinys.png';


const station_id = 8
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
	<title> — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if language == "RU"}
	<title> – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Šulinys – Markučių Lobis</title>
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
<h1>Šulinys</h1>
<p class="subh">Aštuntoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Šis šulinys buvo iškastas 1867 m., kuomet buvo statomas Melnikovų dvaras Markučiuose. Kiekvieną rytą kiemsargis specialia pompa pumpavo vandenį, kuris vamzdžiais tekėjo į specialią namuose esančią talpą.
</article>


<img width=105% src={sulinys}>
<article>
<br>
Dalį vandens šildydavo ir naudojo prausimuisi bei vonios malonumams. Taip, XIX a. šiame name jau buvo įrengta vonia ir tualetas. Na bet grįžkim prie mūsų reikalų, jums juk reikia pasemti vandens ir  palaistyti orchidėjas. Prie šulinio stovi kibiras. Neskubėkit. Prieš leidžiant kibirą į šulinį, žvilgtelkit į kibiro vidų. Matote? Ant dugno baltuoja popieriaus skiautė! Paėmėt ją? Tai būtent tai ko jums reikia.
</article>
<br><br><br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Dabar drąsiai semkite vandenį ir eikite ieškoti orchidėjų
	<br><br>
	<span class="highlighted-question">Kur reikėtų ieškoti orchidėjų?</span>
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

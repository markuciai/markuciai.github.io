<script>
import { onMount } from 'svelte';
import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/2.png';
import task from '$lib/images/illustrations/saddle.png';

import servant_house from '$lib/images/archival/servant_house.jpg';
import servants from '$lib/images/archival/servants.jpg';


const station_id = 2
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
	<title>Tarnų namelis – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if show_offer}
<Offer />
{:else if show_station}
<!-- Station languages -->

{#if language == "EN"}

English

{:else if language == "RU"}

Лорем ипсум

{:else if language == "LA"}

Latin

{:else} <!-- LT -->
<section>	
	<img class="illustration" src={map_piece}>
	<h1>Tarnų namelis</h1>
	<p class="subh">Antroji stotelė<br>ieškant Markučių lobio</p>
	<article>
		Tarnaitė Ona ir jos vyras Viačeslavas jus pasitinka ant savo jaukių namų slenksčio.
	</article>
	<img width=105% src={servants}>
	<br>
	<article>
		Jie taip pat parke aptiko panašaus dokumento skiautę su įrašu, bet nežino, ką su ja daryti.
	</article>


	<img width=105% src={servant_house}>
	<article>
	<br>
		Tarnai užsiėmę nesibaigiančiais darbais sode, todėl neturi laiko nežinomo dokumento paieškoms. Tačiau girdėjo, jog surinkus visas dokumento dalis ir nunešus jį į ponų namą galima gauti radybų.
	</article>
	<img class="illustration task" src={task}>

	<div class="where-next">
		Ana ir Viačeslavas sutinka jums atiduoti rastą dokumento dalį, jeigu jūs jiems pagelbėsit ir įvykdysit jų prašymą – nunešit naują balną ponui Michalui.
		<br><br>
	<span class="highlighted-question">Kur reikėtų nunešti balną?</span>
	</div>

</section>


<div class="map_section">
	Kur toliau?
</div>


{/if} <!-- Main page Languages -->
{:else}

<!-- Stopper-->
{#if language == "EN"}
<Stopper>Servants' quarters doors are shut.</Stopper>
{:else if language == "RU"}
<Stopper>Двери домика слуг заперты. </Stopper>
{:else if language == "LA"}
<Stopper>Двери домика слуг заперты. </Stopper>
{:else}
<Stopper>Tarnu namelio durys užrakintos.</Stopper>
{/if}


{/if} <!-- Module types -->


<style>
.where-next {

	/* padding: clamp(40px, 12.5vw, 80px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px); */
	padding: clamp(180px, 25vw, 240px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);
	/* padding: 160px 10px 80px 20px; */
	margin: clamp(-160px, -25vw, -110px) 0 20px 0;


}

.illustration {
	margin: clamp(-80px, -25vw, -40px) 0 clamp(-80px, -12.5vw, -40px) 0;
}
</style>

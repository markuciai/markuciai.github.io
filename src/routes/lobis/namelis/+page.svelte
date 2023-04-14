<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import task_object from '$lib/images/illustrations/saddle.png';
	import servant_house from '$lib/images/archival/servant_house.jpg';
	import servants from '$lib/images/archival/servants.jpg';


	import Stopper from '../../Stopper.svelte';

	import map_piece from '$lib/images/map-pieces/2.png';
	import map from '$lib/images/map/2.png';
	

	const station_id = 2
	let show_station = false
	let language = "LT"
	let visited


	onMount(async () => { 
		visited = localStorage.getItem("visited")

		if(visited == station_id - 1) {
			visited = station_id
			localStorage.setItem("visited", visited);
		}
		if (visited >= station_id) {
			show_station = true;
		}

		language = localStorage.getItem("language")

		a_thing('success')
	});
	


	const count = writable(0);
	console.log($count); // logs 0

	count.set(1);
	console.log($count); // logs 1

	$count = 2;
	console.log($count); // logs 2


</script>

<svelte:head>
	<title>Tarnų namelis – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
</svelte:head>




{#if show_station}
<section>


	
	<img class="illustration" src={map_piece}>
	<h1>Tarnų namelis</h1>
	<p class="subh">Antroji stotelė<br>ieškant Markučių lobio</p>
	<article>
	Tarnaitė Ona ir jos vyras Viačeslavas jus pasitinka ant savo jaukių namų slenksčio. Jie taip pat parke aptiko panašaus dokumento skiautę su įrašu, bet nežino, ką su ja daryti.
	</article>


	<img width=105% src={servants}>
	<article>
	<br>
	Tarnai užsiėmę nesibaigiančiais darbais sode, todėl neturi laiko nežinomo dokumento paieškoms. Tačiau girdėjo, jog surinkus visas dokumento dalis ir nunešus jį į ponų namą galima gauti radybų.
	</article>
	<img class="illustration task" src={task_object}>

	<div class="where-next">
		Ana ir Viačeslavas sutinka jums atiduoti rastą dokumento dalį, jeigu jūs jiems pagelbėsit ir įvykdysit jų prašymą – nunešit naują balną ponui Michalui.
		<br><br>
		<span class="highlighted-question">Kur reikėtų nunešti balną?</span>
	</div>

</section>


	<div class="map_section">
		Kur toliau?

	</div>
	<img src={map} width=100%>



{:else}

{#if language == "LT"}
<Stopper>Tarnu namelio durys užrakintos.</Stopper>
{:else}
<Stopper>Двери домика слуг заперты. </Stopper>
{/if}

{/if}




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

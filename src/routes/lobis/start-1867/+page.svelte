<script>
	import { onMount } from 'svelte';

	import Stopper from '../../Stopper.svelte';

	import task_object from '$lib/images/illustrations/bowl.png';

	import map_piece from '$lib/images/map-pieces/1.png';


	const station_id = 0
	let visited = -1
	let language = "LT"

	let show_station = true


    let date_started = new Date();
    let time = date_started.getTime();
    let date_started_h = date_started.getHours().toString().padStart(2,"0");
	let date_started_m = date_started.getMinutes().toString().padStart(2,"0");
	let date_started_s = date_started.getSeconds().toString().padStart(2,"0");
	
	onMount(async () => { 
		visited = localStorage.visited

		// not playing → playing
		if(visited == station_id - 1) {
			visited = station_id
			localStorage.visited = visited;
			localStorage.date_started = date_started;
			window.location.reload();
		}

		// already playing
		if (visited > station_id) {
			date_started = new Date( Date.parse(localStorage.date_started) );
			date_started_h = date_started.getHours().toString().padStart(2,"0");
			date_started_m = date_started.getMinutes().toString().padStart(2,"0");
			date_started_s = date_started.getSeconds().toString().padStart(2,"0");
		}

		language = localStorage.language
	});

</script>



<svelte:head>
{#if language == "EN"}
	<title>Cross — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if language == "RU"}
	<title>Крест – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
	<title>Crucis – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Kryžius – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if show_station}


{#if language == "EN"}

Lorem

{:else if language == "RU"}
<section>
<!-- <img class="illustration" src={map_piece}> -->
<h1>Клад Маркутья</h1>
<p class="subh">Вы начали своё путешествие<br>в {date_started_h}:{date_started_m}:{date_started_s}</p>

<article>
Добро пожаловать в игру! Ищите таблички разбросанные по парку. Читайте подсказки и сканируйте таблички в нужном порядке.
</article>

[инструкция]

<article>
Любое путешествие начинается со входа. У поместья были ворота, а у ворот стоял большой деревянный крест.
</article>




<div class="where-next">
	Вы, наверно, не с неба упали, а поднялись в музей по лестнице ведущей от входа.
	<br><br>
	<span class="highlighted-question">Где у парка вход? <br>Где раньше стоял крест?</span>
</div>

</section>

<div class="map_section">
	Спускайтесь вниз. Из музея ко входу. Из настоящего в прошлое.
</div>

{:else if language == "LA"}

Latin

{:else}

LT

{/if} <!-- Main page Languages-->

{:else}
<!-- Stopper-->
{#if language == "EN"}
<Stopper>Вы уже начали своё путешествие!</Stopper>
{:else if language == "RU"}
<Stopper>Вы уже начали своё путешествие!</Stopper>
{:else if language == "LA"}
<Stopper>Вы уже начали своё путешествие! </Stopper>
{:else}
<Stopper>Вы уже начали своё путешествие!</Stopper>
{/if}



{/if} <!-- Module types-->
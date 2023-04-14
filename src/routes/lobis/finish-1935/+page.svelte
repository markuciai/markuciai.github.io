<script>
	import { onMount } from 'svelte';
	import Offer from '../Offer.svelte';
	import Stopper from '../../Stopper.svelte';

	import task_object from '$lib/images/illustrations/bowl.png';
	import entrance from '$lib/images/archival/entrance.jpg';
	import map_piece from '$lib/images/map-pieces/1.png';


	const station_id = 13
	let visited
	let language = "LT"

	let show_station = false


	let date_started = new Date();
	let date_started_h
	let date_started_m
	let date_started_s

	let date_finished = new Date();
	let date_finished_h
	let date_finished_m
	let date_finished_s

	
    const d = new Date();
    let time = d.getTime();
    let time_h = d.getHours().toString().padStart(2,"0");
	let time_m = d.getMinutes().toString().padStart(2,"0");
	let time_s = d.getSeconds().toString().padStart(2,"0");


	onMount(async () => { 
		visited = localStorage.getItem("visited")

		if(visited == station_id - 1) {
			visited = station_id
			// localStorage.setItem("visited", visited);
			localStorage.visited = visited;
			localStorage.date_finished = d;
			window.location.reload();
		}
		
		if (visited == station_id) {
			show_station = true;


			// date_started.setTime( Date.parse(localStorage.date_started) );
			date_started = new Date( Date.parse(localStorage.date_started) );
			date_started_h = date_started.getHours().toString().padStart(2,"0");
			date_started_m = date_started.getMinutes().toString().padStart(2,"0");
			date_started_s = date_started.getSeconds().toString().padStart(2,"0");


			// date_finished.setTime( Date.parse(localStorage.date_finished) );
			date_finished = new Date( Date.parse(localStorage.date_finished) );
			date_finished_h = date_finished.getHours().toString().padStart(2,"0");
			date_finished_m = date_finished.getMinutes().toString().padStart(2,"0");
			date_finished_s = date_finished.getSeconds().toString().padStart(2,"0");


		}

		language = localStorage.getItem("language");

	});

</script>



<svelte:head>
{#if language == "EN"}
	<title>Finish Line - Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if language == "RU"}
	<title>Финиш - Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
	<title>Finio – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Kryžius – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if show_station}



{#if language == "EN"}

Lorem en

{:else if language == "RU"}
<section>
<!-- <img class="illustration" src={map_piece}> -->
<h1>Победа!</h1>
<p class="subh">Финишная линия квеста<br>в поместье Маркутья</p>
<article>
	Вы собрали карту поместья и завещание Варвары. Вы достигли финиша!
</article>
<article>
	Начало поисков: {date_started_h}:{date_started_m}:{date_started_s} | 
	Клад найден:  {date_finished_h}:{date_finished_m}:{date_finished_s}
</article>


</section>


{:else if language == "LA"}

Lorem

{:else}

<section>
	<img class="illustration" src={map_piece}>
	<h1>Kryžius</h1>
	<p class="subh">Pirmoji stotelė<br>ieškant Markučių lobio</p>
	<article>
		Varvaros Puškinos laikais, prie įėjimo į parką iš kairės pusės ant akmeninio postamento stovėjo aukštas, iš geležinkelio bėgių pagamintas kryžius. Prie pat jo pamatų dvaro šeimininkė palikdavo monetų pilną indelį skirtą vargingiems žmonėms. 	</article>


	<img width=105% src={entrance}>
	<article>
	<br>
	Šiandien tame indelyje rasite tik nedidelę popieriaus skiautę su parašu ir herbiniu antspaudu. Atrodo, jog tai turėtų būti svarbus istorinis dokumentas. Tačiau kur kita dokumento dalis? Kas jame parašyta? Kam vertėtų parodyti keistąjį radinį?
	</article>
	<br><br>
	<img class="illustration" src={task_object}>

	<div class="where-next">
		Kam vertėtų parodyti keistąjį radinį? Galbūt dvaro tarnai galėtų jums&nbsp;padėti?
		<br><br>
		<span class="highlighted-question">Kur reikėtų ieškoti&nbsp;tarnų?</span>
	</div>

</section>


	<div class="map_section">
		Kur toliau?

	</div>

{/if} <!-- Main page Languages-->

{:else}
<!-- Stopper-->
{#if language == "EN"}
<Stopper>The safe is locked.</Stopper>
{:else if language == "RU"}
<Stopper>Вы дёргаете за ручку сейфа, но тот заперт. <br>Вы ещё не все кусочки карты собрали! <br>Возвращайтесь в парк.</Stopper>
{:else if language == "LA"}
<Stopper></Stopper>
{:else}
<Stopper>Tarnu namelio durys užrakintos.</Stopper>
{/if}



{/if} <!-- Module types-->
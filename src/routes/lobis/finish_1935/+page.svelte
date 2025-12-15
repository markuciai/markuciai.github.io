<script>
// import { browser } from "$app/environment";

import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import Kepure from '$components/Kepure.svelte';
import splash from '$lib/images/illustrations/splash.png';
import dvaras_bw from '$lib/images/archival/dvaras_bw.jpg';

import task from '$lib/images/illustrations/doggo.png';


const station_id = 13
let show_station = $state(false)


let date_started = new Date();
let date_started_h
let date_started_m
let date_started_s

let date_finished = new Date();
let date_finished_h
let date_finished_m
let date_finished_s

let time_delta = 0



// if (browser) {
onMount(async () => { 
	console.log("mount", show_station)
	if(globe.progress == station_id - 1) {
		globe.progress = -1
		localStorage.finished = true
		localStorage.date_finished = date_finished;
		show_station = true
		console.log("finished")
	}
	
	if (localStorage.finished) {
		console.log("setting")
		show_station = true
		console.log("setting", show_station)


		date_started = new Date( Date.parse(localStorage.date_started) );
		date_started_h = date_started.getHours().toString().padStart(2,"0");
		date_started_m = date_started.getMinutes().toString().padStart(2,"0");
		date_started_s = date_started.getSeconds().toString().padStart(2,"0");

		date_finished = new Date( Date.parse(localStorage.date_finished) );
		date_finished_h = date_finished.getHours().toString().padStart(2,"0");
		date_finished_m = date_finished.getMinutes().toString().padStart(2,"0");
		date_finished_s = date_finished.getSeconds().toString().padStart(2,"0");
		
		time_delta = ms_to_time(Math.abs(date_finished.getTime() - date_started.getTime() ) ) ;
		console.log("setting", time_delta)
	}
// }
});

function ms_to_time(ms) {
	let hours = Math.floor(ms / (1000 * 60 * 60)).toFixed(0);
	ms -= hours * 1000 * 60 * 60
	let minutes = Math.floor(ms / (1000 * 60)).toFixed(0);
	ms -= minutes * 1000 * 60
	let seconds = (ms / 1000).toFixed(0);
	return hours.toString().padStart(2,"0") + ":" + minutes.toString().padStart(2,"0") + ":" + seconds.toString().padStart(2,"0");
}

</script>



<svelte:head>
{#if globe.language == "EN"}
	<title>Finish Line - Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Финиш - Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title>Finio – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Finišas – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if show_station}

<section>
<img class="map_piece_header_illustration" src={splash}>
<!-- <Kepure></Kepure> -->



{#if globe.language == "EN"}

<h1>Finish!</h1>
<p class="subh">The end of the Markučiai Museum<br>treasure hunt game</p>
<!-- <article>
	Jūs surinkote dvaro žemėlapį ir Aleksėejaus Melnikovo dokumentaą.
</article> -->

<div class="stats_wrapper">
<div class="stats_block">
	<p>Started<br>{date_started_h}:{date_started_m}:{date_started_s}</p>
	<p>Treasure found<br>{date_finished_h}:{date_finished_m}:{date_finished_s}</p>
	<p>Errors<br>{localStorage.mistakes}</p>
</div>
<div class="stats_block_bottom">
	<p>Time </p>
	<p class="laikas">{time_delta}</p>
</div>
</div>

<!-- <h1>Ačiū už žaidimą</h1> -->


<img src={dvaras_bw} width="105%" />

<!-- <article>
	<br/><br/>
	Kokias paslaptis saugo pati dvaro sodyba? Kur buvo „slaptasis“ kambarys? Ką slėpė krosnyje? Kokias galvas kapodavo valgomajame?
</article>
<article>
	Pratęsti pažintį su Markučių dvaru galite užsisakę ekskursiją muziejaus kasoje arba iš anksto susisiekę <a href="mailto:edukacija.vokieciu6@vilniausmuziejus.lt">elektropaštu</a>.
</article>
<article>
<a href="https://md.vilniausmuziejus.lt/#educations">Daugiau informacijos apie Markučių dvare vykdomas edukacijas</a>.
	<br/>&nbsp;
</article> -->

{:else if globe.language == "RU"}


<h1>Финиш!</h1>
<p class="subh">Финишная линия <br>квеста поместья Маркутья</p>
<article>
	Вы собрали карту поместья и завещание Варвары.
</article>


<div class="stats_wrapper">
<div class="stats_block">
	<p>Начали квест<br>{date_started_h}:{date_started_m}:{date_started_s}</p>
	<p>Нашли сокровище<br>{date_finished_h}:{date_finished_m}:{date_finished_s}</p>
	<p>Ошибок<br>{localStorage.mistakes}</p>
</div>
<div class="stats_block_bottom">
	<p>Время </p>
	<p class="laikas">{time_delta}</p>
</div>
</div>

<article>
	Спасибо, что играли! 
</article>

<img src={dvaras_bw} width="105%" />

<article>
	<br/>
	А какие тайны хранит в себе дом хозяйки поместья? Где находится «исчезающая» комната? Что спрятано в печке? И зачем в столовой гильотина?
</article>
<article>
	Продолжить путешествие вы можете уже сейчас, заказав экскурсию в кассе музея или по адресу <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a> 
	<br/>&nbsp;
</article>




{:else if globe.language == "LA"}

Latin

{:else} <!-- LT-->

<h1>Finišas!</h1>
<p class="subh">MARKUČIŲ DVARO<br>ORIENTACINIO ŽAIDIMO pabaiga</p>
<!-- <article>
	Jūs surinkote dvaro žemėlapį ir Aleksėejaus Melnikovo dokumentaą.
</article> -->

<div class="stats_wrapper">
<div class="stats_block">

<!-- <article> -->

	<p>Žaidimo pradžia<br>{date_started_h}:{date_started_m}:{date_started_s}</p>
	<p>Lobis rastas<br>{date_finished_h}:{date_finished_m}:{date_finished_s}</p>
	<p>Klaidos<br>{localStorage.mistakes}</p>
</div>
<div class="stats_block_bottom">
	<p>Laikas </p>
	<p class="laikas">{time_delta}</p>
<!-- </article> -->
</div>
</div>

<!-- <h1>Ačiū už žaidimą</h1> -->


<img  src={dvaras_bw} width="105%" />

<article>
	<br/><br/>
	Kokias paslaptis saugo pati dvaro sodyba? Kur buvo „slaptasis“ kambarys? Ką slėpė krosnyje? Kokias galvas kapodavo valgomajame?
</article>
<article>
	Pratęsti pažintį su Markučių dvaru galite užsisakę ekskursiją muziejaus kasoje arba iš anksto susisiekę <a href="mailto:edukacija.vokieciu6@vilniausmuziejus.lt">elektropaštu</a>.
</article>
<article>
<a href="https://md.vilniausmuziejus.lt/#educations">Daugiau informacijos apie Markučių dvare vykdomas edukacijas</a>.
	<br/>&nbsp;
</article>


{/if} <!-- Main page globe.languages-->





</section>





{:else}
<!-- Stopper-->
<!-- <img class="illustration" src={task}> -->
{#if globe.language == "EN"}
<Stopper>The safe is locked. <br> You're yet to collect every piece of the map!</Stopper>
{:else if globe.language == "RU"}
<Stopper>Вы дёргаете за ручку сейфа, но тот заперт. <br>Вы ещё собрали не все кусочки карты!</Stopper>
{:else if globe.language == "LA"}
<Stopper>Tuta clausa est. <br>Nondum es ad colligendas singulas chartas partes!</Stopper>
{:else}
<Stopper>Seifas užrakintas. <br>Jūs dar turite surinkti kiekvieną žemėlapio dalį!</Stopper>
{/if}


{/if} <!-- Module types-->





<style>



/* Stats */

.stats_block p {
	font-family: var(--font-manrope);
	font-weight: bold;
	display: inline-block;
	margin-right: 16px;
	/* font-size: 18px; */
}

.stats_block_bottom p {
	font-family: var(--font-manrope);
	font-weight: bold;
	/* font-size: 18px; */
}


.laikas {
	margin: -20px -3px;
	font-size: 64px;
}

.stats_block {
	font-family: var(--font-manrope);
	font-weight: bold;
	width: 95%;
	height: 80px;
	background: var(--color_green_medium_dark);
	color: var(--color-sepia);
	border-radius: 6px 6px 0 0;
	padding: 15px 20px;
	font-size: 14px;
	box-shadow: 
		0px -10px 30px 0px #00331166 inset
	;
	flex: 1 1 100px;

}

.stats_block_bottom {
	font-family: var(--font-manrope);
	font-weight: bold;
	width: 95%;
	height: 160px;
	background: var(--color-vm-orange);
	color: var(--color-sepia);
	border-radius: 0 0 6px 6px;
	padding: 50px 20px;
	font-size: 24px;
	margin-top: -1px;
	box-shadow: 
		0px 0px 20px 0px #FFFFBB33 inset
	;

}

.stats_wrapper {
	width: 90vw;
	left: 0px;
	padding: -0px 0px;
	margin: -20px 0 20px 5%;
	/* scale: 1.1; */
	rotate: 0deg;
	transition: cubic-bezier(0.34, 2.56, 0.64, 1) 1s;
	@starting-style {
		scale: 0.5;
		rotate: 2deg;
	}
}

</style>
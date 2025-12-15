<script>

import splash from '$lib/images/illustrations/splash.png'
import instructions from '$lib/images/illustrations/instructions.png'
import steps from '$lib/images/illustrations/steps.png'


// import Stopper from '$components/Stopper.svelte';

import task from '$lib/images/illustrations/bowl.png'



const station_id = 0

onMount(async () => { 
	globe.location = station_id
});


// let show_station = true


let date_started = new Date();
let time = date_started.getTime();
let date_started_h = date_started.getHours().toString().padStart(2,"0");
let date_started_m = date_started.getMinutes().toString().padStart(2,"0");
let date_started_s = date_started.getSeconds().toString().padStart(2,"0");

function empty_storage() {
	localStorage.clear();
	window.location.reload();
}

// TODO move to game manager
onMount(async () => { 
	// finished before, resetting completely
	if (localStorage.finished) {
		let a_lang = globe.language
		localStorage.clear(); // clears language too
		globe.language = a_lang
		window.location.reload();
	}

	// not playing → playing
	if(globe.progress == -1) {
		globe.progress = 0
		globe.mistakes = 0
		localStorage.date_started = date_started;
	}



	// already playing
	//??? what's the point of this?
	if (globe.progress > 0) {
		date_started = new Date( Date.parse(localStorage.date_started) );
		date_started_h = date_started.getHours().toString().padStart(2,"0");
		date_started_m = date_started.getMinutes().toString().padStart(2,"0");
		date_started_s = date_started.getSeconds().toString().padStart(2,"0");
	}
});

</script>



<svelte:head>
{#if globe.language == "EN"}
	<title>Start — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Старт – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title>Start – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Startas – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



<!-- {#if show_station} -->

<section>
<img class="map_piece_header_illustration" src={splash}>





{#if globe.language == "EN"}

<h1>Markučiai Treasure</h1>
<p class="subh">You set on your journey<br>at {date_started_h}:{date_started_m}:{date_started_s}</p>

<article>
Welcome to the game! Find the plaques planted arond the park. Read the hints and scan the plaques in the correct order.
</article>

<img src={instructions} width="100%" />

<article>
Any adventure begins at the entrance.<br>
The manor had a gate, and near that gate there was a large cross made of railway track.
</article>


<div class="where-next">
	<span class="highlighted-question">Where's the main entrance into the park? <br>Where did the cross once stand?</span>
	<br><br>
	<span>
		Descend.<br>
		From the museum to the entrance.<br>
		From the present into the past.
	</span>
</div>




{:else if globe.language == "RU"}

<h1>Клад Маркутья</h1>
<p class="subh">Вы начали своё путешествие<br>в {date_started_h}:{date_started_m}:{date_started_s}</p>

<article>
Добро пожаловать в игру! Ищите таблички разбросанные по парку. Читайте подсказки и сканируйте таблички в нужном порядке.
</article>

<img  src={instructions} width="100%" />


<article>
	Любое путешествие начинается со входа. <br>
	У поместья были ворота, а у ворот стоял большой крест из железнодорожных рельс.
</article>


<div class="where-next">
	<span class="highlighted-question">Где у парка главный вход? <br>Где раньше стоял крест?</span>
	<br><br>
	<span>
		Спускайтесь вниз.<br>
		Из музея ко входу.<br>
		Из настоящего в прошлое.
	</span>
</div>





{:else if globe.language == "LA"}

Coepi ludum at: {date_started_h}:{date_started_m}:{date_started_s}












{:else} <!-- LT -->

<h1>Markučių Lobis</h1>
<p class="subh">JŪS PRADĖJOTE KELIONĘ<br>{date_started_h}:{date_started_m}:{date_started_s}</p>

<article>
Sveiki atvykę į žaidimą! Ieškokite parke išdėliotų lentelių su QR-kodais, skenuokite lenteles, skaitykite užuominas ir spręskite užduotis teisinga tvarka.
</article>

<img  src={steps} width="100%" />


<article>
Žaidimas prasideda prie įėjimo į Markučių dvaro parką.
<br /><br />
<!-- </article>


<article> -->
XIX a. į Markučių dvarą buvo atvykstama karietomis pro pagrindinius vartus, o prie jų stovėjo didelis, iš geležinkelio bėgių padarytas kryžius. Šiuo metu ten stovi kitas objektas.
</article>



<div class="where-next">
	<span class="highlighted-question">Raskite kur buvo pagrindinis&nbsp;įėjimas į&nbsp;Markučių dvaro parką. <br>Kaip manote, kur anksčiau galėjo&nbsp;stovėti&nbsp;kryžius?
	</span> <br/><br/>
	<span>
 
Pirma užuomina – leiskitės&nbsp;žemyn&nbsp;laiptais.
	</span>

</div>

{/if} <!-- Main page Languages-->



{#if globe.progress > 0}
<button on:click={empty_storage} class="button">↻ Perkrauti žaidimą</button>
<br>&nbsp;
{/if}
</section>









<!-- <div class="map_section">
	Спускайтесь вниз. Из музея ко входу. Из настоящего в прошлое.
</div> -->

<!-- {:else} -->
<!-- Stopper-->
<!-- {#if globe.language == "EN"}
<Stopper>Вы уже начали своё путешествие!</Stopper>
{:else if globe.language == "RU"}
<Stopper>Вы уже начали своё путешествие!</Stopper>
{:else if globe.language == "LA"}
<Stopper>Вы уже начали своё путешествие! </Stopper>
{:else}
<Stopper>Вы уже начали своё путешествие!</Stopper>
{/if} -->



<!-- {/if}  -->
<!-- Module types-->
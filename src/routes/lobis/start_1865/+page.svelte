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
	<title>Start – Markučiai Manor Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Старт – Клад Поместья Маркучай</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title>Start – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Startas – Markučių Dvaro Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



<!-- {#if show_station} -->

<section>
<img class="map_piece_header_illustration" src={splash}>





{#if globe.language == "EN"}

<h1>Markučiai Manor Treasure</h1>
<p class="subh">You set on your journey<br>at {date_started_h}:{date_started_m}:{date_started_s}</p>

<article>
Welcome to the game! Look for the QR-code plaques in the park and scan them.
</article>

<img src={instructions} width="100%" />

<article>
Read the clues and solve the tasks in the correct order.
</article>

<img src={steps} width="100%" />

<article>
The game begins at the entrance to the Markučiai Manor park.
<br/><br/>
In the 19th century, people arrived by carriage through the main gates, where a large cross made of railway tracks once stood. Today, a different object stands there.
</article>


<div class="where-next">
	<span class="highlighted-question">Find where the main entrance to the park used to be. Where do you think the cross stood?
</span>
	<br><br>
	<span>
		First clue – <br>go down the steps.
	</span>
</div>




{:else if globe.language == "RU"}

<h1>Клад Поместья Маркучай</h1>
<p class="subh">Вы начали своё путешествие<br>в {date_started_h}:{date_started_m}:{date_started_s}</p>


<article>
Добро пожаловать в игру! Ищите в парке таблички с QR-кодами и сканируйте их,
</article>

<img src={instructions} width="100%" />

<article>
Читайте подсказки и выполняйте задания в правильном порядке.
</article>

<img src={steps} width="100%" />





<article>
Игра начинается у входа в парк усадьбы Маркучяй.<br><br>
В XIX веке в усадьбу Маркучяй въезжали в каретах через главные ворота, а возле них стоял большой крест, сделанный из железнодорожных рельсов. В настоящее время там стоит другой объект.
</article>


<div class="where-next">
	<span class="highlighted-question">
	Найдите, где был главный вход в парк усадьбы Маркучяй.
	<br><br>
	Как вы думаете, где раньше мог стоять крест?
	</span>
	<br><br>
	<span>
		Первая подсказка — спускайтесь по лестнице вниз.
	</span>
</div>





{:else if globe.language == "LA"}

Coepi ludum at: {date_started_h}:{date_started_m}:{date_started_s}












{:else} <!-- LT -->

<h1>Markučių Dvaro Lobis</h1>
<p class="subh">JŪS PRADĖJOTE KELIONĘ<br>{date_started_h}:{date_started_m}:{date_started_s}</p>


<article>
Sveiki atvykę į žaidimą! Ieškokite parke išdėliotų lentelių su QR-kodais ir jas skenuokite.
</article>

<img src={instructions} width="100%" />

<article>
Skaitykite užuominas ir spręskite užduotis teisinga tvarka.
</article>

<img src={steps} width="100%" />


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
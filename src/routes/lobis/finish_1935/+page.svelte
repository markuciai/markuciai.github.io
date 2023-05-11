<script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import head_signs from '$lib/images/illustrations/head_signs.png';
import dvras_bw from '$lib/images/archival/dvras_bw.jpg';




const station_id = 13
let show_station = false


let date_started = new Date();
let date_started_h
let date_started_m
let date_started_s

let date_finished = new Date();
let date_finished_h
let date_finished_m
let date_finished_s

let time_delta


onMount(async () => { 
	if($visited == station_id - 1) {
		$visited = -1
		localStorage.finished = true
		localStorage.date_finished = date_finished;
	}
	
	if (localStorage.finished) {
		show_station = true;

		date_started = new Date( Date.parse(localStorage.date_started) );
		date_started_h = date_started.getHours().toString().padStart(2,"0");
		date_started_m = date_started.getMinutes().toString().padStart(2,"0");
		date_started_s = date_started.getSeconds().toString().padStart(2,"0");

		date_finished = new Date( Date.parse(localStorage.date_finished) );
		date_finished_h = date_finished.getHours().toString().padStart(2,"0");
		date_finished_m = date_finished.getMinutes().toString().padStart(2,"0");
		date_finished_s = date_finished.getSeconds().toString().padStart(2,"0");
		
		time_delta = ms_to_time(Math.abs(date_finished.getTime() - date_started.getTime() ) ) ;
	}

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
{#if $language == "EN"}
	<title>Finish Line - Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Финиш - Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
	<title>Finio – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Finišas – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if show_station}

<section>
<img class="illustration" src={head_signs}>

{#if $language == "EN"}

<article>
Finished at {date_finished_h}:{date_finished_m}:{date_finished_s}
</article>

{:else if $language == "RU"}


<h1>Победа!</h1>
<p class="subh">Финишная линия квеста<br>в поместье Маркутья</p>
<article>
	Вы собрали карту поместья и завещание Варвары.
</article>

<article>
	<ul>
	<li>Старт поиска: {date_started_h}:{date_started_m}:{date_started_s}</li> 
	<li>Клад найден:  {date_finished_h}:{date_finished_m}:{date_finished_s}</li>
	<li>Время: {time_delta}</li>
	</ul>
</article>

<article>
	Спасибо, что играли! 
</article>

<img  src={dvras_bw} width="105%" />

<article>
	<br/><br/>
	А какие тайны хранит в себе дом хозяйки поместья? Где находится «исчезающая» комната? Что спрятано в печке? И зачем в столовой гильотина? Продолжить путешествие вы можете уже сейчас, заказав экскурсию в кассе музея или по адресу <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a> 
</article>




{:else if $language == "LA"}

Latin

{:else} <!-- LT-->

<h1>Finišas!</h1>
<p class="subh">MARKUČIŲ DVARO<br>ORIENTACINIO ŽAIDIMO pabaiga</p>
<article>
	Jūs surinkote dvaro žemėlapį ir Varvaros testamentą.
</article>

<article>
	<ul>
	<li>Žaidimo pradžia: {date_started_h}:{date_started_m}:{date_started_s}</li> 
	<li>Lobis rastas:  {date_finished_h}:{date_finished_m}:{date_finished_s}</li>
	<li>Laikas: {time_delta}</li>
	</ul>
</article>

<article>
	Ačiū už žaidimą!
</article>

<img  src={dvras_bw} width="105%" />

<article>
	<br/><br/>
	Kokias paslaptis saugo pati dvaro sodyba? Kur buvo „slaptasis“ kambarys? Ką slėpė krosnyje? Kokias galvas kapodavo valgomajame? Pratęsti pažintį su Markučių dvaru galite užsisakę ekskursiją muziejaus kasoje arba iš anksto susisiekę elektropaštu <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a> 
</article>



{/if} <!-- Main page $languages-->
</section>





{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>The safe is locked. <br> You're yet to collect every piece of the map!</Stopper>
{:else if $language == "RU"}
<Stopper>Вы дёргаете за ручку сейфа, но тот заперт. <br>Вы ещё собрали не все кусочки карты!</Stopper>
{:else if $language == "LA"}
<Stopper>Tuta clausa est. <br>Nondum es ad colligendas singulas chartas partes!</Stopper>
{:else}
<Stopper>Seifas užrakintas. <br>Jūs dar turite surinkti kiekvieną žemėlapio dalį!</Stopper>
{/if}


{/if} <!-- Module types-->
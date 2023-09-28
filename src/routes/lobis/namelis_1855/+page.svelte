<script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/2.png';
import task from '$lib/images/illustrations/saddle.png';

import servant_house from '$lib/images/archival/servant_house.jpg';
import servants from '$lib/images/archival/servants.jpg';


const station_id = 2

let show_offer = true
let show_station = false


onMount(async () => { 
	if ($visited >= 0) {
		show_offer = false
	}

	if($visited == station_id - 1) {
		$visited = station_id
	}

	if ($visited >= station_id) {
		show_station = true;
	}
});

</script>







<svelte:head>
{#if $language == "EN"}
	<title>Servants' quarters — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Домик слуг – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
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
<!-- Station $languages -->

<section>
<img class="illustration" src={map_piece}>
{#if $language == "EN"}

<h1>Servants' quarters</h1>
<p class="subh">The second stop<br>in the quest for Markučiai Treasure</p>
<article>
	Anna the maid and her husband Vyacheslav welcome you to their cozy home.
</article>
<img width=105% src={servants}>
<br>
<article>
	They too have found a piece of paper with similar handwriting in the park, but they don't know what to do with it yet.
</article>

<img width=105% src={servant_house}>
<article>
<br>
The servants are busy in the garden, but if you can collect every piece of this document and bring it to the manor house, you will definitely be rewarded.
</article>
<img class="illustration task saddle" src={task}>

<div class="where-next saddle-block">
	The servants will give you their piece of the document, and in return, you have to fulfill their request - deliver a new saddle to pan Michal.
<br><br>
<span class="highlighted-question">
	Where should you bring the saddle?
</span>
</div>

{:else if $language == "RU"}


<h1>Домик слуг</h1>
<p class="subh">Вторая остановка<br>в поисках Клада Маркутья</p>
<article>
	Служанка Анна и ее супруг Вячеслав встречают вас на пороге своего уютного домика.
</article>
<img width=105% src={servants}>
<br>
<article>
	Они тоже нашли в парке обрывок бумаги с похожим почерком, но пока не знают, что с ним делать.
</article>

<img width=105% src={servant_house}>
<article>
<br>
У слуг много хлопот в саду, но если вы сможете собрать все части этого документа и отнесете его в усадебный дом, то обязательно получите вознаграждение.
</article>
<img class="illustration task saddle" src={task}>

<div class="where-next saddle-block">
	Слуги отдадут вам свою часть документа, а взамен вы должны выполнить их просьбу — отнесите новое седло пану Михалу.
<br><br>
<span class="highlighted-question">
	Куда нужно отнести седло?
</span>
</div>

{:else if $language == "LA"}

Latin

{:else} <!-- LT -->
	

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
<img class="illustration task saddle" src={task}>

<div class="where-next saddle-block">
	Ana ir Viačeslavas sutinka jums atiduoti rastą dokumento dalį, jeigu jūs jiems pagelbėsit ir įvykdysit jų prašymą – nunešit naują balną ponui Michalui.
	<br><br>
<span class="highlighted-question">Kur reikėtų nunešti balną?</span>
</div>






{/if} <!-- Main page $languages -->
</section>
{:else}

<!-- Stopper-->
{#if $language == "EN"}
<Stopper>The door to the Servants' house is shut.</Stopper>
{:else if $language == "RU"}
<Stopper>Двери домика слуг заперты.</Stopper>
{:else if $language == "LA"}
<Stopper>Двери домика слуг заперты. </Stopper>
{:else}
<Stopper>Tarnų namelio durys užrakintos.</Stopper>
{/if}


{/if} <!-- Module types -->




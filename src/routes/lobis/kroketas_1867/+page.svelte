<script>
import {onMount} from 'svelte';
import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/12.png';
import task from '$lib/images/illustrations/fodder.png';

import nazimov from '$lib/images/archival/nazimov.jpg';
import kabinetas from '$lib/images/archival/kabinetas.jpg';
import safe from '$lib/images/archival/safe.jpg';


const station_id = 12
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
	<title>Kroketo aikštelė – Markučių Lobis</title>
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
<h1>Kroketo aikštelė</h1>
<p class="subh">Dvyliktoji ir priešpaskutinė stotelė<br>ieškant Markučių lobio</p>
<article>
	Prie poeto Aleksandro Puškino paminklo grupelė vaikų ir suaugusiųjų žaidžia kroketą. Vienas iš žaidėjų yra architektas ir geras Grigorijaus Puškino draugas Vladimiras Nazimovas.
</article>
	<img width=105% src={nazimov}>
<article>
	<br>
	Jis į Markučius atvyko paskutiniais Varvaros Puškinos gyvenimo metais ir pažadėjo padaryti viską, kas įmanoma, kad dvaro sodyboje būtų atidarytas muziejus, skirtas žymiam poetui Aleksandrui Puškinui. Sodyboje saugomi unikalūs baldai, poeto ir jo artimųjų asmeniniai daiktai čia atvežti iš poeto namų, buvusių Michailovsko gyvenvietėje.
</article>

<img width=105% src={kabinetas}>

<article>
	<br>
Vladimirui Nazimovui jūs atiduodate kroketo kamuoliuką bei parodote visas rastas dokumento skiautes. Architektas jums atiduoda paskutinę – dvyliktąją dokumento dalį – ir papasakoja, kad dokumentas, kurį jūs šiandien surinkote, yra ne kas kita, o 1935 m. Markučių dvaro šeimininkės Varvaros Puškinos surašytas testamentas!
</article>

<img width=105% src={safe}>

<article>
<br>
Testamento originalas yra saugomas dvaro sodybos gyvenamajame name, patikimame, nedegiame, dar 1867 m. prie vienos iš krosnių įrengtame seife. Šį smagų žaidimą, kurio tikslas surinkti šį svarbų dokumentą, veikiausiai sugalvojo pats Varvaros testamento vykdytojas Vladimiras Nazimovas su savo vaikais, norėdamas plačiau paskleisti žinią apie Markučių dvaro šeimininkų paskutinę valią.
</article>

<div class="where-next">
	Loginio mąstymo ir dėmesingumo dėka jums pavyko surinkti dokumentą ir sužinoti, kas parašyta testamente! 
	<br><br>
	<span class="highlighted-question">O dabar laikas užsukti į muziejų ir gauti apdovanojimą už nuveiktą darbą!</span>
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


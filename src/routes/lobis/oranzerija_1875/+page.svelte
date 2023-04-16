<script>
import {onMount} from 'svelte';
import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/9.png';
import task from '$lib/images/illustrations/flowers.png';

import fruit_garden from '$lib/images/archival/fruit_garden.jpg';


const station_id = 9
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
	<title>Оранжерея – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Oranžerija – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if show_offer}
<Offer />
{:else if show_station}

<section>
<img class="illustration" src={map_piece}>
{#if language == "EN"}

English

{:else if language == "RU"}

<h1>Оранжерея</h1>
<p class="subh">Devintoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Вы невероятно догадливы — орхидеи растут в оранжерее.
</article>


<img width=105% src={fruit_garden}>
<article>
<br>
Здесь вы встретили девочку Олю. Вы помогли ей наполнить лейки водой и заметили в кашпо для цветов нужный вам фрагмент документа. Берите его!
</article>
<br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Оля сделала красивые букеты и попросила отнести их на на надгробие Григория и Варвары Пушкиных.
	<br><br>
	<span class="highlighted-question">Куда нужно отнести цветы?</span>
</div>

{:else if language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Oranžerija</h1>
<p class="subh">Devintoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Jūs visiškai teisūs – orchidėjos auga oranžerijoj, kur šaltuoju metų sezonu nuo šalčio saugomi egzotiški šilumą mėgstantys augalai. 
</article>


<img width=105% src={fruit_garden}>
<article>
<br>
Čia jūs sutinkate mergaitę Olią (mažąją Olgą), kuriai padedate supilti vandenį į laistytuvus ir viename gražiame gėlių vazonėlyje pastebite jums reikalingo dokumento skiautę. Pasiimkite ją!
</article>
<br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Olia sukomponavo gražias gėlių puokštes ir paprašė jas nunešti ant Varvaros ir Grigorijaus kapų.
	<br><br>
	<span class="highlighted-question">Kur reikėtų nešti gėles?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if language == "EN"}
<Stopper>You've come to the wrong place.</Stopper>
{:else if language == "RU"}
<Stopper>В оранжерее пахнет цветами. Но зачем вы сюда пришли?</Stopper>
{:else if language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Ne ten atejote.</Stopper>
{/if}


{/if} <!-- Module types-->

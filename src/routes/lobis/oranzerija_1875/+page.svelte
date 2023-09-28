<script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/9.png';
import task from '$lib/images/illustrations/flowers.png';

import fruit_garden from '$lib/images/archival/fruit_garden.jpg';


const station_id = 9

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
	<title>Orangery — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Оранжерея – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
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


{#if $language == "EN"}

<h1>Orangery</h1>
<p class="subh">The ninth stop<br>in the quest for Markučiai Treasure</p>
<article>
You are incredibly astute! You have found the orchids in the orangery.
</article>


<img width=105% src={fruit_garden}>
<article>
<br>
Here you meet a girl named Olya. You help her fill the watering cans with water and notice the fragment of the document you were looking for in one of the flowerpots. Take it!
</article>
<br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Olya made beautiful bouquets and asks you to take them to the grave of Grigory and Varvara Pushkin.
	<br><br>
	<span class="highlighted-question">Where should you bring the flowers?</span>
</div>

{:else if $language == "RU"}

<h1>Оранжерея</h1>
<p class="subh">Девятая остановка<br>в поисках Клада Маркутья</p>
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
	Оля сделала красивые букеты и попросила отнести их на надгробие Григория и Варвары Пушкиных.
	<br><br>
	<span class="highlighted-question">Куда нужно отнести цветы?</span>
</div>

{:else if $language == "LA"}

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

{/if} <!-- Station $languages-->
</section>

{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>The orangery smells of flowers. What did you come here for?</Stopper>
{:else if $language == "RU"}
<Stopper>В оранжерее пахнет цветами. Но зачем вы сюда пришли?</Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Oranžerijoje kvepia gėlėmis. O ko jūs čia atėjote?</Stopper>
{/if}


{/if} <!-- Module types-->

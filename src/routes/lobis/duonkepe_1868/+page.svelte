<script>
import { browser } from "$app/environment";



import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/7.png';
import task from '$lib/images/illustrations/bucket-empty.png';

import bakery from '$lib/images/archival/bakery.jpg';


const station_id = 7

onMount(async () => { 
	globe.location = station_id
});




</script>

<svelte:head>
{#if globe.language == "EN"}
	<title>Bakery — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Пекарня – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Duonkepė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if (globe.progress < 0)}
<Offer />

{:else if (globe.progress == globe.location)}

<section>
<img class="map_piece_header_illustration" src={map_piece}>


{#if globe.language == "EN"}

<h1>Bakery</h1>
<p class="subh">The seventh stop<br>in the quest for Markučiai Treasure</p>
<article>
In the 19th century, the bakery was an outdoor building near the main house. Varvara and her family loved baking their own bread.
<br><br>
Maria takes the eggs and begins kneading dough for cake and buns.
</article>

<img width=105% src={bakery}>

<article>
<br>
Near the oven, in a box of firewood and old newspapers, you spot another scrap of the document.
<br><br><br>
</article>



<img class="illustration" src={task}>

<div class="where-next">
	Maria gives it to you and asks you to take a bucket, fetch some water, and water the flowers.
	<br><br>
	<span class="highlighted-question">Where should you go to fetch water?</span>
</div>

{:else if globe.language == "RU"}


<h1>Пекарня</h1>
<p class="subh">Седьмая остановка<br>в поисках Клада Маркутья</p>
<article>
Пекарня в XIX веке была построена, недалеко от главного здания усадьбы. Варвара и её семья любили печь свой хлеб.
<br><br>
Девочка Мария, взяв у вас корзину с яйцами, проворно бросается месить тесто для пирога и булочек.
</article>

<img width=105% src={bakery}>

<article>
<br>
У печи, в ящике с дровами, поленьями и старыми газетами для растопки, вы замечаете клочок уже знакомого документа.
<br/><br/><br>
</article>



<img class="illustration" src={task}>

<div class="where-next">
	Девочка Мария отдает вам клочок и, вручив ведро, просит сходить набрать воды и полить цветы.
	<br><br>
	<span class="highlighted-question">Куда нужно идти, чтобы набрать воды?</span>
</div>





{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet





{:else} <!-- LT -->


<h1>Duonkepė</h1>
<p class="subh">Septintoji stotelė<br>ieškant Markučių lobio</p>
<article>
Duonkepė XIX a. buvo pastatyta lauke, netoli pagrindinio dvaro pastato. Varvara ir jos šeima mėgo kepti savo duoną.
<br><br>
Mergaitė Marija, paėmusi iš jūsų pintinę su kiaušiniais, vikriai puola minkyti tešlą pyragui ir bandelėms.
</article>


<img width=105% src={bakery}>
<article>
<br>
Prie krosnies, dėžėje su malkomis, pliauskomis ir senais laikraščiais pakuroms pastebite jau pažįstamo dokumento skiautę.
<br><br><br>
</article>

<img class="illustration" src={task}>

<div class="where-next">
	Mergaitė Marija jums atiduoda skiautę ir, įdavusi kibirą, paprašo nueiti pasemti vandens ir palaistyti gėles.
	<br><br>
	<span class="highlighted-question">Kur reikėtų eiti pasemti vandens?</span>
</div>

{/if} <!-- Station globe.languages-->
</section>






{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>It's hot in the bakery. The young baker is too busy to give you hints</Stopper>
{:else if globe.language == "RU"}
<Stopper>Из пекарни несёт жаром. Девушка-пекарь слишком занята, чтобы давать вам подсказки.</Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Kepykloje karšta. Jaunoji kepėja pernelyg užimta, kad duotų jums užuominas.</Stopper>
{/if}


{/if} <!-- Module types-->

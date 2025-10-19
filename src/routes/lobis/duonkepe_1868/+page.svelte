
<script>

import { browser } from "$app/environment";



import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/7.png';
import task from '$lib/images/illustrations/bucket-empty.png';

import bakery from '$lib/images/archival/bakery.jpg';


const station_id = 7

let show_offer = true
let show_station = false


if (browser) {
if (globe.progress >= 0) {
	show_offer = false
}

if(globe.progress == station_id - 1) {
	globe.progress = station_id
}

if (globe.progress >= station_id) {
	show_station = true;
}
}

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



{#if show_offer}
<Offer />

{:else if show_station}

<section>
<img class="illustration" src={map_piece}>


{#if globe.language == "EN"}

<h1>Bakery</h1>
<p class="subh">The seventh stop<br>in the quest for Markučiai Treasure</p>
<article>
As you enter the bakery, the heat hits you immediately. Mashenka takes the basket of eggs from you and starts skilfully mixing the dough for the pie and the pastries.
</article>

<img width=105% src={bakery}>

<article>
<br>
While standing near the oven, you spot the coveted scrap of the document on the box with firewood and shavings, in a pile of old newspapers used for kindling. 
</article>

<br><br>

<img class="illustration" src={task}>

<div class="where-next">
	The girl hands the scrap to you and asks you to fetch water and water the orchids.
	<br><br>
	<span class="highlighted-question">Where would you fill a bucket with water?</span>
</div>

{:else if globe.language == "RU"}


<h1>Пекарня</h1>
<p class="subh">Седьмая остановка<br>в поисках Клада Маркутья</p>
<article>
	Ух, как жарко в пекарне. Машенька взяла у вас корзинку с яйцами и стала ловко готовить тесто для пирога и ватрушек. 
</article>

<img width=105% src={bakery}>

<article>
<br>
Рядом с печью на ящике с дровами и щепками, среди старых газет для розжига огня, замечаете заветный клочок документа. 
</article>

<br><br>

<img class="illustration" src={task}>

<div class="where-next">
	Девочка вручила его вам и попросила сходить за водой и полить орхидеи. 
	<br><br>
	<span class="highlighted-question">Где можно набрать ведро воды?</span>
</div>

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->












<h1>Duonkepė</h1>
<p class="subh">Septintoji stotelė<br>ieškant Markučių lobio</p>
<article>
Duonkepė 19 a. buvo pastatyta lauke, netoli pagrindinio dvaro pastato. Varvara ir jos šeima mėgo kepti savo duoną. Mergaitė Marija, paėmusi iš jūsų pintinę su kiaušiniais, vikriai puola minkyti tešlą pyragui ir bandelėms.
</article>


<img width=105% src={bakery}>
<article>
<br>
Prie krosnies, dėžėje su malkomis, pliauskomis ir senais laikraščiais pakuroms pastebite jau pažįstamo dokumento skiautę.
</article>
<br><br>
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

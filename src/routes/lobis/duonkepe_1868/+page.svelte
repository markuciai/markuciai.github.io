
<script>
import { onMount } from 'svelte';
import { browser } from "$app/environment";
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/7.png';
import task from '$lib/images/illustrations/bucket-empty.png';

import bakery from '$lib/images/archival/bakery.jpg';


const station_id = 7

let show_offer = true
let show_station = false


if (browser) {
if ($visited >= 0) {
	show_offer = false
}

if($visited == station_id - 1) {
	$visited = station_id
}

if ($visited >= station_id) {
	show_station = true;
}
}

</script>

<svelte:head>
{#if $language == "EN"}
	<title> — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Пекарня – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
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
{#if $language == "EN"}

English

{:else if $language == "RU"}


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

{:else if $language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Duonkepė</h1>
<p class="subh">Septintoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Oi kaip karšta prie duonkepės! Mašenka (mažoji Marija) paima iš jūsų pintinę su kiaušiniais ir vikriai puola minkyti tešlą pyragui ir pyragėliams.
</article>


<img width=105% src={bakery}>
<article>
<br>
Prie krosnies dėžėje su malkomis, pliauskomis ir senais laikraščiais pakuroms pastebite jau pažįstamo dokumento skiautę.
</article>
<br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Mergaitė ją jums atiduoda ir, įdavus kibirą, paprašo nueiti pasemti vandens ir palaistyti orchidėjas.
	<br><br>
	<span class="highlighted-question">Kur reikėtų eiti pasemti vandens?</span>
</div>

{/if} <!-- Station $languages-->
</section>

{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>It's hot in the bakery. The young baker is too busy to give you hints</Stopper>
{:else if $language == "RU"}
<Stopper>Из пекарни несёт жаром. Девушка-пекарь слишком занята, чтобы давать вам подсказки.</Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Kepykloje karšta. Jaunoji kepėja pernelyg užimta, kad duotų jums užuominas.</Stopper>
{/if}


{/if} <!-- Module types-->

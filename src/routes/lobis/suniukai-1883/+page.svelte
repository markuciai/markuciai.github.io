<script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/11.png';
import task from '$lib/images/illustrations/ball.png';

import doggie from '$lib/images/archival/doggie.jpg';


const station_id = 11

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
	<title> — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Собачки – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Šuniukai – Markučių Lobis</title>
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

<h1>Собачки</h1>
<p class="subh">Vienuolitkoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Потомки Фаньки и Бойки играют с шариком от крокета. Непорядок!

</article>


<img width=105% src={doggie}>
<article>
<br>

</article>
<img class="illustration" src={task}>

<div class="where-next">
	Шар нужно отнести на место. Подбирая с земли шар, вы замечаете часть листа, исписанного знакомым почерком. Отправляйтесь на поиски последнего фрагмента.
	<br><br>
	<span class="highlighted-question">Где можно найти игроков в крокет?</span>
</div>

{:else if $language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Šuniukai</h1>
<p class="subh">Vienuolitkoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Šaunuoliai! Radote mylimų Puškinų šunelių kapus. Staiga matote, kad Fankos ir Boikos (šuniukų vardai) palikuonys žaidžia su kroketo kamuoliuku. Taip neturi būti, nes šis kamuoliukas yra ne šuns žaislas!
</article>


<img width=105% src={doggie}>
<article>
<br>

</article>
<img class="illustration" src={task}>

<div class="where-next">
	Kamuoliuką nedelsiant reikia nunešti kroketo žaidėjams. Keldami jį nuo žemės, pastebite dar vieną jau pažįstamo dokumento skiautę. Paimkite ją ir eikite ieškoti paskutinės dokumento dalies.
	<br><br>
	<span class="highlighted-question">Kur reikėtų ieškoti kroketo žaidėjų?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>You try to approach to the doggies, but they scatter.</Stopper>
{:else if $language == "RU"}
<Stopper>Вы пытаетесь пообщаться с собачками, но они убегают.</Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Jūs bandote pakalbinti šuniukus, tačiau jie pabėga.</Stopper>
{/if}


{/if} <!-- Module types-->



<script>




import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/11.png';
import task from '$lib/images/illustrations/ball.png';

import doggie from '$lib/images/archival/doggie.jpg';


const station_id = 11

onMount(async () => { 
	globe.location = station_id
});

</script>


<svelte:head>
{#if globe.language == "EN"}
	<title>Doggos — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Собачки – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Šuniukai – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if (globe.progress < 0)}
<Offer />

{:else if (globe.progress == globe.location)}



<section>
<img class="map_piece_header_illustration" src={map_piece}>


{#if globe.language == "EN"}

<h1>Puppies</h1>
<p class="subh">The eleventh stop<br>in the quest for Markučiai Treasure</p>
<article>
Well done! You found the graves of the family's beloved dogs.
</article>


<img width=105% src={doggie}>
<article>
<br>
Suddenly, you see that relatives of Fanka and Boyka (the dogs' names) are playing with a croquet ball.
<br><br>
This shouldn't be – a croquet ball is not a dog toy!
<br><br>

</article>
<img class="illustration" src={task}>

<div class="where-next">
The ball must be returned to the players immediately. As you pick it up, you notice another scrap. Take it and go find the last part.
	<br><br>
	<span class="highlighted-question">Where should you look for the croquet&nbsp;players?</span>
</div>

{:else if globe.language == "RU"}

<h1>Собачки</h1>
<p class="subh">Одинадцатая остановка<br>в поисках Клада Маркучай</p>
<article>
Молодцы! Вы нашли могилы любимых собачек семьи.
</article>


<img width=105% src={doggie}>
<article>
<br>
Вдруг вы увидели, что родственники Фаньки и Бойки (имена собачек) играют с шаром для крокета.
<br><br>
Так не должно быть, этот шар — не игрушка для собак!
<br><br>
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Шар нужно немедленно отнести игрокам в крокет. Поднимая его с земли, вы замечаете еще один клочок уже знакомого документа. Возьмите его и идите искать последний фрагмент документа.
	<br><br>
	<span class="highlighted-question">Где можно найти игроков в крокет?</span>
</div>

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->









<h1>Šuniukai</h1>
<p class="subh">Vienuolitkoji stotelė<br>ieškant Markučių lobio</p>
<article>
Šaunuoliai! Radote šeimos mylimų šunelių kapus. Staiga pamatėte, kad Fankos ir Boikos (šuniukų vardai) giminės žaidžia su kroketo kamuoliuku. Taip neturi būti, šis kamuoliukas — ne šuns žaislas!
</article>


<img width=105% src={doggie}>
<article>
<br>

</article>
<img class="illustration" src={task}>

<div class="where-next">
	Kamuoliuką nedelsiant reikia nunešti kroketo žaidėjams. Keldami jį nuo žemės, pastebite dar vieną jau pažįstamo dokumento skiautę. Paimkite ją ir eikite ieškoti paskutinės dokumento dalies.
	<br><br>
	<span class="highlighted-question">Kur ieškoti kroketo žaidėjų?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>You try to approach to the doggies, but they scatter.</Stopper>
{:else if globe.language == "RU"}
<Stopper>Вы пытаетесь пообщаться с собачками, но они убегают.</Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Jūs bandote pakalbinti šuniukus, tačiau jie pabėga.</Stopper>
{/if}


{/if} <!-- Module types-->



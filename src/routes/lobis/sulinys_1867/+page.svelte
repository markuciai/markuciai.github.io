<script>





import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/8.png';
import task from '$lib/images/illustrations/bucket.png';

import sulinys from '$lib/images/archival/sulinys.png';


const station_id = 8

let show_offer = true
let show_station = false


onMount(async () => { 
	if (globe.progress >= 0) {
		show_offer = false
	}

	if(globe.progress == station_id - 1) {
		globe.progress = station_id
	}

	if (globe.progress >= station_id) {
		show_station = true;
	}
});

</script>


<svelte:head>
{#if globe.language == "EN"}
	<title>Well — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Колодец – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Šulinys – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>


{#if show_offer}
<Offer />

{:else if show_station}

<section>
<img class="illustration" src={map_piece}>
{#if globe.language == "EN"}


<h1>Well</h1>
<p class="subh">The eigth stop<br>in the quest for Markučiai Treasure</p>
<article>
In 1867, during the construction of the Melnikov estate in Markuchiai, a well was dug. Every morning, the groundskeeper pumped the water, which flowed through pipes into a special reservoir in the house.

</article>


<img width=105% src={sulinys}>
<article>
<br>
Some of the water was heated and used for washing and bathing. Yes, that's right - in the 19th century, this house already had a bathroom and a toilet. But let's not get distracted, as you still need to fetch water and water the orchids. There's a bucket next to the well, but before you lower it, take a look inside - see that? There's a piece of paper on the bottom! Did you take it? Yes, that's what you need.
</article>
<br>&nbsp;<br>&nbsp;<br>&nbsp;
<img class="illustration" src={task}>

<div class="where-next">
	Now go ahead and fetch the water, and continue your search for the orchids.
	<br><br>
	<span class="highlighted-question">Where could the orchids grow?</span>
</div>



{:else if globe.language == "RU"}

<h1>Колодец</h1>
<p class="subh">Восьмая остановка<br>в поисках Клада Маркутья</p>
<article>
	Этот колодец был выкопан в 1867 г. во время постройки усадьбы Мельниковых в Маркутье. Каждое утро дворник насосом накачивал воду и она по трубам текла в специальный резервуар в доме.

</article>


<img width=105% src={sulinys}>
<article>
<br>
Часть воды подогревали и использовали для умывания и принятия ванны. Да-да, в 19 веке в этом доме уже была ванная комната и туалет. Что-то мы отвлеклись, ведь вам нужно еще набрать воды и полить орхидеи. Рядом с колодцем стоит ведро. Но не торопитесь. Прежде, чем опустить его в колодец, загляните в ведро — видите? На дне белеет клочок бумаги! Взяли его? Да, это то, что вам нужно. 
</article>
<br><br><br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Теперь смело набирайте воду и отправляйтесь на поиски орхидей.
	<br><br>
	<span class="highlighted-question">Где могут расти орхидеи?</span>
</div>

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->











<h1>Šulinys</h1>
<p class="subh">Aštuntoji stotelė<br>ieškant Markučių lobio</p>
<article>
Šis šulinys buvo iškastas 1867 m., kuomet buvo statomas visas Melnikovų dvaras. Anksčiau vanduo nebėgdavo iš čiaupo. Kiekvieną rytą tarnai semdavo vandenį iš šulinio.
</article>


<img width=105% src={sulinys}>
<article>
<br>
Dalį vandens šildydavo praustis bei vonios malonumams. Taip, 19&nbsp;a. šiame name jau buvo vonia ir tualetas! 
</article>

<article>
Čia buvo šulinys. Įsivaizduokite, kad jums reikia pasemti vandens ir palaistyti gėles. Prie šulinio stovi kibiras. Neskubėkite. Prieš leisdami kibirą į šulinį, žvilgtelkite į kibiro vidų. 
Ant dugno baltuoja dar viena popieriaus skiautė! Paimkite ją. Tai būtent tai, ko jums reikia.
</article>
<br><br><br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Dabar drąsiai semkite vandenį ir eikite&nbsp;ieškoti&nbsp;gėlių!
	<br><br>
	<span class="highlighted-question">O kur žeimą ieškoti gėlių?</span>
</div>

{/if} <!-- Station globe.languages-->
</section>

{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>You probably shouldn‘t toss whatever you‘re carrying into the well.</Stopper>
{:else if globe.language == "RU"}
<Stopper>Наверно, не стоит закидывать в колодец то, что вы несёте.</Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Tikriausiai neverta mesti į šulinį to, ką atsinešėte.</Stopper>
{/if}


{/if} <!-- Module types-->

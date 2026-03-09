<script>





import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/8.png';
import task from '$lib/images/illustrations/bucket.png';

import sulinys from '$lib/images/archival/sulinys.png';


const station_id = 8

onMount(async () => { 
	globe.location = station_id
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


{#if (globe.progress < 0)}
<Offer />

{:else if (globe.progress == globe.location)}

<section>
<img class="map_piece_header_illustration" src={map_piece}>
{#if globe.language == "EN"}


<h1>Water Well</h1>
<p class="subh">The eigth stop<br>in the quest for Markučiai Treasure</p>
<article>
This well was dug in 1867, when the entire Melnikov estate was being built.
<br><br>
The well had a water pump, which was used to pump water through pipes to the Melnikovs' bathhouse.
</article>


<img width=105% src={sulinys}>
<article>
<br>
Some of it was heated for baths – yes, this house already had a bathtub and a toilet in the 19th century!
<br><br>
Imagine you are fetching water. There is a bucket by the well. Before you lower it, look inside.
<br><br>
You see another scrap of paper at the bottom! Take it – it’s exactly what you need.
<br>&nbsp;<br>&nbsp;<br>
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Now, draw the water and go find the flowers!
	<br><br>
	<span class="highlighted-question">Where can you find flowers in winter?</span>
</div>



{:else if globe.language == "RU"}

<h1>Колодец</h1>
<p class="subh">Восьмая остановка<br>в поисках Клада Маркутья</p>
<article>
Этот колодец был выкопан в 1867 г., когда строилась вся усадьба Мельниковых. В колодце была помпа, с помощью которой вода по трубам поступала в ванную Мельниковых.

</article>


<img width=105% src={sulinys}>
<article>
<br>
Часть воды грели для умывания и банных удовольствий. Да, в XIX веке в этом доме уже были ванна и туалет!
<br><br>
Вернемся к колодцу. Представьте, что вам нужно набрать воды и полить цветы. У колодца стоит ведро. Не спешите. Прежде чем опустить ведро в колодец, загляните в него.
<br><br>
На дне белеет еще один клочок бумаги! Возьмите его. Это именно то, что вам нужно.
<br><br><br>
</article>

<img class="illustration" src={task}>

<div class="where-next">
	Теперь смело черпайте воду и идите искать цветы!
	<br><br>
	<span class="highlighted-question">А где искать цветы, когда наступает зима?</span>
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
Dalį vandens šildydavo praustis bei vonios malonumams. Taip, XIX&nbsp;a. šiame name jau buvo vonia ir tualetas! 
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

<script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';


import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/8.png';
import task from '$lib/images/illustrations/bucket.png';

import sulinys from '$lib/images/archival/sulinys.png';


const station_id = 8

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
	<title>Колодец – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
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
{#if $language == "EN"}

English

{:else if $language == "RU"}

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

{:else if $language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->

<h1>Šulinys</h1>
<p class="subh">Aštuntoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Šis šulinys buvo iškastas 1867 m., kuomet buvo statomas Melnikovų dvaras Markučiuose. Kiekvieną rytą kiemsargis specialia pompa pumpavo vandenį, kuris vamzdžiais tekėjo į specialią namuose esančią talpą.
</article>


<img width=105% src={sulinys}>
<article>
<br>
Dalį vandens šildydavo ir naudojo prausimuisi bei vonios malonumams. Taip, XIX a. šiame name jau buvo įrengta vonia ir tualetas. Na bet grįžkim prie mūsų reikalų, jums juk reikia pasemti vandens ir  palaistyti orchidėjas. Prie šulinio stovi kibiras. Neskubėkit. Prieš leidžiant kibirą į šulinį, žvilgtelkit į kibiro vidų. Matote? Ant dugno baltuoja popieriaus skiautė! Paėmėt ją? Tai būtent tai ko jums reikia.
</article>
<br><br><br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Dabar drąsiai semkite vandenį ir eikite ieškoti orchidėjų
	<br><br>
	<span class="highlighted-question">Kur reikėtų ieškoti orchidėjų?</span>
</div>

{/if} <!-- Station $languages-->
</section>

{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>You probably shouldn‘t toss whatever you‘re carrying into the well.</Stopper>
{:else if $language == "RU"}
<Stopper>Наверно, не стоит закидывать в колодец то, что вы несёте.</Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Tikriausiai neverta mesti į šulinį to, ką atsinešėte.</Stopper>
{/if}


{/if} <!-- Module types-->

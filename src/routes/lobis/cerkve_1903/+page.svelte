<script>

import { browser } from "$app/environment";



import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/10.png';
import task from '$lib/images/illustrations/doggo.png';

import cerkve from '$lib/images/archival/cerkve.jpg';


const station_id = 10

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
	<title>Chapel — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Церковь – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Cerkvė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>


{#if show_offer}
<Offer />

{:else if show_station}

<section>
<img class="illustration" src={map_piece}>
{#if globe.language == "EN"}



<h1>Chapel</h1>
<p class="subh">The tenth stop<br>in the quest for Markučiai Treasure</p>
<article>
Search for the year when the construction of this chapel began. 

</article>


<img width=105% src={cerkve}>
<article>
	<br>
	It was dedicated to Saint Great Martyr Barbara. While near the church, you also find another piece of the document.
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Your search for the next fragment will be aided by the Pushkin family's four-legged friends.
	<br><br>
	<span class="highlighted-question">Who's running around the cemetary?</span>
</div>

{:else if globe.language == "RU"}

<h1>Церковь</h1>
<p class="subh">Десятая остановка<br>в поисках Клада Маркутья</p>
<article>
	Найдите дату — в каком году началось строительство этой домовой церкви?  

</article>


<img width=105% src={cerkve}>
<article>
	<br>
	Она была освящена во имя святой великомученицы Варвары. Возле церкви вы нашли еще одну часть документа.
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Следующий фрагмент вам помогут найти четвероногие друзья семьи Пушкиных.
	<br><br>
	<span class="highlighted-question">Кто бегает недалеко от кладбища?</span>
</div>

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Cerkvė</h1>
<p class="subh">Dešimtoji stotelė<br>ieškant Markučių lobio</p>
<article>
Padėję gėles ant kapų, atsisukite į šeimos maldos namus ir raskite datą – kuriais metais buvo pradėtos šios namų cerkvės – lietuviškai vadinamos šeimos koplyčia – statybos?
</article>








<img width=105% src={cerkve}>
<article>
	<br>
	Jai buvo suteiktas šventosios Barboros vardas. Šalia koplyčios aptinkate dar vieną dokumento skiautę. Apeikite kapinaites.


</article>
<img class="illustration" src={task}>

<div class="where-next">
	Kitą dokumento dalį jums padės surasti keturkojai šeimos draugai.
	<br><br>
	<span class="highlighted-question">Ko reikėtų ieškoti kapinaitėse?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>It‘s quiet near the chapel. The small cemetery is chilly and peaceful.</Stopper>
{:else if globe.language == "RU"}
<Stopper>У церквушки тихо. Небольшое кладбище отдаёт прохладой и спокойствием. </Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Prie cerkvės tylu. Nedidelės kapinaitės dvelkia vėsa ir ramybe.</Stopper>
{/if}


{/if} <!-- Module types-->

<script>
import {onMount} from 'svelte';
import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/10.png';
import task from '$lib/images/illustrations/doggo.png';

import cerkve from '$lib/images/archival/cerkve.jpg';


const station_id = 10
let visited = -1
let language = "LT"

let show_offer = true
let show_station = false


onMount(async () => { 
	visited = localStorage.visited;

	if (visited >= 0) {
		show_offer = false
	}

	if(visited == station_id - 1) {
		visited = station_id
		localStorage.visited = visited;
		window.location.reload();
	}
	if (visited >= station_id) {
		show_station = true;
	}

	language = localStorage.language;

	a_thing('success')
});

</script>

<svelte:head>
{#if language == "EN"}
	<title>Cerkvė — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if language == "RU"}
	<title>Церковь – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
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
{#if language == "EN"}

English

{:else if language == "RU"}

<h1>Церковь</h1>
<p class="subh">Dešimtoji stotelė<br>ieškant Markučių lobio</p>
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

{:else if language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Cerkvė</h1>
<p class="subh">Dešimtoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Padėję gėles ant kapų, atsisukite į cerkvę ir raskite datą – kuriais metais buvo pradėtos šios namų cerkvės – koplyčios statybos?
</article>


<img width=105% src={cerkve}>
<article>
	<br>
	Ji buvo pašventinta šventosios kankinės Barboros vardu. Šalia bažnyčios aptinkate dar vieną dokumento skiautę. Apeikite kapinaites.


</article>
<img class="illustration" src={task}>

<div class="where-next">
	Sekančią dokumento dalį jums padės surasti keturkojai Puškinų šeimos draugai.
	<br><br>
	<span class="highlighted-question">Ko reikėtų ieškoti kapinaitėse?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if language == "EN"}
<Stopper>You've come to the wrong place.</Stopper>
{:else if language == "RU"}
<Stopper>У церквушки тихо. Небольшое кладбище отдаёт прохладой и спокойствием. </Stopper>
{:else if language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Ne ten atejote.</Stopper>
{/if}


{/if} <!-- Module types-->

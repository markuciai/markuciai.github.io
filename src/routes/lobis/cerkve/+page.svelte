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
	<title> – Клад Маркутья</title>
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
{#if language == "EN"}

English

{:else if language == "RU"}

По-русски

{:else if language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->

<img class="illustration" src={map_piece}>
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
<Stopper>А зачем вы сюда пришли? </Stopper>
{:else if language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Ne ten atejote.</Stopper>
{/if}


{/if} <!-- Module types-->

<script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/5.png';
import task from '$lib/images/illustrations/fodder.png';

import cook from '$lib/images/archival/cook.png';


const station_id = 5

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
	<title>Kitchen — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Кухня – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Virtuvė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>


{#if show_offer}
<Offer />
{:else if show_station}

<section>
<img class="illustration" src={map_piece}>

{#if $language == "EN"}

<h1>Kitchen</h1>
<p class="subh">The fifth stop<br>in the quest for Markučiai Treasure</p>
<article>
The cook was delighted with this successful catch - she will bake five large carp with vegetables and herbs according to the old Melnikov family recipe and serve the dish on the festive table.

</article>

<img width=105% src={cook}>

<article>
<br>
You notice that, in her recipe book, instead of a bookmark the cook is using the exact scrap of paper you need.
<br>&nbsp;<br>&nbsp;<br>&nbsp;
</article>


<img class="illustration" src={task}>

<div class="where-next">
	She will give you this scrap if you agree to bring some chicken feed to Vanyusha.
	<br><br>
	<span class="highlighted-question">Where should you bring the chicken feed?</span>
</div>






{:else if $language == "RU"}
<h1>Кухня</h1>
<p class="subh">Пятая остановка<br>в поисках Клада Маркутья</p>
<article>
	Кухарка обрадовалась удачному улову — пять крупных карпов она запечет с овощами и травами по старинному рецепту семьи Мельниковых и подаст блюдо на праздничный стол. 

</article>

<img width=105% src={cook}>
<article>
<br>
Вы видите, что в книге с рецептами вместо закладки кухарка использовала нужный вам обрывок документа. 
<br>&nbsp;<br>&nbsp;<br>&nbsp;
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Кухарка отдаст вам листочек, если вы согласитесь отнести Ванюше корм для цыплят. 
	<br><br>
	<span class="highlighted-question">Куда нужно отнести корм для цыплят?</span>
</div>

{:else if $language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Virtuvė</h1>
<p class="subh">Penktoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Virėja nudžiunga pamačius puikų laimikį - net penkis karpius! Juos ji pagamins orkaitėje su daržovėmis ir visokiausiomis žolelėmis pagal senovinį Melnikovų šeimos receptą bei patieks per šventinius pietus.
</article>


<img width=105% src={cook}>
<article>
<br>
Netikėtai receptų knygoje pastebite jums jau matyto dokumento skiautę, kurį virėja naudoja kaip knygos skirtuką.
<br>&nbsp;<br>&nbsp;<br>&nbsp;
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Virėja su džiaugsmu atiduos popierėlį jums, jeigu Vaniušai (mažajam Ivanui) nunešit paruoštą lesalą, kuriuo šis galėtų pamaitinti viščiukus.
	<br><br>
	<span class="highlighted-question">Kur reikėtų nunešti viščiukų lesalą?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>The cook is sitting by the entrance to the kitchen, flipping through a recipe book.</Stopper>
{:else if $language == "RU"}
<Stopper>У входа в кухню сидит кухарка и увлечённо листает рецепты.</Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Prie įėjimo į virtuvę sėdi virėja ir susidomėjusi varto receptų knygą.</Stopper>
{/if}


{/if} <!-- Module types-->






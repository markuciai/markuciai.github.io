<script>




import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/5.png';
import task from '$lib/images/illustrations/fodder.png';

import cook from '$lib/images/archival/cook.png';


const station_id = 5

onMount(async () => { 
	globe.location = station_id
});

</script>


<svelte:head>
{#if globe.language == "EN"}
	<title>Kitchen — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Кухня – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Virtuvė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>


{#if (globe.progress < 0)}
<Offer />
{:else if (globe.progress == globe.location)}

<section>
<img class="map_piece_header_illustration" src={map_piece}>

{#if globe.language == "EN"}

<h1>Kitchen</h1>
<p class="subh">The fifth stop<br>in the quest for Markučiai Treasure</p>
<article>
The cook works in the kitchen, located in the annex next to the house. She is happy with the catch – five carp!
<br><br>
You can bake them in the wood burning stove (do you know what a wood burning stove is?) with vegetables and various herbs according to the Melnikov family recipe and serve them for a festive lunch.

</article>

<img width=105% src={cook}>

<article>
<br>
Suddenly, you notice a document scrap being used as a bookmark in her recipe book. 
<br>&nbsp;<br>&nbsp;<br>&nbsp;
</article>


<img class="illustration" src={task}>

<div class="where-next">
	The cook will give it to you if you take some chicken feed to a boy named Vanyusha.
	<br><br>
	<span class="highlighted-question">Where should you take the chicken feed?</span>
</div>






{:else if globe.language == "RU"}
<h1>Кухня</h1>
<p class="subh">Пятая остановка<br>в поисках Клада Маркучай</p>
<article>
На кухне, которая находится в пристройке рядом с домом, работает повариха. Она обрадовалась, увидев отличный улов — целых пять карпов! Она сможет запечь их в печи (знаете ли вы, что такое печь?) с овощами и всевозможными травами по рецепту семьи Мельниковых и подаст к праздничному обеду.
</article>

<img width=105% src={cook}>
<article>
<br>
Неожиданно в книге рецептов вы замечаете обрывок уже знакомого вам документа, который повариха использует как закладку.
<br>&nbsp;<br>&nbsp;<br>&nbsp;
</article>
<img class="illustration" src={task}>

<div class="where-next">
Повариха с радостью отдаст бумажку вам, если вы отнесете мальчику Ванюше корм, приготовленный для цыплят.
<br><br>
<span class="highlighted-question">Куда нести корм для цыплят?</span>
</div>

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Virtuvė</h1>
<p class="subh">Penktoji stotelė<br>ieškant Markučių lobio</p>
<article>
Virtuvėje, kuri stovi priestate šalia namo, dirba virėja. Virėja nudžiunga pamačiusi puikų laimikį — net penkis karpius! Ji juos iškeps krosnyje (ar žinote kas yra krosnis?) su daržovėmis ir visokiausiomis žolelėmis pagal Melnikovų šeimos receptą ir patieks šventiniams pietums.
</article>


<img width=105% src={cook}>
<article>
<br>
Netikėtai receptų knygoje pastebėsite jums jau matyto dokumento skiautę, kurią virėja naudoja kaip knygos skirtuką.
<br>&nbsp;<br>&nbsp;<br>&nbsp;
</article>
<img class="illustration" src={task}>

<div class="where-next">
Virėja su džiaugsmu atiduos popierėlį jums, jeigu berniukui Vaniušai nunešite viščiukams paruoštą lesalą.
	<br><br>
	<span class="highlighted-question">Kur nešti viščiukų lesalą?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>The cook is sitting by the entrance to the kitchen, flipping through a recipe book.</Stopper>
{:else if globe.language == "RU"}
<Stopper>У входа в кухню сидит кухарка и увлечённо листает рецепты.</Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Prie įėjimo į virtuvę sėdi virėja ir susidomėjusi varto receptų knygą.</Stopper>
{/if}


{/if} <!-- Module types-->






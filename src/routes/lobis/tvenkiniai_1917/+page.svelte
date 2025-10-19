<script>




import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/4.png';
import task from '$lib/images/illustrations/fish.png';

import waters from '$lib/images/archival/waters.jpg';


const station_id = 4

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
	<title>The Ponds — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Пруды – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Tvenkiniai – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>


{#if show_offer}
<Offer />
{:else if show_station}

<section>
<img class="illustration" src={map_piece}>
{#if globe.language == "EN"}

<h1>The Ponds</h1>
<p class="subh">The fourth stop<br>in the quest for Markučiai Treasure</p>
<article>
Finding the boy Taras was not difficult; he spends all his free time at the ponds. In the winter, he skates on the icy surface of the pond, and in the warm weather, he swims or makes wooden ships out of twigs. 
</article>


<img width=105% src={waters}>
<article>
<br>
But today, he has an important task: he must catch fish for the festive dinner. 
</article>
<img class="illustration" src={task}>

<div class="where-next">
You give Taras the fishing rod and notice that the sail on his boat is made of a piece of the document you need. The boy agrees to give you the scrap of paper, but he asks for you to take the fish he caught to the cook.

	<br><br>
	<span class="highlighted-question">Where should you bring the fish?</span>
</div>

{:else if globe.language == "RU"}

<h1>Пруды</h1>
<p class="subh">Четвёртая остановка<br>в поисках Клада Маркутья</p>
<article>
	Отыскать мальчика Тараса было несложно, все свое свободное время он проводит у прудов. Зимой катается на коньках по ледяной глади водоема, а в теплое время купается или мастерит кораблики из деревянных щепок.
</article>


<img width=105% src={waters}>
<article>
<br>
Но сегодня у него важное дело — он должен наловить рыбы для праздничного обеда.
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Вы отдаете Тарасу удочку и замечаете, что парус у его кораблика сделан из обрывка нужного вам документа. Мальчик соглашается отдать клочок бумаги, но просит вас отнести пойманную рыбу кухарке.

	<br><br>
	<span class="highlighted-question">Куда нужно отнести рыбу?</span>
</div>

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Tvenkiniai</h1>
<p class="subh">Ketvirtoji stotelė<br>ieškant Markučių lobio</p>
<article>
Surasti Tarasą nesudėtinga, nes berniukas visą laisvą laiką leidžia prie dvaro tvenkinių. Žiemą ant tvenkinių buvo čiuožinėjama pačiūžomis, o vasarą – maudomasi.
</article>


<img width=105% src={waters}>
<article>
<br>
Šiandien Tarasas turi svarbią užduotį – pagauti žuvies šventiniams pietums.
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Atidavę meškerę Terasui, jūs pastebite, kad jo valtyje yra dar viena dokumento skiautė! Berniukas sutinka jums ją atiduoti, jeigu jūs kiek luktelsite ir vėliau nunešite jo pagautą žuvį virėjai.

	<br><br>
	<span class="highlighted-question">Kaip galvojate, o kur nešti žuvį?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>Just a pond. There is a boy swimming in the middle.</Stopper>
{:else if globe.language == "RU"}
<Stopper>Пруд как пруд. Посреди пруда плавает мальчик.</Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Tvenkinys kaip tvenkinys. Tvenkinio viduryje plaukioja berniukas.</Stopper>
{/if}


{/if} <!-- Module types-->



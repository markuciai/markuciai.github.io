<script>




import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/4.png';
import task from '$lib/images/illustrations/fish.png';

import waters from '$lib/images/archival/waters.jpg';


const station_id = 4

onMount(async () => { 
	globe.location = station_id
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


{#if (globe.progress < 0)}
<Offer />
{:else if (globe.progress == globe.location)}

<section>
<img class="map_piece_header_illustration" src={map_piece}>
{#if globe.language == "EN"}

<h1>The Ponds</h1>
<p class="subh">The fourth stop<br>in the quest for Markučiai Treasure</p>
<article>
Finding Taras is easy, as he spends all his free time by the ponds. In winter, people skated here, and in summer, they swam. 
</article>


<img width=105% src={waters}>
<article>
<br>
Today, Taras has an important task—to catch fish for the festive lunch.
</article>
<img class="illustration" src={task}>

<div class="where-next">
As you hand him the rod, you notice another scrap in his boat! He will give it to you if you wait a moment and then take the fish he catches to the cook.

	<br><br>
	<span class="highlighted-question">Where do you think the fish should be taken?
</span>
</div>

{:else if globe.language == "RU"}

<h1>Пруды</h1>
<p class="subh">Четвёртая остановка<br>в поисках Клада Маркутья</p>
<article>
Найти Тараса несложно, так как мальчик все свободное время проводит у усадебных прудов. Зимой на прудах катались на коньках, а летом — купались.
</article>


<img width=105% src={waters}>
<article>
<br>
Сегодня у Тараса важная задача — наловить рыбы к праздничному обеду.
</article>
<img class="illustration" src={task}>

<div class="where-next">
Отдавая удочку Тарасу, вы замечаете, что в его лодке лежит еще один клочок документа! Мальчик согласен отдать его вам, если вы немного подождете, а затем отнесете пойманную им рыбу поварихе.

	<br><br>
	<span class="highlighted-question">Как вы думаете, а куда следовало бы отнести рыбу?
</span>
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



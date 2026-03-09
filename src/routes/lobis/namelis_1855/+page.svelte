<script>




import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/2.png';
import task from '$lib/images/illustrations/saddle.png';

import servant_house from '$lib/images/archival/servant_house.jpg';
import servants from '$lib/images/archival/servants.jpg';


const station_id = 2

onMount(async () => { 
	globe.location = station_id
});

</script>







<svelte:head>
{#if globe.language == "EN"}
	<title>Servants' quarters — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Домик слуг – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Tarnų namelis – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if (globe.progress < 0)}
<Offer />
{:else if (globe.progress == globe.location)}
<!-- Station globe.languages -->

<section>
<img class="map_piece_header_illustration" src={map_piece}>
{#if globe.language == "EN"}

<h1>Servants' House</h1>
<p class="subh">The second stop<br>in the quest for Markučiai Treasure</p>
<article>
Ana, a servant at the manor, and her husband Vyacheslav lived in the servants’ house while they worked in the manor.
</article>
<img width=105% src={servants}>
<br>
<article>
Ana and Vyacheslav found a scrap of an important document but don't know what to do with it. 
</article>

<img width=105% src={servant_house}>
<article>
<br>
The servants are busy with their work and therefore cannot devote time to searching for an unknown document.  However, they heard that if you collect all the parts and bring them to the main house, you can get a reward.
</article>
<img class="illustration task saddle" src={task}>

<div class="where-next saddle-block">
Ana and Vyacheslav agree to give you the scrap if you help them: deliver a new saddle to Mr. Michal.
<br><br>
<span class="highlighted-question">
Where was the saddle usually taken?
</span>
</div>

{:else if globe.language == "RU"}


<h1>Домик слуг</h1>
<p class="subh">Вторая остановка<br>в поисках Клада Маркучай</p>
<article>
Служанка усадьбы Маркучяй Анна и её муж Вячеслав жили в домике для слуг, пока работали в усадьбе.
</article>
<img width=105% src={servants}>
<article>
<br>
Анна и Вячеслав нашли обрывок важного документа, но не знают, что с ним делать.
</article>

<img width=105% src={servant_house}>
<article>
<br>
Слуги заняты работой, поэтому не могут уделить время поискам неизвестного документа. Однако они слышали, что если собрать все части документа и отнести его в господский дом, можно получить вознаграждение.
</article>
<img class="illustration task saddle" src={task}>

<div class="where-next saddle-block">
Анна и Вячеслав согласны отдать вам найденную часть документа, если вы поможете им и выполните их просьбу — отнесете новое седло господину Михалу.
<br><br>
<span class="highlighted-question">
Найдите, куда раньше относили седло?
</span>
</div>

{:else if globe.language == "LA"}

Latin

{:else} <!-- LT -->
	










<h1>Tarnų namelis</h1>
<p class="subh">Antroji stotelė<br>ieškant Markučių lobio</p>
<article>
	Tarnų namelis anksčiau buvo vadinamas kumetynu. Markučių dvaro tarnaitė Ana ir jos vyras Viačeslavas čia gyveno, kol dirbo dvare.  
</article>
<img width=105% src={servants}>
<br>
<article>
	Ana ir Viačeslavas rado svarbaus dokumento skiautę, tačiau nežino, ką su ja daryti.
</article>


<img width=105% src={servant_house}>
<article>
<br>
Tarnai užsiėmę darbais, todėl negali skirti laiko nežinomo dokumento paieškoms. Tačiau girdėjo, jog surinkus visas dokumento dalis ir nunešus jį į ponų namą, galima gauti radybų.
</article>
<img class="illustration task saddle" src={task}>

<div class="where-next saddle-block">
Ana ir Viačeslavas sutinka jums atiduoti rastą dokumento dalį, jeigu jūs jiems pagelbėsite ir įvykdysite jų prašymą — nunešite naują balną ponui Michalui.
	<br><br>
<span class="highlighted-question">Raskite, kur anksčiau buvo&nbsp;nešamas&nbsp;balnas?</span>
</div>






{/if} <!-- Main page globe.languages -->
</section>
{:else}

<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>The door to the Servants' house is shut.</Stopper>
{:else if globe.language == "RU"}
<Stopper>Двери домика слуг заперты.</Stopper>
{:else if globe.language == "LA"}
<Stopper>Двери домика слуг заперты. </Stopper>
{:else}
<Stopper>Tarnų namelio durys užrakintos.</Stopper>
{/if}


{/if} <!-- Module types -->




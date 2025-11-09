<script>
import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/1.png';
import task from '$lib/images/illustrations/bowl.png';

import cross from '$lib/images/archival/cross.jpg';



const station_id = 1



onMount(async () => { 
	globe.location = station_id
});



</script>



<svelte:head>
{#if globe.language == "EN"}
	<title>Cross — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Крест – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title>Crucis – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Kryžius – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if (globe.progress < 0)}
<Offer />


{:else if (globe.progress == globe.location)}

<section>
<img class="map_piece_header_illustration" src={map_piece}>

{#if globe.language == "EN"}

<h1>The Cross</h1>
<p class="subh">The first stop<br>in the quest for Markučiai Treasure</p>
<article>
In the past, in Varvara Pushkina's time, here, to the left of the park entrance, on a stone foundation stood a tall cross made of railway track. At it's base the estate mistress would leave a bowl of coins for the poor. 
</article>


<img width=105% src={cross}>
<article>
<br>
Now, in that bowl there's only a piece of paper with a coat of arms and a signature. This looks like a document of some historical importance, but much of the text is missing. Who should be entrusted with this accidental find? 
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Perhaps the estate servants can&nbsp;be of&nbsp;assistance?&nbsp; You&nbsp;should find&nbsp;them right&nbsp;away!
	<br><br>
	<span class="highlighted-question">Where could one find the&nbsp;servants?</span>
</div>


{:else if globe.language == "RU"}


<h1>Крест</h1>
<p class="subh">Первая остановка<br>в поисках Клада Маркутья</p>
<article>
По левой стороне от входа в парк, во времена Варвары Пушкиной, на каменном фундаменте стоял высокий крест, изготовленный из железнодорожных рельсов. У его основания хозяйка усадьбы оставляла чашу с монетками для бедных людей.
</article>


<img width=105% src={cross}>
<article>
<br>
Сейчас в этой чаше лежит только обрывок бумаги с гербовой печатью и подписью. Похоже, это очень важный исторический документ. Но, где же остальная часть текста, и что в нем было написано? Кому следует отдать случайную находку?
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Может быть слуги поместья смогут нам&nbsp;помочь? Нужно&nbsp;срочно их&nbsp;найти.
	<br><br>
	<span class="highlighted-question">Где можно найти&nbsp;слуг?</span>
</div>







{:else if globe.language == "LA"}

Lorem Ipsum Dolor sit amet

{:else} <!-- LT -->



<h1>Kryžius</h1>
<p class="subh">Pirmoji stotelė<br>ieškant Markučių lobio</p>
<article>
Taip! Čia stovėjo metalinis kryžius. Varvaros laikais prie įėjimo į parką, kairėje (šiuo metu ten skelbimų lenta), ant akmeninio postamento stovėjo aukštas, iš geležinkelio bėgių pagamintas kryžius. O šalia jo dvaro savininkė palikdavo indelį su monetomis, skirtomis vargingiems žmonėms.
</article>


<img width=105% src={cross}>
<article>
<br>
Iš praeities jums palikome popieriaus skiautę su parašu ir antspaudu. Atrodo, kaip svarbaus istorinio dokumento dalis. Tačiau kur yra likusi dokumento dalis? 
</article>
<br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Galbūt dvaro tarnai galėtų&nbsp;jums&nbsp;padėti?
	<br><br>
	<span class="highlighted-question">O dabar raskite žemėlapyje, kur&nbsp;19&nbsp;a.&nbsp;gyveno&nbsp;tarnai!</span>
</div>


{/if} <!-- Main page globe.languages-->

</section>





{:else}

<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>There's nothing in front of the cross.</Stopper>
{:else if globe.language == "RU"}
<Stopper>??? </Stopper>
{:else if globe.language == "LA"}
<Stopper>У креста ничего нет. </Stopper>
{:else}
<Stopper>Prie kryžiaus nieko nėra.</Stopper>
{/if}



{/if} <!-- Module types-->



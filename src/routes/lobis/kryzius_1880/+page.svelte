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
Yes! An iron cross once stood here. In Varvara's time, a tall cross made of railway tracks stood on a stone pedestal to the left of the entrance (where the notice board is now). Next to it, the owner would leave a jar of coins for the poor.
</article>


<img width=105% src={cross}>
<article>
<br>
In this jar, we have left a scrap of paper from the past with a signature and a seal. It looks like part of an important historical document. But where is the rest? 
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Perhaps the manor servants can&nbsp;be of&nbsp;assistance?
	<br><br>
	<span class="highlighted-question">Find on the map where the servants lived in the XIX&nbsp;century!</span>
</div>


{:else if globe.language == "RU"}


<h1>Крест</h1>
<p class="subh">Первая остановка<br>в поисках Клада Маркутья</p>
<article>
Да! Здесь стоял железный крест. Во времена Варвары у входа в парк, слева (сейчас там стоит доска объявлений), на каменном постаменте стоял высокий крест, изготовленный из железнодорожных рельсов. А рядом с ним владелица усадьбы оставляла сосуд с монетами, предназначенными для бедных людей.
</article>


<img width=105% src={cross}>
<article>
<br>
В этом сосуде мы оставили для вас клочок бумаги из прошлого с подписью и печатью. Похоже, это часть важного исторического документа. Но где же остальная часть документа?
</article>
<img class="illustration" src={task}>

<div class="where-next">
	Может быть слуги усадьбы смогут нам&nbsp;помочь?
	<br><br>
	<span class="highlighted-question">Найдите на карте, где в XIX веке жили&nbsp;слуги!</span>
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



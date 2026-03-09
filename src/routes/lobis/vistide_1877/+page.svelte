 <script>




import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/6.png';
import task from '$lib/images/illustrations/eggs.png';

import birdhouse from '$lib/images/archival/birdhouse.jpg';
import vanyusha from '$lib/images/archival/vanyusha.jpg';


const station_id = 6

onMount(async () => { 
	globe.location = station_id
});

</script>


<svelte:head>
{#if globe.language == "EN"}
	<title>Chicken coop — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Птичник и ледник – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Vištidė ir ledainė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>


{#if (globe.progress < 0)}
<Offer />
{:else if (globe.progress == globe.location)}

<section>

<img class="map_piece_header_illustration" src={map_piece}>

{#if globe.language == "EN"}

<h1>Chicken Coop And Icehouse</h1>
<p class="subh">The sixth stop<br>in the quest for Markučiai Treasure</p>
<article>
Vanya sees you from afar and waves. You give him the feed and tell him about your search.
</article>


<img width=105% src={vanyusha}>
<article>
<br>
He is happy to help – he saw a similar scrap of paper near the chicken coop and will bring it right away.
</article>
<br>&nbsp;<br>&nbsp;<br>&nbsp;
<img class="illustration" src={task}>

<div class="where-next">
In return, take a basket of fresh eggs to Maria so she can bake a cake for the guests and bread for the whole family.
<br><br>
<span class="highlighted-question">Where should you take the basket of eggs?</span>
</div>





{:else if globe.language == "RU"}

<h1>Курятник и&nbsp;ледник</h1>
<p class="subh">Шестая остановка<br>в поисках Клада Маркучай</p>
<article>
Мальчик по имени Ваня замечает вас издалека и машет рукой. Вы отдаете ему корм для цыплят и рассказываете о своих поисках.
</article>


<img width=105% src={vanyusha}>
<article>
<br>
Мальчик с радостью готов вам помочь — он видел похожий клочок бумаги у курятника и сейчас же его принесет.
</article>
<br>&nbsp;<br>&nbsp;<br>&nbsp;
<img class="illustration" src={task}>

<div class="where-next">
А вы отнесите корзину со свежими яйцами Марии. Пусть она испечет большой пирог для гостей и хлеб для всей семьи.
	<br><br>
	<span class="highlighted-question">Куда бы вы отнесли корзинку с яйцами?</span>
</div>

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Vištidė ir&nbsp;ledainė</h1>
<p class="subh">Šeštoji stotelė<br>ieškant Markučių lobio</p>
<article>
Berniukas, vardu Vania, jus pastebi iš tolo ir pamojuoja. Jūs atiduodate jam viščiukų lesalą ir papasakojate apie savo paieškas.
</article>

<img width=105% src={vanyusha}>

<article>
<br>
Berniukas su džiaugsmu pasiruošęs jums padėti – jis matė panašią popieriaus skiautę prie vištidės ir tuoj pat ją atneš.
</article>
<br><br><br><br>
<img class="illustration" src={task}>

<div class="where-next">
	O jūs nuneškite pintinę su šviežiais kiaušiniais Marijai. Tegu ji iškepa didelį pyragą svečiams ir duonos visai dvaro šeimai.
	<br><br>
	<span class="highlighted-question">Kur nešti pintinę su kiaušiniais?</span>
</div>

{/if} <!-- Station Languages-->
</section>

{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>There's nobody in the chicken coop but a few chickens.</Stopper>
{:else if globe.language == "RU"}
<Stopper>В курятнике нет никого, кроме нескольких куриц.</Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Vištidėje nėra nieko, apart keleto vištų.</Stopper>
{/if}


{/if} <!-- Module types-->






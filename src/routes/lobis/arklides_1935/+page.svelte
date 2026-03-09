<script>
import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

import map_piece from '$lib/images/map-pieces/3.png';
import task from '$lib/images/illustrations/fishing_rod.png';

import stables from '$lib/images/archival/stables.jpg';


const station_id = 3

onMount(async () => { 
	globe.location = station_id
});


let header_title_text = {
	"EN" : "The Stables — Markučiai Treasure",
	"RU" : "Конюшня – Клад Маркутья",
	"LT" : "Arklidės – Markučių Lobis",
	"LA" : "Stables – Markučiai Treasure",
}

let header_description_text = {
	"EN" : "Quest",
	"RU" : "Квест",
	"LT" : "Žaidimas",
	"LA" : "Quest",
}




</script>


<svelte:head>
<title>{header_title_text[globe.language]}</title>
<meta name="description" content="{header_description_text[globe.language]}" />
</svelte:head>

 


{#if (globe.progress < 0) }
<Offer />
{:else if (globe.progress == globe.location) }

<section>
<img class="map_piece_header_illustration" src={map_piece}>
{#if globe.language == "EN"}


<h1>The Stables</h1>
<p class="subh">The third stop<br>in the quest for Markučiai Treasure</p>
<article>
Well done! You delivered the new saddle to the stables. 
</article>
<img width=105% src={stables}>


<article>
	<br>
Michal works here; he served at the manor for a long time, driving the owners to the city and other provinces.

</article>

<br><br>

<img class="illustration" src={task}>

<div class="where-next">
When you mentioned searching for an important document, the coachman remembers finding a scrap near the stables. He will give it to you if you take a fishing rod to his youngest son, Taras.
	<br><br>
	<span class="highlighted-question">Find where to take the&nbsp;fishing&nbsp;rod.</span>
</div>


{:else if globe.language == "RU"}


<h1>Конюшня</h1>
<p class="subh">Третья остановка<br>в поисках Клада Маркучай</p>
<article>
Молодцы, вы легко выполнили просьбу слуг — отнесли новое седло в конюшню.
</article>
<img width=105% src={stables}>
<br><br>



<article>
<br>
Здесь работает Михал, который долгое время служил в усадьбе Маркучяй и возил хозяев в город и в другие губернии.
</article>

<img class="illustration" src={task}>

<div class="where-next">
Когда вы упомянули о поиске важного документа, кучер вспомнил, что как раз нашел у конюшни клочок документа и с удовольствием отдаст его, если вы отнесете удочку его младшему сыну Тарасу.
<br><br>
<span class="highlighted-question">Найдите, куда нужно отнести&nbsp;удочку.</span>
</div>

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->

<h1>Arklidės</h1>
<p class="subh">Trečioji stotelė<br>ieškant Markučių lobio</p>
<article>
Šaunuoliai, jūs lengvai įvykdėte tarnų prašymą — naują balną atidavėt į arklides.  Arklidėse dirba Michalas, kuris ilgą laiką tarnavo Markučių dvare ir vežiojo savo šeimininkus į miestą bei į kitas gubernijas.
</article>
<img width=105% src={stables}>
<br><br>

<img class="illustration" src={task}>

<div class="where-next">
	Jums užsiminus apie svarbaus dokumento paiešką, šeimos vežikas prisiminė, jog prie arklidžių kaip tik rado dokumento skiautę ir mielai ją atiduos, jeigu jūs nunešite meškerę jo jauniausiajam sūnui Tarasui.
	<br><br>
	<span class="highlighted-question">Raskite, kur reikėtų nunešti&nbsp;meškerę.</span>
</div>










{/if} <!-- Station Languages-->
</section>



{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>The coachman has left, only the old horse looks at you and snorts.</Stopper>
{:else if globe.language == "RU"}
<Stopper>Кучер отошёл, только старая лошадь смотрит вам в лицо и фыркает. </Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Vežikas nuėjo, tik senas arklys žiūri jums į akis ir prunkščia.</Stopper>
{/if}


{/if} <!-- Module types-->




<!-- <div class="map_section">
	Jūs gavote trečiąją dokumento dalį.

</div> -->


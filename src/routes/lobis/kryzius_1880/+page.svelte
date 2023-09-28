<script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/1.png';
import task from '$lib/images/illustrations/bowl.png';

import cross from '$lib/images/archival/cross.jpg';


const station_id = 1

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
	<title>Cross — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Крест – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
	<title>Crucis – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Kryžius – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



{#if show_offer}
<Offer />


{:else if show_station}

<section>
<img class="illustration" src={map_piece}>

{#if $language == "EN"}

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


{:else if $language == "RU"}


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







{:else if $language == "LA"}

Lorem Ipsum Dolor sit amet

{:else} <!-- LT -->



<h1>Kryžius</h1>
<p class="subh">Pirmoji stotelė<br>ieškant Markučių lobio</p>
<article>
	Varvaros Puškinos laikais, prie įėjimo į parką iš kairės pusės ant akmeninio postamento stovėjo aukštas, iš geležinkelio bėgių pagamintas kryžius. Prie pat jo pamatų dvaro šeimininkė palikdavo monetų pilną indelį skirtą vargingiems žmonėms.</article>


<img width=105% src={cross}>
<article>
<br>
Šiandien tame indelyje rasite tik nedidelę popieriaus skiautę su parašu ir herbiniu antspaudu. Atrodo, jog tai turėtų būti svarbus istorinis dokumentas. Tačiau kur kita dokumento dalis? Kas jame parašyta? Kam vertėtų parodyti keistąjį radinį?
</article>
<br><br>
<img class="illustration" src={task}>

<div class="where-next">
	Kam vertėtų parodyti keistąjį radinį? Galbūt dvaro tarnai galėtų jums&nbsp;padėti?
	<br><br>
	<span class="highlighted-question">Kur reikėtų ieškoti&nbsp;tarnų?</span>
</div>


{/if} <!-- Main page $languages-->
</section>


{:else}

<!-- Stopper-->
{#if $language == "EN"}
<Stopper>Servants' house doors are shut.</Stopper>
{:else if $language == "RU"}
<Stopper>??? </Stopper>
{:else if $language == "LA"}
<Stopper>Двери домика слуг заперты. </Stopper>
{:else}
<Stopper>Tarnu namelio durys užrakintos.</Stopper>
{/if}



{/if} <!-- Module types-->
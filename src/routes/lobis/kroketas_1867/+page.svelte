<script>
import { onMount } from 'svelte';
import language from '../../stores/language';
import visited from '../../stores/visited';

import Offer from '../Offer.svelte';
import Stopper from '../../Stopper.svelte';

import map_piece from '$lib/images/map-pieces/12.png';
import task from '$lib/images/illustrations/fodder.png';

import nazimov from '$lib/images/archival/nazimov.jpg';
import kabinetas from '$lib/images/archival/kabinetas.jpg';
import safe from '$lib/images/archival/safe.jpg';
import testament_overlayed_ru from '$lib/images/illustrations/testament_overlayed_ru.png';
import testament_overlayed_lt from '$lib/images/illustrations/testament_overlayed_lt.png';

const station_id = 12


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
	<title> — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if $language == "RU"}
	<title>Площадка для крокета – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if $language == "LA"}
	<title> – Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Kroketo aikštelė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>

{#if show_offer}
<Offer />

{:else if show_station}

<section>
<img class="illustration" src={map_piece}>
{#if $language == "EN"}

English

{:else if $language == "RU"}


<h1>Площадка для&nbsp;крокета</h1>
<p class="subh">Dvyliktoji ir priešpaskutinė stotelė<br>ieškant Markučių lobio</p>
<article>
	Рядом с памятником поэту вы видите взрослых и детей, которые играют в крокет. Вы отдаете шар главе семейства — это старинный друг Григория Пушкина, архитектор Владимир Назимов.	
</article>
	<img width=105% src={nazimov}>
<article>
	<br>
	Он приехал из Эстонии в последние дни жизни Варвары Пушкиной, и пообещал ей, что сделает все возможное, чтобы открыть в усадьбе Маркучяй музей. В этом доме хранятся уникальная мебель, личные вещи Александра Пушкина и его близких, привезенные из села Михайловского.
</article>

<img width=105% src={kabinetas}>

<article>
	<br>
	Вы показываете Назимову все найденные фрагменты документа. Архитектор отдает вам последнюю 12 часть и рассказывает, что в 1935 г. Варвара Пушкина составила завещание, текст которого вам и удалось сегодня собрать.
</article>


<!-- <img width=100% src={testament_overlayed_ru}> -->


<article>
	Настоящий оригинал завещания хранится в надежном тайнике дома — в несгораемом сейфе, который был устроен еще в 1867 году.
</article>

<img width=90% src={safe}>

<article><br><br>
	Но для того, чтобы о последней воле супругов Пушкиных узнало как можно больше людей,  Назимов со своими детьми и придумал для гостей усадьбы эту занимательную игру.  

</article>

<div class="where-next">
	Благодаря вашей внимательности и логическому мышлению, вы смогли узнать, что написано в завещании Варвары Алексеевны.
	<br><br>
	<span class="highlighted-question">А теперь отправляйтесь в музей и получите за собранные фрагменты копии документа вознаграждение.</span>
</div>

{:else if $language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->


<h1>Kroketo aikštelė</h1>
<p class="subh">Dvyliktoji ir priešpaskutinė stotelė<br>ieškant Markučių lobio</p>
<article>
	Prie poeto Aleksandro Puškino paminklo grupelė vaikų ir suaugusiųjų žaidžia kroketą. Vienas iš žaidėjų yra architektas ir geras Grigorijaus Puškino draugas Vladimiras Nazimovas.
</article>
	<img width=105% src={nazimov}>
<article>
	<br>
	Jis į Markučius atvyko paskutiniais Varvaros Puškinos gyvenimo metais ir pažadėjo padaryti viską, kas įmanoma, kad dvaro sodyboje būtų atidarytas muziejus, skirtas žymiam poetui Aleksandrui Puškinui. Sodyboje saugomi unikalūs baldai, poeto ir jo artimųjų asmeniniai daiktai čia atvežti iš poeto namų, buvusių Michailovsko gyvenvietėje.
</article>

<img width=105% src={kabinetas}>

<article>
	<br>
Vladimirui Nazimovui jūs atiduodate kroketo kamuoliuką bei parodote visas rastas dokumento skiautes. Architektas jums atiduoda paskutinę – dvyliktąją dokumento dalį – ir papasakoja, kad dokumentas, kurį jūs šiandien surinkote, yra ne kas kita, o 1935 m. Markučių dvaro šeimininkės Varvaros Puškinos surašytas testamentas!
</article>


<!-- <img width=100% src={testament_overlayed_lt}> -->
<article>
Testamento originalas yra saugomas dvaro sodybos gyvenamajame name, patikimame, nedegiame, dar 1867 m. prie vienos iš krosnių įrengtame seife.
</article>
<img width=90% src={safe}>
<article><br/><br>
Šį smagų žaidimą, kurio tikslas surinkti šį svarbų dokumentą, veikiausiai sugalvojo pats Varvaros testamento vykdytojas Vladimiras Nazimovas su savo vaikais, norėdamas plačiau paskleisti žinią apie Markučių dvaro šeimininkų paskutinę valią.
</article>

<div class="where-next">
	Loginio mąstymo ir dėmesingumo dėka jums pavyko surinkti dokumentą ir sužinoti, kas parašyta testamente! 
	<br><br>
	<span class="highlighted-question">O dabar laikas užsukti į muziejų ir gauti apdovanojimą už nuveiktą darbą!</span>
</div>

{/if} <!-- Station $languages-->
</section>

{:else}
<!-- Stopper-->
{#if $language == "EN"}
<Stopper>Children are running around the croquet court frantically searching for the missing ball.</Stopper>
{:else if $language == "RU"}
<Stopper>Вокруг площадки для крокета бегают дети и суетливо ищут пропавший шар.</Stopper>
{:else if $language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Aplink kroketo aikštelę bėgioja vaikai karštligiškai ieškodami dingusio kamuoliuko.</Stopper>
{/if}


{/if} <!-- Module types-->


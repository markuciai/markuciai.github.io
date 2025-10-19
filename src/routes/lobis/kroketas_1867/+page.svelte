<script>




import Offer from '$components/Offer.svelte';
import Stopper from '$components/Stopper.svelte';

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
	<title>Croquet court — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if globe.language == "RU"}
	<title>Площадка для крокета – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if globe.language == "LA"}
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
{#if globe.language == "EN"}

<h1>Croquet court</h1>
<p class="subh">The twelfth and final stop<br>in the quest for Markučiai Treasure</p>
<article>
Near the monument to the poet, you see adults and children playing croquet. You give the ball to the head of the family, architect Vladimir Nazimov.
</article>
	<img width=105% src={nazimov}>
<article>
	<br>
He came from Estonia and, on her last days, promised Varvara Pushkina that he would do everything possible to open a museum in the Markuchiai estate. The house holds unique furniture and personal belongings of Alexander Pushkin, brought from the village of Mikhailovskoye. 
</article>

<img width=105% src={kabinetas}>

<article>
	<br>
You show Nazimov all the fragments of the document you have found. As he gives you the final twelfth part, he explains that in 1935 Varvara Pushkina had drawn up a will, the text of which you were able to gather today. 
</article>


<img width=100% src={testament_overlayed_ru}>


<article>
The original will is kept in a secure hiding place in the house, in a fireproof safe built in 1867. 
</article>

<img width=90% src={safe}>

<article><br><br>
However, to let as many people as possible learn about the last will of the Pushkin spouses, Nazimov and his children came up with this entertaining game for the guests of the estate. 

</article>

<div class="where-next">
	Thanks to your attentiveness and logical thinking, you were able to find out what Varvara Alekseevna had written in her will. 
	<br><br>
	<span class="highlighted-question">Now, go to the museum and collect your reward.</span>
</div>

{:else if globe.language == "RU"}


<h1>Площадка для&nbsp;крокета</h1>
<p class="subh">Двенадцатая и предпоследняя остановка<br>в поисках Клада Маркутья</p>
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


<img width=100% src={testament_overlayed_ru}>


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

{:else if globe.language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->















<h1>Kroketo aikštelė</h1>
<p class="subh">Dvyliktoji ir priešpaskutinė stotelė<br>ieškant Markučių lobio</p>
<article>
	Kroketo aikštelėje<!--, prie poeto Aleksandro Puškino paminklo,--> žaidžiamas unikalus žaidimas, kurį žaidė 1900 olimpinėse žaidynėse. Kroketas 19 a. buvo populiarus laisvalaikio žaidimas visoje Europoje. Tai žaidimas, kuriame lazdomis mušami kamuoliukai, pereinantys per erdvėje išdėliotus lankus. 
</article>
	<!-- <img width=105% src={nazimov}> -->
<article>
	<!-- <br> -->
Žaidimo metu, ant lazdos rasite paskutiniąja dokumento skiautę. 
</article>

<img width=105% src={kabinetas}>

<article>
	<br>
O dabar sudėkite visas skiautes drauge ir perskaitykite slaptą dokumentą. Kas jame parašyta? 
</article>


<img width=100% src={testament_overlayed_lt}>
<!-- <article>
Testamento originalas yra saugomas dvaro sodybos gyvenamajame name, patikimame, nedegiame, dar 1867 m. prie vienos iš krosnių įrengtame seife.
</article>
<img width=90% src={safe}>
<article><br/><br>
Šį smagų žaidimą, kurio tikslas surinkti šį svarbų dokumentą, veikiausiai sugalvojo pats Varvaros testamento vykdytojas Vladimiras Nazimovas su savo vaikais, norėdamas plačiau paskleisti žinią apie Markučių dvaro šeimininkų paskutinę valią.
</article> -->

<div class="where-next">
	Puikaus komandinio darbo dėka jums pavyko surinkti visą dokumentą!
	<br><br>
	<span class="highlighted-question">O dabar užsukite į muziejų ir atsiimkite apdovanojimą už nuveiktą darbą!</span>
</div>

{/if} <!-- Station globe.languages-->
</section>

{:else}
<!-- Stopper-->
{#if globe.language == "EN"}
<Stopper>Children are running around the croquet court frantically searching for the missing ball.</Stopper>
{:else if globe.language == "RU"}
<Stopper>Вокруг площадки для крокета бегают дети и суетливо ищут пропавший шар.</Stopper>
{:else if globe.language == "LA"}
<Stopper>Malum prohibitum.</Stopper>
{:else}
<Stopper>Aplink kroketo aikštelę bėgioja vaikai karštligiškai ieškodami dingusio kamuoliuko.</Stopper>
{/if}


{/if} <!-- Module types-->


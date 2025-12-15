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
import testament from '$lib/images/illustrations/testament.png';
import croquet from '$lib/images/archival/croquet.jpg';


import dvaras from '$lib/images/archival/mdvaras.jpg';

const station_id = 12


onMount(async () => { 
	globe.location = station_id
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

{#if (globe.progress < 0)}
<Offer />

{:else if (globe.progress == globe.location)}

<section>
<img class="map_piece_header_illustration" src={map_piece}>


{#if localStorage.barboba}
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


<!-- <img width=100% src={testament_overlayed_ru}> -->
<img src={testament} class="testament">


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


<h1>Площадка для крокета</h1>
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
..
{/if}

{:else} <!-- localStorage.barboba -->








{#if globe.language == "EN"}
<h1>Croquet court</h1>
<p class="subh">The twelfth and final stop<br>in the quest for Markučiai Treasure</p>
<article>
There's a game going at the croquet court, a game once played at the 1900 olympics. During the XIX century croquet was a popular game all acros Europe.
</article>

<img width=105% src={croquet}>
<article>
<br/>
In this game players hit balls with mallots, trying to get the balls trough hoops. As you play, you find the last piece of the document.
</article>

<article>
Now, having put together the pieces, turn them over and read the combined document. What does it say?
</article>



{:else if globe.language == "RU"}
<h1>Площадка для крокета</h1>
<p class="subh">Двенадцатая и предпоследняя остановка<br>в поисках Клада Маркутья</p>
<article>
На площадке для крокета дети играют в уникальную игру, которую играли на олимпиаде 1900 года. В XIX веке крокет был популярным времяпрепровождением по всей Европе.
</article>

<img width=105% src={croquet}>
<article>
<br/>
Это игра, в которой молотками бьют по шарам, чтобы забить их в расставленные по пространству воротца. Играя, вы находите последний кусочек документа на молотке.
</article>

<article>
А теперь, сложив все кусочки вместе, переверните и прочитайте собранный документ. Что на нём написано?
</article>

{:else if globe.language == "LA"}
{:else} <!-- LT -->



<h1>Kroketo aikštelė</h1>
<p class="subh">Dvyliktoji ir priešpaskutinė stotelė<br>ieškant Markučių lobio</p>
<article>
Kroketo aikštelėje<!--, prie poeto Aleksandro Puškino paminklo,--> žaidžiamas unikalus žaidimas, kurį žaidė 1900 olimpinėse žaidynėse. Kroketas XIX a. buvo populiarus laisvalaikio žaidimas visoje Europoje.
</article>

<img width=105% src={croquet}>

<article>
<br/>
Tai žaidimas, kuriame lazdomis mušami kamuoliukai, pereinantys per erdvėje išdėliotus lankus. Žaidimo metu, ant lazdos rasite paskutiniąja dokumento skiautę. 
</article>

<article>
O dabar, sudėjus visas skiautes drauge, apverskite ir perskaitykite slaptą dokumentą. Kas jame parašyta? 
</article>




<!-- <img width=100% src={testament_overlayed_lt}> -->
<!-- <img class="testament" src={testament}> -->
<!-- <article>
Testamento originalas yra saugomas dvaro sodybos gyvenamajame name, patikimame, nedegiame, dar 1867 m. prie vienos iš krosnių įrengtame seife.
</article>
<img width=90% src={safe}>
<article><br/><br>
Šį smagų žaidimą, kurio tikslas surinkti šį svarbų dokumentą, veikiausiai sugalvojo pats Varvaros testamento vykdytojas Vladimiras Nazimovas su savo vaikais, norėdamas plačiau paskleisti žinią apie Markučių dvaro šeimininkų paskutinę valią.
</article> -->



{/if} <!-- Station globe.languages-->
{/if} <!-- localStorage.barboba -->



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



<style>
	
.testament {
	width: 150%;
	margin: 0 0 calc(-4vw - 20px) 0;
	rotation: 0;
	z-index: 10;
}

</style>
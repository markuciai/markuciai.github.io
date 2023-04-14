<script>
	import { onMount } from 'svelte';
	import Offer from '../Offer.svelte';
	import Stopper from '../../Stopper.svelte';

	import map_piece from '$lib/images/map-pieces/1.png';
	import task_object from '$lib/images/illustrations/bowl.png';

	import entrance from '$lib/images/archival/entrance.jpg';

	
	const station_id = 1
	let visited
	let language = "LT"

	let show_offer = true
	let show_station = false

	let alert_collected = false
	let alert_ahead = false


	onMount(async () => { 
		visited = localStorage.visited

		if (visited >= 0) {
			show_offer = false
		}

		if(visited == station_id - 1) {
			visited = station_id
			localStorage.visited = visited
			window.location.reload();
		}
		if (visited >= station_id) {
			show_station = true;
		}

		language = localStorage.language
	});

</script>



<svelte:head>
{#if language == "EN"}
	<title>Cross — Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if language == "RU"}
	<title>Крест – Клад Маркутья</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
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


{#if language == "EN"}

Lorem

{:else if language == "RU"}
<section>
<img class="illustration" src={map_piece}>
<h1>Крест</h1>
<p class="subh">Первая остановка<br>в поисках Клада Маркутья</p>
<article>
По левой стороне от входа в парк, во времена Варвары Пушкиной, на каменном фундаменте стоял высокий крест, изготовленный из железнодорожных рельсов. У его основания хозяйка усадьбы оставляла чашу с монетками для бедных людей.
</article>


<img width=105% src={entrance}>
<article>
<br>
Сейчас в этой чаше лежит только обрывок бумаги с гербовой печатью и подписью. Похоже, это очень важный исторический документ. Но, где же остальная часть текста, и что в нем было написано? Кому следует отдать случайную находку?
</article>
<img class="illustration" src={task_object}>

<div class="where-next">
	Может быть слуги поместья смогут нам&nbsp;помочь? Нужно&nbsp;срочно их&nbsp;найти.
	<br><br>
	<span class="highlighted-question">Где можно найти&nbsp;слуг?</span>
</div>

</section>

<div class="map_section">
	Теперь у вас есть первая часть карты. Куда дальше?
</div>



{:else if language == "LA"}

Lorem

{:else}

<section>
	<img class="illustration" src={map_piece}>
	<h1>Kryžius</h1>
	<p class="subh">Pirmoji stotelė<br>ieškant Markučių lobio</p>
	<article>
		Varvaros Puškinos laikais, prie įėjimo į parką iš kairės pusės ant akmeninio postamento stovėjo aukštas, iš geležinkelio bėgių pagamintas kryžius. Prie pat jo pamatų dvaro šeimininkė palikdavo monetų pilną indelį skirtą vargingiems žmonėms. 	</article>


	<img width=105% src={entrance}>
	<article>
	<br>
	Šiandien tame indelyje rasite tik nedidelę popieriaus skiautę su parašu ir herbiniu antspaudu. Atrodo, jog tai turėtų būti svarbus istorinis dokumentas. Tačiau kur kita dokumento dalis? Kas jame parašyta? Kam vertėtų parodyti keistąjį radinį?
	</article>
	<br><br>
	<img class="illustration" src={task_object}>

	<div class="where-next">
		Kam vertėtų parodyti keistąjį radinį? Galbūt dvaro tarnai galėtų jums&nbsp;padėti?
		<br><br>
		<span class="highlighted-question">Kur reikėtų ieškoti&nbsp;tarnų?</span>
	</div>

</section>


	<div class="map_section">
		Kur toliau?

	</div>

{/if} <!-- Main page Languages-->
{:else}

<!-- Stopper-->
{#if language == "EN"}
<Stopper>Servants' quarters doors are shut.</Stopper>
{:else if language == "RU"}
<Stopper>Двери домика слуг заперты. </Stopper>
{:else if language == "LA"}
<Stopper>Двери домика слуг заперты. </Stopper>
{:else}
<Stopper>Tarnu namelio durys užrakintos.</Stopper>
{/if}



{/if} <!-- Module types-->
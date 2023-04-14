<script>
	import { onMount } from 'svelte';
	import bowl from '$lib/images/illustrations/bowl.png';
	import entrance from '$lib/images/archival/entrance.jpg';

	import map_piece from '$lib/images/map-pieces/1.png';
	import Offer from '../Offer.svelte';
	// import map from '$lib/images/map/1.png';
	// import Map from '../../Map.svelte';




	const station_id = 1
	let visited
	let language = "LT"

	let show_offer = true
	let show_station = false

	let alert_collected = false
	let alert_ahead = false




	function a_func(a_thing = "") {
		console.log("test thing", a_thing);
	}


	onMount(async () => { 
		visited = localStorage.getItem("visited")

		if (visited >= 0) {
			show_offer = false
		}

		if(visited == station_id - 1) {
			visited = station_id
			localStorage.setItem("visited", visited);
			window.location.reload();
		}
		if (visited >= station_id) {
			show_station = true;
		}




		language = localStorage.getItem("language")

		a_thing('success')
	});



</script>





<svelte:head>
	{#if language == "LT"}
	<title>Kryžius – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
	{:else}
	<title>Крест – Клад Маркутья</title>
	<meta name="description" content="Квест" />
	{/if}
</svelte:head>


{#if show_offer}
<Offer />
{:else if show_station}


{#if language == "RU"}
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
	<img class="illustration" src={bowl}>

	<div class="where-next">
		Может быть слуги поместья смогут нам&nbsp;помочь? Нужно&nbsp;срочно их&nbsp;найти.
		<br><br>
		<span class="highlighted-question">Где можно найти&nbsp;слуг?</span>
	</div>

</section>


	<div class="map_section">
		Теперь у вас есть первая часть карты. Куда дальше?

	</div>



{:else if language = "LT"}
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
	<img class="illustration" src={bowl}>

	<div class="where-next">
		Kam vertėtų parodyti keistąjį radinį? Galbūt dvaro tarnai galėtų jums&nbsp;padėti?
		<br><br>
		<span class="highlighted-question">Kur reikėtų ieškoti&nbsp;tarnų?</span>
	</div>

</section>


	<div class="map_section">
		Kur toliau?

	</div>

{/if}

	<!-- <img src={map} width=100%> -->

{/if} 








<style>



</style>

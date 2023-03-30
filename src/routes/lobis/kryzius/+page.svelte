<script>
	import bowl from '$lib/images/illustrations/bowl.png';
	import entrance from '$lib/images/archival/entrance.jpg';

	import map_piece from '$lib/images/map/cross-piece.png';
	import map from '$lib/images/map/map-1.png';

	import icon_1 from '$lib/images/icons/icon-1.png';
	import icon_2 from '$lib/images/icons/icon-2.png';
	import icon_3 from '$lib/images/icons/icon-3.png';
	import icon_4 from '$lib/images/icons/icon-4.png';
	import icon_5 from '$lib/images/icons/icon-5.png';
	import icon_6 from '$lib/images/icons/icon-6.png';
	import icon_7 from '$lib/images/icons/icon-7.png';
	import icon_8 from '$lib/images/icons/icon-8.png';
	import icon_9 from '$lib/images/icons/icon-9.png';
	import icon_10 from '$lib/images/icons/icon-10.png';
	import icon_11 from '$lib/images/icons/icon-11.png';
	import icon_12 from '$lib/images/icons/icon-12.png';
	import icon_13 from '$lib/images/icons/icon-13.png';








</script>

<svelte:head>
	<title>Kryžius – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
</svelte:head>



<!-- Archived russian version 
<section>
	<img class="illustration" src={map_piece}>
	<h1>Крест</h1>
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


	<div class="appendix">
		Теперь у вас есть первая часть карты. Куда дальше?

	</div>
	<img src={map} width=100%>

	<div class="appendix">
		<ul>
			<li>Колодец</li>
			<li>Пекарня</li>
		</ul>
		Обойдите все пункты в нужном порядке чтобы выиграть квест.
	</div>

-->


<section>
	<img class="illustration" src={map_piece}>
	<h1>Kryžius</h1>
	<p class="subh">Pirmoji stotelė<br>jieškant Markučių lobį</p>
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
	<img src={map} width=100%>




	
	<div class="map_section">
	<ul class="legend_ul">
		<li class="legend " ><img src={icon_2} class="legend_icon" >Namelis</li>
		<li class="legend " ><img src={icon_8} class="legend_icon">Šulinys</li>
		<li class="legend"><img src={icon_3} class="legend_icon">Arklides</li>
		<li class="legend"><img src={icon_4} class="legend_icon">Virtuvė</li>
		<li class="legend"><img src={icon_9} class="legend_icon">Oranžerija</li>
		<li class="legend"><img src={icon_13} class="legend_icon">Muziejus</li>
		<li class="legend"><img src={icon_1} class="legend_icon">Kryžius</li>
		<li class="legend"><img src={icon_7} class="legend_icon">Duonkepė</li>
		<li class="legend"><img src={icon_6} class="legend_icon">Vištidė ir ledainė</li>
		<li class="legend"><img src={icon_12} class="legend_icon">Kroketo aikštelė</li>

		<li class="legend"><img src={icon_10} class="legend_icon">Cerkvė</li>
		<li class="legend"><img src={icon_11} class="legend_icon">Šuniukai</li>
		<li class="legend"><img src={icon_3} class="legend_icon">Tvenkiniai</li>
	</ul>

		Kad laimeti žaidima, apeikite visus punktus teisinga eile.
	</div>





<style>

.legend_ul {
	list-style-type: none;
	/* padding: 0; */
	/* margin: 0; */

}

.legend {
	display: block;
	/* height: 120px; */
	/* padding: 20px; */
	font-size: 36px;
	border-radius: 8px;
	/* vertical-align: middle; */
	padding: 0 0 80px 0;
	/* margin: 0; */
	margin: -0px 0 -80px 0;
}

.legend_icon {
	position: relative;
	top: 40px;
	left: 4px;
	width: 120px;
	}

.current {
	background-color: #D33F37;

}

.visited {
	background-color: #D33F37;

}


section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: white;
		border-radius: 5px;
		box-shadow: 0 20px 20px -15px rgba(0,0,0, 0.4);
		font-size: 16pt;
	}

	h1 {
		width: 90%;
		font-weight: 800;
		/* text-transform: uppercase;
		letter-spacing: 5px; */
		/* font-style: italic; */
		/* font-size: clamp(80px, 24vw, 128px); */
		font-size: clamp(40px, 12vw, 64px);
		line-height: clamp(40px, 12vw, 64px);;
		color: #D33F37;
        /* text-align: left; */
		padding: 0;
		margin: 50px 0 60px 0;
	}

	.subh {
		font-size: 12px;
		/* text-align: left; */
		text-align: center;
		width: 89%;
		margin: -50px 0 30px 0;
		/* font-style: italic; */
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 1.5px;
	}


	article {
		padding: 0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);
		margin-bottom: 20px;
	}



	.where-next {
		background-color: #EEDC83;
		color: black;
		width: 105%;
		box-sizing: border-box;
		padding: clamp(40px, 12.5vw, 80px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);
		margin: 0px 0 20px 0;
		box-shadow: 0 20px 20px -15px rgba(0,0,0, 0.4);
		border-radius: 5px;
		

		font-size: 24px;
		font-size: clamp(24px, 6vw, 32px);

	}

	.highlighted-question {
		font-style: italic;
		font-weight: bold;
		color: #D33F37;
	}

	.illustration {
		width: clamp(320px, 100vw, 640px);
		z-index: 10;
		margin: clamp(-160px, -25vw, -80px) 0 clamp(-80px, -12.5vw, -40px) 0;
		user-select: none;
		pointer-events: none;
	}


	.map_section {
		color: white;
		font-size: 16pt;
		padding: 20px;
	}
</style>

<script>
	import bowl from '$lib/images/illustrations/eggs.png';
	import birdhouse from '$lib/images/archival/birdhouse.jpg';
	import vanyusha from '$lib/images/archival/vanyusha.jpg';

	import map_piece from '$lib/images/map-pieces/6.png';
	import map from '$lib/images/map/map-6.png';

	
</script>

<svelte:head>
	<title>Vištidė ir ledainė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
</svelte:head>



<section>
	<img class="illustration" src={map_piece}>
	<h1>Vištidė ir ledainė</h1>
	<p class="subh">Šeštoji stotelė<br>ieškant Markučių lobio</p>
	<article>
		Vaniuša jus pastebi iš tolo ir pamojuoja. Jūs atiduodat jam viščiukų lesalą ir papasakojate apie savo paieškas.
	</article>


	<img width=105% src={vanyusha}>
	<article>
	<br>
	Berniukas su džiaugsmu pasiruošęs jums padėti – jis matė panašią popieriaus skiautę prie ledainės po aviečių krūmu ir tuoj pat jį atneš.
	</article>
	<br><br><br><br>
	<img class="illustration" src={bowl}>

	<div class="where-next">
		O jūs būkit malonūs ir nuneškite pintinę su šviežiais kiaušiniais Mašai (Marijai). Tegu ji iškepa didelį pyragą svečiams ir saldžių varškės pyragėlių Iliušai (mažajam Iljai), nes šiandien jo vardadienis.
		<br><br>
		<span class="highlighted-question">Kur reikėtų nunešti pintinę su kiaušiniais?</span>
	</div>

</section>


	<div class="map_section">
		Kur toliau?

	</div>
	<img src={map} width=100%>






<style>

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

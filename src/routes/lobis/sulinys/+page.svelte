<script>
	import bowl from '$lib/images/illustrations/bucket.png';
	import sulinys from '$lib/images/archival/sulinys.png';

	import map_piece from '$lib/images/map-pieces/8.png';
	import map from '$lib/images/map/8.png';

	
</script>

<svelte:head>
	<title>Šulinys – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
</svelte:head>





<section>
	<img class="illustration" src={map_piece}>
	<h1>Šulinys</h1>
	<p class="subh">Aštuntoji stotelė<br>ieškant Markučių lobio</p>
	<article>
		Šis šulinys buvo iškastas 1867 m., kuomet buvo statomas Melnikovų dvaras Markučiuose. Kiekvieną rytą kiemsargis specialia pompa pumpavo vandenį, kuris vamzdžiais tekėjo į specialią namuose esančią talpą.
	</article>


	<img width=105% src={sulinys}>
	<article>
	<br>
	Dalį vandens šildydavo ir naudojo prausimuisi bei vonios malonumams. Taip, XIX a. šiame name jau buvo įrengta vonia ir tualetas. Na bet grįžkim prie mūsų reikalų, jums juk reikia pasemti vandens ir  palaistyti orchidėjas. Prie šulinio stovi kibiras. Neskubėkit. Prieš leidžiant kibirą į šulinį, žvilgtelkit į kibiro vidų. Matote? Ant dugno baltuoja popieriaus skiautė! Paėmėt ją? Tai būtent tai ko jums reikia.
	</article>
	<br><br><br><br>
	<img class="illustration" src={bowl}>

	<div class="where-next">
		Dabar drąsiai semkite vandenį ir eikite ieškoti orchidėjų
		<br><br>
		<span class="highlighted-question">Kur reikėtų ieškoti orchidėjų?</span>
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

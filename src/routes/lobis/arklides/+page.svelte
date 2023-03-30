<script>
	import task from '$lib/images/illustrations/fishing_rod.png';
	import stables from '$lib/images/archival/stables.jpg';

	import map_piece from '$lib/images/map/cross-piece.png';
	import map from '$lib/images/map/map-3.png';
</script>

<svelte:head>
	<title>Arklidės – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
</svelte:head>
 



<section>
	<img class="illustration" src={map_piece}>
	<h1>Arklidės</h1>
	<p class="subh">Trečioji stotelė<br>jieškant Markučių lobį</p>
	<article>
		Šaunuoliai, jūs lengvai įvykdėt tarnų prašymą – naują balną atidavėt vežikui-vadeliotojui ponui Michalui, kuris ilgą laiką tarnavo pas Puškinus Markučių dvare ir vežiojo savo šeimininkus į miestą bei į kitas gubernijas.
	</article>
	<img width=105% src={stables}>
	<br><br>

	<img class="illustration" src={task}>

	<div class="where-next">
		Jums užsiminus apie svarbaus dokumento paiešką, vežikas prisiminė, jog prie arklidžių kaip tik rado dokumento skiautę ir mielai ją atiduos, jeigu jūs nunešite meškerę jo jauniausiajam sūnui Tarasui.
		<br><br>
		<span class="highlighted-question">Kur reikėtų nunešti&nbsp;meškerę?</span>
	</div>

</section>


	<div class="map_section">
		Jūs gavote trečiąją dokumento dalį.

	</div>
	<img src={map} width=100%>


	<div class="map_section">
		<ul>
			<li>Колодец</li>
			<li>Пекарня</li>
		</ul>
		Обойдите все пункты в нужном порядке чтобы выиграть квест.
	</div>





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

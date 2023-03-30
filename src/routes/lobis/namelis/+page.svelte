<script>
	import task_object from '$lib/images/illustrations/saddle.png';
	import servant_house from '$lib/images/archival/servant_house.jpg';
	import servants from '$lib/images/archival/servants.jpg';


	import map_piece from '$lib/images/map/cross-piece.png';
	import map from '$lib/images/map/map-2.png';

	
</script>

<svelte:head>
	<title>Tarnų namelis – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
</svelte:head>




<section>
	<img class="illustration" src={map_piece}>
	<h1>Tarnų namelis</h1>
	<p class="subh">Antroji stotelė<br>jieškant Markučių lobį</p>
	<article>
	Tarnaitė Ona ir jos vyras Viačeslavas jus pasitinka ant savo jaukių namų slenksčio. Jie taip pat parke aptiko panašaus dokumento skiautę su įrašu, bet nežino, ką su ja daryti.
	</article>


	<img width=105% src={servants}>
	<article>
	<br>
	Tarnai užsiėmę nesibaigiančiais darbais sode, todėl neturi laiko nežinomo dokumento paieškoms. Tačiau girdėjo, jog surinkus visas dokumento dalis ir nunešus jį į ponų namą galima gauti radybų.
	</article>
	<img class="illustration task" src={task_object}>

	<div class="where-next">
		Ana ir Viačeslavas sutinka jums atiduoti rastą dokumento dalį, jeigu jūs jiems pagelbėsit ir įvykdysit jų prašymą – nunešit naują balną ponui Michalui.
		<br><br>
		<span class="highlighted-question">Kur reikėtų nunešti balną?</span>
	</div>

</section>


	<div class="map_section">
		Теперь у вас есть первая часть карты. Куда дальше?

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
		/* padding: clamp(40px, 12.5vw, 80px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px); */
		padding: clamp(180px, 25vw, 240px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);
		/* padding: 160px 10px 80px 20px; */
		margin: clamp(-160px, -25vw, -110px) 0 20px 0;
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
		margin: clamp(-80px, -25vw, -40px) 0 clamp(-80px, -12.5vw, -40px) 0;
		user-select: none;
		pointer-events: none;
	}

	.task {
		padding: 0 0 -200px 0;
	}

	.map_section {
		color: white;
		font-size: 16pt;
		padding: 20px;
	}
</style>

<script>
	import bowl from '$lib/images/illustrations/flowers.png';
	import fruit_garden from '$lib/images/archival/fruit_garden.jpg';

	import map_piece from '$lib/images/map-pieces/9.png';
	import map from '$lib/images/map/9.png';

	
</script>

<svelte:head>
	<title>Oranžerija – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
</svelte:head>




<section>
	<img class="illustration" src={map_piece}>
	<h1>Oranžerija</h1>
	<p class="subh">Devintoji stotelė<br>ieškant Markučių lobio</p>
	<article>
		Jūs visiškai teisūs – orchidėjos auga oranžerijoj, kur šaltuoju metų sezonu nuo šalčio saugomi egzotiški šilumą mėgstantys augalai. 
	</article>


	<img width=105% src={fruit_garden}>
	<article>
	<br>
	Čia jūs sutinkate mergaitę Olią (mažąją Olgą), kuriai padedate supilti vandenį į laistytuvus ir viename gražiame gėlių vazonėlyje pastebite jums reikalingo dokumento skiautę. Pasiimkite ją!
	</article>
	<br><br>
	<img class="illustration" src={bowl}>

	<div class="where-next">
		Olia sukomponavo gražias gėlių puokštes ir paprašė jas nunešti ant Varvaros ir Grigorijaus kapų.
		<br><br>
		<span class="highlighted-question">Kur reikėtų nešti gėles?</span>
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

<script>

	import nazimov from '$lib/images/archival/nazimov.jpg';
	import kabinetas from '$lib/images/archival/kabinetas.jpg';
	import safe from '$lib/images/archival/safe.jpg';
	
	import map_piece from '$lib/images/map/cross-piece.png';
	import map from '$lib/images/map/map-12.png';

	
</script>

<svelte:head>
	<title>Kroketo aikštelė – Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
</svelte:head>



<section>
	<img class="illustration" src={map_piece}>
	<h1>Kroketo aikštelė</h1>
	<p class="subh">Dvyliktoji ir priešpaskutinė stotelė<br>jieškant Markučių lobį</p>
	<article>
		Prie poeto Aleksandro Puškino paminklo grupelė vaikų ir suaugusiųjų žaidžia kroketą. Vienas iš žaidėjų yra architektas ir geras Grigorijaus Puškino draugas Vladimiras Nazimovas.
	</article>
		<img width=105% src={nazimov}>
	<article>
		<br>
		Jis į Markučius atvyko paskutiniais Varvaros Puškinos gyvenimo metais ir pažadėjo padaryti viską, kas įmanoma, kad dvaro sodyboje būtų atidarytas muziejus, skirtas žymiam poetui Aleksandrui Puškinui. Sodyboje saugomi unikalūs baldai, poeto ir jo artimųjų asmeniniai daiktai čia atvežti iš poeto namų, buvusių Michailovsko gyvenvietėje.
	</article>

	<img width=105% src={kabinetas}>

	<article>
		<br>
	Vladimirui Nazimovui jūs atiduodate kroketo kamuoliuką bei parodote visas rastas dokumento skiautes. Architektas jums atiduoda paskutinę – dvyliktąją dokumento dalį – ir papasakoja, kad dokumentas, kurį jūs šiandien surinkote, yra ne kas kita, o 1935 m. Markučių dvaro šeimininkės Varvaros Puškinos surašytas testamentas!
	</article>

	<img width=105% src={safe}>

	<article>
	<br>
	Testamento originalas yra saugomas dvaro sodybos gyvenamajame name, patikimame, nedegiame, dar 1867 m. prie vienos iš krosnių įrengtame seife. Šį smagų žaidimą, kurio tikslas surinkti šį svarbų dokumentą, veikiausiai sugalvojo pats Varvaros testamento vykdytojas Vladimiras Nazimovas su savo vaikais, norėdamas plačiau paskleisti žinią apie Markučių dvaro šeimininkų paskutinę valią.
	</article>

	<div class="where-next">
		Loginio mąstymo ir dėmesingumo dėka jums pavyko surinkti dokumentą ir sužinoti, kas parašyta testamente! 
		<br><br>
		<span class="highlighted-question">O dabar laikas užsukti į muziejų ir gauti apdovanojimą už nuveiktą darbą!</span>
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

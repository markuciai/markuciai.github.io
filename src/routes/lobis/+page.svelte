<script>
	import Offer from './Offer.svelte';

	import bowl from '$lib/images/illustrations/bowl.png';
	import map_piece from '$lib/images/map/cross-piece.png';
	import map from '$lib/images/map/0.png';
	import entrance from '$lib/images/archival/entrance.jpg';

	
</script>

<svelte:head>
	<title>Markučių Lobis</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Offer />
<br>
<section>
	<br>

	<h1>Markučių Lobis</h1>
	<p class="subh">Markučių dvaro muziejaus<br>orientacinis žaidimas</p>
	<article>
		Markučių dvarą 1867 m. savo žmonai ir penkiems vaikams pastatė geležinkelių inžinierius Aleksejus Melnikovas. Be pagrindinio ponų namo buvo įkurtas angliškas parkas, pasodintas vaismedžių sodas, iškasti tvenkiniai ir šulinys, pastatytos arklidės, oranžerija, duonkepė (kepyklėlė), tarnų namelis, ledainė, vištidė, virtuvė, įrengtos kroketo ir teniso žaidimų aikštelės.
		<br><br>
		Kai vaikai užaugo, dvaras ir jo 270 hektarų valda buvo padovanota vyriausiajai dukrai Varvarai (Barborai). 1883 m. į Markučius atvyko žymaus rusų poeto Aleksandro Puškino sūnus Grigorijus. Jie su Varvara susituokė ir kartu pragyveno 22 metus. Abu daug keliavo, o iki 1899 m. pakaitomis gyveno tai Markučių, tai Michailovsko dvaruose. Vilniuje jie daug laiko ir lėšų skyrė labdarai, išlaikė vaikų prieglaudą „Jasli“.
		<br><br>
		Po Grigorijaus mirties Varvara dar pragyveno 30 metų, tačiau daugiau nebeištekėjo. Iki pat mirties ji svajojo išpildyti savo velionio vyro valią ir dvare įkurti muziejų, kuriame visi norintys galėtų pamatyti žymaus poeto Aleksandro Puškino daiktus. Varvara mirė 1935 m. ir buvo palaidota šalia savo vyro Grigorijaus. 
		<br><br>
		O dabar įsivaizduokite, kad jūs laiko mašina nusikeliate į praeitį ir lankotės Markučių dvare jo klestėjimo laikais. Jums reikės atlikti 12 užduočių, kurios padės surinkti paslaptingą senovinį dokumentą ir rasti Markučių dvaro lobį.		
	</article>
</section>
<br><br>
<img width=100% src={map}>




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
		padding-bottom: 80px;
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

	article {
		padding: 0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);
	}

	.highlighted-question {
		font-style: italic;
		font-weight: bold;
		color: #D33F37;
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

	.illustration {
		width: clamp(320px, 100vw, 640px);
		z-index: 10;
		margin: clamp(-160px, -25vw, -80px) 0 clamp(-80px, -12.5vw, -40px) 0;
		user-select: none;
		pointer-events: none;
	}


	.appendix {
		color: white;
		font-size: 16pt;
		padding: 20px;
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
</style>

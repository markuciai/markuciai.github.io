<script>
	import bowl from '$lib/images/illustrations/bowl.png';
	import map_piece from '$lib/images/map/cross-piece.png';
	import map from '$lib/images/map/map.png';
	import entrance from '$lib/images/archival/entrance.jpg';
</script>

<svelte:head>
	<title>MDM</title>
	<meta name="description" content="Markučių dvaro muziejus" />
</svelte:head>



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
		font-weight: bold;
		/* font-size: clamp(80px, 24vw, 128px); */
		font-size: clamp(40px, 12vw, 64px);
        /* line-height: 0px; */
		color: #D33F37;
        /* text-align: left; */
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


</style>

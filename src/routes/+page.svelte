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
	<h1>Markučių dvaro muziejus</h1>
	<article>
		<ul>
		<li><a href="/lobis">Lobis</a></li>
		<li><a href="/lobis/kryzius">Kryzius</a></li>
		<li><a href="/lobis/kryzius">Kryzius</a></li>
		<li><a href="/lobis/kryzius">Kryzius</a></li>
		<li><a href="/lobis/kryzius">Kryzius</a></li>
		<li><a href="/lobis/kryzius">Kryzius</a></li>
		</ul>
	</article>



</section>







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


<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

<div class="app">
	
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer>
		<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
		<p>// Demonstracinė versija. Vyksta darbai.</p>
	</footer>
</div>

 
<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		font-family: "Lora";
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 20px;
		padding-top: 100px;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;

		font-size: 12px;
		/* text-align: left; */
		text-align: center;
		width: 100%;

		/* font-style: italic; */
		font-weight: bold;
		font-family: "Lora";
		color: wheat;
		text-transform: uppercase;
		letter-spacing: 1.5px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}





</style>

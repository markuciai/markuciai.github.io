
<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import Header from './Header.svelte';
	import './styles.css';

	import icon_1 from '$lib/images/icons/icon-1.png';
	import icon_2 from '$lib/images/icons/icon-2.png';
	import icon_3 from '$lib/images/icons/icon-3.png';
	import icon_4 from '$lib/images/icons/icon-4.png';
	import icon_5 from '$lib/images/icons/icon-5.png';
	import icon_6 from '$lib/images/icons/icon-6.png';
	import icon_7 from '$lib/images/icons/icon-7.png';
	import icon_8 from '$lib/images/icons/icon-8.png';
	import icon_9 from '$lib/images/icons/icon-9.png';
	import icon_10 from '$lib/images/icons/icon-10.png';
	import icon_11 from '$lib/images/icons/icon-11.png';
	import icon_12 from '$lib/images/icons/icon-12.png';
	import icon_13 from '$lib/images/icons/icon-13.png';



	let a_thing_in_a_store = writable("i'm stored yo");
	console.log($a_thing_in_a_store)
	

	// const store = writable(localStorage.getItem("store") || "");

	// store.subscribe(val => localStorage.setItem("store", val));
	let visited = 0;
	let language = "LT"

	// visited = localStorage.getItem(visited)
	// let visited = writable(localStorage.getItem("store") || 0);
	// visited = writable(localStorage.getItem("store") || "0");
	// visited = 

	// console.log(localStorage.getItem("store") )
	
	

	function increment() {
		// visited.update(n => n + 1);
		visited = visited + 1;
		console.log(visited);
		localStorage.setItem("visited", visited);
		console.log( localStorage.getItem("visited") )

		console.log("language:", language);
	}

	function decrement() {
		// visited.update(n => n - 1);
		visited = visited - 1;
		console.log(visited);
		localStorage.setItem("visited", visited);
		console.log("language:", language);
	}

	function set_language_en() {
		language = "EN";
		console.log("language set to:", language);
		localStorage.setItem("language", language);
	}

	function set_language_ru() {
		language = "RU";
		console.log("language set to:", language);
		localStorage.setItem("language", language);
	}

	function set_language_lt() {
		language = "LT";
		console.log("language set to:", language);
		localStorage.setItem("language", language);
	}

	onMount(async () => { 
		console.log( "Mounted!!" )

		if(localStorage.getItem("visited") === null) {
			localStorage.setItem("visited", visited);
}

		if(localStorage.getItem("language") === null) {
			localStorage.setItem("language", language);
}
		
		visited = Number(localStorage.getItem("visited"));
		language = localStorage.getItem("language")
		console.log("Starting up. Language: ", language, " || biggest visited:", visited);
		// if (language == "LT"):
		// 	console.log("already LT");
		// else:
		// 	localStorage.setItem("language", "LT");
	});

</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">

<div class="app">
	<button on:click={set_language_en}>EN</button>
	<button on:click={set_language_ru}>RU</button>
	<button on:click={set_language_lt}>LT</button>


	<button on:click={increment}>
		plus
	</button>
	<button on:click={decrement}>
		minus
	</button>
	<h1>Visited: {visited} || language: {language}</h1>

	{#if visited > 4}
		<h1>visited more than 4</h1>
	{:else}
		<h1>begone, child</h1>
	{/if}



	<!-- <input bind:value={$store} /> -->
	
	<!-- <Header /> -->

	<main>
		<slot />
		<div class="map_section">
			<ul class="legend_ul">
				<li class="legend " ><img src={icon_2} class="legend_icon" >Tarnų&nbsp;namelis</li>
				<li class="legend " ><img src={icon_8} class="legend_icon">Šulinys</li>
				<li class="legend"><img src={icon_3} class="legend_icon">Arklides</li>
				<li class="legend"><img src={icon_5} class="legend_icon">Virtuvė</li>
				<li class="legend"><img src={icon_9} class="legend_icon">Oranžerija</li>
				<li class="legend"><img src={icon_1} class="legend_icon">Kryžius</li>
			</ul>
			<ul class="legend_ul">
				<li class="legend"><img src={icon_13} class="legend_icon">Muziejus</li>
				<li class="legend"><img src={icon_7} class="legend_icon">Duonkepė</li>
				<li class="legend"><img src={icon_6} class="legend_icon">Vištidė&nbsp;ir&nbsp;ledainė</li>
				<li class="legend"><img src={icon_12} class="legend_icon">Kroketo&nbsp;aikštelė</li>
		
				<li class="legend"><img src={icon_10} class="legend_icon">Cerkvė</li>
				<li class="legend"><img src={icon_11} class="legend_icon">Šuniukai</li>
				<li class="legend"><img src={icon_4} class="legend_icon">Tvenkiniai</li>
			</ul>
		
				<!-- Kad laimeti žaidima, apeikite visus punktus teisinga eile. -->
			</div>
		
	</main>

	<footer>
		<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
		<p>// Demonstracinė versija. Vyksta darbai.</p>
		<p>Pageidaujant užsakyti Markučių Lobio edukacija: <a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a></p>
		<p> </p>
	</footer>
</div>

 





<style>

.map_section {
	/* display: grid; */
	display: flex;
	flex-wrap: wrap;
	/* width: clamp(200px, 100vw, 760px); */
	/* flex-basis: 400px; */
	flex-grow: 0;
}

.legend_ul {
	/* flex: initial; */
	flex: 1 0 0;
	list-style-type: none;
	padding: 0;
	margin: 0;
	color: white;
	/* width: clamp(200px, 100vw, 760px); */
	width: 400px;
	margin-left: -20px;

}

.legend {
	/* border: solid #D33F37 2px; */
	display: block;
	/* height: 120px; */
	/* padding: 20px; */
	font-size: 34px;
	border-radius: 8px;
	/* vertical-align: middle; */
	padding: 0 0 80px 0;
	/* margin: 0; */
	margin: 0px 0 -80px 0;
	width: 400px;
}

.legend_icon {
	position: relative;
	top: 40px;
	left: 4px;
	width: 120px;
	}

.current {
	background-color: #D33F37;

}

.visited {
	background-color: #D33F37;

}

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
		padding: 0px;

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
			padding: 0px 0;
		}
	}





</style>

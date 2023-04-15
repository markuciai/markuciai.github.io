
<script>
	import { onMount } from 'svelte';

	// import a_map from './Map.svelte';
	import './styles.css';

	import icon_0 from '$lib/images/icons/0.png';
	import icon_1 from '$lib/images/icons/1.png';
	import icon_2 from '$lib/images/icons/2.png';
	import icon_3 from '$lib/images/icons/3.png';
	import icon_4 from '$lib/images/icons/4.png';
	import icon_5 from '$lib/images/icons/5.png';
	import icon_6 from '$lib/images/icons/6.png';
	import icon_7 from '$lib/images/icons/7.png';
	import icon_8 from '$lib/images/icons/8.png';
	import icon_9 from '$lib/images/icons/9.png';
	import icon_10 from '$lib/images/icons/10.png';
	import icon_11 from '$lib/images/icons/11.png';
	import icon_12 from '$lib/images/icons/12.png';


	import Map from './Map.svelte';

	let visited = -1;
	let language = "LT"


	// function increment() {
	// 	// visited.update(n => n + 1);
	// 	visited = visited + 1;
	// 	console.log(visited);
	// 	localStorage.setItem("visited", visited);
	// 	console.log( localStorage.getItem("visited") )

	// 	console.log("language:", language);
	// }

	// function decrement() {
	// 	// visited.update(n => n - 1);
	// 	visited = visited - 1;
	// 	console.log(visited);
	// 	localStorage.setItem("visited", visited);
	// 	console.log("language:", language);
	// }

	function set_language_en() {
		language = "EN";
		localStorage.language = language
		console.log("language set to:", language);
		window.location.reload();
	}

	function set_language_ru() {
		language = "RU";
		localStorage.language = language
		console.log("language set to:", language);
		window.location.reload();
	}

	function set_language_lt() {
		language = "LT";
		localStorage.language = language
		console.log("language set to:", language);
		window.location.reload();
	}

	function set_language_la() {
		language = "LA";
		localStorage.language = language
		console.log("language set to:", language);
		window.location.reload();
	}

	


	onMount(async () => { 

		if(localStorage.getItem("visited") === null) {
			localStorage.setItem("visited", visited);
			window.location.reload();
}

		if(localStorage.getItem("language") === null) {
			language = localStorage.language
}
		
		visited = Number(localStorage.visited);
		language = localStorage.language
		console.log("Starting up. Language: ", language, " || biggest visited:", visited);
	});

</script>


<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">



<div class="app">

<!-- <div>
	<button on:click={increment}>
		plus
	</button>
	<button on:click={decrement}>
		minus
	</button>

		|| Visited: {visited} || language: {language}
</div> -->

<div class="lang_switch">
{#if language == "EN"}
<button on:click={set_language_en} class="lang_button selected">EN</button> |
<button on:click={set_language_ru} class="lang_button">RU</button> |
<button on:click={set_language_lt} class="lang_button">LT</button> |
<button on:click={set_language_la} class="lang_button">LA</button>
{:else if language == "RU"}
<button on:click={set_language_en} class="lang_button">EN</button> |
<button on:click={set_language_ru} class="lang_button selected">RU</button> |
<button on:click={set_language_lt} class="lang_button">LT</button> |
<button on:click={set_language_la} class="lang_button">LA</button>
{:else if language == "LA"}
<button on:click={set_language_en} class="lang_button">EN</button> |
<button on:click={set_language_ru} class="lang_button">RU</button> |
<button on:click={set_language_lt} class="lang_button">LT</button> |
<button on:click={set_language_la} class="lang_button selected">LA</button>
{:else}
<button on:click={set_language_en} class="lang_button">EN</button> |
<button on:click={set_language_ru} class="lang_button">RU</button> |
<button on:click={set_language_lt} class="lang_button selected">LT</button> |
<button on:click={set_language_la} class="lang_button">LA</button>
{/if}
</div>



<!-- <Header /> -->

<main>
	<slot />
	<Map />
	<div class="legend_section">
	{#if language == "RU"}
		<ul class="legend_ul">
			<li class="legend"><img src={icon_2} class="legend_icon" >Домик слуг</li>
			<li class="legend"><img src={icon_8} class="legend_icon">Колодец</li>
			<li class="legend"><img src={icon_3} class="legend_icon">Конюшни</li>
			<li class="legend"><img src={icon_5} class="legend_icon">Кухня</li>
			<li class="legend"><img src={icon_9} class="legend_icon">Оранжерея</li>
			<li class="legend"><img src={icon_1} class="legend_icon">Крест</li>
		</ul>
		<ul class="legend_ul">
			<li class="legend"><img src={icon_0} class="legend_icon">Музей</li>
			<li class="legend"><img src={icon_7} class="legend_icon">Пекарня</li>
			<li class="legend"><img src={icon_6} class="legend_icon">Курятник</li>
			<li class="legend"><img src={icon_12} class="legend_icon">Крокет</li>
			<li class="legend"><img src={icon_10} class="legend_icon">Церковь</li>
			<li class="legend"><img src={icon_11} class="legend_icon">Собачки</li>
			<li class="legend"><img src={icon_4} class="legend_icon">Пруды</li>
		</ul>

	{:else} <!-- LT-->
		<ul class="legend_ul">
			<li class="legend"><img src={icon_2} class="legend_icon" >Tarnų&nbsp;namelis</li>
			<li class="legend"><img src={icon_8} class="legend_icon">Šulinys</li>
			<li class="legend"><img src={icon_3} class="legend_icon">Arklides</li>
			<li class="legend"><img src={icon_5} class="legend_icon">Virtuvė</li>
			<li class="legend"><img src={icon_9} class="legend_icon">Oranžerija</li>
			<li class="legend"><img src={icon_1} class="legend_icon">Kryžius</li>
		</ul>
		<ul class="legend_ul">
			<li class="legend"><img src={icon_0} class="legend_icon">Muziejus</li>
			<li class="legend"><img src={icon_7} class="legend_icon">Duonkepė</li>
			<li class="legend"><img src={icon_6} class="legend_icon">Vištidė&nbsp;ir&nbsp;ledainė</li>
			<li class="legend"><img src={icon_12} class="legend_icon">Kroketo&nbsp;aikštelė</li>
			<li class="legend"><img src={icon_10} class="legend_icon">Cerkvė</li>
			<li class="legend"><img src={icon_11} class="legend_icon">Šuniukai</li>
			<li class="legend"><img src={icon_4} class="legend_icon">Tvenkiniai</li>
		</ul>
	{/if}
	</div>
</main>



<footer>
	<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	<p>// Demonstracinė versija. Vyksta darbai.</p>
	<p>Užsakyti edukacija “Markučių Lobis”: <a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a></p>
	<p> </p>
</footer>
</div> <!-- / app -->

 





<style>

/* Language switcher */

.lang_switch {
	/* width: 100vw; */
	/* text-align: center; */
	text-align: right;
	/* margin: 5px 25vw 40px 0; */
	width: 100%;
	max-width: 800px;
	margin: 10px auto;
	box-sizing: border-box;
	padding-right: 20px;
	color: #222;
	user-select: none;
	}

.lang_button {
	box-sizing: border-box;
	text-decoration: none;
	font-size: 18px;
	font-weight: 600;
	letter-spacing: 2px;
	border: none;
 	background-color: rgba(255, 255, 255, 0);
	width: 60px;
	height: 30px;
	margin: 5px;
	border-radius: 2px;
	/* border: 0px; */
	color: #EEDC83;
	border: 0.67px solid #EEDC83;
	cursor: pointer;
	user-select: none;
	}


.lang_button:hover {
	background-color:#EEDC83;
	color: #D33F37;
	border: 0.67px solid black;
	}


.lang_button:active {
	background-color:#EEDC83;
	}

.lang_button.selected {
	pointer-events: none;
	color: #222;
	/* background-color: white; */
	background-color: rgba(0, 0, 0, 0.1);
	border:none;
	user-select: none;
	}


/* Legend */

.legend_section {
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
	padding: 40px 0 20px 0;
	/* margin: 0; */
	margin: 20px 0 20px 0;
	width: 400px;
	vertical-align: middle;
	}

.legend_icon {
	position: relative;
	/* top: 40px; */
	left: 4px;
	width: 120px;
	/* padding-bottom: 20; */
	/* padding-bottom: 20px; */
	margin: -100px -10px -40px -10px;
	}

.current_location {
	/* background-color: #D33F37; */
	border: dashed 2px white;
	}

.visited {
	background-color: #D33F37;
	}


/* Wrapper styles */
.app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	font-family: "Lora";
}

main {
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

<script>
import { browser } from "$app/environment";
import { fade, blur, fly, slide, scale } from "svelte/transition";
import { flip } from 'svelte/animate';
import './styles.css';

import favicon from '$lib/assets/favicon.svg'

let { children } = $props();

import Language_switcher from "$components/language_switcher.svelte";
import Game_manager from "$components/game_manager.svelte"

import Map from '$components/The_map.svelte';
import Mounted from '$components/Mounted.svelte';


// let scroll = Number(0)

var emerge = false




if (browser) {
	emerge = true
}




function empty_storage() {
	localStorage.clear();
	window.location.reload();
}


let m = { x: 0, y: 0 };
function handleMousemove(event) {
	m.x = event.clientX;
	m.y = event.clientY;
}


</script>





<svelte:head>
  <link rel="icon" type="image/svg" href={favicon} />
</svelte:head>



<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"> -->

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Manrope:wght@200..800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">


<!-- <svelte:window bind:scrollY={scroll} /> -->
<div on:mousemove={handleMousemove} />



<Game_manager />

<Mounted>
<div class="app">
<main in:fade="{{ duration: 500}}" out:fade >


<Language_switcher />



{@render children?.()}
<div class="ornament" ></div>



<Map />


</main>


<footer>
	<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	<!-- <p>// Demonstracinė versija. Vyksta darbai.</p> -->
	<p>Užsakyti edukacija “Markučių Lobis”: <a href="mailto:eedukacija.vokieciu6@vilniausmuziejus.lt">edukacija.vokieciu6@vilniausmuziejus.lt</a></p>
	<p></p>
</footer>
</div> <!-- / app -->

</Mounted>












<style>

a:hover {
	color: var(--color-sepia);
}


/* Appearance effects */
/* on load, a variable is flipped and the second style is added */
.appear {
	opacity: 0;
	transform: translate(0, 10px);
	transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}

.appear_visible {
	opacity: 1;
	transform: translate(0,0);
}


/* Language switcher */
.visited_counter {
	color: #EEDC83;
	font-style: italic;
	font-weight: 400;
}





/* Wrapper styles */
.app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	font-family: "Lora";

	/* When scroll-pulling down there's an unfortunate crop. */
	/* Without this the pieces create insane width */
	contain: paint;
	/* overflow: hidden; */
}

main {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
	padding-top: 120px;
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	box-sizing: border-box;
	/* 	border: red 2px solid; */
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
	/* font-family: "Lora"; */
	color: wheat;
	/* color: var(--color-sepia); */
	text-transform: uppercase;
	letter-spacing: 1.5px;
	margin: 10px 0 80px 0;
}

footer a {
	font-weight: bold;
}

@media (min-width: 480px) {
	footer {
		padding: 0px 0;
	}
	}


@media (min-width: 950px){

	/* .lang_switch > * {
		writing-mode: horizontal-tb;
	} */

}

@media (min-width: 1400px) {

	}




</style>
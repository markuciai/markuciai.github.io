<script>
import { onMount } from 'svelte';
import { browser } from "$app/environment";
import { fade, blur, fly, slide, scale } from "svelte/transition";
import { flip } from 'svelte/animate';
import './styles.css';
// import { writable } from "svelte/store";
import language from './stores/language.js'
import visited from './stores/visited';

import Offer from './lobis/Offer.svelte';

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


import Map from './The_map.svelte';
import Mounted from './Mounted.svelte';

let scroll = Number(0)

var emerge = false

// dictionary lines test
const lines = {
	"EN": ["Ze<br>ro", "First", "Double", "three"],
	"RU": ["ноль", "один", "два", "три"],
	"LT": ["Zero", "First", "Double", "Trys"],
	"LA": ["Zero", "First", "Double", "Trys"],
};

// {lines[$language][0]}





if (browser) {
	if(localStorage.getItem("visited") === null) {
		localStorage.setItem("visited", $visited);
		// window.location.reload();
	}

	if(localStorage.getItem("language") === null) {
		$language = localStorage.language
	}
	
	$visited = Number(localStorage.visited);
	$language = localStorage.language
	
	console.log("Starting up. Language: ", $language, " || biggest visited:", $visited);
	
	// appear()
	emerge = true



	console.log("preferred languages:", navigator.languages)

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























<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"> -->

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">

<svelte:window bind:scrollY={scroll} />
<div on:mousemove={handleMousemove} />






<Mounted>
<div class="app">


<!-- <p in:fly="{{ y: 200, duration: 20000 }}" out:fade   >ANIMATE ME</p>






<p in:fly="{{ y: 200, duration: 2000 }}" out:fade >ANIMATE ME TOO</p>
<p in:fly="{{ y: 10, duration: 200 }}" out:fade >ANIMATE ME THREE</p> -->



<div class="lang_switch" in:fade out:fade >
<!-- <button on:click={empty_storage} class="lang_button">↻</button> | -->

{#if $visited > -1}
<span class="visited_counter">{$visited} / 12</span>&nbsp;<!-- for debug only..? -->  
{/if}


<!--thin space: &#8239 -->

<button on:click={() => $language = "EN"}
	class="lang_button" class:selected={$language == "EN"}>EN</button> |
<button on:click={() => $language = "RU"}
	class="lang_button" class:selected={$language == "RU"}>RU</button> |
<button on:click={() => $language = "LT"}
	class="lang_button" class:selected={$language == "LT"}>LT</button>
<!-- <button on:click={() => $language = "LA"}
	class="lang_button" class:selected={$language == "LA"}>LA</button> -->

</div>



<!-- <Header /> -->

<main in:fade="{{ duration: 500}}" out:fade >


<!-- {#if $visited < 0 } <Offer /> {/if} -->
<!-- {lines[$language][0]} -->


<slot />
<div class="map_and_stuff">
<Map />
<div class="legend_section">

{#if $language == "RU"}
<ul class="legend_ul">
	<li class="legend"><img src={icon_2} class="legend_icon">Домик слуг</li>
	<li class="legend"><img src={icon_8} class="legend_icon">Колодец</li>
	<li class="legend"><img src={icon_3} class="legend_icon">Конюшни</li>
	<li class="legend"><img src={icon_5} class="legend_icon">Кухня</li>
	<li class="legend"><img src={icon_9} class="legend_icon">Оранжерея</li>
	<li class="legend"><img src={icon_1} class="legend_icon">Крест</li>
</ul>
<ul class="legend_ul">
	<li class="legend"><img src={icon_0} class="legend_icon">Музей</li>
	<li class="legend"><img src={icon_7} class="legend_icon">Пекарня</li>
	<li class="legend"><img src={icon_6} class="legend_icon">Птичник</li>
	<li class="legend"><img src={icon_12} class="legend_icon">Крокет</li>
	<li class="legend"><img src={icon_10} class="legend_icon">Церковь</li>
	<li class="legend"><img src={icon_11} class="legend_icon">Собачки</li>
	<li class="legend"><img src={icon_4} class="legend_icon">Пруды</li>
</ul>

{:else if $language == "EN"}
<ul class="legend_ul">
	<li class="legend"><img src={icon_2} class="legend_icon">Servants'&nbsp;quarters</li>
	<li class="legend"><img src={icon_8} class="legend_icon">Water well</li>
	<li class="legend"><img src={icon_3} class="legend_icon">Stables</li>
	<li class="legend"><img src={icon_5} class="legend_icon">Kitchen</li>
	<li class="legend"><img src={icon_9} class="legend_icon">Orangery</li>
	<li class="legend"><img src={icon_1} class="legend_icon">Cross</li>
</ul>
<ul class="legend_ul">
	<li class="legend"><img src={icon_0} class="legend_icon">Museum</li>
	<li class="legend"><img src={icon_7} class="legend_icon">Bakery</li>
	<li class="legend"><img src={icon_6} class="legend_icon">Chicken coop</li>
	<li class="legend"><img src={icon_12} class="legend_icon">Croquet court</li>
	<li class="legend"><img src={icon_10} class="legend_icon">Chapel</li>
	<li class="legend"><img src={icon_11} class="legend_icon">Doggies</li>
	<li class="legend"><img src={icon_4} class="legend_icon">Pond</li>
</ul>

{:else if $language == "LA"}
<ul class="legend_ul">
	<li class="legend"><img src={icon_2} class="legend_icon">Servorum plagae</li>
	<li class="legend"><img src={icon_8} class="legend_icon">Aqua bene</li>
	<li class="legend"><img src={icon_3} class="legend_icon">Stabula</li>
	<li class="legend"><img src={icon_5} class="legend_icon">Culina</li>
	<li class="legend"><img src={icon_9} class="legend_icon">Pomarium</li>
	<li class="legend"><img src={icon_1} class="legend_icon">Crucius</li>
</ul>
<ul class="legend_ul">
	<li class="legend"><img src={icon_0} class="legend_icon">Manerium</li>
	<li class="legend"><img src={icon_7} class="legend_icon">Pistrinum</li>
	<li class="legend"><img src={icon_6} class="legend_icon">Pullus domus</li>
	<li class="legend"><img src={icon_12} class="legend_icon">Croquet atrium</li>
	<li class="legend"><img src={icon_10} class="legend_icon">Capella</li>
	<li class="legend"><img src={icon_11} class="legend_icon">Canes</li>
	<li class="legend"><img src={icon_4} class="legend_icon">Piscine</li>
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
</div> <!-- map stuff-->
</main>






<footer>
	<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	<!-- <p>// Demonstracinė versija. Vyksta darbai.</p> -->
	<p>Užsakyti edukacija “Markučių Lobis”: <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a></p>
	<p> </p>
</footer>
</div> <!-- / app -->

</Mounted>























<style>


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


.lang_switch {
	/* width: 100vw; */
	/* text-align: center; */
	/* text-align: right; */
	/* margin: 5px 25vw 40px 0; */
	/* position:absolute; */
	/* right: ; */
	align-items: center;
	align-self: center;
	text-align: right;
	width: 100%;
	max-width: 800px;
	margin: 10px auto;
	box-sizing: border-box;
	padding-right: 20px;
	color: #222;
	user-select: none;
	z-index: 2;
	}

.lang_button {
	appearance: none;
	box-sizing: border-box;
	text-decoration: none;
	text-align: center;
	font-size: 14px;
	line-height: 20px;
	font-weight: 600;
	/* letter-spacing: 2px; */
	border: none;
 	background-color: rgba(255, 255, 255, 0);
	width: 40px;
	height: 26px;
	margin: 5px;
	/* padding-bottom: 10px; */
	border-radius: 3px;
	/* border: 0px; */
	color: #EEDC83;
	border: 0.67px solid rgb(238, 220, 131, 0.8);
	cursor: pointer;
	user-select: none;
	pointer-events: all;

	transition: 0.3s;
	}

.lang_button::first-letter {
	letter-spacing: 2px;
}

.lang_button:hover {
	background-color:#EEDC83;
	color: #D33F37;
	/* border: 0.67px  solid #a29349; */
	/* border-top-color: white;
  	border-left-color: white;
  	border-right-color: white;
 	 border-bottom-color: white; */
	border: 0.67px solid rgb(238, 220, 131, 1);
	transition: 0.05s;
	transform: scale(1.1);
	box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
	}


.lang_button:active {
	background-color:#EEDC83;
	border: 0.67px solid rgb(238, 220, 131, 0);
	transform: scale(0.95);
	box-shadow: 0px 3px 5px -10px rgba(0, 0, 0, 0);
	}

	/* away */
.lang_button:active:not(:hover) {
	transform: scale(1);
	color: #EEDC83;
	border: 0.67px solid rgb(238, 220, 131, 1);
	background-color:rgba(238, 220, 131, 0.2);
	}
/* .lang_button.selected:hover {
	
} */

.lang_button.selected, .lang_button.selected:hover {
	transform: scale(1);
	/* pointer-events: none; */
	cursor: default;
	color: #006837;
	color: #EEDC83;
	/* background-color: white; */
	/* background-color: #EEDC83; */
	/* background-color: rgba(0,0,0, 0.6); */
	/* background-color: #222; */
	background-color: #D33F37;
	border: 0.67px solid rgb(238, 220, 131, 0.1);
	/* border:none; */
	user-select: none;
	transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}



/* Legend */

.legend_section {
	/* display: grid; */
	display: flex;
	flex-wrap: wrap;
	/* text-align: center; */
	/* width: clamp(200px, 100vw, 760px); */
	/* flex-basis: 400px; */
	flex-grow: 0;
	margin-bottom: 40px;
	}

.legend_ul {
	/* border: solid blue 2px; */
	/* flex: initial; */
	flex: 1 0 0;
	list-style-type: none;
	display: block;
	padding: 0;
	margin: 0;
	color: white;
	color: #EEDC83;
	/* width: clamp(200px, 100vw, 760px); */
	/* width: 400px; */
	margin-bottom: -40px;
	}

.legend {
	/* border: solid #D33F37 2px; */
	display: block;
	box-sizing: border-box;
	/* border: #D33F37 1px solid; */
	/* height: 120px; */
	/* padding: 20px; */
	font-size: 28px;
	border-radius: 8px;
	/* vertical-align: middle; */
	padding: 20px 0 20px 0;
	/* margin: 0; */
	margin: 40px 0 40px 0;
	width: 370px;
	vertical-align: middle;
	/* transform: translate(0px, 2px); */
	line-height: 20px;
	letter-spacing: 1px;
	font-style: italic;
	font-weight: 500;
	}

.legend_icon {
	position: relative;
	/* top: 40px; */
	left: 4px;
	width: 120px;
	/* padding-bottom: 20; */
	/* padding-bottom: 20px; */
	margin: -100px 0px -45px -10px;
	}

.current_location {
	/* background-color: #D33F37; */
	border: dashed 2px white;
	/* padding: 18px -2px 18px -2px; */
	/* background-color: #D33F37; */
	color: white;
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
	font-family: "Lora";
	color: wheat;
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
	.lang_switch {
		position: absolute;
		right: 2vw;


		/* funny vertical thing */
		/* writing-mode: vertical-lr;
		right: calc(50vw - 1190px);
		top: 120px; */

	}
	/* .lang_switch > * {
		writing-mode: horizontal-tb;
	} */

}

@media (min-width: 1400px) {
	.map_and_stuff {
		/* position: absolute; */
		left: 0;
		width: 100vw;
		display: flex;
		flex: 1;
		margin: 40px 0 0 -30vw;
	}

	.legend_section {
		margin: calc(40px + 5vw) 0 0 40px;
		min-width: 760px;
	}
	}




</style>

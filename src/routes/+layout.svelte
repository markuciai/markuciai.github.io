<script>
import { browser } from "$app/environment";
import { fade, blur, fly, slide, scale } from "svelte/transition";
import { flip } from 'svelte/animate';
import './styles.css';


let { children } = $props();

import Language_switcher from "$components/language_switcher.svelte";
import Game_manager from "$components/game_manager.svelte"

import Map from '$components/The_map.svelte';
import Mounted from '$components/Mounted.svelte';

// import Offer from './lobis/Offer.svelte';

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



let legend_text = {
	"EN" : [
		"Museum", "Cross", "Servants quarters", "Stables", "Pond", "Kitchen",
		"Chicken coop", "Bakery", "Water well", "Orangery", "Chapel", "Doggies", "Croquet"
		],
	"RU" : [
		"Музей", "Крест", "Домик слуг", "Конюшни", "Пруды", "Кухня",
		"Птичник", "Пекарня", "Колодец", "Оранжерея", "Церковь", "Собачки", "Крокет",
		],
	"LT" : [
		"Muziejus", "Kryžius", "Tarnų namelis", "Arklides", "Tvenkiniai", "Virtuvė",
		"Vištidė", "Duonkepė", "Šulinys", "Oranžerija", "Cerkvė", "Šuniukai", "Kroketas",
		],
	"LA" : [
		"Manerium", "Crucius", "Servorum plagae", "Stabula", "Piscine", "Culina",
		"Pullus domus", "Pistrinum", "Aqua bene", "Pomarium", "Capella", "Canes", "Croquet atrium",
		],
};


let order_of_items = [2, 8, 3, 5, 9, 1, 0, 7, 6, 12, 10, 11, 4]
let icon_array = [icon_0, icon_1, icon_2, icon_3, icon_4, icon_5, icon_6, icon_7, icon_8, icon_9, icon_10, icon_11, icon_12]



function shuffle_order_of_items(order_of_items) {
  	order_of_items.sort(function (a, b) {
    	return Math.random() - 0.5;
  	});
}




let scroll = Number(0)

var emerge = false




if (browser) {
	shuffle_order_of_items(order_of_items)

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










<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"> -->

<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Manrope:wght@200..800&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">


<svelte:window bind:scrollY={scroll} />
<div on:mousemove={handleMousemove} />





<!-- {@render children()} -->




<Game_manager />

<Mounted>
<div class="app">
<main in:fade="{{ duration: 500}}" out:fade >


<Language_switcher />



{@render children?.()}
<div class="ornament" ></div>


<div class="map_and_stuff">
<Map />


<div class="legend_section">
<ul class="legend_ul">


{#each {length: 13 }, index}
	<li class="legend_li" class:current={globe.location == order_of_items[index]}>
		<img src={icon_array[order_of_items[index]] } class="legend_icon" class:current={globe.location == order_of_items[index]}>
		 {legend_text[globe.language][order_of_items[index]]}
	</li>
{/each}

</ul>
</div>

</div> <!-- map stuff-->

</main>


<footer>
	<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	<!-- <p>// Demonstracinė versija. Vyksta darbai.</p> -->
	<p>Užsakyti edukacija “Markučių Lobis”: <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a></p>
	<p></p>
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



/* Legend */

.legend_section {
	/* border: 1px red solid; */
	/* display: grid; */


	display: flex;
	flex-wrap: wrap;

	/* text-align: center; */
	/* width: clamp(200px, 100vw, 760px); */
	/* flex-basis: 400px; */
	/* flex-grow: 0; */
	margin-bottom: 40px;
	margin-top: 80px;

	justify-content: center;
	}


/* tried doing multiple things... there's some trash here */
.legend_ul {
	/* background-color: purple; */
	/* border: solid blue 2px; */
	/* flex: initial; */

	flex: 1 0 0;
	width: 100%;
	max-width: 800px;
	flex-grow: 1;
	align-items: flex-end;
	justify-content: center;
	/* align-self: flex-end; */



	list-style-type: none;
	/* display: block; */
	padding: 0;
	margin: 0;

	display: flex;
	flex-flow: row wrap;
	/* max-width: 100vw; */

	color: white;
	color: #EEDC83;
	color:  var(--color-mdm-sepia);
	/* width: clamp(200px, 100vw, 760px); */
	/* width: 400px; */
	margin-bottom: -40px;

	overflow-wrap: none;
	word-wrap: none;
	white-space: nowrap;
	/* text-overflow: ; */
	}


.legend_li {
	/* border: solid #D33F37 2px; */
	display: block;
	box-sizing: border-box;
	/* background-color: teal; */
	/* border: #D33F37 1px solid; */
	/* height: 120px; */
	/* padding: 20px; */



	font-size: 28px;
	border-radius: 8px;
	/* vertical-align: middle; */
	padding: 30px 0 30px ;
	/* margin: 0; */
	margin: 20px 0 20px 0;
	width: 370px;
	vertical-align: middle;
	/* transform: translate(0px, 2px); */
	line-height: 20px;
	letter-spacing: 1px;

	/* font-family: var(--font-manrope); */
	/* font-weight: 600; */

	font-style: italic;
	font-weight: 500;

	overflow-wrap: none;
	word-wrap: none;
	white-space: nowrap;
	}

.legend_li.current {
	color: var(--color-sepia);
}

.legend_icon.current {
	filter: brightness(1.4) contrast(1.25) saturate(0.5);
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
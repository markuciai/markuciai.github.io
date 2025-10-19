<script>
import { browser } from "$app/environment";


onMount(() => {
	console.log('game_manager component mounted');
	// console.log("preferred languages:", navigator.languages)
});



if (browser) {
	if(localStorage.getItem("progress") !== null) {
		globe.progress = Number(localStorage.progress);
	}
}

$effect(() => {
	localStorage.progress = Number(globe.progress)
})



// var a_number = 0

// function print_a_thing() {
// 	a_number += 1
// 	console.log("hello", a_number)
// }


// var randf = Math.random()

</script>



<div class="enrult">
	<button onclick={() => globe.progress = -1} class="lang_button" class:selected={globe.progress == -1}>-1</button>
	<button onclick={() => globe.progress -=1} class="lang_button" >-</button>
	<button class="lang_button selected"> {globe.progress}</button>
	<button onclick={() => globe.progress +=1} class="lang_button" >+</button>
	<!-- <button onclick={() => globe.progress = 3} class="lang_button" class:selected={globe.progress == 3}>three</button> -->
</div>



<!-- <button class="button inline_button" onclick={print_a_thing}>Clicky: {a_number}</button> -->


<style >
* {
/* 	transition: opacity calc( var(--randf)) ease-out 0.1s; */
	transition: opacity 1s ease-out 0.1s;
	opacity: 1;
	@starting-style {
		opacity: 0;
	}
}

.button, .button:hover, .button.active {
	height: 40px;
	width: 160px;
	margin: 10px 0px 10px 0px;
}



.enrult {
	position: absolute;

  left: calc(12vw - 37.5px + 15.625px - 34px + 20px);
  /* right: calc(12vw - 37.5px + 15.625px - 5vw + 15.625px - 5vw ); */
	top: calc(8.5vw - 10px);
	top: 5px;

	/* font-size: calc(0.3vw + 6pt); */

	font-size: 15px;
	line-height: 20px;
	font-weight: 600;
	font-family: var(--font-manrope);
/* 	letter-spacing: 1px; */



  transition: opacity 0.3s ease-out 0.1s;
  opacity: 1;
	@starting-style {
		opacity: 0;
	}
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
/* 	display: block; */ /* makes them vertical, maybe useful on mobile */
	appearance: none;
	box-sizing: border-box;
	text-decoration: none;
	text-align: center;
	font-size: 15px;
	line-height: 20px;
	font-weight: 600;



/* 	border: none; */
	border: 0.67px solid rgb(255, 200, 0, 0);
 	background-color: rgba(255, 255, 255, 0);
	width: 32px;
	height: 28px;
	margin: 0px;
	/* padding-bottom: 10px; */
	border-radius: 3px;
	/* border: 0px; */
	color: var(--color-sepia);
	text-shadow: 0px 1px 0.5px rgba(255,255,200, 0);
/* 	border: 0.67px solid rgb(238, 220, 131, 0.8); */
	cursor: pointer;
	user-select: none;
	pointer-events: all;

	transition: 0.2s;
	letter-spacing: -1px;
	}

.lang_button::first-letter {
	letter-spacing: 1.5px;
}

.lang_button:hover {
	background-color: var(--color-sepia);
	/* background-color: rgba(255, 140, 0, 1); */
	/* background-color: rgba(255, 180, 0, 1); /* Brighter  */ */
	color: #333;
	color: #000;
	text-shadow: 0px 0.75px 0.75px rgba(255,255,200, 0.5);
	/* border: 0.67px  solid #a29349; */
	/* border-top-color: white;
  	border-left-color: white;
  	border-right-color: white;
 	 border-bottom-color: white; */
	border: 0.67px solid rgb(238, 220, 131, 1);
	border: 0.67px solid rgb(255, 255, 255, 0.33);
	border-top-color: rgb(255, 255, 255, 0.8);
/*   	border-left-color: white;
  	border-right-color: white; */
	border-bottom-color: rgb(0, 0, 0, 0.2);
	transition: 
		0.66s var(--ease_out_expo),
		background-color 0.33s var(--ease_out_expo),
		text-shadow 0.33s var(--ease_out_expo),
		color 0.1s var(--ease_out_expo)
		;


	transform: scale(1.1);
/* 	box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.7); */

/* 	box-shadow:  0px 10px 20px -5px rgba(255, 180, 0, 0.15), 0px 15px 20px -10px rgba(0, 0, 0, 0.7) ; */
	box-shadow:  0px 3px 20px -5px rgba(255, 180, 0, 0.5), 0px 15px 20px -10px rgba(0, 0, 0, 1.7), inset 0px 0px 10px -2px rgba(255, 255, 255, 0.3);
	}


.lang_button:active {
	background-color:var(--color-theme-1);
	background-color: rgba(255, 69, 0, 1);
	border: 0.67px solid rgb(238, 220, 131, 0.25);
	transform: scale(0.95);
	box-shadow: 0px 3px 5px -10px rgba(0, 0, 0, 0);
	}

	/* away */
.lang_button:active:not(:hover) {
	transform: scale(1);
	color: rgba(255, 120, 0, 1);
	border: 0.67px solid rgb(255, 100, 0, 0.5);
/* 	background-color:rgba(238, 220, 131, 0.1); */
	background-color: rgba(191, 127, 31, 0) ;
	transition: 0.33s var(--ease_out_expo);
	}


.lang_button.selected, .lang_button.selected:hover {
	transform: scale(1);
	/* pointer-events: none; */
	cursor: default;
	/* color: #006837; */
	color: rgba(0,0,0, 0.8);
	text-shadow: 0px 0.75px 0.5px rgba(255,255,200, 0);
	/* background-color: white; */
	/* background-color: #EEDC83; */
	/* background-color: rgba(0,0,0, 0.6); */
	/* background-color: #272727; */

/* 	 for #333 bg*/
/* 	background-color: #222; */
	border: 0.67px solid rgb(0, 0, 0, 0);

/* for black bg */

/* 	border: 0.67px solid rgb(255, 255, 255, 0.2); */

	/* border:none; */
	user-select: none;
	pointer-events: none;
/* 	transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1); */
	transition: 
		0.66s var(--ease_out_expo),
		background-color 0.33s var(--ease_out_expo),
		text-shadow 0.33s var(--ease_out_expo),
		color 0.1s var(--ease_out_expo)
		;

	box-shadow: 0px 3px 5px -10px rgba(0, 0, 0, 0);
	}


.lang_button.selected:hover {
	color: rgba(127, 110, 80, 1);
	background-color: rgba(191, 127, 31, 0);

}




</style>
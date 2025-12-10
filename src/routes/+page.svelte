<script>
// import { browser } from "$app/environment";


import dvaras from '$lib/images/archival/mdvaras.jpg';
import map_foundation from '$lib/images/map/foundation.png';
import { fade, blur, fly, slide, scale } from "svelte/transition";

import Game_manager from "$components/game_manager.svelte"

let bazinga = $state("")

const station_id = 0

onMount(async () => { 
	globe.location = station_id
});


$effect(() => {
	if(globe.laisve) {
		bazinga = "Laisvė"
	}

	// if(
	// bazinga == "Вольность"
	// || bazinga == "вольность"
	// || bazinga == "Volnost"
	// || bazinga == "volnost"
	// || bazinga == "laisvė"
	// || bazinga == "Laisvė"
	// || bazinga == "laisve"
	// || bazinga == "Laisve") {
	// 	globe.laisve = true
	// }

})

// onMount(() => {
// if (browser) {
// 	if(globe.laisve) {
// 		bazinga = "laisve"
// 	}
// }}


function empty_storage() {
	localStorage.clear();
	window.location.reload();
}


</script>

<svelte:head>
	<title>MDM</title>
	<meta name="description" content="Markučių dvaro muziejus" />
</svelte:head>



<section>
<h1>
LOBIS
<!-- {#if globe.language == "EN"}		Markučiai manor museum
{:else if globe.language == "RU"}	Музей-усадьба Маркучай
{:else if globe.language == "LA"}	Museum manerium Markucis
{:else}								Markučių dvaro&nbsp;muziejus
{/if} -->
</h1>

<p in:fly="{{ y: -30, duration: 1000, delay: 60000 }}" out:fade style="font-style: italic; padding: 10px;">«Ты ужас мира, стыд природы»</p>

<input
	bind:value={bazinga} 
	class="laisve_input" 
	class:laisvė_success={globe.laisve}
	name="password" 
	placeholder="Slaptažodis"

	>

{#if globe.laisve
	|| bazinga == "Вольность"
	|| bazinga == "вольность"
	|| bazinga == "Volnost"
	|| bazinga == "volnost"
	|| bazinga == "laisvė"
	|| bazinga == "Laisvė"
	|| bazinga == "laisve"
	|| bazinga == "Laisve"
}
<br />
<!-- <button on:click={empty_storage} class="button">↻ Perkrauti žaidimą</button> -->

<!-- <Game_manager /> -->


{#if globe.laisve}
<button on:click={ () => globe.laisve = false } class="button">Nebesukčiauti</button>
{:else}
<button on:click={ () => globe.laisve = true } class="button">Sukčiauti visur</button>
{/if}


<button on:click={empty_storage} class="button">↻ Perkrauti žaidimą</button>


<br>&nbsp;
<p><a href="https://www.markuciudvaras.lt/lobis">Lobis</a> → <a href="/lobis">Lobis:</a></p>
<ol start="0">
	<li><a href="https://www.markuciudvaras.lt/lobis/start_1865">Startas</a>→ <a href="/lobis/start_1865">Startas</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/kryzius_1880">Kryžius</a> → <a href="/lobis/kryzius_1880">Kryžius</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/namelis_1855">Namelis</a> → <a href="/lobis/namelis_1855">Namelis</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/arklides_1935">Arklides</a> → <a href="/lobis/arklides_1935">Arklides</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/tvenkiniai_1917">Tvenkiniai</a> → <a href="/lobis/tvenkiniai_1917">Tvenkiniai</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/virtuve_1899">Virtuvė</a> → <a href="/lobis/virtuve_1899">Virtuvė</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/vistide_1877">Vištidė</a> → <a href="/lobis/vistide_1877">Vištidė</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/duonkepe_1868">Duonkepė</a> → <a href="/lobis/duonkepe_1868">Duonkepė</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/sulinys_1867">Šulinys</a> → <a href="/lobis/sulinys_1867">Šulinys</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/oranzerija_1875">Oranžerija</a> → <a href="/lobis/oranzerija_1875">Oranžerija</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/cerkve_1903">Cerkvė</a> → <a href="/lobis/cerkve_1903">Cerkvė</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/suniukai-1883">Šuniukai</a> → <a href="/lobis/suniukai-1883">Šuniukai</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/kroketas_1867">Kroketas</a> → <a href="/lobis/kroketas_1867">Kroketas</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/finish_1935">Finišas</a> → <a href="/lobis/finish_1935">Finišas</a></li>
</ol>
{/if}



<br>&nbsp;<br>&nbsp;
<img width=98% src={dvaras}>


</section>




<!-- <br/>&nbsp; -->
<!-- <img width=105% src={map_foundation}> -->






<style>



.laisve_input {
	width: 300px;
	height: 40px;
	padding: 10px;
	border-radius: 3px;
	border: solid 0px var(--color-bg-1);
	font-size: 21px;
	background: var(--color-sepia);
	color: var(--color-vm-orange);
	cursor: text;
	letter-spacing: 1px;
	font-style: italic;
	margin: 5px;
}

.laisvė_success {
	background: #54715f33;
	color: #54715f;
}

</style>

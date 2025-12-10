<script>
// Very animated hat for the game

import { browser } from "$app/environment"
// 
// import { fade, blur, fly, slide, scale } from "svelte/transition";



// For this to work well, i need to learn how to pass images and props into this element.
// Loading ALL hat images on every page is suicide


let scroll = $state(Number(0))




</script>


<svelte:window bind:scrollY={scroll} />

{#if globe.progress == 12}
<!-- or do a progress bar -->
<button class="button apversti"  onclick={() => flipped = !flipped}>
{#if globe.language == "EN"}
Turn over
{:else if globe.language == "RU"}
Перевернуть
{:else}
Apversti
{/if}
</button>
{:else}


</div>
{/if}


<div class="square qr"></div>
<div class="square fail"></div>
<div class="square the_id">{station_id}</div>
<div class="piece"></div>
<!-- Or borrow from map? so map piece if matches loc takes special instructions, flies down visibly -->
<div class="context_map"></div>

<div class="sign"></div>
<div class="graphic_elements"></div>
<div class="stripe"></div>
<div class="hillmap"></div>





<style>


/* On startup, we show qr on white background (or with sign line visible) */
/* qr pulls back, creating tensions */
/* Then depends on state:
    too early
    too late
    current
    special (Lobis header, Start, Finish)
Ideally, we have a single-shot "award piece" animation that happens when progress +=1 and won't repeat on reload
*/


/* Animation after startup: */
/* Something should be spinning. Some new item near the square. */
/* infinite scrolling stripe? */
/* Something should be floating. Square */
/* Something should be scroll-dependent. Map piece! */


</style>





<script>
// Very animated hat for the game

// import { browser } from "$app/environment"
// 
// import { fade, blur, fly, slide, scale } from "svelte/transition";



// For this to work well, i need to learn how to pass images and props into this element.
// Loading ALL hat images on every page is suicide


let scroll = $state(Number(0))


let station_id = 7

</script>


<svelte:window bind:scrollY={scroll} />

<!-- {#if globe.progress == 12}
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

{/if} -->


<div class="square qr"></div>


<!-- {#if (globe.progress >= globe.location)} -->
{#if (globe.progress >= station_id)}
<div class="square the_id emerging">{station_id}</div>
{:else}
<div class="square fail emerging">??</div>
{/if}
<div class="piece"></div>
<!-- Or borrow from map? so map piece if matches loc takes special instructions, flies down visibly -->
<div class="context_map"></div>

<div class="sign"></div>
<div class="graphic_elements"></div>
<div class="stripe"></div>
<div class="hillmap"></div>


<div class="spacer"></div>



<style>
/* Alternatively: just have one SVG and animate it, change id text dynamically */

.spacer {
    /* width: 92vw; */
    width: 100%;
    height: 92vw; /* ~square */
    height: 61vw; /*2/3*/
    /* background: red; */

}

.square {
    position: absolute;
    top: 10cqw;
    left: 20%;
    width: 160px;
    height: 160px;
    padding: 62px 10px 0px 10px;

    
    border-radius: 16.66%;
    corner-shape: squircle;
    text-align: center;
    font-family: var(--font-manrope);
    font-weight: 800;
    font-size: 80px;
    color: var(--color-sepia);
}

.square.fail {
    box-shadow: 0px 0px 0px 5px inset #FFCCCC33;
    background: brown;
}

.square.the_id {
    /* box-shadow: 0px 0px 0px 5px inset #FFFFBB33; */
    background: var(--color-vm-orange);
}


.square.qr {
    background: white;
    box-shadow: 0px 0px 0px 10px inset black;
}

.emerging {
    transition:
        all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.3s,
        transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s
        ;
    @starting-style {
        opacity: 0;
        scale: 0.1;
    }
}



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





<script>
import { browser } from "$app/environment";
// 
   
// import location from './stores/location';

import Map_foundation from '$lib/images/map/foundation.png';

// import Map_0 from '$lib/images/map/0.png';
// import Map_1 from '$lib/images/map/1.png';
// import Map_2 from '$lib/images/map/2.png';
// import Map_3 from '$lib/images/map/3.png';
// import Map_4 from '$lib/images/map/4.png';
// import Map_5 from '$lib/images/map/5.png';
// import Map_6 from '$lib/images/map/6.png';
// import Map_7 from '$lib/images/map/7.png';
// import Map_8 from '$lib/images/map/8.png';
// import Map_9 from '$lib/images/map/9.png';
// import Map_10 from '$lib/images/map/10.png';
// import Map_11 from '$lib/images/map/11.png';
// import Map_12 from '$lib/images/map/12.png';




import piece_1 from '$lib/images/map/pieces/cross.png';
import piece_2 from '$lib/images/map/pieces/house.png';
import piece_3 from '$lib/images/map/pieces/horse.png';
import piece_4 from '$lib/images/map/pieces/boat.png';
import piece_5 from '$lib/images/map/pieces/kitchen.png';
import piece_6 from '$lib/images/map/pieces/coop.png';
import piece_7 from '$lib/images/map/pieces/bakery.png';
import piece_8 from '$lib/images/map/pieces/well.png';
import piece_9 from '$lib/images/map/pieces/tree.png';
import piece_10 from '$lib/images/map/pieces/chapel.png';
import piece_11 from '$lib/images/map/pieces/dog.png';
import piece_12 from '$lib/images/map/pieces/monument.png';



// intersection observer code from MDN, untouched:
// const options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   scrollMargin: "0px",
//   threshold: 1.0,
// };
// const observer = new IntersectionObserver(callback, options);




// The current, idiotic way of parallax: scroll bound to scroll value, $effect, then find position of map and edit GLOBAL css variable.
// Absolute dogshit

let scroll = $state(Number(0))
let map_scroll = $state(Number(0))

// let map_position_y


// let map_position_y = Number(0) # doesn't work

// works globally. Performance?

// good, but disabled because i can't get unique effects for each item
$effect(() => {
    // document.querySelector(':root').style.setProperty('--scroll', scroll)
    // scroll_minus_map = Math.max((scroll - document.getElementById("map_wrapper").offsetTop) * -1 -300, 0)
    // map_scroll = Math.min(Math.max((scroll - document.getElementById("map_wrapper").offsetTop) * -1 +100, 0), 500)
    map_scroll =  Math.max((scroll - document.getElementById("map_wrapper").offsetTop) * -1 -100, 0)
    // map_scroll = (map_scroll + Math.max((scroll - document.getElementById("map_wrapper").offsetTop) * -1 -100, 0)) * 0.5


    // document.querySelector(':root').style.setProperty('--scroll_minus_map', scroll_minus_map )
})
// let scroll = Number(0)

// $effect


let an_error = "all is good"


let geolocation_permitted = false
let location_x = $state(-200) // 0...100, percentage
let location_y = $state(-200)
let heading = $state(0) //heading is null if there's no speed. Direction only shows up when user moves
let orientation = $state(0)


function show_position() {
	navigator.geolocation.getCurrentPosition(set_geolocation_marker, failed_to_get_geolocation, { enableHighAccuracy: true, timeout: 1000})
}




// var times_location_was_checked = Number(0)

function watch_position() {
	const watchID = navigator.geolocation.watchPosition(set_geolocation_marker, failed_to_get_geolocation,
		{
		enableHighAccuracy: true,
		timeout: 1,
        maximumAge: 0
		}
	)
    
    // window.addEventListener("deviceorientation", function(an_event) {
    //     console.log("event:", an_event, an_event.alpha)
    //     orientation = an_event.alpha    
    // })

	// navigator.geolocation.clearWatch(watchID) 
}

// function set_orientation(an_event) {
//     console.log("event:", an_event, an_event.alpha)
//     orientation = an_event.alpha
// }


function set_geolocation_marker(position) {
	// const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords
	geolocation_to_location(position.coords.latitude, position.coords.longitude)
    heading = position.coords.heading
    console.log("_________________________")
	console.log("geolocation: ", position.coords.latitude, position.coords.longitude)
	console.log("location %: ", location_x, location_y, " | heading: ", heading) // reenable when runes moded
	// console.log(position.coords.latitude)
	
}

// change to re-ask person to allow location
function failed_to_get_geolocation(error) {
	console.log("woops", error)
    an_error = error
}

// 100 * (1 - (center_point - half_of_range - passed_value) / range)
// Markuciai parkas center 54.6765, 25.3245 (untested)
// the other museum center 54.6895, 25.2545
function geolocation_to_location(a_latitude, a_longitude) {
	// location_x 	= 100 *( 1 - (54.6765 + 0.002 - a_latitude) / 0.004)
	// location_y	= 100 *( 1 - (25.3245 + 0.002 - a_longitude) / 0.004)
	location_x 	= 100 *( 1 - (54.6891 + 0.002 - a_latitude) / 0.004)
	location_y	= 100 *( 1 - (25.2546 + 0.0015 - a_longitude) / 0.003)
}






if (browser) {
    // show_position()
    // watch_position()
    console.log("i'm a map")
    fixScrollUpdateSafariIOs()


}



onMount(async () => { 
    // map_position_y = document.getElementById("map_wrapper").offsetTop
    // document.getElementsBy
});






// some function i got from the web. Does it work??
function fixScrollUpdateSafariIOs() {
    const isIosSafari = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
    // Check if it's an iOS device and Safari
    const isMobileSafari = isIosSafari && window.innerWidth < 768;
    if (isMobileSafari) {
        (function () {
            // Create a hidden log div
            const logDiv = document.createElement('div');
            logDiv.style.height = '0px'; // Set the height to 0 pixels
            logDiv.style.overflow = 'hidden'; // Hide the content
            document.body.appendChild(logDiv);

            // Function to update the log with the scroll position
            function updateLog() {
                logDiv.innerHTML = window.scrollY.toFixed(0);
            }

            // Add listeners for scroll and touch events
            window.addEventListener('scroll', updateLog, { passive: true, capture: true });
            window.addEventListener('touchstart', updateLog, { passive: true, capture: true });
            window.addEventListener('touchmove', updateLog, { passive: true, capture: true });
            window.addEventListener('touchend', updateLog, { passive: true, capture: true });
        })();
    }
}






</script>






<svelte:window bind:scrollY={scroll} />


<br><br>

<div id="map_wrapper">

<div id="marker_container">
    <!-- <div>{scroll} / {map_scroll}</div> -->
    <div
        id="position_marker"
        style="
            left: {location_x}%;
            top: {location_y}%;
            rotate: {heading}deg;
            "
            >
        {location_x}, {location_y}
        <br/> H: {heading}
    </div>
</div>

<!-- <img src="{Map_foundation}" width="100%" > -->
<img src="{Map_foundation}" class="map_foundation" >

<!-- one set of layers for progress, another for location-->
<!-- actually, just do layers for locations, foundation is too hard -->

<!-- Y NO STICKYYY -->
{#if globe.progress >= 1} <img src={piece_1} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 0.5; --x_ratio: 1.5;"> {/if}
{#if globe.progress >= 2} <img src={piece_2} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 0.8; --x_ratio: 1;"> {/if}
{#if globe.progress >= 3} <img src={piece_3} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 0.6; --x_ratio: 0.2;"> {/if}
{#if globe.progress >= 4} <img src={piece_4} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: -0.8; --x_ratio: -0.8;"> {/if}
{#if globe.progress >= 5} <img src={piece_5} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 0.2; --x_ratio: -1.5;"> {/if}
{#if globe.progress >= 6} <img src={piece_6} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 0.33; --x_ratio: 2;"> {/if}
{#if globe.progress >= 7} <img src={piece_7} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 0.55; --x_ratio: 0.5;"> {/if}
{#if globe.progress >= 8} <img src={piece_8} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 0.2; --x_ratio: 0.5;"> {/if}
{#if globe.progress >= 9} <img src={piece_9} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 0.5; --x_ratio: -2.2;"> {/if}
{#if globe.progress >= 10} <img src={piece_10} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: -0.6; --x_ratio: 1.5;"> {/if}
{#if globe.progress >= 11} <img src={piece_11} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: 2.8; --x_ratio: 0.25;"> {/if}
{#if globe.progress >= 12} <img src={piece_12} class="map_layer" style="--map_scroll: {map_scroll}; --y_ratio: -0.2; --x_ratio: -1.5;"> {/if}




</div>

<!-- TODO use $location to highlight where the player is -->
<!-- set location from stations -->
<!-- port the legend here from layout-->




<style>
/* put the marker image inside, position it top left corner, lose the background */
#marker_container {
    position: absolute;
    width:  100%;
    height: 100%;
    /* left: 0;
    top: 0; */
    rotate: -7.5deg;
    /* border: red solid 1px; */
}

#position_marker {
	/* position: absolute; */ 
    /* why not absolute any more? change to foundation/layers? relative seems to work */
    position: relative; 
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: magenta;
	z-index: 200;
    top: calc(var(--scroll) * 0.1px);

/*     left: 10%;
    top: 20%; */
}


#map_wrapper {
    position: relative;
    margin-bottom: 30px;
    /* border: 1px solid purple; */
    /* background-color: aqua; */

}

@media (max-aspect-ratio: 5/8) and (orientation:portrait) {
/* @media (max-width: 200px) { */
    #map_wrapper {
        /* background: red; */
        /* border: 1px solid orange; */
        width: 100vw;
        height: 100vw;
        margin-left: -19px; /* hacky! */
        z-index: 10;
        top: -20px;
        position: sticky;
        position: -webkit-sticky; /* Safari */

        box-shadow: 0px 30px 50px 50px var(--color-bg-1) ;
    }
}


@media (min-width: 1400px) {
    #map_wrapper {
        margin: 5vw 0 0 0;
        width: 90vw;
        /* height: 90vw; */
        /* border: red solid 1px; */
    }
}





.map_foundation {
    width: 100%;
    /* position: absolute; */
    /* left: -5vw; */
}

.map_layer {
    /* visibility: hidden; */
    pointer-events: none; /*because images get dragged but shouldn't*/

    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;

    --x_ratio: 0;
    --y_ratio: 1;
    --map_scroll:  0;



    /* top: calc(var(--scroll_minus_map) * 1px) ; */
    /* transform: perspective( calc  500px   ) translate3d(10px, 0, 20px) rotateY(30deg); */

/* good, byt samey and attr() isn't implemented in browsers yet */
    /* transform: translate3d(0px, calc( min(var(--scroll_minus_map), 0) * 0.25px), 20px); */
    transform:
        perspective(500px)
        translate3d(
            calc( var(--map_scroll) * var(--x_ratio) * -0.25px), 
            calc( var(--map_scroll) * var(--y_ratio) * -0.25px), 
            calc( var(--map_scroll) * abs(var(--x_ratio)) * abs(var(--y_ratio)) * 0.5px))

        rotateY( calc( var(--map_scroll) * var(--y_ratio) * 0.1deg))
        rotateX( calc( var(--map_scroll) * var(--x_ratio) * 0.1deg))
        rotateZ( calc( var(--map_scroll) * var(--x_ratio) * var(--y_ratio) * 0.2deg))
        ;
    transition: transform 0.16s;

}






</style>





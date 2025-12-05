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

import icon_0_collected from '$lib/images/icons_collected/0.png';
import icon_1_collected from '$lib/images/icons_collected/1.png';
import icon_2_collected from '$lib/images/icons_collected/2.png';
import icon_3_collected from '$lib/images/icons_collected/3.png';
import icon_4_collected from '$lib/images/icons_collected/4.png';
import icon_5_collected from '$lib/images/icons_collected/5.png';
import icon_6_collected from '$lib/images/icons_collected/6.png';
import icon_7_collected from '$lib/images/icons_collected/7.png';
import icon_8_collected from '$lib/images/icons_collected/8.png';
import icon_9_collected from '$lib/images/icons_collected/9.png';
import icon_10_collected from '$lib/images/icons_collected/10.png';
import icon_11_collected from '$lib/images/icons_collected/11.png';
import icon_12_collected from '$lib/images/icons_collected/12.png';


let order_of_items = [2, 8, 3, 5, 9, 1, 0, 7, 6, 12, 10, 11, 4]
let icon_array = [icon_0, icon_1, icon_2, icon_3, icon_4, icon_5, icon_6, icon_7, icon_8, icon_9, icon_10, icon_11, icon_12]
let icon_array_collected = [icon_0_collected, icon_1_collected, icon_2_collected, icon_3_collected, icon_4_collected, icon_5_collected, icon_6_collected, icon_7_collected, icon_8_collected, icon_9_collected, icon_10_collected, icon_11_collected, icon_12_collected]


let legend_text = {
    "EN" : [
        "Museum", "Cross", "Servants' quarters", "Stables", "Pond", "Kitchen",
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





function shuffle_order_of_items(order_of_items) {
    order_of_items.sort(function (a, b) {
        return Math.random() - 0.5;
    });
}








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


import piece_1_back from '$lib/images/illustrations/testament_full.png';


let piece_array_front = [piece_1, piece_2, piece_3, piece_4, piece_5, piece_6, piece_7, piece_8, piece_9, piece_10, piece_11, piece_12]
let piece_array_back = [piece_1_back, piece_2, piece_3, piece_4, piece_5, piece_6, piece_7, piece_8, piece_9, piece_10, piece_11, piece_12]
let x_ratio_array = [1.5, 1, 0.2, -0.8, -1.5, 2, 0.5, 0.5, -2.2, 1.5, 0.25, -1.5]
let y_ratio_array = [0.5, 0.8, 0.6, -0.8, 0.2, 0.33, 0.55, 0.2, 0.5, -0.6, 2.8, -0.2]





// intersection observer code from MDN, untouched:
// const options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   scrollMargin: "0px",
//   threshold: 1.0,
// };
// const observer = new IntersectionObserver(callback, options);
// I think i had some intersection observer success... somewhere.


// How the pieces flight scroll parallax works:
// 1. Catch scroll in html and bind to scroll variable.
// 2. $effect catches change and sets map_scroll
// 3. Each item in the list gets the value passed --map_scroll variable it via style=" --map_scroll = {map_scroll} "
// 4. Each item also gets unique values for the animation
// 5. CSS style computes CSS transform from CSS variables.
// Images have been decently shrunken and optimised. There are a few quality options stuck in folders.

// I need a better way to construct parallaxes, but this custom thing is good for being

let scroll = $state(Number(0))
let map_scroll = $state(Number(100))
let flipped = $state(false);

$effect(() => {
    // document.querySelector(':root').style.setProperty('--scroll', scroll)

    // Linear
    map_scroll =  Math.max((scroll - document.getElementById("map_wrapper").offsetTop) * -1 -100, 0)

    // Eased in different directions:
    // map_scroll =  Math.pow(Math.max((scroll - document.getElementById("map_wrapper").offsetTop)  * -1 -100, 0), 0.5) * 20
    // map_scroll =  Math.pow(Math.max((scroll - document.getElementById("map_wrapper").offsetTop)  * -1 -100, 0), 3) * 0.000005

    // Browser killer, apparently:
    // map_scroll =  (map_scroll + Math.pow(Math.max((scroll - document.getElementById("map_wrapper").offsetTop)  * -1 -100, 0), 3)) * 0.000005
})




// GEOLOCATION
// I coded this so long ago i forget how it works.
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
    shuffle_order_of_items(order_of_items)
    // show_position()
    // watch_position()
    // console.log("i'm a map")
    fixScrollUpdateSafariIOs() // Does it do anything? I don't think so


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

<!-- {#if globe.progress == 12} -->
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
<!-- {/if} -->


<div class="map_and_stuff">







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

<!-- {map_scroll} -->



{#each {length: globe.progress }, index}
<div class="map_layer"
    class:current={globe.location == index}
    style="--map_scroll: {map_scroll}; --y_ratio: {y_ratio_array[index]}; --x_ratio: {x_ratio_array[index]};"
    class:flipped={flipped}
    > 

    <img src={piece_array_front[index]} class ="map_layer_img" />
    <img src={piece_array_back[index]} class ="map_layer_img backside" />
</div>
{/each}




</div>

<!-- TODO use $location to highlight where the player is -->
<!-- set location from stations -->
<!-- port the legend here from layout-->




<div class="legend_section">
<ul class="legend_ul">


{#each {length: 13 }, index}
    <li class="legend_li" class:current={globe.location == order_of_items[index]}>
        {#if globe.progress >= order_of_items[index]}
            <img src={icon_array_collected[order_of_items[index]] } class="legend_icon" class:current={globe.location == order_of_items[index]}>
        {:else}
            <img src={icon_array[order_of_items[index]] } class="legend_icon" class:current={globe.location == order_of_items[index]}>
        {/if}
         {legend_text[globe.language][order_of_items[index]]}
    </li>
{/each}

</ul>
</div> <!-- Legend section -->

</div>   <!--map_and_stuff-->




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

.button.apversti {
    /* scale: 2; */
    transform: scale(1)
    /* position: absolute; */
    z-index: 10;
    /* left: 100px */
    width: 90%;
    margin: 10px 5% 0 5%;
    height: 80px;
    font-size: 36px;
    left: 0;
    background-color:  var(--color-mdm-sepia);
    color: var(--color_green_medium_dark);
    /* color: var(--color-bg-1); */
    /* font-family: var(--font-manrope); */
    font-weight: 800;

    transition: 0.1s;
    border: none;
    /* padding: 40px; */
}

.button.apversti:hover {
    transform: scale(1.02);
    background-color: var(--color-sepia);
    color: var(--color-vm-orange);
    border: none;
    /* transition: 0.1s; */
}

.button.apversti:active {
    transform: scale(0.98);
    background-color: var(--color-mdm-sepia);
    background-color: var(--color-vm-orange);
    color: var(--color-sepia);
    border: none;
    /* transition: 0.1s; */
}


.button.apversti:active:not(:hover) {
    transform: scale(1);
    background-color:  var(--color-vm-orange);
    color: var(--color_green_medium_dark);
    }



#map_wrapper {
    position: relative;
    margin-bottom: 30px;
    margin-top: 40px;
    perspective: 500px;
    /* transform-style: preserve-3d; */
    z-index: 10;
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
        /* top: 20px; */
        top: 0px;
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





.map_foundation {
    width: 100%;
    /* position: absolute; */
    /* left: -5vw; */
}

.map_layer {
    /* visibility: hidden; */
    /* border: 1px red solid; */
    pointer-events: none; /*because images get dragged but shouldn't*/

    width: 100%;
    height: 100%;
    position: absolute;

    left: 0;
    top: 0;
    z-index: 20;

    --x_ratio: 0;
    --y_ratio: 1;
    --map_scroll:  0;
    /* --z_value: calc( var(--map_scroll) * abs(var(--x_ratio)) * abs(var(--y_ratio)) * 0.5px) ; */



    /* top: calc(var(--scroll_minus_map) * 1px) ; */
    /* transform: perspective( calc  500px   ) translate3d(10px, 0, 20px) rotateY(30deg); */

/* good, byt samey and attr() isn't implemented in browsers yet */
    /* transform: translate3d(0px, calc( min(var(--scroll_minus_map), 0) * 0.25px), 20px); */
    transform-style: preserve-3d;
    /* transform-origin: 50% 50%; */
    /* transform-origin: 100% 100%; */
    /* transform-origin: top left; */
    /* perspective: 500px; */

    transform:
        /* perspective(500px) */
        translate3d(
            calc( var(--map_scroll) * var(--x_ratio) * -0.25px), 
            calc( var(--map_scroll) * var(--y_ratio) * -0.25px), 
            calc( var(--map_scroll) * abs(var(--x_ratio)) * abs(var(--y_ratio)) * 0.5px))

        /* rotateY( calc( var(--map_scroll) * var(--y_ratio) * 0.1deg)) */
        rotateY( calc( var(--map_scroll) * var(--y_ratio) * 0.25deg))
        rotateX( calc( var(--map_scroll) * var(--x_ratio) * 0.25deg))
        rotateZ( calc( var(--map_scroll) * var(--x_ratio) * var(--y_ratio) * 0.5deg))
        ;
    transition: transform 0.16s; /* Safari passes an integer scroll value and lags on phone. This smoothes it out SOMEWHAT */


    /* Filters work, but the visual effect is a negligible and performance cost may be a problem */
    /* filter:  */
        /* brightness( calc(var(--map_scroll) * var(--x_ratio) * var(--y_ratio) * 0.001 + 1 )   ) */
        /* drop-shadow(0px 4px 8px rgba(0.9, 1, 0.9, 0.5) ) */

        /* tilt-shift */
        /* blur( calc(var(--map_scroll) * 0.01px) ), */
        /* blur( calc( var(--map_scroll) * abs(var(--x_ratio)) * abs(var(--y_ratio)) * 0.01px) ) */
        /* ; */

}


.map_layer_img {
    width: 100%;
    /* transform-origin: center center; */
    /* top: 0; */
    /* left: 0; */
    /* border: 1px blue solid; */
    position: absolute;
    backface-visibility: hidden;
}

.backside {
    filter: hue-rotate(200deg);
    transform: scaleX(-1) rotateY(180deg);
    /* transform: rotateY(180deg); */
    backface-visibility: hidden;
}

/* .map_layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.5s;
} */


.flipped {
    transform: rotateY(-180deg);
    transition: 10.5s;
    transition: calc( abs(var(--x_ratio)) * abs(var(--y_ratio)) * 2.5s);
    /* transform: rotateY(45deg); */
    /* scale: 1.2; */
}


.map_layer.current {
filter: brightness(1.2) contrast(1.25) saturate(0.5);
}



/* Legend */

.legend_section {
    /* border: 1px red solid; */
    /* display: grid; */

    width: 110%;
    display: flex;
    flex-wrap: wrap;

    /* text-align: center; */
    /* width: clamp(200px, 100vw, 760px); */
    /* flex-basis: 400px; */
    /* flex-grow: 0; */
    margin: 80px 0 40px 20px;
/*  margin-bottom: 40px;
    margin-top: 80px; */

    justify-content: left;
    }


/* tried doing multiple things... there's some trash here */
.legend_ul {
    /* background-color: purple; */
    /* border: solid blue 2px; */
    /* flex: initial; */

    flex: 1 0 0;
    width: 100%;
    /* width: 100vw; */
    max-width: 860px;
    padding: 0;
    margin: -40px 0 40px 0;

    flex-grow: 2;

    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: center;
    /* align-self: flex-end; */



    list-style-type: none;


    color:  var(--color-mdm-sepia);


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
    margin: 30px 20px 30px 0;
    width: 375px;
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
    filter: brightness(1.25) contrast(1.2) saturate(0.6);
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











</style>





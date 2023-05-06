<script>
import { browser } from "$app/environment";
// import { onMount } from 'svelte';
import visited from './stores/visited';   
import location from './stores/location';

import Map_0 from '$lib/images/map/0.png';
import Map_1 from '$lib/images/map/1.png';
import Map_2 from '$lib/images/map/2.png';
import Map_3 from '$lib/images/map/3.png';
import Map_4 from '$lib/images/map/4.png';
import Map_5 from '$lib/images/map/5.png';
import Map_6 from '$lib/images/map/6.png';
import Map_7 from '$lib/images/map/7.png';
import Map_8 from '$lib/images/map/8.png';
import Map_9 from '$lib/images/map/9.png';
import Map_10 from '$lib/images/map/10.png';
import Map_11 from '$lib/images/map/11.png';
import Map_12 from '$lib/images/map/12.png';



let scroll




var geolocation_permitted = false
$: location_x = 20 //0...100
$: location_y = 40



function show_position() {
	navigator.geolocation.getCurrentPosition(set_geolocation_marker, failed_to_get_geolocation, { enableHighAccuracy: true, timeout: 1000})
}


function set_geolocation_marker(position) {
	const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords
	geolocation_to_location(position.coords.latitude, position.coords.longitude)
	console.log("geolocation: ", position.coords.latitude, position.coords.longitude)
	console.log("location %: ", location_x, location_y)
	// console.log(position.coords.latitude)
	
}

// change to re-ask person to allow location
function failed_to_get_geolocation(error) {
	console.log(error)
}


function watch_position() {
	const watchID = navigator.geolocation.watchPosition(set_geolocation_marker, failed_to_get_geolocation,
		{
		enableHighAccuracy: true,
		timeout: 1000
		}
	)
	navigator.geolocation.clearWatch(watchID)
}



// 100 * (1 - (center_point - half_of_range - passed_value) / range)
// Markuciai parkas center 54.6765, 25.3245 (untested)
// the other museum center 54.6895, 25.2545
function geolocation_to_location(a_latitude, a_longitude) {
	// location_x 	= 100 *( 1 - (54.6765 + 0.002 - a_latitude) / 0.004)
	// location_y	= 100 *( 1 - (25.3245 + 0.002 - a_longitude) / 0.004)
	location_x 	= 100 *( 1 - (54.6891 + 0.002 - a_latitude) / 0.004)
	location_y	= 100 *( 1 - (25.2546 + 0.002 - a_longitude) / 0.004)
}






if (browser) {
    show_position()
}


</script>



<!-- Put inside a map-sized container and rotate 7.5 deg -->
<div id="position_marker" style="left: {location_x}cqw; top: {location_y}cqw" />



<svelte:window bind:scrollY={scroll} />
<br><br>
<div class="map_wrapper">
{#if $visited == 1}          <img src={Map_1} width=100%>    
{:else if $visited == 2}     <img src={Map_2} width=100%>
{:else if $visited == 3}     <img src={Map_3} width=100%>   
{:else if $visited == 4}     <img src={Map_4} width=100%>
{:else if $visited == 5}     <img src={Map_5} width=100%>   
{:else if $visited == 6}     <img src={Map_6} width=100%>
{:else if $visited == 7}     <img src={Map_7} width=100%>   
{:else if $visited == 8}     <img src={Map_8} width=100%>
{:else if $visited == 9}     <img src={Map_9} width=100%>  
{:else if $visited == 10}    <img src={Map_10} width=100%>
{:else if $visited == 11}    <img src={Map_11} width=100%>   
{:else if $visited == 12}    <img src={Map_12} width=100%>
{:else}                     <img src={Map_0} width=100%>
{/if}
</div>

<!-- TODO use $location to highlight where the player is -->
<!-- set location from stations -->
<!-- port the legend here from layout-->




<style>



@media (max-aspect-ratio: 5/8) and (orientation:portrait) {
    .map_wrapper {
        width: 100vw;
        height: 100vw;
        margin-left: -19px; /* hacky! */
        z-index: 10;
        position: sticky;
        top: -20px;
        position: -webkit-sticky; /* Safari */
        /* border: 1px solid red; */
        /* background-color: aqua; */
        box-shadow: 0px 30px 50px 10px #006837;
    }
}


@media (min-width: 1400px) {
    .map_wrapper {
        margin: 5vw 0 0 0;
        width: 90vw;
        /* height: 90vw; */
        /* border: red solid 1px; */
    }
}

</style>





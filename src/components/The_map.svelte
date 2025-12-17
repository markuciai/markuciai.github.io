<script>
import { browser } from "$app/environment";
// 
import { fade, blur, fly, slide, scale } from "svelte/transition";
// import location from './stores/location';

import Map_foundation from '$lib/images/map/foundation.png';
import mapushkin from '$lib/images/illustrations/mapushkin.png';

import dvaras_bw from '$lib/images/archival/dvaras_bw.jpg';
import varvara from '$lib/images/archival/varvara.jpg';
import pond from '$lib/images/archival/pond.jpg';
import fruit_garden from '$lib/images/archival/fruit_garden.jpg';
import doggo from '$lib/images/illustrations/doggo.png';


import wall_ornament from '$lib/images/small/wall_ornament.svg';


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





// TODO test this form of import:
// const images = import.meta.glob("../assets/img/avatars/*")
// another snippet:
// const imageModules = import.meta.glob("../../static/*.jpg");
//   for (const modulePath in imageModules) {
//     imageModules[modulePath]().then(({ default: imageUrl }) => {
//       console.log(modulePath, imageUrl);
//     });
//   }

// or this:

// const gallery = Object.values(import.meta.glob('@assets/asso/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }))

// import icon_glob from import.meta.glob("$lib/images/icons/*")
var icon_glob = import.meta.glob("$lib/images/icons/*")


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


var order_of_items = [2, 8, 3, 5, 9, 1, 0, 7, 6, 12, 10, 11, 4]
var icon_array = [icon_0, icon_1, icon_2, icon_3, icon_4, icon_5, icon_6, icon_7, icon_8, icon_9, icon_10, icon_11, icon_12]
var icon_array_collected = [icon_0_collected, icon_1_collected, icon_2_collected, icon_3_collected, icon_4_collected, icon_5_collected, icon_6_collected, icon_7_collected, icon_8_collected, icon_9_collected, icon_10_collected, icon_11_collected, icon_12_collected]


var legend_text = {
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


var gabaliuku_text = {
    "EN" : [
        "pieces", "piece", "pieces", "pieces", "pieces", "pieces", "pieces", "pieces", "pieces", "pieces", "pieces", "pieces", "pieces",
        ],
    "RU" : [
        "кусочков", "кусочек", "кусочка", "кусочка", "кусочка", "кусочков", "кусочков", "кусочков", "кусочков", "кусочков", "кусочков", "кусочков", "кусочков",
        ],
    "LT" : [
        "gabaliuku", "gabaliuka", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliuku", "gabaliuku", "gabaliuku",
        ],
    "LA" : [
        "gabaliuku", "gabaliuka", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliukus", "gabaliuku", "gabaliuku", "gabaliuku",
        ],
}



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


import piece_testament_cross from '$lib/images/map/pieces/testamentas/cross.png';
import piece_testament_house from '$lib/images/map/pieces/testamentas/house.png';
import piece_testament_stables from '$lib/images/map/pieces/testamentas/stables.png';
import piece_testament_pond from '$lib/images/map/pieces/testamentas/pond.png';
import piece_testament_kitchen from '$lib/images/map/pieces/testamentas/kitchen.png';
import piece_testament_coop from '$lib/images/map/pieces/testamentas/coop.png';
import piece_testament_bakery from '$lib/images/map/pieces/testamentas/bakery.png';
import piece_testament_well from '$lib/images/map/pieces/testamentas/well.png';
import piece_testament_orangery from '$lib/images/map/pieces/testamentas/orangery.png';
import piece_testament_chapel from '$lib/images/map/pieces/testamentas/chapel.png';
import piece_testament_doggo from '$lib/images/map/pieces/testamentas/doggo.png';
import piece_testament_croquet from '$lib/images/map/pieces/testamentas/croquet.png';
import piece_testament_muziejus from '$lib/images/map/pieces/testamentas/muziejus.png';

import piece_1_back from '$lib/images/illustrations/testament_full.png';


var piece_array_front = [piece_1, piece_2, piece_3, piece_4, piece_5, piece_6, piece_7, piece_8, piece_9, piece_10, piece_11, piece_12]
var piece_array_back = [piece_testament_cross, piece_testament_house, piece_testament_stables, piece_testament_pond, piece_testament_kitchen, piece_testament_coop, piece_testament_bakery, piece_testament_well, piece_testament_orangery, piece_testament_chapel, piece_testament_doggo, piece_testament_croquet]
var x_ratio_array = [1.5, 1, 0.2, -0.8, -1.5, 2, 0.5, 0.5, -2.2, 1.5, 0.25, -1.5]
var y_ratio_array = [0.5, 0.8, 0.6, -0.8, 0.2, 0.33, 0.55, 0.2, 0.5, -0.6, 2.8, -0.2]





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

var scroll = $state(Number(0))
var map_scroll = $state(Number(0))
var flipped = $state(false);
var map_offset = $state(Number(0))
var map_wrapper_element


$effect(() => {
    // document.querySelector(':root').style.setProperty('--scroll', scroll)

    // Linear
    if (map_wrapper_element == null){
        map_wrapper_element = document.getElementById("map_wrapper")
        // console.log("map_wrapper_element", map_wrapper_element)
    }
    map_offset = map_wrapper_element.offsetTop
    map_scroll = Math.min(Math.max((scroll - map_offset) * -1 -100, 0), 32768)
    // console.log("map scroll", map_scroll)



    // Eased in different directions:
    // map_scroll =  Math.pow(Math.max((scroll - document.getElementById("map_wrapper").offsetTop)  * -1 -100, 0), 0.5) * 20
    // map_scroll =  Math.pow(Math.max((scroll - document.getElementById("map_wrapper").offsetTop)  * -1 -100, 0), 3) * 0.000005

    // Browser killer, apparently:
    // map_scroll =  (map_scroll + Math.pow(Math.max((scroll - document.getElementById("map_wrapper").offsetTop)  * -1 -100, 0), 3)) * 0.000005
})




// GEOLOCATION
// I coded this so long ago i forget how it works.
let an_error = "all is good"

let geolocation_permitted = $state(false)
let location_x = $state(50) // 0...100, percentage
let location_y = $state(50)
let heading = $state(0) //heading is null if there's no speed. Direction only shows up when user moves
let orientation = $state(0)


function show_where_i_am() {
    geolocation_permitted = true
    show_position()
    watch_position()
}


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


// location_x  = Math.min(Math.max( (100 *( 1 - (54.6891 + 0.002 - a_latitude) / 0.004)), 0),100)
// location_y  = Math.min(Math.max( (100 *( 1 - (25.2546 + 0.0015 - a_longitude) / 0.003)), 0),100)
}






if (browser) {
    shuffle_order_of_items(order_of_items)

    if(geolocation_permitted){
        show_position()
        watch_position()   
    }

    // console.log("i'm a map")
    // fixScrollUpdateSafariIOs() // Does it do anything? I don't think so


}



onMount(async () => { 
    map_wrapper_element = document.getElementById("map_wrapper")
    // console.log(map_wrapper_element)
    map_offset = map_wrapper_element.offsetTop
    // map_position_y = document.getElementById("map_wrapper").offsetTop
    // document.getElementsBy
    // console.log("baz")
    // console.log("icon_glob", Object.keys(icon_glob)[0] )
    // console.log("inga")

  for (const modulePath in icon_glob) {
    icon_glob[modulePath]().then(({ default: imageUrl }) => {
      // console.log(modulePath, imageUrl);
    })
    }

})






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
{:else if globe.progress != -1}
<!-- {:else} -->
<div class="progress_block">
<div class="progress_bar" style="--progress_percent: {100*globe.progress/12}%">&nbsp;</div>
<!-- <p class="progress_description">
Jūs surinkote {globe.progress} {gabaliuku_text[globe.language][globe.progress]} iš 12
</p> -->
<!-- 
[gabaliuku, gabaliuka, gabaliukus, gabaliukus, gabaliukus, gabaliukus, gabaliukus, gabaliukus, gabaliukus, gabaliukus, gabaliuku, gabaliuku, gabaliuku][]

 -->

</div>
{/if}




<!-- for testing -->
{#if geolocation_permitted}
{location_x}; {location_y}
{/if}

<div class="map_and_stuff">





<div id="map_wrapper">




{#if geolocation_permitted}
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
        {location_x.toFixed(2)} {location_y.toFixed(2)}
        <!-- <br/> H: {heading} -->
    </div>
</div>
{/if}






<img src="{Map_foundation}" class="map_foundation" class:flipped={flipped}>
{#if flipped}
<img src="{wall_ornament}" class="wall_ornament">
<img src="{mapushkin}" class="map_foundation mapushkin" >

<!-- {:else} -->
<!-- <img src="{Map_foundation}" class="map_foundation" class:flipped={flipped}> -->
{/if}


<!-- TODO instead of this manual thing↓ include the piece in all the arrays -->
{#if globe.progress == 12}
<div 
    class="map_layer"
    style="
        /* --map_offset: {map_offset}; */
        --map_scroll: 0;
        /* --scroll: {scroll}; */
        --y_ratio: 1;
        --x_ratio: 1;
        --transition_time_base: { +flipped }s;
        "
    
    class:flipped={flipped}
    > 
    {#if flipped}
    <img src={piece_testament_muziejus} class ="map_layer_img backside museum_piece" />
    {/if}
</div>
{/if}


{#each {length: globe.progress }, index}
<div 
    class="map_layer"
    class:flipped={flipped}
    style="
        /* --map_offset: {map_offset}; */
        --map_scroll: {map_scroll};
        /* --scroll: {scroll}; */
        --y_ratio: {y_ratio_array[index]};
        --x_ratio: {x_ratio_array[index]};
        --transition_time_base: { +flipped }s;
        "
    > 

    <img src={piece_array_front[index]} class ="map_layer_img" class:current_piece={globe.location == index + 1} class:highlight={map_scroll <= 2} />
    <img src={piece_array_back[index]} class ="map_layer_img backside" />
</div>
{/each}




<!--class:current_piece={globe.location == index + 1 && scroll <= map_offset -100}-->


</div>

<!-- TODO use $location to highlight where the player is -->
<!-- set location from stations -->
<!-- port the legend here from layout-->




<div class="legend_section">













{#if !flipped}
<ul class="legend_ul">


{#if globe.laisve}
<li class="legend_li">
<!-- <button class="button"  onclick={() => flipped = !flipped}> -->
<button class="button"  onclick={() => show_where_i_am() }>
{#if globe.language == "EN"}
Show me on the map
{:else if globe.language == "RU"}
Покажите меня на карте
{:else}
Parodykite kur aš esu
{/if}
</button>
</li>
{/if}



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
{/if}

</div> <!-- Legend section -->








</div>   <!--map_and_stuff-->




{#if flipped}
<section class="testament_section">


{#if globe.language == "EN"}
<h1>Markučiai Treasure</h1>
<div class="testamento_tekstas" >
<!-- <p class="subh">Aleksejaus Melnikovo<br>testamento tekstas</p> -->
<p class="subh">Excerpts from the dowry <br/>given by Aleksei Melnikov<br />To his daughter Varvara</p>

<p style="rotate: -2deg">
“I bestow upon my daughter Varvara Moškova, as dowry, the folowing estate:
</p>
</div>
<img width=120% src={dvaras_bw} style="margin-bottom:40px; rotate: -4deg;">


<div class="testamento_tekstas" style="rotate: 1.5deg">
<p>
a) with all the lands, forests, water bodies, all measuring up to 54 desiatins 72 sazhens;
</p>
</div>

<img width=110% src={pond} style="margin-bottom:40px; rotate: 2deg;">

<div class="testamento_tekstas" >
<p style="rotate: -2.5deg">
b) with all the manor houses and all other buildings, with fisheries and other enterprises, and equally with overwinter, warm-season and vegetable crops.
</p>
</div>


<img width=120% src={fruit_garden} style="margin-bottom:40px; rotate: -3deg;">



<div class="testamento_tekstas" style="rotate: 1deg">
<p>
The aforementioned real estate and belongings, given as dowry, I estimate, in good conscience:
</p>
<p>a) real estate worth 45 000 rub.</p>
</div>

<img width=120% src={varvara} style="margin-bottom:40px; rotate: 2deg;">

<div class="testamento_tekstas" style="rotate: 1.5deg">
<p>and b) belongings, including valuables – 15 000 rub., which with cash moneys amounts to 40 000 rub., in total 100 thousands rubles in silver”</p>
</div>

<img class="illustration" src={doggo}>
<div class="where-next">
    <!-- Later, Varvara will charge her own descendants with establishing a museum at the Markučiai manor, so that the treasure she was given would serve the causes of culture and education. That museum works to this day. <br><br> -->
{#if globe.location == 12}
    With commendable teamwork you have managed to gather the whole document! Your treasure — a&nbsp;prize.
    <br><br>
    <span class="highlighted-question">Now, visit the museum and pick up your reward for the job well done!</span>
{/if}
</div>



{:else if globe.language == "RU"}
<h1>Клад Маркучай</h1>
<div class="testamento_tekstas" >
<!-- <p class="subh">Aleksejaus Melnikovo<br>testamento tekstas</p> -->
<p class="subh">Текст приданого,<br/>которое Алексей Мельников<br/>оставил своей дочери Варваре</p>

<p style="rotate: -2deg">«Отдал в приданое дочери моей Варваре Мошковой недвижимое имение:</p>
</div>
<img width=120% src={dvaras_bw} style="margin-bottom:40px; rotate: -4deg;">


<div class="testamento_tekstas" style="rotate: 1.5deg">
<p>а) со всеми землями, лесами, водами, в мерою всей земли 54 десятины 72 сажени;</p>
</div>

<img width=110% src={pond} style="margin-bottom:40px; rotate: 2deg;">

<div class="testamento_tekstas" style="rotate: -2.5deg">
<p> б) со всеми господскими домами и со всеми другими строениями, с рыбнами  ловлями и другими заведениями, а равно с озимыми, яровыми и огородными посевами.</p>
</div>


<img width=120% src={fruit_garden} style="margin-bottom:40px; rotate: -3deg;">



<div class="testamento_tekstas" style="rotate: 1deg">
<p>Каковое отдаваемое в приданое недвижимое и&nbsp;движимое имение оцениваю&nbsp;по&nbsp;совести</p>
<p>а) недвижимое имение в&nbsp;45&nbsp;000&nbsp;руб.</p>


</div>
<img width=120% src={varvara} style="margin-bottom:40px; rotate: 2deg;">

<div class="testamento_tekstas" style="rotate: 1.5deg">
<p>и б) движимое, в том числе драгоценные вещи в&nbsp;15&nbsp;000&nbsp;руб., что составит с наличными 40 000 руб., всего 100 тысяч рублей серебром»</p>
</div>

<img class="illustration" src={doggo}>
<div class="where-next">
    <!-- Позже, Варвара уже своим наследникам завещает основать в дворе Маркучай музей, чтобы оставленный ей клад служил лишь культурно&#8288;-&#8288;просветительским целям. Этот музей действует и до сих пор. <br><br> -->
{#if globe.location == 12}
    Благодаря командной работе вам получилось найти клад! Ваш клад — подарок.
    <br><br>
    <span class="highlighted-question">А теперь возвращайтесь в музей и получите награду за проделанную работу!</span>
{/if}
</div>



{:else} <!-- LT -->
<h1>Markučių Lobis</h1>
<div class="testamento_tekstas" >
<!-- <p class="subh">Aleksejaus Melnikovo<br>testamento tekstas</p> -->
<p class="subh">Aleksėjaus Melnikovo<br/> dukrai Vavarai<br/> palikto kraičio tekstas</p>

<p style="rotate: -2deg">„Atidaviau savo dukrai Varvarai Moškovai kaip kraitį nekilnojamą turtą — dvarą:</p>
</div>
<img width=120% src={dvaras_bw} style="margin-bottom:40px; rotate: -4deg;">


<div class="testamento_tekstas" style="rotate: 1.5deg">
<p>a) su visomis žemėmis, miškais, vandens telkiniais. Tos žemės iš viso yra 54 dešimtinės 72 sieksniai;</p>
</div>

<img width=110% src={pond} style="margin-bottom:40px; rotate: 2deg;">

<div class="testamento_tekstas" style="rotate: -2.5deg">
<p>b) su visais ponų namais ir su visais kitais pastatais, su žuvų tvenkiniais ir kitomis verslovėmis, o taip pat su žiemkenčių, vasarojaus ir daržovių pasėliais.</p>
</div>


<img width=120% src={fruit_garden} style="margin-bottom:40px; rotate: -3deg;">



<div class="testamento_tekstas" style="rotate: 1deg">
<p>Šį kraičiui skirtą kilnojamą ir nekilnojamą turtą vertinu, kaip liepia sąžinė</p>
<p>a) nekilnojamą turtą 45 000 rub.</p>


</div>
<img width=120% src={varvara} style="margin-bottom:40px; rotate: 2deg;">

<div class="testamento_tekstas" style="rotate: 1.5deg">
<p>ir b) kilnojamą turtą, kartu ir vertingus daiktus — 15 000 rub., kas drauge su grynaisiais pinigais sudaro 40 000 rub., iš viso 100 tūkstančių rublių sidabru“</p>
</div>

<img class="illustration" src={doggo}>
<div class="where-next">
    <!-- Veliau Varvara jau savo palikuoniams įsakys įkurti Markučiu Dvare muziejų, kad paliktas jai lobis tarnautu kultūros ir švietimo tikslams. Muziejus dirba ir iki šiol. <br><br> -->
{#if globe.location == 12}
    Puikaus komandinio darbo dėka jums pavyko surinkti visą dokumentą! Jūsų lobis – tai dovana.
    <br><br>
    <span class="highlighted-question">O dabar užsukite į muziejų ir atsiimkite apdovanojimą už nuveiktą darbą!</span>
{/if}
</div>


{/if}<!-- lang -->
</section>
<div class="ornament" ></div>
{/if}<!-- flipped -->


<!--
"Отдал в приданое дочери моей Варваре Мошковой недвижимое имение: а) со всеми землями, лесами, водами, в мерою всей земли 54 десятины 72 сажени; б) со всеми господскими домами и со всеми другими строениями, с рыбнами  ловлями и другими заведениями, а равно с озимыми, яровыми и огородными посевами. <...> Каковое отдаваемое в приданое недвижимое и движимое имение оцениваю по совести а) недвижимое имение в 45 000 руб. и б) движимое, в том числе драгоценные вещи в 15 000 руб., что составит с наличными 40 000 руб.,   всего 100 тысяч рублей серебром".
-->


<style>


/* :global(body) {
    opacity: 0.5;
} */



.testament_section {
    z-index: 20;
    margin-top: 00px;
    top: 0px;
    background: var(--color_green_medium_dark);
    /* background: var(--color_green_dark); */
    /* border: 1px solid; */
    transition: all 1s;

    transition:
        all 1.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0s,
        transform 1.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0s
        ;
    @starting-style {
        translate: 0 0px;
        /* opacity: 0; */
    }
}

.illustration {
    margin-top: -120px;
}

.where-next {
    color: var(--color-sepia);
    background: var(--color-vm-orange);
    box-shadow: 
        0px 10px 20px -10px var(--color_green_dark),
        0px -100px 150px -100px var(--color-sepia),
        0px -50px 200px -20px var(--color-vm-orange),

        0px 50px 200px -50px #FFFFFF55 inset
        /* 0px -80px 200px -80px var(--color-bg-1) inset */
        ;


}

.highlighted-question {
    color: white;
}


h1 {
    transition:
        scale 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0s
        ;
    @starting-style {
        /* translate: 0 0px; */
    }
}




/* put the marker image inside, position it top left corner, lose the background */
#marker_container {
    position: absolute;
    width:  100%;
    height: 100%;
    /* left: 0;
    top: 0; */
    rotate: -7.5deg;
    /* border: red solid 1px; */
    z-index: 100;
}

#position_marker {
	/* position: absolute; */ 
    /* why not absolute any more? change to foundation/layers? relative seems to work */
    position: relative; 
    width: 50px;
    height: 50px;
    margin: -25px 0 0 -25px;
    border-radius: 25px;
    /* border: 1px red solid; */
    background: #DD445599;
	z-index: 0;
    color: var(--color-sepia);
    font-size: 12px;
    font-family: var(--font-manrope);
    padding: 8px;

    /* what the fuck is this???? */
    /* top: calc(var(--scroll) * 0.1px); */

    left: 10%;
    top: 20%;
}



.progress_block {
    z-index: 20;
    width: 90%;
    margin: -10px 5% 20px 5%;
    height: 80px;
    left: 0;
    padding: 0px;
    border-radius: 6px;
    background: #325939;
    color: var(--color-mdm-sepia);
}

.progress_bar {
    --progress_percent: 0%;
    width: var(--progress_percent);
    height: 80px;
    border-radius: 6px;
    background: var(--color-mdm-sepia);
    background: var(--color_green_medium_dark);
    background: #0c4428;
    transition: 1s;
}

@starting-style {
    .progress_bar {
        width: 0%;
    }
}


.button.apversti {
    /* scale: 2; */
    transform: scale(1)
    /* position: absolute; */
    z-index: 10;
    /* left: 100px */
    width: 90%;
    margin: 0px 5% 0px 5%;
    height: 80px;
    left: 0;
    top: 0;

    font-size: 36px;
    font-weight: 800;

    transition: 0.1s;
    border: none;
    border: 2px solid #FFFFFF05;
    border-radius: 6px;
    /* padding: 40px; */
    /* box-shadow: 0px 0px 40px -10px rgba(230,255,200,0.25); */
    box-shadow: 
        0px 10px 15px -10px var(--color_green_dark),
        inset 0px -10px 30px -25px var(--color_green_dark)
        ;
}







#map_wrapper {
    position: relative;
    margin-bottom: 30px;
    margin-top: 40px;
    perspective: 500px;
    /* transform-style: preserve-3d; */
    z-index: 20;
    /* border: 1px solid purple; */
    /* background-color: aqua; */
    top: 0px;


}


.map_foundation {
    width: 100%;
    /* position: absolute; */
    /* left: -5vw; */
    /* transition: 0.33s cubic-bezier(0.075, 0.62, 0.865, 1); */
    transition: 1s cubic-bezier(0.075, 2.82, 0.165, 1);
    @starting-style {
        /* translate: 0 100px; */
        opacity: 0;
    }
}

.map_foundation.flipped {
        transition: 0.33s cubic-bezier(0.075, 0.62, 0.865, 1);
        opacity: 0.25;
        scale: 0.9;
        /* rotate: 20deg; */
    }



.mapushkin {
    width: 120%;
    left: -6vw;
    top: 4vw;
    position: absolute;
    transition: 1s cubic-bezier(0.075, 1.82, 0.165, 1);
    @starting-style {
        translate: 0 100px;
        /* opacity: 0; */
    }
}


.wall_ornament {
    width: 120vw;
    height: 120vw;
    left: -10vw;
    /* z-index: -200; */
    top: 15vw;
    position: absolute;
    transition: 1.2s cubic-bezier(0.075, 1.82, 0.165, 1);
    /* rotate: 180deg; */
    @starting-style {
        /* top: 30vw; */
        translate: 0 20vw;
        scale: 0.25;
        /* opacity: 0; */
    } 
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
        box-shadow: 0px 30px 50px 30px var(--color-bg-1) ;
    }

    .testament_section {
         margin-top: 0px;
    }

    .mapushkin {
        /* filter: hue-rotate(180deg); */
        width: 120vw;
        left: -10vw;
        top: 8vw;
    }

}


@media (min-width: 1400px) {
    #map_wrapper {
        top: 0px;
        margin: 5vw 0 0 0;
        width: 90vw;
        /* height: 90vw; */
        /* border: red solid 1px; */
        perspective: 1000px;
    }

    .map_and_stuff {
        /* position: absolute; */
        left: 0;
        width: 100vw;
        display: flex;
        flex: 1;
        margin: 40px 0 0 -30vw;
    }

    .legend_section{
        margin: calc(40px + 5vw) 0 0 40px;
        min-width: 760px;
    }

    .testament_section, .ornament {
        /* margin-left: 500px; */
        translate: 200px -100px;
    }

    .button.apversti, .progress_block {
        width: 80%;
        margin: 10px 10% 0 10%;
    }


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
    z-index: 40;



    --x_ratio: 0;
    --y_ratio: 1;
    --map_scroll: 0;
    --transition_time_base: 10.5s;
    /* --map_offset: 0; */
    /* --scroll: 0; */

    will-change: transform, --map_scroll, transition;
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
            calc( var(--map_scroll) * var(--y_ratio) * -0.5px), 
            calc( var(--map_scroll) * abs(var(--x_ratio)) * abs(var(--y_ratio)) * 0.5px))

        /* rotateY( calc( var(--map_scroll) * var(--y_ratio) * 0.1deg)) */
        rotateY( calc( var(--map_scroll) * var(--y_ratio) * 0.2deg))
        rotateX( calc( var(--map_scroll) * var(--x_ratio) * 0.2deg))
        rotateZ( calc( var(--map_scroll) * var(--x_ratio) * var(--y_ratio) * 0.25deg))
        ;


    transition:
        transform calc(abs(var(--x_ratio)) * abs(var(--y_ratio)) * var(--transition_time_base) + 0.16s) ease-out
        ;




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
    transition: filter 2s;
}

.backside {
    /* filter: hue-rotate(220deg); */

    /* transform: scaleX(-1) rotateY(180deg); */
    /* transform: scaleX(-1) rotateY(180deg); */

    transform: rotateY(180deg);
    /* transform: scaleX(-1); */
    /* transform: rotateY(180deg); */
    backface-visibility: hidden;
}


.flipped .museum_piece {
    /* filter: brightness(0.75) contrast(0.75) saturate(2.5) hue-rotate(-30deg); */
    filter: none;
    transition: 
        /* all 20s, */
        filter 1.25s 0.5s,
        ;

    @starting-style {
        filter: brightness(0.75) contrast(0.75) saturate(2.5) hue-rotate(-30deg);
    }
}



/* .map_layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.5s;
} */





/* .map_layer.current { */
.map_layer.current_piece {
    transform-origin: calc(var(--map_offset) * -1px) left;
    transform:
        translate3d(
            calc( var(--scroll) * var(--x_ratio) * 0.05px + 27vw),
            /* 25vw, */
            /* 20vw,  */
            calc( var(--map_offset) * -1px - 25vw - 100px + var(--scroll) * 1.1px), 
            /* calc( var(--map_scroll) * abs(var(--x_ratio)) * abs(var(--y_ratio)) * 0.5px) */
            0
            )


        rotateY( calc( var(--scroll) * var(--y_ratio) * 0.02deg))
        rotateX( calc( var(--scroll) * var(--x_ratio) * 0.02deg))
        rotateZ( calc( var(--scroll) * var(--x_ratio) * var(--y_ratio) * 0.02deg))
        scale(2, 2)
        ;

    /* transition: transform 0.16s; */
}


.current_piece.highlight {
    filter: brightness(1.2) contrast(1.25) saturate(0.5);
    transition: filter 0.75s;
}


.map_layer.flipped {
    transform: rotateY(-180deg);
    filter: none;
    /* transition: transform 2s; */
    /* transition: transform calc(abs(var(--x_ratio)) * abs(var(--y_ratio)) * 2.5s); */
    /* transition: transform calc(2 * 2.5s); */

    /* transition: transform calc( abs(var(--x_ratio))  * 2.5s); */

    /* transform: rotateY(45deg); */
    /* scale: 1.2; */
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


@starting-style {
    .testamento_tekstas, .legend_ul {
        opacity: 0;
        translate: 0 20px;
    }
}


.testamento_tekstas {
    width: 90%;
    /* width: 100vw; */
    max-width: 860px;
    padding: 0;
    margin: 0px 0 40px 0;

    font-size: 28px;
    line-height: 32px;
    letter-spacing: 1px;
    font-style: italic;
    font-weight: 500;

    color:  var(--color-mdm-sepia);

    transition: 0.5s;


    /* overflow-wrap: none; */
    /* word-wrap: none; */
    /* white-space: nowrap; */

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
    transition: 0.5s;
    }


.legend_li {
    /* border: solid #D33F37 2px; */
    display: block;
    box-sizing: border-box;
    /* background-color: teal; */
    /* border: #D33F37 1px solid; */
    /* height: 120px; */
    /* padding: 20px; */




    border-radius: 8px;
    /* vertical-align: middle; */
    padding: 30px 0 30px ;
    /* margin: 0; */
    margin: 30px 20px 30px 0;
    width: 375px;
    vertical-align: middle;
    /* transform: translate(0px, 2px); */

    font-size: 28px;
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





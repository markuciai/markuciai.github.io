<script>
import { onMount } from "svelte";

var bazinga = "300px"

</script>

<div style="
    --bazinga = 150px
"></div>

<!--
So. Have a grid (array of arrays of bools). Iterate over objects (collect all with a style). Push in the desired direction until positioned.

Filtering using svelte reactivity? And then trigger repositioning function.

Look up how to collect parameters from html elements
-->


<div id="scroller">

<div class="scroller_element" id="one" ></div>
<div class="scroller_element" id="two" ></div>
</div>




<style>
:root {
    --module: 100px;
}


#scroller {
    position: relative;
    width: 800px;
    height: 300px;


    border: solid 1px red;
}


.scroller_element {
    width: 100px;
    /* height: 100px; */
    height: var(--bazinga);
    position: relative;
    position: absolute;
    top: 0px;
    right: 0px;



    border: solid 1px blue;
}



#one {
    background: blueviolet;
    top: 100px;
    right: 200px;
}


#two {
    background: teal;
    width: 200px;
}

</style>
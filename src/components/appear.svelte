<script>
// Things... appear with possibly some variables set externally
import { browser } from "$app/environment";
// import { fade, blur, fly, slide, scale } from "svelte/transition";

var loaded = false

if (browser) {
    loaded = true
    console.log("bazinga")
}


</script>



<div class="appear" class:appear_visible={loaded === true} >
<slot />
</div>





<style>
/* on load, a variable is flipped and the second style is added */
.appear {
	opacity: 0.5;
	transform: translate(0, 10px);
	transition: 2s cubic-bezier(0.19, 1, 0.22, 1);
}

.appear_visible {
	opacity: 1;
	transform: translate(0,0);
}

</style>
<script>
// slot injects location phrase while the component selects the carried object based on the last visited 
import { onMount } from 'svelte';
let visited = 0
let language = "LT"

onMount(async () => { 
    visited = Number(localStorage.getItem("visited"));
    language = localStorage.getItem("language");
});



</script>




<section>
	<!-- <img class="illustration" src={task_object}> -->
	<div class="where-next too_early">
        <slot />
		<br><br>
		{#if language == "EN"}
		You're too early! <br>You need to go somewhere else.
		{:else if language == "RU"}
		Вы рановато пришли! <br>Сначала найдите начало пути.
		{:else if language == "LA"}
		Nimis mane es! <br>Alicubi ire necesse est.
		{:else}
		Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
		{/if}
	</div>
</section>

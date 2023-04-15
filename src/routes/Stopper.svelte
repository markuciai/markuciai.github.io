<script>
// slot injects location phrase while the component selects the carried object based on the last visited 
import { onMount } from 'svelte';
let visited = 0
let language = "LT"

onMount(async () => { 
    visited = Number(localStorage.visited);
    language = localStorage.language;
});



</script>




<section>

{#if visited == 0}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Вы рановато пришли! <br>Сначала найдите начало пути.
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 1}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Наверно слуг стоит поискать где-то ещё.
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 2}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		У вас в руках седло.<br>Где может быть человек, которому нужно седло?
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 3}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Удочку надо-бы отнести куда-то к воде.
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 4}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		В руках барахтается скользкая рыба. <br>Где искать кухарку?
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 5}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Несите, скорее, корм курицам. <br> Голодные курицы — злые курицы.
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 6}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Чтобы испечь пирог нужны яйца. <br> А где могут испечь пирог?
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 7}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		А вот пустое ведро нужно наполнить водой.
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 8}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Дивные сады и фруктовые деревья поместья не растут, если их не поливать. 
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 9}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		От запаха орхидей кружит голову. <br>А могилы, которым нужны цветы, могут быть где-то у церквушки.
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 10}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Издалека слышен весёлый собачий лай. <br>Нельзя просто взять и не посмотреть на собачек.
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 11}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Вы, кажется, уже везде были, кроме площадки для крокета.
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if visited == 12}
<!-- <img class="illustration" src={task_object}> -->
<div class="where-next too_early"><slot /><br><br>
{#if language == "EN"}			You're too early! <br>You need to go somewhere else.
{:else if language == "RU"}		Вы везде побывали! Возвращайтесь в музей!
{:else if language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>






{:else} <!-- -1 -->


{/if}
</section>

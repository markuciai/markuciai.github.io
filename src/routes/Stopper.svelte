<script>
// slot injects location phrase
// and the component selects the carried object based on the last visited 
import { onMount } from 'svelte';
import language from './stores/language';
import visited from './stores/visited';

import zero from '$lib/images/illustrations/doggo.png';

import ball from '$lib/images/illustrations/ball.png';
import bowl from '$lib/images/illustrations/bowl.png';
import bucket_empty from '$lib/images/illustrations/bucket-empty.png';
import bucket from '$lib/images/illustrations/bucket.png';
import doggo from '$lib/images/illustrations/doggo.png';
import eggs from '$lib/images/illustrations/eggs.png';
import fish from '$lib/images/illustrations/fish.png';
import fishing_rod from '$lib/images/illustrations/fishing_rod.png';
import flowers from '$lib/images/illustrations/flowers.png';
import fodder from '$lib/images/illustrations/fodder.png';
import saddle from '$lib/images/illustrations/saddle.png';

import final from '$lib/images/illustrations/doggo.png';


</script>



<section>
<br><br>
{#if $visited == 0}
<img class="illustration" src={zero}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br> Find the start of the path.
{:else if $language == "RU"}		Вы рановато пришли! <br>Сначала найдите начало пути.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->		    		Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 1}
<img class="illustration" src={bowl}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Наверно слуг стоит поискать <br>где-то ещё.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 2}
<img class="illustration saddle" src={saddle}>
<div class="where-next too_early saddle-block"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		У вас в руках седло.<br>Где может быть человек, которому нужно седло?
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->		    		Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 3}
<img class="illustration" src={fishing_rod}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Удочку надо-бы отнести куда-то к воде.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 4}
<img class="illustration" src={fish}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		В руках барахтается скользкая рыба. <br>Где искать кухарку?
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 5}
<img class="illustration" src={fodder}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}			    You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Несите, скорее, корм курицам. <br> Голодные курицы — злые курицы.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 6}
<img class="illustration" src={eggs}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Чтобы испечь пирог нужны яйца. <br> А где могут испечь пирог?
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->		    		Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 7}
<img class="illustration" src={bucket_empty}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		А вот пустое ведро нужно наполнить водой.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 8}
<img class="illustration" src={bucket}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Дивные сады и фруктовые деревья поместья не растут, если их не поливать. 
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 9}
<img class="illustration" src={flowers}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		От запаха орхидей кружит голову. <br>А могилы, которым нужны цветы, могут быть где-то у церквушки.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 10}
<img class="illustration" src={doggo}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Издалека слышен весёлый собачий лай. <br>Нельзя просто взять и не посмотреть на собачек.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 11}
<img class="illustration" src={ball}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Вы, кажется, уже везде были, кроме площадки для крокета.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 12}
<img class="illustration" src={final}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Вы везде побывали! Возвращайтесь в музей!
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>






{:else} <!-- -1 -->


{/if}
</section>

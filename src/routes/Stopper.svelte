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
{#if $language == "EN"}		    	You're too early! <br>Find the beginning of the path first.
{:else if $language == "RU"}		Вы рановато пришли! <br>Сначала найдите начало пути.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->		    		Jūs per anksti atėjote. <br>Pirmiausia raskite kelio pradžią.
{/if} </div>
 
{:else if $visited == 1}
<img class="illustration" src={bowl}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You probably should look <br>for the servants somewhere else.
{:else if $language == "RU"}		Наверно слуг стоит поискать <br>где-то ещё.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Tikriausiai tarnų reikėtų  <br>paieškoti kažkur kitur.
{/if} </div>

{:else if $visited == 2}
<img class="illustration saddle" src={saddle}>
<div class="where-next too_early saddle-block"><slot /><br><br>
{#if $language == "EN"}		    	You are holding a saddle. <br>Where could you find someone in need of a saddle?
{:else if $language == "RU"}		У вас в руках седло.<br>Где может быть человек, которому нужно седло?
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->		    		Rankose laikote balną. <br>Kur galėtų būti žmogus, kuriam reikalingas balnas?
{/if} </div>

{:else if $visited == 3}
<img class="illustration" src={fishing_rod}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You should bring the fishing rod <br>somewhere, where there‘s water.
{:else if $language == "RU"}		Удочку надо-бы отнести куда-то к воде.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Meškerę reikėtų nunešti <br>kažkur prie vandens.
{/if} </div>

{:else if $visited == 4}
<img class="illustration" src={fish}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	Slippery fish writhe in your hands. <br>Where could you find a cook?
{:else if $language == "RU"}		В руках барахтается скользкая рыба. <br>Где искать кухарку?
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Slidi žuvis raitosi jūsų rankose. <br>Kur ieškoti virėjos?
{/if} </div>

{:else if $visited == 5}
<img class="illustration" src={fodder}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}			    Quick, bring the chicken feed! <br>Hungry chickens are angry chickens.
{:else if $language == "RU"}		Несите, скорее, корм курицам. <br> Голодные курицы — злые курицы.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Neškite greičiau lesalą vištoms <br>Alkanos vištos – piktos vištos.
{/if} </div>

{:else if $visited == 6}
<img class="illustration" src={eggs}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	Eggs are needed to bake a cake <br>And where can they bake a cake?
{:else if $language == "RU"}		Чтобы испечь пирог нужны яйца. <br>А где могут испечь пирог?
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->		    		Kiaušinių reikia, norint iškepti pyragą <br>O kur gali iškepti pyragą?
{/if} </div>

{:else if $visited == 7}
<img class="illustration" src={bucket_empty}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You need to fill <br>You need to go somewhere else.
{:else if $language == "RU"}		А вот пустое ведро <br>нужно наполнить водой.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Į tuščią kibirą <br>reikia pripilti vandens.
{/if} </div>

{:else if $visited == 8}
<img class="illustration" src={bucket}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You're too early! <br>You need to go somewhere else.
{:else if $language == "RU"}		Дивные сады и фруктовые деревья поместья <br>не растут, если их не поливать. 
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jus atejote per anksti! <br>Pirma reikia rasti kelio pradžia.
{/if} </div>

{:else if $visited == 9}
<img class="illustration" src={flowers}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	The smell of orchids makes you dizzy. <br>The graves, to which you need to take flowers, <br>could be near the chapel.
{:else if $language == "RU"}		От запаха орхидей кружит голову. <br>А могилы, которым нужны цветы, <br>могут быть где-то у церквушки.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Nuo orchidėjų kvapo sukasi galva. <br>O kapai, ant kurių reikia nunešti gėlių, gali būti prie cerkvės.
{/if} </div>

{:else if $visited == 10}
<img class="illustration" src={doggo}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You can hear some happy barking in a distance. <br>One cannot simply ignore the doggos.
{:else if $language == "RU"}		Издалека слышен весёлый собачий лай. <br>Нельзя просто взять и не посмотреть на собачек.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Iš toli girdisi linksmas šunų lojimas. <br>Tiesiog neįmanoma nežvilgtelėti į šuniukus.
{/if} </div>

{:else if $visited == 11}
<img class="illustration" src={ball}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You seem to have been everywhere, <br>except for the croquet court.
{:else if $language == "RU"}		Вы, кажется, уже везде были, <br>кроме площадки для крокета.
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Išskyrus kroketo aikštelę,  <br>jūs jau atrodo visur apsilankėte.
{/if} </div>

{:else if $visited == 12}
<img class="illustration" src={final}>
<div class="where-next too_early"><slot /><br><br>
{#if $language == "EN"}		    	You have been everywhere. <br>Return to the museum!
{:else if $language == "RU"}		Вы везде побывали! <br>Возвращайтесь в музей!
{:else if $language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    	Jūs jau aplankėte visas vietas. <br>Grįžkite į muziejų.
{/if} </div>






{:else} <!-- -1 -->


{/if}
</section>

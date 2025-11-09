<script>
// slot injects location phrase
// and the component selects the carried object based on the last visited 




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



let illustrations = [zero, bowl, saddle, fishing_rod, fish, fodder, eggs, bucket_empty, bucket, flowers, doggo, ball, final]

</script>



<section>

<img class="illustration" src={illustrations[globe.progress]} class:saddle={globe.progress == 2}>
<div class="where-next"
	class:too_early={globe.progress < globe.location}
	class:already_visited={globe.progress > globe.location}
	class:saddle-block={globe.progress == 2}
	>

<p><slot/></p>

<p>
{#if globe.progress < globe.location}
{#if globe.language == "EN"}		   	You're too early!
{:else if globe.language == "RU"}		Вы рановато пришли!
{:else if globe.language == "LA"}		Nimis mane es!
{:else}	<!-- LT-->		   		 		Per anksti atėjote!
{/if}

{:else if globe.progress > globe.location}
{#if globe.language == "EN"}		   	You've already completed this location!
{:else if globe.language == "RU"}		Тут уже разобрались!
{:else if globe.language == "LA"}		hmm
{:else}	<!-- LT-->		   		 		Čia jau susitvarkėt!
{/if}

{/if}
</p>


<br>
<p style="font-style: italic; font-weight: bold;">

{#if globe.progress == 0}
{#if globe.language == "EN"}		   	Find the main entrance into the park first.
{:else if globe.language == "RU"}		Сначала найдите главный вход в парк.
{:else if globe.language == "LA"}		Alicubi ire necesse est.
{:else}	<!-- LT-->		   		 		Raskite kur buvo pagrindinis&nbsp;įėjimas į&nbsp;Markučių dvaro parką.
{/if}
 
{:else if globe.progress == 1}
{#if globe.language == "EN"}		    You probably should look <br>for the servants somewhere else.
{:else if globe.language == "RU"}		Наверно слуг стоит поискать <br>где-то ещё.
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			   		 	Tikriausiai tarnų reikėtų  <br>paieškoti kažkur kitur.
{/if}

{:else if globe.progress == 2}
{#if globe.language == "EN"}		    You are holding a saddle. <br>Where could you find someone in need of a saddle?
{:else if globe.language == "RU"}		У вас в руках седло.<br>Где может быть человек, которому нужно седло?
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->		    			Rankose laikote balną. <br>Kur galėtų būti žmogus, kuriam reikalingas balnas?
{/if}

{:else if globe.progress == 3}
{#if globe.language == "EN"}		   	You should bring the fishing rod <br>somewhere, where there‘s water.
{:else if globe.language == "RU"}		Удочку надо-бы отнести куда-то к воде.
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    		Meškerę reikėtų nunešti <br>kažkur prie vandens.
{/if}

{:else if globe.progress == 4}
{#if globe.language == "EN"}		    Slippery fish writhe in your hands. <br>Where could you find a cook?
{:else if globe.language == "RU"}		В руках барахтается скользкая рыба. <br>Где искать кухарку?
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			   		 	Slidi žuvis raitosi jūsų rankose. <br>Kur ieškoti virėjos?
{/if}

{:else if globe.progress == 5}
{#if globe.language == "EN"}			Quick, bring the chicken feed! <br>Hungry chickens are angry chickens.
{:else if globe.language == "RU"}		Несите, скорее, корм курицам. <br> Голодные курицы — злые курицы.
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->				    	Neškite greičiau lesalą vištoms <br>Alkanos vištos – piktos vištos.
{/if}

{:else if globe.progress == 6}
{#if globe.language == "EN"}		    Eggs are needed to bake a&nbsp;cake <br>And where can they bake a&nbsp;cake?
{:else if globe.language == "RU"}		Яйца нужны чтобы испечь&nbsp;пирог. <br>А где могут испечь&nbsp;пирог?
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->		    			Kiaušinių reikia, norint iškepti pyragą. <br>O kur gali iškepti&nbsp;pyragą?
{/if}

{:else if globe.progress == 7}
{#if globe.language == "EN"}		    You need to fill <br>the empty bucket with water.
{:else if globe.language == "RU"}		А вот пустое ведро <br>нужно наполнить водой.
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    		Į tuščią kibirą <br>reikia pripilti vandens.
{/if}

{:else if globe.progress == 8}
{#if globe.language == "EN"}		    Manor's beautiful gardens <br>don't grow if you don't water them.
{:else if globe.language == "RU"}		Дивные сады поместья <br>не растут, если их не поливать. 
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    		Nuostabūs dvaro sodai <br>neaugs, jeigu jų nelaistysi.
{/if}

{:else if globe.progress == 9}
{#if globe.language == "EN"}		    The smell of orchids makes you dizzy. <br>The graves, to which you need to take flowers, <br>could be near the chapel.
{:else if globe.language == "RU"}		От запаха орхидей кружит голову. <br>А могилы, которым нужны цветы, <br>могут быть где-то у церквушки.
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    		Nuo orchidėjų kvapo sukasi galva. <br>O kapai, ant kurių reikia nunešti gėlių, gali būti prie cerkvės.
{/if}

{:else if globe.progress == 10}
{#if globe.language == "EN"}		    You can hear some happy barking in a distance. <br>One cannot simply ignore the doggos.
{:else if globe.language == "RU"}		Издалека слышен весёлый собачий лай. <br>Нельзя просто взять и не посмотреть на собачек.
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    		Iš toli girdisi linksmas šunų lojimas. <br>Tiesiog neįmanoma nežvilgtelėti į šuniukus.
{/if}

{:else if globe.progress == 11}
{#if globe.language == "EN"}		    You seem to have been everywhere, <br>except for the croquet court.
{:else if globe.language == "RU"}		Вы, кажется, уже везде были, <br>кроме площадки для крокета.
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    		Išskyrus kroketo aikštelę, <br>jūs jau, berods, visur apsilankėte.
{/if}

{:else if globe.progress == 12}
{#if globe.language == "EN"}		    You have been everywhere. <br>Return to the museum!
{:else if globe.language == "RU"}		Вы везде побывали! <br>Возвращайтесь в музей!
{:else if globe.language == "LA"}		Nimis mane es! <br>Alicubi ire necesse est.
{:else}	<!-- LT-->			    		Jūs jau aplankėte visas vietas. <br>Grįžkite į muziejų!
{/if}


{:else} <!-- -1 -->
{/if}

</p>

</div>
</section>

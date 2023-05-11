<script>
import { onMount } from 'svelte';
import Offer from './Offer.svelte';
import Scroller from '../scroller.svelte';

let language = "LT"



onMount(async () => { 
	language = localStorage.language;
});

</script>

<svelte:head>
{#if language == "EN"}
	<title>Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else if language == "RU"}
	<title>Клад Маркучай</title>
	<meta name="description" content="Квест" />
{:else if language == "LA"}
	<title>Markučiai Treasure</title>
	<meta name="description" content="Quest" />
{:else}
	<title>Markučių Lobis</title>
	<meta name="description" content="Žaidimas" />
{/if}
</svelte:head>



<Offer />
<br>


<!-- <Scroller /> -->
<!-- blabl -->

 {#if 0 == 1}
<section>
{#if language == "EN"}

English

{:else if language == "RU"}

<br />
<h1>Markučių Lobis</h1>
<p class="subh">квест-игра</p>
<article>
Усадьбу Маркутье в 1867 г., для жены и пятерых детей, построил инженер железных дорог Алексей Мельников. Кроме господского дома, здесь был устроен английский парк, посажены фруктовые сады, выкопаны пруды и колодец, построены дом для слуг, конюшня, оранжерея, пекарня, ледник с птичником, кухня, площадка для крокета и тенниса.
<br><br>
Когда дети выросли, усадьба в 270 гектар была подарена старшей дочери Варваре. В 1883 г. в Маркутье приехал сын Александра Пушкина. Григорий и Варвара обвенчались и прожили вместе 22 года. Много путешествовали, а до 1899 г. жили на две усадьбы: здесь и в Михаловском. В Вильне они занимались благотворительностью и содержали детский приют “Ясли Иисуса”.
<br><br>
После смерти Григория, Варвара Пушкина прожила еще 30 лет, но замуж больше не выходила. До самых последних своих дней жизни она мечтала исполнить волю своего мужа - открыть музей в усадьбе, чтобы все желающие могли увидеть вещи поэта. Варвара Пушкина умерла в 1935 г. и похоронена рядом с Григорием Александровичем.
<br><br>
Представьте себе, что вы совершили путешествие в прошлое, и видите усадьбу Маркутье в прежней ее красе. Попробуйте разгадать 12 загадок, собрать таинственный документ и благодаря его содержанию, найти сокровище усадьбы.
</article>


{:else if language == "LA"}

Lorem ipsum dolor sit amet

{:else} <!-- LT -->

<br>
<h1>Markučių Lobis</h1>
<p class="subh">Markučių dvaro muziejaus<br>orientacinis žaidimas</p>
<article>
Markučių dvarą 1867 m. savo žmonai ir penkiems vaikams pastatė geležinkelių inžinierius Aleksejus Melnikovas. Be pagrindinio ponų namo buvo įkurtas angliškas parkas, pasodintas vaismedžių sodas, iškasti tvenkiniai ir šulinys, pastatytos arklidės, oranžerija, duonkepė (kepyklėlė), tarnų namelis, ledainė, vištidė, virtuvė, įrengtos kroketo ir teniso žaidimų aikštelės.
<br><br>
Kai vaikai užaugo, dvaras ir jo 270 hektarų valda buvo padovanota vyriausiajai dukrai Varvarai (Barborai). 1883 m. į Markučius atvyko žymaus rusų poeto Aleksandro Puškino sūnus Grigorijus. Jie su Varvara susituokė ir kartu pragyveno 22 metus. Abu daug keliavo, o iki 1899 m. pakaitomis gyveno tai Markučių, tai Michailovsko dvaruose. Vilniuje jie daug laiko ir lėšų skyrė labdarai, išlaikė vaikų prieglaudą „Jasli“.
<br><br>
Po Grigorijaus mirties Varvara dar pragyveno 30 metų, tačiau daugiau nebeištekėjo. Iki pat mirties ji svajojo išpildyti savo velionio vyro valią ir dvare įkurti muziejų, kuriame visi norintys galėtų pamatyti žymaus poeto Aleksandro Puškino daiktus. Varvara mirė 1935 m. ir buvo palaidota šalia savo vyro Grigorijaus. 
<br><br>
O dabar įsivaizduokite, kad jūs laiko mašina nusikeliate į praeitį ir lankotės Markučių dvare jo klestėjimo laikais. Jums reikės atlikti 12 užduočių, kurios padės surinkti paslaptingą senovinį dokumentą ir rasti Markučių dvaro lobį.		
</article>


{/if} <!-- Station Languages-->
</section>



{/if}









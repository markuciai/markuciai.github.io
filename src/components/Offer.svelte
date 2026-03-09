<script>

import head_signs from '$lib/images/illustrations/splash.png';
import instructions from '$lib/images/illustrations/instructions.png';
import steps from '$lib/images/illustrations/steps.png';
import doggo from '$lib/images/illustrations/doggo.png';
import dvaras from '$lib/images/archival/mdvaras.jpg';


import varvara from '$lib/images/archival/varvara.jpg';
</script>
    


<section>
<img class="map_piece_header_illustration" src={head_signs}>






{#if globe.language == "EN"}

<h1>Markučiai Manor Treasure</h1>
<p class="subh">A treasure hunt game<br> trough the Markučiai manor park</p>

<article>
<!-- Did you know that there's a treasure in Markučiai?<br/><br/> -->
The Markučiai Manor Museum presents a fun educational program for small groups and individual visitors. 
<br/><br/>
Start at the museum and visit all the designated points in order, learn about the history of Markučiai Manor, and win the orientation game.
</article>
<!-- <br><br> -->
<article>
QR code plaques are placed throughout the park.
<!-- Plaques containing QR codes are scattered troughout the park. Starting at the museum, visit every quest point in the correct order to dive into the museum's history and get a small prize. -->

</article>
<img src={instructions} width="100%" />

<article>
Each player (or team) will need a mobile phone or tablet with internet access.No additional apps are required. 
</article>

<img src={steps} width="100%" />

<article>
The game can be played in Lithuanian, English and Russian.
</article>

<img class="illustration" src={doggo}>


<div class="where-next">
<!-- If you're already at the park during museum work hours and wish to play immediately — visit the museum and ask at the front desk.
<br><br> -->
And if you wish to book an educational program for a group <a href="mailto:edukacija.markuciai@vilniausmuziejus.lt">email us</a>.
<br><br>
<a href="https://md.vilniausmuziejus.lt/#educations">More information about educational programs at Markučiai Manor</a>.
</div>



<h1 >What manor?</h1>

<article>
Markučiai Manor has stood here since the XIX century, specifically since 1867. 
</article>
<img width=98% src={dvaras}>

<article>
<br />
Alexey Melnikov, a railway engineer of the then Tsarist Russia, built the manor for his family – two sons and three daughters. In the XIX century, the manor grounds featured an English park, an orchard, ponds, a well, wooden stables, an orangery, a bakery, a servants' house, an icehouse, a chicken coop, a kitchen, and a croquet field. 
</article>

<article>
The manor and its vast estate were left as a dowry to Alexey's eldest daughter, Varvara. 
</article>

<img width=120% src={varvara} style="margin-bottom:40px; rotate: 2deg;">

<article>
Today, only the main residential building – the villa – remains. We invite you to travel back to the 19th century and visit the manor, where life was very different from the XXI century. 
</article>
<article>
To learn more about manor life, you will complete 12 tasks to collect an ancient document and find the Markučiai treasure.
</article>






{:else if globe.language == "RU"}

<h1>Сокровище Поместья Маркучай</h1>
<p class="subh">Ориентационная игра <br> по парку усадьбы Маркучай</p>

<article>
<!-- А вы знали, что в Маркутье спрятан клад? <br/><br/> -->
Музей-усадьба Маркучяй представляет веселую образовательную программу для небольших групп и индивидуальных посетителей.
<br/><br/>
Для начала зайдите в музей, потом по очереди посетите все намеченные точки, познакомьтесь с историей усадьбы Маркучяй и выиграйте ориентировочную игру. 
</article>
<!-- <br><br> -->

<img src={instructions} width="100%" />
<article>
На территории парка размещены таблички с QR-кодами. 
</article>


<article>
Каждому игроку (или команде игроков) понадобится мобильный телефон или планшет с доступом к интернету. Никаких дополнительных приложений устанавливать не нужно. 
</article>

<img src={steps} width="100%" />
<article>
Играть можно на литовском, английском или русском языках.
</article>

<img class="illustration" src={doggo}>

<div class="where-next">
<!-- Если вы уже в парке (в часы работы музея) и хотите поиграть прямо сейчас — заходите в музей и обращайтесь в кассу.
<br><br> -->
Чтобы заранее заказать образовательную программу пишите на <a href="mailto:edukacija.markuciai@vilniausmuziejus.lt">электропочту</a>.
<br><br>
<a href="https://md.vilniausmuziejus.lt/#educations">Подробная информация об образовательных программах усадьбы Маркучяй</a>
</div>

<h1 >А что за поместье?</h1>

<article>
Усадьба Маркучяй стоит на этом месте с XIX века, а точнее — с 1867 г.
</article>
<img width=98% src={dvaras}>

<article>
<br />
Тогдашний инженер железных дорог царской России Алексей Мельников построил усадьбу Маркучяй для своей семьи — двух сыновей и трех дочерей. В XIX веке на территории усадьбы был разбит английский парк, посажен фруктовый сад, выкопаны пруды и колодец, построены деревянная конюшня, оранжерея, пекарня, домик для прислуги, ледник, курятник, кухня, оборудована площадка для крокета.
</article>

<article>
Усадьбу и еe огромные владения — все Маркучяй и часть других районов — в качестве приданого получила старшая дочь Алексея, Варвара. 
</article>

<img width=120% src={varvara} style="margin-bottom:40px; rotate: 2deg;">

<article>
Сегодня от огромных владений усадьбы Маркучяй и пристроек остался только жилой усадебный дом — вилла. Поэтому сейчас мы хотим пригласить вас перенестись во времени в XIX век и посетить усадьбу, жизнь в которой была совсем иной, нежели в XXI веке.
</article>
<article>
Чтобы лучше узнать усадебную жизнь XIX века, вам предстоит выполнить 12 заданий, которые помогут собрать старинный документ и найти сокровище усадьбы Маркучяй.
</article>






{:else if globe.language == "LA"}

<div class="where-next">
    Ut in educatione “MARKUČIŲ LOBIS”:<br><a href="mailto:edukacija.markuciai@vilniausmuziejus.lt">edukacija.markuciai@vilniausmuziejus.lt</a>
</div>







{:else} <!-- LT -->


<h1>Markučių Dvaro Lobis</h1>
<p class="subh">ORIENTACINIS ŽAIDIMAS<br>PO MARKUČIŲ DVARO PARKĄ</p>

<article>
Markučių dvaro muziejus nedidelėms grupėms ir pavieniams lankytojams pristato smagią edukacinę programą.
<br><br>
Pradėkite nuo muziejaus ir aplankykite iš eilės visus numatytus taškus, susipažinkite su Markučių dvaro istorija ir laimėkite orientacinį žaidimą.
</article>
<!-- <br><br> -->

<img  src={instructions} width="100%" />

<article>
Parko teritorijoje išdėliotos lentelės su QR-kodais. Kiekvienam žaidėjui (ar žaidėjų komandai) reikės mobilaus telefono arba planšetinio kompiuterio su interneto prieiga. 
<br><br>
Jokių papildomų programėlių instaliuoti nereikia.
</article>

<img src={steps} width="100%" />

<article>
<p>
<!-- Žaisti galima lietuvių, anglų, rusų arba ukrainiečių kalbomis. -->
Žaisti galima lietuvių, anglų arba rusų kalbomis.
</p>
</article>

<img class="illustration" src={doggo}>





<div class="where-next">
<!-- Jeigu jau atvykote į Markučių dvaro parką (muziejaus darbo metu) ir norite išbandyti orientacinį žaidimą, kreipkitės į muziejaus kasą.
<br><br> -->
Norėdami iš anksto užsakyti orientacinį žaidimą grupei, rašykite <a href="mailto:edukacija.markuciai@vilniausmuziejus.lt">elektropaštu</a>.
<br><br>
<a href="https://md.vilniausmuziejus.lt/#educations">Daugiau informacijos apie Markučių dvare vykdomas edukacijas</a>.
</div>

<h1 >O kas per dvaras?</h1>

<article>
Markučių dvaras stovi šioje vietoje nuo 1867 m. – nuo XIX amžiaus.
</article>
<img width=98% src={dvaras}>

<article>
<br />
Tuometinės carinės Rusijos geležinkelių inžinierius Aleksejus Melnikovas Markučių dvarą pastatė savo šeimai – dviems sūnums ir trims dukterims. Dvaro teritorijoje XIX a. buvo įkurtas angliškas parkas, pasodintas vaismedžių sodas, iškasti tvenkiniai ir šulinys, pastatytos medinės arklidės, oranžerija, duonkepė (kepyklėlė), tarnų namelis, ledainė, vištidė, virtuvė, įrengta kroketo aikštelė.
</article>

<article>
Dvaras ir jo didžiulė valda — visi Markučiai ir dalis kitų rajonų — buvo palikti kaip kraitis vyriausiajai Aleksejaus dukrai Varvarai. 
</article>

<img width=120% src={varvara} style="margin-bottom:40px; rotate: 2deg;">

<article>
Šiandien, iš didelės Markučių dvaro valdos ir priestatų liko tik gyvenamojo dvaro pastatas — vila. Todėl dabar norime jus pakviesti nusikelti laiku į XIX amžių ir apsilankyti dvare, kurio gyvenimas buvo itin kitoks nei 21-ajame amžiuje.
</article>
<article>
Tam, kad geriau pažintumėte XIX a. dvaro gyvenimą, Jums reikės atlikti 12 užduočių, kurios padės surinkti senovinį dokumentą ir rasti Markučių lobį.
</article>





{/if}
</section>




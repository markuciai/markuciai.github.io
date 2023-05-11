<script>
import language from "../stores/language";
import head_signs from '$lib/images/illustrations/head_signs.png';
import instructions from '$lib/images/illustrations/instructions.png';
import doggo from '$lib/images/illustrations/doggo.png';

</script>
    


<section>
{#if $language == "EN"}


<div class="where-next">
    Užsakyti edukacija “MARKUČIŲ LOBIS”:<br><a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a>

</div>


{:else if $language == "RU"}

<img class="illustration" src={head_signs}>

<h1>Клад Маркучай</h1>
<p class="subh">Ориентационный квест <br> по парку Маркутского двора</p>

<article>
А вы знали, что в Маркутье спрятан клад? <br/><br/>
Музей Двора Маркучай представляет образовательную программу и увлекательное приключение для небольших групп или одиночных игроков.
</article>
<!-- <br><br> -->
<article>
По парку разбросаны таблички с кьюар-кодами. Начните в музее и посетите все точки квеста в нужном порядке чтобы получить приз и прикоснуться к истории поместья.
</article>

<img  src={instructions} width="100%" />

<article>
Для игры каждому игроку понадобится телефон или планшет подключённый к интернету (чтобы сканировать кьюар-коды). Никаких дополнительных приложений ставить не нужно.

<br/><br/>Играть можно на двух языках: литовском и русском.
</article>

<img class="illustration" src={doggo}>

<div class="where-next">
Если вы уже в парке (в часы работы музея) и хотите поиграть прямо сейчас — заходите в музей и обращайтесь в кассу.
<br><br>
А чтобы заранее заказать эдукацию для групп пишите на <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a>.
</div>


{:else if $language == "LA"}

<div class="where-next">
    Ut in educatione “MARKUČIŲ LOBIS”:<br><a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a>
</div>

{:else}

<img class="illustration" src={head_signs}>

<h1>Markučių Lobis</h1>
<p class="subh">ORIENTACINIS ŽAIDIMAS<br> PO MARKUČIŲ DVARO PARKĄ</p>

<article>
Ar žinojote, kad Markučiuose paslėptas lobis?<br/><br/>
Markučių dvaro muziejus nedidelėms grupėms ir pavieniams žaidėjams pristato smagią pramogą ir edukacinę programą.
</article>
<!-- <br><br> -->
<article>
    Parko teritorijoje yra išdėliotos lentelės su QR-kodais. Pradėkite nuo muziejaus ir aplankykite iš eilės visus orientaciniame žaidime numatytus taškus, susipažinkite su dvaro istorija ir laimėkite prizą. 
</article>

<img  src={instructions} width="100%" />

<article>
    Kiekvienam žaidėjui (ar žaidėjų komandai) reikės mobilaus telefono arba planšetinio kompiuterio su interneto prieiga. Jokių papildomų programėlių instaliuoti nereikia.

<br/><br/>Žaidimas galimas dvim kalbomis: lietuvių ir rusų.
</article>

<img class="illustration" src={doggo}>

<div class="where-next">
    Jeigu jau atvykote į Markučių dvaro parką (muziejaus darbo metu) ir norite išbandyti orientacinį žaidimą, kreipkitės į muziejaus kasą.
<br><br>
Norėdami iš anksto užsakyti orientacinį žaidimą grupei, rašykite <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a>.
</div>



{/if}
</section>
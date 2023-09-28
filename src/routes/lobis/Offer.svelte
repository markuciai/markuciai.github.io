<script>
import language from "../stores/language";
import head_signs from '$lib/images/illustrations/head_signs.png';
import instructions from '$lib/images/illustrations/instructions.png';
import doggo from '$lib/images/illustrations/doggo.png';

</script>
    


<section>
<img class="illustration" src={head_signs}>






{#if $language == "EN"}

<h1>Markučiai treasure</h1>
<p class="subh">A treasure hunt game<br> trough the Markučiai manor park</p>

<article>
Did you know that there's a treasure in Markučiai?<br/><br/>
Markučiai manor museum presents a fun adventure (and an educational program) for single players or small groups.
</article>
<!-- <br><br> -->
<article>
Plaques containing QR codes are scattered troughout the park. Starting at the museum, visit every quest point in the correct order to dive into the museum's history and get a small prize.
</article>

<img  src={instructions} width="100%" />

<article>
To play, a player will need a phone or tablet with an internet connection (to scan QR-codes and open web pages). There's no need to install any additional apps.

<br/><br/>It's possible to play in three languages: english, russian and lithuanian.
</article>

<img class="illustration" src={doggo}>

<div class="where-next">
If you're already at the park during the museum work hours and you wish to play right now — visit the museum and ask at the front desk.
<br><br>
And if you wish to book an educational program for a group, email at: <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a>.
</div>







{:else if $language == "RU"}

<h1>Клад Маркутья</h1>
<p class="subh">Ориентационный квест <br> по парку усадьбы Маркутья</p>

<article>
А вы знали, что в Маркутье спрятан клад? <br/><br/>
Музей-усадьба Маркучай представляет образовательную программу и увлекательное приключение для небольших групп или одиночных игроков.
</article>
<!-- <br><br> -->
<article>
По парку разбросаны таблички с кьюар-кодами. Начните в музее и посетите все точки квеста в нужном порядке чтобы получить приз и прикоснуться к истории поместья.
</article>

<img  src={instructions} width="100%" />

<article>
Для игры каждому игроку понадобится телефон или планшет подключённый к интернету (чтобы сканировать кьюар-коды). Никаких дополнительных приложений ставить не нужно.

<br/><br/>Играть можно на трёх языках: английском, русском и литовском.
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







{:else} <!-- LT -->


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

<br/><br/>Žaidimas galimas angliškai, rusiškai ir lietuviškai.
</article>

<img class="illustration" src={doggo}>

<div class="where-next">
    Jeigu jau atvykote į Markučių dvaro parką (muziejaus darbo metu) ir norite išbandyti orientacinį žaidimą, kreipkitės į muziejaus kasą.
<br><br>
Norėdami iš anksto užsakyti orientacinį žaidimą grupei, rašykite <a href="mailto:edukacija@markuciudvaras.lt">edukacija@markuciudvaras.lt</a>.
</div>



{/if}
</section>
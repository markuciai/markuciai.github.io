<script>
import language from "../stores/language";
    

</script>
    


<section>
{#if $language == "EN"}


<div class="where-next">
    Užsakyti edukacija “MARKUČIŲ LOBIS”:<br><a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a>

</div>


{:else if $language == "RU"}

[иллюстрация для верха]

<h1>Клад Маркутья</h1>
<p class="subh">Ориентационный квест <br> по парку Маркутского двора</p>

[иллюстрация-герой 1]
<h2>А вы знали, что в Маркутье спрятан клад? </h2>
<article>
Музей Двора Маркутья представляет образовательную программу и увлекательное приключение для небольших групп или одиночных игроков.
</article>
<!-- <br><br> -->
[фото как люди играют]
<article>
По парку разбросаны таблички с кьюар-кодами. Начните в музее и посетите все точки квеста в нужном порядке чтобы получить приз и прикоснуться к истории поместья.
</article>
[инструкция]
<article>
Для игры каждому игроку понадобится телефон или планшет подключённый к интернету (чтобы сканировать кьюар-коды). Никаких дополнительных приложений ставить не нужно. Играть можно на четрёх языках: литовском, английском, русском или латыни.
</article>

[иллюстрация-герой 2]

<div class="where-next">
Если вы уже в парке (в часы работы музея) и хотите поиграть прямо сейчас — заходите в музей и обращайтесь в кассу.
<br><br>
А чтобы заранее заказать эдукацию для групп пишите на <a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a>.
</div>


{:else if $language == "LA"}

<div class="where-next">
    Ut in educatione “MARKUČIŲ LOBIS”:<br><a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a>
</div>

{:else}

<div class="where-next">
    Užsakyti edukacija “MARKUČIŲ LOBIS”:<br><a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a>

</div>



{/if}
</section>
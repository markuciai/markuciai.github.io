<script>
    import { onMount } from 'svelte';
    let visited = 0
    let language = "LT"
    
    onMount(async () => { 
        visited = Number(localStorage.getItem("visited"));
        language = localStorage.getItem("language");
    });
    
    
    //
    </script>
    
    
    
    
<section>
{#if language == "EN"}



<!-- <img class="illustration" src={task_object}> -->
UŽSAKYTI EDUKACIJA “MARKUČIŲ LOBIS”
<div class="where-next">

    <br><br>

    Užsakyti edukacija “MARKUČIŲ LOBIS”:<br><a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a>
    
</div>


{:else if language == "RU"}
<h1 >Клад Маркутья</h1>
<p class="subh">Ориентационный квест по парку Маркутского двора</p>


<h2>А вы знали, что в Маркутье закопан клад? </h2>

Образовательная программа — и увлекательное приключение для небольших групп или одиночных игроков.
<br><br>
Начните в музее и посетите все точки квеста в нужном порядке чтобы получить приз и прикоснуться к истории поместья.

<div class="where-next">
Если вы уже в парке (в часы работы музея) и хотите поиграть прямо сейчас — заходите в музей и обращайтесь в кассу.
<br><br>
А чтобы заранее заказать эдукацию для групп пишите на <a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a>.
</div>


{:else if language == "LA"}
Salve
{:else}

<div class="where-next">
    Užsakyti edukacija “MARKUČIŲ LOBIS”:<br><a href="mailto:edukacija@puskinas.lt">edukacija@puskinas.lt</a>

</div>


{/if}
</section>
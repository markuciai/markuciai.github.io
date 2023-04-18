<script>
import language from './stores/language';
import dvaras from '$lib/images/archival/mdvaras.jpg';


</script>

<svelte:head>
	<title>MDM</title>
	<meta name="description" content="Markučių dvaro muziejus" />
</svelte:head>



<section>
<h1>
{#if $language == "EN"}			Markučiai manor museum
{:else if $language == "RU"}	Музей усадьбы Маркутья
{:else if $language == "LA"}	Museum manerium Markucis
{:else}							Markučių dvaro&nbsp;muziejus
{/if}
</h1>


<a href="/lobis">Lobis:</a>
<ol start="0">
	<li><a href="/lobis/start_1865">Pradžia</a></li>
	<li><a href="/lobis/kryzius_1880">Kryžius</a></li>
	<li><a href="/lobis/namelis_1855">Namelis</a></li>
	<li><a href="/lobis/arklides_1935">Arklides</a></li>
	<li><a href="/lobis/tvenkiniai_1917">Tvenkiniai</a></li>
	<li><a href="/lobis/virtuve_1899">Virtuvė</a></li>
	<li><a href="/lobis/vistide_1877">Vištidė ir ledainė </a></li>
	<li><a href="/lobis/duonkepe_1868">Duonkepė</a></li>
	<li><a href="/lobis/sulinys_1867">Šulinys</a></li>
	<li><a href="/lobis/oranzerija_1875">Oranžerija</a></li>
	<li><a href="/lobis/cerkve_1903">Cerkvė</a></li>
	<li><a href="/lobis/suniukai-1883">Šuniukai</a></li>
	<li><a href="/lobis/kroketas_1867">Kroketo aikštelė</a></li>
	<li><a href="/lobis/finish_1935">Muziejus (Pabaiga)</a></li>
</ol>

<br><br>
<img width=98% src={dvaras}>


</section>







<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: white;
		border-radius: 5px;
		box-shadow: 0 20px 20px -15px rgba(0,0,0, 0.4);
		font-size: 16pt;
	}

	h1 {
		width: 90%;
		font-weight: bold;
		/* font-size: clamp(80px, 24vw, 128px); */
		font-size: clamp(40px, 12vw, 64px);
        /* line-height: 0px; */
		color: #D33F37;
        /* text-align: left; */
	}

	article {
		padding: 0px clamp(20px, 10vw, 80px) 20px clamp(10px, 5vw, 40px);
	}

	.highlighted-question {
		font-style: italic;
		font-weight: bold;
		color: #D33F37;
	}

	.where-next {
		background-color: #EEDC83;
		color: black;
		width: 105%;
		box-sizing: border-box;
		padding: clamp(40px, 12.5vw, 80px) clamp(40px, 10vw, 120px) clamp(40px, 10vw, 120px) clamp(20px, 5vw, 80px);
		margin: 0px 0 20px 0;
		box-shadow: 0 20px 20px -15px rgba(0,0,0, 0.4);
		border-radius: 5px;
		

		font-size: 24px;
		font-size: clamp(24px, 6vw, 32px);

	}

	.illustration {
		width: clamp(320px, 100vw, 640px);
		z-index: 10;
		margin: clamp(-160px, -25vw, -80px) 0 clamp(-80px, -12.5vw, -40px) 0;
		user-select: none;
		pointer-events: none;
	}


	.appendix {
		color: white;
		font-size: 16pt;
		padding: 20px;
	}


</style>

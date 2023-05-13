<script>
import language from './stores/language';
import dvaras from '$lib/images/archival/mdvaras.jpg';
import map_foundation from '$lib/images/map/foundation.png';

</script>

<svelte:head>
	<title>MDM</title>
	<meta name="description" content="Markučių dvaro muziejus" />
</svelte:head>



<section>
<h1>
{#if $language == "EN"}			Markučiai manor museum
{:else if $language == "RU"}	Музей-усадьба Маркучай
{:else if $language == "LA"}	Museum manerium Markucis
{:else}							Markučių dvaro&nbsp;muziejus
{/if}
</h1>

<!-- Debug

<p><a href="https://www.markuciudvaras.lt/lobis">Lobis</a> → <a href="/lobis">Lobis:</a></p>
<ol start="0">
	<li><a href="https://www.markuciudvaras.lt/lobis/start_1865">Startas</a>→ <a href="/lobis/start_1865">Startas</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/kryzius_1880">Kryžius</a> → <a href="/lobis/kryzius_1880">Kryžius</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/namelis_1855">Namelis</a> → <a href="/lobis/namelis_1855">Namelis</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/arklides_1935">Arklides</a> → <a href="/lobis/arklides_1935">Arklides</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/tvenkiniai_1917">Tvenkiniai</a> → <a href="/lobis/tvenkiniai_1917">Tvenkiniai</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/virtuve_1899">Virtuvė</a> → <a href="/lobis/virtuve_1899">Virtuvė</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/vistide_1877">Vištidė</a> → <a href="/lobis/vistide_1877">Vištidė</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/duonkepe_1868">Duonkepė</a> → <a href="/lobis/duonkepe_1868">Duonkepė</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/sulinys_1867">Šulinys</a> → <a href="/lobis/sulinys_1867">Šulinys</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/oranzerija_1875">Oranžerija</a> → <a href="/lobis/oranzerija_1875">Oranžerija</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/cerkve_1903">Cerkvė</a> → <a href="/lobis/cerkve_1903">Cerkvė</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/suniukai-1883">Šuniukai</a> → <a href="/lobis/suniukai-1883">Šuniukai</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/kroketas_1867">Kroketas</a> → <a href="/lobis/kroketas_1867">Kroketas</a></li>
	<li><a href="https://www.markuciudvaras.lt/lobis/finish_1935">Finišas</a> → <a href="/lobis/finish_1935">Finišas</a></li>
</ol>

-->


<br>&nbsp;<br>&nbsp;
<img width=98% src={dvaras}>


</section>
<br/>&nbsp;
<img width=105% src={map_foundation}>






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

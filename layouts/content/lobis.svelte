<script>
	export let title, body, author, date, store, source, content;
  import Uses from "../components/source.svelte";


  // Content driven dynamic components example:
  export let components, allLayouts;
</script>

<h1>{title}</h1>

<p><em>{#if author}Written by {author}{/if}{#if date}&nbsp;on {date}{/if}</em></p>

<p>{@html body}</p>


<p>Bazinga</p>


<p><a href=".">Back home</a></p>

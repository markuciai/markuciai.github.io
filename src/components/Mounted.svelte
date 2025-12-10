<script>
let mounted = false;
onMount(() => {
    mounted = true;
});
</script>

{#if mounted}
    <slot />
{/if}
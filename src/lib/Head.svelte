<script>
    /** @type { string } */
    export let title = "";

    /** @type { string } */
    export let description = "";

    /** @type { string } */
    export let keywords = "";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
</svelte:head>

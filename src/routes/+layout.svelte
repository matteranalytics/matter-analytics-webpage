<script>
    import "../custom/fonts.css";
    import "../app.css";
    import "../markdown.css";
    import "../custom/colors.css";

    import Sidebar from "$lib/Sidebar.svelte";
    import Navbar from "$lib/Navbar.svelte";

    export let data;
    const { sidebar, routes } = data;
</script>

<main>
    <Sidebar {sidebar} />

    <div class="main-content">
        {#if routes.length > 1}
            <Navbar {routes} />
        {/if}

        <slot />
    </div>
</main>

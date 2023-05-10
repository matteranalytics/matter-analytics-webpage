<script>
    import "../custom/fonts.css";
    import "../custom/colors.css";
    import "../app.css";
    import "../markdown.css";

    import Sidebar from "$lib/Sidebar.svelte";
    import Navbar from "$lib/Navbar.svelte";

    export let data;
    const { sidebar, localeDateString, pages } = data;
    const routes = Object.values(pages).map(({ route }) => route);
</script>

<svelte:head>
    <title>vCard · Personal Portfolio</title>
    <meta property="og:title" content="vCard · Personal Portfolio" />
</svelte:head>

<main>
    <Sidebar {sidebar} {localeDateString} />

    <div class="main-content">
        <Navbar {routes} />

        <slot />
    </div>
</main>

<script>
    import { page } from "$app/stores";

    /** @type { {id: string, nav: string}[] } */
    export let routes = [];
</script>

<nav class="navbar">
    <ul class="navbar-list">
        {#each routes as route}
            <li class="navbar-item">
                <a
                    href={route.id}
                    class="navbar-link"
                    class:active={(route.id === "/" && $page.route.id === "/") ||
                        (route.id !== "/" && $page.route.id?.startsWith(route.id))}
                >
                    {route.nav}
                </a>
            </li>
        {/each}
    </ul>
</nav>

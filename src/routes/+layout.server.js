import { sidebar, pages } from "../custom/database";

export const prerender = true;

/** @type { import('./$types').LayoutServerLoad } */
export function load() {
    /** @type { {id: string, nav: string}[] } */
    const routes =
        Object.entries(pages).map(([route, page]) =>
            route === "about" ? { id: "/", nav: page.nav } : { id: `/${route}`, nav: page.nav }
        ) || [];

    return {
        sidebar,
        pages,
        routes,
    };
}

import { localeDateString, sidebar, pages } from "../custom/database";

export const prerender = true;

/** @type { import('./$types').LayoutServerLoad } */
export function load() {
    /** @type { Database.Route[] } */
    const routes = Object.values(pages).map(({ route }) => route) || [];

    return {
        localeDateString,
        sidebar,
        pages,
        routes,
    };
}

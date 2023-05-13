export const prerender = true;

import { localeDateString, sidebar, pages } from "../custom/database";

/** @type { import('./$types').LayoutServerLoad } */
export function load() {
    return {
        localeDateString,
        sidebar,
        pages,
    };
}

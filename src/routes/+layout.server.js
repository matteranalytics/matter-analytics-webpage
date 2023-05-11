export const prerender = true;

import { sidebar, pages, localeDateString } from "../custom/database";

/** @type { import('./$types').LayoutServerLoad } */
export function load() {
    return {
        sidebar,
        pages,
        localeDateString,
    };
}

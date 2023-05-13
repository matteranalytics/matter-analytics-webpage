export const prerender = true;

import { localeDateString, sidebar, pages } from "../custom/database";

/** @type { import('./$types').LayoutLoad } */
export function load() {
    return {
        localeDateString,
        sidebar,
        pages,
    };
}

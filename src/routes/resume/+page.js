export const prerender = true;

import { redirect } from "@sveltejs/kit";

import { pages } from "../../custom/database";

/** @type { import('./$types').PageLoad } */
export function load() {
    if (!Object.prototype.hasOwnProperty.call(pages, "resume")) {
        throw redirect(307, "/");
    }
}

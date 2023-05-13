export const prerender = true;

import { redirect } from "@sveltejs/kit";

import { pages } from "../../custom/database";

/** @type { import('./$types').PageServerLoad } */
export function load() {
    if (!Object.prototype.hasOwnProperty.call(pages, "portfolio")) {
        throw redirect(307, "/");
    }
}

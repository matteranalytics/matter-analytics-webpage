import { redirect } from "@sveltejs/kit";

import { pages } from "../../../custom/vcard";

const { projects } = pages.portfolio;

/** @type { import('./$types').PageServerLoad } */
export function load({ params }) {
    const project = projects.find((project) => project.slug === params.project);

    if (!project) {
        throw redirect(307, "/");
    }

    return {
        project,
    };
}

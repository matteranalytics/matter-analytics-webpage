import { redirect } from "@sveltejs/kit";

import { pages } from "../../../custom/database";

/** @type { Database.Portfolio | undefined } */
const portfolio = pages?.portfolio;

export const prerender = Object.prototype.hasOwnProperty.call(pages, "portfolio");

/** @type { Database.Project[] } */
const projects = portfolio?.projects ?? [];

/** @type { import('./$types').PageLoad } */
export async function load({ params }) {
    if (!Object.prototype.hasOwnProperty.call(pages, "portfolio")) {
        throw redirect(307, "/");
    }

    /** @type { Database.Project | undefined } */
    const project = projects.find((project) => project.slug === params.project);

    if (!project) {
        throw redirect(307, "/");
    }

    try {
        const projectMarkdown = await import(`../../../custom/projects/${project.slug}.md`);

        return {
            project,
            ProjectMarkdown: projectMarkdown.default,
        };
    } catch (error) {
        return {
            project,
            ProjectMarkdown: null,
        };
    }
}

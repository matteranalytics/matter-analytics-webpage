export const prerender = true;

import { redirect } from "@sveltejs/kit";

import { pages } from "../../../custom/database";

const { projects } = pages.portfolio;

/** @type { import('./$types').PageLoad } */
export async function load({ params }) {
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

import { redirect } from "@sveltejs/kit";

import { pages } from "../../../custom/database";

/** @type { Database.Blog | undefined } */
const blog = pages?.blog;

export const prerender = Object.prototype.hasOwnProperty.call(pages, "blog");

/** @type { Database.Post[] } */
const posts = blog?.posts ?? [];

/** @type { import('./$types').PageLoad } */
export async function load({ params }) {
    if (!Object.prototype.hasOwnProperty.call(pages, "blog")) {
        throw redirect(307, "/");
    }

    /** @type { Database.Post | undefined } */
    const post = posts.find((post) => post.slug === params.post);

    if (!post) {
        throw redirect(307, "/");
    }

    try {
        const postMarkdown = await import(`../../../custom/posts/${post.slug}.md`);

        return {
            post,
            PostMarkdown: postMarkdown.default,
        };
    } catch (error) {
        return {
            post,
            PostMarkdown: null,
        };
    }
}

<script>
    import { formatDate } from "../../../utils.js";
    import Head from "$lib/Head.svelte";

    export let data;
    const { sidebar, post, PostMarkdown } = data;

    /** @type { Database.Blog | undefined } */
    const blog = data.pages?.blog;
</script>

<Head title="{sidebar.name} · {post.title}" description={post.description} keywords="{blog?.seo.keywords}, {post.category}" />

{#if !PostMarkdown}
    <article class="article post">
        <header>
            <h2 class="article-title">{post.title}</h2>
        </header>

        {#if (post?.category && post.category.length > 0) || (post?.date && post.date.length > 0)}
            <div class="post-meta">
                {#if post?.category && post.category.length > 0}
                    <p class="post-category">{post.category}</p>
                {/if}

                {#if post?.date && post.date.length > 0}
                    <time datetime={post.date}>
                        {formatDate(post.date)}
                    </time>
                {/if}
            </div>
        {/if}

        <figure class="post-img">
            <img src={post.img.src} alt={post.img.alt} loading="lazy" />
        </figure>
    </article>
{:else}
    <section class="article post entry-markdown">
        <svelte:component this={PostMarkdown} />
    </section>
{/if}

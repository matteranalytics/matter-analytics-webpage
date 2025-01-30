<script>
    import { formatDate } from "../../utils.js";
    import Head from "$lib/Head.svelte";
    import Filter from "$lib/Filter.svelte";

    export let data;

    /** @type { Database.Blog | undefined } */
    const blog = data.pages?.blog;

    /** @type { Database.SEO | undefined } */
    const seo = blog?.seo;

    /** @type { Database.Post[] } */
    const posts = blog?.posts ?? [];

    /** @type { Database.CategoryFilter | undefined } */
    const categoryFilter = blog?.categoryFilter;

    /**
     * @param { Database.Post[] } posts
     * @return { string[] }
     */
    const extractCategories = (posts) => {
        return posts.reduce(
            /**
             * @param { string[] } acc
             * @param { Database.Post } post
             */
            (acc, post) => {
                const category = post?.category ?? "";
                if (category.length > 0) {
                    acc.includes(category) ? acc : acc.push(category);
                }
                return acc;
            },
            [],
        );
    };

    const categories = extractCategories(posts);

    let selectedCategory = categoryFilter?.allCategory ?? "";
    $: filteredPosts =
        selectedCategory === (categoryFilter?.allCategory ?? "") ? posts : posts.filter((post) => post.category === selectedCategory);
</script>

<Head {...seo} />

<article class="article blog active">
    <header>
        <h2 class="article-title">{blog?.title}</h2>
    </header>

    <section class="posts">
        {#if categoryFilter && categories && categories.length > 1}
            <Filter
                instruction={categoryFilter.instruction}
                icon={categoryFilter.icon}
                all={categoryFilter.allCategory}
                {categories}
                {selectedCategory}
                on:selectCategory={(event) => (selectedCategory = event.detail.category)}
            />
        {/if}

        {#if filteredPosts.length > 0}
            <ul class="post-list">
                {#each filteredPosts as post}
                    <li class="post-item">
                        <a href="/blog/{post.slug}">
                            <figure class="blog-banner-box">
                                <img src={post.img.src} alt={post.img.alt} loading="lazy" />
                            </figure>

                            <div class="blog-content">
                                {#if (post?.category && post.category.length > 0) || (post?.date && post.date.length > 0)}
                                    <div class="blog-meta">
                                        {#if post?.category && post.category.length > 0}
                                            <p class="blog-category">{post.category}</p>
                                        {/if}

                                        {#if post?.date && post.date.length > 0}
                                            <time datetime={post.date}>
                                                {formatDate(post.date)}
                                            </time>
                                        {/if}
                                    </div>
                                {/if}
                                <h3 class="h3 blog-item-title">{post.title}</h3>
                                <p class="blog-text">{post.description}</p>
                            </div>
                        </a>
                    </li>
                {/each}
            </ul>
        {/if}
    </section>
</article>

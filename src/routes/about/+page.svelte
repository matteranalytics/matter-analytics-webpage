<script>
    import Icon from "@iconify/svelte";
    import Head from "$lib/Head.svelte";

    export let data;

    /** @type { Database.About } */
    const about = data.pages.about;

    /** @type { Database.SEO } */
    const seo = about.seo;

    /** @type { Database.Paragraphs | undefined } */
    const paragraphs = about?.paragraphs;
</script>

<Head {...seo} />

<article class="article about">
    <header>
        <h2 class="article-title">{about.title}</h2>
    </header>

    <!-- ✅ Render Headshot -->
    {#if about.img}
        <figure class="about-avatar">
            <img src={about.img.src} alt={about.img.alt} />
        </figure>
    {/if}

    {#if paragraphs && paragraphs?.length > 0}
        <div class="about-text">
            {#each paragraphs as paragraph}
                <p class="about-paragraph">{paragraph}</p>
            {/each}
        </div>
    {/if}
</article>

<style>
    .about-avatar {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .about-avatar img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        box-shadow: var(--shadow-1);
    }

    .about-text {
        max-width: 100%;
        font-size: 16px;
        color: var(--c-text-silver);
        line-height: 1.6;
        text-align: left;
        margin: 0 auto;
    }

    /* ✅ Add margin-bottom to separate paragraphs */
    .about-paragraph {
        margin-bottom: 16px; /* Adjust spacing as needed */
    }
</style>

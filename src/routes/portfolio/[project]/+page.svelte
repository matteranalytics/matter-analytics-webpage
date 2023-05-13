<script>
    import Head from "$lib/Head.svelte";

    export let data;
    const { sidebar, project, ProjectMarkdown } = data;

    /** @type { Database.Portfolio | undefined } */
    const portfolio = data.pages?.portfolio;
</script>

<Head title="{sidebar.name} · {project.title}" description={project.description} keywords="{portfolio?.seo.keywords}, {project.category}" />

<article class="project">
    <header>
        <h2 class="h2 article-title">{project.title}</h2>
    </header>

    {#if (project?.category ?? "").length > 0 && (project?.client ?? "").length > 0}
        <div class="project-meta">
            {#if (project?.category ?? "").length > 0}
                <p class="project-category">{project.category}</p>
            {/if}

            {#if (project?.category ?? "").length > 0 && (project?.client ?? "").length > 0}
                <span class="dot" />
            {/if}

            {#if (project?.client ?? "").length > 0}
                <p class="project-client">{project.client}</p>
            {/if}
        </div>
    {/if}

    {#if !ProjectMarkdown}
        <figure class="project-img">
            <img src={project.img.src} alt={project.img.alt} loading="lazy" />
        </figure>
    {:else}
        <section class="project-markdown">
            <svelte:component this={ProjectMarkdown} />
        </section>
    {/if}
</article>

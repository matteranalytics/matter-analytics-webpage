<script>
    import Head from "$lib/Head.svelte";

    export let data;
    const { sidebar, project, ProjectMarkdown } = data;

    /** @type { Database.Portfolio | undefined } */
    const portfolio = data.pages?.portfolio;
</script>

<Head title="{sidebar.name} · {project.title}" description={project.description} keywords="{portfolio?.seo.keywords}, {project.category}" />

{#if !ProjectMarkdown}
    <article class="article project">
        <header>
            <h2 class="article-title">{project.title}</h2>
        </header>

        {#if (project?.category && project.category.length > 0) || (project?.client && project.client.length > 0)}
            <div class="project-meta">
                {#if project?.category && project.category.length > 0}
                    <p class="project-category">{project.category}</p>
                {/if}

                {#if (project?.category ?? "").length > 0 && (project?.client ?? "").length > 0}
                    <span class="dot" />
                {/if}

                {#if project?.client && project.client.length > 0}
                    <p class="project-client">{project.client}</p>
                {/if}
            </div>
        {/if}

        <figure class="project-img">
            <img src={project.img.src} alt={project.img.alt} loading="lazy" />
        </figure>
    </article>
{:else}
    <section class="article project entry-markdown">
        <svelte:component this={ProjectMarkdown} />
    </section>
{/if}

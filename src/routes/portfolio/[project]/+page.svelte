<script>
    import Head from "$lib/Head.svelte";

    export let data;
    const { pages, project, ProjectMarkdown, sidebar } = data;
    const { portfolio } = pages;
</script>

<Head title="{sidebar.name} · {project.title}" description={project.description} keywords="{portfolio.seo.keywords}, {project.category}" />

<article class="project">
    <header>
        <h2 class="h2 article-title">{project.title}</h2>
    </header>

    <div class="project-meta">
        <p class="project-category">{project.category}</p>
        <span class="dot" />
        <p class="project-client">{project.client}</p>
    </div>

    {#if !ProjectMarkdown}
        <figure class="project-img">
            <img src={project.img.src} alt={project.img.alt} loading="lazy" />
        </figure>
    {/if}

    <section class="project-markdown">
        <svelte:component this={ProjectMarkdown} />
    </section>
</article>

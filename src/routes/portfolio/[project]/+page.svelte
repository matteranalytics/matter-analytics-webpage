<script>
    export let data;
    const { project } = data;
</script>

<article class="project">
    <header>
        <h2 class="h2 article-title">{project.title}</h2>
    </header>

    <p class="project-category">{project.category}</p>
    <p class="project-text">{project.short}</p>

    <figure class="project-img">
        <img src={project.img.src} alt={project.img.alt} loading="lazy" />
    </figure>

    <section class="project-text">
        {#each project.long as paragraph}
            <p>{paragraph}</p>
        {/each}
    </section>
</article>

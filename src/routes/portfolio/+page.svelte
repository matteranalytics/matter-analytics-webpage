<script>
    import Icon from "@iconify/svelte";
    import eyeIcon from "@iconify-icons/ion/eye-outline.js";

    import Head from "$lib/Head.svelte";
    import Filter from "$lib/Filter.svelte";

    export let data;

    /** @type { Database.Portfolio | undefined } */
    const portfolio = data.pages?.portfolio;

    /** @type { Database.SEO | undefined } */
    const seo = portfolio?.seo;

    /** @type { Database.Project[] } */
    const projects = portfolio?.projects ?? [];

    /** @type { string } */
    const allCategory = portfolio?.allCategory ?? "";

    /** @type { string } */
    const select_category_option = portfolio?.select_category_option ?? "";

    /**
     * @param { Database.Project[] } projects
     * @return { string[] }
     */
    const extractCategories = (projects) => {
        return projects.reduce(
            /**
             * @param { string[] } acc
             * @param { Database.Project } project
             */
            (acc, project) => {
                const category = project?.category ?? "";
                if (category.length > 0) {
                    acc.includes(category) ? acc : acc.push(category);
                }
                return acc;
            },
            []
        );
    };

    const categories = extractCategories(projects);

    let selectedCategory = allCategory;
    $: filteredProjects = selectedCategory === allCategory ? projects : projects.filter((project) => project.category === selectedCategory);
</script>

<Head {...seo} />

<article class="portfolio active">
    <header>
        <h2 class="h2 article-title">{portfolio?.title}</h2>
    </header>

    <section class="projects">
        {#if select_category_option && allCategory && categories && categories.length > 0}
            <Filter
                instruction={select_category_option}
                all={allCategory}
                {categories}
                {selectedCategory}
                on:selectCategory={(event) => (selectedCategory = event.detail.category)}
            />
        {/if}

        {#if filteredProjects.length > 0}
            <ul class="project-list">
                {#each filteredProjects as project}
                    <li class="project-item active">
                        <a href="{portfolio?.route.id}/{project.slug}">
                            <figure class="project-img">
                                <div class="project-item-icon-box">
                                    <Icon icon={eyeIcon} />
                                </div>
                                <img src={project.img.src} alt={project.img.alt} loading="lazy" />
                            </figure>

                            <h3 class="project-title">{project.title}</h3>
                            {#if (project?.category ?? "").length > 0}
                                <div class="project-meta">
                                    <p class="project-category">{project.category}</p>
                                </div>
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        {/if}
    </section>
</article>

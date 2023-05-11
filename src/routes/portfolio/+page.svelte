<script>
    import Icon from "@iconify/svelte";
    import eyeIcon from "@iconify-icons/ion/eye-outline.js";

    import Head from "$lib/Head.svelte";
    import Filter from "$lib/Filter.svelte";

    export let data;
    const { portfolio } = data.pages;
    const { allCategory, projects, select_category_option, seo } = portfolio;

    /**
     * @param { import("../../custom/database.d").Project[] } projects
     * @return { string[] }
     */
    const extractCategories = (projects) => {
        return projects.reduce(
            /**
             * @param { string[] } acc
             * @param { import("../../custom/database.d").Project } project
             */
            (acc, project) => {
                acc.includes(project.category) ? acc : acc.push(project.category);
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
        <h2 class="h2 article-title">{portfolio.title}</h2>
    </header>

    <section class="projects">
        <Filter
            instruction={select_category_option}
            all={allCategory}
            {categories}
            {selectedCategory}
            on:selectCategory={(event) => (selectedCategory = event.detail.category)}
        />

        <ul class="project-list">
            {#each filteredProjects as project}
                <li class="project-item active">
                    <a href="{portfolio.route.id}/{project.slug}">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <Icon icon={eyeIcon} />
                            </div>
                            <img src={project.img.src} alt={project.img.alt} loading="lazy" />
                        </figure>

                        <h3 class="project-title">{project.title}</h3>
                        <div class="project-meta">
                            <p class="project-category">{project.category}</p>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </section>
</article>

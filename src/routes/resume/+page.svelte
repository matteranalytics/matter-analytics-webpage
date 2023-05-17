<script>
    import Icon from "@iconify/svelte";

    import Head from "$lib/Head.svelte";

    export let data;

    /** @type { Database.Resume | undefined } */
    const resume = data.pages?.resume;

    /** @type { Database.SEO | undefined } */
    const seo = resume?.seo;

    /** @type { Database.Education | undefined } */
    const education = resume?.education;

    /** @type { Database.Experience | undefined } */
    const experience = resume?.experience;

    /** @type { Database.Skills | undefined } */
    const skills = resume?.skills;
</script>

<Head {...seo} />

<article class="resume">
    <header>
        <h2 class="h2 article-title">{resume?.title}</h2>
    </header>

    {#if education && education?.items.length > 0}
        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box">
                    <Icon icon={education.icon} />
                </div>
                <h3 class="h3">{education.title}</h3>
            </div>

            <ol class="timeline-list">
                {#each education.items as item}
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title">{item.title}</h4>
                        <span>{item.year}</span>
                        <p class="timeline-text">{item.text}</p>
                    </li>
                {/each}
            </ol>
        </section>
    {/if}

    {#if experience && experience?.items.length > 0}
        <section class="timeline">
            <div class="title-wrapper">
                <div class="icon-box">
                    <Icon icon={experience.icon} />
                </div>
                <h3 class="h3">{experience.title}</h3>
            </div>

            <ol class="timeline-list">
                {#each experience.items as item}
                    <li class="timeline-item">
                        <h4 class="h4 timeline-item-title">{item.title}</h4>
                        <span>{item.year}</span>
                        <p class="timeline-text">{item.text}</p>
                    </li>
                {/each}
            </ol>
        </section>
    {/if}

    {#if skills && skills?.items.length > 0}
        <section class="skill">
            <h3 class="h3 skills-title">{skills.title}</h3>

            <ul class="skills-list content-card">
                {#each skills.items as item}
                    <li class="skills-item">
                        <div class="title-wrapper">
                            <h5 class="h5">{item.name}</h5>
                            <data value={item.percentage}>{item.percentage}%</data>
                        </div>

                        <div class="skill-progress-bg">
                            <div class="skill-progress-fill" style="width: {item.percentage}%" />
                        </div>
                    </li>
                {/each}
            </ul>
        </section>
    {/if}
</article>

<script>
    import Icon from "@iconify/svelte";
    import bookIcon from "@iconify-icons/ion/book-outline.js";

    export let data;
    const { resume } = data.pages;
    const { education, experience, skills } = resume;
</script>

<article class="resume">
    <header>
        <h2 class="h2 article-title">{resume.title}</h2>
    </header>

    <section class="timeline">
        <div class="title-wrapper">
            <div class="icon-box">
                <Icon icon={bookIcon} />
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

    <section class="timeline">
        <div class="title-wrapper">
            <div class="icon-box">
                <Icon icon={bookIcon} />
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
</article>

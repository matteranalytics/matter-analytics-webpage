<script>
    import Head from "$lib/Head.svelte";
    import Testimonial from "$lib/Testimonial.svelte";

    export let data;

    /** @type { Database.About } */
    const about = data.pages.about;

    /** @type { Database.SEO } */
    const seo = about.seo;

    /** @type { Database.Paragraphs | undefined } */
    const paragraphs = about?.paragraphs;

    /** @type { Database.Services | undefined } */
    const services = about?.services;

    /** @type { Database.Clients | undefined } */
    const clients = about?.clients;

    /** @type { Database.Testimonials | undefined } */
    const testimonials = about?.testimonials;
</script>

<Head {...seo} />

<article class="about">
    <header>
        <h2 class="h2 article-title">{about.title}</h2>
    </header>

    {#if paragraphs && paragraphs?.length > 0}
        <section class="about-text">
            {#each paragraphs as paragraph}
                <p>{paragraph}</p>
            {/each}
        </section>
    {/if}

    {#if services && services?.items.length > 0}
        <section class="service">
            <h3 class="h3 service-title">{services.title}</h3>
            <ul class="service-list">
                {#each services.items as item}
                    <li class="service-item">
                        <div class="service-icon-box">
                            <img src={item.img.src} alt={item.img.alt} width="40" />
                        </div>
                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">{item.title}</h4>
                            <p class="service-item-text">{item.text}</p>
                        </div>
                    </li>
                {/each}
            </ul>
        </section>
    {/if}

    {#if testimonials && testimonials?.items.length > 0}
        <section class="testimonials">
            <h3 class="h3 testimonials-title">{testimonials.title}</h3>

            <ul class="testimonials-list has-scrollbar">
                {#each testimonials.items as item}
                    <li class="testimonials-item">
                        <Testimonial {item} />
                    </li>
                {/each}
            </ul>
        </section>
    {/if}

    {#if clients && clients?.items.length > 0}
        <section class="clients">
            <h3 class="h3 clients-title">{clients.title}</h3>

            <ul class="clients-list has-scrollbar">
                {#each clients.items as item}
                    <li class="clients-item">
                        <a href={item.link}>
                            <img src={item.img.src} alt={item.img.alt} />
                        </a>
                    </li>
                {/each}
            </ul>
        </section>
    {/if}
</article>

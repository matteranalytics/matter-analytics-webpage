<script>
    import Icon from "@iconify/svelte";

    import Head from "$lib/Head.svelte";
    import Testimonial from "$lib/Testimonial.svelte";

    export let data;

    /** @type { Database.Home } */
    const home = data.pages.home;

    /** @type { Database.SEO } */
    const seo = home.seo;

    /** @type { Database.Paragraphs | undefined } */
    const paragraphs = home?.paragraphs;

    /** @type { Database.Services | undefined } */
    const services = home?.services;

    /** @type { Database.Clients | undefined } */
    const clients = home?.clients;

    /** @type { Database.Testimonials | undefined } */
    const testimonials = home?.testimonials;
</script>

<Head {...seo} />

<article class="article home">
    <header>
        <h2 class="article-title">{home.title}</h2>
    </header>

    {#if paragraphs && paragraphs?.length > 0}
        <div class="home-text">
            {#each paragraphs as paragraph}
                <p>{paragraph}</p>
            {/each}
        </div>
    {/if}

    {#if services && services?.items.length > 0}
        <section class="service">
            <h3 class="service-title">{services.title}</h3>
            <ul class="service-list">
                {#each services.items as item}
                    <li class="service-item">
                        <div class="service-icon-box">
                            <Icon icon={item.icon} />
                        </div>
                        <div class="service-content-box">
                            <h4 class="service-item-title">{item.title}</h4>
                            <p class="service-item-text">{item.text}</p>
                        </div>
                    </li>
                {/each}
            </ul>
        </section>
    {/if}

    {#if testimonials && testimonials?.items.length > 0}
        <section class="testimonials">
            <h3 class="testimonials-title">{testimonials.title}</h3>

            <ul class="testimonials-list has-scrollbar">
                {#each testimonials.items as item}
                    <li class="testimonials-item">
                        <Testimonial {item} quoteIcon={testimonials.quoteIcon} closeIcon={testimonials.closeIcon} />
                    </li>
                {/each}
            </ul>
        </section>
    {/if}

    {#if clients && clients?.items.length > 0}
        <section class="clients">
            <h3 class="clients-title">{clients.title}</h3>

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

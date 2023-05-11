<script>
    import Head from "$lib/Head.svelte";
    import Testimonial from "$lib/Testimonial.svelte";

    export let data;
    const { about } = data.pages;
    const { clients, services, testimonials, seo } = about;
</script>

<Head {...seo} />

<article class="about">
    <header>
        <h2 class="h2 article-title">{about.title}</h2>
    </header>

    <section class="about-text">
        {#each about.paragraphs as paragraph}
            <p>{paragraph}</p>
        {/each}
    </section>

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
</article>

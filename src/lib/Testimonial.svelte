<script context="module">
    import { writable } from "svelte/store";

    const activeTestimonial = writable("");
</script>

<script>
    import Icon from "@iconify/svelte";

    /** @type { Database.Testimonial } */
    export let item;

    /** @type { import('@iconify/types').IconifyIcon } */
    export let closeIcon;

    /** @type { import('@iconify/types').IconifyIcon } */
    export let quoteIcon;
</script>

<div class="content-card" on:click={() => activeTestimonial.set(item.name)} on:keydown={() => activeTestimonial.set(item.name)}>
    <figure class="testimonials-avatar-box">
        <img src={item.img.src} alt={item.img.alt} width="60" />
    </figure>

    <h4 class="testimonials-item-title">{item.name}</h4>

    <div class="testimonials-text">
        <p>{item.text}</p>
    </div>
</div>

<div class="modal-container" class:active={$activeTestimonial === item.name}>
    <div
        class="overlay"
        class:active={$activeTestimonial === item.name}
        on:click={() => activeTestimonial.set("")}
        on:keydown={() => activeTestimonial.set("")}
    />

    <section class="testimonials-modal">
        <button class="modal-close-btn" on:click={() => activeTestimonial.set("")} aria-label="Close">
            <Icon icon={closeIcon} />
        </button>

        <div class="modal-img-wrapper">
            <figure class="modal-avatar-box">
                <img src={item.img.src} alt={item.img.alt} width="80" />
            </figure>

            <Icon icon={quoteIcon} />
        </div>

        <div class="modal-content">
            <div class="modal-title">{item.name}</div>

            <time datetime={item.date}>
                {new Date(item.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
            </time>

            <p>{item.text}</p>
        </div>
    </section>
</div>

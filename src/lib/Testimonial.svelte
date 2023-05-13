<script context="module">
    import { writable } from "svelte/store";

    const activeTestimonial = writable("");
</script>

<script>
    import Icon from "@iconify/svelte";
    import closeIcon from "@iconify-icons/ion/close-outline.js";

    /** @type { Database.Testimonial } */
    export let item;
</script>

<div class="content-card" on:click={() => activeTestimonial.set(item.name)} on:keydown={() => activeTestimonial.set(item.name)}>
    <figure class="testimonials-avatar-box">
        <img src={item.img.src} alt={item.img.alt} width="60" />
    </figure>

    <h4 class="h4 testimonials-item-title">{item.name}</h4>

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

            <img src={item.qoute.src} alt={item.qoute.alt} />
        </div>

        <div class="modal-content">
            <h4 class="h3 modal-title">{item.name}</h4>

            <time datetime={item.date}>
                {new Date(item.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
            </time>

            <p>{item.text}</p>
        </div>
    </section>
</div>

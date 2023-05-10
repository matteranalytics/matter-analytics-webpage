<script>
    import Icon from "@iconify/svelte";
    import fsm from "svelte-fsm";

    /** @type { import("../custom/vcard.d").Sidebar } */
    export let sidebar;

    const accordionMachine = fsm("off", {
        off: { toggle: "on" },
        on: { toggle: "off" },
    });
</script>

<aside class="sidebar" class:active={$accordionMachine === "on"}>
    <div class="sidebar-info">
        <figure class="avatar-box">
            <img src={sidebar.img.src} alt={sidebar.img.alt} width="80" />
        </figure>

        <div class="info-content">
            <h1 class="name" title={sidebar.name}>{sidebar.name}</h1>
            <p class="title">{sidebar.title}</p>
        </div>

        <button class="info_more-btn" on:click={accordionMachine.toggle}>
            <span>{sidebar.info_more_btn.text}</span>
            <Icon icon={sidebar.info_more_btn.icon} />
        </button>
    </div>

    <div class="sidebar-info_more">
        <div class="separator" />

        <ul class="contacts-list">
            {#each sidebar.contacts as contact}
                <li class="contact-item">
                    <div class="icon-box">
                        <Icon icon={contact.icon} />
                    </div>

                    <div class="contact-info">
                        <p class="contact-title">{contact.title}</p>

                        {#if contact.hasOwnProperty("link") && contact.link}
                            <a href={contact.link} class="contact-link">{contact.text}</a>
                        {:else if contact.hasOwnProperty("address") && contact.address}
                            <address>{contact.address}</address>
                        {/if}
                    </div>
                </li>
            {/each}
        </ul>

        <div class="separator" />

        <ul class="social-list">
            {#each sidebar.socials as social}
                <li class="social-item">
                    <a href={social.link} class="social-link"><Icon icon={social.icon} /></a>
                </li>
            {/each}
        </ul>
    </div>
</aside>

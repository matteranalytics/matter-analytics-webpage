<script>
    import Icon from "@iconify/svelte";
    import fsm from "svelte-fsm";

    /** @type { Database.Sidebar } */
    export let sidebar;

    /** @type { Database.Contact[] } */
    const contacts = sidebar.contacts ?? [];

    /** @type { Database.Social[] } */
    const socials = sidebar.socials ?? [];

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
            <p class="profession">{sidebar.profession}</p>
        </div>

        <button class="show-contacts-btn" on:click={accordionMachine.toggle} aria-label={sidebar.showContacts.text}>
            <span>{sidebar.showContacts.text}</span>
            <Icon icon={sidebar.showContacts.icon} />
        </button>
    </div>

    <div class="sidebar-show-contacts">
        {#if contacts && contacts.length > 0}
            <div class="separator" />

            <ul class="contacts-list">
                {#each contacts as contact}
                    <li class="contact-item">
                        <div class="icon-box">
                            <Icon icon={contact.icon} />
                        </div>

                        <div class="contact-info">
                            <p class="contact-title">{contact.title}</p>

                            {#if Object.prototype.hasOwnProperty.call(contact, "link") && contact.link}
                                <a href={contact.link} class="contact-link">{contact.text}</a>
                            {:else if Object.prototype.hasOwnProperty.call(contact, "address") && contact.address}
                                <address>{contact.address}</address>
                            {/if}
                        </div>
                    </li>
                {/each}
            </ul>
        {/if}

        {#if socials && socials.length > 0}
            <div class="separator" />

            <ul class="social-list">
                {#each socials as social}
                    <li class="social-item">
                        <a href={social.link} class="social-link"><Icon icon={social.icon} /></a>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
</aside>

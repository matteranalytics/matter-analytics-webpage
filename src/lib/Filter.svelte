<script>
    import Icon from "@iconify/svelte";

    import { createEventDispatcher } from "svelte";
    import fsm from "svelte-fsm";

    const dispatch = createEventDispatcher();

    /**
     * @param { string } category
     */
    function selectCategory(category) {
        dispatch("selectCategory", {
            category,
        });
    }

    /** @type { string } */
    export let instruction = "";

    /** @type { import('@iconify/types').IconifyIcon } */
    export let icon;

    /** @type { string } */
    export let all = "";

    /** @type { string[] } */
    export let categories = [];

    /** @type { string } */
    export let selectedCategory = "";

    const accordionMachine = fsm("off", {
        off: { toggle: "on" },
        on: { toggle: "off" },
    });
</script>

<ul class="filter-list">
    <li class="filter-item">
        <button class:active={selectedCategory === all} on:click={() => selectCategory(all)} aria-label={all}>
            {all}
        </button>
    </li>

    {#each categories as category}
        <li class="filter-item">
            <button class:active={selectedCategory === category} on:click={() => selectCategory(category)} aria-label={category}>
                {category}
            </button>
        </li>
    {/each}
</ul>

<div class="filter-select-box">
    <button
        class="filter-select"
        class:active={$accordionMachine === "on"}
        on:click={accordionMachine.toggle}
        aria-label={categories.includes(selectedCategory) ? selectedCategory : instruction}
    >
        <span class="select-value">{categories.includes(selectedCategory) ? selectedCategory : instruction}</span>
        <span class="select-icon">
            <Icon {icon} />
        </span>
    </button>

    <ul class="select-list">
        <li class="select-item">
            <button
                class:active={selectedCategory === all}
                on:click={() => selectCategory(all)}
                on:click={accordionMachine.toggle}
                aria-label={all}
            >
                {all}
            </button>
        </li>

        {#each categories as category}
            <li class="select-item">
                <button
                    class:active={selectedCategory === category}
                    on:click={() => selectCategory(category)}
                    on:click={accordionMachine.toggle}
                    aria-label={category}
                >
                    {category}
                </button>
            </li>
        {/each}
    </ul>
</div>

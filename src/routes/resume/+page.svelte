<script>
  import Icon from "@iconify/svelte";
  import Head from "$lib/Head.svelte";

  export let data;

  // Destructure your data for convenience
  const resume = data?.pages?.resume;
  
  // Collapsed/expanded states for each section
  let showEducation = false;
  let showExperience = false;
  let showProd = false;
</script>

<Head {...resume?.seo} />

<article class="article resume">
  <header>
    <h2 class="article-title">{resume?.title}</h2>
  </header>

  <!-- Education Section -->
  <section class="timeline">
    <div 
      class="title-wrapper collapsible-header" 
      on:click={() => (showEducation = !showEducation)}
      role="button"
      tabindex="0"
      aria-expanded={showEducation}
    >
      <div class="icon-box">
        <Icon icon={resume?.education?.icon} />
      </div>
      <h3>
        {resume?.education?.title}
        {#if showEducation}
          <span>▼</span>
        {:else}
          <span>▶</span>
        {/if}
      </h3>
    </div>

    {#if showEducation}
      <ol class="timeline-list collapsible-content">
        {#each resume?.education?.items as item}
          <li class="timeline-item">
            <h4 class="timeline-item-title">{item.title}</h4>
            <span class="timeline-date">{item.year}</span>
            <p class="timeline-text">{item.text}</p>
          </li>
        {/each}
      </ol>
    {/if}
  </section>

  <!-- Experience Section -->
  <section class="timeline">
    <div 
      class="title-wrapper collapsible-header" 
      on:click={() => (showExperience = !showExperience)}
      role="button"
      tabindex="0"
      aria-expanded={showExperience}
    >
      <div class="icon-box">
        <Icon icon={resume?.experience?.icon} />
      </div>
      <h3>
        {resume?.experience?.title}
        {#if showExperience}
          <span>▼</span>
        {:else}
          <span>▶</span>
        {/if}
      </h3>
    </div>

    {#if showExperience}
      <ol class="timeline-list collapsible-content">
        {#each resume?.experience?.items as item}
          <li class="timeline-item">
            <h4 class="timeline-item-title">{item.title}</h4>
            <span class="timeline-date">{item.year}</span>
            <p class="timeline-text">{item.text}</p>
          </li>
        {/each}
      </ol>
    {/if}
  </section>

  <!-- Production Section -->
  <section class="timeline">
    <div 
      class="title-wrapper collapsible-header" 
      on:click={() => (showProd = !showProd)}
      role="button"
      tabindex="0"
      aria-expanded={showProd}
    >
      <div class="icon-box">
        <Icon icon={resume?.prod?.icon} />
      </div>
      <h3>
        {resume?.prod?.title}
        {#if showProd}
          <span>▼</span>
        {:else}
          <span>▶</span>
        {/if}
      </h3>
    </div>

    {#if showProd}
      <ol class="timeline-list collapsible-content">
        {#each resume?.prod?.items as item}
          <li class="timeline-item">
            <h4 class="timeline-item-title">{item.title}</h4>
            <span class="timeline-date">{item.year}</span>
            <p class="timeline-text">{item.text}</p>
          </li>
        {/each}
      </ol>
    {/if}
  </section>
</article>

<style>
  /* Basic collapsible styling */
  
  .collapsible-header {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    user-select: none;
  }

  .collapsible-header:hover {
    opacity: 0.9;
  }

  .collapsible-content {
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  /* Optional arrow styling; swap in any icon you prefer */
  .title-wrapper h3 span {
    margin-left: 8px;
    font-size: 0.9em;
  }

  /* Adjust as needed for your layout or theme */
</style>

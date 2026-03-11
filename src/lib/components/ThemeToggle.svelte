<script>
  import { onMount } from 'svelte';
  import { toggleTheme } from '$lib/theme';
  let current = 'light';

  onMount(() => {
    current = document.documentElement.getAttribute('data-theme') || 'light';
  });

  function handleToggle() {
    current = toggleTheme();
  }
</script>

<button aria-label="Toggle dark mode" class="theme-toggle" on:click={handleToggle}>
  {#if current === 'dark'}
    🌙 Dark
  {:else}
    ☀️ Light
  {/if}
</button>

<style>
  .theme-toggle {
    appearance: none;
    border: 1px solid rgba(127,127,127,0.3);
    background: var(--surface);
    color: var(--text);
    padding: 0.5rem 0.75rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
  .theme-toggle:hover {
    border-color: rgba(127,127,127,0.6);
  }
</style>
<!-- ThemeToggle is kept for other pages; hero uses its own dot toggle -->

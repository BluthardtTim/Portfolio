<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

    injectAnalytics({ mode: dev ? 'development' : 'production' });
    injectSpeedInsights();
</script>

<svelte:head>
  <title>Tim Bluthardt</title>
</svelte:head>

<main>
  <slot />
  <Navbar />
</main>
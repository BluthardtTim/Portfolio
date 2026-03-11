<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { onMount } from 'svelte';
  import { getInitialTheme, applyTheme } from '$lib/theme';

    injectAnalytics({ mode: dev ? 'development' : 'production' });
    injectSpeedInsights();

    onMount(() => {
      const theme = getInitialTheme();
      applyTheme(theme);
    });
</script>

<svelte:head>
  <title>Tim Bluthardt</title>
  <meta name="description" content="Portfolio of Tim Bluthardt — Interaction Designer based in Schwäbisch Gmünd. UX, product design, and physical computing." />
  <meta name="author" content="Tim Bluthardt" />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:site_name" content="Tim Bluthardt" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Tim Bluthardt" />
  <meta property="og:description" content="Portfolio of Tim Bluthardt — Interaction Designer based in Schwäbisch Gmünd. UX, product design, and physical computing." />
  <meta property="og:image" content="/images/faviconHighRes.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Tim Bluthardt" />
  <meta name="twitter:description" content="Portfolio of Tim Bluthardt — Interaction Designer based in Schwäbisch Gmünd." />
  <meta name="twitter:image" content="/images/faviconHighRes.png" />
</svelte:head>

<main>
  <slot />
  <Navbar />
</main>
<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
    import { dev } from '$app/environment';
    import { injectAnalytics } from '@vercel/analytics/sveltekit';
 
    injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<main>
  <slot />
  <Navbar />
</main>
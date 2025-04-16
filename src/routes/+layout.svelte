<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
</script>

<main>
  <slot />
  <Navbar />
</main>
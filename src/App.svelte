<script>

  import Navbar from "./components/Navbar.svelte";
  import Router, { location } from "svelte-spa-router";
  import { onMount, afterUpdate } from 'svelte';
  import DesignPortfolio from "./pages/DesignPortfolio.svelte";
  import DesignAboutme from "./pages/DesignAboutme.svelte";
  import PhotographyPortfolio from "./pages/PhotographyPortfolio.svelte";
  import Spot from "./pages/Spot.svelte";
  import Growceries from "./pages/Growceries.svelte";
  import { derived } from 'svelte/store';
  import Xtend from "./pages/Xtend.svelte";
  import Imprint from "./pages/imprint.svelte";
  import Respiratory from "./pages/Respiratory.svelte";

  const routes = {
      "/": DesignPortfolio,
      "/aboutme": DesignAboutme,
      "/photo": PhotographyPortfolio,
      "/spot": Spot,
      "/growceries": Growceries,
      "/xtend": Xtend,
      "/imprint": Imprint,
      "/respiratory": Respiratory,
  };

  // Derived store to check if the current route is one of the hidden pages
  const isHiddenPage = derived(location, $location => 
      $location === "/spot" || $location === "/growceries" || $location === "/respiratory"
  );

  // Scroll to top on route change
  $: {
      location.subscribe(() => {
          scrollToTop();
      });
  }

  function scrollToTop() {
      window.scrollTo(0, 0);
  }
</script>

<main>
  <Router {routes} />
  {#if !$isHiddenPage}
      <Navbar />
  {/if}
</main>

<style>
  * {
      font-family: sans-serif;
      box-sizing: border-box;
      margin: 0;
  }
</style>

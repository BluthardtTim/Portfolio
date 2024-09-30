<script>
    import Navbar from "./components/Navbar.svelte";
    import Router, { location } from "svelte-spa-router";
    import { onMount } from 'svelte';
    import { derived } from 'svelte/store';
    import { inject } from '@vercel/analytics'


    import DesignPortfolio from "./pages/DesignPortfolio.svelte";
    import DesignAboutme from "./pages/DesignAboutme.svelte";
    import PhotographyPortfolio from "./pages/PhotographyPortfolio.svelte";
    import Spot from "./pages/Spot.svelte";
    import Growceries from "./pages/Growceries.svelte";
    import Xtend from "./pages/Xtend.svelte";
    import Imprint from "./pages/imprint.svelte";
    import Respiratory from "./pages/Respiratory.svelte";
    import Photo2 from "./pages/Photo2.svelte";
  
    const routes = {
        "/": DesignPortfolio,
        "/aboutme": DesignAboutme,
        "/photo": PhotographyPortfolio,
        "/spot": Spot,
        "/growceries": Growceries,
        "/xtend": Xtend,
        "/imprint": Imprint,
        "/respiratory": Respiratory,
        "/photo2": Photo2,
    };
  
    let isNavbarVisible = false; // Navbar initially hidden on mobile
  
    // Function to toggle the navbar visibility based on scroll position
    function handleScroll() {
        if (window.innerWidth <= 800) {
            // If scroll position is at the top, hide the navbar, otherwise show it
            isNavbarVisible = window.scrollY > 0;
        }
    }
  
    onMount(() => {
        // Only add the scroll listener if the viewport width is <= 800px
        if (window.innerWidth <= 800) {
            window.addEventListener('scroll', handleScroll);
        } else {
            isNavbarVisible = true; // Show navbar by default on larger screens
        }
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
  
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
    <Navbar />
  </main>
  
  <style>
    * {
        font-family: sans-serif;
        box-sizing: border-box;
        margin: 0;
    }
  </style>
  
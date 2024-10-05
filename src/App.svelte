<script>
    import Navbar from "./components/Navbar.svelte";
    import Router, { location } from "svelte-spa-router";

    import DesignPortfolio from "./pages/DesignPortfolio.svelte";
    import DesignAboutme from "./pages/DesignAboutme.svelte";
    import PhotographyPortfolio from "./pages/PhotographyPortfolio.svelte";
    import Spot from "./pages/Spot.svelte";
    import Growceries from "./pages/Growceries.svelte";
    import Xtend from "./pages/Xtend.svelte";
    import Imprint from "./pages/imprint.svelte";
    import Respiratory from "./pages/Respiratory.svelte";
    import PhotoAboutme from "./pages/PhotoAboutme.svelte";
    import Traumpalast from "./pages/Traumpalast.svelte";

    const routes = {
        "/": DesignPortfolio,
        "/aboutme": DesignAboutme,
        "/photo": PhotographyPortfolio,
        "/spot": Spot,
        "/growceries": Growceries,
        "/xtend": Xtend,
        "/imprint": Imprint,
        "/respiratory": Respiratory,
        "/photoAboutme": PhotoAboutme,
        "/traumpalast": Traumpalast,
    };
  
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
  
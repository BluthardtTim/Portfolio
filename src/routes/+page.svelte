<script>
    import Cardflowfunction from "$lib/components/Cardflowfunction.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import HeaderDesignPortfolio from "$lib/components/HeaderDesignPortfolio.svelte";
    import Techstack from "$lib/components/Techstack.svelte";
</script>

<svelte:head>
    <title>Tim Bluthardt — Interaction Designer</title>
    <meta name="description" content="Portfolio of Tim Bluthardt — Interaction Designer studying at HfG Schwäbisch Gmünd. Exploring UX, product design, and new technologies." />
    <link rel="canonical" href="https://timbluthardt.com/" />
    <meta property="og:title" content="Tim Bluthardt — Interaction Designer" />
    <meta property="og:description" content="Portfolio of Tim Bluthardt — Interaction Designer studying at HfG Schwäbisch Gmünd." />
    <meta property="og:url" content="https://timbluthardt.com/" />
    <meta property="og:image" content="/images/BEN/BEN1.png" />
    <meta name="twitter:title" content="Tim Bluthardt — Interaction Designer" />
    <meta name="twitter:description" content="Portfolio of Tim Bluthardt — Interaction Designer studying at HfG Schwäbisch Gmünd." />
</svelte:head>

<main>
    <HeaderDesignPortfolio />
    <div class="spacer50"></div>
    <Cardflowfunction />
    <div class="startpageWrapper">
        <div class="spacer100"></div>
        <div class="project_layout">
            <div class="txt">
                <div></div>
                <div>
                    <h5>Let’s connect and bring ideas to life!</h5>
                    <p>
                        If your interested to chat about emerging topics I'm always happy to have a coffee chat and talk!
                    </p>
                    <p>
                        You can reach me on <a
                            href="https://www.linkedin.com/in/tim-bluthardt/"
                            >linkedIn</a
                        >
                    </p>
                </div>
            </div>
        </div>
        <!-- <Techstack /> -->
    </div>
    <Footer />
    <div class="spacer100"></div>
</main>

<style>
    .spacer100 {
        height: 150px;
    }
    .spacer50 {
        height: 50px;
    }
    p {
        color: var(--text);
        max-width: 900px;
    }
    h5 {
        margin-bottom: 2rem;
    }
</style>

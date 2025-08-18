<script>
    import Cardflowfunction from "$lib/components/Cardflowfunction.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import HeaderDesignPortfolio from "$lib/components/HeaderDesignPortfolio.svelte";
    import Techstack from "$lib/components/Techstack.svelte";
</script>

<main>
    <div class="spacer50"></div>
    <div class="savespaceTop"></div>
    <HeaderDesignPortfolio />
    <div class="spacer50"></div>
    <Cardflowfunction />
    <div class="startpageWrapper">
        <div class="spacer100"></div>
        <div class="project_layout">
            <div class="txt">
                <h3>Feel free to reach out!</h3>
                <div>
                    <p>
                        I'm always open for a coffe talk and chat about
                        feedback, emerging tech or any other topic!
                    </p>
                    <p>
                        reach me on <a
                            href="https://www.linkedin.com/in/tim-bluthardt/"
                            >linkedIn</a
                        >
                    </p>
                </div>
            </div>
        </div>
        <div class="spacer"></div>
        <Techstack />
    </div>
    <Footer />
</main>

<style>
    .spacer100 {
        height: 150px;
    }
    .spacer50 {
        height: 50px;
    }
    h5 {
        color: black;
        font-weight: 500;
    }
    p {
        color: #474747;
        max-width: 900px;
        /* margin: 0 auto; */
        font-size: 18px;
    }
    @media (max-width: 800px) {
        .spacer200 {
            height: 100px;
        }
    }
</style>

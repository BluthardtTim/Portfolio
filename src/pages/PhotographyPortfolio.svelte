<script>
    import Footer from "../components/Footer.svelte";
    import Gallerie from "../components/Gallerie.svelte";
    import ProjectHeaderCaption from "../components/ProjectHeaderCaption.svelte";
</script>

<main>
    <!-- <ProjectHeaderCaption
        title="My Photography Selection"
        description="A selection of my best shots"
        projectdescription="I have been taking photos for a long time now and I have a selection of my best shots here. I hope you enjoy them."
    /> -->
    <div id="wrapper">
        <Gallerie />
    </div>
    <Footer />
</main>

<style>
    #wrapper {
        padding: 10px;
    }
</style>

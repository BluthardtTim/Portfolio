<script>
    import Footer from "../components/Footer.svelte";
    import Gallerie from "../components/Gallerie.svelte";
    import ProjectHeaderCaption from "../components/ProjectHeaderCaption.svelte";
</script>

<main>
    <ProjectHeaderCaption
        title="My Photography Selection"
    />
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

<script>
    import Footer from "../components/Footer.svelte";
    import Gallerie from "../components/Gallerie.svelte";
</script>

<main>
    <div id="wrapper">
        <Gallerie />

    </div>
    <Footer />
</main>

<style>
    #wrapper{
        padding: 10px;   
    }
    main {
        /* background-color: #151515; */
        color: white;
    }
</style>

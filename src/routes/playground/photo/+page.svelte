<script>
    import Footer from "$lib/components/Footer.svelte";
    import Gallerie from "$lib/components/Gallerie.svelte";

</script>

<main>
    <div id="wrapper">
        <Gallerie />
    </div>
    <div class="spacer"></div>
    <div style="text-align: center;">
        <p>More prictures on Instagram <a href="https://www.instagram.com/blugraphy.jpg/" target="_blank">@blugraphy.jpg</a> </p>
    </div>
    <div class="startpageWrapper">
        <Footer />
    </div>
</main>

<style>
    #wrapper {
        padding: 20px;
    }
    p {
        color: #9d9d9d;
        font-size: 18px;
    }
</style>

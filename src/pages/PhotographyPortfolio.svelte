<script>
    import Footer from "../components/Footer.svelte";
    import Gallerie from "../components/Gallerie.svelte";
</script>

<main>
    <div class="pageWrapper">
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
            <h1>Finger is on the trigger, content will come soon!</h1>
            <p>
                My second creative passion is photography. My camera has been with
                me for a few years now and this will be a space where I share my
                recent work of photography and filmmaking projects.
            </p>
        </div>
       
        <div class="spacer"></div>
        <div
            style="display: flex; flex-direction: row; justify-content: center;"
        >
            <p style="margin: 0;">Here is a little preview</p>
            <img
                style="width: 24px;height: 24px"
                src="../images/icons/arrow-bend-right-down-light.svg"
                alt=""
            />
        </div>
        <div class="spacer"></div>
        <Gallerie />
    </div>
    <Footer />
</main>

<style>
    main {
        background-color: #151515;
        color: white;
    }
    p {
        color: #9d9d9d;
        max-width: 800px;
        text-align: center;
    }
</style>

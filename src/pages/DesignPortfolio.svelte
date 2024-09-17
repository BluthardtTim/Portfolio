<script>
    import Cardflowfunction from "../components/Cardflowfunction.svelte";
    import Footer from "../components/Footer.svelte";
    import HeaderDesignPortfolio from "../components/HeaderDesignPortfolio.svelte";
</script>

<main>
    <HeaderDesignPortfolio />
    <div class="pageWrapper">
        <div style="height: 200px;"></div>
        <h3>I have a passion for <span>designing</span> and <span>developing</span> new ideas</h3>
        <p style="margin-bottom: 60px;">
            Every project is an opportunity for me to create something unique
            that resonates in a better user experience.
        </p>
        <div style="display: flex; flex-direction: row; justify-content: center;"><h5>Discover my Projects</h5><img style="width: 24px;height: 24px" src="../images/icons/arrow-down-light.svg" alt=""></div>
    </div>
    <div style="height: 100px;"></div>
    <Cardflowfunction />
    <div class="pageWrapper">
        <div style="height: 200px;"></div>
        <h3>I am currrently looking for an Internship</h3>
        <p>
            Starting in March 2025 I'm keen to find opportunities that will
            inspire me and allow me to use my skills while gaining valuable
            experience in the field.
        </p>
    </div>
    <Footer />
</main>

<style>
    .pageWrapper {
        text-align: center;
    }
    h3 span {
        color: #80C181;
    }
    p {
        color: #c0c0c0;
        max-width: 800px;
        margin: 0 auto;
    }
</style>

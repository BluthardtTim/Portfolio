<script>
    import Cardflowfunction from "../components/Cardflowfunction.svelte";
    import Footer from "../components/Footer.svelte";
    import HeaderDesignPortfolio from "../components/HeaderDesignPortfolio.svelte";
</script>

<main>
    <HeaderDesignPortfolio />
    <div class="pageWrapper">
        <div class="spacer200"></div>
        <h3>
            I have a passion for <span>designing</span> and
            <span>developing</span> new ideas
        </h3>
        <p style="margin-bottom: 60px;">
            Every project is an opportunity for me to create something unique
            that resonates in a better user experience.
        </p>
        <div
            style="display: flex; flex-direction: row; justify-content: center;"
        >
            <p style="margin: 0;">Have a look at my Projects</p>
            <img
                style="width: 24px;height: 24px"
                src="../images/icons/arrow-bend-right-down-light.svg"
                alt=""
            />
        </div>
    </div>
    <div class="spacer100"></div>
    <Cardflowfunction />
    <div class="pageWrapper">
        <div class="spacer200"></div>
        <h3>I am currrently looking for an Internship</h3>
        <p>
            Starting in March 2025 I'm open for opportunities that will inspire
            me and allow me to use my skills while gaining valuable experiences.
        </p>
    </div>
    <Footer />
</main>

<style>
    .pageWrapper {
        text-align: center;
    }
    .spacer200 {
        height: 200px;
    }
    .spacer100 {
        height: 100px;
    }
    h3 {
        font-size: 26px;
    }
    h3 span {
        color: #80c181;
        font-weight: 500;
    }
    p {
        color: #9d9d9d;
        max-width: 800px;
        margin: 0 auto;
        font-size: 18px;
    }
    @media (max-width: 800px) {
        .spacer200 {
            height: 100px;
        }
        .spacer100 {
            height: 50px;
        }
    }
</style>

<script>
    import MeIcons from "./MeIcons.svelte";
</script>

<main>
    <div id="Wrapper">
        <!-- <div class="savespaceTop"></div> -->
        <div class="pageWrapper">
            <div class="imageCard">
                <div class="innercard">
                    <img src="../images/Portrait2.jpg" alt="Portrait" />
                </div>
            </div>
            <div>
                <h3>UI/UX Design – Portfolio</h3>
                <h1>Tim Bluthardt</h1>
                <p style="margin-top: 40px; max-width: 600px;">
                    Hi! I’m Tim and I am currently studying Interaction Design
                    in Schwäbisch Gmünd, Germany. My strong interest in new
                    technologies and how design can help integrate them
                    seamlessly into meaningful user experience, shapes the way I
                    design.
                </p>
                <div class="thatsme">
                    <p>that's me</p>
                    <img
                        id="iconarrow"
                        src="../images/icons/arrow-up-right-light.svg"
                        alt="Arrow icon"
                    />
                </div>
                <MeIcons/>
            </div>
        </div>
    </div>
</main>

<style>
    #Wrapper {
        width: 100vw;
        height: 85vh;
        background-color: #f6f6f6;
        z-index: -1;
        border-bottom: 0.5px solid #bebebe;
        box-shadow: inset 0px -10px 10px -10px rgba(3, 2, 2, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pageWrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10rem;
    }
    .imageCard {
        width: 300px;
        aspect-ratio: 9 / 14;
        background-color: #f8f9fa;
        background: white;
        border-radius: 22px;
        border: 0.75px #e2e2e2 solid;
        padding: 5px;
        position: relative;
        overflow: hidden;
    }
    .innercard {
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        border-radius: 16px;
        border: 0.5px #a7a7a7 solid;
        box-sizing: border-box;
        position: relative;
        top: 0;
        left: 0;
        color: black;
        text-decoration: none;
    }
    .innercard img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }
    #iconarrow {
        width: 24px;
        height: 24px;
        transform: rotate(90deg);
        filter: invert(96%) sepia(0%) saturate(72%) hue-rotate(151deg)
            brightness(77%) contrast(108%);
        margin-left: 10px;
    }
    .thatsme {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    p {
        margin: 16px 0px;
        color: #9d9d9d;
        font-size: 18px;
    }
    h1 {
        font-size: 62px;
    }
    h3 {
        margin-bottom: -5px;
        color: #9d9d9d;
        font-weight: 400;
        font-size: 24px;
    }
    @media (max-width: 800px) {
        #Wrapper {
            height: 100vh;
        }
        .pageWrapper {
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 20px;
        }
        .imageCard {
            width: 55%;
            height: 65vw;
            margin-bottom: 30px;
        }
        .meicon {
            display: none;
        }
        .thatsme {
            display: none;
        }
        h1 {
            font-size: 48px;
        }
    }
</style>

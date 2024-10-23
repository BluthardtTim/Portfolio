<script>
    import MeIcons from "./MeIcons.svelte";
</script>

<main>
    <div class="spacer"></div>
    <div id="Wrapper">
        <div class="startpageWrapper">
            <!-- <div class="imageCard">
                <div class="innercard">
                    <img src="../images/Portrait2.jpg" alt="Portrait" />
                </div>
            </div> -->
            <div>
                <!-- <h3>Portfolio</h3> -->
                <h1>Tim Bluthardt</h1>
                <p style="margin-top: 40px; max-width: 600px;">
                    Hi! I’m Tim, an Interaction Design student based in
                    Schwäbisch Gmünd, Germany. My strong interest in new
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
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .startpageWrapper {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    h1 {
        font-size: 56px;
        margin: 0;
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
    @media (max-width: 800px) {
        .thatsme {
            display: none;
        }
        h1 {
            font-size: 48px;
        }
    }
</style>

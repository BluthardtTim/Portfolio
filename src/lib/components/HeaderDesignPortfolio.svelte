<script>
    import MeIcons from "./MeIcons.svelte";
    let showImage = false;
    let mouseX = 0;
    let mouseY = 0;

    function handleMouseMove(event) {
        mouseX = event.clientX + 20; // Abstand zum Mauszeiger
        mouseY = event.clientY + 20;
    }

    function handleMouseEnter() {
        showImage = true;
    }

    function handleMouseLeave() {
        showImage = false;
    }
</script>

<main>
    <div class="spacer"></div>
    <div id="Wrapper">
        <div class="startpageWrapper">
            <div>
                <h1>Tim Bluthardt</h1>
                <p style="margin-top: 40px; max-width: 600px;">
                    <span
                        on:mouseenter={handleMouseEnter}
                        on:mouseleave={handleMouseLeave}
                        on:mousemove={handleMouseMove}>Hi, I’m Tim</span
                    >, an Interaction Design student based in Schwäbisch Gmünd,
                    Germany. 
                    The way I design is driven by my strong interest in new
                    technologies and how design can help to seamlessly integrate
                    them into meaningful user experiences.
                </p>
                <div class="thatsme">
                    <p>my interests</p>
                    <img
                        id="iconarrow"
                        src="../images/icons/arrow-bend-right-down-light.svg"
                        alt="Arrow icon"
                    />
                </div>
                <MeIcons />
            </div>
        </div>

        <!-- Das Bild, das bei Hover angezeigt wird -->
        {#if showImage}
            <img
                src="../images/Portrait2.jpg"
                alt="Hover Image"
                class="hover-image"
                style="top: {mouseY}px; left: {mouseX}px;"
            />
        {/if}
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
    p span {
        text-decoration: underline;
        text-underline-offset: 4px;
        transition: all 0.2s ease-in-out;
    }
    p span:hover {
        color: black;
    }
    .hover-image {
        position: absolute;
        width: 200px;
        height: auto;
        pointer-events: none;
        z-index: 1000;
        transition:
            top 0.1s,
            left 0.1s;
        border-radius: 12px;
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

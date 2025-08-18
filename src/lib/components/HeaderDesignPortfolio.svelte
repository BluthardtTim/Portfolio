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

    <div class="pageWrapper">

        <div class="project_layout">
            <div class="txt">
                <div>
                    <h1>Tim Bluthardt</h1>
                    <h3>Interaction Design Portfolio</h3>
                </div>
                <p>
                    <span
                            on:mouseenter={handleMouseEnter}
                            on:mouseleave={handleMouseLeave}
                            on:mousemove={handleMouseMove}>Hi, I’m Tim</span
                        > and I am currently studying Interaction Design in
                    Schwäbisch Gmünd, Germany. My strong interest in new
                    technologies and how design can help integrate them seamlessly
                    into meaningful user experience, shapes the way I design.
                </p>
            </div>
            {#if showImage}
                <img
                    src="../images/Portrait2.jpg"
                    alt="Hover Image"
                    class="hover-image"
                    style="top: {mouseY}px; left: {mouseX}px;"
                />
            {/if}
        </div>
    </div>
    
        
</main>

<style>
    p {
        margin: 16px 0px;
        color: #474747;
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
        border: solid 4px rgb(255, 255, 255);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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

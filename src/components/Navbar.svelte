<script>
    import { onMount } from "svelte";
    let isProjectsSelected = true;
    let isAboutMeSelected = false;
    let highlightLeft = "0px";
    let currentIconSrc = "../images/icons/pen-nib-light.svg"; // Default icon
    let currentText = "Design"; // Default text
    let isPhotographySelected = false; // Track if Photography is selected

    // Button selection logic
    function setSelected(button) {
        if (button === "projects") {
            isProjectsSelected = true;
            isAboutMeSelected = false;
        } else if (button === "aboutme") {
            isProjectsSelected = false;
            isAboutMeSelected = true;
        }
        updateHighlightPosition();
    }

    // Update the highlight position based on the selected button
    function updateHighlightPosition() {
        const projectsButton = document.getElementById("projectsButton");
        const aboutMeButton = document.getElementById("aboutMeButton");
        if (isProjectsSelected) {
            highlightLeft = `${projectsButton.offsetLeft}px`;
        } else if (isAboutMeSelected) {
            highlightLeft = `${aboutMeButton.offsetLeft}px`;
        }
    }

    // Update the highlight position after the component is mounted
    onMount(() => {
        updateHighlightPosition();
        window.addEventListener("resize", updateHighlightPosition); // Ensure highlight updates on window resize
    });

    // Function to change the icon and text
    function changeIconAndText(iconSrc, text) {
        currentIconSrc = iconSrc;
        currentText = text;
        isPhotographySelected = text === "Photography"; // Update selection state
    }
</script>

<main>
    <div id="wrapper">
        <div id="iconwrapper">
            <a class="ankerlink" href="#/photo">
                <img class="currentIcon" src={currentIconSrc} alt="" />
            </a>
            <div class="hoverContent">
                <a class="ankerlink" href="#/" on:click={() => changeIconAndText("../images/icons/pen-nib-light.svg", "Design")}>
                    <div class="DesignNavBarStat">
                        <img src="../images/icons/pen-nib-light.svg" alt="" />
                        Design
                    </div>
                </a>
                <a class="ankerlink" href="#/photo" on:click={() => changeIconAndText("../images/icons/camera-light.svg", "Photography")}>
                    <div class="DesignNavBarStat">
                        <img src="../images/icons/camera-light.svg" alt="" />
                        Photography
                    </div>
                </a>
            </div>
        </div>
        <div class="NavbarWrapper">
            <div class="highlight" style="left: {highlightLeft};"></div>
            {#if isPhotographySelected}
                <a class="ankerlink" href="#/photo1">
                    <div class="NavButton">Photo1</div>
                </a>
                <a class="ankerlink" href="#/photo2">
                    <div class="NavButton">Photo2</div>
                </a>
                <a class="ankerlink" href="#/photo3">
                    <div class="NavButton">Photo3</div>
                </a>
            {:else}
                <a class="ankerlink" href="#/"
                    ><div
                        id="projectsButton"
                        class="NavButton"
                        class:active={isProjectsSelected}
                        on:click={() => setSelected("projects")}
                    >
                        Projects
                    </div></a
                >
                <a class="ankerlink" href="#/aboutme"
                    ><div
                        id="aboutMeButton"
                        class="NavButton"
                        class:active={isAboutMeSelected}
                        on:click={() => setSelected("aboutme")}
                    >
                        About me
                    </div></a
                >
            {/if}
        </div>
    </div>
</main>

<style>
    #wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100vw;
        position: fixed;
        margin-bottom: 40px;
        bottom: 0;
        gap: 20px;
        z-index: 10;
    }
    #iconwrapper {
        position: relative;
        height: 56px;
        width: 56px;
        background-color: #393939;
        border: solid 0.5px #bcbcbc;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition:
            width 0.5s;
    }
    #iconwrapper:hover {
        width: 320px; /* Adjust width as needed */
    }
    #iconwrapper:hover .currentIcon {
        display: none;
    }
    #iconwrapper img {
        filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(153deg)
            brightness(108%) contrast(101%);
        height: 30px;
        width: 30px;
    }
    #iconwrapper p {
        margin-left: 10px;
        color: white;
        font-size: 16px;
        display: inline-block;
    }

    @keyframes slideaway {
        from {
            display: none;
            transform: translateX(10px);
            opacity: 0;
        }
    }

    .hoverContent {
        display: none;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;
        opacity: 1;
        transform: translateX(0px);
        transition:
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
    }
    #iconwrapper:hover .hoverContent {
        animation: slideaway 200ms ease-in-out;
        display: flex;
    }
    .DesignNavBarStat {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
    .DesignNavBarStat img {
        filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(153deg)
            brightness(108%) contrast(101%);
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }
    .NavbarWrapper {
        position: relative;
        height: 56px;
        width: auto;
        background-color: #393939;
        border: solid 0.5px #bcbcbc;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
        z-index: 100;
    }

    .highlight {
        position: absolute;
        top: 3px;
        height: 90%;
        width: 114px;
        background-color: #80c181;
        border-radius: 50px;
        transition: left 0.3s;
        z-index: 0;
        margin-left: 3px;
    }
    .NavButton.active {
        color: white;
    }
    .NavButton {
        height: 100%;
        width: auto;
        padding: 0px 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* color: white; */
        z-index: 1;
    }
    .ankerlink {
        text-decoration: none;
        z-index: 2;
        color: #cccccc;
    }
    .ankerlink:hover {
        color: white;
    }
</style>

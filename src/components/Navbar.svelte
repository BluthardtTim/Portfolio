<script>
    import { onMount } from "svelte";
    import { location } from "svelte-spa-router";

    let isProjectsSelected = false;
    let isAboutMeSelected = false;
    let isPhotographySelected = false;
    let isDesignSelected = false;
    let highlightLeft = "0px";
    let highlightLeft2 = "0px";
    let currentIconSrc = "../images/icons/pen-nib-light.svg";

    // Funktion zum Setzen des aktiven Buttons
    function setSelected(button) {
        isProjectsSelected = button === "projects";
        isAboutMeSelected = button === "aboutme";
        isPhotographySelected = button === "photography";
        isDesignSelected = button === "design";
        updateHighlightPosition();
    }

    // Aktualisiert die Position des Highlights basierend auf dem aktiven Button
    function updateHighlightPosition() {
        const projectsButton = document.getElementById("projectsButton");
        const aboutMeButton = document.getElementById("aboutMeButton");
        const designNav = document.getElementById("designnav");
        const photoNav = document.getElementById("photonav");

        if (isProjectsSelected && projectsButton) {
            highlightLeft = `${projectsButton.offsetLeft}px`;
        } else if (isAboutMeSelected && aboutMeButton) {
            highlightLeft = `${aboutMeButton.offsetLeft}px`;
        } else if (isDesignSelected && designNav) {
            highlightLeft2 = `${designNav.offsetLeft}px`;
        } else if (isPhotographySelected && photoNav) {
            highlightLeft2 = `${photoNav.offsetLeft}px`;
        }
    }

    // Aktualisiere den Zustand basierend auf der aktuellen Route
    function updateFromRoute(route) {
        if (route === "/") {
            setSelected("projects");
            setSelected("design");
            changeIconAndText("../images/icons/pen-nib-light.svg");
        } else if (route === "/aboutme") {
            setSelected("aboutme");
        } else if (route.startsWith("/photo")) {
            setSelected("photography");
            changeIconAndText("../images/icons/camera-light.svg")
        }
    }

    // Überwache die Route und aktualisiere die Navbar
    $: updateFromRoute($location);

    // onMount: Aktualisiere die Highlight-Position und überwache die Fenstergröße
    onMount(() => {
        updateHighlightPosition();

        const iconWrapper = document.getElementById("iconwrapper");

        // Füge den Mouseleave-EventListener hinzu
        iconWrapper.addEventListener("mouseleave", () => {
            highlightLeft2 = "0px";
        });

        // Füge den Mouseenter-EventListener hinzu
        iconWrapper.addEventListener("mouseenter", () => {
            setTimeout(() => {
                const designNav = document.getElementById("designnav");
                const photoNav = document.getElementById("photonav");

                if (isPhotographySelected && photoNav) {
                    highlightLeft2 = `${photoNav.offsetLeft}px`;
                    console.log('photo', photoNav.offsetLeft);
                } else if (isDesignSelected && designNav) {
                    highlightLeft2 = `${designNav.offsetLeft}px`;
                    console.log('design', designNav.offsetLeft);
                }
            }, 300); // Wartezeit von 100ms, um sicherzustellen, dass das Layout vollständig aktualisiert ist
        });

    });

    function changeIconAndText(iconSrc) {
        currentIconSrc = iconSrc;
    }
</script>





<main>
    <div id="wrapper">
        <div id="iconwrapper">
            <div 
    class="highlightIcons" 
    style="left: {highlightLeft2}; width: {isPhotographySelected ? '162px' : isDesignSelected ? '130px' : '48px'};">
</div>

            <a class="ankerlink" href="#/photo">
                <img class="currentIcon" src={currentIconSrc} alt="" />
            </a>
            <div class="hoverContent">
                <a  
                    
                    class="ankerlink"
                    href="#/"
                    on:click={() =>
                        changeIconAndText(
                            "../images/icons/pen-nib-light.svg"
                        )}
                >
                    <div class="DesignNavBarStat" id="designnav">
                        <img src="../images/icons/pen-nib-light.svg" alt="" />
                        <p>Design</p>
                    </div>
                </a>
                <a
                    
                    class="ankerlink"
                    href="#/photo"
                    on:click={() =>
                        changeIconAndText(
                            "../images/icons/camera-light.svg"
                        )}
                >
                    <div class="DesignNavBarStat" id="photonav">
                        <img src="../images/icons/camera-light.svg" alt="" />
                        <p>Photography</p>
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
            {:else}
                <a class="ankerlink" href="#/">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        id="projectsButton"
                        class="NavButton"
                        class:active={isProjectsSelected}
                        on:click={() => setSelected("projects")}
                    >
                        Projects
                    </div></a
                >
                <a class="ankerlink" href="#/aboutme">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
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
    main {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #wrapper {
        display: flex;
        justify-content: center;
        /* width: 100vw; */
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
        transition: width 0.4s ease-in-out;
    }
    #iconwrapper:hover {
        width: 300px; /* Adjust width as needed */
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
        gap: 40px;
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
        transition:
            transform 0.3s ease-in-out,
            width 0.3s ease-in-out;
        z-index: 100;
    }
    .NavbarWrapper:hover {
        animation: bounce 0.5s;
    }

    @keyframes bounce {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
        100% {
            transform: scale(1);
        }
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
    .highlightIcons {
        position: absolute;
        top: 3px;
        height: 90%;
        width: 50px;
        background-color: #80c181;
        border-radius: 50px;
        transition: all 0.5s;
        z-index: 0;
        margin-left: 3px;
    }
    #iconwrapper:not(:hover) .highlightIcons {
        width: 50px !important;
    }

    #iconwrapper:hover .highlightIcons {
        width: 132px; /* Adjust width as needed */
        /* transform: translateX(-80px); */
    }
    .active {
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
    @media (max-width: 800px) {
        .DesignNavBarStat p {
            display: none;
        }
        .hoverContent {
            gap: 20px;
        }
        #iconwrapper:hover {
            width: 120px;
        }
        #iconwrapper:hover .highlightIcons {
        width: 56px !important;
        }
    }
</style>

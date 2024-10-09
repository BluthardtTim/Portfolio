<script>
    import { location } from "svelte-spa-router";
    import { onMount } from "svelte";

    let selectedItem = "projects"; 
    let highlightLeft = "240px";
    let highlightWidth = "0px";

    $: if (window.innerWidth <= 800) {
        highlightLeft = "140px";
    }

    // Funktion zum Setzen des aktiven Buttons
    function setSelected(button) {
        selectedItem = button;
        updateHighlightPosition();
    }

    // Aktualisiert die Position des Highlights basierend auf dem aktiven Button
    function updateHighlightPosition() {
        const projectsButton = document.getElementById("projectsButton");
        const aboutMeButton = document.getElementById("aboutMeButton");
        const playgroundButton = document.getElementById("playgroundButton");

            highlightLeft = (selectedItem === "projects" && projectsButton) 
                ? `${projectsButton.offsetLeft}px`
                : (selectedItem === "aboutme" && aboutMeButton)
                ? `${aboutMeButton.offsetLeft}px` 
                : (selectedItem === "playground" && playgroundButton)
                ? `${playgroundButton.offsetLeft}px` 
                : highlightLeft;

            highlightWidth = (selectedItem === "projects" && projectsButton) 
                ? `${projectsButton.offsetWidth}px`
                : (selectedItem === "aboutme" && aboutMeButton)
                ? `${aboutMeButton.offsetWidth}px` 
                : (selectedItem === "playground" && playgroundButton)
                ? `${playgroundButton.offsetWidth}px` 
                : highlightWidth;
    }


    // Aktualisiere den Zustand basierend auf der aktuellen Route
    function updateFromRoute(route) {
        if (route === "/") {
            setSelected("projects");
        } else if (route === "/aboutme") {
            setSelected("aboutme");
        } else if (route === "/playground") {
            setSelected("playground");
        }
    }

    // Überwache die Route und aktualisiere die Navbar
    onMount(() => {
        setTimeout(() => {
            updateFromRoute($location); // Ensure the correct route is selected
            // updateHighlightPosition(); // Update the highlight after mount
        }, 250);
    });


    // Überwache die Route und aktualisiere die Navbar
    $: updateFromRoute($location);

</script>

<main>
    <div id="wrapper">
        <div class="NavbarWrapper">
            <div class="highlight" style="left: {highlightLeft}; width: {highlightWidth};"></div>
                <a class="ankerlink" href="#/playground">
                    <div id="playgroundButton" class="NavButton" class:active={selectedItem === "playground"} on:click={() => setSelected("playground")}>
                        <img src="../images/icons/pen-nib-light_white.svg" alt="">
                        <p>Playground</p>
                    </div>
                </a>
                <a class="ankerlink" href="#/">
                    <div id="projectsButton" class="NavButton" class:active={selectedItem === "projects"} on:click={() => setSelected("projects")}>
                        <img src="../images/icons/folders-light.svg" alt="">
                        <p>Projects</p>
                    </div>
                </a>
                <a class="ankerlink" href="#/aboutme">
                    <div id="aboutMeButton" class="NavButton" class:active={selectedItem === "aboutme"} on:click={() => setSelected("aboutme")}>
                        <img src="../images/icons/user-light.svg" alt="">
                        <p>About me</p>
                    </div>
                </a>
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
    .NavbarWrapper {
        position: relative;
        height: 56px;
        width: auto;
        padding: 2px;
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
    .NavbarWrapper p {
        font-size: 16px;
    }
    .NavbarWrapper:hover {
        animation: bounce 0.5s;
    }

    .highlight {
        position: absolute;
        height: 92%;
        width: 116px;
        background-color: #80c181;
        border-radius: 50px;
        transition: all 0.5s;
        z-index: 0;
    }
    .active{
        color: white;
    }
    .NavButton {
        height: 100%;
        width: auto;
        padding: 0px 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
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

    @keyframes bounce {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.01);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes slideaway {
        from {
            display: none;
            transform: translateX(10px);
            opacity: 0;
        }
    }

    @media (max-width: 800px) {
        #wrapper {
            gap: 15px;
            margin-bottom: 15px;
        }
        .NavButton {
        flex-direction: column;
        }
        .NavButton p{
            font-size: 9px;
        }

    }
</style>

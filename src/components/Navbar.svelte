<script>

    import { onMount } from "svelte";
    import { location } from "svelte-spa-router";

    let selectedItem = "projects"; // Default selection
    let selectedMain = "design";   // For Design or Photography
    let highlightLeft = "0px";
    let highlightLeft2 = "0px";
    let currentIconSrc = "../images/icons/pen-nib-light.svg";
    let leftPhoto = '123px';
    let leftDesign = '0px';

    // Funktion zum Setzen des aktiven Buttons
    function setSelected(button) {
        selectedItem = button;
        updateHighlightPosition();
    }

    function setMainSelected(main) {
        selectedMain = main;
        updateHighlightPosition();
    }

    // Aktualisiert die Position des Highlights basierend auf dem aktiven Button
function updateHighlightPosition() {
    const projectsButton = document.getElementById("projectsButton");
    const aboutMeButton = document.getElementById("aboutMeButton");
    const photo1Button = document.getElementById("photo1Button");
    const photo2Button = document.getElementById("photo2Button");
    const designNav = document.getElementById("designnav");
    const photoNav = document.getElementById("photonav");

    if (selectedMain === "design") {
        highlightLeft = (selectedItem === "projects" && projectsButton) 
            ? `${projectsButton.offsetLeft}px`
            : (selectedItem === "aboutme" && aboutMeButton)
            ? `${aboutMeButton.offsetLeft}px` 
            : highlightLeft;
        highlightLeft2 = designNav ? `${designNav.offsetLeft}px` : highlightLeft2;
    } else if (selectedMain === "photography") {
        highlightLeft = (selectedItem === "photo1" && photo1Button)
            ? `${photo1Button.offsetLeft}px`
            : (selectedItem === "photo2" && photo2Button)
            ? `${photo2Button.offsetLeft}px`
            : highlightLeft;
        highlightLeft2 = photoNav ? `${photoNav.offsetLeft}px` : highlightLeft2;
    }
}


    // Aktualisiere den Zustand basierend auf der aktuellen Route
    function updateFromRoute(route) {
    if (route === "/") {
        setSelected("projects");
        setMainSelected("design");
        changeIconAndText("../images/icons/pen-nib-light.svg");
    } else if (route === "/aboutme") {
        setSelected("aboutme");
        setMainSelected("design");
    } else if (route === "/photo") {
        setSelected("photo1");
        setMainSelected("photography");
        changeIconAndText("../images/icons/camera-light.svg");
    } else if (route === "/photo2") {
        setSelected("photo2");
        setMainSelected("photography");
        changeIconAndText("../images/icons/camera-light.svg");
    }
}


    // Überwache die Route und aktualisiere die Navbar
    $: updateFromRoute($location);

    // onMount: Aktualisiere die Highlight-Position und überwache die Fenstergröße
    onMount(() => {
    const iconWrapper = document.getElementById("iconwrapper");

    if (window.innerWidth < 800) {
        leftPhoto = '54px';
    }

    iconWrapper.addEventListener("mouseenter", () => {
        requestAnimationFrame(() => {
            const designNav = document.getElementById("designnav");
            const photoNav = document.getElementById("photonav");

            if (selectedMain === "photography" && photoNav) {
                highlightLeft2 = leftPhoto;
                photoNav.classList.add("active");
                designNav.classList.remove("active");
            } else if (selectedMain === "design" && designNav) {
                highlightLeft2 = leftDesign;
                designNav.classList.add("active");
                photoNav.classList.remove("active");
            }
        });
    });

    iconWrapper.addEventListener("mouseleave", () => {
        highlightLeft2 = "0px";
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
                style="left: {highlightLeft2}; width: {selectedMain === 'photography' ? '169px' : selectedMain === 'design' ? '130px' : '50px'};">
            </div>

            <a class="ankerlink" href="#/photo">
                <img class="currentIcon" src={currentIconSrc} alt="" />
            </a>
            <div class="hoverContent">
                <a class="ankerlink" href="#/" on:click={() => { selectedMain = 'design'; changeIconAndText("../images/icons/pen-nib-light.svg"); }}>
                    <div class="DesignNavBarStat" id="designnav">
                        <img src="../images/icons/pen-nib-light.svg" alt="" />
                        <p>Design</p>
                    </div>
                </a>
                <a class="ankerlink" href="#/photo" on:click={() => { selectedMain = 'photography'; changeIconAndText("../images/icons/camera-light.svg"); }}>
                    <div class="DesignNavBarStat" id="photonav">
                        <img src="../images/icons/camera-light.svg" alt="" />
                        <p>Photography</p>
                    </div>
                </a>
            </div>
            
        </div>
        <div class="NavbarWrapper">
            <div class="highlight" style="left: {highlightLeft}; width: {selectedMain === 'photography' ? '99px' : selectedMain === 'design' ? '114px' : '50px'};"></div>
            {#if selectedMain === "photography"}
                <a class="ankerlink" href="#/photo" >
                    <div id="photo1Button" class="NavButton" class:active={selectedItem === "photo1"}>Photo1</div>
                </a>
                <a class="ankerlink" href="#/photo2">
                    <div id="photo2Button" class="NavButton" class:active={selectedItem === "photo2"}>Photo2</div>
                </a>
            {:else}
                <a class="ankerlink" href="#/">
                    <div id="projectsButton" class="NavButton" class:active={selectedItem === "projects"} on:click={() => setSelected("projects")}>
                        <p>Projects</p>
                    </div>
                </a>
                <a class="ankerlink" href="#/aboutme">
                    <div id="aboutMeButton" class="NavButton" class:active={selectedItem === "aboutme"} on:click={() => setSelected("aboutme")}>
                        <p>About me</p>
                    </div>
                </a>
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
    .DesignNavBarStat p {
            font-size: 16px;
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
    .NavbarWrapper p {
        font-size: 16px;
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
        transition: left 0.5s;
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
        transform-origin: right;
    }
    #iconwrapper:not(:hover) .highlightIcons {
        width: 50px !important;
    }

    #iconwrapper:hover .highlightIcons {
        width: 132px; /* Adjust width as needed */
        /* transform: translateX(-80px); */
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
        #wrapper {
            gap: 15px;
            margin-bottom: 15px;
        }
        .DesignNavBarStat p {
            display: none;
        }
        .hoverContent {
            gap: 20px;
        }
        #iconwrapper:hover {
            width: 118px;
        }
        #iconwrapper:hover .highlightIcons {
        width: 56px !important;
        }
    }
</style>

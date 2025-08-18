<script>
    import { onMount, tick } from "svelte";
    import { page } from "$app/stores";

    let selectedItem = "projects";
    let highlightLeft = "160px";
    let highlightWidth = "0px";
    let ismobile = false;

    let projectsButton, aboutMeButton, playgroundButton;

    async function setSelected(button) {
        selectedItem = button;
        await tick(); // warte auf DOM-Update
        updateHighlightPosition();
    }

    function updateHighlightPosition() {
        const buttonMap = {
            projects: projectsButton,
            aboutme: aboutMeButton,
            playground: playgroundButton,
        };

        const button = buttonMap[selectedItem];
        if (button) {
            highlightLeft = `${button.offsetLeft}px`;
            highlightWidth = `${button.offsetWidth}px`;
        }
    }

    function updateFromRoute(route) {
        if (path.startsWith("/aboutme")) {
            selectedItem = "aboutme";
        } else if (path.startsWith("/playground")) {
            selectedItem = "playground";
        } else {
            selectedItem = "projects";
        }
    }

    onMount(async () => {
        const path = $page.url.pathname;

        if (path.includes("aboutme")) {
            selectedItem = "aboutme";
        } else if (path.includes("playground")) {
            selectedItem = "playground";
        } else {
            selectedItem = "projects"; // fallback
        }

        await tick(); // warte auf DOM update
        updateHighlightPosition();
    });
</script>

<main>
    <div id="wrapper">
        <div class="NavbarWrapper">
            <div
                class="highlight"
                style="left: {highlightLeft}; width: {highlightWidth};"
            ></div>


            <a class="ankerlink" href="/">
                <div
                    bind:this={projectsButton}
                    class="NavButton"
                    class:active={selectedItem === "projects"}
                    on:click={() => setSelected("projects")}
                >
                    <!-- {#if !ismobile}
                        <img src="../images/icons/folders-light.svg" alt="" />
                    {/if}
                    {#if selectedItem === "projects" || ismobile} -->
                        <p>Projects</p>
                    <!-- {/if} -->
                </div>
            </a>



            <a class="ankerlink" href="/playground">
                <div
                    bind:this={playgroundButton}
                    class="NavButton"
                    class:active={selectedItem === "playground"}
                    on:click={() => setSelected("playground")}
                >
                    <!-- {#if !ismobile}
                        <img
                            src="../images/icons/pen-nib-light_white.svg"
                            alt=""
                        />
                    {/if}
                    {#if selectedItem === "playground" || ismobile} -->
                        <p>Playground</p>
                    <!-- {/if} -->
                </div>
            </a>

            

            <a class="ankerlink" href="/aboutme">
                <div
                    bind:this={aboutMeButton}
                    class="NavButton"
                    class:active={selectedItem === "aboutme"}
                    on:click={() => setSelected("aboutme")}
                >
                    <!-- {#if !ismobile}
                        <img src="../images/icons/user-light.svg" alt="" />
                    {/if}
                    {#if selectedItem === "aboutme" || ismobile} -->
                        <p>About</p>
                    <!-- {/if} -->
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
        position: fixed;
        margin-bottom: 40px;
        bottom: 0;
        gap: 20px;
        z-index: 10;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 50%;
    }
    .NavbarWrapper {
        position: relative;
        height: 56px;
        padding: 4px;
        background-color: #000000;
        border: solid 0.5px #bcbcbc;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        transition: all 0.3s ease-in-out;
        z-index: 100;
        opacity: 0.65;
        
    }
    .NavbarWrapper p {
        font-size: 16px;
        font-weight: 400;
    }
    .NavbarWrapper:hover {
        animation: bounce 0.5s;
    }

    .highlight {
        position: absolute;
        height: 46px;
        background-color: white;
        border-radius: 23px;
        transition: all 0.5s;
        z-index: 0;
    }
    .active {
        color: black;
    }
    .NavButton {
        height: 100%;
        padding: 0px 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
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

    @media (max-width: 800px) {
        #wrapper {
            gap: 15px;
            margin-bottom: 15px;
        }
        .NavButton {
            flex-direction: column;
        }
        .NavButton p {
            font-size: 14px;
        }
    }
</style>

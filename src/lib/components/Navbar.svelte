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

    function updateFromRoute(pathname) {
        if (pathname.startsWith("/aboutme")) {
            selectedItem = "aboutme";
        } else if (pathname.startsWith("/playground")) {
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

    // Reagiere auf Route-Wechsel und halte die Highlight-Position synchron
    $: (async () => {
        const current = $page.url.pathname;
        updateFromRoute(current);
        await tick();
        updateHighlightPosition();
    })();
</script>

<main>
    <div id="wrapper">
        <div class="NavbarWrapper">
            <div
                class="highlight"
                style="left: {highlightLeft}; width: {highlightWidth};"
            ></div>

            <a
                class="ankerlink"
                href="/"
                bind:this={projectsButton}
                on:click={() => setSelected("projects")}
                aria-current={selectedItem === "projects" ? "page" : undefined}
            >
                <div
                    class="NavButton"
                    class:active={selectedItem === "projects"}
                >
                    <!-- {#if !ismobile}
                        <img src="../images/icons/folders-light.svg" alt="" />
                    {/if}
                    {#if selectedItem === "projects" || ismobile} -->
                    <p>Projects</p>
                    <!-- {/if} -->
                </div>
            </a>

            <a
                class="ankerlink"
                href="/playground"
                bind:this={playgroundButton}
                on:click={() => setSelected("playground")}
                aria-current={selectedItem === "playground"
                    ? "page"
                    : undefined}
            >
                <div
                    class="NavButton"
                    class:active={selectedItem === "playground"}
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

            <a
                class="ankerlink"
                href="/aboutme"
                bind:this={aboutMeButton}
                on:click={() => setSelected("aboutme")}
                aria-current={selectedItem === "aboutme" ? "page" : undefined}
            >
                <div
                    class="NavButton"
                    class:active={selectedItem === "aboutme"}
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
        /* Hoch genug setzen, damit nichts darüber liegt */
        z-index: 9999;
        /* Blur und Radius auf die eigentliche Navbar verlegt */
    }
    .NavbarWrapper {
        position: relative;
        height: 56px;
        padding: 4px;
        /* Halbtransparenter Hintergrund statt globaler Opacity */
        background-color: rgba(0, 0, 0, 0.65);
        border: solid 0.5px #bcbcbc;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        transition: all 0.3s ease-in-out;
        z-index: 100;
        /* Blur direkt auf dem Container, damit er die Pille vollständig füllt */
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        /* Clipping auf die abgerundete Form */
        overflow: hidden;
        pointer-events: auto; /* sicherstellen, dass die Leiste Events fängt */
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
        /* füllt vertikal exakt zwischen dem Innenabstand */
        top: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 24px;
        transition: all 0.5s;
        z-index: 0;
        pointer-events: none; /* Highlight soll Klicks nicht abfangen */
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
        display: block;
        height: 100%;
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

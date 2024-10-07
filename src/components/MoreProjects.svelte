<!-- Projects.svelte -->
<script>
    import Respiratory from "../pages/Respiratory.svelte";

    export let projectNames = [];

    // Mapping der Projektnamen zu den Projektdetails
    const projects = {
        Spot: {
            title: "Spot",
            description: "Description for Spot",
            imageUrl: "../images/SpotCard.png",
            route: "spot",
        },
        Growceries: {
            title: "Growceries",
            description: "Description for Growceries",
            imageUrl: "../images/GrowCard.png",
            route: "growceries",
        },
        Xtend: {
            title: "Xtend",
            description: "Description for Xtend",
            imageUrl: "../images/XtendCard.png",
            route: "xtend",
        },
        Respiratory: {
            title: "Respiratory",
            description: "Description for Respiratory",
            imageUrl: "../images/RespyCard.png",
            route: "respiratory",
        },
        Traumpalast: {
            title: "Traumpalast App Redesign",
            description: "Description for Traumpalast",
            imageUrl: "../images/TraumpalastCard.png",
            route: "traumpalast",
        },
    };
</script>

<main>
    <div id="wrapper">
        <hr id="seperator" />
        <p>More Projects</p>
        <div id="projectswrapper" class="pageWrapper">
            {#each projectNames.slice(0, 2) as projectName}
                {#if projects[projectName]}
                    <div class="card">
                        <a href="#/{projects[projectName].route}">
                            <div
                                class="innercard"
                                style="background-image: url({projects[
                                    projectName
                                ]
                                    .imageUrl}); background-size: cover; background-position: center;  color: {projectName ===
                                'Growceries'
                                    ? 'black'
                                    : 'white'}">
                                <h3>{projects[projectName].title}</h3>
                                <!-- <p>{projects[projectName].description}</p> -->
                            </div>
                        </a>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</main>

<style>
    #wrapper {
        margin-top: 200px;
        margin-bottom: 200px;
        height: auto;
        text-align: center;
    }
    #seperator {
        margin-top: 20px;
        width: 40vw;
        border: 0.5px solid #ccc;
        margin: 0 auto 50px;
    }
    #projectswrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
        height: auto;
        gap: 50px;
    }
    .card {
        width: 80%;
        max-width: 1200px;
        height: auto;
        aspect-ratio: 16 / 9;
        background-color: #f8f9fa;
        transition: transform 0.3s ease;
        background: white;
        border-radius: 22px;
        border: 0.75px #e2e2e2 solid;
        padding: 5px;
        text-decoration: none;
    }
    .card:hover {
        transform: scale(1.02);
    }
    .innercard {
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        border-radius: 16px;
        border: 0.5px #a7a7a7 solid;
        padding: 7%;
        box-sizing: border-box;
        position: relative;
        top: 0;
        left: 0;
        color: white;
        text-decoration: none;
        text-align: left;
    }
    a {
        text-decoration: none;
    }
    @media (max-width: 800px) {
        #wrapper {
            margin-top: 100px;
            margin-bottom: 0px;
        }
        #projectswrapper {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 50px;
        }
        .card {
            width: 100%;
            aspect-ratio: 16 / 9;
        }
        #seperator {
            width: 80vw;
        }
    }
</style>

<!-- Projects.svelte -->
<script>
    export let projectNames = [];

    // Mapping der Projektnamen zu den Projektdetails
    const projects = {
        Spot: {
            title: "Spot",
            description:
                "A spatial computing tool for thinking, keeping and using ideas.",
            imageUrl: "../images/Spot/Spot1.png",
            route: "spot",
        },
        Growceries: {
            title: "Growceries",
            description:
                "An Application that conects lokal farmers to reduse foodwaste",
            imageUrl: "../images/Growceries/Grow1.png",
            route: "growceries",
        },
        Xtend: {
            title: "Xtend",
            description: "The innovative way of playing Jenga",
            imageUrl: "../images/XtendCard_mobile.png",
            route: "xtend",
        },
        Respiratory: {
            title: "Respiratory",
            description: "An interactive exibishion design",
            imageUrl: "../images/RespyCard_mobile.png",
            route: "respiratory",
        },
        Traumpalast: {
            title: "Traumpalast App Redesign",
            description: "An Application Redesign",
            imageUrl: "../images/Traumpalast/Traum1.png",
            route: "traumpalast",
        },
        LYS: {
            title: "LYS",
            description:
                "Interactions shaped around you",
            imageUrl: "../images/LYS/LYSBanner.png",
            route: "lys",
        },
        BEN: {
            title: "BEN",
            description:
                "The App for Better Evidence News",
            imageUrl: "../images/BEN/BEN1.png",
            route: "ben",
        },
    };
</script>

<main>
    <div id="wrapper">
        <!-- <hr id="seperator" />
        <div style="text-align: center;">
            <p>More Projects</p>
        </div> -->
        <div id="projectswrapper" class="pageWrapper">
            {#each projectNames.slice(0, 2) as projectName}
                {#if projects[projectName]}
                    <a href="/{projects[projectName].route}">
                        <div
                            class="card"
                            style=" 
                                    background-size: cover; 
                                    background-position: center;  "
                        >
                            <div class="cardtxt">
                                <h3>{projects[projectName].title}</h3>
                                <p>{projects[projectName].description}</p>
                            </div>
                            <div class="prevImg">
                                <img
                                    src={projects[projectName].imageUrl}
                                    alt=""
                                />
                            </div>
                        </div>
                    </a>
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
    }
    .card p {
        color: #6a6a6a;
        font-size: 18px;
    }
    
    #projectswrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 100px;
        height: auto;
        gap: 20px;
    }
    .card {
        width: 100%;
        height: 360px;
        background-color: #f9f9f9;
        transition: all 0.3s ease;
        border-radius: 22px;
        border: 1.5px #e3e3e3 solid;
        padding: 32px;
        position: sticky;
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
    .card:hover {
        background-color: #f1f1f1;
        transform: translateY(-5px);
    }
    .card:hover .prevImg img {
        transform: scale(1.02);
    }
    .prevImg {
        height: 100%;
        border-radius: 16px;
        background-color: white;
        position: relative;
        overflow: hidden;
    }
    .prevImg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
        transition: transform 0.3s ease;
    }
    .cardtxt {
        gap: 20px;
        max-width: 200px;
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
            --pad: 25px;
            padding: var(--pad);
            height: auto;
            position: relative; /* Sticky auf Mobile aus */
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            gap: 2rem;
        }
    /* Bild: 5:4 Seitenverhältnis */
    .prevImg { height: auto; aspect-ratio: 5 / 4; }
        .prevImg img { height: 100%; }
        /* Typo & Spacing angelehnt an Landingpage */
        .card p { font-size: 18px; }
        .cardtxt {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 20px;
            max-width: none;
        }
        /* Beschreibung auf 2 Zeilen clampen */
        .cardtxt p:first-of-type {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
</style>

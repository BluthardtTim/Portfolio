<script>
    const projects = {
        Photography: {
            title: "My Photography Selection",
            description: "A selection of my photos",
            imageUrl: "../images/gallerie/07.jpg",
            route: "photo",
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
    };

    // Extract the project names for iteration
    const projectNames = Object.keys(projects);
</script>

<main>
    <div class="savespaceTop"></div>
    <div class="pageWrapper">
        <div id="wrapper">
            {#each projectNames as projectName}
                <div class="card">
                    <a href="#/{projects[projectName].route}">
                        <div
                            class="innercard"
                            style="background-image: url({projects[projectName].imageUrl}); 
                                   background-size: cover; 
                                   background-position: center;  
                                   color: {projectName === 'Growceries' ? 'black' : 'white'}">
                            <h3>{projects[projectName].title}</h3>
                            <!-- <h5>{projects[projectName].description}</h5> -->
                            <img
                                class="icon"
                                src="../images/icons/arrow-up-right-light.svg"
                                alt="Arrow"
                                style="filter: {projectName === 'Growceries' ? 'none' : 'invert(100%) sepia(100%) saturate(0%) hue-rotate(9deg) brightness(103%) contrast(103%)'};"
                            />
                        </div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
    <div class="savespaceTop"></div>
</main>

<style>
    #wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    .card {
        width: 100%;
        height: auto;
        aspect-ratio: 5 / 3;
        background-color: #f8f9fa;
        background: white;
        border-radius: 22px;
        border: 0.75px #e2e2e2 solid;
        padding: 5px;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    .innercard {
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        border-radius: 16px;
        border: 0.5px #a7a7a7 solid;
        box-sizing: border-box;
        position: relative;
        top: 0;
        left: 0;
        color: white;
        text-decoration: none;
        padding: 40px;
    }
    a {
        text-decoration: none;
    }
    .card:hover {
        transform: scale(1.02);
    }
    .card:hover .icon {
        transform: translate(10px, -10px);
    }
    .icon {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 40px;
        right: 40px;
        transition: transform 0.5s ease;
    }
    @media (max-width: 800px) {
        #wrapper {
            grid-template-columns: 1fr;
        }
        .innercard {
            padding: 30px;
        }
        .icon {
            top: 30px;
            right: 30px;
            height: 32px;
            width: 32px;
        }
    }
</style>

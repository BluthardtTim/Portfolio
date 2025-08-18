<script>
    import Footer from "$lib/components/Footer.svelte";

    const projects = {
        Photography: {
            title: "My Photography Selection",
            description:
                "This is a selection of photos I have taken in the past few years",
            imageClass: "backgroundimgPhoto",
            imgUrl: "../images/gallerie/03.jpg",
            route: "photo",
        },
        Xtend: {
            title: "Xtend",
            description: "The innovative way of playing Jenga",
            imageClass: "backgroundimgXtend",
            imgUrl: "../images/XtendCard_mobile.png",
            route: "xtend",
        },
        Respiratory: {
            title: "Discover your Respiratory sytem",
            description: "An interactive exibishion design",
            imageClass: "backgroundimgRespy",
            imgUrl: "../images/RespyCard.png",
            route: "respiratorysystem",
        },
        Growceries: {
            title: "Growceries",
            description:
                "An Application that conects lokal farmers to reduse foodwaste",
            imageClass: "backgroundimgGrow",
            imgUrl: "../images/GrowCard_mobile.png",
            route: "growceries",
        },
    };

    // Extract the project names for iteration
    const projectNames = Object.keys(projects);
</script>

<main>
    <div class="savespaceTop"></div>

    <div class="project_layout">
        <div class="txt">
            <h5>Playground</h5>
            <p>
                Welcome to my playground, my personal collection of random
                designs, photographs, explorations or any thing that I could not
                find a place to show
            </p>
        </div>
    </div>

    <div class="spacer"></div>

    <div class="pageWrapper">
        <div id="wrapper">
            {#each projectNames as projectName}
                <a href="/playground/{projects[projectName].route}">
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
                            <img src={projects[projectName].imgUrl} alt="" />
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>

    <div class="spacer"></div>

    <div class="startpageWrapper">
        <Footer />
    </div>
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
        height: 360px;
        background-color: #f9f9f9;
        transition: all 0.3s ease;
        border-radius: 22px;
        border: 1.5px #e3e3e3 solid;
        padding: 32px;
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
            grid-template-columns: 1fr;
        }
        .card {
            width: 100%;
            height: 430px;
            padding: 30px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }
</style>

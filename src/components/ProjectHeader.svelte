<script>
    import Teammates from "../components/Teammates copy.svelte";

    export let title;
    export let description;
    export let myRole;
    export let duration;
    export let teamNames;
    // export let backgroundImage;

    function goBack() {
        window.history.back();
    }
</script>

<main>
    <div class="Projectbunner">
        <div id="backgroundimg">
            <!-- <img src={backgroundImage} alt="backgroundImage" /> -->
        </div>
        <div class="pageWrapper">
            <div class="savespaceTop"></div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img
                class="back"
                src="../images/icons/arrow-left-light.svg"
                alt="back-arrow"
                on:click={goBack}
            />
            <h1>{title}</h1>
            <h3 id="description">{description}</h3>
            <div class="CaseStudyCredits">
                <div>
                    <h5>my role</h5>
                    <p>{@html myRole.split(', ').join('<br>')}</p>
                </div>                
                <div>
                    <h5>duration</h5>
                    <p>{duration}</p>
                </div>
                <div>
                    <h5>teammates</h5>
                    <Teammates teammates={teamNames} />
                </div>
            </div>
        </div>
    </div>
</main>

<style>
    #backgroundimg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 70vh;
        z-index: -1;
    }
    /* #backgroundimg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    } */
    .back {
        position: absolute;
        top: 174px;
        /* left: 167px; */
        left: 8vw;
        width: 30px;
        height: 30px;
    }
    .back:hover {
        cursor: pointer;
        transform: translateX(-5px);
        transition: all 0.2s ease-in-out;
    }
    .Projectbunner {
        width: 100vw;
        height: 70vh;
        background-color: #f6f6f6;
        z-index: -2;
        border-bottom: 0.5px solid #bebebe;
    }
    .savespaceTop {
        height: 165px;
    }
    #description {
        max-width: 50%;
    }
    .CaseStudyCredits {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
        margin-top: 15vh;
        width: 100%;
    }
    @media (max-width: 800px) {
        .CaseStudyCredits {
            margin-top: 60px;
            width: 100%;
            gap: 20px;
            grid-template-columns: 1fr 1fr;
        }
        #description {
            max-width: 100%;
        }
        .back {
            top: 75px;
            left: 5vw;
        }
        #backgroundimg {
            height: 85vh;
        }
        .Projectbunner {
            height: 85vh;
        }
        .savespaceTop {
            height: 140px;
        }
    }

</style>
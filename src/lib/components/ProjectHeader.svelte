<script>
    import Teammates from "../components/Teammates.svelte";

    export let title;
    export let description;
    export let myRole;
    export let duration;
    export let teamNames;

    function goBack() {
        window.history.back();
    }
</script>

<main>
    <div class="Projectbunner">
        <div class="pageWrapper">
            <!-- <div class="savespaceTop"></div> -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img
                class="back"
                src="../images/icons/arrow-left-light.svg"
                alt="back-arrow"
                on:click={goBack}
            />
            <!-- <h1>{title}</h1>
            <h3 id="description">{description}</h3> -->
            <!-- <div class="CaseStudyCredits">
                <div>
                    <p><strong>My role</strong></p>
                    <p>{myRole}</p>
                </div>                
                <div>
                    <p><strong>Duration</strong></p>
                    <p>{duration}</p>
                </div>
                <div>
                    <p><strong>Teammates</strong></p>
                    <Teammates teammates={teamNames} />
                </div>
            </div> -->
        </div>
    </div>
</main>

<style>
    p strong{
        font-weight: 500;
    }
    .back {
        position: absolute;
        top: 14rem;
        /* left: 167px; */
        left: 8vw;
        width: 30px;
        height: 30px;
        filter: none;
    }
    :global(html[data-theme="dark"]) .back {
        filter: invert(1) brightness(1.15);
    }
    .back:hover {
        cursor: pointer;
        transform: translateX(-5px);
        transition: all 0.2s ease-in-out;
    }
    .Projectbunner {
        width: 100vw;
        z-index: -2;
    }
    .savespaceTop {
        height: 165px;
    }
    #description {
        max-width: 50%;
    }
    .CaseStudyCredits {
        margin-top: 15vh;
    }
    .CaseStudyCredits div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        gap: 2rem;
        max-width: 800px;
        width: 100%;
    }
    .CaseStudyCredits div p:first-child {
        text-align: right;
    }
    .CaseStudyCredits div p:first-child strong {
        font-family: var(--font-heading);
        font-weight: 400;
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
        .savespaceTop {
            height: 140px;
        }
        .Projectbunner {
            height: 140px;
        }
    }

</style>
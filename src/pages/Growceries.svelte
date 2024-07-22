<script>
    import Teammates from "../components/Teammates.svelte";
    import MoreProjects from "../components/MoreProjects.svelte";

    function goBack() {
        window.history.back();
    }

    let selectedProjects = ["Spot", "Xtend"];
</script>

<main>
    <div class="Projectbunner">
        <div class="pageWrapper">
            <div class="savespaceTop"></div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img class="back" src="../images/icons/arrow-left-light.svg" alt="back-arrow" on:click={goBack}>
            <h1>Growceries</h1>
            <h3>
                Don't waste, share the Taste! Lebensmittel Weiterverwertung der nächsten Generation
            </h3>
            <div class="CaseStudyCredits">
                <div>
                    <h5>my roll</h5>
                    <p>
                        Konzept Entwurf <br />
                        Umsetzung Video in Film, Schnitt
                    </p>
                </div>
                <div>
                    <h5>duration</h5>
                    <p>
                        1. Semester <br />
                        March 22 – June 22
                    </p>
                </div>
                <div>
                    <h5>team</h5>
                    <p>
                        University <br />
                        Marc, Julia, Hannah, me
                        <Teammates />
                    </p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <h5>Overview of the project</h5>
        <p>This is a critical section for any reader who does not have a lot of time to read through the entire case study but wants a brief summary of the project, goals, and results. They may be going through a stack of applications and only have a few minutes to scan over one or two projects in your portfolio. Usually the first two. If nothing stands out or if the work is unclear then they will quickly move on.</p>
    </div>
    <MoreProjects projectNames={selectedProjects} />
</main>

<style>
    .back {
        position: absolute;
        top: 174px;
        left: 167px;
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
        z-index: -1;
        border-bottom: 0.5px solid #bebebe;
        box-shadow: inset 0px -10px 10px -10px rgba(0, 0, 0, 0.1);
    }
    .savespaceTop {
        height: 170px;
    }
    .CaseStudyCredits {
        display: flex;
        flex-direction: row;
        gap: 70px;
        margin-top: 15vh;
    }
</style>

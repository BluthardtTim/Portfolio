<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import Teammates from "../components/Teammates.svelte";
    import YouTubeVideoEmbed from "../components/YouTubeVideoEmbed.svelte";
    import Image from "../components/Image.svelte";
    let SpotVideourl = "https://youtu.be/wguCO5G26hc";
    let imagePath = "../images/Portrait.jpg";
    let imageCaption = "This is an example caption";

    let teamNames = ["Amelie", "Julia", "Tim"];
    let selectedProjects = ["Growceries", "Xtend"];

    function goBack() {
        window.history.back();
    }
</script>

<main>
    <div class="Projectbunner">
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
            <h1>Spot</h1>
            <h3>
                A spatial computing tool for thinking, keeping and using ideas.
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
                        3. Semester <br />
                        March 23 – June 24
                    </p>
                </div>
                <div>
                    <h5>team</h5>
                    <Teammates teammates={teamNames} />
                </div>
            </div>
        </div>
    </div>

    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <h5>Overview of the project</h5>
        <p>
            This is a critical section for any reader who does not have a lot of
            time to read through the entire case study but wants a brief summary
            of the project, goals, and results. They may be going through a
            stack of applications and only have a few minutes to scan over one
            or two projects in your portfolio. Usually the first two. If nothing
            stands out or if the work is unclear then they will quickly move on.
        </p>
        <h5>Problem</h5>
        <p>
            This section specifically looks at the problems the project is
            trying to address. What are the business requirements, user needs,
            pain points that the project solves? Who are the end-users and core
            target market? What platforms was the project for and where there
            any technical constraints or business KPIs you had to keep in mind?
        </p>
        <h5>Future Scenario</h5>
        <p>
            What if, in 5-10 years, we could use location-based information with
            regular glasses to store ideas and information.
        </p>
        <h5>Impact and outcome</h5>
        <p>
            The critical last section concludes the case study by outlining any
            project success metrics that were achieved, awards that were won. In
            the case of a project that is not live, reflections and the
            project’s next steps are sufficient to round up the case study. Try
            to share any lessons that you learned to demonstrate you are
            invested in both the project’s life cycle and your career
            development.
        </p>
        <h5>The final Video</h5>
        <YouTubeVideoEmbed url={SpotVideourl} />
        <Image src={imagePath} caption={imageCaption} />
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
        box-shadow: inset 0px -10px 10px -10px rgba(3, 2, 2, 0.1);
    }
    .savespaceTop {
        height: 165px;
    }
    .CaseStudyCredits {
        display: flex;
        flex-direction: row;
        gap: 70px;
        margin-top: 15vh;
    }
    p {
        font-size: 1rem;
        margin-bottom: 5rem;
    }
</style>

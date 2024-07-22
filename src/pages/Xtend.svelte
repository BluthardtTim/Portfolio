<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import Teammates from "../components/Teammates.svelte";
    import YouTubeVideoEmbed from "../components/YouTubeVideoEmbed.svelte";
    import Image from "../components/Image.svelte";
    let SpotVideourl = "https://youtu.be/wguCO5G26hc";
    let imagePath = "../images/Portrait.jpg";
    let imageCaption = "This is an example caption";

    let teamNames = ["Amelie", "Julia", "Tim"];
    let selectedProjects = ["Spot", "Growceries"];

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
            <h1>Xtend</h1>
            <h3>
                The innovative way of playing Jenga
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
                        2. Semester <br />
                        October 23 – February 24
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
        height: 170px;
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

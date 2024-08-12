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
            <div>
                <h5>Overview of the project</h5>
                <p class="twocoloumns">
                    The task involved identifying signals and trends in
                    technology and selecting one that we believe has the
                    potential to address a problem within the next 5 to 10
                    years. We started the design process by creating a concept
                    for augmented reality, which led to the development of Spot. <br
                    />
                    Spot is a spacial computing tool where thoughts and ideas can
                    be stored. The Location based information will allow you to exes
                    our Information wherever it gets nesesary.
                </p>
            </div>
            <div>
                <h5>Problem we are solving</h5>
                <p class="twocoloumns">
                    Every day, we receive countless pieces of information from
                    various sources. Whether it's feedback at university, a
                    conversation with friends, a podcast, or simply the task of
                    shopping. We store this information in different places: on
                    the computer, in a notes app, in a notebook, or even just in
                    our thoughts. However, when we need the information later,
                    we often forget it completely or don't remember where to
                    find it. This is where Spot comes in. <br /> Spot is a tool that
                    helps you store your thoughts in one place, making them always
                    available when you need them. The vision for Spot is to be the
                    tool that allows you to access your thoughts, regardless of their
                    form, creating a comprehensive network of your own ideas.
                </p>
            </div>
        <h5>Future Scenario</h5>
        <p style="font-size: 22px; text-align: center;">
            What if, in 5-10 years, you could use <br />regular glasses with
            location-based information to store ideas and information.
        </p>
        <h5>Spot</h5>
        <p class="twocoloumns">
            Our tool works with spots – but what exactly are they? <br /> Various
            types of information can be stored in the spots. We have thought long
            and hard about their appearance to prevent your environment from being
            overloaded with information. In Spot, the information is packaged in
            Spheres. This way, you recognize that your thoughts are stored here,
            but you must actively decide to engage with them.
        </p>
        <div class="zwocolumn">
            <div>
                <img
                    src="../images/SpotProps.png"
                    alt=""
                    style="width: 100%;"
                />
            </div>
            <p>
                A spot can be placed on any object in your environment. To make
                the usage as intuitive as possible, there are so-called props
                that you can add to the spots. These allow you to decide whether
                you want to use the spot for simple, quick notes or for more
                complex thoughts. These props range from simple inputs like
                text, audio, or images to smart props that can track data for
                you. For example: How many people were here when I was not? With
                these props, you can also give the spots an expiration date,
                reminding you in time. You can also specify who is allowed to
                see your spots.
            </p>
        </div>

        <p>
            When you provide a specific prop to your Spot, its behavior and
            appearance change accordingly. This feature ensures that your
            environment remains uncluttered and you maintain complete control
            over your stored information.
        </p>

        <div class="viercolumn">
            <div>
                <img src="../images/SpotProps.png" alt="" style="width: 100%;"/>
                <h3>default</h3>
                <p>
                    Spots are composed of particles and are designed to abstract
                    data structures. Their dynamic animation ensures seamless
                    integration into real-world environments.
                </p>
            </div>
            <div>
                <img src="../images/SpotProps.png" alt="" style="width: 100%;"/>
                <h3>smart</h3>
                <p>
                    Smart Spots have the ability to track your Data. This is
                    visually represented by a pulsation of the Spot.
                </p>
            </div>
            <div>
                <img src="../images/SpotProps.png" alt="" style="width: 100%;"/>
                <h3>urgent</h3>
                <p>
                    Smart Spots have the ability to track your Data. This is
                    visually represented by a pulsation of the Spot.
                </p>
            </div>
            <div>
                <img src="../images/SpotProps.png" alt="" style="width: 100%;"/>
                <h3>group</h3>
                <p>
                    Smart Spots have the ability to track your Data. This is
                    visually represented by a pulsation of the Spot.
                </p>
            </div>
        </div>

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
    .zwocolumn {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;
    }
    .viercolumn {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 50px;
    }
    .CaseStudyCredits {
        display: flex;
        flex-direction: row;
        gap: 70px;
        margin-top: 15vh;
    }
    p {
        margin-bottom: 7rem;
    }
    .twocoloumns{
        margin-bottom: 7rem;
        column-count: 2;
        column-gap: 2rem;
    }
</style>

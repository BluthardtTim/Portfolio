<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import YouTubeVideoEmbed from "../components/YouTubeVideoEmbed.svelte";
    import Image from "../components/Image.svelte";
    import ProjectHeader from "../components/ProjectHeader.svelte";
    import Footer from "../components/Footer.svelte";
    import ImageSlideshow from "../components/ImageSlideshow.svelte";
    import FigmaEmbed from "../components/FigmaEmbed.svelte";
    let SpotVideourl = "https://youtu.be/wguCO5G26hc";
    let imagePath = "../images/Portrait.jpg";
    let imageCaption = "This is an example caption";

    let teamNames = ["Amelie Schlüter", "Julia Zöllner"];
    let selectedProjects = ["Growceries", "Respiratory"];

    let imagesSlideshow = [
        "../images/Spot/VisionPro.JPG",
        "../images/Portrait2.jpg",
        "../images/SpotCard.png",
        "../images/SpotCard.png",
        "../images/SpotCard.png",
    ];
</script>

<main>
    <ProjectHeader
        title="Spot"
        description="A spatial computing tool for thinking, keeping and using ideas."
        myRole="Concept design, realisation of video in film, editing"
        duration="3. Semester, March 23 – June 24"
        {teamNames}
        backgroundImage="../images/SpotProjectBanner.png"
    />

    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <div>
            <h5>Overview of the project</h5>
            <p class="twocoloumns">
                The task involved identifying signals and trends in technology
                and selecting one that we believe has the potential to address a
                problem within the next 5 to 10 years. We started the design
                process by creating a concept for augmented reality, which led
                to the development of Spot. Spot is a spacial computing tool
                where thoughts and ideas can be stored. The Location based
                information will allow you to exes our Information wherever it
                gets nesesary.
            </p>
        </div>
        <div>
            <h5>Problem we are solving</h5>
            <p class="twocoloumns">
                Every day, we receive countless pieces of information from
                various sources. Whether it's feedback at university, a
                conversation with friends, a podcast, or simply the task of
                shopping. We store this information in different places: on the
                computer, in a notes app, in a notebook, or even just in our
                thoughts. However, when we need the information later, we often
                forget it completely or don't remember where to find it. This is
                where Spot comes in. Spot is a tool that helps you store your
                thoughts in one place, making them always available when you
                need them. The vision for Spot is to be the tool that allows you
                to access your thoughts, regardless of their form, creating a
                comprehensive network of your own ideas.
            </p>
        </div>

        <img src="../images/Spot/SpotIdeation.png" alt="Spot" />
        <h5>Future Scenario</h5>
        <p style="font-size: 22px; text-align: center;">
            What if, in 5-10 years, you could use regular glasses with
            location-based information to store ideas and information.
        </p>
        <h5>Spot</h5>
        <p class="twocoloumns">
            Our tool works with spots – but what exactly are they? Various types
            of information can be stored in the spots. With its appearance it
            prevents your environment from being overloaded with information
            allowing you to know your thoughts are stored but you need to
            actively decide to engage with them. A spot can be placed on any
            object in your environment. To make the usage as intuitive as
            possible, there are so-called props that you can add to the spots.
            These allow you to decide whether you want to use the spot for
            simple, quick notes or for more complex thoughts. These props range
            from simple inputs like text, audio, or images to smart props that
            can track data for you. With these props, you can also give the
            spots an expiration date, reminding you in time and specify who is
            allowed to see your spots.
        </p>
        <p>
            When you provide a specific prop to your Spot, its behavior and
            appearance change accordingly. This feature ensures that your
            environment remains uncluttered and you maintain complete control
            over your stored information.
        </p>
        <h5>Immersive Space</h5>
        <p class="twocoloumns">
            Sometimes, you may want to actively engage with your thoughts. For
            this purpose, there is the Immersive Space. This is a place free
            from external influences where all your Spots are displayed not by
            date or location, but thematically connected. Spots that are related
            in content are linked together and grouped into clusters. This
            approach allows thoughts get together from different locations and
            creation dates. It can lead to new ideas and perspectives that you
            might not have considered before. In the Immersive Space, you can
            explore your cognitive landscape and uncover innovative connections.
        </p>
        <Image
            src="../images/Spot/ImmersiveSpace.png"
            caption="Immersive Space"
        />
        <h5>The Prototype</h5>
        <p>
            To make our vision for Spot tangible, we built a prototype for the
            Apple Vision Pro. This allows us to create and interact with Spots
            already today.
        </p>
        <Image src="../images/Spot/SpotPrototype.png" caption="Apple Vision Pro Prototype" />

        <h5>The final Video</h5>
        <YouTubeVideoEmbed url={SpotVideourl} />
    </div>
    <MoreProjects projectNames={selectedProjects} />
    <Footer />
</main>

<style>
    p {
        margin-bottom: 7rem;
    }
    img {
        margin-bottom: 3rem;
    }
    @media (max-width: 800px) {
        .twocoloumns {
            column-count: 1;
        }
    }
</style>

<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import ProjectHeader from "../components/ProjectHeader.svelte";
    import Footer from "../components/Footer.svelte";
    import Image from "../components/Image.svelte";
    import YouTubeVideoEmbed from "../components/YouTubeVideoEmbed.svelte";

    let selectedProjects = ["Spot", "Traumpalast"];
    let GrowceriesVideourl = "https://youtu.be/Di2I94OvIoo";
</script>

<main>
    <ProjectHeader
        title="Growceries"
        description="A platform that connects local farmers with consumers."
        myRole="User Research, Information architecture, Visual Design, User Testing, Video"
        duration="one week"
        teamNames={["Marc Schade", "Julia Zöllner", "Hannah Moser"]}
    />

    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <h5>Outcome of a Design Sprint</h5>
        <p class="twocoloumns">
            As part of a university project, this project focuses on the concept
            and design of an app aimed at preventing food waste. The project
            followed the structure of the Google Design Sprint. Over the course
            of a week, topics such as user research, prototyping, etc. were
            addressed, ending in the creation of a Minimum Viable Product (MVP)
            by the end of the sprint."
        </p>
        <Image
            src="../images/Growceries/GrowSprint.png"
            caption="Google Design Sprint Struckture"
        />

        <div class="spacer"></div>

        <h5>What is Growceries?</h5>
        <p class="twocoloumns">
            Growceries is a MVP, a platform where farmers can reach out to
            customers and customers can find grown locally food. Foodwase can be
            reduced because farmers or any other grandma can sell their harvest
            witch is to much for their own usage. Throught that customers have
            easier access to regional and ecological food.
        </p>
        <Image
            src="../images/Growceries/GrowFlow.png"
            caption="Workflow of Growceries"
        />
        <div class="spacer"></div>

        <h5>Design Prozess</h5>
        <p class="twocoloumns">
            Firstly we reached out and did Interviews with potential users to
            gain valuable insights. Speeking to our target griup, loakl farmers
            and environment friendly consumers helped us to understand the needs
            and problems of both sides. We found out that for a lot of people
            ecological and regional food is important but having an extra step
            of driving somwhere else to get the regional food is often to much
            effort. So we needed a solution that makes the effort as low as
            possible but also alows other customers drive further if they want
            to. Secondly the privacy was an important factor, so it is important
            to hide the exact location of a selling farmer but at the same time 
            making the customer know how long it takes to get to the location.
            Also later in the process the customer must know where to go to pick 
            up the harvest.
        </p>

        <p class="twocoloumns">
            Out of these insights we framed 'How might we' questions to clearly
            define the outcome for the application. Following market research,
            we proceeded with initial sketches and visualizations. The process
            also included user testing to refine the concept, leading to the
            development of a final Minimum Viable Product (MVP).
        </p>
        <div class="spacer"></div>
        <h5>Branding</h5>
        <p class="twocoloumns">
            To create a playful yet professional look for our app, we developed
            brand guidelines and applied them to our product. These guidelines
            ensure an intuitive and visually appealing interface, making it easy
            for users to navigate while maintaining consistency across the
            Application.
        </p>
        <img src="../images/Growceries/GrowBranding.png" alt="Branding" />

        <div class="spacer"></div>

        <h5>Outcome of the project</h5>
        <p class="twocoloumns">
            The result of the project is a fully functional prototype of the
            Growceries app. The app connects local farmers with consumers,
            allowing users to purchase fresh produce directly from the farm. The
            app also includes a feature that allows users to share their own
            produce with others, thereby reducing food waste.
        </p>
        <YouTubeVideoEmbed url={GrowceriesVideourl} project="Growceries" />
    </div>
    <MoreProjects projectNames={selectedProjects} />
    <Footer />
</main>

<style>
    .spacer {
        height: 7rem;
    }
    p {
        margin-bottom: 3rem;
    }
    img {
        margin-bottom: 3rem;
    }
</style>

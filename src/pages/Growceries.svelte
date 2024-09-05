<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import ProjectHeader from "../components/ProjectHeader.svelte";
    import Footer from "../components/Footer.svelte";
    import Image from "../components/Image.svelte";

    let selectedProjects = ["Spot", "Xtend"];
</script>

<main>
    <ProjectHeader
        title="Growceries"
        description="A platform that connects local farmers with consumers."
        myRole="Concept, Design, Development"
        duration="1. Semester, March 23 – June 23"
        teamNames={["Marc", "Julia", "Hannah", "Tim"]}
        backgroundImage="../images/GrowProjectBanner.png"
    />

    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <h5>Overview of the project</h5>
        <p class="twocoloumns">
            As part of a university project, this project focuses on the concept
            and design of an app aimed at preventing food waste. The project
            followed the structure of a Google Design Sprint. Over the course of
            a week, topics such as user research, prototyping, etc. were
            addressed, culminating in the creation of a Minimum Viable Product
            (MVP) by the end of the sprint."
        </p>
        <h5>
            Long-term goal: "The reduction of food waste in home food
            production"
        </h5>
        <Image
            src="../images/Growceries/GrowFlow.png"
            caption="Workflow of Growceries"
        />

        <h5>Design Prozess</h5>
        <p class="twocoloumns">
            Interviews with potential users were conducted to gain valuable
            insights. We then framed 'How might we' questions to clearly define
            the desired outcomes for the application. Following thorough market
            research, we proceeded with initial sketches and visualizations. The
            process also included user testing to refine the concept, leading to
            the development of a final Minimum Viable Product (MVP).
        </p>

        <h5>Branding</h5>
        <p class="twocoloumns">
            To create a playful yet professional look for our app, we developed
            brand guidelines and applied them to our product. These guidelines
            ensure an intuitive and visually appealing interface, making it easy
            for users to navigate while maintaining consistency across the
            Application.
        </p>
        <img src="../images/Growceries/GrowBranding.png" alt="Branding" />
        <h5>Outcome of the project</h5>
        <p class="twocoloumns">
            The result of the project is a fully functional prototype of the
            Growceries app. The app connects local farmers with consumers,
            allowing users to purchase fresh produce directly from the farm. The
            app also includes a feature that allows users to share their own
            produce with others, thereby reducing food waste.
        </p>
    </div>
    <MoreProjects projectNames={selectedProjects} />
    <Footer />
</main>

<style>
    .savespaceTop {
        height: 170px;
    }
    p {
        margin-bottom: 7rem;
    }
    .twocoloumns {
        margin-bottom: 7rem;
        column-count: 2;
        column-gap: 2rem;
    }
    img {
        margin-bottom: 3rem;
    }
</style>

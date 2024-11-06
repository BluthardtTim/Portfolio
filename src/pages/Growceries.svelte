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
            and design of an app that aimes to prevent food waste. The project
            followed the structure of the Google Design Sprint. Within a week,
            topics such as user research, prototyping, etc. were addressed,
            ending in the creation of a Minimum Viable Product (MVP) by the end
            of the sprint."
        </p>
        <Image
            src="../images/Growceries/GrowSprint.png"
            caption="Google Design Sprint Struckture"
        />

        <div class="spacer"></div>

        <h5>What is Growceries?</h5>
        <p class="twocoloumns">
            Growceries is a MVP, a platform where farmers can reach out to
            customers and customers can find locally grown food. Foodwaste can
            be reduced because farmers or any other grandma can sell their
            harvest which is to much for their own usage. That allows customers
            to have easier access to regional and ecological food.
        </p>
        <Image
            src="../images/Growceries/GrowFlow.png"
            caption="Workflow of Growceries"
        />
        <div class="spacer"></div>

        <h5>Design Process</h5>
        <p class="twocoloumns">
            First, we interviewed potential users to gain
            valuable insights. Speaking to our target group, local farmers and
            environment friendly consumers helped us to understand the needs and
            problems of both sides. We discovered that ecological and regional
            food is important for a lot of people. To drive somwhere else just to get
            the regional food is often to much effort. 
            
            So we needed a solution
            that brings transportation to a minimum and also allows other
            customers to drive further if they want to. Secondly, privacy is an
            important factor. Therefore it is important to hide the exact location of a
            selling farmer, but at the same time letting the customer know how
            long it takes to get to the target location. Additionally the
            customer must be informed where to go ans pick up the goods.
        </p>

        <p class="twocoloumns">
            Out of these insights we framed 'How might we' questions to clearly
            define the applications outcome. After a deep market research,
            we proceeded with initial sketches and visualizations. The process
            also included user testing to refine the concept. This led to the
            development of a final Minimum Viable Product (MVP).
        </p>
        <div class="spacer"></div>
        <h5>Branding</h5>
        <p class="twocoloumns">
            To create a professional look for our app, we developed
            brand guidelines and applied them to our product. These guidelines
            ensure an intuitive and visually appealing interface, making it easy
            for users to navigate while maintaining consistency across the
            application.
        </p>
        <img src="../images/Growceries/GrowBranding.png" alt="Branding" />

        <div class="spacer"></div>

        <h5>Outcome of the project</h5>
        <p class="twocoloumns">
            The result of the project is a fully functional prototype of the
            Growceries app. The app connects local farmers with consumers,
            allowing users to purchase fresh products directly from the farm. The
            app also allows users to share their own
            product with others. This helps to reduce food waste.
        </p>
        <YouTubeVideoEmbed url={GrowceriesVideourl} project="Growceries" />
    </div>
    <MoreProjects projectNames={selectedProjects} />
    <div class="startpageWrapper">
        <Footer />
    </div>
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

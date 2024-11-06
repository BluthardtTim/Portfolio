<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import YouTubeVideoEmbed from "../components/YouTubeVideoEmbed.svelte";
    import Image from "../components/Image.svelte";
    import ProjectHeader from "../components/ProjectHeader.svelte";
    import Footer from "../components/Footer.svelte";
    let TraupalastVideourl = "https://youtu.be/wguCO5G26hc";

    let teamNames = ["Joshua Quere", "Dimitri Wagner"];
    let selectedProjects = ["Growceries", "Spot"];
</script>

<main>
    <ProjectHeader
        title="Traumpalast"
        description="An Application Redesign"
        myRole="User Research, Information architecture, Visual Design, User Testing, Video"
        duration="four months"
        {teamNames}
    />

    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <div>
            <h5>Overview of the project</h5>
            <p class="twocoloumns">
                "Traumpalast" is a cinema chain from southern Germany with an app
                thathas an old design and needs a makeover. And that's exactly what
                we did! We had a look at the customer journey of the current
                Traumpalast app. We looked at what other cinema brands do well and
                redesigned the Traumpalast app from scratch. This included
                rethinking the concept, user journey, features, and visual
                design.
            </p>
        </div>
        <div class="spacer"></div>
        <div>
            <h5>Why Redesign the Traumpalast App?</h5>
            <p class="twocoloumns">
                The navigation structure of the old Traumpalast app was chaotic
                and unstructured, with many possible ways to reach the same
                pages or features. The app also appeared to be an exact copy of
                the website, with features unnecessary for mobile applications
                such as "go back" or "scroll up" buttons in the navigation bar.
                The app lacked a clear visual hierarchy to guide users easily
                through its interface. Additionally, we believed that a cinema
                visit is an experience in itself, and we wanted to reflect this
                through the app's appearance.
            </p>
        </div>
        <div class="spacer"></div>
        <div>
            <h5>Design Process</h5>
            <p class="twocoloumns">
                With the current App in our hands we started by having a look at
                the old navigation structure: Afterwards we created a Featurelist and KANO-Model
                to outsource useless features and used the insights to define
                a new concept for the Traumpalast App. After forming personas
                for a potential user group we did user research to find the
                exact needs and build the new visual design upon these insights.
                Based on these results we build mid-fidelity wireframes.
            </p>
        </div>
        <Image
            src="../images/Traumpalast/Wireframes.png"
            caption="mid-fidelity wireframes"
        />

        <div class="spacer"></div>
        <div>
            <h5>The new Traumpalast App</h5>
            <p class="twocoloumns">
                To create a playful yet professional look for our app, we
                developed brand guidelines and applied them to our product.
                These brand guidelines ensures a consistent user interface and
                help users to navigate through the app.
            </p>
        </div>
        <Image
            src="../images/Traumpalast/Branding.png"
            caption="design system"
        />

        <div class="spacer"></div>
        <div>
            <p class="twocoloumns">
                To present the final visual design, this is how we made sure our
                at the beginning of the process defined How might We Questions
                are implemented in the new Design:
            </p>
        </div>
        <Image src="../images/Traumpalast/Traum_HMW01.png" caption="" />
        <Image src="../images/Traumpalast/Traum_HMW02.png" caption="" />
        <Image src="../images/Traumpalast/Traum_HMW03.png" caption="" />
        <Image src="../images/Traumpalast/Traum_HMW04.png" caption="" />
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
    @media (max-width: 800px) {
        p {
            margin-bottom: 1rem;
        }
    }
</style>

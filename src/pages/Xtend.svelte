<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import ProjectHeader from "../components/ProjectHeader.svelte";
    import Footer from "../components/Footer.svelte";
    import Image from "../components/Image.svelte";
    import YouTubeVideoEmbed from "../components/YouTubeVideoEmbed.svelte";

    let teamNames = ["Amelie", "Julia", "Tim"];
    let selectedProjects = ["Spot", "Growceries"];
</script>

<main>
    <ProjectHeader
        title="Xtend"
        description="The innovative way of playing Jenga"
        myRole="Concept, Prototype, Video"
        duration="four months"
        {teamNames}
    />

    <div class="pageWrapper">
        <div class="savespaceTop"></div>

        <div>
            <h5>What is Xtend?</h5>
            <p class="twocoloumns">
                This was a university project where the goal of the project was
                to design and develop a controller to easily navigate a Jenga
                robot to push Jenga blocks out of the Jenga tower. Xtend is a
                one-hand controller optimized to control each level of freedom
                of the robot with one finger. The goal of the project was to get
                an idea of how physical interfaces present different challenges
                than digital interfaces. We needed to get an idea of how
                affordance can allow users to understand which button triggers
                which function.
            </p>
        </div>

        <div>
            <h5>The robot</h5>
            <p class="twocoloumns">
                The robot was not built by us, it was given to us by our
                professors at the university. So we had to build every function
                of the robot into a controller. The robot has several functions:
                Thanks to special wheels, the robot has the ability to move not
                only forward and backward, but also sideways and rotate around
                its own axis. The built-in measuring wheel is there to push out
                the bricks. So the measuring wheel is able to go up and down and
                push out and go back in.
            </p>
        </div>
        <Image src="../images/Xtend/robotControlls.png" caption="movement of the robot" />
        <Image src="../images/Xtend/robot.png" caption="" />

        <div class="spacer"></div>
        <h5>Prototype</h5>
        <Image src="../images/Xtend/prototype.png" caption="" />

        <div class="spacer"></div>
        <h5>Xtend</h5>
        <Image src="../images/Xtend/xtend.png" caption="" />

        <div class="spacer"></div>
        <h5>This is Xtend</h5>
        <YouTubeVideoEmbed url="https://youtu.be/2iG09vxBUnU" project="Xtend"/>


    </div>
    <div class="startpageWrapper">
        <Footer />
    </div>
</main>

<style>
    .savespaceTop {
        height: 170px;
    }
</style>

<script>
    import Image from "../components/Image.svelte";
    import ProjectHeader from "../components/ProjectHeader.svelte";
    import MoreProjects from "../components/MoreProjects.svelte";
    import Footer from "../components/Footer.svelte";

    let teamNames = ["Moritz Schneidawind", "Ceren Celik"];
    let selectedProjects = ["Spot", "Growceries"];
</script>

<main>
    <ProjectHeader
        title="Discover your Respiratory system"
        description="An interactive exibishion design."
        myRole="Concept design, realisation of prototype with arduino"
        duration="2. Semester, October 23 – February 24"
        {teamNames}
        backgroundImage="../images/RespyBanner.png"
    />
    <div id="wrapper" class="pageWrapper">
        <div class="savespaceTop"></div>
        <div>
            <h5>Overview of the project</h5>
            <p class="twocoloumns">
                Our goal was to create an interactive exhibition design centered
                around the theme of "Our Respiratory System." Through studying
                various forms of interaction, we developed an engaging solution
                that allows users to scan their own respiratory system and
                explore it in real-time on a screen. This experience combines
                technology and learning, offering visitors a unique and
                immersive way to visualize and understand their own breathing
                process.
            </p>
        </div>
        <div>
            <h5>Design Prozess</h5>
            <p class="twocoloumns">
                From the very beginning, we explored various approaches to
                present the breathing system interactively. The challenge was to
                find a balance between a learning value and user experience. We
                wanted to create an experience that not only explained the
                mechanics of breathing but also made it visually appealing.
                Early on, we generated several ideas, but one concept quickly
                stood out: an interactive "x-ray" of the human lung. This idea
                involved simulating an x-ray view of the lungs, where users
                could see the respiratory system in action, personalized to
                their own body in real time.
            </p>
        </div>
        <div>
            <h5>Project</h5>
            <p class="twocoloumns">
                The Respy offers an interactive experience that visualizes your
                lungs in real-time on a monitor, allowing you to observe and
                learn about your own respiratory system. This experience is
                enhanced by a finger scanner that, while simulating a lung scan,
                is actually scanning your puls. After completing the initial
                scan, users are prompted to perform an exercise, such as
                push-ups or jumping jacks. Following the workout, they can scan
                their lungs again and witness the impact that physical activity
                has on their respiratory system.
            </p>
        </div>
        <Image
            src="../images/Respiratory/Project.png"
            caption="Project at the exebition"
        />
        <div>
            <h5>Technical Background</h5>
            <p class="twocoloumns">
                The Respy experience includes a pulse sensor that scans your
                pulse for 10 seconds. The average pulse value from this scan is
                then multiplied by 1.4 to estimate your breaths per minute. This
                calculated value controls the speed of the lung animation
                displayed on the monitor. While the user perceives the animation
                as reflecting their current breathing rate, it is actually a
                manipulated pulse value, creating a realistic but simulated
                representation of their lung activity in real-time.
            </p>
        </div>
    </div>
    <MoreProjects projectNames={selectedProjects} />
    <Footer />
</main>

<style>
    p {
        margin-bottom: 7rem;
    }
</style>

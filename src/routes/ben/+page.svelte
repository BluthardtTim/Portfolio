<script>
    import Credits from "$lib/components/Credits.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Image from "$lib/components/Image.svelte";
    import MoreProjects from "$lib/components/MoreProjects.svelte";
    import ProjectHeader from "$lib/components/ProjectHeader.svelte";
    import YouTubeVideoEmbed from "$lib/components/YouTubeVideoEmbed.svelte";

    let BenVideourl = "https://youtu.be/wguCO5G26hc";

    let teamNames = [
        {
            name: "Amelie Schlütter",
            portfolio: "amelieschlueter.com",
        },
        {
            name: "Julia Zöllner",
            portfolio: "juliazoellner.com",
        },
    ];
    let selectedProjects = ["LYS", "Spot"];
</script>

<svelte:head>
    <title>Tim Bluthardt | BEN</title>
</svelte:head>

<main>
    <ProjectHeader
        title="Ben"
        description="The App for Better Evidence News"
        myRole="concept, visual Design"
        duration="two months"
        {teamNames}
    />

    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <div class="project_layout">
            <div class="txt">
                <h5>BEN – The App for Better Evidence News</h5>
                <p>
                    In today's world, we are bombarded with countless pieces of
                    information - news, opinions and data from every conceivable
                    source. Consumption on social media means that there is a
                    lack of context, as the structure of social media with the
                    help of algorithms quickly creates echo chambers and
                    knowledge bubbles in which not only opinions can quickly
                    become radicalized, but also fake news can spread at
                    breakneck speed. This is exactly where BEN comes in: Our app
                    collects content from various platforms, links it together
                    and give users more context.
                </p>
            </div>
            <video src="https://utfs.io/f/loaxtTGhsSQCzDelWxaPCfwprO3YDHiBVoEkqcNWj0ZUhuad" alt="Ben Showreal" autoplay muted loop>  
                <track kind="captions" src="captions.vtt" srclang="en" label="English" default />
            </video>
            <div class="txt">
                <div></div>
                <p>
                    By implementing supportive, contradictory and relational
                    links, links to other content are made transparent. We also
                    enable our users to discuss topics with the help of
                    comments. We utilize swam intelligence by leveraging
                    different knowledge from our users to improve the context on
                    the platform. Through reward systems such as “Ranks” or
                    “Achievements”, we encourage our users to actively engage
                    with their own and other people's content in order to
                    organize the flood of content and make it easier to
                    understand. 
                </p>
            </div>
            <img src="../images/BEN/BenQuadscreen.png" alt="">
        </div>
    </div>
    <Credits
        myRole="research, concept, UX design, UI design"
        duration="two months"
        {teamNames}
    />

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
    @media (max-width: 800px) {
        p {
            margin-bottom: 1rem;
        }
    }
</style>

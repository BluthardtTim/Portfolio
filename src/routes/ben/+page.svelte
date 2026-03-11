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
    <title>BEN — Better Evidence News</title>
    <meta name="description" content="BEN is an app concept for better evidence-based news consumption — a UX design project." />
    <link rel="canonical" href="https://timbluthardt.com/ben" />
    <meta property="og:title" content="BEN — Better Evidence News" />
    <meta property="og:description" content="An app concept for more thoughtful and evidence-based news consumption." />
    <meta property="og:url" content="https://timbluthardt.com/ben" />
    <meta property="og:image" content="/images/BEN/BEN1.png" />
    <meta name="twitter:title" content="BEN — Better Evidence News" />
    <meta name="twitter:description" content="An app concept for more thoughtful and evidence-based news consumption." />
    <meta name="twitter:image" content="/images/BEN/BEN1.png" />
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
                    In today's world, we are confronted with countless pieces of
                    information - news, opinions and data from every conceivable
                    source. Consuming news on Social media today has a lack of
                    context, as the structure of social media with algorithms
                    quickly creates echo chambers and knowledge bubbles in which
                    not only opinions can quickly become radicalised, but also
                    fake news can spread at serious speed.
                </p>
            </div>
            <div class="quote">
                <p>
                    “Social Media is not designed to be the platform where we
                    discuss news, and share political opinions – It is designed
                    to be the place where we connect with friends or document
                    our lives.”
                </p>
            </div>
            <div class="txt">
                <div></div>
                <p>
                    We wanted to build a platform that isn’t the next social
                    media app but instead provide an environment for controlled
                    news consumption with source-backed information while
                    maintaining freedom of speech.
                    <br />
                    <br />
                    This is exactly where BEN comes in: Our app collects content
                    from various platforms, links it together and establishes the
                    wider context.
                </p>
            </div>
            <video
                src="https://utfs.io/f/loaxtTGhsSQCzDelWxaPCfwprO3YDHiBVoEkqcNWj0ZUhuad"
                alt="Ben Showreal"
                autoplay
                muted
                loop
            >
                <track
                    kind="captions"
                    src="captions.vtt"
                    srclang="en"
                    label="English"
                    default
                />
            </video>
            <div class="txt">
                <h5>
                    “related”, “supportive” and “contrary” links form a
                    completed topic
                </h5>
                <p>
                    People are able to import articles they found in the world
                    wide web and are given an environment to safely consume,
                    share it with others and most important investigate. For
                    opinions or facts in a article users are able to add
                    “related”, “supportive” or “contrary” arguments they found
                    in other articles and link them within their own. So we
                    utilise swam intelligence by leveraging different knowledge
                    from our users to improve the context on the platform. That
                    way we ensure opinions and facts don’t just get spread out
                    in the world but instead people investigate those and fake
                    news will more and more be on the verge of extinction.
                </p>
            </div>
            <div class="txt">
                <h5>
                    Include the experts but not everybody has to be an expert
                </h5>
                <p>
                    To serve both experts and “News find me” people we build
                    Network Community features to be able to consume, work and
                    learn from others observations.
                </p>
            </div>
            <div class="txt">
                <img src="../images/BEN/BEN_Network.png" alt="" />
                <p>
                    People who are familiar with a specific topics or natural
                    curios can help investigate things for people who don’t want
                    to put in that extra effort. By earning points your can
                    climb ranks. Your comments and investigations reveal whether
                    your an expert in the field or sharing a unique perspective.
                </p>
            </div>
            <div class="txt">
                <h5>close the circle</h5>
                <p>
                    To now close that circle of “dirty” news importing into our
                    app we also thought of how we are able to now put the
                    “clean” investigated news back out there into the world wide
                    web.
                </p>
            </div>
            <div class="txt">
                <img src="../images/BEN/BEN_Map.png" alt="" />
                <p>
                    So when a User shares a topic out of BEN with someone who
                    doesn’t have the app, he shares a cluster showcasing the
                    different facets there are involved into the discussion and
                    is able with BEN to also jump into investigation mode.
                </p>
            </div>
            <div class="spacer"></div>
            <img src="../images/BEN/BenQuadscreen.png" alt="" />
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

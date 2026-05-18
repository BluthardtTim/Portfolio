<script>
    import Credits from "$lib/components/Credits.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Image from "$lib/components/Image.svelte";
    import MoreProjects from "$lib/components/MoreProjects.svelte";
    import ProjectHeader from "$lib/components/ProjectHeader.svelte";
    import ScrollFullscreenVideo from "$lib/components/ScrollFullscreenVideo.svelte";

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
                    information - news, opinions, and data from every conceivable
                    source. Consuming news on social media today lacks
                    context, as the structure of social media, with algorithms,
                    quickly creates echo chambers and knowledge bubbles in which
                    not only opinions can quickly become radicalized, but fake
                    news can also spread at serious speed.
                </p>
            </div>
            <div class="quote">
                <p>
                    “Social media is not designed to be the platform where we
                    discuss news and share political opinions. It is designed
                    to be the place where we connect with friends or document
                    our lives.”
                </p>
            </div>
            <div class="txt">
                <div></div>
                <p>
                    We wanted to build a platform that isn’t the next social
                    media app, but instead provides an environment for
                    controlled news consumption with source-backed
                    information while maintaining freedom of speech.
                    <br />
                    <br />
                    This is exactly where BEN comes in: Our app collects content
                    from various platforms, links it together, and establishes
                    the wider context.
                </p>
            </div>
            <ScrollFullscreenVideo
                src="https://utfs.io/f/loaxtTGhsSQCzDelWxaPCfwprO3YDHiBVoEkqcNWj0ZUhuad"
                alt="Ben Showreel"
                sectionHeight={260}
            >
                <track
                    kind="captions"
                    src="/captions.vtt"
                    srclang="en"
                    label="English"
                    default
                />
            </ScrollFullscreenVideo>
            <div class="txt">
                <h5>
                    “related”, “supportive”, and “contrary” links form a
                    complete topic
                </h5>
                <p>
                    People can import articles they find on the World Wide Web
                    and are given an environment to safely consume them, share
                    them with others, and, most importantly, investigate them.
                    For opinions or facts in an article, users can add
                    “related”, “supportive”, or “contrary” arguments they found
                    in other articles and link them to their own. So we utilise
                    swarm intelligence by leveraging different knowledge from
                    our users to improve the context on the platform. That way
                    we ensure opinions and facts don’t just get spread across
                    the web, but are instead investigated, helping fake news
                    move closer to extinction.
                </p>
            </div>
            <div class="txt">
                <h5>
                    Include the experts, but not everybody has to be an expert
                </h5>
                <p>
                    To serve both experts and “news-find-me” people, we built
                    network community features that make it possible to
                    consume, work, and learn from others’ observations.
                </p>
            </div>
            <div class="txt">
                <img src="../images/BEN/BEN_Network.png" alt="" />
                <p>
                    People who are familiar with specific topics or are
                    naturally curious can help investigate things for people
                    who don’t want to put in that extra effort. By earning
                    points, you can climb ranks. Your comments and
                    investigations reveal whether you are an expert in the
                    field or simply sharing a unique perspective.
                </p>
            </div>
            <div class="txt">
                <h5>Close the circle</h5>
                <p>
                    To close the circle of importing “dirty” news into our app,
                    we also thought about how to put the “clean”, investigated
                    news back out there into the World Wide Web.
                </p>
            </div>
            <div class="txt">
                <img src="../images/BEN/BEN_Map.png" alt="" />
                <p>
                    So when a user shares a topic from BEN with someone who
                    doesn’t have the app, they share a cluster showcasing the
                    different facets involved in the discussion and can also
                    jump into investigation mode with BEN.
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
    </div>
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
    @media (max-width: 800px) {
        p {
            margin-bottom: 1rem;
        }
    }
</style>

<script>
    import Teammates from "../components/Teammates.svelte";

    export let myRole;
    export let duration;
    export let teamNames;

</script>

<main>
    <div class="pageWrapper CaseStudyCredits">
        <div>
            <p><strong>My role</strong></p>
            <p>{myRole}</p>
        </div>
        <div>
            <p><strong>Duration</strong></p>
            <p>{duration}</p>
        </div>
        <div>
            <p><strong>Teammates</strong></p>
            <Teammates teammates={teamNames} />
        </div>
    </div>
</main>

<style>
    p strong {
        font-weight: 600;
    }
    .CaseStudyCredits {
        margin-top: 15vh;
    }
    .CaseStudyCredits div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        gap: 2rem;
        max-width: 800px;
        width: 100%;
    }
    .CaseStudyCredits div p:first-child {
        text-align: right;
    }
    .CaseStudyCredits div p:first-child strong {
        font-family: var(--font-heading);
        font-weight: 400;
    }
    @media (max-width: 800px) {
        .CaseStudyCredits {
            margin-top: 60px;
            width: 100%;
            gap: 20px;
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 600px) {
        .CaseStudyCredits {
            width: 100%;
            grid-template-columns: 1fr;
        }
        .CaseStudyCredits div {
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 2rem;
        }
        .CaseStudyCredits div p:first-child {
            text-align: left;
        }
        .CaseStudyCredits div p:last-child {
            text-align: left;
        }
        .CaseStudyCredits div p {
            text-align: left;
        }
        .CaseStudyCredits div p:first-child {
            text-align: left;
        }
        .CaseStudyCredits div p:last-child {
            text-align: left;
        }
    }
</style>

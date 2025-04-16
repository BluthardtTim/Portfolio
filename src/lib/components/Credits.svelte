<script>
    import Teammates from "../components/Teammates.svelte";

    export let myRole;
    export let duration;
    export let teamNames;

</script>

<main>
    <div class="CaseStudyCredits">
        <div>
            <p><strong>my role</strong></p>
            <p>{myRole}</p>
        </div>
        <div>
            <p><strong>duration</strong></p>
            <p>{duration}</p>
        </div>
        <div>
            <p><strong>teammates</strong></p>
            <Teammates teammates={teamNames} />
        </div>
    </div>
</main>

<style>
    p strong {
        font-weight: 500;
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
    @media (max-width: 800px) {
        .CaseStudyCredits {
            margin-top: 60px;
            width: 100%;
            gap: 20px;
            grid-template-columns: 1fr 1fr;
        }
    }
</style>

<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import ProjectHeader from "../components/ProjectHeader.svelte";
    import Footer from "../components/Footer.svelte";

    let teamNames = ["Amelie", "Julia", "Tim"];
    let selectedProjects = ["Spot", "Growceries"];

</script>

<main>
    <ProjectHeader
        title="Xtend"
        description="The innovative way of playinf Jenga"
        myRole="Konzept Entwurf, Umsetzung Video in Film, Schnitt"
        duration="2. Semester, October 23 – Ferbruary 24"
        teamNames={teamNames}
        backgroundImage="../images/XtendProjectBanner.png"
        />

    <div class="pageWrapper">
        <div class="savespaceTop"></div>
    </div>
    <MoreProjects projectNames={selectedProjects} />
    <Footer />
</main>

<style>
    .savespaceTop {
        height: 170px;
    }
    p {
        font-size: 1rem;
        margin-bottom: 5rem;
    }
</style>

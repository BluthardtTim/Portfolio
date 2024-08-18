<script>
    import MoreProjects from "../components/MoreProjects.svelte";
    import ProjectHeader from "../components/ProjectHeader.svelte";
    import Footer from "../components/Footer.svelte";

    let selectedProjects = ["Spot", "Xtend"];
</script>

<main>
    <ProjectHeader
        title="Growceries"
        description="A platform that connects local farmers with consumers."
        myRole="Concept, Design, Development"
        duration="1. Semester, March 23 – June 23"
        teamNames={["Marc", "Julia", "Hannah", "Tim"]} 
        backgroundImage="../images/GrowProjectBanner.png"
        />
    
    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <h5>Overview of the project</h5>
        <p>This is a critical section for any reader who does not have a lot of time to read through the entire case study but wants a brief summary of the project, goals, and results. They may be going through a stack of applications and only have a few minutes to scan over one or two projects in your portfolio. Usually the first two. If nothing stands out or if the work is unclear then they will quickly move on.</p>
    </div>
    <MoreProjects projectNames={selectedProjects} />
    <Footer />
</main>

<style>
    .savespaceTop {
        height: 170px;
    }
</style>

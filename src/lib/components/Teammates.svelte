<script>
    export let teammates = [];

    const teammatePortfolios = {
        'Amelie': 'amelieschlueter.com',
        'Julia': 'juliazoellner.com',
        'Hannah': 'hannahsofiamoser.com',
        'Marc': '...',
    };
</script>

<main>
    <div id="wrapper">
        {#each teammates as teammate, index}
            <div>
                <a href="https://{teammate.portfolio}">
                <p>{teammate.name}{#if index < teammates.length - 1},&nbsp;{/if}</p>
                </a>
            </div>
        {/each}
    </div>
</main>

<style>
    #wrapper {
        display: flex;
        width: auto;
    }
    
</style>

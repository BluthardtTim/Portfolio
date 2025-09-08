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
        {#each teammates as teammate}
            <div class="teammate">
                <a href="https://{teammate.portfolio}">
                    <p>{teammate.name}</p>
                </a>
            </div>
        {/each}
    </div>
    
</main>

<style>
    #wrapper {
        display: flex;
        flex-direction: column; /* Jeder Teammate in eigener Zeile */
        width: auto;
        gap: 0.25rem;
    }

    .teammate a {
        display: inline-block;
    }
    
</style>

<script>
    export let teammates = [];

    const teammatePortfolios = {
        'Amelie': '...',
        'Julia': '...',
        'Hannah': '...',
        'Marc': '...',
        'Tim': '...'
    };
</script>

<main>
    <div id="wrapper">
        {#each teammates as teammate, index}
                <div>
                    <p>{teammate}<br></p>
                </div>
        {/each}
    </div>
</main>

<style>
    #wrapper {
        display: flex;
        width: auto;
        display: grid;
        grid-template-columns: 1fr;
    }
    
</style>

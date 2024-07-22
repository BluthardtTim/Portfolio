<!-- Teammates.svelte -->
<script>
    export let teammates = [];

    // Mapping der Namen zu den Bildpfaden
    const teammateImages = {
        'Amelie': '../images/Portrait.jpg',
        'Julia': '../images/Portrait.jpg',
        'Hannah': '../images/Portrait.jpg',
        'Marc': '../images/Portrait.jpg',
        'Tim': '../images/Portrait.jpg'
    };
</script>

<main>
    <div id="wrapper">
        {#each teammates as teammate, index}
            {#if teammateImages[teammate]}
                <div class={`portraitimg img${index + 1}`}>
                    <img src={teammateImages[teammate]} alt={teammate} />
                </div>
            {:else}
                <div class={`portraitimg img${index + 1}`}>
                    <img src="../images/default.jpg" alt="Default" />
                </div>
            {/if}
        {/each}
    </div>
</main>

<style>
    #wrapper {
        display: flex;
        justify-content: flex-start;
        width: auto;
    }
    .portraitimg {
        width: 50px;
        height: 50px;
        border: solid 3px #f6f6f6;
        border-radius: 25px;
    }
    .portraitimg img {
        width: 100%;
        height: 100%;
        border-radius: 25px;
    }
    .img1 {
        transition: all 0.3s ease-in-out;
    }
    .img2 {
        margin-left: -25px;
        transition: all 0.3s ease-in-out;
    }
    .img3 {
        margin-left: -25px;
        transition: all 0.3s ease-in-out;
    }
    .img1:hover ~ .img2 {
        transform: translateX(25px);
    }
    .img1:hover ~ .img3 {
        transform: translateX(25px);
    }
    .img2:hover ~ .img3 {
        transform: translateX(50px);
    }
    .img2:hover {
        transform: translateX(25px);
    }
    .img3:hover {
        transform: translateX(25px);
    }
</style>

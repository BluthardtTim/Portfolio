<script>
    export let teammates = [];

    const teammateImages = {
        'Amelie': '../images/Portrait.jpg',
        'Julia': '../images/Portrait.jpg',
        'Hannah': '../images/Portrait.jpg',
        'Marc': '../images/Portrait.jpg',
        'Tim': '../images/Portrait.jpg'
    };

    const tooltips = {
        'Amelie': 'amelie',
        'Julia': 'julia',
        'Hannah': 'hannah',
        'Marc': 'marc',
        'Tim': 'me'
    };
</script>

<main>
    <div id="wrapper">
        {#each teammates as teammate, index}
            {#if teammateImages[teammate]}
                <div class={`portraitimg img${index + 1}`}>
                    <img src={teammateImages[teammate]} alt={teammate} />
                    <div class="tooltip">{tooltips[teammate] || teammate}</div>
                </div>
            {:else}
                <div class={`portraitimg img${index + 1}`}>
                    <img src="../images/default.jpg" alt="Default" />
                    <div class="tooltip">{teammate}</div>
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
        position: relative;
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
    .img4 {
        margin-left: -25px;
        transition: all 0.3s ease-in-out;
    }
    .img1:hover ~ .img2 {
        transform: translateX(25px);
    }
    .img1:hover ~ .img3 {
        transform: translateX(25px);
    }
    .img1:hover ~ .img4 {
        transform: translateX(25px);
    }
    .img2:hover ~ .img3 {
        transform: translateX(50px);
    }
    .img2:hover ~ .img4 {
        transform: translateX(50px);
    }
    .img3:hover ~ .img4 {
        transform: translateX(50px);
    }
    .img2:hover {
        transform: translateX(25px);
    }
    .img3:hover {
        transform: translateX(25px);
    }
    .img4:hover {
        transform: translateX(25px);
    }
    .tooltip {
        visibility: hidden;
        position: absolute;
        background-color: #333;
        color: #fff;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        z-index: 1000;
        bottom: -60%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: -5px;
        opacity: 0;
        transition: opacity 0.2s;
    }
    .portraitimg:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }
</style>

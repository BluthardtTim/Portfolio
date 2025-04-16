<script>
    const images = [
        { src: "../images/LYS/LYSProto1.png", caption: "Vision Pro Prototype" },
        { src: "../images/LYS/LYSProto2.png", caption: "Vision Pro Prototype" },
        { src: "../images/LYS/LYSProto3.png", caption: "Vision Pro Prototype" },
    ];
</script>

<div class="grid-container">
    {#each images as { src, caption }, index}
        <div class="image-wrapper">
            <img {src} alt={caption} />
        </div>
    {/each}
</div>

<style>
    .grid-container {
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        gap: 2rem;
    }

    .image-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .image-wrapper img {
        height: 100%;
        width: auto;
        object-fit: cover;
        border-radius: 12px;
    }
</style>

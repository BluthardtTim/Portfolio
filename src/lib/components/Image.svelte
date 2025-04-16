<!-- ImageWithCaption.svelte -->
<script>
    export let src;
    export let caption;
</script>

<main>
    {#if src}
        <div class="image-container">
            <img src={src} alt={caption} />
            {#if caption}
                <p class="caption">{caption}</p>
            {/if}
        </div>
    {:else}
        <p>No image source provided</p>
    {/if}
</main>

<style>
    .image-container {
        text-align: left;
        margin: 2rem 0;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    .caption {
        margin-top: 0.5rem;
        color: #888;
        font-style: italic;
        margin-left: 1rem;
        font-size: 16px;
    }
</style>

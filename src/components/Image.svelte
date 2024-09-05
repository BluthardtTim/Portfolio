<!-- ImageWithCaption.svelte -->
<script>
    export let src;
    export let caption;
</script>

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

<style>
    .image-container {
        text-align: left;
        margin: 6rem 0;
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
    }
</style>

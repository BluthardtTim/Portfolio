<script>
    export let url;
    
    // Extrahiere die Video-ID aus der URL
    function extractVideoId(url) {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    let videoId = extractVideoId(url);
    let videoLoaded = false; // Steuert, ob das Video geladen wurde
</script>

{#if videoId}
    <div class="video-container">
        {#if !videoLoaded}
            <img 
                src="../images/Spot/SpotVideoThumbnail.png" 
                alt="Video Thumbnail" 
                class="video-thumbnail" 
                on:click={() => videoLoaded = true} 
            />
            <div class="play-button" on:click={() => videoLoaded = true}></div>
        {/if}
        
        {#if videoLoaded}
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="YouTubeEmbed">
            </iframe>
        {/if}
    </div>
{:else}
    <p>Invalid YouTube URL</p>
{/if}

<style>
    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
        overflow: hidden;
        max-width: 100%;
        background: #000;
    }

    .video-container iframe, .video-thumbnail {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .video-thumbnail {
        object-fit: cover;
    }

    .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
        background: url('/path/to/play-button-icon.png') no-repeat center center;
        background-size: contain;
        cursor: pointer;
    }
</style>

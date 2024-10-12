<script>
    export let url;
    export let project;
    
    // Extrahiere die Video-ID aus der URL
    function extractVideoId(url) {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    let videoId = extractVideoId(url);
    let videoLoaded = false; // Steuert, ob das Video geladen wurde

    let thumbnails = {
        Spot: "../images/Spot/SpotVideoThumbnail.png",
        Growceries: "../images/Growceries/GrowVideoThumbnail.png",
        Respiratory: "../images/RespyCard.png",
        Xtend: "../images/Xtend/XtendVideoThumbnail.png",
    };
</script>

{#if videoId}
    <div class="video-container">
        {#if !videoLoaded}
            <img 
                src={thumbnails[project]} 
                alt="Video Thumbnail" 
                class="video-thumbnail" 
                on:click={() => videoLoaded = true} 
            />
            <div class="play-button" on:click={() => videoLoaded = true}>
                <img src="../images/icons/play.svg" alt="icon">
            </div>
        {/if}
        
        {#if videoLoaded}
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&fs=0&disablekb=1&rel=0`}
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
        border-radius: 12px;
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
        border-radius: 12px;
        transition: all 0.3s ease-in-out;
    }
    .video-thumbnail:hover {
        transform: scale(1.02);
    }

    .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70px;
        height: 70px;
        /* background: url('/path/to/play-button-icon.png') no-repeat center center; */
        /* background-size: contain; */
        background-color: white;
        border-radius: 40px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: width 0.3s ease-in-out;
    }
    .play-button:hover {
        width: 120px;
    }
</style>

<script>
    export let url;
    export let project;

    // Extract the video ID and platform (YouTube or Vimeo) from the URL
    function extractVideoDetails(url) {
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const vimeoRegex = /(?:vimeo\.com\/(?:video\/)?)(\d+)/;

        const youtubeMatch = url.match(youtubeRegex);
        const vimeoMatch = url.match(vimeoRegex);

        if (youtubeMatch) {
            return { platform: 'youtube', videoId: youtubeMatch[1] };
        } else if (vimeoMatch) {
            return { platform: 'vimeo', videoId: vimeoMatch[1] };
        } else {
            return { platform: null, videoId: null };
        }
    }

    let { platform, videoId } = extractVideoDetails(url);
    let videoLoaded = false; // Controls whether the video is loaded

    let thumbnails = {
        Spot: "../images/Spot/SpotVideoThumbnail.png",
        Growceries: "../images/Growceries/GrowVideoThumbnail.png",
        Respiratory: "../images/RespyCard.png",
        Xtend: "../images/XtendCard.png",
        LYS: "../images/LYS/LYS_Videothumbnail.png",
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
            {#if platform === 'youtube'}
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&fs=0&disablekb=1&rel=0`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="YouTubeEmbed">
                </iframe>
            {:else if platform === 'vimeo'}
                <iframe
                    width="560"
                    height="315"
                    src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                    title="VimeoEmbed">
                </iframe>
            {/if}
        {/if}
    </div>
{:else}
    <p>Invalid video URL</p>
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
        margin: 4rem 0;
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

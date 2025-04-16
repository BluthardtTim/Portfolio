<script>
    export let images;

    let currentIndex = 0;
    

    function scrollToImage(index) {
        const container = document.querySelector('.slideshow-container');
        const imageWidth = container.clientWidth;
        container.scrollTo({
            left: imageWidth * index,
            behavior: 'smooth'
        });
        currentIndex = index;
    }

    function handleScroll() {
        const container = document.querySelector('.slideshow-container');
        const imageWidth = container.clientWidth;
        currentIndex = Math.round(container.scrollLeft / imageWidth);
    }
</script>

<div class="slideshow-wrapper">
    <div class="slideshow-container" on:scroll={handleScroll}>
        {#each images as image, index}
            <img src={image} alt={`Slide ${index + 1}`} class="slideshow-image" />
        {/each}
    </div>

    <div class="indicator">
        {#each images as _, index}
            <div 
                class="{index === currentIndex ? 'active' : ''}" 
                on:click={() => scrollToImage(index)}>
            </div>
        {/each}
    </div>
</div>

<style>
    .slideshow-wrapper {
        position: relative;
        width: 120%;
        overflow: hidden;
        margin-top: 200px;
    }

    .slideshow-container {
        display: flex;
        scroll-behavior: smooth;
        overflow-x: scroll;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        gap: 20px;
    }

    .slideshow-container::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .slideshow-image {
        /* min-width: 100%; */
        height: 60vh;
        transition: transform 0.3s ease;
        aspect-ratio: 4/5;
        object-fit: cover;
    }

    .indicator {
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
    }

    .indicator div {
        width: 10px;
        height: 10px;
        background-color: #dddddd;
        border-radius: 5px;
        margin: 0 5px;
        cursor: pointer;
    }

    .indicator div.active {
        background-color: #80C181;
        width: 50px;
    }
</style>

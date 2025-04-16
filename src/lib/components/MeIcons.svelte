<script>
    const tooltips = [
        "photographer and filmmaker",
        "love to cook",
        "riding mountainbike",
        "traveling",
    ];

    // Icons für die tooltips
    const icons = [
        "../images/icons/camera-light.svg",
        "../images/icons/chef-hat-light.svg",
        "../images/icons/person-simple-bike-light.svg",
        "../images/icons/airplane-tilt-light.svg",
    ];
</script>

<main>
    <div id="iconwrapper">
        {#each icons as icon, index}
            <div class="meicon">
                <img src={icon} alt="Icon" />
                <div class="tooltip">{tooltips[index]}</div>
            </div>
        {/each}
    </div>
</main>

<style>
    #iconwrapper {
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
    .meicon {
        padding: 16px;
        background-color: #F9F9F9;
        border-radius: 12px;
        width: 65px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .meicon img {
        width: 100%;
        height: 100%;
    }
    .meicon:hover img {
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
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
        margin-bottom: 5px;
        opacity: 0;
        transition: opacity 0.2s;
    }
    .meicon:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }
    @media (max-width: 800px) {
    .meicon {
            display: none;
        }
    }
</style>
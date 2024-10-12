<script>
    import Teammates from "./Teammates copy.svelte";

    export let title;
    // export let backgroundImage;

    function goBack() {
        window.history.back();
    }
</script>

<main>
    <div class="Projectbunner">
        <div class="pageWrapper">
            <div class="savespaceTop"></div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img
                class="back"
                src="../images/icons/arrow-left-light.svg"
                alt="back-arrow"
                on:click={goBack}
            />
            <h1>{title}</h1>
        </div>
    </div>
</main>

<style>
    .back {
        position: absolute;
        top: 174px;
        /* left: 167px; */
        left: 8vw;
        width: 30px;
        height: 30px;
    }
    .back:hover {
        cursor: pointer;
        transform: translateX(-5px);
        transition: all 0.2s ease-in-out;
    }
    .Projectbunner {
        width: 100vw;
        height: 40vh;
        background-color: #f6f6f6;
        z-index: -2;
        border-bottom: 0.5px solid #bebebe;
        box-shadow: inset 0px -10px 10px -10px rgba(3, 2, 2, 0.1);
    }
    .savespaceTop {
        height: 165px;
    }
    @media (max-width: 800px) {
        .back {
            top: 75px;
            left: 5vw;
        }
        .Projectbunner {
            height: 40vh;
        }
        .savespaceTop {
            height: 140px;
        }
    }

</style>
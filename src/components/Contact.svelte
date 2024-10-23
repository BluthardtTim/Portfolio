<script>
</script>

<main>
    <div id="contacts">
        <!-- <div class="contactGroup">
            <img src="../images/icons/envelope-simple-light.svg" alt="icon">
            <p>tim.bluthardt@gmail.com</p>
        </div>
        <div class="contactGroup">
            <img src="../images/icons/linkedin-logo-light.svg" alt="icon">
            <a href="https://www.linkedin.com/in/tim-bluthardt/" target="_blank">linkedIn</a>
        </div> -->

        <a href="mailto:tim.bluthardt@gmail.com">
            <div class="contactGroup">
                <img src="../images/icons/envelope-simple-light.svg" alt="icon">
                <div class="tooltip">E-Mail</div>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/tim-bluthardt/" target="_blank">
            <div class="contactGroup">
                <img src="../images/icons/linkedin-logo-light.svg" alt="icon">
                <div class="tooltip">linkedIn</div>
            </div>
        </a>

    </div>
</main>

<style>
    #contacts {
        display: flex;
        /* justify-content: center; */
        flex-direction: row;
        margin-top: 40px;
        gap: 8px;
        color:#9d9d9d;
    }
    .contactGroup {
        display: flex;
        align-items: center;
        flex-direction: row;
        position: relative;
        padding: 16px;
        background-color: #F9F9F9;
        border-radius: 12px;
        width: 65px;
    }
    .contactGroup:hover img {
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
    .contactGroup:hover .tooltip {
        visibility: visible;
        opacity: 1;
    }

</style>

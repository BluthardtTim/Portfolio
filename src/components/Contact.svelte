<script>
</script>

<main>
    <div id="contacts">
        <div class="contactGroup">
            <img src="../images/icons/envelope-simple-light.svg" alt="icon">
            <p>tim.bluthardt@gmail.com</p>
        </div>
        <div class="contactGroup">
            <img src="../images/icons/linkedin-logo-light.svg" alt="icon">
            <a href="https://www.linkedin.com/in/tim-bluthardt/" target="_blank">linkedIn</a>
        </div>
    </div>
</main>

<style>
    #contacts {
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin-top: 40px;
        gap: 40px;
        color:#9d9d9d;
    }
    .contactGroup {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 5px;
    }
    a {
        color: #9d9d9d;
        font-size: 18px;
    }
    @media (max-width: 800px) {
        #contacts {
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
    }
</style>

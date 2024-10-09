<script>
</script>

<main>
    <div id="wrapper" class="pageWrapper">
        <p>© 2024 Tim Bluthardt</p>
        <p><a href="#/imprint">Imprint</a></p>
    </div>
</main>

<style>
    #wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 auto;
        height: 140px;
        color: #9d9d9d;
        margin-top: 50px;
        gap: 50px;
    }
    a {
        color: #9d9d9d;
    }
    a:hover {
        color: #000;
    }
    @media (max-width: 1550px) {
        #wrapper{
            justify-content: space-between;
        }
    }
    @media (max-width: 1200px) {
        #wrapper{
            padding-bottom: 110px;
            justify-content: flex-start;
        }
    }
    @media (max-width: 800px) {
        #wrapper {
            height: auto;
            margin-top: 100px;
            justify-content: center;
        }
    }
</style>

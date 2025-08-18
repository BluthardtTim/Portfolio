<script>
</script>

<main>
    <div id="wrapper">
        <p>© 2025 Tim Bluthardt</p>
        <p><a href="#/imprint">Imprint</a></p>
    </div>
</main>

<style>
    #wrapper {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 2rem;
        margin-top: 2rem;
        height: auto;
        gap: 2rem;
        padding: 2rem;

    }
    p {
        font-size: 14px;
        margin: 0;
        color: #9D9D9D;
    }
    a {
        color: #9D9D9D;
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

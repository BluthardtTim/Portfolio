<script></script>

<main>
    <div id="Wrapper">
        <div class="pageWrapper">
            <div class="savespaceTop"></div>
            <h5>UI/UX Design – Portfolio</h5>
            <h1>Tim Bluthardt</h1>
            <div style="display: flex;flex-direction:row; align-items: center;">
                <p>thats´s me</p>
                <img id="iconarrow" src="../images/icons/arrow-up-right-light.svg" alt="" />
            </div>
            <div id="iconwrapper">
                <div class="meicon"><img src="../images/icons/film-strip-light.svg" alt=""></div>
                <div class="meicon"><img src="../images/icons/chef-hat-light.svg" alt=""></div>
                <div class="meicon"><img src="../images/icons/person-simple-bike-light.svg" alt=""></div>
                <div class="meicon"><img src="../images/icons/airplane-tilt-light.svg" alt=""></div> 
            </div>
            <p>Hi, I´m Tim and I love to Design Websites and stuff <br>that makes me happy and a lot of money</p>  
        </div>
    </div>
</main>

<style>
    #Wrapper {
        width: 100vw;
        height: 70vh;
        background-color: #f6f6f6;
        z-index: -1;
        border-bottom: 0.5px solid #bebebe;
        box-shadow: inset 0px -10px 10px -10px rgba(3, 2, 2, 0.1);
    }
    .savespaceTop {
        height: 170px;
    }
    #iconarrow{
        width: 24px;
        height: 24px;
        transform: rotate(90deg);
        filter: invert(96%) sepia(0%) saturate(72%) hue-rotate(151deg) brightness(77%) contrast(108%);
        margin-left: 10px;
    }
    #iconwrapper{
        display: flex;
        flex-direction: row;
        gap: 8px;
    }
    .meicon{
        padding: 16px;
        background-color: white;
        border-radius: 16px;
        width: 65px;
    }
    .meicon:hover img {
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
    }
    p{
        margin: 16px 0px;
        color: #C0C0C0;
        font-size: 20px;
    }
    h1{
        font-size: 62px;
    }
    h5{
        font-size: 28px;
        margin-bottom: -5px;
    }
</style>

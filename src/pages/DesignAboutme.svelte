<script>
    import Footer from "../components/Footer.svelte";
    import MeIcons from "../components/MeIcons.svelte";
</script>

<main>
    <div id="wrapper">
        <div class="startpageWrapper">

            <div class="spacer"></div>
            <div class="spacer"></div>

            <div style="display: flex; flex-direction: row; align-items: center; gap: 20px;">
                <div class="imageCard">
                    <img src="../images/Portrait2.jpg" alt="Portrait" />
                </div>
                <div>
                    <h1>Hi, I'm Tim</h1>
                </div>
            </div>
            <p>
                I'm currently studying Interaction Design at University of
                Design in Schwäbisch Gmünd, Germany. I have a strong
                interest in new technologies and am curious about where the
                future of technology is heading. Through my studies, I'm
                exploring how design and technology come together to create
                meaningful user experiences, and I'm excited to be part of
                this ever-evolving field. I am always looking for new
                opportunities to learn and grow as a designer and
                photographer.
            </p>

            <div class="spacer"></div>

            <div class="text">
                <p>
                    Apart from design, I am passionate about sports. I spend
                    most of my free time mountain biking, always looking for
                    technical challenges on the trails. I also enjoy other
                    physical activities such as jogging, going to the gym or
                    just playing basketball with friends.
                </p>
            </div>
            <div class="card">
                <div class="innercard">
                    <img
                        src="../images/AboutMe/AboutMeMTB.jpg"
                        alt="Portrait"
                    />
                </div>
            </div>

            <div class="spacer"></div>

            <div class="text">
                <p>
                    My second creative passion is photography. My camera has
                    been with me for a few years now. If you are interested
                     in seeing more of my work, you can check out my
                    <a href="#/photo">gallery</a>
                </p>
            </div>
            <div class="card">
                <div class="innercard">
                    <img src="../images/Portrait.jpg" alt="Portrait" />
                </div>
            </div>
            
            <div class="spacer"></div>

            <div style="display: flex; justify-content: center;">
                <MeIcons />
            </div>

            <div>
                <p>
                    With riding bikes, cooking, traveling and photo- and
                    videography I am passionate about creating and developing
                    ideas. I also love to step outside, take a deep breath, gain
                    fresh perspectives, and find inspiration.
                </p>
            </div>
            <Footer />
        </div>
    </div>
</main>

<style>
    #wrapper {
        width: 100vw;
    }
    .startpageWrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    p {
        color: #9d9d9d;
    }
    .text {
        height: 100%;
        display: flex;
        align-items: center;
    }
    .imageCard {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50px;
    }
    .imageCard img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50px;
    }
    .innercard {
        width: 100%;
        height: 400px;
        border-radius: 16px;
    }
    .innercard img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }
    .spacer {
        height: 10px;
    }
    @media (max-width: 800px) {

    }
</style>

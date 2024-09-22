<script>
    import Footer from "../components/Footer.svelte";
</script>

<main>
    <div id="wrapper">
        <div class="pageWrapper">
            <div class="savespaceTop"></div>
            <div></div>
            <div>
                <h5>Hi, I'm Tim</h5>
                <p>
                    I'm currently studying Interaction Design at Hochschule
                    für Gestaltung in Schwäbisch Gmünd, Germany. I have a strong
                    interest in new technologies and am curious about where the
                    future of technology is heading. Through my studies, I'm
                    exploring how design and technology come together to create
                    meaningful user experiences, and I'm excited to be part of
                    this ever-evolving field. I am always looking for new
                    opportunities to learn and grow as a designer and
                    photographer.
                </p>
            </div>
            <div></div>
            <div class="spacer"></div>
            <div class="spacer"></div>
            <div class="card">
                <div class="innercard">
                    <img src="../images/AboutMe/AboutMeMTB.jpg" alt="Portrait" />
                </div>
            </div>
            <div>
                <p>
                    Apart from design, I am passionate about sports. I spend most
                    of my free time mountain biking, always looking for
                    technical challenges on the trails. I also enjoy other
                    physical activities such as jogging, going to the gym or
                    just playing basketball with friends.
                </p>
            </div>
            <div class="card">
                <div class="innercard">
                    <img src="../images/Portrait.jpg" alt="Portrait" />
                </div>
            </div>
            <div>
                <p>
                    My second creative passion is photography. My camera has
                    been with me for a few years now and this year I've been
                    working on building a professional business in this field,
                    aiming to break into the photography scene. Feel free to
                    have a look at my
                    <a href="#/photo">photography portfolio</a>
                </p>
            </div>
        </div>
        <Footer />
    </div>
</main>

<style>
    #wrapper {
        width: 100vw;
        background-color: #f6f6f6;
    }
    .pageWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }
    .card {
        width: 100%;
        height: auto;
        aspect-ratio: 5 / 3;
        background-color: #f8f9fa;
        background: white;
        border-radius: 22px;
        border: 0.75px #e2e2e2 solid;
        padding: 5px;
        position: relative;
        overflow: hidden;
    }
    .innercard {
        width: 100%;
        height: 100%;
        background: #f7f7f7;
        border-radius: 16px;
        border: 0.5px #a7a7a7 solid;
        box-sizing: border-box;
        position: relative;
        top: 0;
        left: 0;
        color: black;
        text-decoration: none;
    }
    .innercard img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }
    .spacer {
        height: 100px;
    }
    @media (max-width: 800px) {
        .pageWrapper {
            grid-template-columns: 1fr;
        }
        .spacer {
            display: none;
        }
    }
</style>

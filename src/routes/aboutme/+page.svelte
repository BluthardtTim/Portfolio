<script>
    import Footer from "$lib/components/Footer.svelte";
    import MeIcons from "$lib/components/MeIcons.svelte";

</script>

<main>
    <div class="pageWrapper">
        <div class="savespaceTop"></div>
        <div class="project_layout">
            <div class="txt">
                <h5>Hi I'm Tim</h5>
                <p>
                    I'm currently studying Interaction Design at University of
                Design in Schwäbisch Gmünd, Germany. I have an strong interest
                in new technologies and I'm curious about where the future of
                technology is heading. In my studies, I'm exploring how design
                and technology are coming together to create meaningful user
                experiences, and I'm excited to be part of this ever-evolving
                field. I'm always looking for new opportunities to learn and
                grow as a designer and photographer.
                </p>
            </div>
            <div class="txt">
                <div></div>
                <p>
                    Apart from design, I'm passionate about sports. Most of my
                    free time I spend on my mountainbike, always looking for
                    technical challenges on the trails. I also enjoy other
                    physical activities such as jogging, going to the gym or
                    playing basketball with friends.
                </p>
            </div>
            <img src="../images/AboutMe/aboutme.png" alt="">
            <div class="txt">
                <div></div>
                <p>
                    My other creative passion is photography. I discoverd my
                    passion for photography a few years ago, since then it has
                    become difficult to leave my camera at home. If you are
                    interested in seeing more of my work, have a look at my
                    <a href="#/photo">gallery</a>.
                </p>
            </div>
            <div class="txt">
                <div></div>
                <MeIcons />
            </div>
            <div class="txt">
                <div></div>
                <p>
                    Since I like riding bikes, cooking, traveling and photo- and
                    videography I am passionate about creating and developing
                    ideas. I also love to step outside, take a deep breath, gain
                    fresh perspectives, and find inspiration.
                </p>
            </div>
        </div>
        <Footer />
    </div>

</main>

<style>
    img {
        margin: 150px 0;
    }
</style>

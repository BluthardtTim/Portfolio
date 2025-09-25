<script>
  import { onMount } from "svelte";

  const cards = [
    {
      id: 2,
      title: "Ben",
      description: "The App for Better Evidence News",
      semesterinfo: "App Concept and Design",
      imgClass: "backgroundimgGrow",
      videoUrl: "path/to/grow-video.mp4",
      imgUrl1: "../images/BEN/BEN1.png",
      imgUrl2: "../images/BEN/BEN2.png",
      imgUrl3: "../images/BEN/BEN3.png",
    },
    {
      id: 3,
      title: "LYS",
      description: "Interactions shaped around you",
      semesterinfo: "Specualtive Design",
      imgClass: "backgroundimgTraumpalast",
      videoUrl: "../videos/TraumpalastKeyvisual.mp4",
      imgUrl1: "../images/LYS/LYS1.png",
      imgUrl2: "../images/LYS/LYS2.png",
      imgUrl3: "../images/LYS/LYS3.png",
    },
    {
      id: 1,
      title: "Spot",
      description:
        "A spatial computing tool for thinking, keeping and using ideas",
      semesterinfo: "Invention Design",
      imgClass: "backgroundimgSpot",
      videoUrl: "../videos/SpotKeyvisual.mp4",
      imgUrl1: "../images/Spot/Spot1.png",
      imgUrl2: "../images/Spot/Spot2.png",
      imgUrl3: "../images/Spot/Spot3.png",
    },
  ];

  let loseStatus = Array(cards.length).fill(false);
  let blurValues = Array(cards.length).fill(0);
  let cardHeight = 0;
  let viewportHeight = 0;
  let isMobile = false;
  let io = null; // IntersectionObserver für Mobile-Animation

  function initMobileScrollInAnimation() {
    // Nur auf Mobile aktivieren
    if (!isMobile) return;
    // Bereits vorhandenen Observer bereinigen
    if (io) {
      io.disconnect();
      io = null;
    }
    io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            // Einmalige Animation reicht; danach nicht weiter beobachten
            observer.unobserve(el);
          }
        });
      },
      {
        root: null,
        threshold: 0.15, // startet, wenn ~15% sichtbar
      },
    );

    document.querySelectorAll('.card').forEach((el) => io.observe(el));
  }

  function destroyMobileScrollInAnimation() {
    if (io) {
      io.disconnect();
      io = null;
    }
  }

  onMount(() => {
    let wasMobile = null;
    const setIsMobile = () => {
      const next = window.innerWidth <= 800;
      if (wasMobile === null) {
        // Initialisierung
        isMobile = next;
        wasMobile = next;
        if (isMobile) initMobileScrollInAnimation();
      } else if (next !== wasMobile) {
        // Wechsel zwischen Mobile/Desktop
        isMobile = next;
        if (isMobile) {
          initMobileScrollInAnimation();
        } else {
          destroyMobileScrollInAnimation();
        }
        wasMobile = next;
      } else {
        // Keine Änderung, aber Variable aktuell halten
        isMobile = next;
      }
    };
    setIsMobile();
    window.addEventListener("resize", setIsMobile, { passive: true });

    setTimeout(() => {
      const firstCard = document.querySelector(".card");
      if (firstCard) {
        cardHeight = firstCard.clientHeight;
        viewportHeight = window.innerHeight;
      }
    }, 400);

    const handleScroll = () => {
      if (isMobile) return; // keine Blur-/Overlap-Logik auf Mobile
      const cardElements = document.querySelectorAll(".card");

      cardElements.forEach((card, index) => {
        if (index === 0) return; // Skip first card

        const cardRect = card.getBoundingClientRect();
        const prevCard = cardElements[index - 1];
        const prevCardRect = prevCard.getBoundingClientRect();

        // Calculate overlap when cards start to overlap
        const overlapStart = prevCardRect.bottom - cardRect.top;
        const halfCardHeight = cardHeight / 2;

        if (overlapStart > 0) {
          // Start blurring when 50% overlap is reached
          const blurIntensity = Math.min(
            (overlapStart / halfCardHeight) * 2,
            2,
          );
          blurValues[index - 1] = blurIntensity;
        } else {
          blurValues[index - 1] = 0;
        }
      });

      // Trigger reactivity
      blurValues = [...blurValues];
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", setIsMobile);
      destroyMobileScrollInAnimation();
    };
  });

  function playVideo(videoElement) {
    videoElement.play();
  }

  function pauseVideo(videoElement) {
    videoElement.pause();
    videoElement.currentTime = 0;
  }
</script>

<main>
  <div class="container">
    {#each cards as card, index}
      <div
        class:lose={loseStatus[index]}
        class="card"
        style={!isMobile
          ? `top: calc(${viewportHeight / 2}px - ${cardHeight / 2}px - 6vh + ${index * 15}px); filter: blur(${blurValues[index]}px);`
          : ""}
      >
        <a href={`/${card.title.toLowerCase()}`}>
          <div class="cardWrapper">
            <div class="cardtxt">
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <p>{card.semesterinfo}</p>
            </div>
            <div class="imgWrapper">
              <div class="prevImg">
                <img src={card.imgUrl1} alt="" />
              </div>
              <div class="prevImg none">
                <img src={card.imgUrl2} alt="" />
              </div>
              <div class="prevImg none">
                <img src={card.imgUrl3} alt="" />
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</main>

<style>
  h3 {
    z-index: 2;
    color: black;
  }
  p {
    color: #6a6a6a;
    font-size: 18px;
  }
  .container {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 70%;
    max-width: 1600px;
    margin: 0 auto;
  }
  .card {
    width: 100%;
    background-color: rgba(249, 249, 249, 1);
    /* backdrop-filter: blur(6px); */
    transition: all 0.3s ease;
    border-radius: 22px;
    border: 1.5px #e3e3e3 solid;
    padding: 40px;
    margin-top: 100px;
    position: sticky;
  }
  .card:hover {
    background-color: #f1f1f1;
    transform: translateY(-5px);
  }
  .cardWrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .imgWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    height: 100%;
  }
  .prevImg {
    height: 100%;
    border-radius: 16px;
    background-color: white;
    position: relative;
  }
  .prevImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
  .cardtxt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }
  .cardtxt p {
    max-width: 200px;
  }
  .card.lose {
    position: absolute;
    top: 0;
    margin-top: 0;
  }
  a {
    text-decoration: none;
  }

  @media (max-width: 800px) {
    .container {
      height: auto;
      width: 90%;
    }
    .card {
      width: 100%;
      /* Nutze Variable, um sie für Kind-Elemente (z.B. Ausgleich am rechten Rand) zu verwenden */
      --pad: 25px;
      padding: var(--pad); /* kompakter */
      overflow-y: hidden;
      position: relative; /* Sticky auf Mobile aus */
      margin-top: 0px; /* weniger vertikaler Raum */
      /* Scroll-In Animation Ausgangszustand */
      transform: translateY(16px);
      opacity: 0;
      transition: transform 420ms ease, opacity 420ms ease, background-color 0.3s ease;
    }
    .card:hover {
      transform: translateY(0px);
    }
    .cardWrapper {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      gap: 2rem; /* kompakter */
    }
    /* Horizontaler Scroll für Bilder: 1.5 sichtbar, swipebar */
    .imgWrapper {
      display: flex;
      flex-wrap: nowrap;
      gap: 12px;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      touch-action: pan-x;
      padding-bottom: 4px; /* Platz für ggf. Scrollbar */
      padding-right: var(--pad); /* sichtbares Padding am Ende des Scrolls */
      /* Scrollbar ausblenden */
      scrollbar-width: none; /* Firefox */
      /* Rechtes Padding der Karte ignorieren: Container  um die Padding-Breite nach rechts herausziehen */
      margin-right: calc(-1 * var(--pad));
    }
    .imgWrapper::-webkit-scrollbar {
      display: none;
    }
    .prevImg {
      flex: 0 0 66.666%; /* ~1.5 Karten sichtbar */
      aspect-ratio: 4 / 5; /* konsistente Höhe */
      height: auto;
      scroll-snap-align: start;
    }
    .prevImg img {
      height: 100%;
    }
    /* Alle drei Bilder auf Mobile anzeigen */
    .none {
      display: block;
    }
    /* Text kompakter + clampen für geringere Höhe */
    p {
      font-size: 18px;
    }
    :global(.card.in-view) {
      transform: translateY(0);
      opacity: 1;
    }
    .cardtxt p {
      max-width: none;
    }
    .cardtxt p:first-of-type {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    /* Semesterinfo inline halten, falls lang */
    .cardtxt > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>

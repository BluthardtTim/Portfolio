<script>
  import { onMount } from "svelte";

  const cards = [
    {
      id: 2,
      title: "Ben",
      description: "The App for Better Evidence News",
      semesterinfo: "– a concept of how consuming news and social threads online can be more thoughtful and save",
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
      semesterinfo: "– how can we bring human and technology closer together?",
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
          ? `top: calc(${viewportHeight / 2}px - ${cardHeight / 2}px - 6vh + ${index * 15}px);`
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
  :global(html[data-theme='dark']) h3 {
    color: #eaeaea;
  }
  :global(html[data-theme='dark']) p {
    color: #888;
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
    height: 480px;
    background-color: rgba(249, 249, 249, 1);
    transition: background-color 240ms ease, border-color 240ms ease, transform 0.3s ease;
    border-radius: 22px;
    border: 1.5px #e3e3e3 solid;
    padding: 0;
    overflow: hidden;
    margin-top: 40px;
    position: sticky;
  }
  .card:hover {
    background-color: #f1f1f1;
    transform: translateY(-5px);
  }
  :global(html[data-theme='dark']) .card {
    background-color: #1a1a1c;
    border-color: #2e2e30;
  }
  :global(html[data-theme='dark']) .card:hover {
    background-color: #222224;
  }
  :global(html[data-theme='dark']) .prevImg {
    background-color: #252528;
  }
  .cardWrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 24px;
    height: 100%;
    align-items: stretch;
  }
  .imgWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
    height: 100%;
    padding: 24px 24px 24px 0;
    box-sizing: border-box;
    align-items: stretch;
  }
  .prevImg {
    height: 100%;
    border-radius: 12px;
    background-color: white;
    position: relative;
    overflow: hidden;
  }
  .prevImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }
  .cardtxt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    padding: 32px 0 32px 48px;
    box-sizing: border-box;
  }
  .cardtxt p {
    max-width: 200px;
    font-weight: 100;
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
      gap: 16px;
    }
    .card {
      width: 100%;
      height: auto;
      --pad: 24px;
      padding: var(--pad) var(--pad) 0 var(--pad);
      overflow: hidden;
      position: relative;
      margin-top: 0;
      transform: translateY(16px);
      opacity: 0;
      transition: transform 420ms ease, opacity 420ms ease, background-color 0.3s ease;
    }
    .card:hover {
      transform: translateY(0);
    }
    :global(.card.in-view) {
      transform: translateY(0);
      opacity: 1;
    }
    .cardWrapper {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
      height: auto;
      gap: 20px;
    }
    .cardtxt {
      padding: 0;
      gap: 10px;
      min-width: 0;
    }
    .cardtxt p {
      max-width: none;
      font-size: 16px;
      word-break: break-word;
      overflow-wrap: break-word;
      white-space: normal;
    }
    .cardtxt > p:last-child {
      overflow: visible;
    }
    h3 {
      font-size: 1.4rem;
    }
    /* Image strip: left-aligned, bleeds right */
    .imgWrapper {
      display: flex;
      flex-wrap: nowrap;
      gap: 10px;
      height: auto;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      margin-right: calc(-1 * var(--pad));
      padding-left: 0;
      padding-right: var(--pad);
      padding-bottom: var(--pad);
      box-sizing: border-box;
    }
    .imgWrapper::-webkit-scrollbar {
      display: none;
    }
    .prevImg {
      flex: 0 0 65%;
      height: 220px;
      scroll-snap-align: start;
      border-radius: 14px;
      overflow: hidden;
    }
    .prevImg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 14px;
    }
    .none {
      display: block;
    }
  }
</style>

<script>
  import { onMount, onDestroy } from "svelte";

  let card;
  let card1Fixed = false;

  var ScrollPositionCard1 = 0;
  let card1Lose = false;

  let card2;
  let card2Fixed = false;
  var ScrollPositionCard2 = 0;
  let card2Lose = false;

  let card3;
  let card3Fixed = false;
  var ScrollPositionCard3 = 0;
  let card3Lose = false;

  var card1StaticTop = 0,
    card2StaticTop = 0,
    card3StaticTop = 0;

  let fixedYPositionCard1 = 0;
  let cardHeight = 0;

  const handleScroll = () => {
    if (cardHeight === 0) {
      cardHeight = card.offsetHeight;
    }

    const cardRect = card.getBoundingClientRect();
    const cardRect2 = card2.getBoundingClientRect();
    const cardRect3 = card3.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    fixedYPositionCard1 = window.innerHeight / 2 - cardHeight / 2;
    let fixedYPositionCard2 = window.innerHeight / 2 - cardHeight / 2 + 20;
    let fixedYPositionCard3 = window.innerHeight / 2 - cardHeight / 2 + 40;
    console.log(cardHeight);

    // Logic für Card1
    if (!card1Fixed && cardRect.top <= fixedYPositionCard1) {
      card1Fixed = true;
      ScrollPositionCard1 = currentScrollY;
      // card1StaticTop = card.offsetTop + 1535;
      card1StaticTop = card.offsetTop + (cardHeight * 2) + 195;
    } else if (card1Fixed && currentScrollY <= ScrollPositionCard1) {
      card1Fixed = false;
    }

    // Logic für Card2
    if (!card2Fixed && cardRect2.top <= fixedYPositionCard2) {
      card2Fixed = true;
      ScrollPositionCard2 = currentScrollY;
      // card2StaticTop = card2.offsetTop + 738;
      card2StaticTop = card2.offsetTop + cardHeight + 65;
      card.style.transform = card1Fixed ? "scale(0.98)" : "";
    } else if (card2Fixed && currentScrollY <= ScrollPositionCard2) {
      card2Fixed = false;
      card.style.transform = card1Fixed ? "scale(1)" : "";
    }

    // Logic für Card3
    if (!card3Fixed && cardRect3.top <= fixedYPositionCard3) {
      card3Fixed = true;
      ScrollPositionCard3 = currentScrollY;
      card3StaticTop = card3.offsetTop - 40;
      card2.style.transform = "scale(0.99)";
      card1Lose = true;
      card2Lose = true;
      card3Lose = true;

      // @ts-ignore
      document.querySelector('.container').style.height = '2500px';
    } else if (card3Fixed && currentScrollY <= ScrollPositionCard3) {
      card1Lose = false;
      card2Lose = false;
      card3Lose = false;
      card3Fixed = false;
      card2.style.transform = "scale(1)";
      // @ts-ignore
      document.querySelector('.container').style.height = '3500px';
    }
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initiale Position überprüfen
    // Setzen der CSS-Variable
    document.documentElement.style.setProperty(
      "--fixedYPositionCard1",
      `${fixedYPositionCard1}px`,
    );
  });

  onDestroy(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<div class="container">
  <div
    bind:this={card}
    class:fixed={card1Fixed}
    class:lose={card1Lose}
    class="card"
    style="top: {card1Lose ? card1StaticTop + 'px' : ''};"
  >
    <a href="#/spot">
      <div class="innercard backgroundimgSpot">
        <h1>Spot <span> - A spatial computing tool for thinking, <br>keeping and using ideas.</span></h1>
        <h5>3. Semester <span>— Invention Design</span></h5>
      </div>
    </a>
  </div>

  <div
    bind:this={card2}
    class:fixed2={card2Fixed}
    class:lose={card2Lose}
    class="card"
    style="z-index: 1; margin-top: 450px; top: {card2Lose
      ? card2StaticTop + 'px'
      : ''};"
  >
    <a href="#/growceries">
      <div class="innercard backgroundimgGrow">
        <h1 style="color: black;">Growceries</h1>
        <h5>1. Semester <span>— Design Sprint</span></h5>
      </div>
    </a>
  </div>

  <div
    bind:this={card3}
    class:fixed3={card3Fixed}
    class:lose={card3Lose}
    class="card"
    style="z-index: 2; margin-top: 650px; top: {card3Lose
      ? card3StaticTop + 'px'
      : ''};"
  >
    <a href="#/respiratory">
      <div class="innercard backgroundimgRespiratory">
        <h1>Discover your Respiratory system</h1>
        <h5>2. Semester <span>— Interactive Kommunikation Systems</span></h5>
      </div>
    </a>
  </div>
</div>

<style>
  h1 {
    color: white;
  }
  .container {
    height: 3500px; /* Für Scrollen */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .card {
    width: 80%;
    max-width: 1200px;
    height: auto;
    aspect-ratio: 16 / 9; /* Maintain aspect ratio */
    background-color: #f8f9fa;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease; /* Nur Transform animieren */
    background: white;
    border-radius: 22px;
    border: 0.75px #e2e2e2 solid;
    padding: 5px;
    position: relative;
    overflow: hidden; /* Ensure the background image doesn't overflow the card */
  }
  .innercard {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    border-radius: 16px;
    border: 0.5px #a7a7a7 solid;
    padding: 5%;
    box-sizing: border-box;
    position: relative;
    top: 0;
    left: 0;
    color: black;
    text-decoration: none;
  }
  .card:hover {
    transform: scale(1.01);
  }
  .backgroundimgGrow {
    background-image: url('../images/GrowCard.png');
    background-size: cover;
    background-position: center;
  }
  .backgroundimgSpot {
    background-image: url('../images/SpotCard.png');
    background-size: cover;
    background-position: center;
  }
  .backgroundimgRespiratory {
    background-image: url('../images/RespyCard.png');
    background-size: cover;
    background-position: center;
  }
  .card.fixed {
    position: fixed;
    top: var(--fixedYPositionCard1);
  }
  .card.fixed2 {
    position: fixed;
    top: var(--fixedYPositionCard1);
    margin-top: 20px !important;
  }
  .card.fixed3 {
    position: fixed;
    top: var(--fixedYPositionCard1);
    margin-top: 40px !important;
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
    h1 {
      font-size: 1.5rem;
    }
    .container {
      height: 2000px;
    }
    .innercard h1 span {
      display: none;
    }
    .innercard h5 {
      display: none;
    }
    .card {
      width: 100%;
      aspect-ratio: 4 / 5;
    }
  }
</style>

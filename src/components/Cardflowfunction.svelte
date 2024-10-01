<script>
  import { onMount } from "svelte";

  // Array mit den Kartendaten
  const cards = [
    { id: 1, title: "Spot", description: "A spacial computing tool for thinking, keeping and using ideas.", semesterinfo: "Invention Design", imgClass: "backgroundimgSpot" },
    { id: 2, title: "Growceries", description: "An application that connects local farmers with customers to reduce food waste", semesterinfo: "Design Sprint", imgClass: "backgroundimgGrow" },
    { id: 3, title: "Respiratory", description: "An Interactive Exhibition Design to discover your own lung in real time", semesterinfo: "Exhibition Design", imgClass: "backgroundimgRespiratory" }
  ];

  let loseStatus = Array(cards.length).fill(false); // Status für jede Karte
  let cardHeight = 0;
  let viewportHeight = 0;

  onMount(() => {
    // Höhe der ersten Karte ermitteln
    const firstCard = document.querySelector(".card");
    if (firstCard) {
      cardHeight = firstCard.clientHeight;
      viewportHeight = window.innerHeight;
      console.log(cardHeight);
    }
  });
</script>

<main>
  <div class="container pageWrapper">
    {#each cards as card, index}
      <div
        class:lose={loseStatus[index]}
        class="card"
        style="
          top: calc({viewportHeight / 2}px - {cardHeight / 2}px + {index * 15}px); 
        "
      >
        <a href={`#/${card.title.toLowerCase()}`}>
          <div class="innercard {card.imgClass}">
            <div>
              <h1>{card.title}</h1>
              <h3>{card.description}</h3>
            </div>
            <img class="icon" src="../images/icons/arrow-up-right-light.svg" alt="Arrow" />
            <h5>{card.semesterinfo}</h5>
          </div>
        </a>
      </div>
    {/each}
  </div>
</main>

<style>
  h1 {
    color: white;
  }
  h3 {
    font-weight: 300;
    color: #9d9d9d;
    font-size: 22px;
  }
  .container {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .card {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    background-color: #f8f9fa;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease;
    background: white;
    border-radius: 22px;
    border: 0.75px #e2e2e2 solid;
    padding: 5px;
    margin-top: 100px;
    position: sticky;
    overflow: hidden;
  }
  .innercard {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    border-radius: 16px;
    border: 0.5px #a7a7a7 solid;
    padding: 60px;
    padding-right: 50%;
    box-sizing: border-box;
    position: relative;
    top: 0;
    left: 0;
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .icon {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 60px;
    right: 60px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(9deg) brightness(103%) contrast(103%);
    transition: transform 0.5s ease;
  }
  .backgroundimgGrow {
    background-image: url('../images/GrowCard.png');
    background-size: cover;
    background-position: center;
  }
  .backgroundimgGrow h1 {
    color: black;
  }
  .backgroundimgGrow .icon {
    filter: none;
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
  .card:hover {
    transform: scale(1.01);
  }
  .card:hover .icon {
    transform: translate(10px, -10px);
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
      font-size: 1.7rem;
    }
    .container {
      height: 2000px;
    }
    .icon {
      width: 32px;
      height: 32px;
      top: 40px;
      right: 40px;
    }
    .innercard {
      padding: 40px;
    }
    .innercard h5 {
      display: none;
    }
    .card {
      width: 100%;
      aspect-ratio: 9 / 16;
    }
    .backgroundimgSpot {
      background-image: url('../images/SpotCard_mobile.png');
    }
    .backgroundimgGrow {
      background-image: url('../images/GrowCard_mobile.png');
    }
    .backgroundimgRespiratory {
      background-image: url('../images/RespyCard_mobile.png');
    }
  }
</style>

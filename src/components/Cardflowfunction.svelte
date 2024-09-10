<script>
  import { onMount } from "svelte";

  // Array mit den Kartendaten
  const cards = [
    { id: 1, title: "Spot", description: "A spatial computing tool", semesterinfo: "3. Semester", imgClass: "backgroundimgSpot" },
    { id: 2, title: "Growceries", description: "Design Sprint", semesterinfo: "1. Semester", imgClass: "backgroundimgGrow" },
    { id: 3, title: "Respiratory", description: "Interactive Communication Systems", semesterinfo: "2. Semester", imgClass: "backgroundimgRespiratory" }
  ];

  let loseStatus = Array(cards.length).fill(false); // Status für jede Karte
  let cardHeight = 0;

  onMount(() => {
    // Höhe der ersten Karte ermitteln
    const firstCard = document.querySelector(".card");
    if (firstCard) {
      cardHeight = firstCard.clientHeight;
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
          top: calc(50% + {index * 15}px - {cardHeight / 2}px - 100px); 
        "
      >
        <a href={`#/${card.title.toLowerCase()}`}>
          <div class="innercard {card.imgClass}">
            <h1>{card.title} <span> - {card.description}</span></h1>
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
  .container {
    height: auto; /* Für Scrollen */
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
    padding: 5%;
    box-sizing: border-box;
    position: relative;
    top: 0;
    left: 0;
    color: black;
    text-decoration: none;
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
  .card:hover {
    transform: scale(1.01);
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
      aspect-ratio: 9 / 16;
    }
    
  }
</style>

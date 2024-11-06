<script>
  import { onMount } from "svelte";

  const cards = [
    {
      id: 1,
      title: "Spot",
      description: "A spatial computing tool for thinking, keeping and using ideas.",
      semesterinfo: "Invention Design",
      imgClass: "backgroundimgSpot",
      videoUrl: "../videos/SpotKeyvisual.mp4",
      imgUrl1: "../images/Spot/Spot1.png",
      imgUrl2: "../images/Spot/Spot2.png",
      imgUrl3: "../images/Spot/Spot3.png",
    },
    {
      id: 2,
      title: "Growceries",
      description: "Don't waste, share the taste!",
      semesterinfo: "Design Sprint",
      imgClass: "backgroundimgGrow",
      videoUrl: "path/to/grow-video.mp4",
      imgUrl1: "../images/Growceries/Grow1.png",
      imgUrl2: "../images/Growceries/Grow2.png",
      imgUrl3: "../images/Growceries/Grow3.png",
    },
    {
      id: 3,
      title: "Traumpalast",
      description: "An Application Redesign",
      semesterinfo: "Exhibition Design",
      imgClass: "backgroundimgTraumpalast",
      videoUrl: "../videos/TraumpalastKeyvisual.mp4",
      imgUrl1: "../images/Traumpalast/Traum1.png",
      imgUrl2: "../images/Traumpalast/Traum2.png",
      imgUrl3: "../images/Traumpalast/Traum3.png",
    },
  ];

  let loseStatus = Array(cards.length).fill(false);
  let cardHeight = 0;
  let viewportHeight = 0;

  onMount(() => {
    setTimeout(() => {
      const firstCard = document.querySelector(".card");
      if (firstCard) {
        cardHeight = firstCard.clientHeight;
        viewportHeight = window.innerHeight;
        console.log(cardHeight);
      }
    }, 100);
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
        style="top: calc({viewportHeight / 2}px - {cardHeight / 2}px + {index * 15}px);"
      >
        <a href={`#/${card.title.toLowerCase()}`}>
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
                <img src={card.imgUrl1} alt="">
              </div>
              <div class="prevImg none">
                <img src={card.imgUrl2} alt="">
              </div>
              <div class="prevImg none">
                <img src={card.imgUrl3} alt="">
              </div>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</main>

<style>
  h1, h3, h5 {
    z-index: 2;
    color: black;
  }
  p {
    color: #9d9d9d;
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
    background-color: #F9F9F9;
    transition: all 0.5s ease;
    border-radius: 22px;
    border: 1.5px #E3E3E3 solid;
    padding: 40px;
    margin-top: 100px;
    position: sticky;
  }
  .card:hover {
    background-color: #F1F1F1;
    transform: translateY(-5px);
  }
  .cardWrapper {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 8px;
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
      height: 1800px;
      width: 90%;
    }
    .card {
      width: 100%;
      padding: 30px;
      overflow-y: hidden; 
    }
    .cardWrapper {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr;
    }
    .imgWrapper {
      overflow: hidden;
      grid-template-columns: 1fr;
    }
    .prevImg {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
    .none {
      display: none;
    }
  }
</style>

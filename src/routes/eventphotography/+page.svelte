<script>
  const images = [
    { url: '../images/EventPhotos/1.png' },
    { url: '../images/EventPhotos/2.png' },
    { url: '../images/EventPhotos/3.png' },
    { url: '../images/EventPhotos/4.png' },
    { url: '../images/EventPhotos/5.png' },
    { url: '../images/EventPhotos/6.png' },
    { url: '../images/EventPhotos/7.png' },
    { url: '../images/EventPhotos/8.png' },
    { url: '../images/EventPhotos/9.png' },
    { url: '../images/EventPhotos/10.png' },
    { url: '../images/EventPhotos/11.png' },
    { url: '../images/EventPhotos/12.png' },
    { url: '../images/EventPhotos/13.png' },
    { url: '../images/EventPhotos/14.png' },
    { url: '../images/EventPhotos/15.png' },
    { url: '../images/EventPhotos/16.png' },
    { url: '../images/EventPhotos/17.png' },
    { url: '../images/EventPhotos/18.png' },
    { url: '../images/EventPhotos/19.png' },
    { url: '../images/EventPhotos/20.png' },
    { url: '../images/EventPhotos/21.png' },
  ];

  let column1 = [];
  let column2 = [];
  let column3 = [];
  let column4 = [];

  $: distributeImages();

  function distributeImages() {
    column1 = [];
    column2 = [];
    column3 = [];
    column4 = [];
    images.forEach((image, index) => {
      if (index % 4 === 0) column1.push(image);
      else if (index % 4 === 1) column2.push(image);
      else if (index % 4 === 2) column3.push(image);
      else column4.push(image);
    });
  }
</script>

<main>
  <div class="gallery">
    <!-- Erste Spalte -->
    <div class="column">
      {#each column1 as image}
        <img src={image.url} alt="Gallery Image" />
      {/each}
    </div>
    
    <!-- Zweite Spalte -->
    <div class="column">
      {#each column2 as image}
        <img src={image.url} alt="Gallery Image" />
      {/each}
    </div>
    
    <!-- Dritte Spalte -->
    <div class="column">
      {#each column3 as image}
        <img src={image.url} alt="Gallery Image" />
      {/each}
    </div>

    <!-- Vierte Spalte -->
    <div class="column">
      {#each column4 as image}
        <img src={image.url} alt="Gallery Image" />
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    width: 100%;
    padding: 2rem 10rem;
  }
  .gallery {
    display: grid;
    gap: 3rem;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .gallery img {
    width: 100%;
    height: auto;
    border-radius: 2px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  /* Responsive grid layout */
  @media (min-width: 600px) {
    .gallery {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 900px) {
    .gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .gallery {
      grid-template-columns: repeat(4, 1fr); /* Update to 4 columns */
    }
  }
</style>

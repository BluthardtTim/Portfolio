<script>
  const images = [
    { url: '../images/gallerie/01.jpg' },
    { url: '../images/gallerie/02.jpg' },
    { url: '../images/gallerie/03.jpg' },
    { url: '../images/gallerie/04.jpg' },
    { url: '../images/gallerie/05.jpg' },
    { url: '../images/gallerie/06.jpg' },
    { url: '../images/gallerie/07.jpg' },
    { url: '../images/gallerie/08.jpg' },
    { url: '../images/gallerie/09.jpg' },
    { url: '../images/gallerie/10.jpg' },
    { url: '../images/gallerie/11.jpg' },
    { url: '../images/gallerie/12.jpg' },
    { url: '../images/gallerie/13.jpg' },
    { url: '../images/gallerie/14.jpg' },
    { url: '../images/gallerie/15.jpg' },
    { url: '../images/gallerie/16.jpg' },
    { url: '../images/gallerie/17.jpg' },
    { url: '../images/gallerie/18.jpg' },
    { url: '../images/gallerie/19.jpg' },
    { url: '../images/gallerie/20.jpg' },
    { url: '../images/gallerie/21.jpg' },
    { url: '../images/gallerie/22.jpg' },
    { url: '../images/gallerie/23.jpg' },
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
  }
  .gallery {
    display: grid;
    gap: 20px;
  }
  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .gallery img {
    width: 100%;
    height: auto;
    border-radius: 6px;
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

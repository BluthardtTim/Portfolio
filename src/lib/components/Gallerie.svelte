<script>
  const images = [
    { url: '../images/gallerie/02.jpg' },
    { url: '../images/gallerie/03.jpg' },
    { url: '../images/gallerie/04.jpg' },
    { url: '../images/gallerie/05.jpg' },
    { url: '../images/gallerie/06.jpg' },
    { url: '../images/gallerie/07.jpg' },
    { url: '../images/gallerie/08.jpg' },
    { url: '../images/gallerie/09.jpg' },
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
</script>

<main>
  <div class="gallery">
    {#each images as image}
      <img src={image.url} alt="Gallery Image" />
    {/each}
  </div>
</main>

<style>
  main {
    width: 100%;
  }

  .gallery {
    columns: 1;
    column-gap: 8px;
  }

  .gallery img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 2px;
    object-fit: cover;
    margin-bottom: 8px;
    break-inside: avoid;
  }

  @media (min-width: 600px) {
    .gallery { columns: 2; }
  }

  @media (min-width: 900px) {
    .gallery { columns: 3; }
  }

  @media (min-width: 1200px) {
    .gallery { columns: 4; }
  }
</style>

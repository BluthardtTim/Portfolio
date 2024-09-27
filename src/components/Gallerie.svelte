<script>

    const images = [
      { url: '../images/gallerie/01.jpg'},
      { url: '../images/gallerie/02.jpg'},
      { url: '../images/gallerie/03.jpg'},
      { url: '../images/gallerie/04.jpg'},
      { url: '../images/gallerie/05.jpg'},
      { url: '../images/gallerie/06.jpg'},
      { url: '../images/gallerie/07.jpg'},
      { url: '../images/gallerie/08.jpg'},
      { url: '../images/gallerie/09.jpg'},
      { url: '../images/gallerie/10.jpg'},
    ];
  
    let column1 = [];
    let column2 = [];
    let column3 = [];
  
    $: distributeImages();
  
    function distributeImages() {
      column1 = [];
      column2 = [];
      column3 = [];
      images.forEach((image, index) => {
        if (index % 3 === 0) column1.push(image);
        else if (index % 3 === 1) column2.push(image);
        else column3.push(image);
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
        </div>   
    </main>
  
  
    <style>
      .gallery {
        display: grid;
        gap: 10px;
      }
    
      .gallery img {
        width: 100%;
        height: auto;
        border-radius: 2px;
        object-fit: cover;
        transition: transform 0.3s ease;
        cursor: pointer;
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
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
    
    
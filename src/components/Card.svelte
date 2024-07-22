<script>
    export let cardRef;
    export let fixed = false;
    export let lose = false;
    export let styleTop = '';
    export let zIndex = 0;
    export let marginTop = '0px';
    export let text = 'Card';
  </script>
  
  <div
    bind:this={cardRef}
    class:fixed={fixed}
    class:lose={lose}
    class="card"
    style="z-index: {zIndex}; margin-top: {marginTop}; top: {styleTop};"
  >
    <div class="innercard"><p>{text}</p></div>
  </div>
  
  <style>
    .card {
      width: 80%;
      max-width: 1200px;
      height: auto;
      aspect-ratio: 16 / 9; /* Maintain aspect ratio */
      background-color: #f8f9fa;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.5s ease; /* Nur Transform animieren */
      background: white;
      border-radius: 22px;
      border: 0.75px #e2e2e2 solid;
      padding: 5px;
    }
    .innercard{
      width: 100%;
      height: 100%;
      background: #F7F7F7;
      border-radius: 16px;
      border: 0.50px #A7A7A7 solid;
      padding: 5%;
      box-sizing: border-box;
      position: relative;
      top: 0;
      left: 0;
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
  </style>
  
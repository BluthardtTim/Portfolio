import { R as ensure_array_like, I as attr_class, F as attr_style, G as attr, O as escape_html, C as pop, z as push, M as head } from "../../chunks/index.js";
import { F as Footer } from "../../chunks/Footer.js";
import "clsx";
/* empty css                                                 */
function Cardflowfunction($$payload, $$props) {
  push();
  const cards = [
    {
      id: 2,
      title: "Ben",
      description: "The App for Better Evidence News",
      semesterinfo: "App Concept and Design",
      imgClass: "backgroundimgGrow",
      videoUrl: "path/to/grow-video.mp4",
      imgUrl1: "../images/BEN/BEN1.png",
      imgUrl2: "../images/BEN/BEN2.png",
      imgUrl3: "../images/BEN/BEN3.png"
    },
    {
      id: 3,
      title: "LYS",
      description: "Interactions shaped around you",
      semesterinfo: "Specualtive Design",
      imgClass: "backgroundimgTraumpalast",
      videoUrl: "../videos/TraumpalastKeyvisual.mp4",
      imgUrl1: "../images/LYS/LYS1.png",
      imgUrl2: "../images/LYS/LYS2.png",
      imgUrl3: "../images/LYS/LYS3.png"
    },
    {
      id: 1,
      title: "Spot",
      description: "A spatial computing tool for thinking, keeping and using ideas",
      semesterinfo: "Invention Design",
      imgClass: "backgroundimgSpot",
      videoUrl: "../videos/SpotKeyvisual.mp4",
      imgUrl1: "../images/Spot/Spot1.png",
      imgUrl2: "../images/Spot/Spot2.png",
      imgUrl3: "../images/Spot/Spot3.png"
    }
  ];
  let loseStatus = Array(cards.length).fill(false);
  let blurValues = Array(cards.length).fill(0);
  let cardHeight = 0;
  let viewportHeight = 0;
  const each_array = ensure_array_like(cards);
  $$payload.out += `<main><div class="container svelte-89omkt"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let card = each_array[index];
    $$payload.out += `<div${attr_class("card svelte-89omkt", void 0, { "lose": loseStatus[index] })}${attr_style(`top: calc(${viewportHeight / 2}px - ${cardHeight / 2}px - 6vh + ${index * 15}px); filter: blur(${blurValues[index]}px);`)}><a${attr("href", `/${card.title.toLowerCase()}`)} class="svelte-89omkt"><div class="cardWrapper svelte-89omkt"><div class="cardtxt svelte-89omkt"><div><h3 class="svelte-89omkt">${escape_html(card.title)}</h3> <p class="svelte-89omkt">${escape_html(card.description)}</p></div> <p class="svelte-89omkt">${escape_html(card.semesterinfo)}</p></div> <div class="imgWrapper svelte-89omkt"><div class="prevImg svelte-89omkt"><img${attr("src", card.imgUrl1)} alt="" class="svelte-89omkt"></div> <div class="prevImg none svelte-89omkt"><img${attr("src", card.imgUrl2)} alt="" class="svelte-89omkt"></div> <div class="prevImg none svelte-89omkt"><img${attr("src", card.imgUrl3)} alt="" class="svelte-89omkt"></div></div></div></a></div>`;
  }
  $$payload.out += `<!--]--></div></main>`;
  pop();
}
function HeaderDesignPortfolio($$payload) {
  $$payload.out += `<main><div class="pageWrapper"><div class="project_layout"><div class="txt"><div><h1 class="svelte-9hvchb">Tim Bluthardt</h1> <h3>Interaction Design Portfolio</h3></div> <p class="svelte-9hvchb"><span class="svelte-9hvchb">Hi, I’m Tim</span> and I am currently studying Interaction Design in
                    Schwäbisch Gmünd, Germany. My strong interest in new
                    technologies and how design can help integrate them seamlessly
                    into meaningful user experience, shapes the way I design.</p></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></main>`;
}
function Techstack($$payload) {
  $$payload.out += `<main><div id="wrapper" class="svelte-1757cxs"><p class="caption">designed and developed by myself with fun and curiosity (before Vibecoding was a thing)</p></div></main>`;
}
function ThemeToggle($$payload, $$props) {
  push();
  $$payload.out += `<button aria-label="Toggle dark mode" class="theme-toggle svelte-kvts2f">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `☀️ Light`;
  }
  $$payload.out += `<!--]--></button>`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Tim Bluthardt</title>`;
    $$payload2.out += `<meta name="og:title" content="Tim Bluthardt | UX Design"> <meta name="twitter:title" content="Tim Bluthardt | UX Design">`;
  });
  $$payload.out += `<main><div class="spacer50 svelte-1b8ykw0"></div> <div class="savespaceTop"></div> <div class="toggleRow svelte-1b8ykw0">`;
  ThemeToggle($$payload);
  $$payload.out += `<!----></div> `;
  HeaderDesignPortfolio($$payload);
  $$payload.out += `<!----> <div class="spacer50 svelte-1b8ykw0"></div> `;
  Cardflowfunction($$payload);
  $$payload.out += `<!----> <div class="startpageWrapper"><div class="spacer100 svelte-1b8ykw0"></div> <div class="project_layout"><div class="txt"><h3>Feel free to reach out!</h3> <div><p class="svelte-1b8ykw0">I'm always open for a coffe talk and chat about
                        feedback, emerging tech or any other topic!</p> <p class="svelte-1b8ykw0">reach me on <a href="https://www.linkedin.com/in/tim-bluthardt/">linkedIn</a></p></div></div></div> <div class="spacer"></div> `;
  Techstack($$payload);
  $$payload.out += `<!----></div> `;
  Footer($$payload);
  $$payload.out += `<!----></main>`;
}
export {
  _page as default
};

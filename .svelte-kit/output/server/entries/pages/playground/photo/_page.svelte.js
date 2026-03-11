import "clsx";
import { F as Footer } from "../../../../chunks/Footer.js";
import { R as ensure_array_like, G as attr } from "../../../../chunks/index.js";
function Gallerie($$payload) {
  const images = [
    { url: "../images/gallerie/01.jpg" },
    { url: "../images/gallerie/02.jpg" },
    { url: "../images/gallerie/03.jpg" },
    { url: "../images/gallerie/04.jpg" },
    { url: "../images/gallerie/05.jpg" },
    { url: "../images/gallerie/06.jpg" },
    { url: "../images/gallerie/07.jpg" },
    { url: "../images/gallerie/08.jpg" },
    { url: "../images/gallerie/09.jpg" },
    { url: "../images/gallerie/10.jpg" },
    { url: "../images/gallerie/11.jpg" },
    { url: "../images/gallerie/12.jpg" },
    { url: "../images/gallerie/13.jpg" },
    { url: "../images/gallerie/14.jpg" },
    { url: "../images/gallerie/15.jpg" },
    { url: "../images/gallerie/16.jpg" },
    { url: "../images/gallerie/17.jpg" },
    { url: "../images/gallerie/18.jpg" },
    { url: "../images/gallerie/19.jpg" },
    { url: "../images/gallerie/20.jpg" },
    { url: "../images/gallerie/21.jpg" },
    { url: "../images/gallerie/22.jpg" },
    { url: "../images/gallerie/23.jpg" }
  ];
  let column1 = [];
  let column2 = [];
  let column3 = [];
  let column4 = [];
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
  distributeImages();
  const each_array = ensure_array_like(column1);
  const each_array_1 = ensure_array_like(column2);
  const each_array_2 = ensure_array_like(column3);
  const each_array_3 = ensure_array_like(column4);
  $$payload.out += `<main class="svelte-1lf9gsd"><div class="gallery svelte-1lf9gsd"><div class="column svelte-1lf9gsd"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out += `<img${attr("src", image.url)} alt="Gallery Image" class="svelte-1lf9gsd">`;
  }
  $$payload.out += `<!--]--></div> <div class="column svelte-1lf9gsd"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let image = each_array_1[$$index_1];
    $$payload.out += `<img${attr("src", image.url)} alt="Gallery Image" class="svelte-1lf9gsd">`;
  }
  $$payload.out += `<!--]--></div> <div class="column svelte-1lf9gsd"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let image = each_array_2[$$index_2];
    $$payload.out += `<img${attr("src", image.url)} alt="Gallery Image" class="svelte-1lf9gsd">`;
  }
  $$payload.out += `<!--]--></div> <div class="column svelte-1lf9gsd"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let image = each_array_3[$$index_3];
    $$payload.out += `<img${attr("src", image.url)} alt="Gallery Image" class="svelte-1lf9gsd">`;
  }
  $$payload.out += `<!--]--></div></div></main>`;
}
function _page($$payload) {
  $$payload.out += `<main><div id="wrapper" class="svelte-6etdxu">`;
  Gallerie($$payload);
  $$payload.out += `<!----></div> <div class="spacer"></div> <div style="text-align: center;"><p class="svelte-6etdxu">More prictures on Instagram <a href="https://www.instagram.com/blugraphy.jpg/" target="_blank">@blugraphy.jpg</a></p></div> <div class="startpageWrapper">`;
  Footer($$payload);
  $$payload.out += `<!----></div></main>`;
}
export {
  _page as default
};

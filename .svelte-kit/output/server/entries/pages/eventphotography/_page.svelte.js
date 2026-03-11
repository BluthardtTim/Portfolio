import { R as ensure_array_like, G as attr } from "../../../chunks/index.js";
function _page($$payload) {
  const images = [
    { url: "../images/EventPhotos/1.png" },
    { url: "../images/EventPhotos/2.png" },
    { url: "../images/EventPhotos/3.png" },
    { url: "../images/EventPhotos/4.png" },
    { url: "../images/EventPhotos/5.png" },
    { url: "../images/EventPhotos/6.png" },
    { url: "../images/EventPhotos/7.png" },
    { url: "../images/EventPhotos/8.png" },
    { url: "../images/EventPhotos/9.png" },
    { url: "../images/EventPhotos/10.png" },
    { url: "../images/EventPhotos/11.png" },
    { url: "../images/EventPhotos/12.png" },
    { url: "../images/EventPhotos/13.png" },
    { url: "../images/EventPhotos/14.png" },
    { url: "../images/EventPhotos/15.png" },
    { url: "../images/EventPhotos/16.png" },
    { url: "../images/EventPhotos/17.png" },
    { url: "../images/EventPhotos/18.png" },
    { url: "../images/EventPhotos/19.png" },
    { url: "../images/EventPhotos/20.png" },
    { url: "../images/EventPhotos/21.png" }
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
  $$payload.out += `<main class="svelte-jjwreo"><div class="gallery svelte-jjwreo"><div class="column svelte-jjwreo"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let image = each_array[$$index];
    $$payload.out += `<img${attr("src", image.url)} alt="Gallery Image" class="svelte-jjwreo">`;
  }
  $$payload.out += `<!--]--></div> <div class="column svelte-jjwreo"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let image = each_array_1[$$index_1];
    $$payload.out += `<img${attr("src", image.url)} alt="Gallery Image" class="svelte-jjwreo">`;
  }
  $$payload.out += `<!--]--></div> <div class="column svelte-jjwreo"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let image = each_array_2[$$index_2];
    $$payload.out += `<img${attr("src", image.url)} alt="Gallery Image" class="svelte-jjwreo">`;
  }
  $$payload.out += `<!--]--></div> <div class="column svelte-jjwreo"><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let image = each_array_3[$$index_3];
    $$payload.out += `<img${attr("src", image.url)} alt="Gallery Image" class="svelte-jjwreo">`;
  }
  $$payload.out += `<!--]--></div></div></main>`;
}
export {
  _page as default
};

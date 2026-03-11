import { G as attr, O as escape_html, T as bind_props } from "./index.js";
import "./ProjectHeader.js";
function Image($$payload, $$props) {
  let src = $$props["src"];
  let caption = $$props["caption"];
  $$payload.out += `<main>`;
  if (src) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="image-container svelte-2z0m2o"><img${attr("src", src)}${attr("alt", caption)} class="svelte-2z0m2o"> `;
    if (caption) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p class="caption svelte-2z0m2o">${escape_html(caption)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>No image source provided</p>`;
  }
  $$payload.out += `<!--]--></main>`;
  bind_props($$props, { src, caption });
}
export {
  Image as I
};

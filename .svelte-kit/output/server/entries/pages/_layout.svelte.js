import { D as getContext, E as store_get, F as attr_style, G as attr, I as attr_class, J as unsubscribe_stores, C as pop, z as push, K as stringify, M as head, N as slot } from "../../chunks/index.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
async function tick() {
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navbar($$payload, $$props) {
  push();
  var $$store_subs;
  let selectedItem = "projects";
  let highlightLeft = "160px";
  let highlightWidth = "0px";
  let projectsButton, aboutMeButton, playgroundButton;
  function updateHighlightPosition() {
    const buttonMap = {
      projects: projectsButton,
      aboutme: aboutMeButton,
      playground: playgroundButton
    };
    const button = buttonMap[selectedItem];
    if (button) {
      highlightLeft = `${button.offsetLeft}px`;
      highlightWidth = `${button.offsetWidth}px`;
    }
  }
  function updateFromRoute(pathname) {
    if (pathname.startsWith("/aboutme")) {
      selectedItem = "aboutme";
    } else if (pathname.startsWith("/playground")) {
      selectedItem = "playground";
    } else {
      selectedItem = "projects";
    }
  }
  (async () => {
    const current = store_get($$store_subs ??= {}, "$page", page).url.pathname;
    updateFromRoute(current);
    await tick();
    updateHighlightPosition();
  })();
  $$payload.out += `<main class="svelte-sv3x0j"><div id="wrapper" class="svelte-sv3x0j"><div class="NavbarWrapper svelte-sv3x0j"><div class="highlight svelte-sv3x0j"${attr_style(`left: ${stringify(highlightLeft)}; width: ${stringify(highlightWidth)};`)}></div> <a class="ankerlink svelte-sv3x0j" href="/"${attr("aria-current", selectedItem === "projects" ? "page" : void 0)}><div${attr_class("NavButton svelte-sv3x0j", void 0, { "active": selectedItem === "projects" })}><p class="svelte-sv3x0j">Projects</p></div></a> <a class="ankerlink svelte-sv3x0j" href="/playground"${attr("aria-current", selectedItem === "playground" ? "page" : void 0)}><div${attr_class("NavButton svelte-sv3x0j", void 0, { "active": selectedItem === "playground" })}><p class="svelte-sv3x0j">Playground</p></div></a> <a class="ankerlink svelte-sv3x0j" href="/aboutme"${attr("aria-current", selectedItem === "aboutme" ? "page" : void 0)}><div${attr_class("NavButton svelte-sv3x0j", void 0, { "active": selectedItem === "aboutme" })}><p class="svelte-sv3x0j">About</p></div></a></div></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Tim Bluthardt</title>`;
  });
  $$payload.out += `<main><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Navbar($$payload);
  $$payload.out += `<!----></main>`;
  pop();
}
export {
  _layout as default
};

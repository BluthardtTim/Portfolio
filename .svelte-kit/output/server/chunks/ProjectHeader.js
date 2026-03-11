import { T as bind_props } from "./index.js";
function ProjectHeader($$payload, $$props) {
  let title = $$props["title"];
  let description = $$props["description"];
  let myRole = $$props["myRole"];
  let duration = $$props["duration"];
  let teamNames = $$props["teamNames"];
  $$payload.out += `<main><div class="Projectbunner svelte-1azdg80"><div class="pageWrapper"><img class="back svelte-1azdg80" src="../images/icons/arrow-left-light.svg" alt="back-arrow"></div></div></main>`;
  bind_props($$props, {
    title,
    description,
    myRole,
    duration,
    teamNames
  });
}
export {
  ProjectHeader as P
};

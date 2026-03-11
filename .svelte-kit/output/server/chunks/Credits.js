import { R as ensure_array_like, G as attr, O as escape_html, K as stringify, T as bind_props, S as fallback } from "./index.js";
import "./ProjectHeader.js";
function Teammates($$payload, $$props) {
  let teammates = fallback($$props["teammates"], () => [], true);
  const each_array = ensure_array_like(teammates);
  $$payload.out += `<main><div id="wrapper" class="svelte-1u1qgz1"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let teammate = each_array[$$index];
    $$payload.out += `<div class="teammate svelte-1u1qgz1"><a${attr("href", `https://${stringify(teammate.portfolio)}`)} class="svelte-1u1qgz1"><p>${escape_html(teammate.name)}</p></a></div>`;
  }
  $$payload.out += `<!--]--></div></main>`;
  bind_props($$props, { teammates });
}
function Credits($$payload, $$props) {
  let myRole = $$props["myRole"];
  let duration = $$props["duration"];
  let teamNames = $$props["teamNames"];
  $$payload.out += `<main><div class="pageWrapper CaseStudyCredits svelte-13g1meo"><div class="svelte-13g1meo"><p class="svelte-13g1meo"><strong class="svelte-13g1meo">my role</strong></p> <p class="svelte-13g1meo">${escape_html(myRole)}</p></div> <div class="svelte-13g1meo"><p class="svelte-13g1meo"><strong class="svelte-13g1meo">duration</strong></p> <p class="svelte-13g1meo">${escape_html(duration)}</p></div> <div class="svelte-13g1meo"><p class="svelte-13g1meo"><strong class="svelte-13g1meo">teammates</strong></p> `;
  Teammates($$payload, { teammates: teamNames });
  $$payload.out += `<!----></div></div></main>`;
  bind_props($$props, { myRole, duration, teamNames });
}
export {
  Credits as C
};

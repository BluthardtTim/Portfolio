import { S as fallback, R as ensure_array_like, G as attr, O as escape_html, K as stringify, T as bind_props, C as pop, z as push } from "./index.js";
function MoreProjects($$payload, $$props) {
  push();
  let projectNames = fallback($$props["projectNames"], () => [], true);
  const projects = {
    Spot: {
      title: "Spot",
      description: "A spatial computing tool for thinking, keeping and using ideas.",
      imageUrl: "../images/Spot/Spot1.png",
      route: "spot"
    },
    Growceries: {
      title: "Growceries",
      description: "An Application that conects lokal farmers to reduse foodwaste",
      imageUrl: "../images/Growceries/Grow1.png",
      route: "growceries"
    },
    Xtend: {
      title: "Xtend",
      description: "The innovative way of playing Jenga",
      imageUrl: "../images/XtendCard_mobile.png",
      route: "xtend"
    },
    Respiratory: {
      title: "Respiratory",
      description: "An interactive exibishion design",
      imageUrl: "../images/RespyCard_mobile.png",
      route: "respiratory"
    },
    Traumpalast: {
      title: "Traumpalast App Redesign",
      description: "An Application Redesign",
      imageUrl: "../images/Traumpalast/Traum1.png",
      route: "traumpalast"
    },
    LYS: {
      title: "LYS",
      description: "Interactions shaped around you",
      imageUrl: "../images/LYS/LYSBanner.png",
      route: "lys"
    },
    BEN: {
      title: "BEN",
      description: "The App for Better Evidence News",
      imageUrl: "../images/BEN/BEN1.png",
      route: "ben"
    }
  };
  const each_array = ensure_array_like(projectNames.slice(0, 2));
  $$payload.out += `<main><div id="wrapper" class="svelte-1xp2d06"><div id="projectswrapper" class="pageWrapper svelte-1xp2d06"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let projectName = each_array[$$index];
    if (projects[projectName]) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", `/${stringify(projects[projectName].route)}`)} class="svelte-1xp2d06"><div class="card svelte-1xp2d06" style="background-size: cover; background-position: center;"><div class="cardtxt svelte-1xp2d06"><h3>${escape_html(projects[projectName].title)}</h3> <p class="svelte-1xp2d06">${escape_html(projects[projectName].description)}</p></div> <div class="prevImg svelte-1xp2d06"><img${attr("src", projects[projectName].imageUrl)} alt="" class="svelte-1xp2d06"></div></div></a>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></main>`;
  bind_props($$props, { projectNames });
  pop();
}
export {
  MoreProjects as M
};

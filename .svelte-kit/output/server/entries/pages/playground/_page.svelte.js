import { R as ensure_array_like, G as attr, O as escape_html, K as stringify } from "../../../chunks/index.js";
import { F as Footer } from "../../../chunks/Footer.js";
function _page($$payload) {
  const projects = {
    Photography: {
      title: "My Photography Selection",
      description: "This is a selection of photos I have taken",
      imageClass: "backgroundimgPhoto",
      imgUrl: "../images/gallerie/03.jpg",
      route: "photo"
    },
    Xtend: {
      title: "Xtend",
      description: "The innovative way of playing Jenga",
      imageClass: "backgroundimgXtend",
      imgUrl: "../images/XtendCard_mobile.png",
      route: "xtend"
    },
    Respiratory: {
      title: "Discover your Respiratory sytem",
      description: "An interactive exibishion design",
      imageClass: "backgroundimgRespy",
      imgUrl: "../images/RespyCard.png",
      route: "respiratorysystem"
    },
    Growceries: {
      title: "Growceries",
      description: "An Application that conects lokal farmers to reduse foodwaste",
      imageClass: "backgroundimgGrow",
      imgUrl: "../images/GrowCard_mobile.png",
      route: "growceries"
    }
  };
  const projectNames = Object.keys(projects);
  const each_array = ensure_array_like(projectNames);
  $$payload.out += `<main><div class="savespaceTop"></div> <div class="pageWrapper"><div class="project_layout"><div class="txt"><h5>Playground</h5> <p>Welcome to my playground, my personal collection of random
                    designs, photographs, explorations or any thing that I could
                    not find a place to show</p></div></div></div> <div class="spacer"></div> <div class="pageWrapper"><div id="wrapper" class="svelte-1i9xkk6"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let projectName = each_array[$$index];
    $$payload.out += `<a${attr("href", `/playground/${stringify(projects[projectName].route)}`)} class="svelte-1i9xkk6"><div class="card svelte-1i9xkk6" style="background-size: cover; background-position: center;"><div class="cardtxt svelte-1i9xkk6"><h3>${escape_html(projects[projectName].title)}</h3> <p class="svelte-1i9xkk6">${escape_html(projects[projectName].description)}</p></div> <div class="prevImg svelte-1i9xkk6"><img${attr("src", projects[projectName].imgUrl)} alt="" class="svelte-1i9xkk6"></div></div></a>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="spacer"></div> <div class="startpageWrapper">`;
  Footer($$payload);
  $$payload.out += `<!----></div></main>`;
}
export {
  _page as default
};

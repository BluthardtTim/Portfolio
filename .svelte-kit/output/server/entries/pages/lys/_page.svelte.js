import { S as fallback, R as ensure_array_like, F as attr_style, G as attr, I as attr_class, T as bind_props, C as pop, z as push, M as head } from "../../../chunks/index.js";
import { C as Credits } from "../../../chunks/Credits.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { P as ProjectHeader } from "../../../chunks/ProjectHeader.js";
import { M as MoreProjects } from "../../../chunks/MoreProjects.js";
/* empty css                                                        */
import { Y as YouTubeVideoEmbed } from "../../../chunks/YouTubeVideoEmbed.js";
function ThreeImages($$payload, $$props) {
  push();
  let images = fallback($$props["images"], () => [], true);
  let gap = fallback($$props["gap"], "1rem");
  let rounded = fallback($$props["rounded"], true);
  let aspectRatio = fallback($$props["aspectRatio"], "4 / 3");
  const each_array = ensure_array_like(images.slice(0, 3));
  $$payload.out += `<div class="image-grid svelte-npdygt"${attr_style(`--gap: ${gap}; --aspect: ${aspectRatio};`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let img = each_array[$$index];
    $$payload.out += `<img${attr("src", img.src)}${attr("alt", img.alt ?? "")} loading="lazy" decoding="async"${attr_class("svelte-npdygt", void 0, { "rounded": rounded })}>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { images, gap, rounded, aspectRatio });
  pop();
}
function _page($$payload) {
  let LYSVideourl = "https://player.vimeo.com/video/1056333493";
  let teamNames = [
    {
      name: "Amelie Schlütter",
      portfolio: "amelieschlueter.com"
    },
    {
      name: "Julia Zöllner",
      portfolio: "juliazoellner.com"
    }
  ];
  let selectedProjects = ["BEN", "Spot"];
  const imgs = [
    { src: "../images/LYS/LYSProto1.png", alt: "" },
    { src: "../images/LYS/LYSProto2.png", alt: "" },
    { src: "../images/LYS/LYSProto3.png", alt: "" }
  ];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Tim Bluthardt | LYS</title>`;
  });
  $$payload.out += `<main>`;
  ProjectHeader($$payload, {
    title: "LYS",
    description: "interactions shaped around you",
    myRole: "concept, visual Design",
    duration: "two months",
    teamNames
  });
  $$payload.out += `<!----> <div class="pageWrapper"><div class="savespaceTop"></div> <div class="project_layout"><div class="txt"><h5>LYS - interactions shaped around you</h5> <p>Lys is an intelligent home system that learns from your
                    routines and behaviors, creating personal interactions with
                    everyday objects. To control these interactions, we’ve
                    created Pilot—a product that serves as both an interface and
                    a transparent layer into Lys processes.</p></div> <div class="quote"><p>“Modern homes and their embedded technologies have been
                    built with a focus on interactions that are functional over
                    ones that feel natural.” <br> <span>(Timi Oyedeji, Prototyper/ Designer at Apple, former
                        interaction Designer at Google ATAP)</span></p></div> <img src="../images/LYS/LYSBanner.png" alt=""> <div class="txt"><h5>Technical Interactions need more context to feel natural</h5> <p>Interactions with technical devices are often purely
                    functional. A light switch on the wall or the volume control
                    on the jukebox - these interactions fulfill a clear, simple
                    task. The solution for more convenient interaction is smart
                    home devices. However, using them also increasingly feels
                    like interacting with technical “partners”. There are long
                    set-up processes, apps with countless functions, and yet the
                    result is just a simple “if-else” scenario that lacks
                    flexibility and a real understanding of the context.
                    Communication between people, on the other hand, is
                    intuitive and two-way. Shaped by context, emotions, habits
                    and unspoken needs.</p></div> <div class="txt"><h5>Lys learns routines and behaviours to shape interaction
                    patterns</h5> <p>LYS continuously learns your routines and behaviors in
                    everyday life and discovers interaction patterns between you
                    and your everyday objects. For example, LYS could recognize
                    that you always put your cell phone with the screen down
                    when you don't want any notifications - and conclude from
                    this that other devices such as washing machines or robot
                    vacuum cleaners shouldn't disturb you either.</p></div> <img src="../images/LYS/LYSSolution.png" alt=""> <div class="txt"><h5>Pilot - Control behaviours</h5> <p>The heart of our project is Pilot - a product that
                    visualizes these abstract processes. Here, the collected
                    data can be stored locally, processes can be aborted if
                    desired and simply observed. Our aim is to offer a simple,
                    subtle product that does not create additional burdens, but
                    works quietly in the background. As soon as LYS performs an
                    interaction, the head tilts. To cancel the process, simply
                    return it to the starting position. The same applies to a
                    new suggestion: the head moves to the side and can be
                    canceled by tilting it back or confirmed by pressing lightly
                    in the direction of fall. Saved patterns appear as spheres
                    that move and snap into place realistically. The current
                    area is displayed via icons and text. If you want more
                    details, you can connect Pilot to a second display via a
                    direct, WLAN-free connection to analyze or delete patterns.</p></div> <img src="../images/LYS/LYSPilot.png" alt=""> <div class="txt"><h5>This is LYS</h5> <p>To present our concept, we created a video that shows the
                    potential of LYS. How LYS can be used in everyday life and
                    how interpreting the sensor data right can make human
                    technology interactions feel so much more natural.</p></div> `;
  YouTubeVideoEmbed($$payload, { url: LYSVideourl, project: "LYS" });
  $$payload.out += `<!----> <div class="txt"><h5>Interactive Prototype</h5> <p>To make our vision for LYS and Pilot tangible, we developed
                    a prototype that is trained with our own AI model. If
                    clapping or flicking is detected, it moves into an unstable
                    position, which can then either be confirmed or canceled.
                    Just as we imagine for the final product.</p></div> `;
  ThreeImages($$payload, {
    images: imgs,
    gap: "1rem",
    rounded: true,
    aspectRatio: "3 / 4"
  });
  $$payload.out += `<!----></div></div> `;
  Credits($$payload, {
    myRole: "concept, visual Design, video film and editing",
    duration: "two months",
    teamNames
  });
  $$payload.out += `<!----> `;
  MoreProjects($$payload, { projectNames: selectedProjects });
  $$payload.out += `<!----> <div class="startpageWrapper">`;
  Footer($$payload);
  $$payload.out += `<!----></div></main>`;
}
export {
  _page as default
};

import { G as attr, T as bind_props } from "./index.js";
/* empty css                                                */
function YouTubeVideoEmbed($$payload, $$props) {
  let url = $$props["url"];
  let project = $$props["project"];
  function extractVideoDetails(url2) {
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const vimeoRegex = /(?:vimeo\.com\/(?:video\/)?)(\d+)/;
    const youtubeMatch = url2.match(youtubeRegex);
    const vimeoMatch = url2.match(vimeoRegex);
    if (youtubeMatch) {
      return { platform: "youtube", videoId: youtubeMatch[1] };
    } else if (vimeoMatch) {
      return { platform: "vimeo", videoId: vimeoMatch[1] };
    } else {
      return { platform: null, videoId: null };
    }
  }
  let { platform, videoId } = extractVideoDetails(url);
  let thumbnails = {
    Spot: "../images/Spot/SpotVideoThumbnail.png",
    Growceries: "../images/Growceries/GrowVideoThumbnail.png",
    Respiratory: "../images/RespyCard.png",
    Xtend: "../images/XtendCard.png",
    LYS: "../images/LYS/LYS_Videothumbnail.png"
  };
  if (videoId) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="video-container svelte-1u56r8b">`;
    {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", thumbnails[project])} alt="Video Thumbnail" class="video-thumbnail svelte-1u56r8b"> <div class="play-button svelte-1u56r8b"><img src="../images/icons/play.svg" alt="icon" class="svelte-1u56r8b"></div>`;
    }
    $$payload.out += `<!--]--> `;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Invalid video URL</p>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { url, project });
}
export {
  YouTubeVideoEmbed as Y
};

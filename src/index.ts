console.log("index.ts loaded");

import { episodes } from "./data/episodes";
import { convertEpisodeToHTML } from "./utils";

const episode_container = document.getElementById("episodes_content");
episode_container.replaceChildren();
episodes.forEach(episode => episode_container.appendChild(convertEpisodeToHTML(episode)));
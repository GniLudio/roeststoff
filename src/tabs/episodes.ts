import { createAdditionalInfoBlock, createCard } from "../cardUtils";
import { durationToString } from "../utils";

export function createEpisodeCard(episode: Episode): HTMLElement {
    return createCard({
        title: episode.title,
        subtitle: episode.subtitle,
        additionalInfo: {
            id: `additional_info_episode_${episode.id}_${episode.type}`,
            buttonName: "Info",
            title: episode.title,
            content: ''
                + createAdditionalInfoBlock('Untertitel', episode.subtitle)
                + createAdditionalInfoBlock('Episode', episode.id.toFixed() + (episode.type != "full" ? ` (<span style='text-transform:capitalize'>${episode.type}</span>)` : ""))
                + createAdditionalInfoBlock('Veröffentlichung', episode.pubDate)
                + createAdditionalInfoBlock('Dauer', "~" + durationToString(episode.duration))
                + createAdditionalInfoBlock('Gäste', 'TODO')
                + createAdditionalInfoBlock('Trinkstoff', 'TODO')
                + createAdditionalInfoBlock('Restaurants', 'TODO')
                + createAdditionalInfoBlock('Audio', `<audio controls preload="none" class="w-75 rounded-3" src="${episode.enclosure.url}">Link</audio>`)
                + createAdditionalInfoBlock('Beschreibung', episode.description)
        }
    });
}

export function parseEpisode(element: Element): Episode {
    return {
        id: parseInt(element.querySelector('episode')?.textContent) || -1,
        type: element.querySelector('episodeType')?.textContent as EpisodeType || "full",
        title: element.querySelector('title')?.textContent ?? "-",
        subtitle: element.querySelector('subtitle')?.textContent ?? "-",
        description: element.querySelector('encoded')?.textContent ?? "-",
        pubDate: (element.querySelector('pubDate')?.textContent ?? "Mon, 01 Apr 0001 00:00:00 -0000"),
        duration: parseInt(element.querySelector('duration')?.textContent) || -1,
        enclosure: {
            url: element.querySelector('enclosure')?.getAttribute('url') ?? "-",
            length: parseInt(element.querySelector('enclosure')?.getAttribute('length')) || -1,
            type: element.querySelector('enclosure')?.getAttribute('type') ?? "-",
        }
    };
}


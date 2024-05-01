import { createCard } from "../cardUtils";
import { parseTimestamp } from "../utils";

export function parseGlossaryEntry(element: Element): GlossaryEntry {
    const episode = parseTimestamp(element);
    return {
        episodeType: episode.episodeType,
        episodeID: episode.episodeID,
        episodeTime: episode.episodeTime,
        name: element.querySelector('name')!.textContent!,
        description: element.querySelector('description')!.textContent!,
    };
}

export function createGlossaryCard(entry: GlossaryEntry, getEpisode: EpisodeGetter): HTMLElement {
    return createCard({
        name: entry.name,
        subtitle: entry.description
    });
}
import { createCard } from "../cardUtils";
import { parseTimestamp } from "../utils";

export function createMiscCard(entry: MiscEntry, getEpisode: EpisodeGetter): HTMLElement {
    return createCard({
        name: entry.name,
        subtitle: entry.description,
        image: entry.image,
    });
}

export function parseMiscEntry(element: Element): MiscEntry {
    const timestamp = parseTimestamp(element);
    return {
        episodeType: timestamp.episodeType,
        episodeID: timestamp.episodeID,
        episodeTime: timestamp.episodeTime,
        name: element.querySelector('name')!.textContent!,
        description: element.querySelector('description')!.textContent!,
        image: element.querySelector('image')?.textContent ?? undefined,
    };
}
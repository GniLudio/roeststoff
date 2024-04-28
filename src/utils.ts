import { episodes } from "./data/episodes";

export function getEpisodes(element: {timestamps: Timestamp[]}): string[] {
    return episodes
        .filter(episode => element.timestamps.find(timestamp => episode.id == timestamp.episode))
        .map(episode => episode.short_title);
}
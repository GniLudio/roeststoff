import { episodes } from "./data/episodes";

export function getEpisodes(element: {timestamps: Timestamp[]}): string[] {
    return episodes
        .filter(episode => element.timestamps.find(timestamp => episode.id == timestamp.episode))
        .map(episode => episode.short_title);
}

export function comparePerson(a: Person, b: Person): number {
    if (a.isHost && b.isHost) return b.id - a.id;
    else if (a.isHost) return 1;
    else if (b.isHost) return -1;
    else {
        const aLatestEpisode = Math.max(...a.timestamps.map(timestamp => timestamp.episode));
        const bLatestEpisode = Math.max(...b.timestamps.map(timestamp => timestamp.episode));
        return bLatestEpisode - aLatestEpisode;
    }
}

export function compareGlossaryEntry(a: GlossaryEntry, b: GlossaryEntry): number {
    return a.title.localeCompare(b.title);
}
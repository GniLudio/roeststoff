import { episodes } from "./data/episodes";

/**
 * Gets all episodes of an item.
 * @param element 
 * @returns 
 */
export function getEpisodes(element: {timestamps: Timestamp[]}): string[] {
    return episodes
        .filter(episode => element.timestamps.find(timestamp => episode.id == timestamp.episode))
        .map(episode => episode.short_title);
}

/**
 * Function used for sorting items.
 * 
 * 1. Sorts by latest episode.
 * 2. Falls back to who has less number of episodes.
 * @param a The first item.
 * @param b The second item.
 * @returns Number representing the difference.
 */
export function compareByTimestamps(a: {timestamps: Timestamp[]}, b: {timestamps: Timestamp[]}): number {
    // Math.abs is used for testing episodes (with negative id)
    const aEpisodes = a.timestamps.map(episode => Math.abs(episode.episode));
    const bEpisodes = b.timestamps.map(episode => Math.abs(episode.episode));
    const aLatestEpisode = Math.max(...aEpisodes);
    const bLatestEpisode = Math.max(...bEpisodes);
    if (bLatestEpisode != aLatestEpisode) {
        return bLatestEpisode - aLatestEpisode;
    } else {
        return -(bEpisodes.length - aEpisodes.length);
    }
}

/**
 * Function used for sorting items by their latest episode.
 * @param a The first item.
 * @param b The second item.
 * @returns Number representing the difference.
 */
export function compareByTimestamp(a: {timestamp: Timestamp}, b: {timestamp: Timestamp}): number {
    return Math.abs(b.timestamp.episode) - Math.abs(a.timestamp.episode);
}

/**
 * Puts Ilona and Peter at the start and then sorts by latest episode.
 * @param a The first person.
 * @param b The second person.
 * @returns Number representing the difference.
 */
export function comparePerson(a: Person, b: Person): number {
    return  (a.isHost || b.isHost) ? b.id - a.id : compareByTimestamps(a,b);
}
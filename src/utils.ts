export function assert<T>(value: T, message?: string): NonNullable<T> {
    if (value === undefined || value === null) {
        throw (message ?? `${value} is not defined`);
    }
    return value;
}

// ---------- STRING CONVERSION ----------
export function secondsToTime(seconds: number): Time {
    const hours = Math.floor(seconds / 60 / 60);
    seconds -= hours * 60 * 60;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return {hours, minutes, seconds};
}

export function mapToFilteredNames(items: { name: string; appearances?: Timestamp[]; }[], episode: EpisodeID, withTime: boolean): string[] {
    const names: string[] = [];
    for (const item of items) {
        if (item.appearances == undefined) continue;
        for (const appearance of item.appearances) {
            if (isEpisodeEqual(appearance, episode)) {
                names.push(item.name + (withTime && appearance.episodeTime ? ' - ' + timeToString(appearance.episodeTime) : ''));
            }
        }
    }
    return names;
}

export function mapToEpisodeNames(items: Timestamp[], episodes: Episode[], withTime: boolean): string[] {
    const names: string[] = [];
    for (const item of items) {
        const episode = episodes.find(e => isEpisodeEqual(item, e));
        if (episode) {
            names.push(episode.name + (withTime && item.episodeTime ? ' - ' + timeToString(item.episodeTime) : ''));
        }
        else {
            names.push(`Not found: ${item.episodeType} - ${item.episode}`);
        }
    }
    return names;
}

export function toHTMLID(id: string): string {
    return id.replace(/\W/g, '_');;
}

export function timeToString(time: Time): string {
    return `${time.hours.toFixed().padStart(2, '0')}:${time.minutes.toFixed().padStart(2, '0')}:${time.seconds.toFixed().padStart(2, '0')}`;
}

export function dateToString(date: Date, withTime: boolean): string {
    return date.toLocaleString('de', { timeZone: 'Europe/Berlin', dateStyle: 'full', timeStyle: withTime ? 'short' : undefined });
}

export function episodeIDToString(episode: EpisodeID): string {
    return ('episode_' + episode.episode.toFixed()) + (episode.episodeType != undefined && episode.episodeType != 'full' ? '_' + episode.episodeType : '');
}

// ---------- SEARCH FUNCTIONS ----------
export function hasEpisode(episodes: EpisodeID[] | undefined, episode: EpisodeID) {
    if (!episodes) return false;
    return episodes.find(e => isEpisodeEqual(e, episode));
}

export function isEpisodeEqual(a: EpisodeID, b: EpisodeID): boolean {
    return isEpisodeTypeEqual(a.episodeType, b.episodeType) && a.episode == b.episode;
}

export function isEpisodeTypeEqual(a: EpisodeType | undefined, b: EpisodeType | undefined): boolean {
    return a == b || (a == 'full' && b == undefined) || (a == undefined && b == 'full');
}

// ---------- SORTING ----------
export function compareDates(a: Date | undefined, b: Date | undefined): number {
    if (a == b) return 0;
    else if (a == undefined) return -1;
    else if (b == undefined) return 1;
    else if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}

export function compareEpisode(a: Episode | undefined, b: Episode | undefined): number {
    return compareDates(a?.pubDate, b?.pubDate);
}

export function compareEpisodeID(a: EpisodeID | undefined, b: EpisodeID | undefined, episodes: Episode[]): number {
    if (a == b) return 0;
    else if (a == undefined) return -1;
    else if (b == undefined) return 1;
    const aEpisode = episodes.find(e => isEpisodeEqual(a,e));
    const bEpisode = episodes.find(e => isEpisodeEqual(b,e));
    return compareEpisode(aEpisode, bEpisode);
}

export function compareEpisodeIDs(a: EpisodeID[] | undefined, b: EpisodeID[] | undefined, episodes: Episode[]): number {
    if (a == b) return 0;
    else if (a == undefined) return -1;
    else if (b == undefined) return 1;
    else if (a.length == 0 && b.length == 0) return 0;
    else if (a.length == 0) return -1;
    else if (b.length == 0) return 1;
    const aLastEpisode = max(a, (e1,e2) => compareEpisodeID(e1, e2, episodes));
    const bLastEpisode = max(b, (e1,e2) => compareEpisodeID(e1, e2, episodes));
    return compareEpisodeID(aLastEpisode, bLastEpisode, episodes);
}

function max<T>(elements: T[], compare: (a: T, b: T) => number = (a,b) => a < b ? -1 : a == b ? 0 : 1): T {
    return elements.reduce((a,b) => compare(a,b) >= 0 ? a : b);
}
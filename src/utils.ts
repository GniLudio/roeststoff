export function assert<T>(value: T, message?: string): NonNullable<T> {
    if (value === undefined || value === null) {
        throw (message ?? `${value} is not defined`);
    }
    return value;
}

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

export function timeToString(time: Time): string {
    return `${time.hours.toFixed().padStart(2, '0')}:${time.minutes.toFixed().padStart(2, '0')}:${time.seconds.toFixed().padStart(2, '0')}`;
}

export function dateToString(date: Date, withTime: boolean): string {
    return date.toLocaleString('de', { timeZone: 'Europe/Berlin', dateStyle: 'full', timeStyle: withTime ? 'short' : undefined });
}
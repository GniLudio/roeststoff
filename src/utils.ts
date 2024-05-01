export function parseTime(time: number | string): Time {
    if (typeof (time) == "number" && time == -1) {
        return { hours: 0, minutes: 0, seconds: 0 };
    }
    else if (typeof (time) == "number") {
        let seconds = time;
        const hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        const minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        return { hours: hours, minutes: minutes, seconds: seconds }
    }
    else {
        const splitted = time.split(":");
        const hours = splitted.length >= 1 ? parseInt(splitted[0]) : 0;
        const minutes = splitted.length >= 2 ? parseInt(splitted[1]) : 0;
        const seconds = splitted.length >= 3 ? parseInt(splitted[2]) : 0;
        return { hours: hours, minutes: minutes, seconds: seconds };
    }
}

export function parseTimestamp(element: Element): Timestamp {
    return {
        episodeID: parseInt(element.querySelector('episode')!.textContent!),
        episodeType: element.querySelector(`episodeType`) ? element.querySelector(`episodeType`)?.textContent as EpisodeType : "full",
        episodeTime: parseTime(element.querySelector('episodeTime')?.textContent ?? -1)
    };
}

export function compareDates(a: Date, b: Date): number {
    return a < b ? -1 : a == b ? 0 : 1;
}

export function compareByLastAppearance(a: { appearances: Timestamp[] }, b: { appearances: Timestamp[] }): number {
    const aLastAppearance = a.appearances.reduce((x, y) => x > y ? x : y);
    const bLastAppearance = b.appearances.reduce((x, y) => x > y ? x : y);
    if (aLastAppearance < bLastAppearance) return -1;
    else if (aLastAppearance > bLastAppearance) return 1;
    else return 0;
}

export function isEpisodeEqual(a: EpisodeUID, b: EpisodeUID): boolean {
    return a.episodeType == b.episodeType && a.episodeID == b.episodeID;
}

export function timeToString(time: Time): string {
    return `${time.hours.toFixed().padStart(2, '0')}:${time.minutes.toFixed().padStart(2, '0')}:${time.seconds.toFixed().padStart(2, '0')}`
}

export function dateToString(date: Date, withTime: boolean): string {
    return date.toLocaleString('de', { timeZone: 'Europe/Berlin', dateStyle: 'full', timeStyle: withTime ? 'short' : undefined })
}

export function parseApperances(element: Element): Timestamp[] {
    const appearances = element.querySelector("appearances")?.querySelectorAll("appearance");
    return Array.from(appearances ?? []).map(parseTimestamp);
}

export function parseXML<T>(rawXML: string, rootPath: string[], itemName: string, parser: (e: Element) => T): T[] {
    const episodesXML: XMLDocument = new DOMParser().parseFromString(rawXML, "text/xml");

    let root: Element = episodesXML.querySelector(rootPath[0])!;
    for (let i = 1; i < rootPath.length; i++) {
        root = root.querySelector(rootPath[i])!;
    }

    return Array.from(root.querySelectorAll(itemName)).map(parser);
}

export function getEpisodeNames(element: { appearances: Timestamp[] }, getEpisode: EpisodeGetter): string[] {
    return element.appearances.map(getEpisode).map(episode => episode.name);
}

export function getEpisodeNameWithTime(element: { appearances: Timestamp[] }, getEpisode: EpisodeGetter): string[] {
    const episodesWithTime: [Episode, Time][] = element.appearances.map(a => [getEpisode(a), a.episodeTime]);
    return episodesWithTime.map(([episode, time]) => episode.name + appendTime(time));
}

export function appendTime(time: Time): string {
    if (time.hours == 0 && time.minutes == 0 && time.seconds == 0) return "";
    return " - " + timeToString(time);
}

export function findAppearance(appearances: Timestamp[], episode: Episode): Timestamp {
    return appearances.find(appearance => isEpisodeEqual(appearance, episode))!;
}
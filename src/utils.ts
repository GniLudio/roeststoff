

export function durationToString(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return `${hours}:${minutes}:${seconds}`;
}

export function parseTimestamp(element: Element): Timestamp {
    return {
        id: parseInt(element.querySelector('episode')?.textContent) || -1,
        type: (element.querySelector(`type`)?.textContent as EpisodeType) ?? "full",
        time: parseInt(element.querySelector('time')?.textContent) || null
    };
}

export function assert<T>(value: T, message?: string): NonNullable<T> {
    if (value === undefined || value === null) {
        throw (message ?? `${value} is not defined`) + `${value === undefined} ${value === null})`;
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
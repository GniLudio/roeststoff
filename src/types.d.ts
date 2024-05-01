interface Episode {
    id: EpisodeID,
    type: EpisodeType,
    title: string,
    subtitle: string,
    description: string,
    pubDate: Date,
    duration: number,
    enclosure: {
        url: Link,
        length: number,
        type: string,
    }
}

interface Person {
    name: string,
    description: string,
    image?: string,
    isHost?: boolean,
    appearances: Timestamp[],
}

interface CardInfo {
    title: string,
    subtitle: string,
    image?: string,
    additionalInfo?: AdditionalCardInfo
}

interface AdditionalCardInfo {
    id: string,
    buttonName: string,
    title: string,
    content: string,
}

type EpisodeUID = {id: number, type: EpisodeType}
type EpisodeID = number;
type EpisodeType = "full" | "trailer" | "bonus";
type Link = string;

type Timestamp = EpisodeUID & {time?: number}

declare module '*.xml' {
    const content: string;
    export default content;
}
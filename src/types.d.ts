interface Episode extends EpisodeUID {
    name: string,
    subtitle: string,
    description: string,
    pubDate: Date,
    duration: Time,
    enclosure: {
        url: Link,
        length: number,
        type: string,
    }
}

interface Person {
    name: string,
    description: string,
    image: string,
    isHost: boolean,
    appearances: Timestamp[],
    characteristics: Characteristic[],
}

interface Drink {
    name: string,
    description: string,
    price: string,
    image?: string,
    appearances: Timestamp[],
}

interface BoestOf extends Timestamp {
    name: string,
    peter: string[],
    ilona: string[],
}

interface Restaurant {
    name: string,
    image: string,
    description: string,
    team: string[],
    appearances: Timestamp[],
}

interface Sponsor {
    name: string,
    image: string,
    appearances: Timestamp[],
}

interface GlossaryEntry extends Timestamp {
    name: string,
    description: string,
}

interface MiscEntry extends Timestamp {
    name: string,
    description: string,
    image?: string,
}

interface CardInfo {
    name: string,
    subtitle?: string,
    image?: string,
    additionalInfo?: AdditionalCardInfo
}

interface AdditionalCardInfo {
    id: string,
    buttonName: string,
    name: string,
    content: string,
}

interface EpisodeUID {
    episodeID: EpisodeID,
    episodeType: EpisodeType
}
interface Time {
    hours: number,
    minutes: number,
    seconds: number
}
interface Timestamp extends EpisodeUID {
    episodeTime: Time
}
interface Characteristic {
    text: string,
    timestamp: Timestamp
}

type EpisodeID = number;
type EpisodeType = "full" | "trailer" | "bonus";
type Link = string;
type EpisodeGetter = (uid: EpisodeUID) => Episode;
type EpisodeFilter = (uid: EpisodeUID, item: { appearances: Timestamp[] }) => boolean;

declare module '*.xml' {
    const content: string;
    export default content;
}


// ---------- CONTENT TYPES ----------
interface Episode extends EpisodeID {
    name: string,
    subtitle: string,
    description: string,
    pubDate: Date,
    duration: Time,
    enclosure: EpisodeEnclosure
}

interface Person {
    name: string,
    image: string,
    description?: string,
    hateQuestion?: TextWithTimestamp,
    isHost?: boolean,
    appearances: Timestamp[],
    characteristics: TextWithTimestamp[],
}

interface Drink {
    name: string,
    image: string,
    description?: string,
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
    description?: string,
    appearances: Timestamp[],
    team?: string[],
    characteristics?: TextWithTimestamp[],
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

// ---------- NESTED TYPES ----------

interface TextWithTimestamp extends Timestamp { 
    description: string 
}

interface Timestamp extends EpisodeID { 
    episodeTime: Time 
}

interface Time { 
    hours: number, 
    minutes: number, 
    seconds: number 
}

interface EpisodeID { 
    episodeType: EpisodeType, 
    episode: number 
}

interface EpisodeEnclosure {
    type: string,
    url: string,
}

type EpisodeType = "full" | "trailer" | "bonus";

// ---------- CARDS ----------
interface CardInfo {
    title?: string,
    image?: string,
    subtitle?: string,
    index?: string,
    additionalInfo?: ModalInfo
}

interface ModalInfo {
    id: string,
    title: string,
    content: {
        [header: string]: string | undefined | string[]
    }
}

// ---------- OTHER ----------

interface AllContent {
    episodes: Episode[],
    people: Person[],
    drinks: Drink[],
    boestOfs: BoestOf[],
    restaurants: Restaurant[],
    glossary: GlossaryEntry[],
    sayings: TextWithTimestamp[],
    misc: MiscEntry[]
}

declare module '*.xml' {
    const content: string;
    export default content;
}
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
    description: string,
    image: string,
    hateQuestion?: HateQuestion,
    isHost?: boolean,
    appearances?: Timestamp[],
    characteristics?: Characteristic[],
}

interface Drink {
    name: string,
    description: string,
    image: string,
    appearances?: Timestamp[],
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
    team?: string[],
    appearances?: Timestamp[],
    characteristics?: Characteristic[],
}

interface GlossaryEntry extends Timestamp {
    name: string,
    description: string,
}

interface Saying extends Timestamp {
    description: string
}

interface MiscEntry extends Timestamp {
    name: string,
    description: string,
    image?: string,
}

// ---------- NESTED TYPES ----------

interface Characteristic extends Timestamp { 
    description: string 
}

interface HateQuestion extends Timestamp {
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
    episodeType?: EpisodeType, 
    episode: number 
}

interface EpisodeEnclosure {
    type: string,
    url: string,
}

type EpisodeType = "full" | "trailer" | "bonus";

// ---------- CARDS ----------
interface CardInfo {
    title: string,
    image?: string,
    subtitle?: string,
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
    sayings: Saying[],
    misc: MiscEntry[]
}

declare module '*.xml' {
    const content: string;
    export default content;
}
// ---------- CONTENT TYPES ----------
interface Episode extends EpisodeID {
    name: string,
    subtitle?: string,
    description?: string,
    pubDate?: Date,
    duration?: Time,
    enclosure?: EpisodeEnclosure
}

interface Person {
    name: string,
    description: string,
    image: string,
    isHost?: boolean,
    appearances?: Timestamp[],
    characteristics?: Characteristic[],
}

interface Drink {
    name: string,
    description: string,
    price: string,
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

interface Sponsor {
    name: string,
    image: string,
    appearances?: Timestamp[],
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

interface Characteristic extends Timestamp { 
    description: string 
}

interface Timestamp extends EpisodeID { 
    episodeTime?: Time 
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

// ---------- OTHER ----------

interface CardInfo {
    title: string,
    image?: string,
    subtitle?: string,
    additionalInfo?: CardAdditionalInfo
}

interface CardAdditionalInfo {
    [header: string]: string | string[]
}

type EpisodeGetter = (uid: EpisodeID) => Episode;
type EpisodeFilter = (uid: EpisodeID, item: { appearances: Timestamp[] }) => boolean;

interface AllContent {
    episodes: Episode[],
    people: Person[],
    drinks: Drink[],
    boestOfs: BoestOf[],
    restaurants: Restaurant[],
    sponsors: Sponsor[],
    glossary: GlossaryEntry[],
    misc: MiscEntry[]
}

declare module '*.xml' {
    const content: string;
    export default content;
}


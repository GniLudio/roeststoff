// ---------- CONTENT TYPES ----------
type Episode = EpisodeID & Readonly<{
    name: string,
    subtitle: string,
    description: string,
    pubDate: Date,
    duration: Time,
    enclosure: EpisodeEnclosure
}>

type Person = Readonly<{
    name: string,
    image: string,
    description?: string,
    hateQuestion?: TextWithTimestamp,
    isHost?: boolean,
    appearances: Timestamp[],
    characteristics?: TextWithTimestamp[],
}>

type Drink = Readonly<{
    name: string,
    image: string,
    description?: string,
    appearances: Timestamp[],
}>

type BoestOf = Timestamp & Readonly<{
    name: string,
    peter: string[],
    ilona: string[],
    max?: string[],
}>

type Restaurant = Readonly<{
    name: string,
    image: string,
    description?: string,
    appearances: Timestamp[],
    team?: string[],
    characteristics?: TextWithTimestamp[],
}>

type GlossaryEntry = Timestamp & Readonly<{
    name: string,
    description: string,
}>

type MiscEntry = Timestamp & Readonly<{
    name: string,
    description: string,
    image?: string,
}>

// ---------- NESTED TYPES ----------

type TextWithTimestamp = Timestamp & Readonly<{
    description: string
}>

type Timestamp = EpisodeID & Readonly<{
    episodeTime: Time
}>

type Time = Readonly<{
    hours: number,
    minutes: number,
    seconds: number
}>

type EpisodeID = Readonly<{
    episodeType: EpisodeType,
    episode: number
}>

type EpisodeEnclosure = Readonly<{
    type: string,
    url: string,
}>

type EpisodeType = "full" | "trailer" | "bonus";

// ---------- CARDS ----------
type CardInfo = Readonly<{
    title?: string,
    image?: string,
    fallbackImage?: string,
    subtitle?: string,
    index?: string,
    additionalInfo?: ModalInfo
}>

type ModalInfo = Readonly<{
    id: string,
    title: string,
    content: Readonly<{
        [header: string]: string | undefined | string[]
    }>
}>

// ---------- OTHER ----------

type AllContent = Readonly<{
    episodes: Episode[],
    people: Person[],
    drinks: Drink[],
    boestOfs: BoestOf[],
    restaurants: Restaurant[],
    glossary: GlossaryEntry[],
    sayings: TextWithTimestamp[],
    misc: MiscEntry[]
}>

type TabHTMLElements = [tabButton: HTMLElement, tabContainer: HTMLElement, cards: HTMLElement[]][]

declare module '*.xml' {
    const content: string;
    export default content;
}

declare module '*.html' {
    const content: string;
    export default content;
}
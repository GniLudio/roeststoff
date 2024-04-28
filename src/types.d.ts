interface Episode {
    id: EpisodeID,
    title: string,
    description: string,
    date: string,
    short_title: string,
    short_subtitle: string,
    imgFormat: ImageFormat,
}

interface Person {
    id: PersonID,
    name: string,
    isHost?: boolean,
    description: string,
    characteristics: [string, Timestamp][],
    imgFormat: ImageFormat,
    timestamps: Timestamp[],
}

interface BoestOf {
    id: BoestOfID,
    title: string,
    description: string,
    timestamp: Timestamp,
    rankings: [peter: string[], ilona: string[]],
}

interface Restaurant {
    id: RestaurantID,
    name: string,
    description: string,
    timestamps: Timestamp[],
    imgFormat: ImageFormat,
}

interface Drink {
    id: DrinkID,
    name: string,
    description: string,
    price: string,
    imgFormat: ImageFormat,
    timestamps: Timestamp[],
}

interface Sponsor {
    id: SponsorID,
    name: string,
    description: string,
    timestamps: Timestamp[],
    imgFormat: ImageFormat,
}

interface GlossaryEntry {
    id: GlossaryEntryID, 
    title: string,
    description: string,
    timestamps: Timestamp[],
}

interface Timestamp {
    episode: EpisodeID,
    time: string,
}

type PersonID = number;
type EpisodeID = number;
type BoestOfID = number;
type RestaurantID = number;
type SponsorID = number;
type DrinkID = number;
type GlossaryEntryID = number;
type ImageFormat = "png" | "jpg" | "svg" | "webp";
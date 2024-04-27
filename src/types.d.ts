interface Episode {
    id: EpisodeID,
    title: string,
    description: string,
    date: string,
    card_title?: string,
    card_subtitle?: string,
    guests?: PersonID[],
}

interface Person {
    id: PersonID,
    name: string,
    description?: string,
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
}

interface Sponsor {
    id: SponsorID,
    name: string,
    timestamps: Timestamp[],
}

interface Timestamp {
    episode: EpisodeID,
    start: number,
    end?: number,
}

type PersonID = number;
type EpisodeID = number;
type BoestOfID = number;
type RestaurantID = number;
type SponsorID = number;
import { compareByTimestamps } from "../utils";

export const restaurants: Restaurant[] = ([
    {
        id: -3,
        name: "Restaurant 3",
        description: "Dies ist ein Test-Restaurant.",
        timestamps: [
            { episode: -1, time: "01:00:00" },
            { episode: -2, time: "02:00:00" },
            { episode: -3, time: "03:00:00" },
        ],
        imgFormat: "webp"
    },
    {
        id: -2,
        name: "Restaurant 2",
        description: "Dies ist ein Test-Restaurant.",
        timestamps: [
            { episode: -1, time: "00:01:00" },
            { episode: -2, time: "00:02:00" },
            { episode: -3, time: "00:03:00" },
        ],
        imgFormat: "webp"
    },
    {
        id: -1,
        name: "Restaurant 1",
        description: "Dies ist ein Test-Restaurant.",
        timestamps: [
            { episode: -1, time: "00:00:01" },
            { episode: -2, time: "00:00:02" },
            { episode: -3, time: "00:00:03" },
        ],
        imgFormat: "jpg"
    },
] satisfies Restaurant[]).sort(compareByTimestamps);
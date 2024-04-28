export const people: Person[] = [
    {
        id: -1,
        name: "Person 1",
        description: "Dies ist eine Test-Person.",
        imgFormat: "jpg",
        characteristics: [
            ["Merkmal 1", {episode: -1, time: "00:00:01"}],
            ["Merkmal 2", {episode: -2, time: "00:00:02"}],
            ["Merkmal 3", {episode: -3, time: "00:00:03"}],
        ],
        timestamps: [
            { episode: -1, time: "00:00:01" },
        ],
    },
    {
        id: -2,
        name: "Person 2",
        description: "Dies ist eine Test-Person.",
        imgFormat: "webp",
        characteristics: [
            ["Merkmal 1", {episode: -1, time: "00:01:00"}],
            ["Merkmal 2", {episode: -2, time: "00:02:00"}],
            ["Merkmal 3", {episode: -3, time: "00:03:00"}],
        ],
        timestamps: [
            { episode: -1, time: "00:01:00" },
            { episode: -2, time: "00:02:00" },
        ],
    },
    {
        id: -3,
        name: "Person 3",
        description: "Dies ist eine Test-Person.",
        imgFormat: "webp",
        characteristics: [
            ["Merkmal 1", {episode: -1, time: "01:00:00"}],
            ["Merkmal 2", {episode: -2, time: "02:00:00"}],
            ["Merkmal 3", {episode: -3, time: "03:00:00"}],
        ],
        timestamps: [
            { episode: -1, time: "01:00:00" },
            { episode: -2, time: "02:00:00" },
            { episode: -3, time: "03:00:00" },
        ],
    },
];
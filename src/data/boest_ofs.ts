import { compareByTimestamp } from "../utils";

export const boest_ofs: BoestOf[] = ([
    {
        id: -1,
        title: "Böst-Of 1",
        description: "Dies ist ein Test Böst-Of.",
        timestamp: {
            episode: -1,
            time: "00:00:01",
        },
        rankings: [
            ["1. Platz (Peter)", "2. Platz (Peter)", "3. Platz (Peter)", "4. Platz (Peter)", "5. Platz (Peter)"],
            ["1. Platz (Ilona)", "2. Platz (Ilona)", "3. Platz (Ilona)", "4. Platz (Ilona)", "5. Platz (Ilona)"],
        ]
    },
    {
        id: -2,
        title: "Böst-Of 2",
        description: "Dies ist ein Test Böst-Of.",
        timestamp: {
            episode: -2,
            time: "00:02:00",
        },
        rankings: [
            ["1. Platz (Peter)", "2. Platz (Peter)", "3. Platz (Peter)", "4. Platz (Peter)", "5. Platz (Peter)"],
            ["1. Platz (Ilona)", "2. Platz (Ilona)", "3. Platz (Ilona)", "4. Platz (Ilona)", "5. Platz (Ilona)"],
        ]
    },
    {
        id: -3,
        title: "Böst-Of 3",
        description: "Dies ist ein Test Böst-Of.",
        timestamp: {
            episode: -3,
            time: "03:00:00",
        },
        rankings: [
            ["1. Platz (Peter)", "2. Platz (Peter)", "3. Platz (Peter)", "4. Platz (Peter)", "5. Platz (Peter)"],
            ["1. Platz (Ilona)", "2. Platz (Ilona)", "3. Platz (Ilona)", "4. Platz (Ilona)", "5. Platz (Ilona)"],
        ]
    },
] satisfies BoestOf[]).sort(compareByTimestamp);
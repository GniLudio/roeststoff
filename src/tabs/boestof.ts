import { createAdditionalInfoBlock, createCard } from "../cardUtils";
import { appendTime, parseTimestamp } from "../utils";

export function createBoestOfCard(boestOf: BoestOf, getEpisode: EpisodeGetter): HTMLElement {
    return createCard({
        name: boestOf.name,
        subtitle: "",
        additionalInfo: {
            id: `boestof_${boestOf.name.replace(/\W/g, '_')}`,
            buttonName: "Info",
            name: boestOf.name,
            content: ''
                + createAdditionalInfoBlock('Folge', getEpisode(boestOf).name + appendTime(boestOf.episodeTime))
                + createAdditionalInfoBlock('Rangliste', createRankingTable(boestOf))
        }
    });
}

export function parseBoestOf(element: Element): BoestOf {
    const timestamp = parseTimestamp(element);
    return {
        name: element.querySelector('name')!.textContent!,
        episodeID: timestamp.episodeID,
        episodeType: timestamp.episodeType,
        episodeTime: timestamp.episodeTime,
        peter: parseRanking(element.querySelector('peter')!),
        ilona: parseRanking(element.querySelector('ilona')!),
    };
}

function parseRanking(element: Element): string[] {
    return Array.from(element.querySelectorAll('rank')).map(item => item.textContent!);
}

function createRankingTable(boestOf: BoestOf): string {
    let ranking: [ilona: string | undefined, peter: string | undefined][] = new Array(Math.max(boestOf.ilona.length, boestOf.peter.length));
    ranking = ranking.fill(undefined!).map((_, i) => [boestOf.ilona[i], boestOf.peter[i]]);
    return `
    <table class="table table-striped table-hover w-auto m-auto">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Ilona</th>
                <th scope="col">Peter</th>
            </tr>
        </thead>
        <tbody>
            ${ranking.map(([ilona, peter], i) => `<tr>
                <td>${i + 1}</td>
                <td>${ilona ?? "-"}</td>
                <td>${peter ?? "-"}</td>
            </tr>`).join("")}
        </tbod>
    </table>`
}
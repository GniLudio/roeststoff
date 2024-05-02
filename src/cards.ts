import { assert } from "./utils";

export function createCards<T>(containerID: string, items: T[], getCardInfo: (e: T, allContent: AllContent) => CardInfo, allContent: AllContent): void {
    const container = assert(document.getElementById(containerID));
    const cardInfos = items.map(item => getCardInfo(item, allContent));
    const cards = cardInfos.map(createCard);
    container.replaceChildren(...cards);
}

export function getEpisodeCardInfo(episode: Episode): CardInfo {
    return {
        title: episode.name,
        subtitle: episode.subtitle,
    }
}

function createCard(info: CardInfo): HTMLElement {
    const card = document.createElement('div');
    card.classList.add('col');

    const cardImage = info.image ? `<img src="${info.image}" class="card-img-top p-1 rounded-3" alt="Foto ${info.title}">` : '';
    const cardSubtitle = info.subtitle ? `<h6 class="card-subtitle m-auto">${info.title}</h5>` : '';
    const additionalInfo = createCardAdditionalInfo(info);

    card.innerHTML = `
        <div class="card bg-light border-warning border-3 h-100 overflow-auto">
            ${cardImage}
            <div class="card-body d-flex flex-column">
                <h5 class="card-title m-auto">${info.title}</h5>
                ${cardSubtitle}
            </div>
        </div>
    `

    return card;
}

function createCardAdditionalInfo(info: CardInfo): [button: string, modal: string] {
    return ["", ""];
}
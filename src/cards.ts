import { mapToEpisodeNames, toHTMLID } from "./utils";
import { timeToString } from "./utils";
import { dateToString } from "./utils";
import { isEpisodeEqual } from "./utils";
import { mapToFilteredNames } from "./utils";
import { assert } from "./utils";

export function createCards<T>(containerID: string, items: T[], getCardInfo: (e: T, allContent: AllContent) => CardInfo, allContent: AllContent): void {
    console.log("Create Cards", containerID);
    const container = assert(document.getElementById(containerID), `Couldn't find container: ${containerID}`);
    const cardInfos = items.map(item => getCardInfo(item, allContent));
    const cards = cardInfos.map(createCard);
    container.replaceChildren(...cards);
}

// ---------- CARD INFO ----------

export function getEpisodeCardInfo(episode: Episode, allContent: AllContent): CardInfo {
    const boestOf = allContent.boestOfs.find(boestOf => isEpisodeEqual(boestOf, episode));
    return {
        title: episode.name,
        subtitle: episode.subtitle,
        additionalInfo: {
            id: `episode_${episode.name}`,
            title: episode.name + " (" + episode.episode + ")",
            content: {
                "Episode": episode.episode.toFixed(),
                'Veröffentlichung': episode.pubDate ? dateToString(episode.pubDate, true) : '-',
                "Böst-Of": boestOf ? boestOf.name + (boestOf.episodeTime ? ' - ' + timeToString(boestOf.episodeTime) : '') : '-',
                "Gäste": mapToFilteredNames(allContent.people.filter(person => !person.isHost), episode, true),
                "Trinkstoff": mapToFilteredNames(allContent.drinks, episode, true),
                "Restaurants": mapToFilteredNames(allContent.restaurants, episode, true),
                "Sponsoren": mapToFilteredNames(allContent.sponsors, episode, true),
                'Dauer': episode.duration ? '~' + timeToString(episode.duration) : '-',
                'Audio': episode.enclosure ? `<audio controls preload="none" class="w-75 rounded-3" src="${episode.enclosure.url}"></audio>` : '',
                'Beschreibung': episode.description
            }
        }
    }
}

export function getPersonCardInfo(person: Person, allContent: AllContent): CardInfo {
    return {
        image: person.image,
        title: person.name,
        subtitle: person.description,
        additionalInfo: {
            id: `person_${person.name}`,
            title: person.name,
            content: {
                "Folgen": person.appearances ? mapToEpisodeNames(person.appearances, allContent.episodes, true) : undefined,
                "Merkmale": person.characteristics?.map(c => c.description)
            }
        }
    }
}

export function getDrinkCardInfo(drink: Drink, allContent: AllContent): CardInfo {
    return {
        image: drink.image,
        title: drink.name,
        subtitle: drink.description,
        additionalInfo: {
            id: `drink_${drink.name}`,
            title: drink.name,
            content: {
                "Preis": drink.price,
                "Folgen": drink.appearances ? mapToEpisodeNames(drink.appearances, allContent.episodes, true): undefined,
            }
        }
    }
}

export function getBoestOfCardInfo(boestOf: BoestOf, allContent: AllContent): CardInfo {
    return {
        title: boestOf.name,
        subtitle: "TODO",
    }
}

export function getRestaurantCardInfo(restaurant: Restaurant, allContent: AllContent): CardInfo {
    return {
        image: restaurant.image,
        title: restaurant.name,
        subtitle: restaurant.description,
        additionalInfo: {
            id: `restaurant_${restaurant.name}`,
            title: restaurant.name,
            content: {
                "Team": restaurant.team,
                "Folgen": restaurant.appearances ? mapToEpisodeNames(restaurant.appearances, allContent.episodes, true) : undefined,
                "Merkmale": restaurant.characteristics?.map(c => c.description)
            }
        }
    }
}

export function getSponsorCardInfo(sponsor: Sponsor, allContent: AllContent): CardInfo {
    return {
        image: sponsor.image,
        title: sponsor.name,
        additionalInfo: {
            id: `sponsor_${sponsor.name}`,
            title: sponsor.name,
            content: {
                "Folgen": sponsor.appearances ? mapToEpisodeNames(sponsor.appearances, allContent.episodes, true) : undefined,
            }
        }
    }
}

export function getGlossaryEntryCardInfo(entry: GlossaryEntry, allContent: AllContent): CardInfo {
    return {
        title: entry.name,
        subtitle: entry.description
    }
}

export function getMiscEntryCardInfo(entry: MiscEntry, allContent: AllContent): CardInfo {
    return {
        image: entry.image,
        title: entry.name,
        subtitle: entry.description
    }
}

// ---------- UTILITIES ----------

function createCard(info: CardInfo): HTMLElement {
    const card = document.createElement('div');
    card.classList.add('col');

    const cardImage = info.image ? `<img src="${info.image}" class="card-img-top p-1 rounded-3" alt="Foto ${info.title}">` : '';
    const additionalInfo = createAdditionalInfo(info);

    card.innerHTML = `
        <div class="card bg-light border-warning border-3 h-100 overflow-auto">
            ${cardImage}
            <div class="card-body d-flex flex-column h-100">
                <h5 class="card-title m-auto pb-2">${info.title}</h5>
                <h6 class="card-subtitle m-auto py-2">${info.subtitle}</h5>
                ${additionalInfo[0]}
            </div>
        </div>
        ${additionalInfo[1]}
    `
    return card;
}

function createAdditionalInfo(info: CardInfo): [button: string, modal: string] {
    if (!info.additionalInfo) return ["", ""];
    const id = toHTMLID('modal_' + info.additionalInfo.id);

    const button = `<button class="btn btn-outline-warning bg-secondary text-white mx-auto" data-bs-toggle="modal" data-bs-target="#${id}">Info</button>`;
    const content = Object.entries(info.additionalInfo.content).map(([header, item]) => {
        if (item == undefined) return createAdditionalInfoBlock(header, '-');
        else if (typeof(item) == 'object') return createAdditionalInfoListBlock(header, item);
        else return createAdditionalInfoBlock(header, item);
    }).join("");
    
    const modal = `<div class="modal fade" id="${id}" tabindex="-1" aria-labelledby="${id}" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h3 class="modal-title w-100" id="${id}">${info.title}</h3>
                    <button type="button" class="btn-close mx-1" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        </div>
    </div>`;
    return [button, modal];
}

function createAdditionalInfoBlock(header: string, content: string): string {
    return `
        <div class='rounded-5 m-3 p-2 border border-2 border-warning-subtle bg-light'>
            <h5>${header}</h5>
            ${content}
        </div>`
}

function createAdditionalInfoListBlock(header: string, content: string[]): string {
    if (content.length == 0) content = ['-'];
    content = content.map(item => `<li class="list-group-item bg-transparent">${item}</li>`);
    return createAdditionalInfoBlock(
        header, 
        `<ul class="list-group list-group-flush" style='display:inline-block'>${content.join("")}</ul>`
    );
}
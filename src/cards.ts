import { episodeIDToShortString, episodeIDToString, mapToEpisodeNames, toHTMLID } from "./utils";
import { dateToString } from "./utils";
import { isEpisodeEqual } from "./utils";
import { mapToFilteredNames } from "./utils";

import tabButtonTemplate from "../templates/tab_button.html";
import tabContainerTemplate from "../templates/tab_container.html";
import cardAudioTemplate from "../templates/card_audio.html";
import cardImageTemplate from "../templates/card_image.html";
import cardTitleTemplate from "../templates/card_title.html";
import cardSubtitleTemplate from "../templates/card_subtitle.html";
import cardIndexTemplate from "../templates/card_index.html";
import cardTemplate from "../templates/card.html";
import cardInfoButtonTemplate from "../templates/card_info_button.html";
import cardInfoModalTemplate from "../templates/card_info_modal.html";
import cardInfoBlockTemplate from "../templates/card_info_block.html";
import cardInfoListTemplate from "../templates/card_info_list.html";
import cardInfoListItemTemplate from "../templates/card_info_list_item.html";
import cardTableTemplate from "../templates/card_table.html";
import cardTableHeaderTemplate from "../templates/card_table_header.html";
import cardTableRowTemplate from "../templates/card_table_row.html";
import cardTableCellTemplate from "../templates/card_table_cell.html";

console.log('card.ts loaded');
const parser = new DOMParser();

export function createCards<T>(id: string, title: string, items: T[], getCardInfo: (e: T, allContent: AllContent) => CardInfo, allContent: AllContent): [HTMLElement, HTMLElement, HTMLElement[]] {
    console.log(`Create ${title}`);

    const tabButton = createTabButton(id, title);
    const tabContainer = createTabContainer(id);

    const cardInfos = items.map(item => getCardInfo(item, allContent));
    const cards = cardInfos.map(createCard);
    tabContainer.querySelector(`#${id}_content`)!.replaceChildren(...cards);

    return [tabButton, tabContainer, cards];
}

// ---------- CARD INFO ----------

export function getEpisodeCardInfo(episode: Episode, allContent: AllContent): CardInfo {
    const boestOf = allContent.boestOfs.find(boestOf => isEpisodeEqual(boestOf, episode));
    return {
        image: `images/episodes/${episodeIDToString(episode)}.jpeg`,
        fallbackImage: 'images/episodes/fallback.jpg',
        title: episode.name,
        subtitle: episode.subtitle,
        index: episodeIDToShortString(episode),
        additionalInfo: {
            id: `episode_${episode.name}`,
            title: episode.name,
            content: {
                "Böst of Röststoff": boestOf?.name,
                "Gäste": mapToFilteredNames(allContent.people.filter(person => !person.isHost), episode, false),
                "Trinkstoff": mapToFilteredNames(allContent.drinks, episode, false),
                "Restaurants": mapToFilteredNames(allContent.restaurants, episode, false),
                'Veröffentlichung': dateToString(episode.pubDate, true),
                'Beschreibung': episode.description,
                'Audio': cardAudioTemplate.replaceAll('{AUDIO}', episode.enclosure.url),
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
                "Folgen": mapToEpisodeNames(person.appearances, allContent.episodes, false),
                "Hass-Frage": person.hateQuestion?.description,
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
        index: episodeIDToShortString(drink.appearances[0]),
        additionalInfo: {
            id: `drink_${drink.name}`,
            title: drink.name,
            content: {
                "Folgen": mapToEpisodeNames(drink.appearances, allContent.episodes, false),
            }
        }
    }
}

export function getBoestOfCardInfo(boestOf: BoestOf, allContent: AllContent): CardInfo {
    return {
        title: boestOf.name,
        index: episodeIDToShortString(boestOf),
        additionalInfo: {
            id: boestOf.name,
            title: boestOf.name,
            content: {
                "Folge": mapToEpisodeNames([boestOf], allContent.episodes, false),
                "Böst of Röststoff": createBoestOfTable(boestOf)
            }
        }
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
                "Folgen": mapToEpisodeNames(restaurant.appearances, allContent.episodes, false),
                "Merkmale": restaurant.characteristics?.map(c => c.description)
            }
        }
    }
}

export function getSayingCardInfo(saying: TextWithTimestamp, allContent: AllContent): CardInfo {
    return {
        subtitle: saying.description
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

function createTabButton(id: string, title: string): HTMLElement {
    const tabButtons = document.getElementById('navTabs')!;
    const tabButtonRaw = tabButtonTemplate.replaceAll('{ID}', id).replaceAll('{TITLE}', title);
    const tabButton = parser.parseFromString(tabButtonRaw, 'text/html').body.firstElementChild as HTMLElement;
    tabButtons.appendChild(tabButton);

    return tabButton;
}

function createTabContainer(id: string): HTMLElement {
    const tabContainers = document.getElementById('tabs')!;
    const tabContainerRaw = tabContainerTemplate.replaceAll('{ID}', id);
    const tabContainer = parser.parseFromString(tabContainerRaw, 'text/html').body.firstChild as HTMLElement;
    tabContainers.appendChild(tabContainer);

    return tabContainer;
}

function createCard(info: CardInfo): HTMLElement {
    const card = document.createElement('div');
    card.classList.add('col');

    const image = info.image && info.image != "" ? cardImageTemplate.replaceAll('{IMAGE}', info.image).replaceAll('{FALLBACK_IMAGE}', info.fallbackImage ?? info.image) : '<!-- No Image -->';
    const title = info.title && info.title != "" ? cardTitleTemplate.replaceAll('{TITLE}', info.title) : '<!-- No Title -->';
    const subtitle = info.subtitle && info.subtitle != "" ? cardSubtitleTemplate.replaceAll('{SUBTITLE}', info.subtitle) : '<!-- No Subtitle -->';
    const index = info.index && info.index != '' ? cardIndexTemplate.replaceAll('{INDEX}', info.index) : '<!-- No Index -->';
    const [info_button, info_modal] = createInfoModal(info);

    card.innerHTML = cardTemplate
        .replace('{IMAGE}', image)
        .replace('{TITLE}', title)
        .replace('{SUBTITLE}', subtitle)
        .replace('{INDEX}', index)
        .replace('{INFO_BUTTON}', info_button)
        .replace('{INFO_MODAL}', info_modal);
    return card;
}

function createInfoModal(info: CardInfo): [button: string, modal: string] {
    if (!info.additionalInfo) return ["", ""];
    const id = toHTMLID(info.additionalInfo.id) + '_info';

    const button = cardInfoButtonTemplate.replaceAll('{ID}', id);
    const content = Object.entries(info.additionalInfo.content).map(([header, item]) => {
        if (typeof (item) == 'string' && item != '') return cardInfoBlockTemplate.replaceAll('{HEADER}', header).replaceAll('{CONTENT}', item);
        else if (typeof (item) == 'object') {
            const list: string[] = item;
            if (list.length == 0) return `<!-- Empty List: ${header} -->`;
            return cardInfoBlockTemplate
                .replaceAll('{HEADER}', header)
                .replaceAll('{CONTENT}',
                    cardInfoListTemplate.replaceAll('{CONTENT}', list.map(item => cardInfoListItemTemplate.replaceAll('{CONTENT}', item)).join("")));
        };
        return "";
    }).join("");

    const modal = cardInfoModalTemplate.replaceAll('{ID}', id).replaceAll('{TITLE}', info.additionalInfo.title).replaceAll('{CONTENT}', content);
    return [button, modal];
}

function createBoestOfTable(boestOf: BoestOf): string {
    const headers: string[] = ['Ilona', 'Peter'].concat(boestOf.max ? ['Max'] : []).map(header => cardTableHeaderTemplate.replaceAll('{HEADER}', header));
    const rankings: string[][] = [boestOf.ilona, boestOf.peter].concat(boestOf.max ? [boestOf.max] : []);
    const rows: string[] = [];
    for (let i = 0; i < Math.max(...rankings.map(ranking => ranking.length)); i++) {
        const cells = rankings.map(ranking => cardTableCellTemplate.replaceAll('{CONTENT}', ranking.length > i ? ranking[i] : '-'));
        rows.push(cardTableRowTemplate.replaceAll('{CONTENT}', cells.join('')))
    }
    return cardTableTemplate.replaceAll('{HEADERS}', headers.join("")).replaceAll('{CONTENT}', rows.join(''));
}
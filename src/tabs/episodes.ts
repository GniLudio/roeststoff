import { createAdditionalInfoBlock, createAdditionalInfoListBlock, createCard } from "../cardUtils";
import { appendTime, dateToString, findAppearance, isEpisodeEqual, parseTime, timeToString } from "../utils";

export function createEpisodeCard(episode: Episode, people: Person[], drinks: Drink[], restaurants: Restaurant[], boestOfs: BoestOf[], filterByEpisode: EpisodeFilter): HTMLElement {
    people = people.filter(person => !person.isHost).filter(guest => filterByEpisode(episode, guest));
    drinks = drinks.filter(drink => filterByEpisode(episode, drink));
    restaurants = restaurants.filter(restaurant => filterByEpisode(episode, restaurant));
    boestOfs = boestOfs.filter(boestOf => isEpisodeEqual(episode, boestOf));
    return createCard({
        name: episode.name,
        subtitle: episode.subtitle,
        additionalInfo: {
            id: `episode_${episode.episodeID}_${episode.episodeType}`,
            buttonName: "Info",
            name: episode.name,
            content: ''
                + createAdditionalInfoBlock('Episode', episode.episodeID.toFixed() + (episode.episodeType != "full" ? ` (<span style='text-transform:capitalize'>${episode.episodeType}</span>)` : ""))
                + createAdditionalInfoBlock('Veröffentlichung', dateToString(episode.pubDate, true))
                + createAdditionalInfoBlock('Dauer', "~" + timeToString(episode.duration))
                + createAdditionalInfoListBlock('Böst-Of Röststoff', boestOfs.map(boestOf => boestOf.name + appendTime(findAppearance([boestOf], episode).episodeTime)))
                + createAdditionalInfoListBlock('Gäste', people.map(guest => guest.name + appendTime(findAppearance(guest.appearances, episode).episodeTime)))
                + createAdditionalInfoListBlock('Trinkstoff', drinks.map(drink => drink.name + appendTime(findAppearance(drink.appearances, episode).episodeTime)))
                + createAdditionalInfoListBlock('Restaurants', restaurants.map(restaurant => restaurant.name + appendTime(findAppearance(restaurant.appearances, episode).episodeTime)))
                + createAdditionalInfoBlock('Audio', `<audio controls preload="none" class="w-75 rounded-3" src="${episode.enclosure.url}">Link</audio>`)
                + createAdditionalInfoBlock('Beschreibung', episode.description)
        }
    });
}

export function parseEpisode(element: Element): Episode {
    return {
        episodeID: parseInt(element.querySelector('episode')!.textContent!),
        episodeType: element.querySelector('episodeType')!.textContent as EpisodeType,
        name: element.querySelector('title')!.textContent!,
        subtitle: element.querySelector('subtitle')!.textContent!,
        description: element.querySelector('encoded')!.textContent!,
        pubDate: new Date(Date.parse(element.querySelector('pubDate')!.textContent!)),
        duration: parseTime(parseInt(element.querySelector('duration')!.textContent!)),
        enclosure: {
            url: element.querySelector('enclosure')!.getAttribute('url')!,
            length: parseInt(element.querySelector('enclosure')!.getAttribute('length')!),
            type: element.querySelector('enclosure')!.getAttribute('type')!,
        }
    };
}


import { createAdditionalInfoBlock, createAdditionalInfoListBlock, createCard } from "../cardUtils";
import { getEpisodeNameWithTime, parseApperances, timeToString } from "../utils";

export function createRestaurantCard(restaurant: Restaurant, getEpisode: EpisodeGetter): HTMLElement {
    return createCard({
        name: restaurant.name,
        image: restaurant.image,
        subtitle: '',
        additionalInfo: {
            id: `restaurant_${restaurant.name}`,
            buttonName: "Info",
            name: restaurant.name,
            content: ''
                + createAdditionalInfoListBlock('Team', restaurant.team)
                + createAdditionalInfoListBlock('Folgen', getEpisodeNameWithTime(restaurant, getEpisode))
                + createAdditionalInfoBlock('Beschreibung', restaurant.description)
        }
    });
}

export function parseRestaurant(element: Element): Restaurant {
    return {
        name: element.querySelector('name')!.textContent!,
        image: element.querySelector('image')!.textContent!,
        description: element.querySelector('description')!.textContent!,
        team: Array.from(element.querySelector('team')!.querySelectorAll('member')).map(member => member.textContent!),
        appearances: parseApperances(element)
    };
}

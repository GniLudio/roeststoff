import { createCard } from "../cardUtils";
import { parseApperances } from "../utils";

export function createDrinkCard(drink: Drink, getEpisode: EpisodeGetter): HTMLElement {
    return createCard({
        name: drink.name,
        subtitle: drink.price,
        image: drink.image,
    });
}

export function parseDrink(element: Element): Drink {
    return {
        name: element.querySelector('name')!.textContent!,
        price: element.querySelector('price')?.textContent ?? "-",
        description: element.querySelector('description')?.textContent ?? "-",
        image: element.querySelector('image')?.textContent ?? undefined,
        appearances: parseApperances(element)
    };
}
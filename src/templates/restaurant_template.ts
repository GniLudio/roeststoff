import { episodes } from "../data/episodes";
import { getEpisodes } from "../utils";
import { createCard } from "./card_template";

export function convertRestaurantToHTML(restaurant: Restaurant): HTMLElement {
    return createCard({
        content_type: "restaurant",
        img_folder: "restaurants",
        img_alt: "Restaurant",
        id: restaurant.id,
        card_title: restaurant.name,
        card_subtitle: restaurant.description,
        title: restaurant.name,
        img_format: restaurant.imgFormat,
        additional_info: {
            "Beschreibung": restaurant.description,
            "Folgen": getEpisodes(restaurant)
        }
    });
}


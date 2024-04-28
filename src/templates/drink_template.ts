import { getEpisodes } from "../utils";
import { createCard } from "./card_template";

export function convertDrinkToHTML(drink: Drink): Node {
    return createCard({
        content_type: "drink",
        img_folder: "drinks",
        img_alt: "Trinkstoff",
        id: drink.id,
        card_title: drink.name,
        card_subtitle: drink.description,
        title: drink.name,
        img_format: drink.imgFormat,
        additional_info: {
            "Beschreibung": drink.description,
            "Preis": drink.price,
            "Folgen": getEpisodes(drink)
        }
    });
}


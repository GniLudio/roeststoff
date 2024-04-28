import { episodes } from "../data/episodes";
import { getEpisodes } from "../utils";
import { createCard } from "./card_template";

export function convertPersonToHTML(person: Person): HTMLElement {
    return createCard({
        content_type: "person",
        img_folder: "people",
        img_alt: "Person",
        id: person.id,
        card_title: person.name,
        card_subtitle: person.description,
        title: person.name,
        img_format: person.imgFormat,
        additional_info: {
            "Beschreibung": person.description,
            "Episoden": getEpisodes(person),
            "Merkmale": person.characteristics.map(([characteristic, _]) => characteristic)
        }
    });
}


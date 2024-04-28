import { boest_ofs } from "../data/boest_ofs";
import { drinks } from "../data/drinks";
import { people } from "../data/people";
import { sponsors } from "../data/sponsors";
import { createCard } from "./card_template";

export function convertEpisodeToHTML(episode: Episode): HTMLElement {
    const boest_of = boest_ofs.find(boest_of => boest_of.timestamp.episode == episode.id);
    return createCard({
        content_type: "episode",
        img_folder: "episodes",
        img_alt: "Folge",
        id: episode.id,
        card_title: episode.short_title,
        card_subtitle: episode.short_subtitle,
        title: episode.title,
        img_format: episode.imgFormat,
        additional_info: {
            "Gäste": getElementsOfEpisode(people.filter(person => !person.isHost)).map( guest => guest.name),
            "Trinkstoff": getElementsOfEpisode(drinks).map(drink => drink.name),
            "Sponsoren": getElementsOfEpisode(sponsors).map(sponsor => sponsor.name),
            "Beschreibung": episode.description,
        }
    });

    function getElementsOfEpisode<T extends { timestamps: Timestamp[]; }>(elements: T[]): T[] {
        const filtered: T[] = [];
        for (const element of elements) {
            for (const timestamp of element.timestamps) {
                if (timestamp.episode == episode.id) {
                    if (!filtered.includes(element)) {
                        filtered.push(element);
                    }
                }
            }
        }
        return filtered;
    }
}


import { getEpisodes } from "../utils";
import { createCard } from "./card_template";

export function convertSponsorToHTML(sponsor: Sponsor): Node {
    return createCard({
        content_type: "sponsor",
        img_folder: "sponsors",
        img_alt: "Sponsor",
        id: sponsor.id,
        card_title: sponsor.name,
        card_subtitle: sponsor.description,
        title: sponsor.name,
        img_format: sponsor.imgFormat,
        additional_info: {
            "Beschreibung": sponsor.description,
            "Folgen": getEpisodes(sponsor)
        }
    });
}
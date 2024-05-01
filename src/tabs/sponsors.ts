import { createAdditionalInfoListBlock, createCard } from "../cardUtils";
import { getEpisodeNameWithTime, isEpisodeEqual, parseApperances } from "../utils";

export function parseSponsor(element: Element): Sponsor {
    return {
        name: element.querySelector('name')!.textContent!,
        image: element.querySelector('image')!.textContent!,
        appearances: parseApperances(element)
    };
}

export function createSponsorCard(sponsor: Sponsor, getEpisode: EpisodeGetter): HTMLElement {
    return createCard({
        name: sponsor.name,
        subtitle: "",
        image: sponsor.image,
        additionalInfo: {
            id: `sponsor_${sponsor.name}`,
            buttonName: "Info",
            name: sponsor.name,
            content: ''
                + createAdditionalInfoListBlock('Folgen', getEpisodeNameWithTime(sponsor, getEpisode))
        }
    });
}
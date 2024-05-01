import { createAdditionalInfoListBlock, createCard } from "../cardUtils";
import { compareByLastAppearance, getEpisodeNameWithTime, parseApperances, parseTimestamp } from "../utils";

export function createPersonCard(person: Person, getEpisode: EpisodeGetter): HTMLElement {
    return createCard({
        name: person.name,
        subtitle: person.description,
        image: person.image,
        additionalInfo: {
            id: `person_${person.name}`,
            buttonName: 'Info',
            name: person.name,
            content: ''
                + createAdditionalInfoListBlock('Folgen', getEpisodeNameWithTime(person, getEpisode))
                + createAdditionalInfoListBlock('Merkmale', person.characteristics.map(c => c.text))
        }
    });
}

export function parsePerson(element: Element): Person {
    const characteristics = element.querySelector('characteristics')?.querySelectorAll("characteristic");
    return {
        name: element.querySelector('name')!.textContent!,
        description: element.querySelector('description')!.textContent!,
        image: element.querySelector('image')?.textContent!,
        isHost: element.querySelector('isHost')?.textContent == "true",
        appearances: parseApperances(element),
        characteristics: characteristics ? Array.from(characteristics).map(parseCharacteristic) : []
    };
}

export function comparePerson(a: Person, b: Person): number {
    if (a.isHost && b.isHost) return 0;
    else if (a.isHost) return -1;
    else if (b.isHost) return 1;
    else return compareByLastAppearance(a, b);
}

function parseCharacteristic(element: Element): Characteristic {
    return { text: element.querySelector('text')!.textContent!, timestamp: parseTimestamp(element) };
}
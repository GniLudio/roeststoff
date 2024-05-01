import { createCard } from "../cardUtils";

export function createPersonCard(person: Person): HTMLElement {
    return createCard({
        title: person.name,
        subtitle: person.description,
        image: person.image,
        additionalInfo: {
            id: `additional_info_person_${person.name.replace(/\W/g,'_')}`,
            buttonName: 'Info',
            title: person.name,
            content: "TODO"
        }
    });
}

export function comparePerson(a: Person, b: Person): number {
    if (a.isHost && b.isHost) return 0;
    else if (a.isHost) return -1;
    else if (b.isHost) return 1;
    else return b.name.localeCompare(a.name);
}

export function parsePerson(episode: Element): Person {
    return {
        name: episode.querySelector('name')?.textContent ?? "-",
        description: episode.querySelector('description')?.textContent ?? "-",
        image: episode.querySelector('image')?.textContent,
        isHost: episode.querySelector('isHost')?.textContent == "true",
        appearances: []
    };
}
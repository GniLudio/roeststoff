import { episode_template } from "./templates";
import { people } from "./data/people";
import { boest_ofs } from "./data/boest_ofs";
import { sponsors } from "./data/sponsors";

export function convertEpisodeToHTML(episode: Episode) {
    let html_text = episode_template;
    html_text = html_text.replace(new RegExp('{id}', 'g'), episode.id.toFixed());
    html_text = html_text.replace(new RegExp('{title}'), episode.title);
    html_text = html_text.replace(new RegExp('{description}'), episode.description);
    html_text = html_text.replace(new RegExp('{date}'), episode.date);
    html_text = html_text.replace(new RegExp('{card_title}'), episode.card_title ?? episode.title);
    html_text = html_text.replace(new RegExp('{card_subtitle}'), episode.card_subtitle ?? "");
    if (episode.guests != undefined && episode.guests.length > 0) {
        const guests: Person[] = episode.guests.map((guestID) => people.find(person => person.id == guestID));
        const names = guests.filter(guest => guest).map(guest => guest.name);
        html_text = html_text.replace(new RegExp('{guests}'), names.join(", "));
    } else {
        html_text = html_text.replace(new RegExp('{guests}'), "-");
    }
    const boest_of_text = boest_ofs.find(boest_of => boest_of.timestamp.episode == episode.id)?.title ?? "-";
    html_text = html_text.replace(new RegExp('{boest_of}'), boest_of_text);
    const filtered_sponsors: Sponsor[] = sponsors.filter(sponsor => sponsor.timestamps.find(timestamp => timestamp.episode == episode.id));
    const sponsors_text = filtered_sponsors.map(sponsor => sponsor.name).join(", ");
    html_text = html_text.replace(new RegExp('{sponsors}'), sponsors_text != "" ? sponsors_text : "-");

    return new DOMParser().parseFromString(html_text, "text/html").body;
}

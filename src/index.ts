import 'bootstrap';

import * as parser from './parser';
import * as cards from './cards';
import { compareEpisodeID, compareEpisode, compareEpisodeIDs, compareIsHost } from './utils';
import { setupUrlManager } from './url_manager';
import { applyFixes as applyFixes } from './fixes';

console.debug("index.ts loaded");

(async () => {
    console.debug("Fetch data");
    const base_url = window.location.href.split("/").slice(0, -1).join("/")
    const data = await Promise.all([
        "https://feeds.megaphone.fm/TWG3193347111",
        `${base_url}/data/people.xml`,
        `${base_url}/data/drinks.xml`,
        `${base_url}/data/boestofs.xml`,
        `${base_url}/data/restaurants.xml`,
        `${base_url}/data/glossary.xml`,
        `${base_url}/data/misc.xml`,
        `${base_url}/data/sayings.xml`,
    ].map(async url => await (await fetch(url)).text()));
    const [episodesRSS, peopleXML, drinksXML, boestofsXML, restaurantsXML, glossaryXML, miscXML, sayingsXML] = data;

    // PARSING
    console.debug("Parse data")
    const episodes: Episode[] = parser.parseXML(episodesRSS, ['rss', 'channel'], 'item', parser.parseEpisode);
    const people: Person[] = parser.parseXML(peopleXML, ['root'], 'person', parser.parsePerson);
    const drinks: Drink[] = parser.parseXML(drinksXML, ['root'], 'drink', parser.parseDrink);
    const boestOfs: BoestOf[] = parser.parseXML(boestofsXML, ['root'], 'boestof', parser.parseBoestOf);
    const restaurants: Restaurant[] = parser.parseXML(restaurantsXML, ['root'], 'restaurant', parser.parseRestaurant);
    const glossary: GlossaryEntry[] = parser.parseXML(glossaryXML, ['root'], 'entry', parser.parseGlossaryEntry);
    const misc: MiscEntry[] = parser.parseXML(miscXML, ['root'], 'entry', parser.parseMiscEntry);
    const sayings: TextWithTimestamp[] = parser.parseXML(sayingsXML, ['root'], 'saying', parser.parseTextWithTimestamp);
    const allContent: AllContent = { episodes, people, drinks, boestOfs, restaurants, glossary, sayings, misc };

    // FIXES
    console.debug("Apply fixes to data");
    applyFixes(allContent);

    // SORTING
    console.debug("Sort data");
    episodes.sort(compareEpisode).reverse();
    people.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes)).sort((a, b) => -compareIsHost(a, b));
    drinks.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes));
    boestOfs.sort((a, b) => -compareEpisodeID(a, b, allContent.episodes));
    restaurants.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes));
    glossary.sort((a, b) => a.name.localeCompare(b.name));
    sayings.sort((a, b) => -compareEpisodeID(a, b, episodes));
    misc.sort((a, b) => -compareEpisodeID(a, b, allContent.episodes));

    // CREATE AND INSERT HTML ELEMENTS
    console.debug("Create content");
    const elements: TabHTMLElements = [
        cards.createCards('folgen', 'Folgen', episodes, cards.getEpisodeCardInfo, allContent),
        cards.createCards('personen', 'Stoffies', people, cards.getPersonCardInfo, allContent),
        cards.createCards('trinkstoff', 'Trinkstoff', drinks, cards.getDrinkCardInfo, allContent),
        cards.createCards('boestofs', 'Böst Ofs', boestOfs, cards.getBoestOfCardInfo, allContent),
        cards.createCards('roestaurants', 'Röstaurants', restaurants, cards.getRestaurantCardInfo, allContent),
        cards.createCards('lehrstoff', 'Lehrstoff', glossary, cards.getGlossaryEntryCardInfo, allContent),
        cards.createCards('sprueche', 'Sprüche', sayings, cards.getSayingCardInfo, allContent),
        cards.createCards('sidedishes', 'Side Dishes', misc, cards.getMiscEntryCardInfo, allContent),
    ];

    // CHECK FOR DUPLICATE IDS
    console.debug("Check for duplicate ids");
    const ids = new Set<string>();
    for (const node of document.querySelectorAll("[id]")) {
        if (ids.has(node.id)) {
            console.warn("Duplicate id", node.id);
        } else {
            ids.add(node.id);
        }
    }


    // MANAGE URL
    console.debug("Setup url-manager");
    setupUrlManager(elements);

    console.debug("Done all");
})();
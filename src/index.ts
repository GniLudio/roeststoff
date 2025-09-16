import 'bootstrap';

import * as parser from './parser';
import * as cards from './cards';
import { compareEpisodeID, compareEpisode, compareEpisodeIDs, compareIsHost } from './utils';
import { setupUrlManager } from './url_manager';
import { applyFixes as applyFixes } from './fixes';
import peopleURL from '../data/people.xml';
import drinksURL from '../data/drinks.xml';
import boestOfsURL from '../data/boestofs.xml';
import restaurantsURL from '../data/restaurants.xml';
import glossaryURL from '../data/glossary.xml';
import miscURL from '../data/misc.xml';
import sayingsURL from '../data/sayings.xml';


console.debug("index.ts loaded");

const rssURL = "https://feeds.megaphone.fm/TWG3193347111";


(async () => {
    // PARSING
    console.debug("Add episodes");
    const episodesRSS = await fetchOrEmpty(rssURL);
    const episodes: Episode[] = parser.parseXML(episodesRSS, ['rss', 'channel'], 'item', parser.parseEpisode);

    console.debug("Add people");
    const peopleXML = await fetchOrEmpty(peopleURL);
    const people: Person[] = parser.parseXML(peopleXML, ['root'], 'person', parser.parsePerson);

    console.debug("Add drinks");
    const drinksXML = await fetchOrEmpty(drinksURL);
    const drinks: Drink[] = parser.parseXML(drinksXML, ['root'], 'drink', parser.parseDrink);

    console.debug("Add boest ofs")
    const boestofsXML = await fetchOrEmpty(boestOfsURL);
    const boestOfs: BoestOf[] = parser.parseXML(boestofsXML, ['root'], 'boestof', parser.parseBoestOf);

    console.debug("Add restaurants");
    const restaurantsXML = await fetchOrEmpty(restaurantsURL);
    const restaurants: Restaurant[] = parser.parseXML(restaurantsXML, ['root'], 'restaurant', parser.parseRestaurant);

    console.debug("Add glossary");
    const glossaryXML = await fetchOrEmpty(glossaryURL);
    const glossary: GlossaryEntry[] = parser.parseXML(glossaryXML, ['root'], 'entry', parser.parseGlossaryEntry);

    console.debug("Add misc");
    const miscXML = await fetchOrEmpty(miscURL);
    const misc: MiscEntry[] = parser.parseXML(miscXML, ['root'], 'entry', parser.parseMiscEntry);

    console.debug("Add sayings");
    const sayingsXML = await fetchOrEmpty(sayingsURL);
    const sayings: TextWithTimestamp[] = parser.parseXML(sayingsXML, ['root'], 'saying', parser.parseTextWithTimestamp);

    const allContent: AllContent = { episodes, people, drinks, boestOfs, restaurants, glossary, sayings, misc };

    // FIXES
    console.debug("Apply fixes to data");
    applyFixes(episodes);

    // SORTING
    console.debug("Sort data");
    episodes.sort(compareEpisode).reverse();
    people.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, episodes)).sort((a, b) => -compareIsHost(a, b));
    drinks.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, episodes));
    boestOfs.sort((a, b) => -compareEpisodeID(a, b, episodes));
    restaurants.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, episodes));
    glossary.sort((a, b) => a.name.localeCompare(b.name));
    sayings.sort((a, b) => -compareEpisodeID(a, b, episodes));
    misc.sort((a, b) => -compareEpisodeID(a, b, episodes));

    // CREATE AND INSERT HTML ELEMENTS
    console.debug("Create content");
    const elements: TabHTMLElements = [
        cards.createCards('folgen', 'Folgen', episodes, cards.getEpisodeCardInfo, allContent),
        cards.createCards('stoffies', 'Stoffies', people, cards.getPersonCardInfo, allContent),
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

async function fetchOrEmpty(url: string): Promise<string> {
    try {
        return await (await fetch(url)).text();
    } catch {
        return "";
    }
}
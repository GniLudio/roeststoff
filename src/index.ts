console.log("index.ts loaded");

import 'bootstrap';

import peopleRaw from '../data/people.xml';
import drinksRaw from '../data/drinks.xml';
import boestOfsRaw from '../data/boestofs.xml';
import restaurantsRaw from '../data/restaurants.xml';
import glossaryRaw from '../data/glossary.xml';
import sayingsRaw from '../data/sayings.xml';
import miscRaw from '../data/misc.xml';
import * as parser from './parser';
import * as cards from './cards';
import { compareEpisodeID, compareEpisode, compareEpisodeIDs, compareIsHost } from './utils';
import { setupUrlManager } from './url_manager';

const RSS_URL = "https://feeds.megaphone.fm/TWG3193347111";

(async () => {
    console.log("FETCHING RSS");
    const episodesRaw = await (await fetch(RSS_URL)).text();

    // PARSING
    console.log("PARSING")
    const episodes: Episode[] = parser.parseXML(episodesRaw, ['rss', 'channel'], 'item', parser.parseEpisode);
    const people: Person[] = parser.parseXML(peopleRaw, ['root'], 'person', parser.parsePerson);
    const drinks: Drink[] = parser.parseXML(drinksRaw, ['root'], 'drink', parser.parseDrink);
    const boestOfs: BoestOf[] = parser.parseXML(boestOfsRaw, ['root'], 'boestof', parser.parseBoestOf);
    const restaurants: Restaurant[] = parser.parseXML(restaurantsRaw, ['root'], 'restaurant', parser.parseRestaurant);
    const glossary: GlossaryEntry[] = parser.parseXML(glossaryRaw, ['root'], 'entry', parser.parseGlossaryEntry);
    const misc: MiscEntry[] = parser.parseXML(miscRaw, ['root'], 'entry', parser.parseMiscEntry);
    const sayings: TextWithTimestamp[] = parser.parseXML(sayingsRaw, ['root'], 'saying', parser.parseTextWithTimestamp);
    const allContent: AllContent = { episodes, people, drinks, boestOfs, restaurants, glossary, sayings, misc };

    // SORTING
    console.log("SORTING");
    episodes.sort(compareEpisode).reverse();
    people.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes)).sort((a, b) => -compareIsHost(a, b));
    drinks.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes));
    boestOfs.sort((a, b) => -compareEpisodeID(a, b, allContent.episodes));
    restaurants.sort((a, b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes));
    glossary.sort((a, b) => a.name.localeCompare(b.name));
    sayings.sort((a, b) => -compareEpisodeID(a, b, episodes));
    misc.sort((a, b) => -compareEpisodeID(a, b, allContent.episodes));

    // CREATE AND INSERT HTML ELEMENTS
    console.log("CREATING");
    const elements: TabHTMLElements = [
        cards.createCards('episodes', 'Folgen', episodes, cards.getEpisodeCardInfo, allContent),
        cards.createCards('people', 'Stoffies', people, cards.getPersonCardInfo, allContent),
        cards.createCards('drinks', 'Trinkstoff', drinks, cards.getDrinkCardInfo, allContent),
        cards.createCards('boestof', 'Böst Ofs', boestOfs, cards.getBoestOfCardInfo, allContent),
        cards.createCards('restaurants', 'Röstaurants', restaurants, cards.getRestaurantCardInfo, allContent),
        cards.createCards('glossary', 'Lehrstoff', glossary, cards.getGlossaryEntryCardInfo, allContent),
        cards.createCards('sayings', 'Sprüche', sayings, cards.getSayingCardInfo, allContent),
        cards.createCards('misc', 'Side Dishes', misc, cards.getMiscEntryCardInfo, allContent),
    ];

    // MANAGE URL
    setupUrlManager(elements);
})();
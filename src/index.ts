console.log("index.ts loaded");
import episodesRaw from '../data/episodes.xml';
import peopleRaw from '../data/people.xml';
import drinksRaw from '../data/drinks.xml';
import boestOfsRaw from '../data/boestofs.xml';
import restaurantsRaw from '../data/restaurants.xml';
import glossaryRaw from '../data/glossary.xml';
import sayingsRaw from '../data/sayings.xml';
import miscRaw from '../data/misc.xml';
import * as parser from './parser';
import * as cards from './cards';
import { compareEpisodeID, compareEpisode, compareEpisodeIDs } from './utils';

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
const allContent: AllContent = {episodes, people, drinks, boestOfs, restaurants, glossary, sayings, misc};

// SORTING
console.log("SORTING");
episodes.sort(compareEpisode).reverse();
people.sort((a,b) => compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes)).reverse();
drinks.sort((a,b) => compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes)).reverse();
boestOfs.sort((a,b) => compareEpisodeID(a, b, allContent.episodes)).reverse();
restaurants.sort((a,b) => compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes)).reverse();
glossary.sort((a,b) => a.name.localeCompare(b.name));
sayings.sort((a,b) => compareEpisodeID(a, b, episodes));
misc.sort((a,b) => compareEpisodeID(a, b, allContent.episodes));

// CREATE AND INSERT HTML ELEMENTS
console.log("CREATING");
cards.createCards('episodes_content', episodes, cards.getEpisodeCardInfo, allContent);
cards.createCards('people_content', people, cards.getPersonCardInfo, allContent);
cards.createCards('drinks_content', drinks, cards.getDrinkCardInfo, allContent);
cards.createCards('boestof_content', boestOfs, cards.getBoestOfCardInfo, allContent);
cards.createCards('restaurants_content', restaurants, cards.getRestaurantCardInfo, allContent);
cards.createCards('glossary_content', glossary, cards.getGlossaryEntryCardInfo, allContent);
cards.createCards('sayings_content', sayings, cards.getSayingCardInfo, allContent);
cards.createCards('misc_content', misc, cards.getMiscEntryCardInfo, allContent);

// AUDIO CONTROLS
let lastPlayed: HTMLMediaElement | null = null;
document.addEventListener('play', function(e) {
    console.log('play', e.target);
    for (const audio of document.querySelectorAll("audio")) {
        if (audio != e.target && !audio.paused) {
            audio.pause();
        }
    }
    lastPlayed = e.target as HTMLMediaElement;
}, true);
document.addEventListener('keyup', function(e) {
    if (lastPlayed == null) return;
    if (e.key != " " && e.key != "Space") return;
    if (lastPlayed.paused) {
        lastPlayed.play();
    } else {
        lastPlayed.pause();
    }
}, true);
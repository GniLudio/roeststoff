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
import { compareEpisodeID, compareEpisode, compareEpisodeIDs, compareIsHost } from './utils';

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
people.sort((a,b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes)).sort((a,b) => -compareIsHost(a, b));
drinks.sort((a,b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes));
boestOfs.sort((a,b) => -compareEpisodeID(a, b, allContent.episodes));
restaurants.sort((a,b) => -compareEpisodeIDs(a.appearances, b.appearances, allContent.episodes));
glossary.sort((a,b) => a.name.localeCompare(b.name));
sayings.sort((a,b) => -compareEpisodeID(a, b, episodes));
misc.sort((a,b) => -compareEpisodeID(a, b, allContent.episodes));

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
let lastControlledTime: number = -1;
const audio_elements = document.querySelectorAll("audio");
for (const audio of audio_elements) {
    audio.addEventListener('play', function(_) {
        lastPlayed = audio;
        lastControlledTime = Date.now();
    });

}
document.addEventListener('keydown', function(e) {
    if (e.key != 'Space' && e.key != ' ' && e.keyCode != 32) return;
    if (!lastPlayed) return;
    if (lastControlledTime + 100 >= Date.now()) return;
    lastControlledTime = Date.now();
    if (lastPlayed.paused) {
        lastPlayed.play();
    } else {
        lastPlayed.pause();
    }
});
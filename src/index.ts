console.log("index.ts loaded");
import episodesRaw from '../data/episodes.xml';
import peopleRaw from '../data/people.xml';
import drinksRaw from '../data/drinks.xml';
import boestOfsRaw from '../data/boestofs.xml';
import restaurantsRaw from '../data/restaurants.xml';
import sponsorsRaw from '../data/sponsors.xml';
import glossaryRaw from '../data/glossary.xml';
import miscRaw from '../data/misc.xml';
import { parseBoestOf, parseDrink, parseEpisode, parseGlossaryEntry, parseMiscEntry, parsePerson, parseRestaurant, parseSponsor, parseXML } from './parser';
import { createCards, getEpisodeCardInfo } from './cards';


// PARSING
console.log("PARSING")
const episodes: Episode[] = parseXML(episodesRaw, ['rss', 'channel'], 'item', parseEpisode);
const people: Person[] = parseXML(peopleRaw, ['root'], 'person', parsePerson);
const drinks: Drink[] = parseXML(drinksRaw, ['root'], 'drink', parseDrink);
const boestOfs: BoestOf[] = parseXML(boestOfsRaw, ['root'], 'boestof', parseBoestOf);
const restaurants: Restaurant[] = parseXML(restaurantsRaw, ['root'], 'restaurant', parseRestaurant);
const sponsors: Sponsor[] = parseXML(sponsorsRaw, ['root'], 'sponsor', parseSponsor);
const glossary: GlossaryEntry[] = parseXML(glossaryRaw, ['root'], 'entry', parseGlossaryEntry);
const misc: MiscEntry[] = parseXML(miscRaw, ['root'], 'entry', parseMiscEntry);
const allContent: AllContent = {episodes, people, drinks, boestOfs, restaurants, sponsors, glossary, misc};

// SORTING
console.log("SORTING");

// CREATE AND INSERT HTML ELEMENTS
console.log("CREATING");
createCards('episodes_content', episodes, getEpisodeCardInfo, allContent);
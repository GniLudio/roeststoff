console.log("index.ts loaded");

import { createEpisodeCard, parseEpisode } from "./tabs/episodes";
import { comparePerson, createPersonCard, parsePerson } from "./tabs/people";
import { parseBoestOf, createBoestOfCard } from "./tabs/boestof";
import { parseDrink, createDrinkCard } from "./tabs/drinks";
import { parseGlossaryEntry, createGlossaryCard } from "./tabs/glossary";
import { parseMiscEntry, createMiscCard } from "./tabs/misc";
import { parseRestaurant, createRestaurantCard } from "./tabs/restaurants";
import { parseSponsor, createSponsorCard } from "./tabs/sponsors";
import { parseXML, compareDates, compareByLastAppearance, isEpisodeEqual } from "./utils";

import peopleRaw from '../data/people.xml';
import episodesRaw from '../data/episodes.xml';
import drinksRaw from '../data/drinks.xml';
import boestOfRaw from '../data/boestof.xml';
import restaurantsRaw from '../data/restaurants.xml';
import sponsorsRaw from '../data/sponsors.xml';
import glossaryRaw from '../data/glossary.xml';
import miscRaw from '../data/misc.xml';

// PARSING
console.log("PARSING")
const episodes: Episode[] = parseXML(episodesRaw, ['rss', 'channel'], 'item', parseEpisode);
const people: Person[] = parseXML(peopleRaw, ['root'], 'person', parsePerson);
const drinks: Drink[] = parseXML(drinksRaw, ['root'], 'drink', parseDrink);
const boestOfs: BoestOf[] = parseXML(boestOfRaw, ['root'], 'boestof', parseBoestOf);
const restaurants: Restaurant[] = parseXML(restaurantsRaw, ['root'], 'restaurant', parseRestaurant);
const sponsors: Sponsor[] = parseXML(sponsorsRaw, ['root'], 'sponsor', parseSponsor);
const glossaryEntries: GlossaryEntry[] = parseXML(glossaryRaw, ['root'], 'entry', parseGlossaryEntry);
const miscEntries: MiscEntry[] = parseXML(miscRaw, ['root'], 'entry', parseMiscEntry);

// UTILITY FUNCTIONS
const getEpisode: EpisodeGetter = (episodeUID) => episodes.find(episode => isEpisodeEqual(episodeUID, episode))!;
const filterByEpisode: EpisodeFilter = (uid, item) => item.appearances.map(getEpisode).some(episode => isEpisodeEqual(episode, uid));

// SORTING
console.log("SORTING");
episodes.sort((a, b) => compareDates(a.pubDate, b.pubDate)).reverse();
people.sort(comparePerson);
drinks.sort(compareByLastAppearance).reverse();
restaurants.sort(compareByLastAppearance).reverse();
sponsors.sort(compareByLastAppearance).reverse();
glossaryEntries.sort((a, b) => a.name.localeCompare(b.name));

// CREATE AND INSERT HTML ELEMENTS
console.log("CREATING");
document.getElementById("episodes_content")!.replaceChildren(...episodes.map(episode => createEpisodeCard(episode, people, drinks, restaurants, boestOfs, filterByEpisode)));
document.getElementById('people_content')!.replaceChildren(...people.map(person => createPersonCard(person, getEpisode)));
document.getElementById("drinks_content")!.replaceChildren(...drinks.map(drink => createDrinkCard(drink, getEpisode)));
document.getElementById('boestof_content')!.replaceChildren(...boestOfs.map(boestOf => createBoestOfCard(boestOf, getEpisode)));
document.getElementById('restaurants_content')!.replaceChildren(...restaurants.map(restaurant => createRestaurantCard(restaurant, getEpisode)));
document.getElementById('sponsors_content')!.replaceChildren(...sponsors.map(sponsor => createSponsorCard(sponsor, getEpisode)));
document.getElementById('glossary_content')!.replaceChildren(...glossaryEntries.map(entry => createGlossaryCard(entry, getEpisode)));
document.getElementById('misc_content')!.replaceChildren(...miscEntries.map(entry => createMiscCard(entry, getEpisode)));
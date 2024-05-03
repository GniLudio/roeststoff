console.log("index.ts loaded");
import episodesRaw from '../data/episodes.xml';
import peopleRaw from '../data/people.xml';
import drinksRaw from '../data/drinks.xml';
import boestOfsRaw from '../data/boestofs.xml';
import restaurantsRaw from '../data/restaurants.xml';
import sponsorsRaw from '../data/sponsors.xml';
import glossaryRaw from '../data/glossary.xml';
import miscRaw from '../data/misc.xml';
import * as parser from './parser';
import * as cards from './cards';


// PARSING
console.log("PARSING")
const episodes: Episode[] = parser.parseXML(episodesRaw, ['rss', 'channel'], 'item', parser.parseEpisode);
const people: Person[] = parser.parseXML(peopleRaw, ['root'], 'person', parser.parsePerson);
const drinks: Drink[] = parser.parseXML(drinksRaw, ['root'], 'drink', parser.parseDrink);
const boestOfs: BoestOf[] = parser.parseXML(boestOfsRaw, ['root'], 'boestof', parser.parseBoestOf);
const restaurants: Restaurant[] = parser.parseXML(restaurantsRaw, ['root'], 'restaurant', parser.parseRestaurant);
const sponsors: Sponsor[] = parser.parseXML(sponsorsRaw, ['root'], 'sponsor', parser.parseSponsor);
const glossary: GlossaryEntry[] = parser.parseXML(glossaryRaw, ['root'], 'entry', parser.parseGlossaryEntry);
const misc: MiscEntry[] = parser.parseXML(miscRaw, ['root'], 'entry', parser.parseMiscEntry);
const allContent: AllContent = {episodes, people, drinks, boestOfs, restaurants, sponsors, glossary, misc};

// SORTING
console.log("SORTING");

// CREATE AND INSERT HTML ELEMENTS
console.log("CREATING");
cards.createCards('episodes_content', episodes, cards.getEpisodeCardInfo, allContent);
cards.createCards('people_content', people, cards.getPersonCardInfo, allContent);
cards.createCards('drinks_content', drinks, cards.getDrinkCardInfo, allContent)
cards.createCards('boestof_content', boestOfs, cards.getBoestOfCardInfo, allContent)
cards.createCards('restaurants_content', restaurants, cards.getRestaurantCardInfo, allContent)
cards.createCards('sponsors_content', sponsors, cards.getSponsorCardInfo, allContent)
cards.createCards('glossary_content', glossary, cards.getGlossaryEntryCardInfo, allContent)
cards.createCards('misc_content', misc, cards.getMiscEntryCardInfo, allContent)

// AUTOMATICALLY STOP OTHER AUDIO
document.addEventListener('play', function(e) {
    for (const audio of document.querySelectorAll("audio")) {
        if (audio != e.target) {
            audio.pause()
        }
    }
}, true);
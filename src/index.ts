console.log("index.ts loaded");

import { createEpisodeCard, parseEpisode } from "./tabs/episodes";
import episodeXML from '../data/episodes.xml';
import peopleXML from '../data/people.xml';
import { comparePerson, createPersonCard, parsePerson } from "./tabs/people";

// GENERAL
const TESTING: boolean = true;
const shouldBeDisplayed = (element: {id: number}) => TESTING ? element.id < 0 : element.id >= 0;
const parser: DOMParser = new DOMParser();


// EPISODES / FOLGEN
const episodeXMLElements: NodeListOf<Element> = parser.parseFromString(episodeXML, "text/xml").querySelector('rss').querySelector('channel').querySelectorAll('item');
const episodeHTMLElements: HTMLElement[] = Array.from(episodeXMLElements).map(parseEpisode).map(createEpisodeCard);
document.getElementById("episodes_content").replaceChildren(...episodeHTMLElements);

// PEOPLE / STOFFIES
const peopleXMLElements = parser.parseFromString(peopleXML, "text/xml").querySelector('people').querySelectorAll('person');
const peopleHTMLElements = Array.from(peopleXMLElements).map(parsePerson).sort(comparePerson).map(createPersonCard);
document.getElementById('people_content').replaceChildren(...peopleHTMLElements);
import { drinks } from "./data/drinks";
import { episodes } from "./data/episodes";
import { people } from "./data/people";
import { convertDrinkToHTML } from "./templates/drink_template";
import { convertPersonToHTML } from "./templates/person_template";
import { convertEpisodeToHTML } from "./templates/episode_template";
import { restaurants } from "./data/restaurants";
import { convertRestaurantToHTML } from "./templates/restaurant_template";
import { sponsors } from "./data/sponsors";
import { convertSponsorToHTML } from "./templates/sponsor_template";

console.log("index.ts loaded");

// SETTINGS
const TESTING: boolean = true;
const shouldBeDisplayed = (element: {id: number}) => TESTING ? element.id < 0 : element.id >= 0;

// EPISODES
const episode_container = document.getElementById("episodes_content");
const episode_elements = episodes.filter(shouldBeDisplayed).map(convertEpisodeToHTML)
episode_container.replaceChildren(...episode_elements);

// PEOPLE / ROESTIES
const people_container = document.getElementById('roesties_content');
const person_elements = people.filter(shouldBeDisplayed).map(convertPersonToHTML)
people_container.replaceChildren(...person_elements);

// DRINKS / Trinkstoff
const drinks_container = document.getElementById("drinks_content");
const drink_elements = drinks.filter(shouldBeDisplayed).map(convertDrinkToHTML);
drinks_container.replaceChildren(...drink_elements);

// Restaurants
const restaurants_container = document.getElementById("restaurants_content");
const restaurant_elements = restaurants.filter(shouldBeDisplayed).map(convertRestaurantToHTML);
restaurants_container.replaceChildren(...restaurant_elements);

// Sponsors / Sponsoren
const sponsors_container = document.getElementById("sponsors_content");
const sponsors_elements = sponsors.filter(shouldBeDisplayed).map(convertSponsorToHTML);
sponsors_container.replaceChildren(...sponsors_elements);
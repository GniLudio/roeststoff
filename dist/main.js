/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/boest_ofs.ts":
/*!*******************************!*\
  !*** ./src/data/boest_ofs.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boest_ofs: () => (/* binding */ boest_ofs)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var boest_ofs = ([
    {
        id: -1,
        title: "Böst-Of 1",
        description: "Dies ist ein Test Böst-Of.",
        timestamp: {
            episode: -1,
            time: "00:00:01",
        },
        rankings: [
            ["1. Platz (Peter)", "2. Platz (Peter)", "3. Platz (Peter)", "4. Platz (Peter)", "5. Platz (Peter)"],
            ["1. Platz (Ilona)", "2. Platz (Ilona)", "3. Platz (Ilona)", "4. Platz (Ilona)", "5. Platz (Ilona)"],
        ]
    },
    {
        id: -2,
        title: "Böst-Of 2",
        description: "Dies ist ein Test Böst-Of.",
        timestamp: {
            episode: -2,
            time: "00:02:00",
        },
        rankings: [
            ["1. Platz (Peter)", "2. Platz (Peter)", "3. Platz (Peter)", "4. Platz (Peter)", "5. Platz (Peter)"],
            ["1. Platz (Ilona)", "2. Platz (Ilona)", "3. Platz (Ilona)", "4. Platz (Ilona)", "5. Platz (Ilona)"],
        ]
    },
    {
        id: -3,
        title: "Böst-Of 3",
        description: "Dies ist ein Test Böst-Of.",
        timestamp: {
            episode: -3,
            time: "03:00:00",
        },
        rankings: [
            ["1. Platz (Peter)", "2. Platz (Peter)", "3. Platz (Peter)", "4. Platz (Peter)", "5. Platz (Peter)"],
            ["1. Platz (Ilona)", "2. Platz (Ilona)", "3. Platz (Ilona)", "4. Platz (Ilona)", "5. Platz (Ilona)"],
        ]
    },
]).sort(_utils__WEBPACK_IMPORTED_MODULE_0__.compareByTimestamp);


/***/ }),

/***/ "./src/data/drinks.ts":
/*!****************************!*\
  !*** ./src/data/drinks.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drinks: () => (/* binding */ drinks)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var drinks = ([
    {
        id: -3,
        name: "Drink 3",
        description: "Dies ist ein Test-Drink.",
        price: "99.99€",
        imgFormat: "webp",
        timestamps: [
            { episode: -1, time: "00:00:01" },
        ],
    },
    {
        id: -2,
        name: "Drink 2",
        description: "Dies ist ein Test-Drink.",
        price: "99.99€",
        imgFormat: "webp",
        timestamps: [
            { episode: -1, time: "00:01:00" },
            { episode: -2, time: "00:02:00" },
        ],
    },
    {
        id: -1,
        name: "Drink 1",
        description: "Dies ist ein Test-Drink.",
        price: "99.99€",
        imgFormat: "jpg",
        timestamps: [
            { episode: -1, time: "01:00:00" },
            { episode: -2, time: "02:00:00" },
            { episode: -3, time: "03:00:00" },
        ],
    }
]).sort(_utils__WEBPACK_IMPORTED_MODULE_0__.compareByTimestamps);


/***/ }),

/***/ "./src/data/episodes.ts":
/*!******************************!*\
  !*** ./src/data/episodes.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   episodes: () => (/* binding */ episodes)
/* harmony export */ });
var episodes = [
    {
        id: -3,
        title: "Folge 3 (feat. Test)",
        short_title: "Folge 3",
        short_subtitle: "feat. Test",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: "01 Januar 2000",
        imgFormat: "webp"
    },
    {
        id: -2,
        title: "Folge 2 (feat. Test)",
        short_title: "Folge 2",
        short_subtitle: "feat. Test",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: "01 Januar 2000",
        imgFormat: "webp"
    },
    {
        id: -1,
        title: "Folge 1 (feat. Test)",
        short_title: "Folge 1",
        short_subtitle: "feat. Test",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: "01 Januar 2000",
        imgFormat: "jpg"
    },
];


/***/ }),

/***/ "./src/data/glossary.ts":
/*!******************************!*\
  !*** ./src/data/glossary.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glossary: () => (/* binding */ glossary)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var glossary = ([
    {
        id: -3,
        title: "Glosary Entry 3",
        description: "Dies ist ein Test-Glossary-Eintrag.",
        timestamps: [
            { episode: -1, time: "01:00:00" },
            { episode: -2, time: "02:00:00" },
            { episode: -2, time: "03:00:00" },
        ]
    },
    {
        id: -2,
        title: "Glosary Entry 2",
        description: "Dies ist ein Test-Glossary-Eintrag.",
        timestamps: [
            { episode: -1, time: "00:01:00" },
            { episode: -2, time: "00:02:00" },
        ]
    },
    {
        id: -1,
        title: "Glosary Entry 1",
        description: "Dies ist ein Test-Glossary-Eintrag.",
        timestamps: [
            { episode: -1, time: "00:00:01" },
        ]
    },
]).sort(_utils__WEBPACK_IMPORTED_MODULE_0__.compareByTimestamps);


/***/ }),

/***/ "./src/data/people.ts":
/*!****************************!*\
  !*** ./src/data/people.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   people: () => (/* binding */ people)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var people = ([
    {
        id: -3,
        name: "Person 3",
        description: "Dies ist eine Test-Person.",
        imgFormat: "webp",
        characteristics: [
            ["Merkmal 1", { episode: -1, time: "01:00:00" }],
            ["Merkmal 2", { episode: -2, time: "02:00:00" }],
            ["Merkmal 3", { episode: -3, time: "03:00:00" }],
        ],
        timestamps: [
            { episode: -1, time: "01:00:00" },
            { episode: -2, time: "02:00:00" },
            { episode: -3, time: "03:00:00" },
        ],
    },
    {
        id: -2,
        name: "Person 2",
        description: "Dies ist eine Test-Person.",
        imgFormat: "webp",
        characteristics: [
            ["Merkmal 1", { episode: -1, time: "00:01:00" }],
            ["Merkmal 2", { episode: -2, time: "00:02:00" }],
            ["Merkmal 3", { episode: -3, time: "00:03:00" }],
        ],
        timestamps: [
            { episode: -2, time: "00:02:00" },
        ],
    },
    {
        id: -1,
        name: "Person 1",
        description: "Dies ist eine Test-Person.",
        imgFormat: "jpg",
        characteristics: [
            ["Merkmal 1", { episode: -1, time: "00:00:01" }],
            ["Merkmal 2", { episode: -2, time: "00:00:02" }],
            ["Merkmal 3", { episode: -3, time: "00:00:03" }],
        ],
        timestamps: [
            { episode: -1, time: "00:00:01" },
        ],
    },
]).sort(_utils__WEBPACK_IMPORTED_MODULE_0__.comparePerson);


/***/ }),

/***/ "./src/data/restaurants.ts":
/*!*********************************!*\
  !*** ./src/data/restaurants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   restaurants: () => (/* binding */ restaurants)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var restaurants = ([
    {
        id: -3,
        name: "Restaurant 3",
        description: "Dies ist ein Test-Restaurant.",
        timestamps: [
            { episode: -1, time: "01:00:00" },
            { episode: -2, time: "02:00:00" },
            { episode: -3, time: "03:00:00" },
        ],
        imgFormat: "webp"
    },
    {
        id: -2,
        name: "Restaurant 2",
        description: "Dies ist ein Test-Restaurant.",
        timestamps: [
            { episode: -1, time: "00:01:00" },
            { episode: -2, time: "00:02:00" },
            { episode: -3, time: "00:03:00" },
        ],
        imgFormat: "webp"
    },
    {
        id: -1,
        name: "Restaurant 1",
        description: "Dies ist ein Test-Restaurant.",
        timestamps: [
            { episode: -1, time: "00:00:01" },
            { episode: -2, time: "00:00:02" },
            { episode: -3, time: "00:00:03" },
        ],
        imgFormat: "jpg"
    },
]).sort(_utils__WEBPACK_IMPORTED_MODULE_0__.compareByTimestamps);


/***/ }),

/***/ "./src/data/sponsors.ts":
/*!******************************!*\
  !*** ./src/data/sponsors.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sponsors: () => (/* binding */ sponsors)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");

var sponsors = ([
    {
        id: -3,
        name: "Sponsor 3",
        description: "Dies ist ein Test-Sponsor.",
        imgFormat: "webp",
        timestamps: [
            { episode: -1, time: "01:00:00" },
            { episode: -2, time: "02:00:00" },
            { episode: -3, time: "03:00:00" },
        ],
    },
    {
        id: -2,
        name: "Sponsor 2",
        description: "Dies ist ein Test-Sponsor.",
        imgFormat: "webp",
        timestamps: [
            { episode: -1, time: "00:01:00" },
            { episode: -2, time: "00:02:00" },
        ],
    },
    {
        id: -1,
        name: "Sponsor 1",
        description: "Dies ist ein Test-Sponsor.",
        imgFormat: "jpg",
        timestamps: [
            { episode: -1, time: "00:00:01" },
        ],
    },
]).sort(_utils__WEBPACK_IMPORTED_MODULE_0__.compareByTimestamps);


/***/ }),

/***/ "./src/templates/accordion_item_template.ts":
/*!**************************************************!*\
  !*** ./src/templates/accordion_item_template.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAccordionItem: () => (/* binding */ createAccordionItem)
/* harmony export */ });
function createAccordionItem(accordion_name, id, title, description) {
    var element = document.createElement("div");
    element.classList.add("accordion-item", 'border', "border-2", "border-warning");
    element.innerHTML = "\n        <h2 class=\"accordion-header\" id=\"glossary_item_".concat(id, "\">\n            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#glossary_item_").concat(id, "_content\" aria-expanded=\"true\" aria-controls=\"glossary_item_").concat(id, "_content\">\n                <span class=\"text-center w-100\">").concat(title, "</span>\n            </button>\n        </h2>\n        <div id=\"glossary_item_").concat(id, "_content\" class=\"accordion-collapse collapse\" aria-labelledby=\"glossary_item_").concat(id, "\" data-bs-parent=\"#glossary_content\">\n            <div class=\"accordion-body\">\n                ").concat(description, "\n            </div>\n        </div>");
    return element;
}


/***/ }),

/***/ "./src/templates/card_template.ts":
/*!****************************************!*\
  !*** ./src/templates/card_template.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCard: () => (/* binding */ createCard)
/* harmony export */ });
console.log("card_template.ts loaded");
var parser = new DOMParser();
function createCard(info) {
    console.log("Create Card", info.content_type, info.card_title, info.id, info.img_format);
    var element = document.createElement("div");
    element.classList.add('col');
    element.innerHTML = "\n        <div class=\"card bg-light border-warning border-3 h-100\">\n                <img src=\"images/".concat(info.img_folder, "/").concat(info.content_type, "_").concat(info.id, ".").concat(info.img_format, "\" \n                    class=\"card-img-top p-1 rounded-3\" alt=\"").concat(info.img_alt, " ").concat(info.id, "\">\n                <div class=\"card-body d-flex flex-column\">\n                    <div class=\"m-auto\">\n                        <h5 class=\"card-title\">").concat(info.card_title, "</h5>\n                        <h6 class=\"card-subtitle mb-2 text-muted\">").concat(info.card_subtitle, "</h6>\n                    </div>\n                    <button class=\"btn btn-primary m-auto\" data-bs-toggle=\"modal\" data-bs-target=\"#").concat(info.content_type, "_").concat(info.id, "_modal\">Infos</button>\n                </div>\n            </div>\n            <div class=\"modal fade\" id=\"").concat(info.content_type, "_").concat(info.id, "_modal\" tabindex=\"-1\" aria-labelledby=\"").concat(info.content_type, "_").concat(info.id, "_modal\" aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header text-center\">\n                            <h2 class=\"modal-title w-100\" id=\"").concat(info.content_type, "_").concat(info.id, "_modal\">").concat(info.title, "</h1>\n                            <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                        </div>\n                        <div class=\"modal-body\">\n                            ").concat(createAdditionalInfo(info.additional_info), "\n                        </div>\n                    </div>\n                </div>\n        </div>");
    return element;
}
function createAdditionalInfo(info) {
    var additional_info = "";
    for (var _i = 0, _a = Object.entries(info); _i < _a.length; _i++) {
        var _b = _a[_i], title = _b[0], value = _b[1];
        var content = void 0;
        if (value.length == 0) {
            content = "-";
        }
        else if (typeof (value) == "string") {
            content = value;
        }
        else {
            content = list_template.replace('{content}', value.map(function (item) { return list_item_template.replace('{content}', item); }).join(""));
        }
        additional_info += additional_info_item_template.replace('{title}', title).replace('{content}', content);
    }
    return additional_info;
}
var additional_info_item_template = "<div class='rounded-5 m-3 p-1 border border-2 border-warning-subtle bg-light'><h5>{title}</h5><p>{content}</p></div>";
var list_template = "<ul class=\"list-group list-group-flush\" style='display:inline-block'>{content}</ul>";
var list_item_template = "<li class=\"list-group-item bg-transparent\">{content}</li>";


/***/ }),

/***/ "./src/templates/drink_template.ts":
/*!*****************************************!*\
  !*** ./src/templates/drink_template.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDrinkToHTML: () => (/* binding */ convertDrinkToHTML)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _card_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card_template */ "./src/templates/card_template.ts");


function convertDrinkToHTML(drink) {
    return (0,_card_template__WEBPACK_IMPORTED_MODULE_1__.createCard)({
        content_type: "drink",
        img_folder: "drinks",
        img_alt: "Trinkstoff",
        id: drink.id,
        card_title: drink.name,
        card_subtitle: drink.description,
        title: drink.name,
        img_format: drink.imgFormat,
        additional_info: {
            "Beschreibung": drink.description,
            "Preis": drink.price,
            "Folgen": (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEpisodes)(drink)
        }
    });
}


/***/ }),

/***/ "./src/templates/episode_template.ts":
/*!*******************************************!*\
  !*** ./src/templates/episode_template.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertEpisodeToHTML: () => (/* binding */ convertEpisodeToHTML)
/* harmony export */ });
/* harmony import */ var _data_boest_ofs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/boest_ofs */ "./src/data/boest_ofs.ts");
/* harmony import */ var _data_drinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/drinks */ "./src/data/drinks.ts");
/* harmony import */ var _data_people__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/people */ "./src/data/people.ts");
/* harmony import */ var _data_sponsors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/sponsors */ "./src/data/sponsors.ts");
/* harmony import */ var _card_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card_template */ "./src/templates/card_template.ts");





function convertEpisodeToHTML(episode) {
    var boest_of = _data_boest_ofs__WEBPACK_IMPORTED_MODULE_0__.boest_ofs.find(function (boest_of) { return boest_of.timestamp.episode == episode.id; });
    return (0,_card_template__WEBPACK_IMPORTED_MODULE_4__.createCard)({
        content_type: "episode",
        img_folder: "episodes",
        img_alt: "Folge",
        id: episode.id,
        card_title: episode.short_title,
        card_subtitle: episode.short_subtitle,
        title: episode.title,
        img_format: episode.imgFormat,
        additional_info: {
            "Gäste": getElementsOfEpisode(_data_people__WEBPACK_IMPORTED_MODULE_2__.people.filter(function (person) { return !person.isHost; })).map(function (guest) { return guest.name; }),
            "Trinkstoff": getElementsOfEpisode(_data_drinks__WEBPACK_IMPORTED_MODULE_1__.drinks).map(function (drink) { return drink.name; }),
            "Sponsoren": getElementsOfEpisode(_data_sponsors__WEBPACK_IMPORTED_MODULE_3__.sponsors).map(function (sponsor) { return sponsor.name; }),
            "Datum": episode.date,
            "Beschreibung": episode.description,
        }
    });
    function getElementsOfEpisode(elements) {
        var filtered = [];
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var element = elements_1[_i];
            for (var _a = 0, _b = element.timestamps; _a < _b.length; _a++) {
                var timestamp = _b[_a];
                if (timestamp.episode == episode.id) {
                    if (!filtered.includes(element)) {
                        filtered.push(element);
                    }
                }
            }
        }
        return filtered;
    }
}


/***/ }),

/***/ "./src/templates/glossary_entry_template.ts":
/*!**************************************************!*\
  !*** ./src/templates/glossary_entry_template.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertGlossaryEntryToHTML: () => (/* binding */ convertGlossaryEntryToHTML)
/* harmony export */ });
/* harmony import */ var _accordion_item_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion_item_template */ "./src/templates/accordion_item_template.ts");

function convertGlossaryEntryToHTML(glossaryEntry) {
    return (0,_accordion_item_template__WEBPACK_IMPORTED_MODULE_0__.createAccordionItem)("glossary", glossaryEntry.id, glossaryEntry.title, glossaryEntry.description);
}


/***/ }),

/***/ "./src/templates/person_template.ts":
/*!******************************************!*\
  !*** ./src/templates/person_template.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertPersonToHTML: () => (/* binding */ convertPersonToHTML)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _card_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card_template */ "./src/templates/card_template.ts");


function convertPersonToHTML(person) {
    return (0,_card_template__WEBPACK_IMPORTED_MODULE_1__.createCard)({
        content_type: "person",
        img_folder: "people",
        img_alt: "Person",
        id: person.id,
        card_title: person.name,
        card_subtitle: person.description,
        title: person.name,
        img_format: person.imgFormat,
        additional_info: {
            "Beschreibung": person.description,
            "Episoden": (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEpisodes)(person),
            "Merkmale": person.characteristics.map(function (_a) {
                var characteristic = _a[0], _ = _a[1];
                return characteristic;
            })
        }
    });
}


/***/ }),

/***/ "./src/templates/restaurant_template.ts":
/*!**********************************************!*\
  !*** ./src/templates/restaurant_template.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertRestaurantToHTML: () => (/* binding */ convertRestaurantToHTML)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _card_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card_template */ "./src/templates/card_template.ts");


function convertRestaurantToHTML(restaurant) {
    return (0,_card_template__WEBPACK_IMPORTED_MODULE_1__.createCard)({
        content_type: "restaurant",
        img_folder: "restaurants",
        img_alt: "Restaurant",
        id: restaurant.id,
        card_title: restaurant.name,
        card_subtitle: restaurant.description,
        title: restaurant.name,
        img_format: restaurant.imgFormat,
        additional_info: {
            "Beschreibung": restaurant.description,
            "Folgen": (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEpisodes)(restaurant)
        }
    });
}


/***/ }),

/***/ "./src/templates/sponsor_template.ts":
/*!*******************************************!*\
  !*** ./src/templates/sponsor_template.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertSponsorToHTML: () => (/* binding */ convertSponsorToHTML)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.ts");
/* harmony import */ var _card_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card_template */ "./src/templates/card_template.ts");


function convertSponsorToHTML(sponsor) {
    return (0,_card_template__WEBPACK_IMPORTED_MODULE_1__.createCard)({
        content_type: "sponsor",
        img_folder: "sponsors",
        img_alt: "Sponsor",
        id: sponsor.id,
        card_title: sponsor.name,
        card_subtitle: sponsor.description,
        title: sponsor.name,
        img_format: sponsor.imgFormat,
        additional_info: {
            "Beschreibung": sponsor.description,
            "Folgen": (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getEpisodes)(sponsor)
        }
    });
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareByTimestamp: () => (/* binding */ compareByTimestamp),
/* harmony export */   compareByTimestamps: () => (/* binding */ compareByTimestamps),
/* harmony export */   comparePerson: () => (/* binding */ comparePerson),
/* harmony export */   getEpisodes: () => (/* binding */ getEpisodes)
/* harmony export */ });
/* harmony import */ var _data_episodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/episodes */ "./src/data/episodes.ts");

/**
 * Gets all episodes of an item.
 * @param element
 * @returns
 */
function getEpisodes(element) {
    return _data_episodes__WEBPACK_IMPORTED_MODULE_0__.episodes
        .filter(function (episode) { return element.timestamps.find(function (timestamp) { return episode.id == timestamp.episode; }); })
        .map(function (episode) { return episode.short_title; });
}
/**
 * Function used for sorting items.
 *
 * 1. Sorts by latest episode.
 * 2. Falls back to who has less number of episodes.
 * @param a The first item.
 * @param b The second item.
 * @returns Number representing the difference.
 */
function compareByTimestamps(a, b) {
    // Math.abs is used for testing episodes (with negative id)
    var aEpisodes = a.timestamps.map(function (episode) { return Math.abs(episode.episode); });
    var bEpisodes = b.timestamps.map(function (episode) { return Math.abs(episode.episode); });
    var aLatestEpisode = Math.max.apply(Math, aEpisodes);
    var bLatestEpisode = Math.max.apply(Math, bEpisodes);
    if (bLatestEpisode != aLatestEpisode) {
        return bLatestEpisode - aLatestEpisode;
    }
    else {
        return -(bEpisodes.length - aEpisodes.length);
    }
}
/**
 * Function used for sorting items by their latest episode.
 * @param a The first item.
 * @param b The second item.
 * @returns Number representing the difference.
 */
function compareByTimestamp(a, b) {
    return Math.abs(b.timestamp.episode) - Math.abs(a.timestamp.episode);
}
/**
 * Puts Ilona and Peter at the start and then sorts by latest episode.
 * @param a The first person.
 * @param b The second person.
 * @returns Number representing the difference.
 */
function comparePerson(a, b) {
    return (a.isHost || b.isHost) ? b.id - a.id : compareByTimestamps(a, b);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_drinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/drinks */ "./src/data/drinks.ts");
/* harmony import */ var _data_episodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/episodes */ "./src/data/episodes.ts");
/* harmony import */ var _data_people__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/people */ "./src/data/people.ts");
/* harmony import */ var _templates_drink_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/drink_template */ "./src/templates/drink_template.ts");
/* harmony import */ var _templates_person_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/person_template */ "./src/templates/person_template.ts");
/* harmony import */ var _templates_episode_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/episode_template */ "./src/templates/episode_template.ts");
/* harmony import */ var _data_restaurants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/restaurants */ "./src/data/restaurants.ts");
/* harmony import */ var _templates_restaurant_template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/restaurant_template */ "./src/templates/restaurant_template.ts");
/* harmony import */ var _data_sponsors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/sponsors */ "./src/data/sponsors.ts");
/* harmony import */ var _templates_sponsor_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/sponsor_template */ "./src/templates/sponsor_template.ts");
/* harmony import */ var _data_glossary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/glossary */ "./src/data/glossary.ts");
/* harmony import */ var _templates_glossary_entry_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/glossary_entry_template */ "./src/templates/glossary_entry_template.ts");












console.log("index.ts loaded");
// SETTINGS
var TESTING = true;
var shouldBeDisplayed = function (element) { return TESTING ? element.id < 0 : element.id >= 0; };
// EPISODES
var episode_container = document.getElementById("episodes_content");
var episode_elements = _data_episodes__WEBPACK_IMPORTED_MODULE_1__.episodes.filter(shouldBeDisplayed).map(_templates_episode_template__WEBPACK_IMPORTED_MODULE_5__.convertEpisodeToHTML);
episode_container.replaceChildren.apply(episode_container, episode_elements);
// PEOPLE / ROESTIES
var people_container = document.getElementById('roesties_content');
var person_elements = _data_people__WEBPACK_IMPORTED_MODULE_2__.people.filter(shouldBeDisplayed).map(_templates_person_template__WEBPACK_IMPORTED_MODULE_4__.convertPersonToHTML);
people_container.replaceChildren.apply(people_container, person_elements);
// DRINKS / Trinkstoff
var drinks_container = document.getElementById("drinks_content");
var drink_elements = _data_drinks__WEBPACK_IMPORTED_MODULE_0__.drinks.filter(shouldBeDisplayed).map(_templates_drink_template__WEBPACK_IMPORTED_MODULE_3__.convertDrinkToHTML);
drinks_container.replaceChildren.apply(drinks_container, drink_elements);
// Restaurants
var restaurants_container = document.getElementById("restaurants_content");
var restaurant_elements = _data_restaurants__WEBPACK_IMPORTED_MODULE_6__.restaurants.filter(shouldBeDisplayed).map(_templates_restaurant_template__WEBPACK_IMPORTED_MODULE_7__.convertRestaurantToHTML);
restaurants_container.replaceChildren.apply(restaurants_container, restaurant_elements);
// Sponsors / Sponsoren
var sponsors_container = document.getElementById("sponsors_content");
var sponsors_elements = _data_sponsors__WEBPACK_IMPORTED_MODULE_8__.sponsors.filter(shouldBeDisplayed).map(_templates_sponsor_template__WEBPACK_IMPORTED_MODULE_9__.convertSponsorToHTML);
sponsors_container.replaceChildren.apply(sponsors_container, sponsors_elements);
// Glossary / Lehrstoff
var glossary_container = document.getElementById("glossary_content");
var glossary_elements = _data_glossary__WEBPACK_IMPORTED_MODULE_10__.glossary.filter(shouldBeDisplayed).map(_templates_glossary_entry_template__WEBPACK_IMPORTED_MODULE_11__.convertGlossaryEntryToHTML);
glossary_container.replaceChildren.apply(glossary_container, glossary_elements);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3ZFLElBQU0saUJBQWlCLEdBQUcsb0RBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsNkVBQW9CLENBQUMsQ0FBQztBQUN2RixrQkFBa0IsQ0FBQyxlQUFlLE9BQWxDLGtCQUFrQixFQUFvQixpQkFBaUIsRUFBRTtBQUV6RCx1QkFBdUI7QUFDdkIsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDdkUsSUFBTSxpQkFBaUIsR0FBRyxxREFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQywyRkFBMEIsQ0FBQyxDQUFDO0FBQzdGLGtCQUFrQixDQUFDLGVBQWUsT0FBbEMsa0JBQWtCLEVBQW9CLGlCQUFpQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy9kYXRhL2JvZXN0X29mcy50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL2RhdGEvZHJpbmtzLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvZGF0YS9lcGlzb2Rlcy50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL2RhdGEvZ2xvc3NhcnkudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy9kYXRhL3Blb3BsZS50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL2RhdGEvcmVzdGF1cmFudHMudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy9kYXRhL3Nwb25zb3JzLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvdGVtcGxhdGVzL2FjY29yZGlvbl9pdGVtX3RlbXBsYXRlLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvdGVtcGxhdGVzL2NhcmRfdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy90ZW1wbGF0ZXMvZHJpbmtfdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy90ZW1wbGF0ZXMvZXBpc29kZV90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL3RlbXBsYXRlcy9nbG9zc2FyeV9lbnRyeV90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL3RlbXBsYXRlcy9wZXJzb25fdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy90ZW1wbGF0ZXMvcmVzdGF1cmFudF90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL3RlbXBsYXRlcy9zcG9uc29yX3RlbXBsYXRlLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcGFyZUJ5VGltZXN0YW1wIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYm9lc3Rfb2ZzOiBCb2VzdE9mW10gPSAoW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMSxcclxuICAgICAgICB0aXRsZTogXCJCw7ZzdC1PZiAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QgQsO2c3QtT2YuXCIsXHJcbiAgICAgICAgdGltZXN0YW1wOiB7XHJcbiAgICAgICAgICAgIGVwaXNvZGU6IC0xLFxyXG4gICAgICAgICAgICB0aW1lOiBcIjAwOjAwOjAxXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByYW5raW5nczogW1xyXG4gICAgICAgICAgICBbXCIxLiBQbGF0eiAoUGV0ZXIpXCIsIFwiMi4gUGxhdHogKFBldGVyKVwiLCBcIjMuIFBsYXR6IChQZXRlcilcIiwgXCI0LiBQbGF0eiAoUGV0ZXIpXCIsIFwiNS4gUGxhdHogKFBldGVyKVwiXSxcclxuICAgICAgICAgICAgW1wiMS4gUGxhdHogKElsb25hKVwiLCBcIjIuIFBsYXR6IChJbG9uYSlcIiwgXCIzLiBQbGF0eiAoSWxvbmEpXCIsIFwiNC4gUGxhdHogKElsb25hKVwiLCBcIjUuIFBsYXR6IChJbG9uYSlcIl0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogLTIsXHJcbiAgICAgICAgdGl0bGU6IFwiQsO2c3QtT2YgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0IELDtnN0LU9mLlwiLFxyXG4gICAgICAgIHRpbWVzdGFtcDoge1xyXG4gICAgICAgICAgICBlcGlzb2RlOiAtMixcclxuICAgICAgICAgICAgdGltZTogXCIwMDowMjowMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFua2luZ3M6IFtcclxuICAgICAgICAgICAgW1wiMS4gUGxhdHogKFBldGVyKVwiLCBcIjIuIFBsYXR6IChQZXRlcilcIiwgXCIzLiBQbGF0eiAoUGV0ZXIpXCIsIFwiNC4gUGxhdHogKFBldGVyKVwiLCBcIjUuIFBsYXR6IChQZXRlcilcIl0sXHJcbiAgICAgICAgICAgIFtcIjEuIFBsYXR6IChJbG9uYSlcIiwgXCIyLiBQbGF0eiAoSWxvbmEpXCIsIFwiMy4gUGxhdHogKElsb25hKVwiLCBcIjQuIFBsYXR6IChJbG9uYSlcIiwgXCI1LiBQbGF0eiAoSWxvbmEpXCJdLFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0zLFxyXG4gICAgICAgIHRpdGxlOiBcIkLDtnN0LU9mIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdCBCw7ZzdC1PZi5cIixcclxuICAgICAgICB0aW1lc3RhbXA6IHtcclxuICAgICAgICAgICAgZXBpc29kZTogLTMsXHJcbiAgICAgICAgICAgIHRpbWU6IFwiMDM6MDA6MDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXHJcbiAgICAgICAgICAgIFtcIjEuIFBsYXR6IChQZXRlcilcIiwgXCIyLiBQbGF0eiAoUGV0ZXIpXCIsIFwiMy4gUGxhdHogKFBldGVyKVwiLCBcIjQuIFBsYXR6IChQZXRlcilcIiwgXCI1LiBQbGF0eiAoUGV0ZXIpXCJdLFxyXG4gICAgICAgICAgICBbXCIxLiBQbGF0eiAoSWxvbmEpXCIsIFwiMi4gUGxhdHogKElsb25hKVwiLCBcIjMuIFBsYXR6IChJbG9uYSlcIiwgXCI0LiBQbGF0eiAoSWxvbmEpXCIsIFwiNS4gUGxhdHogKElsb25hKVwiXSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5dIHNhdGlzZmllcyBCb2VzdE9mW10pLnNvcnQoY29tcGFyZUJ5VGltZXN0YW1wKTsiLCJpbXBvcnQgeyBjb21wYXJlQnlUaW1lc3RhbXBzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJpbmtzOiBEcmlua1tdID0gKFtcclxuICAgIHtcclxuICAgICAgICBpZDogLTMsXHJcbiAgICAgICAgbmFtZTogXCJEcmluayAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QtRHJpbmsuXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiOTkuOTnigqxcIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwid2VicFwiLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IFtcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMSwgdGltZTogXCIwMDowMDowMVwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0yLFxyXG4gICAgICAgIG5hbWU6IFwiRHJpbmsgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LURyaW5rLlwiLFxyXG4gICAgICAgIHByaWNlOiBcIjk5Ljk54oKsXCIsXHJcbiAgICAgICAgaW1nRm9ybWF0OiBcIndlYnBcIixcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDE6MDBcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0yLCB0aW1lOiBcIjAwOjAyOjAwXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogLTEsXHJcbiAgICAgICAgbmFtZTogXCJEcmluayAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QtRHJpbmsuXCIsXHJcbiAgICAgICAgcHJpY2U6IFwiOTkuOTnigqxcIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwianBnXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAxOjAwOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMjowMDowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTMsIHRpbWU6IFwiMDM6MDA6MDBcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9XHJcbl0gc2F0aXNmaWVzIERyaW5rW10pLnNvcnQoY29tcGFyZUJ5VGltZXN0YW1wcyk7IiwiZXhwb3J0IGNvbnN0IGVwaXNvZGVzOiBFcGlzb2RlW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0zLFxyXG4gICAgICAgIHRpdGxlOiBcIkZvbGdlIDMgKGZlYXQuIFRlc3QpXCIsXHJcbiAgICAgICAgc2hvcnRfdGl0bGU6IFwiRm9sZ2UgM1wiLFxyXG4gICAgICAgIHNob3J0X3N1YnRpdGxlOiBcImZlYXQuIFRlc3RcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVybyBlb3MgZXQgYWNjdXNhbSBldCBqdXN0byBkdW8gZG9sb3JlcyBldCBlYSByZWJ1bS4gU3RldCBjbGl0YSBrYXNkIGd1YmVyZ3Jlbiwgbm8gc2VhIHRha2ltYXRhIHNhbmN0dXMgZXN0IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LmAsXHJcbiAgICAgICAgZGF0ZTogXCIwMSBKYW51YXIgMjAwMFwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJ3ZWJwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0yLFxyXG4gICAgICAgIHRpdGxlOiBcIkZvbGdlIDIgKGZlYXQuIFRlc3QpXCIsXHJcbiAgICAgICAgc2hvcnRfdGl0bGU6IFwiRm9sZ2UgMlwiLFxyXG4gICAgICAgIHNob3J0X3N1YnRpdGxlOiBcImZlYXQuIFRlc3RcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVybyBlb3MgZXQgYWNjdXNhbSBldCBqdXN0byBkdW8gZG9sb3JlcyBldCBlYSByZWJ1bS4gU3RldCBjbGl0YSBrYXNkIGd1YmVyZ3Jlbiwgbm8gc2VhIHRha2ltYXRhIHNhbmN0dXMgZXN0IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LmAsXHJcbiAgICAgICAgZGF0ZTogXCIwMSBKYW51YXIgMjAwMFwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJ3ZWJwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0xLFxyXG4gICAgICAgIHRpdGxlOiBcIkZvbGdlIDEgKGZlYXQuIFRlc3QpXCIsXHJcbiAgICAgICAgc2hvcnRfdGl0bGU6IFwiRm9sZ2UgMVwiLFxyXG4gICAgICAgIHNob3J0X3N1YnRpdGxlOiBcImZlYXQuIFRlc3RcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVybyBlb3MgZXQgYWNjdXNhbSBldCBqdXN0byBkdW8gZG9sb3JlcyBldCBlYSByZWJ1bS4gU3RldCBjbGl0YSBrYXNkIGd1YmVyZ3Jlbiwgbm8gc2VhIHRha2ltYXRhIHNhbmN0dXMgZXN0IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LmAsXHJcbiAgICAgICAgZGF0ZTogXCIwMSBKYW51YXIgMjAwMFwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJqcGdcIlxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQgeyBjb21wYXJlQnlUaW1lc3RhbXBzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2xvc3Nhcnk6IEdsb3NzYXJ5RW50cnlbXSA9IChbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0zLFxyXG4gICAgICAgIHRpdGxlOiBcIkdsb3NhcnkgRW50cnkgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LUdsb3NzYXJ5LUVpbnRyYWcuXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAxOjAwOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMjowMDowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTIsIHRpbWU6IFwiMDM6MDA6MDBcIiB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sICAgXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0yLFxyXG4gICAgICAgIHRpdGxlOiBcIkdsb3NhcnkgRW50cnkgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LUdsb3NzYXJ5LUVpbnRyYWcuXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAxOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMDowMjowMFwiIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogLTEsXHJcbiAgICAgICAgdGl0bGU6IFwiR2xvc2FyeSBFbnRyeSAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QtR2xvc3NhcnktRWludHJhZy5cIixcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDA6MDFcIiB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbl0gc2F0aXNmaWVzIEdsb3NzYXJ5RW50cnlbXSkuc29ydChjb21wYXJlQnlUaW1lc3RhbXBzKTsiLCJpbXBvcnQgeyBjb21wYXJlUGVyc29uIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcGVvcGxlOiBQZXJzb25bXSA9IChbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0zLFxyXG4gICAgICAgIG5hbWU6IFwiUGVyc29uIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW5lIFRlc3QtUGVyc29uLlwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJ3ZWJwXCIsXHJcbiAgICAgICAgY2hhcmFjdGVyaXN0aWNzOiBbXHJcbiAgICAgICAgICAgIFtcIk1lcmttYWwgMVwiLCB7ZXBpc29kZTogLTEsIHRpbWU6IFwiMDE6MDA6MDBcIn1dLFxyXG4gICAgICAgICAgICBbXCJNZXJrbWFsIDJcIiwge2VwaXNvZGU6IC0yLCB0aW1lOiBcIjAyOjAwOjAwXCJ9XSxcclxuICAgICAgICAgICAgW1wiTWVya21hbCAzXCIsIHtlcGlzb2RlOiAtMywgdGltZTogXCIwMzowMDowMFwifV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDE6MDA6MDBcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0yLCB0aW1lOiBcIjAyOjAwOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMywgdGltZTogXCIwMzowMDowMFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0yLFxyXG4gICAgICAgIG5hbWU6IFwiUGVyc29uIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW5lIFRlc3QtUGVyc29uLlwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJ3ZWJwXCIsXHJcbiAgICAgICAgY2hhcmFjdGVyaXN0aWNzOiBbXHJcbiAgICAgICAgICAgIFtcIk1lcmttYWwgMVwiLCB7ZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDE6MDBcIn1dLFxyXG4gICAgICAgICAgICBbXCJNZXJrbWFsIDJcIiwge2VwaXNvZGU6IC0yLCB0aW1lOiBcIjAwOjAyOjAwXCJ9XSxcclxuICAgICAgICAgICAgW1wiTWVya21hbCAzXCIsIHtlcGlzb2RlOiAtMywgdGltZTogXCIwMDowMzowMFwifV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTIsIHRpbWU6IFwiMDA6MDI6MDBcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMSxcclxuICAgICAgICBuYW1lOiBcIlBlcnNvbiAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluZSBUZXN0LVBlcnNvbi5cIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwianBnXCIsXHJcbiAgICAgICAgY2hhcmFjdGVyaXN0aWNzOiBbXHJcbiAgICAgICAgICAgIFtcIk1lcmttYWwgMVwiLCB7ZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDA6MDFcIn1dLFxyXG4gICAgICAgICAgICBbXCJNZXJrbWFsIDJcIiwge2VwaXNvZGU6IC0yLCB0aW1lOiBcIjAwOjAwOjAyXCJ9XSxcclxuICAgICAgICAgICAgW1wiTWVya21hbCAzXCIsIHtlcGlzb2RlOiAtMywgdGltZTogXCIwMDowMDowM1wifV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDA6MDFcIiB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXSBzYXRpc2ZpZXMgUGVyc29uW10pLnNvcnQoY29tcGFyZVBlcnNvbik7XHJcblxyXG4iLCJpbXBvcnQgeyBjb21wYXJlQnlUaW1lc3RhbXBzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVzdGF1cmFudHM6IFJlc3RhdXJhbnRbXSA9IChbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0zLFxyXG4gICAgICAgIG5hbWU6IFwiUmVzdGF1cmFudCAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QtUmVzdGF1cmFudC5cIixcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDE6MDA6MDBcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0yLCB0aW1lOiBcIjAyOjAwOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMywgdGltZTogXCIwMzowMDowMFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbWdGb3JtYXQ6IFwid2VicFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMixcclxuICAgICAgICBuYW1lOiBcIlJlc3RhdXJhbnQgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LVJlc3RhdXJhbnQuXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAxOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMDowMjowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTMsIHRpbWU6IFwiMDA6MDM6MDBcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW1nRm9ybWF0OiBcIndlYnBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogLTEsXHJcbiAgICAgICAgbmFtZTogXCJSZXN0YXVyYW50IDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdC1SZXN0YXVyYW50LlwiLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IFtcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMSwgdGltZTogXCIwMDowMDowMVwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTIsIHRpbWU6IFwiMDA6MDA6MDJcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0zLCB0aW1lOiBcIjAwOjAwOjAzXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJqcGdcIlxyXG4gICAgfSxcclxuXSBzYXRpc2ZpZXMgUmVzdGF1cmFudFtdKS5zb3J0KGNvbXBhcmVCeVRpbWVzdGFtcHMpOyIsImltcG9ydCB7IGNvbXBhcmVCeVRpbWVzdGFtcHMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzcG9uc29yczogU3BvbnNvcltdID0gKFtcclxuICAgIHtcclxuICAgICAgICBpZDogLTMsXHJcbiAgICAgICAgbmFtZTogXCJTcG9uc29yIDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdC1TcG9uc29yLlwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJ3ZWJwXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAxOjAwOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMjowMDowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTMsIHRpbWU6IFwiMDM6MDA6MDBcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMixcclxuICAgICAgICBuYW1lOiBcIlNwb25zb3IgMlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LVNwb25zb3IuXCIsXHJcbiAgICAgICAgaW1nRm9ybWF0OiBcIndlYnBcIixcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDE6MDBcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0yLCB0aW1lOiBcIjAwOjAyOjAwXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogLTEsXHJcbiAgICAgICAgbmFtZTogXCJTcG9uc29yIDFcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdC1TcG9uc29yLlwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJqcGdcIixcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDA6MDFcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5dIHNhdGlzZmllcyBTcG9uc29yW10pLnNvcnQoY29tcGFyZUJ5VGltZXN0YW1wcyk7IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjY29yZGlvbkl0ZW0oYWNjb3JkaW9uX25hbWU6IHN0cmluZywgaWQ6IG51bWJlciwgdGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZyk6IE5vZGUge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBhY2NvcmRpb24taXRlbWAsICdib3JkZXInLCBcImJvcmRlci0yXCIsIFwiYm9yZGVyLXdhcm5pbmdcIik7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCIgaWQ9XCJnbG9zc2FyeV9pdGVtXyR7aWR9XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhY2NvcmRpb24tYnV0dG9uIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjZ2xvc3NhcnlfaXRlbV8ke2lkfV9jb250ZW50XCIgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiZ2xvc3NhcnlfaXRlbV8ke2lkfV9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtY2VudGVyIHctMTAwXCI+JHt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBpZD1cImdsb3NzYXJ5X2l0ZW1fJHtpZH1fY29udGVudFwiIGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZ2xvc3NhcnlfaXRlbV8ke2lkfVwiIGRhdGEtYnMtcGFyZW50PVwiI2dsb3NzYXJ5X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAke2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufSIsImNvbnNvbGUubG9nKFwiY2FyZF90ZW1wbGF0ZS50cyBsb2FkZWRcIik7XHJcblxyXG5jb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZChpbmZvOiB7Y29udGVudF90eXBlOiBzdHJpbmcsIGltZ19mb2xkZXI6IHN0cmluZywgaW1nX2FsdDogc3RyaW5nLCBpZDogbnVtYmVyLCBjYXJkX3RpdGxlOiBzdHJpbmcsIGNhcmRfc3VidGl0bGU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgaW1nX2Zvcm1hdDogSW1hZ2VGb3JtYXQsIGFkZGl0aW9uYWxfaW5mbzogUmVjb3JkPHN0cmluZywgc3RyaW5nfHN0cmluZ1tdPn0pOiBOb2RlIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlIENhcmRcIiwgaW5mby5jb250ZW50X3R5cGUsIGluZm8uY2FyZF90aXRsZSwgaW5mby5pZCwgaW5mby5pbWdfZm9ybWF0KTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbCcpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYmctbGlnaHQgYm9yZGVyLXdhcm5pbmcgYm9yZGVyLTMgaC0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzLyR7aW5mby5pbWdfZm9sZGVyfS8ke2luZm8uY29udGVudF90eXBlfV8ke2luZm8uaWR9LiR7aW5mby5pbWdfZm9ybWF0fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWctdG9wIHAtMSByb3VuZGVkLTNcIiBhbHQ9XCIke2luZm8uaW1nX2FsdH0gJHtpbmZvLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke2luZm8uY2FyZF90aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPiR7aW5mby5jYXJkX3N1YnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLWF1dG9cIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIjJHtpbmZvLmNvbnRlbnRfdHlwZX1fJHtpbmZvLmlkfV9tb2RhbFwiPkluZm9zPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgaWQ9XCIke2luZm8uY29udGVudF90eXBlfV8ke2luZm8uaWR9X21vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cIiR7aW5mby5jb250ZW50X3R5cGV9XyR7aW5mby5pZH1fbW9kYWxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwteGwgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtdGl0bGUgdy0xMDBcIiBpZD1cIiR7aW5mby5jb250ZW50X3R5cGV9XyR7aW5mby5pZH1fbW9kYWxcIj4ke2luZm8udGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlXCIgZGF0YS1icy1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2NyZWF0ZUFkZGl0aW9uYWxJbmZvKGluZm8uYWRkaXRpb25hbF9pbmZvKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWRkaXRpb25hbEluZm8oaW5mbzogUmVjb3JkPHN0cmluZywgc3RyaW5nfHN0cmluZ1tdPik6IHN0cmluZyB7XHJcbiAgICBsZXQgYWRkaXRpb25hbF9pbmZvID0gXCJcIjtcclxuICAgIGZvciAoY29uc3QgW3RpdGxlLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaW5mbykpIHtcclxuICAgICAgICBsZXQgY29udGVudDogc3RyaW5nO1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gXCItXCJcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZih2YWx1ZSkgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gdmFsdWU7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29udGVudCA9IGxpc3RfdGVtcGxhdGUucmVwbGFjZSgne2NvbnRlbnR9JywgdmFsdWUubWFwKGl0ZW0gPT4gbGlzdF9pdGVtX3RlbXBsYXRlLnJlcGxhY2UoJ3tjb250ZW50fScsIGl0ZW0pKS5qb2luKFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvICs9IGFkZGl0aW9uYWxfaW5mb19pdGVtX3RlbXBsYXRlLnJlcGxhY2UoJ3t0aXRsZX0nLCB0aXRsZSkucmVwbGFjZSgne2NvbnRlbnR9JywgY29udGVudCk7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFkZGl0aW9uYWxfaW5mbztcclxufVxyXG5cclxuY29uc3QgYWRkaXRpb25hbF9pbmZvX2l0ZW1fdGVtcGxhdGUgPSBgPGRpdiBjbGFzcz0ncm91bmRlZC01IG0tMyBwLTEgYm9yZGVyIGJvcmRlci0yIGJvcmRlci13YXJuaW5nLXN1YnRsZSBiZy1saWdodCc+PGg1Pnt0aXRsZX08L2g1PjxwPntjb250ZW50fTwvcD48L2Rpdj5gXHJcbmNvbnN0IGxpc3RfdGVtcGxhdGU6IHN0cmluZyA9IGA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIiBzdHlsZT0nZGlzcGxheTppbmxpbmUtYmxvY2snPntjb250ZW50fTwvdWw+YFxyXG5jb25zdCBsaXN0X2l0ZW1fdGVtcGxhdGU6IHN0cmluZyA9IGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctdHJhbnNwYXJlbnRcIj57Y29udGVudH08L2xpPmA7IiwiaW1wb3J0IHsgZ2V0RXBpc29kZXMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL2NhcmRfdGVtcGxhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RHJpbmtUb0hUTUwoZHJpbms6IERyaW5rKTogTm9kZSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQ2FyZCh7XHJcbiAgICAgICAgY29udGVudF90eXBlOiBcImRyaW5rXCIsXHJcbiAgICAgICAgaW1nX2ZvbGRlcjogXCJkcmlua3NcIixcclxuICAgICAgICBpbWdfYWx0OiBcIlRyaW5rc3RvZmZcIixcclxuICAgICAgICBpZDogZHJpbmsuaWQsXHJcbiAgICAgICAgY2FyZF90aXRsZTogZHJpbmsubmFtZSxcclxuICAgICAgICBjYXJkX3N1YnRpdGxlOiBkcmluay5kZXNjcmlwdGlvbixcclxuICAgICAgICB0aXRsZTogZHJpbmsubmFtZSxcclxuICAgICAgICBpbWdfZm9ybWF0OiBkcmluay5pbWdGb3JtYXQsXHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiB7XHJcbiAgICAgICAgICAgIFwiQmVzY2hyZWlidW5nXCI6IGRyaW5rLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBcIlByZWlzXCI6IGRyaW5rLnByaWNlLFxyXG4gICAgICAgICAgICBcIkZvbGdlblwiOiBnZXRFcGlzb2RlcyhkcmluaylcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYm9lc3Rfb2ZzIH0gZnJvbSBcIi4uL2RhdGEvYm9lc3Rfb2ZzXCI7XHJcbmltcG9ydCB7IGRyaW5rcyB9IGZyb20gXCIuLi9kYXRhL2RyaW5rc1wiO1xyXG5pbXBvcnQgeyBwZW9wbGUgfSBmcm9tIFwiLi4vZGF0YS9wZW9wbGVcIjtcclxuaW1wb3J0IHsgc3BvbnNvcnMgfSBmcm9tIFwiLi4vZGF0YS9zcG9uc29yc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY2FyZF90ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRFcGlzb2RlVG9IVE1MKGVwaXNvZGU6IEVwaXNvZGUpOiBOb2RlIHtcclxuICAgIGNvbnN0IGJvZXN0X29mID0gYm9lc3Rfb2ZzLmZpbmQoYm9lc3Rfb2YgPT4gYm9lc3Rfb2YudGltZXN0YW1wLmVwaXNvZGUgPT0gZXBpc29kZS5pZCk7XHJcbiAgICByZXR1cm4gY3JlYXRlQ2FyZCh7XHJcbiAgICAgICAgY29udGVudF90eXBlOiBcImVwaXNvZGVcIixcclxuICAgICAgICBpbWdfZm9sZGVyOiBcImVwaXNvZGVzXCIsXHJcbiAgICAgICAgaW1nX2FsdDogXCJGb2xnZVwiLFxyXG4gICAgICAgIGlkOiBlcGlzb2RlLmlkLFxyXG4gICAgICAgIGNhcmRfdGl0bGU6IGVwaXNvZGUuc2hvcnRfdGl0bGUsXHJcbiAgICAgICAgY2FyZF9zdWJ0aXRsZTogZXBpc29kZS5zaG9ydF9zdWJ0aXRsZSxcclxuICAgICAgICB0aXRsZTogZXBpc29kZS50aXRsZSxcclxuICAgICAgICBpbWdfZm9ybWF0OiBlcGlzb2RlLmltZ0Zvcm1hdCxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHtcclxuICAgICAgICAgICAgXCJHw6RzdGVcIjogZ2V0RWxlbWVudHNPZkVwaXNvZGUocGVvcGxlLmZpbHRlcihwZXJzb24gPT4gIXBlcnNvbi5pc0hvc3QpKS5tYXAoIGd1ZXN0ID0+IGd1ZXN0Lm5hbWUpLFxyXG4gICAgICAgICAgICBcIlRyaW5rc3RvZmZcIjogZ2V0RWxlbWVudHNPZkVwaXNvZGUoZHJpbmtzKS5tYXAoZHJpbmsgPT4gZHJpbmsubmFtZSksXHJcbiAgICAgICAgICAgIFwiU3BvbnNvcmVuXCI6IGdldEVsZW1lbnRzT2ZFcGlzb2RlKHNwb25zb3JzKS5tYXAoc3BvbnNvciA9PiBzcG9uc29yLm5hbWUpLFxyXG4gICAgICAgICAgICBcIkRhdHVtXCI6IGVwaXNvZGUuZGF0ZSxcclxuICAgICAgICAgICAgXCJCZXNjaHJlaWJ1bmdcIjogZXBpc29kZS5kZXNjcmlwdGlvbixcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50c09mRXBpc29kZTxUIGV4dGVuZHMgeyB0aW1lc3RhbXBzOiBUaW1lc3RhbXBbXTsgfT4oZWxlbWVudHM6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWQ6IFRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbWVzdGFtcCBvZiBlbGVtZW50LnRpbWVzdGFtcHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lc3RhbXAuZXBpc29kZSA9PSBlcGlzb2RlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXJlZC5pbmNsdWRlcyhlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZUFjY29yZGlvbkl0ZW0gfSBmcm9tIFwiLi9hY2NvcmRpb25faXRlbV90ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRHbG9zc2FyeUVudHJ5VG9IVE1MKGdsb3NzYXJ5RW50cnk6IEdsb3NzYXJ5RW50cnkpOiBOb2RlIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2NvcmRpb25JdGVtKFwiZ2xvc3NhcnlcIiwgZ2xvc3NhcnlFbnRyeS5pZCwgZ2xvc3NhcnlFbnRyeS50aXRsZSwgZ2xvc3NhcnlFbnRyeS5kZXNjcmlwdGlvbik7XHJcbn0iLCJpbXBvcnQgeyBnZXRFcGlzb2RlcyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY2FyZF90ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRQZXJzb25Ub0hUTUwocGVyc29uOiBQZXJzb24pOiBOb2RlIHtcclxuICAgIHJldHVybiBjcmVhdGVDYXJkKHtcclxuICAgICAgICBjb250ZW50X3R5cGU6IFwicGVyc29uXCIsXHJcbiAgICAgICAgaW1nX2ZvbGRlcjogXCJwZW9wbGVcIixcclxuICAgICAgICBpbWdfYWx0OiBcIlBlcnNvblwiLFxyXG4gICAgICAgIGlkOiBwZXJzb24uaWQsXHJcbiAgICAgICAgY2FyZF90aXRsZTogcGVyc29uLm5hbWUsXHJcbiAgICAgICAgY2FyZF9zdWJ0aXRsZTogcGVyc29uLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRpdGxlOiBwZXJzb24ubmFtZSxcclxuICAgICAgICBpbWdfZm9ybWF0OiBwZXJzb24uaW1nRm9ybWF0LFxyXG4gICAgICAgIGFkZGl0aW9uYWxfaW5mbzoge1xyXG4gICAgICAgICAgICBcIkJlc2NocmVpYnVuZ1wiOiBwZXJzb24uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIFwiRXBpc29kZW5cIjogZ2V0RXBpc29kZXMocGVyc29uKSxcclxuICAgICAgICAgICAgXCJNZXJrbWFsZVwiOiBwZXJzb24uY2hhcmFjdGVyaXN0aWNzLm1hcCgoW2NoYXJhY3RlcmlzdGljLCBfXSkgPT4gY2hhcmFjdGVyaXN0aWMpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdldEVwaXNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jYXJkX3RlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJlc3RhdXJhbnRUb0hUTUwocmVzdGF1cmFudDogUmVzdGF1cmFudCk6IE5vZGUge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUNhcmQoe1xyXG4gICAgICAgIGNvbnRlbnRfdHlwZTogXCJyZXN0YXVyYW50XCIsXHJcbiAgICAgICAgaW1nX2ZvbGRlcjogXCJyZXN0YXVyYW50c1wiLFxyXG4gICAgICAgIGltZ19hbHQ6IFwiUmVzdGF1cmFudFwiLFxyXG4gICAgICAgIGlkOiByZXN0YXVyYW50LmlkLFxyXG4gICAgICAgIGNhcmRfdGl0bGU6IHJlc3RhdXJhbnQubmFtZSxcclxuICAgICAgICBjYXJkX3N1YnRpdGxlOiByZXN0YXVyYW50LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRpdGxlOiByZXN0YXVyYW50Lm5hbWUsXHJcbiAgICAgICAgaW1nX2Zvcm1hdDogcmVzdGF1cmFudC5pbWdGb3JtYXQsXHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiB7XHJcbiAgICAgICAgICAgIFwiQmVzY2hyZWlidW5nXCI6IHJlc3RhdXJhbnQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIFwiRm9sZ2VuXCI6IGdldEVwaXNvZGVzKHJlc3RhdXJhbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdldEVwaXNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jYXJkX3RlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFNwb25zb3JUb0hUTUwoc3BvbnNvcjogU3BvbnNvcik6IE5vZGUge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUNhcmQoe1xyXG4gICAgICAgIGNvbnRlbnRfdHlwZTogXCJzcG9uc29yXCIsXHJcbiAgICAgICAgaW1nX2ZvbGRlcjogXCJzcG9uc29yc1wiLFxyXG4gICAgICAgIGltZ19hbHQ6IFwiU3BvbnNvclwiLFxyXG4gICAgICAgIGlkOiBzcG9uc29yLmlkLFxyXG4gICAgICAgIGNhcmRfdGl0bGU6IHNwb25zb3IubmFtZSxcclxuICAgICAgICBjYXJkX3N1YnRpdGxlOiBzcG9uc29yLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRpdGxlOiBzcG9uc29yLm5hbWUsXHJcbiAgICAgICAgaW1nX2Zvcm1hdDogc3BvbnNvci5pbWdGb3JtYXQsXHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiB7XHJcbiAgICAgICAgICAgIFwiQmVzY2hyZWlidW5nXCI6IHNwb25zb3IuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIFwiRm9sZ2VuXCI6IGdldEVwaXNvZGVzKHNwb25zb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBlcGlzb2RlcyB9IGZyb20gXCIuL2RhdGEvZXBpc29kZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIGFsbCBlcGlzb2RlcyBvZiBhbiBpdGVtLlxyXG4gKiBAcGFyYW0gZWxlbWVudCBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXBpc29kZXMoZWxlbWVudDoge3RpbWVzdGFtcHM6IFRpbWVzdGFtcFtdfSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBlcGlzb2Rlc1xyXG4gICAgICAgIC5maWx0ZXIoZXBpc29kZSA9PiBlbGVtZW50LnRpbWVzdGFtcHMuZmluZCh0aW1lc3RhbXAgPT4gZXBpc29kZS5pZCA9PSB0aW1lc3RhbXAuZXBpc29kZSkpXHJcbiAgICAgICAgLm1hcChlcGlzb2RlID0+IGVwaXNvZGUuc2hvcnRfdGl0bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdXNlZCBmb3Igc29ydGluZyBpdGVtcy5cclxuICogXHJcbiAqIDEuIFNvcnRzIGJ5IGxhdGVzdCBlcGlzb2RlLlxyXG4gKiAyLiBGYWxscyBiYWNrIHRvIHdobyBoYXMgbGVzcyBudW1iZXIgb2YgZXBpc29kZXMuXHJcbiAqIEBwYXJhbSBhIFRoZSBmaXJzdCBpdGVtLlxyXG4gKiBAcGFyYW0gYiBUaGUgc2Vjb25kIGl0ZW0uXHJcbiAqIEByZXR1cm5zIE51bWJlciByZXByZXNlbnRpbmcgdGhlIGRpZmZlcmVuY2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUJ5VGltZXN0YW1wcyhhOiB7dGltZXN0YW1wczogVGltZXN0YW1wW119LCBiOiB7dGltZXN0YW1wczogVGltZXN0YW1wW119KTogbnVtYmVyIHtcclxuICAgIC8vIE1hdGguYWJzIGlzIHVzZWQgZm9yIHRlc3RpbmcgZXBpc29kZXMgKHdpdGggbmVnYXRpdmUgaWQpXHJcbiAgICBjb25zdCBhRXBpc29kZXMgPSBhLnRpbWVzdGFtcHMubWFwKGVwaXNvZGUgPT4gTWF0aC5hYnMoZXBpc29kZS5lcGlzb2RlKSk7XHJcbiAgICBjb25zdCBiRXBpc29kZXMgPSBiLnRpbWVzdGFtcHMubWFwKGVwaXNvZGUgPT4gTWF0aC5hYnMoZXBpc29kZS5lcGlzb2RlKSk7XHJcbiAgICBjb25zdCBhTGF0ZXN0RXBpc29kZSA9IE1hdGgubWF4KC4uLmFFcGlzb2Rlcyk7XHJcbiAgICBjb25zdCBiTGF0ZXN0RXBpc29kZSA9IE1hdGgubWF4KC4uLmJFcGlzb2Rlcyk7XHJcbiAgICBpZiAoYkxhdGVzdEVwaXNvZGUgIT0gYUxhdGVzdEVwaXNvZGUpIHtcclxuICAgICAgICByZXR1cm4gYkxhdGVzdEVwaXNvZGUgLSBhTGF0ZXN0RXBpc29kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIC0oYkVwaXNvZGVzLmxlbmd0aCAtIGFFcGlzb2Rlcy5sZW5ndGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdXNlZCBmb3Igc29ydGluZyBpdGVtcyBieSB0aGVpciBsYXRlc3QgZXBpc29kZS5cclxuICogQHBhcmFtIGEgVGhlIGZpcnN0IGl0ZW0uXHJcbiAqIEBwYXJhbSBiIFRoZSBzZWNvbmQgaXRlbS5cclxuICogQHJldHVybnMgTnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZGlmZmVyZW5jZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQnlUaW1lc3RhbXAoYToge3RpbWVzdGFtcDogVGltZXN0YW1wfSwgYjoge3RpbWVzdGFtcDogVGltZXN0YW1wfSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMoYi50aW1lc3RhbXAuZXBpc29kZSkgLSBNYXRoLmFicyhhLnRpbWVzdGFtcC5lcGlzb2RlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFB1dHMgSWxvbmEgYW5kIFBldGVyIGF0IHRoZSBzdGFydCBhbmQgdGhlbiBzb3J0cyBieSBsYXRlc3QgZXBpc29kZS5cclxuICogQHBhcmFtIGEgVGhlIGZpcnN0IHBlcnNvbi5cclxuICogQHBhcmFtIGIgVGhlIHNlY29uZCBwZXJzb24uXHJcbiAqIEByZXR1cm5zIE51bWJlciByZXByZXNlbnRpbmcgdGhlIGRpZmZlcmVuY2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVBlcnNvbihhOiBQZXJzb24sIGI6IFBlcnNvbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gIChhLmlzSG9zdCB8fCBiLmlzSG9zdCkgPyBiLmlkIC0gYS5pZCA6IGNvbXBhcmVCeVRpbWVzdGFtcHMoYSxiKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZHJpbmtzIH0gZnJvbSBcIi4vZGF0YS9kcmlua3NcIjtcclxuaW1wb3J0IHsgZXBpc29kZXMgfSBmcm9tIFwiLi9kYXRhL2VwaXNvZGVzXCI7XHJcbmltcG9ydCB7IHBlb3BsZSB9IGZyb20gXCIuL2RhdGEvcGVvcGxlXCI7XHJcbmltcG9ydCB7IGNvbnZlcnREcmlua1RvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9kcmlua190ZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0UGVyc29uVG9IVE1MIH0gZnJvbSBcIi4vdGVtcGxhdGVzL3BlcnNvbl90ZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RXBpc29kZVRvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9lcGlzb2RlX3RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IHJlc3RhdXJhbnRzIH0gZnJvbSBcIi4vZGF0YS9yZXN0YXVyYW50c1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0UmVzdGF1cmFudFRvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9yZXN0YXVyYW50X3RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IHNwb25zb3JzIH0gZnJvbSBcIi4vZGF0YS9zcG9uc29yc1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0U3BvbnNvclRvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9zcG9uc29yX3RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IGdsb3NzYXJ5IH0gZnJvbSBcIi4vZGF0YS9nbG9zc2FyeVwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0R2xvc3NhcnlFbnRyeVRvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9nbG9zc2FyeV9lbnRyeV90ZW1wbGF0ZVwiO1xyXG5cclxuY29uc29sZS5sb2coXCJpbmRleC50cyBsb2FkZWRcIik7XHJcblxyXG4vLyBTRVRUSU5HU1xyXG5jb25zdCBURVNUSU5HOiBib29sZWFuID0gdHJ1ZTtcclxuY29uc3Qgc2hvdWxkQmVEaXNwbGF5ZWQgPSAoZWxlbWVudDoge2lkOiBudW1iZXJ9KSA9PiBURVNUSU5HID8gZWxlbWVudC5pZCA8IDAgOiBlbGVtZW50LmlkID49IDA7XHJcblxyXG4vLyBFUElTT0RFU1xyXG5jb25zdCBlcGlzb2RlX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXBpc29kZXNfY29udGVudFwiKTtcclxuY29uc3QgZXBpc29kZV9lbGVtZW50cyA9IGVwaXNvZGVzLmZpbHRlcihzaG91bGRCZURpc3BsYXllZCkubWFwKGNvbnZlcnRFcGlzb2RlVG9IVE1MKVxyXG5lcGlzb2RlX2NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oLi4uZXBpc29kZV9lbGVtZW50cyk7XHJcblxyXG4vLyBQRU9QTEUgLyBST0VTVElFU1xyXG5jb25zdCBwZW9wbGVfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvZXN0aWVzX2NvbnRlbnQnKTtcclxuY29uc3QgcGVyc29uX2VsZW1lbnRzID0gcGVvcGxlLmZpbHRlcihzaG91bGRCZURpc3BsYXllZCkubWFwKGNvbnZlcnRQZXJzb25Ub0hUTUwpXHJcbnBlb3BsZV9jb250YWluZXIucmVwbGFjZUNoaWxkcmVuKC4uLnBlcnNvbl9lbGVtZW50cyk7XHJcblxyXG4vLyBEUklOS1MgLyBUcmlua3N0b2ZmXHJcbmNvbnN0IGRyaW5rc19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyaW5rc19jb250ZW50XCIpO1xyXG5jb25zdCBkcmlua19lbGVtZW50cyA9IGRyaW5rcy5maWx0ZXIoc2hvdWxkQmVEaXNwbGF5ZWQpLm1hcChjb252ZXJ0RHJpbmtUb0hUTUwpO1xyXG5kcmlua3NfY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbiguLi5kcmlua19lbGVtZW50cyk7XHJcblxyXG4vLyBSZXN0YXVyYW50c1xyXG5jb25zdCByZXN0YXVyYW50c19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhdXJhbnRzX2NvbnRlbnRcIik7XHJcbmNvbnN0IHJlc3RhdXJhbnRfZWxlbWVudHMgPSByZXN0YXVyYW50cy5maWx0ZXIoc2hvdWxkQmVEaXNwbGF5ZWQpLm1hcChjb252ZXJ0UmVzdGF1cmFudFRvSFRNTCk7XHJcbnJlc3RhdXJhbnRzX2NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oLi4ucmVzdGF1cmFudF9lbGVtZW50cyk7XHJcblxyXG4vLyBTcG9uc29ycyAvIFNwb25zb3JlblxyXG5jb25zdCBzcG9uc29yc19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwb25zb3JzX2NvbnRlbnRcIik7XHJcbmNvbnN0IHNwb25zb3JzX2VsZW1lbnRzID0gc3BvbnNvcnMuZmlsdGVyKHNob3VsZEJlRGlzcGxheWVkKS5tYXAoY29udmVydFNwb25zb3JUb0hUTUwpO1xyXG5zcG9uc29yc19jb250YWluZXIucmVwbGFjZUNoaWxkcmVuKC4uLnNwb25zb3JzX2VsZW1lbnRzKTtcclxuXHJcbi8vIEdsb3NzYXJ5IC8gTGVocnN0b2ZmXHJcbmNvbnN0IGdsb3NzYXJ5X2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xvc3NhcnlfY29udGVudFwiKTtcclxuY29uc3QgZ2xvc3NhcnlfZWxlbWVudHMgPSBnbG9zc2FyeS5maWx0ZXIoc2hvdWxkQmVEaXNwbGF5ZWQpLm1hcChjb252ZXJ0R2xvc3NhcnlFbnRyeVRvSFRNTCk7XHJcbmdsb3NzYXJ5X2NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oLi4uZ2xvc3NhcnlfZWxlbWVudHMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
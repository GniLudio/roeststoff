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
    var html_text = accordion_item_template
        .replace(new RegExp('{id}', 'g'), id.toFixed())
        .replace('{title}', title)
        .replace('{description}', description);
    return new DOMParser().parseFromString(html_text, "text/html").body.firstChild;
}
var accordion_item_template = "\n    <div class=\"accordion-item border border-2 border-warning\">\n        <h2 class=\"accordion-header\" id=\"glossary_item_{id}\">\n            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#glossary_item_{id}_content\" aria-expanded=\"true\" aria-controls=\"glossary_item_{id}_content\">\n                <span class=\"text-center w-100\">{title}</span>\n            </button>\n        </h2>\n        <div id=\"glossary_item_{id}_content\" class=\"accordion-collapse collapse\" aria-labelledby=\"glossary_item_{id}\" data-bs-parent=\"#glossary_content\">\n            <div class=\"accordion-body\">\n                {description}\n            </div>\n        </div>\n    </div>";


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
    var html_text = card_template;
    html_text = html_text.replace(new RegExp('{id}', 'g'), info.id.toFixed())
        .replace(new RegExp('{content_type}', 'g'), info.content_type)
        .replace('{img_folder}', info.img_folder)
        .replace('{content_alt}', info.img_alt)
        .replace('{img_format}', info.img_format)
        .replace('{card_title}', info.card_title)
        .replace('{card_subtitle}', info.card_subtitle)
        .replace('{title}', info.title)
        .replace('{additional_info}', createAdditionalInfo(info.additional_info));
    return parser.parseFromString(html_text, "text/html").body.firstChild;
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
var card_template = "\n    <div class=\"col\">\n        <div class=\"card h-100 bg-light border-warning border-3\">\n            <img src=\"images/{img_folder}/{content_type}_{id}.{img_format}\" class=\"card-img-top p-1 rounded-3\" alt=\"{content_alt} {id}\">\n            <div class=\"card-body d-flex flex-column\">\n                <div class=\"m-auto\">\n                    <h5 class=\"card-title\">{card_title}</h5>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">{card_subtitle}</h6>\n                </div>\n                <a href=\"#\" class=\"btn btn-primary m-auto\" data-bs-toggle=\"modal\" data-bs-target=\"#{content_type}_{id}_modal\">Infos</a>\n            </div>\n        </div>\n        <div class=\"modal fade\" id=\"{content_type}_{id}_modal\" tabindex=\"-1\" aria-labelledby=\"{content_type}_{id}_modal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header text-center\">\n                        <h2 class=\"modal-title w-100\" id=\"{content_type}_{id}_modal\">{title}</h1>\n                        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                    </div>\n                    <div class=\"modal-body\">\n                        {additional_info}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxtRkFBdUIsQ0FBQyxDQUFDO0FBQy9GLHFCQUFxQixDQUFDLGVBQWUsT0FBckMscUJBQXFCLEVBQW9CLG1CQUFtQixFQUFFO0FBRTlELHVCQUF1QjtBQUN2QixJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUN2RSxJQUFNLGlCQUFpQixHQUFHLG9EQUFRLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLDZFQUFvQixDQUFDLENBQUM7QUFDdkYsa0JBQWtCLENBQUMsZUFBZSxPQUFsQyxrQkFBa0IsRUFBb0IsaUJBQWlCLEVBQUU7QUFFekQsdUJBQXVCO0FBQ3ZCLElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3ZFLElBQU0saUJBQWlCLEdBQUcscURBQVEsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLENBQUMsMkZBQTBCLENBQUMsQ0FBQztBQUM3RixrQkFBa0IsQ0FBQyxlQUFlLE9BQWxDLGtCQUFrQixFQUFvQixpQkFBaUIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvZGF0YS9ib2VzdF9vZnMudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy9kYXRhL2RyaW5rcy50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL2RhdGEvZXBpc29kZXMudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy9kYXRhL2dsb3NzYXJ5LnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvZGF0YS9wZW9wbGUudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy9kYXRhL3Jlc3RhdXJhbnRzLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvZGF0YS9zcG9uc29ycy50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL3RlbXBsYXRlcy9hY2NvcmRpb25faXRlbV90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL3RlbXBsYXRlcy9jYXJkX3RlbXBsYXRlLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvdGVtcGxhdGVzL2RyaW5rX3RlbXBsYXRlLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvdGVtcGxhdGVzL2VwaXNvZGVfdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy90ZW1wbGF0ZXMvZ2xvc3NhcnlfZW50cnlfdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy90ZW1wbGF0ZXMvcGVyc29uX3RlbXBsYXRlLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvdGVtcGxhdGVzL3Jlc3RhdXJhbnRfdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi8uL3NyYy90ZW1wbGF0ZXMvc3BvbnNvcl90ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvZXN0c3RvZmYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBhcmVCeVRpbWVzdGFtcCB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvZXN0X29mczogQm9lc3RPZltdID0gKFtcclxuICAgIHtcclxuICAgICAgICBpZDogLTEsXHJcbiAgICAgICAgdGl0bGU6IFwiQsO2c3QtT2YgMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0IELDtnN0LU9mLlwiLFxyXG4gICAgICAgIHRpbWVzdGFtcDoge1xyXG4gICAgICAgICAgICBlcGlzb2RlOiAtMSxcclxuICAgICAgICAgICAgdGltZTogXCIwMDowMDowMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmFua2luZ3M6IFtcclxuICAgICAgICAgICAgW1wiMS4gUGxhdHogKFBldGVyKVwiLCBcIjIuIFBsYXR6IChQZXRlcilcIiwgXCIzLiBQbGF0eiAoUGV0ZXIpXCIsIFwiNC4gUGxhdHogKFBldGVyKVwiLCBcIjUuIFBsYXR6IChQZXRlcilcIl0sXHJcbiAgICAgICAgICAgIFtcIjEuIFBsYXR6IChJbG9uYSlcIiwgXCIyLiBQbGF0eiAoSWxvbmEpXCIsIFwiMy4gUGxhdHogKElsb25hKVwiLCBcIjQuIFBsYXR6IChJbG9uYSlcIiwgXCI1LiBQbGF0eiAoSWxvbmEpXCJdLFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0yLFxyXG4gICAgICAgIHRpdGxlOiBcIkLDtnN0LU9mIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdCBCw7ZzdC1PZi5cIixcclxuICAgICAgICB0aW1lc3RhbXA6IHtcclxuICAgICAgICAgICAgZXBpc29kZTogLTIsXHJcbiAgICAgICAgICAgIHRpbWU6IFwiMDA6MDI6MDBcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXHJcbiAgICAgICAgICAgIFtcIjEuIFBsYXR6IChQZXRlcilcIiwgXCIyLiBQbGF0eiAoUGV0ZXIpXCIsIFwiMy4gUGxhdHogKFBldGVyKVwiLCBcIjQuIFBsYXR6IChQZXRlcilcIiwgXCI1LiBQbGF0eiAoUGV0ZXIpXCJdLFxyXG4gICAgICAgICAgICBbXCIxLiBQbGF0eiAoSWxvbmEpXCIsIFwiMi4gUGxhdHogKElsb25hKVwiLCBcIjMuIFBsYXR6IChJbG9uYSlcIiwgXCI0LiBQbGF0eiAoSWxvbmEpXCIsIFwiNS4gUGxhdHogKElsb25hKVwiXSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMyxcclxuICAgICAgICB0aXRsZTogXCJCw7ZzdC1PZiAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QgQsO2c3QtT2YuXCIsXHJcbiAgICAgICAgdGltZXN0YW1wOiB7XHJcbiAgICAgICAgICAgIGVwaXNvZGU6IC0zLFxyXG4gICAgICAgICAgICB0aW1lOiBcIjAzOjAwOjAwXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByYW5raW5nczogW1xyXG4gICAgICAgICAgICBbXCIxLiBQbGF0eiAoUGV0ZXIpXCIsIFwiMi4gUGxhdHogKFBldGVyKVwiLCBcIjMuIFBsYXR6IChQZXRlcilcIiwgXCI0LiBQbGF0eiAoUGV0ZXIpXCIsIFwiNS4gUGxhdHogKFBldGVyKVwiXSxcclxuICAgICAgICAgICAgW1wiMS4gUGxhdHogKElsb25hKVwiLCBcIjIuIFBsYXR6IChJbG9uYSlcIiwgXCIzLiBQbGF0eiAoSWxvbmEpXCIsIFwiNC4gUGxhdHogKElsb25hKVwiLCBcIjUuIFBsYXR6IChJbG9uYSlcIl0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXSBzYXRpc2ZpZXMgQm9lc3RPZltdKS5zb3J0KGNvbXBhcmVCeVRpbWVzdGFtcCk7IiwiaW1wb3J0IHsgY29tcGFyZUJ5VGltZXN0YW1wcyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyaW5rczogRHJpbmtbXSA9IChbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0zLFxyXG4gICAgICAgIG5hbWU6IFwiRHJpbmsgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LURyaW5rLlwiLFxyXG4gICAgICAgIHByaWNlOiBcIjk5Ljk54oKsXCIsXHJcbiAgICAgICAgaW1nRm9ybWF0OiBcIndlYnBcIixcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDA6MDFcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMixcclxuICAgICAgICBuYW1lOiBcIkRyaW5rIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdC1Ecmluay5cIixcclxuICAgICAgICBwcmljZTogXCI5OS45OeKCrFwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJ3ZWJwXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAxOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMDowMjowMFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0xLFxyXG4gICAgICAgIG5hbWU6IFwiRHJpbmsgMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LURyaW5rLlwiLFxyXG4gICAgICAgIHByaWNlOiBcIjk5Ljk54oKsXCIsXHJcbiAgICAgICAgaW1nRm9ybWF0OiBcImpwZ1wiLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IFtcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMSwgdGltZTogXCIwMTowMDowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTIsIHRpbWU6IFwiMDI6MDA6MDBcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0zLCB0aW1lOiBcIjAzOjAwOjAwXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgfVxyXG5dIHNhdGlzZmllcyBEcmlua1tdKS5zb3J0KGNvbXBhcmVCeVRpbWVzdGFtcHMpOyIsImV4cG9ydCBjb25zdCBlcGlzb2RlczogRXBpc29kZVtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMyxcclxuICAgICAgICB0aXRsZTogXCJGb2xnZSAzIChmZWF0LiBUZXN0KVwiLFxyXG4gICAgICAgIHNob3J0X3RpdGxlOiBcIkZvbGdlIDNcIixcclxuICAgICAgICBzaG9ydF9zdWJ0aXRsZTogXCJmZWF0LiBUZXN0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsIHNlZCBkaWFtIHZvbHVwdHVhLiBBdCB2ZXJvIGVvcyBldCBhY2N1c2FtIGV0IGp1c3RvIGR1byBkb2xvcmVzIGV0IGVhIHJlYnVtLiBTdGV0IGNsaXRhIGthc2QgZ3ViZXJncmVuLCBubyBzZWEgdGFraW1hdGEgc2FuY3R1cyBlc3QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC5gLFxyXG4gICAgICAgIGRhdGU6IFwiMDEgSmFudWFyIDIwMDBcIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwid2VicFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMixcclxuICAgICAgICB0aXRsZTogXCJGb2xnZSAyIChmZWF0LiBUZXN0KVwiLFxyXG4gICAgICAgIHNob3J0X3RpdGxlOiBcIkZvbGdlIDJcIixcclxuICAgICAgICBzaG9ydF9zdWJ0aXRsZTogXCJmZWF0LiBUZXN0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsIHNlZCBkaWFtIHZvbHVwdHVhLiBBdCB2ZXJvIGVvcyBldCBhY2N1c2FtIGV0IGp1c3RvIGR1byBkb2xvcmVzIGV0IGVhIHJlYnVtLiBTdGV0IGNsaXRhIGthc2QgZ3ViZXJncmVuLCBubyBzZWEgdGFraW1hdGEgc2FuY3R1cyBlc3QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC5gLFxyXG4gICAgICAgIGRhdGU6IFwiMDEgSmFudWFyIDIwMDBcIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwid2VicFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMSxcclxuICAgICAgICB0aXRsZTogXCJGb2xnZSAxIChmZWF0LiBUZXN0KVwiLFxyXG4gICAgICAgIHNob3J0X3RpdGxlOiBcIkZvbGdlIDFcIixcclxuICAgICAgICBzaG9ydF9zdWJ0aXRsZTogXCJmZWF0LiBUZXN0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsIHNlZCBkaWFtIHZvbHVwdHVhLiBBdCB2ZXJvIGVvcyBldCBhY2N1c2FtIGV0IGp1c3RvIGR1byBkb2xvcmVzIGV0IGVhIHJlYnVtLiBTdGV0IGNsaXRhIGthc2QgZ3ViZXJncmVuLCBubyBzZWEgdGFraW1hdGEgc2FuY3R1cyBlc3QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdCwgc2VkIGRpYW0gdm9sdXB0dWEuIEF0IHZlcm8gZW9zIGV0IGFjY3VzYW0gZXQganVzdG8gZHVvIGRvbG9yZXMgZXQgZWEgcmVidW0uIFN0ZXQgY2xpdGEga2FzZCBndWJlcmdyZW4sIG5vIHNlYSB0YWtpbWF0YSBzYW5jdHVzIGVzdCBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC5gLFxyXG4gICAgICAgIGRhdGU6IFwiMDEgSmFudWFyIDIwMDBcIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwianBnXCJcclxuICAgIH0sXHJcbl07IiwiaW1wb3J0IHsgY29tcGFyZUJ5VGltZXN0YW1wcyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdsb3NzYXJ5OiBHbG9zc2FyeUVudHJ5W10gPSAoW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMyxcclxuICAgICAgICB0aXRsZTogXCJHbG9zYXJ5IEVudHJ5IDNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdC1HbG9zc2FyeS1FaW50cmFnLlwiLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IFtcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMSwgdGltZTogXCIwMTowMDowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTIsIHRpbWU6IFwiMDI6MDA6MDBcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0yLCB0aW1lOiBcIjAzOjAwOjAwXCIgfSxcclxuICAgICAgICBdXHJcbiAgICB9LCAgIFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMixcclxuICAgICAgICB0aXRsZTogXCJHbG9zYXJ5IEVudHJ5IDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdC1HbG9zc2FyeS1FaW50cmFnLlwiLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IFtcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMSwgdGltZTogXCIwMDowMTowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTIsIHRpbWU6IFwiMDA6MDI6MDBcIiB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0xLFxyXG4gICAgICAgIHRpdGxlOiBcIkdsb3NhcnkgRW50cnkgMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LUdsb3NzYXJ5LUVpbnRyYWcuXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAwOjAxXCIgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5dIHNhdGlzZmllcyBHbG9zc2FyeUVudHJ5W10pLnNvcnQoY29tcGFyZUJ5VGltZXN0YW1wcyk7IiwiaW1wb3J0IHsgY29tcGFyZVBlcnNvbiB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBlb3BsZTogUGVyc29uW10gPSAoW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMyxcclxuICAgICAgICBuYW1lOiBcIlBlcnNvbiAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluZSBUZXN0LVBlcnNvbi5cIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwid2VicFwiLFxyXG4gICAgICAgIGNoYXJhY3RlcmlzdGljczogW1xyXG4gICAgICAgICAgICBbXCJNZXJrbWFsIDFcIiwge2VwaXNvZGU6IC0xLCB0aW1lOiBcIjAxOjAwOjAwXCJ9XSxcclxuICAgICAgICAgICAgW1wiTWVya21hbCAyXCIsIHtlcGlzb2RlOiAtMiwgdGltZTogXCIwMjowMDowMFwifV0sXHJcbiAgICAgICAgICAgIFtcIk1lcmttYWwgM1wiLCB7ZXBpc29kZTogLTMsIHRpbWU6IFwiMDM6MDA6MDBcIn1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAxOjAwOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMjowMDowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTMsIHRpbWU6IFwiMDM6MDA6MDBcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMixcclxuICAgICAgICBuYW1lOiBcIlBlcnNvbiAyXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluZSBUZXN0LVBlcnNvbi5cIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwid2VicFwiLFxyXG4gICAgICAgIGNoYXJhY3RlcmlzdGljczogW1xyXG4gICAgICAgICAgICBbXCJNZXJrbWFsIDFcIiwge2VwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAxOjAwXCJ9XSxcclxuICAgICAgICAgICAgW1wiTWVya21hbCAyXCIsIHtlcGlzb2RlOiAtMiwgdGltZTogXCIwMDowMjowMFwifV0sXHJcbiAgICAgICAgICAgIFtcIk1lcmttYWwgM1wiLCB7ZXBpc29kZTogLTMsIHRpbWU6IFwiMDA6MDM6MDBcIn1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0yLCB0aW1lOiBcIjAwOjAyOjAwXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogLTEsXHJcbiAgICAgICAgbmFtZTogXCJQZXJzb24gMVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbmUgVGVzdC1QZXJzb24uXCIsXHJcbiAgICAgICAgaW1nRm9ybWF0OiBcImpwZ1wiLFxyXG4gICAgICAgIGNoYXJhY3RlcmlzdGljczogW1xyXG4gICAgICAgICAgICBbXCJNZXJrbWFsIDFcIiwge2VwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAwOjAxXCJ9XSxcclxuICAgICAgICAgICAgW1wiTWVya21hbCAyXCIsIHtlcGlzb2RlOiAtMiwgdGltZTogXCIwMDowMDowMlwifV0sXHJcbiAgICAgICAgICAgIFtcIk1lcmttYWwgM1wiLCB7ZXBpc29kZTogLTMsIHRpbWU6IFwiMDA6MDA6MDNcIn1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAwOjAxXCIgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbl0gc2F0aXNmaWVzIFBlcnNvbltdKS5zb3J0KGNvbXBhcmVQZXJzb24pO1xyXG5cclxuIiwiaW1wb3J0IHsgY29tcGFyZUJ5VGltZXN0YW1wcyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlc3RhdXJhbnRzOiBSZXN0YXVyYW50W10gPSAoW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAtMyxcclxuICAgICAgICBuYW1lOiBcIlJlc3RhdXJhbnQgM1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbiBUZXN0LVJlc3RhdXJhbnQuXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAxOjAwOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMjowMDowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTMsIHRpbWU6IFwiMDM6MDA6MDBcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaW1nRm9ybWF0OiBcIndlYnBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogLTIsXHJcbiAgICAgICAgbmFtZTogXCJSZXN0YXVyYW50IDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdC1SZXN0YXVyYW50LlwiLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IFtcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMSwgdGltZTogXCIwMDowMTowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTIsIHRpbWU6IFwiMDA6MDI6MDBcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0zLCB0aW1lOiBcIjAwOjAzOjAwXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJ3ZWJwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0xLFxyXG4gICAgICAgIG5hbWU6IFwiUmVzdGF1cmFudCAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QtUmVzdGF1cmFudC5cIixcclxuICAgICAgICB0aW1lc3RhbXBzOiBbXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTEsIHRpbWU6IFwiMDA6MDA6MDFcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0yLCB0aW1lOiBcIjAwOjAwOjAyXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMywgdGltZTogXCIwMDowMDowM1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpbWdGb3JtYXQ6IFwianBnXCJcclxuICAgIH0sXHJcbl0gc2F0aXNmaWVzIFJlc3RhdXJhbnRbXSkuc29ydChjb21wYXJlQnlUaW1lc3RhbXBzKTsiLCJpbXBvcnQgeyBjb21wYXJlQnlUaW1lc3RhbXBzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3BvbnNvcnM6IFNwb25zb3JbXSA9IChbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0zLFxyXG4gICAgICAgIG5hbWU6IFwiU3BvbnNvciAzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QtU3BvbnNvci5cIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwid2VicFwiLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IFtcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMSwgdGltZTogXCIwMTowMDowMFwiIH0sXHJcbiAgICAgICAgICAgIHsgZXBpc29kZTogLTIsIHRpbWU6IFwiMDI6MDA6MDBcIiB9LFxyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0zLCB0aW1lOiBcIjAzOjAwOjAwXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogLTIsXHJcbiAgICAgICAgbmFtZTogXCJTcG9uc29yIDJcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWVzIGlzdCBlaW4gVGVzdC1TcG9uc29yLlwiLFxyXG4gICAgICAgIGltZ0Zvcm1hdDogXCJ3ZWJwXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAxOjAwXCIgfSxcclxuICAgICAgICAgICAgeyBlcGlzb2RlOiAtMiwgdGltZTogXCIwMDowMjowMFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IC0xLFxyXG4gICAgICAgIG5hbWU6IFwiU3BvbnNvciAxXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QtU3BvbnNvci5cIixcclxuICAgICAgICBpbWdGb3JtYXQ6IFwianBnXCIsXHJcbiAgICAgICAgdGltZXN0YW1wczogW1xyXG4gICAgICAgICAgICB7IGVwaXNvZGU6IC0xLCB0aW1lOiBcIjAwOjAwOjAxXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuXSBzYXRpc2ZpZXMgU3BvbnNvcltdKS5zb3J0KGNvbXBhcmVCeVRpbWVzdGFtcHMpOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBY2NvcmRpb25JdGVtKGFjY29yZGlvbl9uYW1lOiBzdHJpbmcsIGlkOiBudW1iZXIsIHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcpOiBOb2RlIHtcclxuICAgIGNvbnN0IGh0bWxfdGV4dCA9IGFjY29yZGlvbl9pdGVtX3RlbXBsYXRlXHJcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgne2lkfScsICdnJyksIGlkLnRvRml4ZWQoKSlcclxuICAgICAgICAucmVwbGFjZSgne3RpdGxlfScsIHRpdGxlKVxyXG4gICAgICAgIC5yZXBsYWNlKCd7ZGVzY3JpcHRpb259JywgZGVzY3JpcHRpb24pO1xyXG4gICAgcmV0dXJuIG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbF90ZXh0LCBcInRleHQvaHRtbFwiKS5ib2R5LmZpcnN0Q2hpbGQ7XHJcbn1cclxuXHJcbmNvbnN0IGFjY29yZGlvbl9pdGVtX3RlbXBsYXRlID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1pdGVtIGJvcmRlciBib3JkZXItMiBib3JkZXItd2FybmluZ1wiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIiBpZD1cImdsb3NzYXJ5X2l0ZW1fe2lkfVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWNjb3JkaW9uLWJ1dHRvbiBjb2xsYXBzZWRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtYnMtdGFyZ2V0PVwiI2dsb3NzYXJ5X2l0ZW1fe2lkfV9jb250ZW50XCIgYXJpYS1leHBhbmRlZD1cInRydWVcIiBhcmlhLWNvbnRyb2xzPVwiZ2xvc3NhcnlfaXRlbV97aWR9X2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1jZW50ZXIgdy0xMDBcIj57dGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJnbG9zc2FyeV9pdGVtX3tpZH1fY29udGVudFwiIGNsYXNzPVwiYWNjb3JkaW9uLWNvbGxhcHNlIGNvbGxhcHNlXCIgYXJpYS1sYWJlbGxlZGJ5PVwiZ2xvc3NhcnlfaXRlbV97aWR9XCIgZGF0YS1icy1wYXJlbnQ9XCIjZ2xvc3NhcnlfY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gIiwiY29uc29sZS5sb2coXCJjYXJkX3RlbXBsYXRlLnRzIGxvYWRlZFwiKTtcclxuXHJcbmNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkKGluZm86IHtjb250ZW50X3R5cGU6IHN0cmluZywgaW1nX2ZvbGRlcjogc3RyaW5nLCBpbWdfYWx0OiBzdHJpbmcsIGlkOiBudW1iZXIsIGNhcmRfdGl0bGU6IHN0cmluZywgY2FyZF9zdWJ0aXRsZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBpbWdfZm9ybWF0OiBJbWFnZUZvcm1hdCwgYWRkaXRpb25hbF9pbmZvOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8c3RyaW5nW10+fSk6IE5vZGUge1xyXG4gICAgY29uc29sZS5sb2coXCJDcmVhdGUgQ2FyZFwiLCBpbmZvLmNvbnRlbnRfdHlwZSwgaW5mby5jYXJkX3RpdGxlLCBpbmZvLmlkLCBpbmZvLmltZ19mb3JtYXQpO1xyXG4gICAgbGV0IGh0bWxfdGV4dCA9IGNhcmRfdGVtcGxhdGU7XHJcblxyXG4gICAgaHRtbF90ZXh0ID0gaHRtbF90ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgne2lkfScsICdnJyksIGluZm8uaWQudG9GaXhlZCgpKVxyXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoJ3tjb250ZW50X3R5cGV9JywgJ2cnKSwgaW5mby5jb250ZW50X3R5cGUpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3tpbWdfZm9sZGVyfScsIGluZm8uaW1nX2ZvbGRlcilcclxuICAgICAgICAucmVwbGFjZSgne2NvbnRlbnRfYWx0fScsIGluZm8uaW1nX2FsdClcclxuICAgICAgICAucmVwbGFjZSgne2ltZ19mb3JtYXR9JywgaW5mby5pbWdfZm9ybWF0KVxyXG4gICAgICAgIC5yZXBsYWNlKCd7Y2FyZF90aXRsZX0nLCBpbmZvLmNhcmRfdGl0bGUpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3tjYXJkX3N1YnRpdGxlfScsIGluZm8uY2FyZF9zdWJ0aXRsZSlcclxuICAgICAgICAucmVwbGFjZSgne3RpdGxlfScsIGluZm8udGl0bGUpXHJcbiAgICAgICAgLnJlcGxhY2UoJ3thZGRpdGlvbmFsX2luZm99JywgY3JlYXRlQWRkaXRpb25hbEluZm8oaW5mby5hZGRpdGlvbmFsX2luZm8pKTtcclxuICAgIHJldHVybiBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWxfdGV4dCwgXCJ0ZXh0L2h0bWxcIikuYm9keS5maXJzdENoaWxkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBZGRpdGlvbmFsSW5mbyhpbmZvOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmd8c3RyaW5nW10+KTogc3RyaW5nIHtcclxuICAgIGxldCBhZGRpdGlvbmFsX2luZm8gPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBbdGl0bGUsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpbmZvKSkge1xyXG4gICAgICAgIGxldCBjb250ZW50OiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBcIi1cIlxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mKHZhbHVlKSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250ZW50ID0gbGlzdF90ZW1wbGF0ZS5yZXBsYWNlKCd7Y29udGVudH0nLCB2YWx1ZS5tYXAoaXRlbSA9PiBsaXN0X2l0ZW1fdGVtcGxhdGUucmVwbGFjZSgne2NvbnRlbnR9JywgaXRlbSkpLmpvaW4oXCJcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRpdGlvbmFsX2luZm8gKz0gYWRkaXRpb25hbF9pbmZvX2l0ZW1fdGVtcGxhdGUucmVwbGFjZSgne3RpdGxlfScsIHRpdGxlKS5yZXBsYWNlKCd7Y29udGVudH0nLCBjb250ZW50KTtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWRkaXRpb25hbF9pbmZvO1xyXG59XHJcblxyXG5jb25zdCBjYXJkX3RlbXBsYXRlOiBzdHJpbmcgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgaC0xMDAgYmctbGlnaHQgYm9yZGVyLXdhcm5pbmcgYm9yZGVyLTNcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMve2ltZ19mb2xkZXJ9L3tjb250ZW50X3R5cGV9X3tpZH0ue2ltZ19mb3JtYXR9XCIgY2xhc3M9XCJjYXJkLWltZy10b3AgcC0xIHJvdW5kZWQtM1wiIGFsdD1cIntjb250ZW50X2FsdH0ge2lkfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj57Y2FyZF90aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+e2NhcmRfc3VidGl0bGV9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLWF1dG9cIiBkYXRhLWJzLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS1icy10YXJnZXQ9XCIje2NvbnRlbnRfdHlwZX1fe2lkfV9tb2RhbFwiPkluZm9zPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwie2NvbnRlbnRfdHlwZX1fe2lkfV9tb2RhbFwiIHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsbGVkYnk9XCJ7Y29udGVudF90eXBlfV97aWR9X21vZGFsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwteGwgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtdGl0bGUgdy0xMDBcIiBpZD1cIntjb250ZW50X3R5cGV9X3tpZH1fbW9kYWxcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthZGRpdGlvbmFsX2luZm99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuY29uc3QgYWRkaXRpb25hbF9pbmZvX2l0ZW1fdGVtcGxhdGUgPSBgPGRpdiBjbGFzcz0ncm91bmRlZC01IG0tMyBwLTEgYm9yZGVyIGJvcmRlci0yIGJvcmRlci13YXJuaW5nLXN1YnRsZSBiZy1saWdodCc+PGg1Pnt0aXRsZX08L2g1PjxwPntjb250ZW50fTwvcD48L2Rpdj5gXHJcbmNvbnN0IGxpc3RfdGVtcGxhdGU6IHN0cmluZyA9IGA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIiBzdHlsZT0nZGlzcGxheTppbmxpbmUtYmxvY2snPntjb250ZW50fTwvdWw+YFxyXG5jb25zdCBsaXN0X2l0ZW1fdGVtcGxhdGU6IHN0cmluZyA9IGA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gYmctdHJhbnNwYXJlbnRcIj57Y29udGVudH08L2xpPmA7IiwiaW1wb3J0IHsgZ2V0RXBpc29kZXMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2FyZCB9IGZyb20gXCIuL2NhcmRfdGVtcGxhdGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RHJpbmtUb0hUTUwoZHJpbms6IERyaW5rKTogTm9kZSB7XHJcbiAgICByZXR1cm4gY3JlYXRlQ2FyZCh7XHJcbiAgICAgICAgY29udGVudF90eXBlOiBcImRyaW5rXCIsXHJcbiAgICAgICAgaW1nX2ZvbGRlcjogXCJkcmlua3NcIixcclxuICAgICAgICBpbWdfYWx0OiBcIlRyaW5rc3RvZmZcIixcclxuICAgICAgICBpZDogZHJpbmsuaWQsXHJcbiAgICAgICAgY2FyZF90aXRsZTogZHJpbmsubmFtZSxcclxuICAgICAgICBjYXJkX3N1YnRpdGxlOiBkcmluay5kZXNjcmlwdGlvbixcclxuICAgICAgICB0aXRsZTogZHJpbmsubmFtZSxcclxuICAgICAgICBpbWdfZm9ybWF0OiBkcmluay5pbWdGb3JtYXQsXHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiB7XHJcbiAgICAgICAgICAgIFwiQmVzY2hyZWlidW5nXCI6IGRyaW5rLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBcIlByZWlzXCI6IGRyaW5rLnByaWNlLFxyXG4gICAgICAgICAgICBcIkZvbGdlblwiOiBnZXRFcGlzb2RlcyhkcmluaylcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYm9lc3Rfb2ZzIH0gZnJvbSBcIi4uL2RhdGEvYm9lc3Rfb2ZzXCI7XHJcbmltcG9ydCB7IGRyaW5rcyB9IGZyb20gXCIuLi9kYXRhL2RyaW5rc1wiO1xyXG5pbXBvcnQgeyBwZW9wbGUgfSBmcm9tIFwiLi4vZGF0YS9wZW9wbGVcIjtcclxuaW1wb3J0IHsgc3BvbnNvcnMgfSBmcm9tIFwiLi4vZGF0YS9zcG9uc29yc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY2FyZF90ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRFcGlzb2RlVG9IVE1MKGVwaXNvZGU6IEVwaXNvZGUpOiBOb2RlIHtcclxuICAgIGNvbnN0IGJvZXN0X29mID0gYm9lc3Rfb2ZzLmZpbmQoYm9lc3Rfb2YgPT4gYm9lc3Rfb2YudGltZXN0YW1wLmVwaXNvZGUgPT0gZXBpc29kZS5pZCk7XHJcbiAgICByZXR1cm4gY3JlYXRlQ2FyZCh7XHJcbiAgICAgICAgY29udGVudF90eXBlOiBcImVwaXNvZGVcIixcclxuICAgICAgICBpbWdfZm9sZGVyOiBcImVwaXNvZGVzXCIsXHJcbiAgICAgICAgaW1nX2FsdDogXCJGb2xnZVwiLFxyXG4gICAgICAgIGlkOiBlcGlzb2RlLmlkLFxyXG4gICAgICAgIGNhcmRfdGl0bGU6IGVwaXNvZGUuc2hvcnRfdGl0bGUsXHJcbiAgICAgICAgY2FyZF9zdWJ0aXRsZTogZXBpc29kZS5zaG9ydF9zdWJ0aXRsZSxcclxuICAgICAgICB0aXRsZTogZXBpc29kZS50aXRsZSxcclxuICAgICAgICBpbWdfZm9ybWF0OiBlcGlzb2RlLmltZ0Zvcm1hdCxcclxuICAgICAgICBhZGRpdGlvbmFsX2luZm86IHtcclxuICAgICAgICAgICAgXCJHw6RzdGVcIjogZ2V0RWxlbWVudHNPZkVwaXNvZGUocGVvcGxlLmZpbHRlcihwZXJzb24gPT4gIXBlcnNvbi5pc0hvc3QpKS5tYXAoIGd1ZXN0ID0+IGd1ZXN0Lm5hbWUpLFxyXG4gICAgICAgICAgICBcIlRyaW5rc3RvZmZcIjogZ2V0RWxlbWVudHNPZkVwaXNvZGUoZHJpbmtzKS5tYXAoZHJpbmsgPT4gZHJpbmsubmFtZSksXHJcbiAgICAgICAgICAgIFwiU3BvbnNvcmVuXCI6IGdldEVsZW1lbnRzT2ZFcGlzb2RlKHNwb25zb3JzKS5tYXAoc3BvbnNvciA9PiBzcG9uc29yLm5hbWUpLFxyXG4gICAgICAgICAgICBcIkRhdHVtXCI6IGVwaXNvZGUuZGF0ZSxcclxuICAgICAgICAgICAgXCJCZXNjaHJlaWJ1bmdcIjogZXBpc29kZS5kZXNjcmlwdGlvbixcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50c09mRXBpc29kZTxUIGV4dGVuZHMgeyB0aW1lc3RhbXBzOiBUaW1lc3RhbXBbXTsgfT4oZWxlbWVudHM6IFRbXSk6IFRbXSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWQ6IFRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRpbWVzdGFtcCBvZiBlbGVtZW50LnRpbWVzdGFtcHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aW1lc3RhbXAuZXBpc29kZSA9PSBlcGlzb2RlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWx0ZXJlZC5pbmNsdWRlcyhlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZUFjY29yZGlvbkl0ZW0gfSBmcm9tIFwiLi9hY2NvcmRpb25faXRlbV90ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRHbG9zc2FyeUVudHJ5VG9IVE1MKGdsb3NzYXJ5RW50cnk6IEdsb3NzYXJ5RW50cnkpOiBOb2RlIHtcclxuICAgIHJldHVybiBjcmVhdGVBY2NvcmRpb25JdGVtKFwiZ2xvc3NhcnlcIiwgZ2xvc3NhcnlFbnRyeS5pZCwgZ2xvc3NhcnlFbnRyeS50aXRsZSwgZ2xvc3NhcnlFbnRyeS5kZXNjcmlwdGlvbik7XHJcbn0iLCJpbXBvcnQgeyBnZXRFcGlzb2RlcyB9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDYXJkIH0gZnJvbSBcIi4vY2FyZF90ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRQZXJzb25Ub0hUTUwocGVyc29uOiBQZXJzb24pOiBOb2RlIHtcclxuICAgIHJldHVybiBjcmVhdGVDYXJkKHtcclxuICAgICAgICBjb250ZW50X3R5cGU6IFwicGVyc29uXCIsXHJcbiAgICAgICAgaW1nX2ZvbGRlcjogXCJwZW9wbGVcIixcclxuICAgICAgICBpbWdfYWx0OiBcIlBlcnNvblwiLFxyXG4gICAgICAgIGlkOiBwZXJzb24uaWQsXHJcbiAgICAgICAgY2FyZF90aXRsZTogcGVyc29uLm5hbWUsXHJcbiAgICAgICAgY2FyZF9zdWJ0aXRsZTogcGVyc29uLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRpdGxlOiBwZXJzb24ubmFtZSxcclxuICAgICAgICBpbWdfZm9ybWF0OiBwZXJzb24uaW1nRm9ybWF0LFxyXG4gICAgICAgIGFkZGl0aW9uYWxfaW5mbzoge1xyXG4gICAgICAgICAgICBcIkJlc2NocmVpYnVuZ1wiOiBwZXJzb24uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIFwiRXBpc29kZW5cIjogZ2V0RXBpc29kZXMocGVyc29uKSxcclxuICAgICAgICAgICAgXCJNZXJrbWFsZVwiOiBwZXJzb24uY2hhcmFjdGVyaXN0aWNzLm1hcCgoW2NoYXJhY3RlcmlzdGljLCBfXSkgPT4gY2hhcmFjdGVyaXN0aWMpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdldEVwaXNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jYXJkX3RlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFJlc3RhdXJhbnRUb0hUTUwocmVzdGF1cmFudDogUmVzdGF1cmFudCk6IE5vZGUge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUNhcmQoe1xyXG4gICAgICAgIGNvbnRlbnRfdHlwZTogXCJyZXN0YXVyYW50XCIsXHJcbiAgICAgICAgaW1nX2ZvbGRlcjogXCJyZXN0YXVyYW50c1wiLFxyXG4gICAgICAgIGltZ19hbHQ6IFwiUmVzdGF1cmFudFwiLFxyXG4gICAgICAgIGlkOiByZXN0YXVyYW50LmlkLFxyXG4gICAgICAgIGNhcmRfdGl0bGU6IHJlc3RhdXJhbnQubmFtZSxcclxuICAgICAgICBjYXJkX3N1YnRpdGxlOiByZXN0YXVyYW50LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRpdGxlOiByZXN0YXVyYW50Lm5hbWUsXHJcbiAgICAgICAgaW1nX2Zvcm1hdDogcmVzdGF1cmFudC5pbWdGb3JtYXQsXHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiB7XHJcbiAgICAgICAgICAgIFwiQmVzY2hyZWlidW5nXCI6IHJlc3RhdXJhbnQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIFwiRm9sZ2VuXCI6IGdldEVwaXNvZGVzKHJlc3RhdXJhbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdldEVwaXNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcmQgfSBmcm9tIFwiLi9jYXJkX3RlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFNwb25zb3JUb0hUTUwoc3BvbnNvcjogU3BvbnNvcik6IE5vZGUge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUNhcmQoe1xyXG4gICAgICAgIGNvbnRlbnRfdHlwZTogXCJzcG9uc29yXCIsXHJcbiAgICAgICAgaW1nX2ZvbGRlcjogXCJzcG9uc29yc1wiLFxyXG4gICAgICAgIGltZ19hbHQ6IFwiU3BvbnNvclwiLFxyXG4gICAgICAgIGlkOiBzcG9uc29yLmlkLFxyXG4gICAgICAgIGNhcmRfdGl0bGU6IHNwb25zb3IubmFtZSxcclxuICAgICAgICBjYXJkX3N1YnRpdGxlOiBzcG9uc29yLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRpdGxlOiBzcG9uc29yLm5hbWUsXHJcbiAgICAgICAgaW1nX2Zvcm1hdDogc3BvbnNvci5pbWdGb3JtYXQsXHJcbiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiB7XHJcbiAgICAgICAgICAgIFwiQmVzY2hyZWlidW5nXCI6IHNwb25zb3IuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIFwiRm9sZ2VuXCI6IGdldEVwaXNvZGVzKHNwb25zb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBlcGlzb2RlcyB9IGZyb20gXCIuL2RhdGEvZXBpc29kZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIGFsbCBlcGlzb2RlcyBvZiBhbiBpdGVtLlxyXG4gKiBAcGFyYW0gZWxlbWVudCBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXBpc29kZXMoZWxlbWVudDoge3RpbWVzdGFtcHM6IFRpbWVzdGFtcFtdfSk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBlcGlzb2Rlc1xyXG4gICAgICAgIC5maWx0ZXIoZXBpc29kZSA9PiBlbGVtZW50LnRpbWVzdGFtcHMuZmluZCh0aW1lc3RhbXAgPT4gZXBpc29kZS5pZCA9PSB0aW1lc3RhbXAuZXBpc29kZSkpXHJcbiAgICAgICAgLm1hcChlcGlzb2RlID0+IGVwaXNvZGUuc2hvcnRfdGl0bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdXNlZCBmb3Igc29ydGluZyBpdGVtcy5cclxuICogXHJcbiAqIDEuIFNvcnRzIGJ5IGxhdGVzdCBlcGlzb2RlLlxyXG4gKiAyLiBGYWxscyBiYWNrIHRvIHdobyBoYXMgbGVzcyBudW1iZXIgb2YgZXBpc29kZXMuXHJcbiAqIEBwYXJhbSBhIFRoZSBmaXJzdCBpdGVtLlxyXG4gKiBAcGFyYW0gYiBUaGUgc2Vjb25kIGl0ZW0uXHJcbiAqIEByZXR1cm5zIE51bWJlciByZXByZXNlbnRpbmcgdGhlIGRpZmZlcmVuY2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUJ5VGltZXN0YW1wcyhhOiB7dGltZXN0YW1wczogVGltZXN0YW1wW119LCBiOiB7dGltZXN0YW1wczogVGltZXN0YW1wW119KTogbnVtYmVyIHtcclxuICAgIC8vIE1hdGguYWJzIGlzIHVzZWQgZm9yIHRlc3RpbmcgZXBpc29kZXMgKHdpdGggbmVnYXRpdmUgaWQpXHJcbiAgICBjb25zdCBhRXBpc29kZXMgPSBhLnRpbWVzdGFtcHMubWFwKGVwaXNvZGUgPT4gTWF0aC5hYnMoZXBpc29kZS5lcGlzb2RlKSk7XHJcbiAgICBjb25zdCBiRXBpc29kZXMgPSBiLnRpbWVzdGFtcHMubWFwKGVwaXNvZGUgPT4gTWF0aC5hYnMoZXBpc29kZS5lcGlzb2RlKSk7XHJcbiAgICBjb25zdCBhTGF0ZXN0RXBpc29kZSA9IE1hdGgubWF4KC4uLmFFcGlzb2Rlcyk7XHJcbiAgICBjb25zdCBiTGF0ZXN0RXBpc29kZSA9IE1hdGgubWF4KC4uLmJFcGlzb2Rlcyk7XHJcbiAgICBpZiAoYkxhdGVzdEVwaXNvZGUgIT0gYUxhdGVzdEVwaXNvZGUpIHtcclxuICAgICAgICByZXR1cm4gYkxhdGVzdEVwaXNvZGUgLSBhTGF0ZXN0RXBpc29kZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIC0oYkVwaXNvZGVzLmxlbmd0aCAtIGFFcGlzb2Rlcy5sZW5ndGgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdXNlZCBmb3Igc29ydGluZyBpdGVtcyBieSB0aGVpciBsYXRlc3QgZXBpc29kZS5cclxuICogQHBhcmFtIGEgVGhlIGZpcnN0IGl0ZW0uXHJcbiAqIEBwYXJhbSBiIFRoZSBzZWNvbmQgaXRlbS5cclxuICogQHJldHVybnMgTnVtYmVyIHJlcHJlc2VudGluZyB0aGUgZGlmZmVyZW5jZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQnlUaW1lc3RhbXAoYToge3RpbWVzdGFtcDogVGltZXN0YW1wfSwgYjoge3RpbWVzdGFtcDogVGltZXN0YW1wfSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMoYi50aW1lc3RhbXAuZXBpc29kZSkgLSBNYXRoLmFicyhhLnRpbWVzdGFtcC5lcGlzb2RlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFB1dHMgSWxvbmEgYW5kIFBldGVyIGF0IHRoZSBzdGFydCBhbmQgdGhlbiBzb3J0cyBieSBsYXRlc3QgZXBpc29kZS5cclxuICogQHBhcmFtIGEgVGhlIGZpcnN0IHBlcnNvbi5cclxuICogQHBhcmFtIGIgVGhlIHNlY29uZCBwZXJzb24uXHJcbiAqIEByZXR1cm5zIE51bWJlciByZXByZXNlbnRpbmcgdGhlIGRpZmZlcmVuY2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZVBlcnNvbihhOiBQZXJzb24sIGI6IFBlcnNvbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gIChhLmlzSG9zdCB8fCBiLmlzSG9zdCkgPyBiLmlkIC0gYS5pZCA6IGNvbXBhcmVCeVRpbWVzdGFtcHMoYSxiKTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZHJpbmtzIH0gZnJvbSBcIi4vZGF0YS9kcmlua3NcIjtcclxuaW1wb3J0IHsgZXBpc29kZXMgfSBmcm9tIFwiLi9kYXRhL2VwaXNvZGVzXCI7XHJcbmltcG9ydCB7IHBlb3BsZSB9IGZyb20gXCIuL2RhdGEvcGVvcGxlXCI7XHJcbmltcG9ydCB7IGNvbnZlcnREcmlua1RvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9kcmlua190ZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0UGVyc29uVG9IVE1MIH0gZnJvbSBcIi4vdGVtcGxhdGVzL3BlcnNvbl90ZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0RXBpc29kZVRvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9lcGlzb2RlX3RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IHJlc3RhdXJhbnRzIH0gZnJvbSBcIi4vZGF0YS9yZXN0YXVyYW50c1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0UmVzdGF1cmFudFRvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9yZXN0YXVyYW50X3RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IHNwb25zb3JzIH0gZnJvbSBcIi4vZGF0YS9zcG9uc29yc1wiO1xyXG5pbXBvcnQgeyBjb252ZXJ0U3BvbnNvclRvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9zcG9uc29yX3RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IGdsb3NzYXJ5IH0gZnJvbSBcIi4vZGF0YS9nbG9zc2FyeVwiO1xyXG5pbXBvcnQgeyBjb252ZXJ0R2xvc3NhcnlFbnRyeVRvSFRNTCB9IGZyb20gXCIuL3RlbXBsYXRlcy9nbG9zc2FyeV9lbnRyeV90ZW1wbGF0ZVwiO1xyXG5cclxuY29uc29sZS5sb2coXCJpbmRleC50cyBsb2FkZWRcIik7XHJcblxyXG4vLyBTRVRUSU5HU1xyXG5jb25zdCBURVNUSU5HOiBib29sZWFuID0gdHJ1ZTtcclxuY29uc3Qgc2hvdWxkQmVEaXNwbGF5ZWQgPSAoZWxlbWVudDoge2lkOiBudW1iZXJ9KSA9PiBURVNUSU5HID8gZWxlbWVudC5pZCA8IDAgOiBlbGVtZW50LmlkID49IDA7XHJcblxyXG4vLyBFUElTT0RFU1xyXG5jb25zdCBlcGlzb2RlX2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXBpc29kZXNfY29udGVudFwiKTtcclxuY29uc3QgZXBpc29kZV9lbGVtZW50cyA9IGVwaXNvZGVzLmZpbHRlcihzaG91bGRCZURpc3BsYXllZCkubWFwKGNvbnZlcnRFcGlzb2RlVG9IVE1MKVxyXG5lcGlzb2RlX2NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oLi4uZXBpc29kZV9lbGVtZW50cyk7XHJcblxyXG4vLyBQRU9QTEUgLyBST0VTVElFU1xyXG5jb25zdCBwZW9wbGVfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvZXN0aWVzX2NvbnRlbnQnKTtcclxuY29uc3QgcGVyc29uX2VsZW1lbnRzID0gcGVvcGxlLmZpbHRlcihzaG91bGRCZURpc3BsYXllZCkubWFwKGNvbnZlcnRQZXJzb25Ub0hUTUwpXHJcbnBlb3BsZV9jb250YWluZXIucmVwbGFjZUNoaWxkcmVuKC4uLnBlcnNvbl9lbGVtZW50cyk7XHJcblxyXG4vLyBEUklOS1MgLyBUcmlua3N0b2ZmXHJcbmNvbnN0IGRyaW5rc19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyaW5rc19jb250ZW50XCIpO1xyXG5jb25zdCBkcmlua19lbGVtZW50cyA9IGRyaW5rcy5maWx0ZXIoc2hvdWxkQmVEaXNwbGF5ZWQpLm1hcChjb252ZXJ0RHJpbmtUb0hUTUwpO1xyXG5kcmlua3NfY29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbiguLi5kcmlua19lbGVtZW50cyk7XHJcblxyXG4vLyBSZXN0YXVyYW50c1xyXG5jb25zdCByZXN0YXVyYW50c19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhdXJhbnRzX2NvbnRlbnRcIik7XHJcbmNvbnN0IHJlc3RhdXJhbnRfZWxlbWVudHMgPSByZXN0YXVyYW50cy5maWx0ZXIoc2hvdWxkQmVEaXNwbGF5ZWQpLm1hcChjb252ZXJ0UmVzdGF1cmFudFRvSFRNTCk7XHJcbnJlc3RhdXJhbnRzX2NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oLi4ucmVzdGF1cmFudF9lbGVtZW50cyk7XHJcblxyXG4vLyBTcG9uc29ycyAvIFNwb25zb3JlblxyXG5jb25zdCBzcG9uc29yc19jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwb25zb3JzX2NvbnRlbnRcIik7XHJcbmNvbnN0IHNwb25zb3JzX2VsZW1lbnRzID0gc3BvbnNvcnMuZmlsdGVyKHNob3VsZEJlRGlzcGxheWVkKS5tYXAoY29udmVydFNwb25zb3JUb0hUTUwpO1xyXG5zcG9uc29yc19jb250YWluZXIucmVwbGFjZUNoaWxkcmVuKC4uLnNwb25zb3JzX2VsZW1lbnRzKTtcclxuXHJcbi8vIEdsb3NzYXJ5IC8gTGVocnN0b2ZmXHJcbmNvbnN0IGdsb3NzYXJ5X2NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xvc3NhcnlfY29udGVudFwiKTtcclxuY29uc3QgZ2xvc3NhcnlfZWxlbWVudHMgPSBnbG9zc2FyeS5maWx0ZXIoc2hvdWxkQmVEaXNwbGF5ZWQpLm1hcChjb252ZXJ0R2xvc3NhcnlFbnRyeVRvSFRNTCk7XHJcbmdsb3NzYXJ5X2NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oLi4uZ2xvc3NhcnlfZWxlbWVudHMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
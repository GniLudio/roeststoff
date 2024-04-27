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
var boest_ofs = [
    {
        id: 0,
        title: "Test-Böst-Of",
        description: "Dies ist ein Test Böst-Of.",
        timestamp: {
            episode: 0,
            start: 69,
            end: 420
        },
        rankings: [
            ["1. Platz (Peter)", "2. Platz (Peter)", "3. Platz (Peter)", "4. Platz (Peter)", "5. Platz (Peter)"],
            ["1. Platz (Ilona)", "2. Platz (Ilona)", "3. Platz (Ilona)", "4. Platz (Ilona)", "5. Platz (Ilona)"],
        ]
    }
];


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
        id: 0,
        title: "Test-Folge (feat. Test-Person)",
        card_title: "Test-Folge",
        card_subtitle: "feat. Test-Person",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: "01 Januar 2000",
        guests: [0]
    }
];


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
var people = [
    {
        id: 0,
        name: "Test-Person",
        description: "Dies ist eine Test-Person."
    }
];


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
var sponsors = [
    {
        id: 0,
        name: "Test-Sponsor",
        timestamps: [
            {
                episode: 0,
                start: 69,
                end: 420
            },
        ]
    }
];


/***/ }),

/***/ "./src/templates.ts":
/*!**************************!*\
  !*** ./src/templates.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   episode_template: () => (/* binding */ episode_template)
/* harmony export */ });
var episode_template = "\n    <div class=\"col\">\n        <div class=\"card h-100 border-warning border-3\">\n            <img src=\"images/episodes/episode_{id}.jpg\" class=\"card-img-top p-1 rounded-3\" alt=\"Folge {id}\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{card_title}</h5>\n                <h6 class=\"card-subtitle mb-2 text-muted\">{card_subtitle}</h6>\n                <a href=\"#\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#episode_{id}_modal\">Infos</a>\n            </div>\n        </div>\n        <div class=\"modal fade\" id=\"episode_{id}_modal\" tabindex=\"-1\" aria-labelledby=\"episode_{id}_modal\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header text-center\">\n                        <h2 class=\"modal-title w-100\" id=\"episode_{id}_modal\">{title}</h1>\n                        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <h3>G\u00E4ste</h5>\n                        <p>{guests}</p>\n                        <h3>B\u00F6st-Of</h5>\n                        <p>{boest_of}</p>\n                        <h3>Sponsoren</h5>\n                        <p>{sponsors}</p>\n                        <h3>Datum</h5>\n                        <p>{date}</p>\n                        <h3>Beschreibung</h5>\n                        <p>{description}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n";


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertEpisodeToHTML: () => (/* binding */ convertEpisodeToHTML)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates.ts");
/* harmony import */ var _data_people__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/people */ "./src/data/people.ts");
/* harmony import */ var _data_boest_ofs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/boest_ofs */ "./src/data/boest_ofs.ts");
/* harmony import */ var _data_sponsors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/sponsors */ "./src/data/sponsors.ts");




function convertEpisodeToHTML(episode) {
    var _a, _b, _c, _d;
    var html_text = _templates__WEBPACK_IMPORTED_MODULE_0__.episode_template;
    html_text = html_text.replace(new RegExp('{id}', 'g'), episode.id.toFixed());
    html_text = html_text.replace(new RegExp('{title}'), episode.title);
    html_text = html_text.replace(new RegExp('{description}'), episode.description);
    html_text = html_text.replace(new RegExp('{date}'), episode.date);
    html_text = html_text.replace(new RegExp('{card_title}'), (_a = episode.card_title) !== null && _a !== void 0 ? _a : episode.title);
    html_text = html_text.replace(new RegExp('{card_subtitle}'), (_b = episode.card_subtitle) !== null && _b !== void 0 ? _b : "");
    if (episode.guests != undefined && episode.guests.length > 0) {
        var guests = episode.guests.map(function (guestID) { return _data_people__WEBPACK_IMPORTED_MODULE_1__.people.find(function (person) { return person.id == guestID; }); });
        var names = guests.filter(function (guest) { return guest; }).map(function (guest) { return guest.name; });
        html_text = html_text.replace(new RegExp('{guests}'), names.join(", "));
    }
    else {
        html_text = html_text.replace(new RegExp('{guests}'), "-");
    }
    var boest_of_text = (_d = (_c = _data_boest_ofs__WEBPACK_IMPORTED_MODULE_2__.boest_ofs.find(function (boest_of) { return boest_of.timestamp.episode == episode.id; })) === null || _c === void 0 ? void 0 : _c.title) !== null && _d !== void 0 ? _d : "-";
    html_text = html_text.replace(new RegExp('{boest_of}'), boest_of_text);
    var filtered_sponsors = _data_sponsors__WEBPACK_IMPORTED_MODULE_3__.sponsors.filter(function (sponsor) { return sponsor.timestamps.find(function (timestamp) { return timestamp.episode == episode.id; }); });
    var sponsors_text = filtered_sponsors.map(function (sponsor) { return sponsor.name; }).join(", ");
    html_text = html_text.replace(new RegExp('{sponsors}'), sponsors_text != "" ? sponsors_text : "-");
    return new DOMParser().parseFromString(html_text, "text/html").body;
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
/* harmony import */ var _data_episodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/episodes */ "./src/data/episodes.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
console.log("index.ts loaded");


var episode_container = document.getElementById("episodes_content");
episode_container.replaceChildren();
_data_episodes__WEBPACK_IMPORTED_MODULE_0__.episodes.forEach(function (episode) { return episode_container.appendChild((0,_utils__WEBPACK_IMPORTED_MODULE_1__.convertEpisodeToHTML)(episode)); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsQ0FBQyxHQUFHLENBQUMsaUJBQU8sSUFBSSxjQUFPLENBQUMsSUFBSSxFQUFaLENBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxhQUFhLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRW5HLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4RSxDQUFDOzs7Ozs7O1VDM0JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRVk7QUFDSTtBQUUvQyxJQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUN0RSxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNwQyxvREFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBTyxJQUFJLHdCQUFpQixDQUFDLFdBQVcsQ0FBQyw0REFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUE1RCxDQUE0RCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL2RhdGEvYm9lc3Rfb2ZzLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvZGF0YS9lcGlzb2Rlcy50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL2RhdGEvcGVvcGxlLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvLi9zcmMvZGF0YS9zcG9uc29ycy50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL3RlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3JvZXN0c3RvZmYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9lc3RzdG9mZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvZXN0c3RvZmYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb2VzdHN0b2ZmLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBib2VzdF9vZnM6IEJvZXN0T2ZbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICB0aXRsZTogXCJUZXN0LULDtnN0LU9mXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGllcyBpc3QgZWluIFRlc3QgQsO2c3QtT2YuXCIsXHJcbiAgICAgICAgdGltZXN0YW1wOiB7XHJcbiAgICAgICAgICAgIGVwaXNvZGU6IDAsXHJcbiAgICAgICAgICAgIHN0YXJ0OiA2OSxcclxuICAgICAgICAgICAgZW5kOiA0MjBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhbmtpbmdzOiBbXHJcbiAgICAgICAgICAgIFtcIjEuIFBsYXR6IChQZXRlcilcIiwgXCIyLiBQbGF0eiAoUGV0ZXIpXCIsIFwiMy4gUGxhdHogKFBldGVyKVwiLCBcIjQuIFBsYXR6IChQZXRlcilcIiwgXCI1LiBQbGF0eiAoUGV0ZXIpXCJdLFxyXG4gICAgICAgICAgICBbXCIxLiBQbGF0eiAoSWxvbmEpXCIsIFwiMi4gUGxhdHogKElsb25hKVwiLCBcIjMuIFBsYXR6IChJbG9uYSlcIiwgXCI0LiBQbGF0eiAoSWxvbmEpXCIsIFwiNS4gUGxhdHogKElsb25hKVwiXSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07IiwiZXhwb3J0IGNvbnN0IGVwaXNvZGVzOiBFcGlzb2RlW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgdGl0bGU6IFwiVGVzdC1Gb2xnZSAoZmVhdC4gVGVzdC1QZXJzb24pXCIsXHJcbiAgICAgICAgY2FyZF90aXRsZTogXCJUZXN0LUZvbGdlXCIsXHJcbiAgICAgICAgY2FyZF9zdWJ0aXRsZTogXCJmZWF0LiBUZXN0LVBlcnNvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LCBzZWQgZGlhbSB2b2x1cHR1YS4gQXQgdmVybyBlb3MgZXQgYWNjdXNhbSBldCBqdXN0byBkdW8gZG9sb3JlcyBldCBlYSByZWJ1bS4gU3RldCBjbGl0YSBrYXNkIGd1YmVyZ3Jlbiwgbm8gc2VhIHRha2ltYXRhIHNhbmN0dXMgZXN0IExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvciBpbnZpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1eWFtIGVyYXQsIHNlZCBkaWFtIHZvbHVwdHVhLiBBdCB2ZXJvIGVvcyBldCBhY2N1c2FtIGV0IGp1c3RvIGR1byBkb2xvcmVzIGV0IGVhIHJlYnVtLiBTdGV0IGNsaXRhIGthc2QgZ3ViZXJncmVuLCBubyBzZWEgdGFraW1hdGEgc2FuY3R1cyBlc3QgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuYCxcclxuICAgICAgICBkYXRlOiBcIjAxIEphbnVhciAyMDAwXCIsXHJcbiAgICAgICAgZ3Vlc3RzOiBbMF1cclxuICAgIH1cclxuXTsiLCJleHBvcnQgY29uc3QgcGVvcGxlOiBQZXJzb25bXSA9IFtcclxuXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbmFtZTogXCJUZXN0LVBlcnNvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpZXMgaXN0IGVpbmUgVGVzdC1QZXJzb24uXCJcclxuICAgIH1cclxuXTsiLCJleHBvcnQgY29uc3Qgc3BvbnNvcnM6IFNwb25zb3JbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBuYW1lOiBcIlRlc3QtU3BvbnNvclwiLFxyXG4gICAgICAgIHRpbWVzdGFtcHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZXBpc29kZTogMCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiA2OSxcclxuICAgICAgICAgICAgICAgIGVuZDogNDIwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dIiwiZXhwb3J0IGNvbnN0IGVwaXNvZGVfdGVtcGxhdGU6IHN0cmluZyA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLTEwMCBib3JkZXItd2FybmluZyBib3JkZXItM1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9lcGlzb2Rlcy9lcGlzb2RlX3tpZH0uanBnXCIgY2xhc3M9XCJjYXJkLWltZy10b3AgcC0xIHJvdW5kZWQtM1wiIGFsdD1cIkZvbGdlIHtpZH1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPntjYXJkX3RpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPntjYXJkX3N1YnRpdGxlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI2VwaXNvZGVfe2lkfV9tb2RhbFwiPkluZm9zPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiIGlkPVwiZXBpc29kZV97aWR9X21vZGFsXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cImVwaXNvZGVfe2lkfV9tb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLXhsIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLXRpdGxlIHctMTAwXCIgaWQ9XCJlcGlzb2RlX3tpZH1fbW9kYWxcIj57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Hw6RzdGU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Z3Vlc3RzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkLDtnN0LU9mPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2JvZXN0X29mfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlNwb25zb3JlbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzcG9uc29yc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5EYXR1bTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkJlc2NocmVpYnVuZzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuIiwiaW1wb3J0IHsgZXBpc29kZV90ZW1wbGF0ZSB9IGZyb20gXCIuL3RlbXBsYXRlc1wiO1xyXG5pbXBvcnQgeyBwZW9wbGUgfSBmcm9tIFwiLi9kYXRhL3Blb3BsZVwiO1xyXG5pbXBvcnQgeyBib2VzdF9vZnMgfSBmcm9tIFwiLi9kYXRhL2JvZXN0X29mc1wiO1xyXG5pbXBvcnQgeyBzcG9uc29ycyB9IGZyb20gXCIuL2RhdGEvc3BvbnNvcnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RXBpc29kZVRvSFRNTChlcGlzb2RlOiBFcGlzb2RlKSB7XHJcbiAgICBsZXQgaHRtbF90ZXh0ID0gZXBpc29kZV90ZW1wbGF0ZTtcclxuICAgIGh0bWxfdGV4dCA9IGh0bWxfdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoJ3tpZH0nLCAnZycpLCBlcGlzb2RlLmlkLnRvRml4ZWQoKSk7XHJcbiAgICBodG1sX3RleHQgPSBodG1sX3RleHQucmVwbGFjZShuZXcgUmVnRXhwKCd7dGl0bGV9JyksIGVwaXNvZGUudGl0bGUpO1xyXG4gICAgaHRtbF90ZXh0ID0gaHRtbF90ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgne2Rlc2NyaXB0aW9ufScpLCBlcGlzb2RlLmRlc2NyaXB0aW9uKTtcclxuICAgIGh0bWxfdGV4dCA9IGh0bWxfdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoJ3tkYXRlfScpLCBlcGlzb2RlLmRhdGUpO1xyXG4gICAgaHRtbF90ZXh0ID0gaHRtbF90ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgne2NhcmRfdGl0bGV9JyksIGVwaXNvZGUuY2FyZF90aXRsZSA/PyBlcGlzb2RlLnRpdGxlKTtcclxuICAgIGh0bWxfdGV4dCA9IGh0bWxfdGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoJ3tjYXJkX3N1YnRpdGxlfScpLCBlcGlzb2RlLmNhcmRfc3VidGl0bGUgPz8gXCJcIik7XHJcbiAgICBpZiAoZXBpc29kZS5ndWVzdHMgIT0gdW5kZWZpbmVkICYmIGVwaXNvZGUuZ3Vlc3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBndWVzdHM6IFBlcnNvbltdID0gZXBpc29kZS5ndWVzdHMubWFwKChndWVzdElEKSA9PiBwZW9wbGUuZmluZChwZXJzb24gPT4gcGVyc29uLmlkID09IGd1ZXN0SUQpKTtcclxuICAgICAgICBjb25zdCBuYW1lcyA9IGd1ZXN0cy5maWx0ZXIoZ3Vlc3QgPT4gZ3Vlc3QpLm1hcChndWVzdCA9PiBndWVzdC5uYW1lKTtcclxuICAgICAgICBodG1sX3RleHQgPSBodG1sX3RleHQucmVwbGFjZShuZXcgUmVnRXhwKCd7Z3Vlc3RzfScpLCBuYW1lcy5qb2luKFwiLCBcIikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBodG1sX3RleHQgPSBodG1sX3RleHQucmVwbGFjZShuZXcgUmVnRXhwKCd7Z3Vlc3RzfScpLCBcIi1cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBib2VzdF9vZl90ZXh0ID0gYm9lc3Rfb2ZzLmZpbmQoYm9lc3Rfb2YgPT4gYm9lc3Rfb2YudGltZXN0YW1wLmVwaXNvZGUgPT0gZXBpc29kZS5pZCk/LnRpdGxlID8/IFwiLVwiO1xyXG4gICAgaHRtbF90ZXh0ID0gaHRtbF90ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgne2JvZXN0X29mfScpLCBib2VzdF9vZl90ZXh0KTtcclxuICAgIGNvbnN0IGZpbHRlcmVkX3Nwb25zb3JzOiBTcG9uc29yW10gPSBzcG9uc29ycy5maWx0ZXIoc3BvbnNvciA9PiBzcG9uc29yLnRpbWVzdGFtcHMuZmluZCh0aW1lc3RhbXAgPT4gdGltZXN0YW1wLmVwaXNvZGUgPT0gZXBpc29kZS5pZCkpO1xyXG4gICAgY29uc3Qgc3BvbnNvcnNfdGV4dCA9IGZpbHRlcmVkX3Nwb25zb3JzLm1hcChzcG9uc29yID0+IHNwb25zb3IubmFtZSkuam9pbihcIiwgXCIpO1xyXG4gICAgaHRtbF90ZXh0ID0gaHRtbF90ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgne3Nwb25zb3JzfScpLCBzcG9uc29yc190ZXh0ICE9IFwiXCIgPyBzcG9uc29yc190ZXh0IDogXCItXCIpO1xyXG5cclxuICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWxfdGV4dCwgXCJ0ZXh0L2h0bWxcIikuYm9keTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKFwiaW5kZXgudHMgbG9hZGVkXCIpO1xyXG5cclxuaW1wb3J0IHsgZXBpc29kZXMgfSBmcm9tIFwiLi9kYXRhL2VwaXNvZGVzXCI7XHJcbmltcG9ydCB7IGNvbnZlcnRFcGlzb2RlVG9IVE1MIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IGVwaXNvZGVfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcGlzb2Rlc19jb250ZW50XCIpO1xyXG5lcGlzb2RlX2NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuZXBpc29kZXMuZm9yRWFjaChlcGlzb2RlID0+IGVwaXNvZGVfY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRFcGlzb2RlVG9IVE1MKGVwaXNvZGUpKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
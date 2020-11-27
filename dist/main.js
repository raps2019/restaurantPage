/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pageContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageContent */ "./src/modules/pageContent.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");
/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ "./src/modules/contact.js");
/* harmony import */ var _modules_hours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/hours */ "./src/modules/hours.js");
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/style.css */ "./src/style.css");
console.log("This should log without refreshing")

;

(0,_modules_pageContent__WEBPACK_IMPORTED_MODULE_0__.default)();








// populateMenu(['one','two'])

let main = document.querySelector('#main');
let aboutButton = document.querySelector('#aboutButton');
let menuButton = document.querySelector('#menuButton');
let contactButton = document.querySelector('#contactButton');
let hoursButton = document.querySelector('#hoursButton');

let div = (0,_modules_about__WEBPACK_IMPORTED_MODULE_2__.default)();
main.appendChild(div)

document.addEventListener('click', function(e) {

    aboutButton.className = 'navButton';
    menuButton.className = 'navButton';
    contactButton.className = 'navButton';
    hoursButton.className = 'navButton';


    if (e.target.id === 'aboutButton') {
        aboutButton.classList.add('navButtonActive')
        main.innerHTML = ''
        let div = (0,_modules_about__WEBPACK_IMPORTED_MODULE_2__.default)();
        main.appendChild(div)
    } else if (e.target.id === 'menuButton') {
        menuButton.classList.add('navButtonActive')
        main.innerHTML = ''
        let div = (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.default)();
        main.appendChild(div)
    } else if (e.target.id === 'contactButton') {
        contactButton.classList.add('navButtonActive')
        main.innerHTML = '';
        let div = (0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.default)();
        main.appendChild(div);
    } else if (e.target.id === 'hoursButton') {
        hoursButton.classList.add('navButtonActive')
        main.innerHTML = '';
        let div = (0,_modules_hours__WEBPACK_IMPORTED_MODULE_4__.default)();
        main.appendChild(div);
    }
});

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const populateAbout = () => {
    let div = document.createElement('div')

    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');


    p1.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur pariatur vero repudiandae. Similique commodi pariatur accusantium ipsa. Nobis quod impedit nam sed, modi expedita laboriosam dolor aperiam soluta velit.`

    p2.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur pariatur vero repudiandae. Similique commodi pariatur accusantium ipsa. Nobis quod impedit nam sed, modi expedita laboriosam dolor aperiam soluta velit.`

    p3.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur pariatur vero repudiandae. Similique commodi pariatur accusantium ipsa. Nobis quod impedit nam sed, modi expedita laboriosam dolor aperiam soluta velit.`

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    return div;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateAbout);


/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
let populateContact = () => {
    let div = document.createElement('div');
    let pAddressLine1 = document.createElement('p');
    pAddressLine1.innerHTML = '17 Pura Vida Lane';
    let pAddressLine2 = document.createElement('p');
    pAddressLine2.innerHTML = 'Samara, Costa Rica'
    let pTelephone = document.createElement('p');
    pTelephone.innerHTML = '647-771-2828'

    div.appendChild(pAddressLine1);
    div.appendChild(pAddressLine2);
    div.appendChild(pTelephone)

    return div;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateContact);

/***/ }),

/***/ "./src/modules/hours.js":
/*!******************************!*\
  !*** ./src/modules/hours.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
let populateHours = () => {
    let div = document.createElement('div');
    let hoursList = {
        'Monday':'9am - 10pm',
        'Tuesday':'9am - 10pm',
        'Wednesday':'9am - 10pm',
        'Thursday':'9am - 10pm',
        'Friday':'9am - 10pm',
        'Saturday':'10am - 6pm',
        'Sunday':'10am - 6pm',
    }

    Object.keys(hoursList).forEach(key => {
        let li = document.createElement('li');
        li.innerHTML = `${key} : ${hoursList[key]}`;
        div.appendChild(li);
    });

    return div;
 }

 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateHours);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const populateMenu = function() {

    let menuItems = {'Pizza' : 10 ,'Salad' : 5 ,'Pasta' : 8}

    let div = document.createElement('div');

    Object.keys(menuItems).forEach(key => {
        let li = document.createElement('li');
        div.appendChild(li);
        li.innerHTML = key + ' - ' + menuItems[key];
    });

    return div;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateMenu);

/***/ }),

/***/ "./src/modules/pageContent.js":
/*!************************************!*\
  !*** ./src/modules/pageContent.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
const createNav = (id,options) => {
    let nav = document.createElement('nav');
    nav.setAttribute('id',id);

    options.forEach(element => {
        let li = document.createElement('li');
        li.setAttribute('id',`${element.toLowerCase()}Button`);
        li.setAttribute('class','navButton');
        li.innerHTML = element;
        nav.appendChild(li);
    })
    return nav;
}

const createHeader = (id) => {
    let header = document.createElement('header');
    header.setAttribute('id',id);
    header.innerHTML = `Pablo's`
    return header;
}

const createArticle = (id) => {
    let article = document.createElement('div');
    article.setAttribute('id',id);
    return article;
}

const createFooter = (id,content) => {
    let footer = document.createElement('footer');
    footer.setAttribute('id', id);
    footer.innerHTML = content;
    return footer;
}

const pageLoad = () => {
    let content = document.querySelector('#content'); 

    let nav = createNav('nav', ['ABOUT', 'HOURS' , 'MENU', 'CONTACT']);
    content.appendChild(nav);

    let header = createHeader('header');
    content.appendChild(header);

    let article = createArticle('main');
    content.appendChild(article);

    let footer = createFooter('footer','Developed by Douglas Colaco');
    content.appendChild(footer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map
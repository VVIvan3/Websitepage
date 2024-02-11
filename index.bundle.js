/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHomePage)\n/* harmony export */ });\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\n\nfunction getHomePage() {\n    const contentHolder = document.createElement('div');\n    const title = document.createElement('div');\n    const subtitle = document.createElement('div');\n    const homeMenuNav = document.createElement('button');\n\n    contentHolder.classList.add('home-content');\n    title.classList.add('home-title');\n    subtitle.classList.add('home-subtitle');\n    homeMenuNav.classList.add('home-menu-button');\n\n    title.textContent = 'Restaurant name';\n    subtitle.textContent = 'Cooking tasty food since 1907';\n    homeMenuNav.textContent = 'Our menu';\n    \n    title.appendChild(subtitle);\n    contentHolder.append(title, homeMenuNav);\n\n    return contentHolder;\n}\n\n\n//# sourceURL=webpack://websitepage/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\n\n\nconst contentBody = document.querySelector('#content');\n\nconst navInit = (() => {\n    const navBtns = document.querySelectorAll('.navbtn');\n    navBtns.forEach((btn) => {\n        btn.addEventListener('click', (event) => {\n            switch (event.target.id) {\n                case 'home':\n                    mainControls.loadPage((0,_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n                    mainControls.setHomeMenuNav();\n                    break;\n                case 'menu':\n                    mainControls.loadPage((0,_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n                    break;\n                case 'about':\n                    break;\n            }\n        });\n    });\n})();\n\nclass mainControls {\n    static cleanContentBody() {\n        contentBody.innerHTML = '';\n    }\n    static loadPage(page) {\n        mainControls.cleanContentBody()\n        contentBody.appendChild(page);\n    }\n    static setHomeMenuNav() {\n        const target = document.querySelector('.home-menu-button');\n        target.addEventListener('click', () => {\n            mainControls.loadPage((0,_menuPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n        });\n    }\n}\n\n//# sourceURL=webpack://websitepage/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMenuPage)\n/* harmony export */ });\nfunction getMenuPage () {\n    const menuHolder = document.createElement('div');\n    for (let i = 0; i < 5; i++) {\n        const menuContent = document.createElement('div');\n        const menuTitle = document.createElement('div');\n        const menuText = document.createElement('div');\n        const menuPicHolder = document.createElement('div');\n\n        menuTitle.textContent = `Tasty dish #${i}`\n        menuText.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti velit laborum alias, possimus ducimus, atque impedit accusantium magnam adipisci explicabo minus ullam aspernatur, voluptatum eaque quae doloribus quos ab illo!'\n        menuPicHolder.textContent = 'placeholder';\n\n        menuContent.classList.add('menu-content');\n        menuTitle.classList.add('menu-title');\n        menuText.classList.add('menu-text');\n        menuPicHolder.classList.add('menu-pic');\n        \n        menuContent.append(menuTitle, menuText, menuPicHolder);\n        menuHolder.appendChild(menuContent);\n    }\n    menuHolder.classList.add('menu-holder');\n    return menuHolder;\n}\n\n//# sourceURL=webpack://websitepage/./src/menuPage.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
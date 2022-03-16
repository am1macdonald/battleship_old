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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/reset.css */ \"./src/stylesheets/reset.css\");\n/* harmony import */ var _stylesheets_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/style.sass */ \"./src/stylesheets/style.sass\");\n/* harmony import */ var _scripts_displayControls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/displayControls.js */ \"./src/scripts/displayControls.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/scripts/displayControls.js":
/*!****************************************!*\
  !*** ./src/scripts/displayControls.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sinkShip = function sinkShip() {\n  return 'down she goes!';\n};\n\nvar displayGrid = function displayGrid() {\n  for (var i = 0; i < 10; i += 1) {\n    console.log(i);\n  }\n};\n\ndisplayGrid();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sinkShip);\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/displayControls.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newGame\": () => (/* binding */ newGame),\n/* harmony export */   \"newShip\": () => (/* binding */ newShip)\n/* harmony export */ });\n//  returns a ship\nvar newShip = function newShip(str, num) {\n  var name = str;\n  var length = num;\n  var sunk = false;\n  var hits = 0;\n\n  var isSunk = function isSunk() {\n    return sunk;\n  };\n\n  return {\n    name: name,\n    length: length,\n    isSunk: isSunk\n  };\n};\n\nconsole.log(newShip(\"joe\", 4));\n\nvar newGame = function newGame() {\n  return {};\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/game.js?");

/***/ }),

/***/ "./src/stylesheets/style.sass":
/*!************************************!*\
  !*** ./src/stylesheets/style.sass ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/stylesheets/style.sass?");

/***/ }),

/***/ "./src/stylesheets/reset.css":
/*!***********************************!*\
  !*** ./src/stylesheets/reset.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/stylesheets/reset.css?");

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
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/reset.css */ \"./src/stylesheets/reset.css\");\n/* harmony import */ var _stylesheets_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/style.sass */ \"./src/stylesheets/style.sass\");\n/* harmony import */ var _assets_sakura_LHf_WzBYpo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sakura-_LHf-WzBYpo-unsplash.jpg */ \"./src/assets/sakura-_LHf-WzBYpo-unsplash.jpg\");\n/* harmony import */ var _scripts_DOMControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/DOMControls */ \"./src/scripts/DOMControls.js\");\n/* harmony import */ var _scripts_factories_gameFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/factories/gameFactory */ \"./src/scripts/factories/gameFactory.js\");\n\n\n\n\n\n\nvar onLoad = function () {\n  var dataEntry = (0,_scripts_DOMControls__WEBPACK_IMPORTED_MODULE_3__.playerDataEntry)();\n  var playerName = document.getElementById(\"player-name\");\n  var startButton = document.getElementById(\"start-button\");\n  startButton.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n\n    if (!dataEntry.form.checkValidity()) {\n      return;\n    }\n\n    game = (0,_scripts_factories_gameFactory__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playerName.value, null);\n    console.log(game);\n    var newGameArea = (0,_scripts_DOMControls__WEBPACK_IMPORTED_MODULE_3__.gameArea)(playerName.value, \"Computer Player\");\n    (0,_scripts_DOMControls__WEBPACK_IMPORTED_MODULE_3__.shipDrawer)();\n    dataEntry.overlay.remove();\n  });\n}(); // game = newGame(\"joe\", null);\n// console.log(game);\n// game.playerOneBoard.placeShip(\"carrier\", \"1-2\", \"1-6\");\n// game.playerOneBoard.placeShip(\"battleship\", \"2-1\", \"2-4\");\n// game.playerOneBoard.placeShip(\"cruiser\", \"3-2\", \"3-4\");\n// game.playerOneBoard.placeShip(\"submarine\", \"4-1\", \"4-3\");\n// game.playerOneBoard.placeShip(\"destroyer\", \"6-2\", \"6-3\");\n// const killAll = game.playerOneBoard.getShipLocations();\n// for (const key in killAll) {\n//   console.log(key);\n//   game.playerOneBoard.recieveAttack(key);\n// }\n// console.log(game.playerOneBoard.isFleetSunk());\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/scripts/DOMControls.js":
/*!************************************!*\
  !*** ./src/scripts/DOMControls.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameArea\": () => (/* binding */ gameArea),\n/* harmony export */   \"playerDataEntry\": () => (/* binding */ playerDataEntry),\n/* harmony export */   \"renderBoard\": () => (/* binding */ renderBoard),\n/* harmony export */   \"shipDrawer\": () => (/* binding */ shipDrawer)\n/* harmony export */ });\nvar body = document.querySelector(\"body\");\nvar content = document.getElementById(\"content\");\n\nvar playerDataEntry = function playerDataEntry() {\n  var overlay = document.createElement(\"div\");\n  overlay.classList.add(\"form-overlay\");\n  var container = document.createElement(\"div\");\n  container.classList.add(\"form-container\");\n  var form = document.createElement(\"form\");\n  form.id = \"player-information\";\n  var headerDiv = document.createElement(\"div\");\n  var header = document.createElement(\"h3\");\n  header.innerHTML = \"Who's playing?\";\n  headerDiv.appendChild(header);\n  var inputDiv = document.createElement(\"div\");\n  var label = document.createElement(\"label\");\n  label[\"for\"] = \"player-name\";\n  label.innerHTML = \"Enter Your Name\";\n  var textInput = document.createElement(\"input\");\n  textInput.id = \"player-name\";\n  textInput.required = true;\n  inputDiv.appendChild(label);\n  inputDiv.appendChild(textInput);\n  var buttonDiv = document.createElement(\"div\");\n  var button = document.createElement(\"button\");\n  button.id = \"start-button\";\n  button.innerHTML = \"start\";\n  buttonDiv.appendChild(button);\n  form.appendChild(headerDiv);\n  form.appendChild(inputDiv);\n  form.appendChild(buttonDiv);\n  container.appendChild(form);\n  overlay.appendChild(container);\n  body.appendChild(overlay);\n  return {\n    overlay: overlay,\n    form: form\n  };\n};\n\nvar renderBoard = function renderBoard(parent) {\n  var container = document.createElement(\"div\");\n  container.classList.add(\"gameboard-container\");\n  var board = document.createElement(\"div\");\n  board.classList.add(\"gameboard\");\n\n  for (var y = 10; y >= 1; y -= 1) {\n    var _loop = function _loop(i) {\n      var square = document.createElement(\"div\");\n      square.dataset.coord = \"\".concat(i, \"-\").concat(y);\n      square.addEventListener(\"click\", function () {\n        console.log(square.parentElement.dataset.owner);\n        return {\n          owner: square.parentElement.dataset.owner,\n          coord: square.dataset.coord\n        };\n      });\n      board.appendChild(square);\n    };\n\n    for (var i = 1; i <= 10; i += 1) {\n      _loop(i);\n    }\n  }\n\n  container.appendChild(board);\n  parent.appendChild(container);\n  return board;\n};\n\nvar shipDrawer = function shipDrawer() {\n  var ships = [\"carrier\", \"battleship\", \"cruiser\", \"submarine\", \"destroyer\"];\n  var container = document.createElement(\"div\");\n  container.id = \"ship-drawer\";\n  ships.forEach(function (ship) {\n    var shipDiv = document.createElement(\"div\");\n    shipDiv.id = \"\".concat(ship, \"-selection\");\n    shipDiv.dataset.ship = \"\".concat(ship);\n    shipDiv.innerHTML = \"\".concat(ship);\n    container.appendChild(shipDiv);\n    console.log(ship);\n  });\n  content.appendChild(container);\n  return {\n    container: container\n  };\n};\n\nvar gameArea = function gameArea(playerOneName, playerTwoName) {\n  var container = document.createElement(\"div\");\n  container.id = \"game-area\";\n  var playerOneSide = document.createElement(\"div\");\n  playerOneSide.id = \"player-one-side\";\n  var playerOneTitle = document.createElement(\"h2\");\n  playerOneTitle.innerHTML = playerOneName;\n  playerOneSide.appendChild(playerOneTitle);\n  var playerOneBoard = renderBoard(playerOneSide);\n  playerOneBoard.dataset.owner = playerOneName;\n  var playerTwoSide = document.createElement(\"div\");\n  playerTwoSide.id = \"player-two-side\";\n  var playerTwoTitle = document.createElement(\"h2\");\n  playerTwoTitle.innerHTML = playerTwoName;\n  playerTwoSide.appendChild(playerTwoTitle);\n  var playerTwoBoard = renderBoard(playerTwoSide);\n  playerTwoBoard.dataset.owner = playerTwoName;\n  container.appendChild(playerOneSide);\n  container.appendChild(playerTwoSide);\n  content.appendChild(container);\n  return {\n    container: container,\n    playerOneSide: playerOneSide,\n    playerTwoSide: playerTwoSide,\n    playerOneBoard: playerOneBoard,\n    playerTwoBoard: playerTwoBoard\n  };\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/DOMControls.js?");

/***/ }),

/***/ "./src/scripts/factories/boardFactory.js":
/*!***********************************************!*\
  !*** ./src/scripts/factories/boardFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ \"./src/scripts/factories/shipFactory.js\");\n\n\n\nvar newBoard = function newBoard(ownerName) {\n  var shipLengths = {\n    carrier: 5,\n    battleship: 4,\n    cruiser: 3,\n    submarine: 3,\n    destroyer: 2\n  };\n  var shipyard = {};\n  var shipLocations = {};\n  var shots = [];\n  var owner = ownerName;\n\n  var getShipLocations = function getShipLocations() {\n    return shipLocations;\n  };\n\n  var getOwnerName = function getOwnerName() {\n    return owner;\n  };\n\n  var getShots = function getShots() {\n    return shots;\n  };\n\n  function placeShip(name, start, end) {\n    var temp = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name, shipLengths[name], start, end);\n    var map = temp.getHitMap();\n\n    for (var key in map) {\n      if (shipLocations.hasOwnProperty(key)) {\n        throw new Error(\"space already occupied\");\n      }\n    }\n\n    shipyard[name] = temp;\n\n    for (var _key in map) {\n      shipLocations[_key] = name;\n    }\n\n    return shipyard;\n  }\n\n  function recieveAttack(location) {\n    var coords = location;\n\n    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(location) === \"object\") {\n      coords = location.join(\"-\");\n    }\n\n    if (shots.includes(coords)) {\n      throw new Error(\"already shot here!\");\n    }\n\n    shots.push(coords);\n\n    if (shipLocations.hasOwnProperty(coords)) {\n      var target = shipLocations[coords];\n      shipyard[target].directHit(location);\n\n      if (shipyard[target].isSunk() === true) {\n        return \"sunk\";\n      }\n\n      return \"hit\";\n    }\n\n    return \"miss\";\n  }\n\n  function isFleetSunk() {\n    var allShipsSunk = true;\n\n    for (var key in shipyard) {\n      if (shipyard[key].isSunk() === false) {\n        allShipsSunk = false;\n      }\n    }\n\n    return allShipsSunk;\n  }\n\n  function nextShip() {\n    for (var key in shipLengths) {}\n  }\n\n  return {\n    placeShip: placeShip,\n    recieveAttack: recieveAttack,\n    isFleetSunk: isFleetSunk,\n    getShots: getShots,\n    getOwnerName: getOwnerName,\n    getShipLocations: getShipLocations,\n    nextShip: nextShip\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newBoard);\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/factories/boardFactory.js?");

/***/ }),

/***/ "./src/scripts/factories/gameFactory.js":
/*!**********************************************!*\
  !*** ./src/scripts/factories/gameFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _boardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardFactory */ \"./src/scripts/factories/boardFactory.js\");\n/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerFactory */ \"./src/scripts/factories/playerFactory.js\");\n\n\n\nvar newGame = function newGame(playerOneName, playerTwoName) {\n  var state = \"setup\";\n  var playerOne = playerOneName ? (0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__.player)(playerOneName) : null;\n  var playerTwo = playerTwoName ? (0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__.player)(playerTwoName) : Object.assign((0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__.player)(\"Computer Player\"), (0,_playerFactory__WEBPACK_IMPORTED_MODULE_1__.computerMover)());\n  var playerOneBoard = (0,_boardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerOne);\n  var playerTwoBoard = (0,_boardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerTwo);\n  var turn = \"playerOne\";\n\n  var toggleTurn = function toggleTurn() {\n    if (turn === \"playerOne\") {\n      turn = \"playerTwo\";\n    } else {\n      turn = \"playerOne\";\n    }\n  };\n\n  var nextState = function nextState() {\n    if (state === \"setup\") {}\n\n    return state;\n  };\n\n  return {\n    playerOne: playerOne,\n    playerTwo: playerTwo,\n    playerOneBoard: playerOneBoard,\n    playerTwoBoard: playerTwoBoard,\n    toggleTurn: toggleTurn\n  };\n};\n\nnewGame(\"joe\", null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newGame);\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/factories/gameFactory.js?");

/***/ }),

/***/ "./src/scripts/factories/playerFactory.js":
/*!************************************************!*\
  !*** ./src/scripts/factories/playerFactory.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computerMover\": () => (/* binding */ computerMover),\n/* harmony export */   \"player\": () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _boardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardFactory */ \"./src/scripts/factories/boardFactory.js\");\n\n\nvar player = function player(name) {\n  var playerName = name;\n  var turn = false;\n\n  var getName = function getName() {\n    return playerName;\n  };\n\n  var myTurn = function myTurn() {\n    turn = true;\n  };\n\n  var takeTurn = function takeTurn(coord, board) {\n    if (!turn) {\n      throw new Error(\"not your turn\");\n    } else if (board.includes(coord)) {\n      throw new Error(\"already shot there\");\n    } else return \"splash\";\n  };\n\n  return {\n    getName: getName,\n    takeTurn: takeTurn,\n    myTurn: myTurn\n  };\n};\n\nvar computerMover = function computerMover() {\n  var placedShips = {\n    carrier: 5,\n    battleship: 4,\n    cruiser: 3,\n    submarine: 3,\n    destroyer: 2\n  };\n\n  var makeOwnChoices = function makeOwnChoices(board) {\n    var coord = \"\".concat(Math.floor(Math.random() * 10) + 1, \"-\").concat(Math.floor(Math.random() * 10) + 1);\n\n    if (board.includes(coord)) {\n      makeOwnChoices(board);\n    }\n\n    return coord;\n  };\n\n  var placeOwnShips = function placeOwnShips(board) {};\n\n  return {\n    makeOwnChoices: makeOwnChoices,\n    placeOwnShips: placeOwnShips\n  };\n}; // const computer = Object.assign(player(\"computer\"), computerMover());\n// const computerBoard = newBoard(\"computer\");\n// computer.placeOwnShips(computerBoard);\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/factories/playerFactory.js?");

/***/ }),

/***/ "./src/scripts/factories/shipFactory.js":
/*!**********************************************!*\
  !*** ./src/scripts/factories/shipFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\n\nvar newShip = function newShip(str, num, front, rear) {\n  var name = str;\n  var length = num;\n\n  var splitAndParse = function splitAndParse(str) {\n    return [parseInt(str.split(\"-\")[0], 10), parseInt(str.split(\"-\")[1], 10)];\n  };\n\n  var coords = {\n    start: {\n      x: splitAndParse(front)[0],\n      y: splitAndParse(front)[1]\n    },\n    end: {\n      x: splitAndParse(rear)[0],\n      y: splitAndParse(rear)[1]\n    }\n  };\n  var sunk = false;\n  var hitMap = {};\n\n  var getHitMap = function getHitMap() {\n    return hitMap;\n  };\n\n  var getName = function getName() {\n    return name;\n  };\n\n  var getLength = function getLength() {\n    return length;\n  };\n\n  var isSunk = function isSunk() {\n    return sunk;\n  }; // the following builds the hitMap of the ship\n\n\n  (function () {\n    if (!coords) {\n      return;\n    }\n\n    if (coords.start.x === coords.end.x) {\n      var constant = coords.start.x;\n      var start = coords.start.y <= coords.end.y ? coords.start.y : coords.end.y;\n\n      for (var i = 0; i < length; i += 1) {\n        hitMap[\"\".concat(constant, \"-\").concat(start + i)] = false;\n      }\n    } else if (coords.start.y === coords.end.y) {\n      var _constant = coords.start.y;\n\n      var _start = coords.start.x <= coords.end.x ? coords.start.x : coords.end.x;\n\n      for (var _i = 0; _i < length; _i += 1) {\n        hitMap[\"\".concat(_start + _i, \"-\").concat(_constant)] = false;\n      }\n    } else {\n      throw new Error(\"no diagonal!\");\n    }\n  })();\n\n  var checkHull = function checkHull() {\n    var status = true;\n\n    for (var key in hitMap) {\n      if (hitMap[key] === false) {\n        status = false;\n      }\n    }\n\n    sunk = status;\n    return sunk;\n  };\n\n  var directHit = function directHit(hitLocation) {\n    var hit = (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hitLocation) === \"object\" ? hitLocation.join(\"-\") : hitLocation;\n\n    if (sunk === true) {\n      throw new Error(\"already down\");\n    }\n\n    for (var key in hitMap) {\n      if (key === hit) {\n        hitMap[key] = true;\n      }\n    }\n\n    checkHull();\n    return hitMap;\n  };\n\n  return {\n    getName: getName,\n    getLength: getLength,\n    directHit: directHit,\n    isSunk: isSunk,\n    getHitMap: getHitMap\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newShip);\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/factories/shipFactory.js?");

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

/***/ }),

/***/ "./src/assets/sakura-_LHf-WzBYpo-unsplash.jpg":
/*!****************************************************!*\
  !*** ./src/assets/sakura-_LHf-WzBYpo-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9c16fd44d583c863a460.jpg\";\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/sakura-_LHf-WzBYpo-unsplash.jpg?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
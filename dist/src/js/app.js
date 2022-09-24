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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap-grid.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap-grid.min.css\");\n/* harmony import */ var _formulario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario */ \"./src/js/formulario.js\");\n\n\n\nconsole.log(_formulario__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n/*\nconst names = [\"Jeff\", \"Jose\", \"Rhino\", \"Caue\"];\nconst div = document.getElementById(\"nomes\")\n// create a loop trough array names and insert each name in the div\nfor (let i = 0) i < names.length; i++) {\n    div.innerHTML += names[i] + \" \";\n}\n*/\n\n//# sourceURL=webpack://projetoWeb/./src/js/app.js?");

/***/ }),

/***/ "./src/js/formulario.js":
/*!******************************!*\
  !*** ./src/js/formulario.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//const form = document.getElementById(\"formCadastro\");\n//console.log(form);\nvar initForm = function initForm(whatForm) {\n  // buscou o elemento do DOM\n  var formRequired = document.getElementById(whatForm); // buscamos os filhos de input\n\n  var inputs = formRequired.querySelectorAll(\"input\"); // perguntamos se existe algum input\n\n  if (inputs) {\n    // se existir, percorremos o array de inputs\n    inputs.forEach(function (input) {\n      // exibir no console o valor de cada input\n      console.log(input.value);\n    });\n  } else {\n    // se não existir, exibimos uma mensagem no console\n    console.log(\"Não existe inputs neste formulário\");\n  }\n};\n\nvar init = function init(whatForm) {\n  // recebe o elemento DOM de acordo com a String do ID\n  var formRequerido = document.getElementById(whatForm); // busca o botão de submit para este formulário\n\n  var submit = formRequerido.querySelector(\"input[type=submit]\"); // adiciona um evento de click no botão\n\n  submit.addEventListener(\"click\", function (event) {\n    // previne que o elemento, no caso o input submit, faça o que ele faz por padrão\n    event.preventDefault(); // chama a função que criamos\n\n    initForm(formRequerido);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://projetoWeb/./src/js/formulario.js?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap-grid.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap-grid.min.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://projetoWeb/./node_modules/bootstrap/dist/css/bootstrap-grid.min.css?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://projetoWeb/./src/scss/app.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;
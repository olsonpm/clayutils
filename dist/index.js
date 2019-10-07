/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports.findComponentRefInPage = __webpack_require__(/*! ./lib/findComponentRefInPage */ \"./lib/findComponentRefInPage/index.js\");\nmodule.exports.getComponentInstance = __webpack_require__(/*! ./lib/getComponentInstance */ \"./lib/getComponentInstance/index.js\");\nmodule.exports.getLayoutInstance = __webpack_require__(/*! ./lib/getLayoutInstance */ \"./lib/getLayoutInstance/index.js\");\nmodule.exports.getComponentName = __webpack_require__(/*! ./lib/getComponentName */ \"./lib/getComponentName/index.js\");\nmodule.exports.getLayoutName = __webpack_require__(/*! ./lib/getLayoutName */ \"./lib/getLayoutName/index.js\");\nmodule.exports.getComponentVersion = __webpack_require__(/*! ./lib/getComponentVersion */ \"./lib/getComponentVersion/index.js\");\nmodule.exports.getPageInstance = __webpack_require__(/*! ./lib/getPageInstance */ \"./lib/getPageInstance/index.js\");\nmodule.exports.getPageVersion = __webpack_require__(/*! ./lib/getPageVersion */ \"./lib/getPageVersion/index.js\");\nmodule.exports.getListInstance = __webpack_require__(/*! ./lib/getListInstance */ \"./lib/getListInstance/index.js\");\nmodule.exports.getPrefix = __webpack_require__(/*! ./lib/getPrefix */ \"./lib/getPrefix/index.js\");\nmodule.exports.isComponent = __webpack_require__(/*! ./lib/isComponent */ \"./lib/isComponent/index.js\");\nmodule.exports.isLayout = __webpack_require__(/*! ./lib/isLayout */ \"./lib/isLayout/index.js\");\nmodule.exports.isLayoutMeta = __webpack_require__(/*! ./lib/isLayoutMeta */ \"./lib/isLayoutMeta/index.js\");\nmodule.exports.isDefaultComponent = __webpack_require__(/*! ./lib/isDefaultComponent */ \"./lib/isDefaultComponent/index.js\");\nmodule.exports.isDefaultLayout = __webpack_require__(/*! ./lib/isDefaultLayout */ \"./lib/isDefaultLayout/index.js\");\nmodule.exports.isPage = __webpack_require__(/*! ./lib/isPage */ \"./lib/isPage/index.js\");\nmodule.exports.isPageMeta = __webpack_require__(/*! ./lib/isPageMeta */ \"./lib/isPageMeta/index.js\");\nmodule.exports.isPublished = __webpack_require__(/*! ./lib/isPublished */ \"./lib/isPublished/index.js\");\nmodule.exports.isList = __webpack_require__(/*! ./lib/isList */ \"./lib/isList/index.js\");\nmodule.exports.isUri = __webpack_require__(/*! ./lib/isUri */ \"./lib/isUri/index.js\");\nmodule.exports.isUser = __webpack_require__(/*! ./lib/isUser */ \"./lib/isUser/index.js\");\nmodule.exports.replaceVersion = __webpack_require__(/*! ./lib/replaceVersion */ \"./lib/replaceVersion/index.js\");\nmodule.exports.uriPrefixToSlug = __webpack_require__(/*! ./lib/uriPrefixToSlug */ \"./lib/uriPrefixToSlug/index.js\");\nmodule.exports.uriSlugToPrefix = __webpack_require__(/*! ./lib/uriSlugToPrefix */ \"./lib/uriSlugToPrefix/index.js\");\nmodule.exports.jsonPrefixToSlug = __webpack_require__(/*! ./lib/jsonPrefixToSlug */ \"./lib/jsonPrefixToSlug/index.js\");\nmodule.exports.jsonSlugToPrefix = __webpack_require__(/*! ./lib/jsonSlugToPrefix */ \"./lib/jsonSlugToPrefix/index.js\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./lib/findComponentRefInPage/index.js":
/*!*********************************************!*\
  !*** ./lib/findComponentRefInPage/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar getComponentName = __webpack_require__(/*! ../getComponentName */ \"./lib/getComponentName/index.js\"),\n    _require = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\"),\n    strCheck = _require.strCheck;\n\nmodule.exports = function (page, componentName) {\n  strCheck(componentName);\n\n  if (_typeof(page) !== 'object') {\n    throw new Error(\"Page argument must be an object, not \".concat(_typeof(page)));\n  }\n\n  return Object.values(page).filter(Array.isArray).reduce(function (acc, val) {\n    return acc.concat(val);\n  }, []).find(function (cmpt) {\n    return getComponentName(cmpt) === componentName;\n  });\n};\n\n//# sourceURL=webpack:///./lib/findComponentRefInPage/index.js?");

/***/ }),

/***/ "./lib/getComponentInstance/index.js":
/*!*******************************************!*\
  !*** ./lib/getComponentInstance/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument passed in is a String. If true, get component instance\n * from uri without the component version. Otherwise, throw an error.\n * @example /_components/text/instances/0@published returns 0\n * @param  {string} uri\n * @return {string|null}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  var result = /\\/_components\\/.+?\\/instances\\/([^\\.@]+)/.exec(uri);\n  return result && result[1];\n};\n\n//# sourceURL=webpack:///./lib/getComponentInstance/index.js?");

/***/ }),

/***/ "./lib/getComponentName/index.js":
/*!***************************************!*\
  !*** ./lib/getComponentName/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument passed in is a String. If true, get component name\n * from uri. Otherwise throw an error.\n * @example /_components/base  returns base\n * @example /_components/text/instances/0  returns text\n * @example /_components/image.html  returns image\n * @param  {string} uri\n * @return {string|null}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  var result = /_components\\/(.+?)[\\/\\.]/.exec(uri) || /_components\\/(.*)/.exec(uri);\n  return result && result[1];\n};\n\n//# sourceURL=webpack:///./lib/getComponentName/index.js?");

/***/ }),

/***/ "./lib/getComponentVersion/index.js":
/*!******************************************!*\
  !*** ./lib/getComponentVersion/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if the argument passed in is a String. If true, get component version from uri.\n * Otherwise throw an error.\n * @example /_components/foo/instances/bar@published returns published\n * @param  {string} uri\n * @return {string|null}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  var result = /\\/_components\\/.+?@(.+)/.exec(uri);\n  return result && result[1];\n};\n\n//# sourceURL=webpack:///./lib/getComponentVersion/index.js?");

/***/ }),

/***/ "./lib/getLayoutInstance/index.js":
/*!****************************************!*\
  !*** ./lib/getLayoutInstance/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument passed in is a String. If true, get layout instance\n * from uri without the layout version. Otherwise, throw an error.\n * @example /_layouts/text/instances/0@published returns 0\n * @param  {string} uri\n * @return {string|null}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  var result = /\\/_layouts\\/.+?\\/instances\\/([^\\.\\/@]+)/.exec(uri);\n  return result && result[1];\n};\n\n//# sourceURL=webpack:///./lib/getLayoutInstance/index.js?");

/***/ }),

/***/ "./lib/getLayoutName/index.js":
/*!************************************!*\
  !*** ./lib/getLayoutName/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument passed in is a String. If true, get layout name\n * from uri. Otherwise throw an error.\n * @example /_layouts/base  returns base\n * @example /_layouts/text/instances/0  returns text\n * @example /_layouts/image.html  returns image\n * @param  {string} uri\n * @return {string|null}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  var result = /_layouts\\/(.+?)[\\/\\.]/.exec(uri) || /_layouts\\/(.*)/.exec(uri);\n  return result && result[1];\n};\n\n//# sourceURL=webpack:///./lib/getLayoutName/index.js?");

/***/ }),

/***/ "./lib/getListInstance/index.js":
/*!**************************************!*\
  !*** ./lib/getListInstance/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument passed in is a String. If true, get list instance\n * from URI. Otherwise, throw an error.\n * @example /_lists/foo returns \"foo\"\n * @param  {string} uri\n * @return {string|null}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  var result = /\\/_lists\\/(.*)/.exec(uri);\n  return result && result[1];\n};\n\n//# sourceURL=webpack:///./lib/getListInstance/index.js?");

/***/ }),

/***/ "./lib/getPageInstance/index.js":
/*!**************************************!*\
  !*** ./lib/getPageInstance/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument passed in is a String. If true, get page instance\n * from uri that includes page version. Otherwise, throw an error.\n * @example /_pages/cj21ud3rt00wmqpyefc944hez@published returns cj21ud3rt00wmqpyefc944hez@published\n * @param  {string} uri\n * @return {string|null}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  var result = /\\/_pages\\/([^\\.\\/]+)/.exec(uri);\n  return result && result[1];\n};\n\n//# sourceURL=webpack:///./lib/getPageInstance/index.js?");

/***/ }),

/***/ "./lib/getPageVersion/index.js":
/*!*************************************!*\
  !*** ./lib/getPageVersion/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if the argument passed in is a String. If true, get page version from uri.\n * Otherwise throw an error.\n * @example /_pages/foo/@published returns published\n * @param  {string} uri\n * @return {string|null}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  var result = /\\/_pages\\/.+?@(.+)/.exec(uri);\n  return result && result[1];\n};\n\n//# sourceURL=webpack:///./lib/getPageVersion/index.js?");

/***/ }),

/***/ "./lib/getPrefix/index.js":
/*!********************************!*\
  !*** ./lib/getPrefix/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * Return the site prefix from the URI.\n * @param  {string}  uri\n * @return {string}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return uri.split(/\\/_(pages|components|lists|uris|schedule|users|layouts|sites)/)[0];\n};\n\n//# sourceURL=webpack:///./lib/getPrefix/index.js?");

/***/ }),

/***/ "./lib/isComponent/index.js":
/*!**********************************!*\
  !*** ./lib/isComponent/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument is a String. If true, test if '/_components/' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return uri.toLowerCase().indexOf('/_components/') > -1;\n};\n\n//# sourceURL=webpack:///./lib/isComponent/index.js?");

/***/ }),

/***/ "./lib/isDefaultComponent/index.js":
/*!*****************************************!*\
  !*** ./lib/isDefaultComponent/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument passed in is a String. If true, determine if a uri points\n * to a DEFAULT instance of a component. Otherwise, throw an error.\n *\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return !!uri.match(/\\/_components\\/[A-Za-z0-9\\-]+$/);\n};\n\n//# sourceURL=webpack:///./lib/isDefaultComponent/index.js?");

/***/ }),

/***/ "./lib/isDefaultLayout/index.js":
/*!**************************************!*\
  !*** ./lib/isDefaultLayout/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument passed in is a String. If true, determine if a uri points\n * to a DEFAULT instance of a layout. Otherwise, throw an error.\n *\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return !!uri.match(/\\/_layouts\\/[A-Za-z0-9\\-]+$/);\n};\n\n//# sourceURL=webpack:///./lib/isDefaultLayout/index.js?");

/***/ }),

/***/ "./lib/isLayout/index.js":
/*!*******************************!*\
  !*** ./lib/isLayout/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument is a String. If true, test if '/_layouts/' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return uri.toLowerCase().indexOf('/_layouts/') > -1;\n};\n\n//# sourceURL=webpack:///./lib/isLayout/index.js?");

/***/ }),

/***/ "./lib/isLayoutMeta/index.js":
/*!***********************************!*\
  !*** ./lib/isLayoutMeta/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\"),\n    isLayout = __webpack_require__(/*! ../isLayout */ \"./lib/isLayout/index.js\"),\n    getLayoutInstance = __webpack_require__(/*! ../getLayoutInstance */ \"./lib/getLayoutInstance/index.js\");\n/**\n * First test if argument is a String. If true, test if '/_layouts/:name/instances/:id/meta' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return isLayout(uri) && !!getLayoutInstance(uri) && !!uri.match(/\\/meta$/i);\n};\n\n//# sourceURL=webpack:///./lib/isLayoutMeta/index.js?");

/***/ }),

/***/ "./lib/isList/index.js":
/*!*****************************!*\
  !*** ./lib/isList/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument is a String. If true, test if '/_lists/' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return uri.toLowerCase().indexOf('/_lists/') > -1;\n};\n\n//# sourceURL=webpack:///./lib/isList/index.js?");

/***/ }),

/***/ "./lib/isPage/index.js":
/*!*****************************!*\
  !*** ./lib/isPage/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument is a String. If true, test if '/_pages/' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return uri.toLowerCase().indexOf('/_pages/') > -1;\n};\n\n//# sourceURL=webpack:///./lib/isPage/index.js?");

/***/ }),

/***/ "./lib/isPageMeta/index.js":
/*!*********************************!*\
  !*** ./lib/isPageMeta/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\"),\n    isPage = __webpack_require__(/*! ../isPage */ \"./lib/isPage/index.js\");\n/**\n * First test if argument is a String. If true, test if '/_pages/:id/meta' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return isPage(uri) && !!uri.match(/\\/meta$/i);\n};\n\n//# sourceURL=webpack:///./lib/isPageMeta/index.js?");

/***/ }),

/***/ "./lib/isPublished/index.js":
/*!**********************************!*\
  !*** ./lib/isPublished/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument is a String. If true, test if '@published' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return uri.indexOf('@published') !== -1;\n};\n\n//# sourceURL=webpack:///./lib/isPublished/index.js?");

/***/ }),

/***/ "./lib/isUri/index.js":
/*!****************************!*\
  !*** ./lib/isUri/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument is a String. If true, test if '/_uris/' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return uri.toLowerCase().indexOf('/_uris/') > -1;\n};\n\n//# sourceURL=webpack:///./lib/isUri/index.js?");

/***/ }),

/***/ "./lib/isUser/index.js":
/*!*****************************!*\
  !*** ./lib/isUser/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * First test if argument is a String. If true, test if '/_users/' is in the string.\n * Otherwise, throw an error.\n * @param  {string}  uri\n * @return {Boolean}\n */\n\n\nmodule.exports = function (uri) {\n  isUriStringCheck.strCheck(uri);\n  return uri.toLowerCase().indexOf('/_users/') > -1;\n};\n\n//# sourceURL=webpack:///./lib/isUser/index.js?");

/***/ }),

/***/ "./lib/jsonPrefixToSlug/index.js":
/*!***************************************!*\
  !*** ./lib/jsonPrefixToSlug/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * Given stringified JSON, swap out the site's url-patterned prefix for\n * the site's slug\n *\n * @param  {String}  json\n * @param  {Object}  site\n * @param  {Boolean} [ref=false]\n * @return {String}\n */\n\n\nmodule.exports = function (json, site) {\n  var ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var slug = site.slug,\n      host = site.host,\n      path = site.path,\n      prefix = site.prefix,\n      prefixString,\n      replaceString,\n      searchRegex;\n  isUriStringCheck.strCheck(json);\n\n  if (!prefix) {\n    prefix = path && path.length > 1 ? \"\".concat(host).concat(path) : host;\n  }\n\n  prefixString = \"\".concat(ref ? '\"_ref\":' : '', \"\\\"\").concat(prefix, \"/_components/\");\n  replaceString = \"\".concat(ref ? '\"_ref\":' : '', \"\\\"\").concat(slug, \"/_components/\");\n  searchRegex = new RegExp(prefixString, 'g');\n  return json.replace(searchRegex, replaceString);\n};\n\n//# sourceURL=webpack:///./lib/jsonPrefixToSlug/index.js?");

/***/ }),

/***/ "./lib/jsonSlugToPrefix/index.js":
/*!***************************************!*\
  !*** ./lib/jsonSlugToPrefix/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * Given stringified JSON, conver the site's slug\n * to the url-patterned site prefix\n *\n * @param  {Object} site\n * @param  {String} ref\n * @return {Function}\n */\n\n\nmodule.exports = function (site) {\n  var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return function (json) {\n    var slug = site.slug,\n        host = site.host,\n        path = site.path,\n        prefix = site.prefix,\n        prefixString,\n        searchString,\n        searchRegex;\n    isUriStringCheck.strCheck(json);\n\n    if (!prefix) {\n      prefix = path && path.length > 1 ? \"\".concat(host).concat(path) : host;\n    }\n\n    prefixString = \"\".concat(ref ? '\"_ref\":' : '', \"\\\"\").concat(prefix, \"/_components/\");\n    searchString = \"\".concat(ref ? '\"_ref\":' : '', \"\\\"\").concat(slug, \"/_components/\");\n    searchRegex = new RegExp(searchString, 'g');\n    return json.replace(searchRegex, prefixString);\n  };\n};\n\n//# sourceURL=webpack:///./lib/jsonSlugToPrefix/index.js?");

/***/ }),

/***/ "./lib/replaceVersion/index.js":
/*!*************************************!*\
  !*** ./lib/replaceVersion/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * replace version in uri\n * @param  {string} uri\n * @param  {string} [version] defaults to latest\n * @return {string}\n */\n\n\nmodule.exports = function (uri, version) {\n  isUriStringCheck.strCheck(uri);\n\n  if (version) {\n    return uri.split('@')[0] + '@' + version;\n  } else {\n    // no version is still a kind of version\n    return uri.split('@')[0];\n  }\n};\n\n//# sourceURL=webpack:///./lib/replaceVersion/index.js?");

/***/ }),

/***/ "./lib/strCheck.js":
/*!*************************!*\
  !*** ./lib/strCheck.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Return true if argument passed in is a string. If not, throw an error.\n * strCheck is used in each util function to check if the URI passed in is a string.\n *\n * @param  {string} arg\n * @return {boolean|error}\n */\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction strCheck(arg) {\n  if (typeof arg === 'string') {\n    return true;\n  } else {\n    throw new Error('Argument must be a string, not ' + _typeof(arg));\n  }\n}\n\nmodule.exports.strCheck = strCheck;\n\n//# sourceURL=webpack:///./lib/strCheck.js?");

/***/ }),

/***/ "./lib/uriPrefixToSlug/index.js":
/*!**************************************!*\
  !*** ./lib/uriPrefixToSlug/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * Remove the url-patterned prefix for the site's slug.\n *\n * @param  {String} uri\n * @param  {Object} site\n * @return {String}\n */\n\n\nmodule.exports = function (uri, site) {\n  var slug = site.slug,\n      host = site.host,\n      path = site.path,\n      prefix = site.prefix,\n      hasSlash = uri.indexOf('/_') !== -1;\n\n  if (!prefix) {\n    prefix = path && path.length > 1 ? \"\".concat(host).concat(path) : host;\n  }\n\n  isUriStringCheck.strCheck(uri);\n  return uri.replace(\"\".concat(prefix).concat(hasSlash ? '/' : ''), \"\".concat(slug).concat(hasSlash ? '/' : ''));\n};\n\n//# sourceURL=webpack:///./lib/uriPrefixToSlug/index.js?");

/***/ }),

/***/ "./lib/uriSlugToPrefix/index.js":
/*!**************************************!*\
  !*** ./lib/uriSlugToPrefix/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isUriStringCheck = __webpack_require__(/*! ../strCheck */ \"./lib/strCheck.js\");\n/**\n * Remove the site's slug for the url-patterned prefix\n *\n * @param  {String} uri\n * @param  {Object} site\n * @return {String}\n */\n\n\nmodule.exports = function (uri, site) {\n  var slug = site.slug,\n      host = site.host,\n      path = site.path,\n      prefix = site.prefix,\n      hasSlash = uri.indexOf('/_') !== -1;\n\n  if (!prefix) {\n    prefix = path && path.length > 1 ? \"\".concat(host).concat(path) : host;\n  }\n\n  isUriStringCheck.strCheck(uri);\n  return uri.replace(\"\".concat(slug).concat(hasSlash ? '/' : ''), \"\".concat(prefix).concat(hasSlash ? '/' : ''));\n};\n\n//# sourceURL=webpack:///./lib/uriSlugToPrefix/index.js?");

/***/ })

/******/ });
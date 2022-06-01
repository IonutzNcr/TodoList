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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".hidden{\\n    display:none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/allIn.js":
/*!**********************!*\
  !*** ./src/allIn.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _default_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default_page */ \"./src/default_page.js\");\n/* harmony import */ var _appender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appender */ \"./src/appender.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _displayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayer */ \"./src/displayer.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stock */ \"./src/stock.js\");\n/* harmony import */ var _default_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default_category */ \"./src/default_category.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"load\",_localStorage__WEBPACK_IMPORTED_MODULE_9__.checkState);\n\n//# sourceURL=webpack://todolist/./src/allIn.js?");

/***/ }),

/***/ "./src/appender.js":
/*!*************************!*\
  !*** ./src/appender.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\nconst appender = (()=>{\n    const append_category = (category)=>{\n        const div = document.createElement(\"div\");\n        div.setAttribute(\"id\",category.id);\n        const p = document.createElement(\"p\");\n        if(category.isBold){\n            p.classList.add(\"bold\");\n        }\n        p.textContent = `${category.title}`;\n        p.addEventListener(\"click\",_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display_items.bind(null,p));\n        const button  = document.createElement(\"button\");\n        button.textContent = \"X\";\n        button.addEventListener(\"click\",_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove_category.bind(null,button))\n\n        div.appendChild(p);\n        div.appendChild(button);\n\n        document.querySelector(\"#categories_container\").appendChild(div);\n    }\n\n    const remove_items_from_DOM = ()=>{\n        const items = [...document.querySelectorAll(\"#items_container>div\")];\n        const container = document.querySelector(\"#items_container\");\n        items.forEach(e=>{\n            container.removeChild(e);\n        });\n        \n    }\n    const append_items = (category)=>{\n        category.items.forEach(e=>{\n            const div = document.createElement(\"div\");\n            div.setAttribute(\"data-id\",e.id);\n            div.setAttribute(\"data-family\",category.id);\n            const div_visible = document.createElement(\"div\");\n            div_visible.classList.add(\"visible\");\n            const p_title = document.createElement(\"p\");\n            p_title.textContent = e.title;\n            const p_dueDate = document.createElement(\"p\");\n            p_dueDate.textContent = e.dueDate;\n            const button_remove = document.createElement(\"button\");\n            button_remove.textContent = \"x\";\n            button_remove.addEventListener(\"click\",_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove_item.bind(null,button_remove));\n            \n            const div_hidden = document.createElement(\"div\");\n            div_hidden.classList.add(\"hidden\");\n            const p_description = document.createElement(\"p\");\n            p_description.textContent = e.description;\n            div_hidden.appendChild(p_description);\n\n            const div_show_details = document.createElement(\"div\");\n            const button_show_details = document.createElement(\"button\");\n            button_show_details.textContent = '___';\n            button_show_details.addEventListener(\"click\",_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display_details.bind(null,button_show_details));\n            div_show_details.appendChild(button_show_details) \n\n            div_visible.appendChild(p_title);\n            div_visible.appendChild(p_dueDate);\n            div_visible.appendChild(button_remove);\n            \n            div.appendChild(div_visible);\n            div.appendChild(div_hidden);\n            div.appendChild(div_show_details);\n\n            document.querySelector(\"#items_container\").appendChild(div);\n        })\n    };\n\n    const remove_categories_from_DOM=()=>{\n        const categories = document.querySelectorAll(\"#categories_container>div\")\n        categories.forEach(e=>document.querySelector(\"#categories_container\").removeChild(e));\n    }\n\n    return {\n        append_category,\n        append_items,\n        remove_items_from_DOM,\n        remove_categories_from_DOM,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appender);\n\n//# sourceURL=webpack://todolist/./src/appender.js?");

/***/ }),

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction categoryFactory(title,id,isBold=true){\n    return{\n        title,\n        id,\n        items:[{title:\"Lala\",description:\"Omg\",id:0,dueDate:\"none\",priority:\"low\",checklist:false}],\n        isBold,\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryFactory);\n\n//# sourceURL=webpack://todolist/./src/category.js?");

/***/ }),

/***/ "./src/collector.js":
/*!**************************!*\
  !*** ./src/collector.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst collector = (()=>{\n    const getDataForNewCategory = ()=>{\n        return {\n            title:document.querySelector('#input_category').value,\n        }\n    }\n\n    const getDataForItem = ()=>{\n        return{\n            title:document.querySelector('#input_title').value,\n            dueDate:document.querySelector('#input_dueDate').value,\n            description:document.querySelector('#input_description').value,\n            get category_id(){\n                //c'est ici\n                const ps = [...document.querySelectorAll(\"#categories_container p\")];\n                let id;\n                ps.forEach(e=>{\n                    if(e.className.includes(\"bold\")){\n                        const category_id = e.parentNode.id;\n                        id = category_id;\n                    }\n                })\n                return id;\n            },\n            get priority(){\n                let a = document.querySelector('#hight');\n                let b = document.querySelector('#low');\n               \n                if(document.querySelector('#hight').checked){\n                    return a.value;\n                } \n                if(document.querySelector('#low').checked){\n                    return b.value;\n                }\n                return 'low';\n            }\n        }\n    }\n\n    return{\n        getDataForNewCategory,\n        getDataForItem,\n    }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collector);\n\n//# sourceURL=webpack://todolist/./src/collector.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock */ \"./src/stock.js\");\n\n\n\nconst controller = (()=>{\n    const add_category = (category) => {\n        _stock__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(category);\n    }\n\n    const remove_category = (category) =>{\n        const index = +category.id;\n        _stock__WEBPACK_IMPORTED_MODULE_1__[\"default\"].splice(index,1);\n    }\n\n    const add_item = (category,item)=>{\n        category.items.push(item);\n    }\n\n    const remove_item = (category,item)=>{\n        const index = +item.id;\n        category.items.splice(index,1);\n    }\n\n    const update_priority = (category,item,new_priority)=>{\n        const index = +item.id;\n        category.items[index].priority = new_priority;\n    }\n\n    const update_checklist = (category,item,new_checklist)=>{\n        console.log(\"This is \",new_checklist)\n        const index = +item.id;\n        category.items[index].checklist = new_checklist;\n    }\n    \n    const update_bold = (category)=>{\n        if(category.isBold){\n            category.isBold = false;\n            return ;\n        } else {\n            category.isBold = true;\n        }\n    };\n\n    const update_id = () =>{\n       for (let i = 0;i<_stock__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length;i++){\n           _stock__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].id = i;\n       }\n    }\n\n    const update_item_id = (category) =>{\n        for (let i=0;i<category.items.length;i++){\n            category.items[i].id= i;\n        }\n    }\n\n    return{\n        add_category,\n        remove_category,\n        add_item,\n        remove_item,\n        update_priority,\n        update_checklist,\n        update_bold,\n        update_id,\n        update_item_id,\n    }\n})(); \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);\n\n//# sourceURL=webpack://todolist/./src/controller.js?");

/***/ }),

/***/ "./src/default_category.js":
/*!*********************************!*\
  !*** ./src/default_category.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appender */ \"./src/appender.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock */ \"./src/stock.js\");\n\n\n\n\n\nfunction create_default_category(){\n    const category_by_default = (0,_category__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Default category\",_stock__WEBPACK_IMPORTED_MODULE_3__[\"default\"].length);\n    _controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add_category(category_by_default);\n    _appender__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append_category(category_by_default);\n    /* appender.remove_items_from_DOM(); */ //we don't need this\n    _appender__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append_items(category_by_default);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create_default_category);\n\n//# sourceURL=webpack://todolist/./src/default_category.js?");

/***/ }),

/***/ "./src/default_page.js":
/*!*****************************!*\
  !*** ./src/default_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ \"./src/events.js\");\n\n\nconst default_page = (()=>{\n    const div1 = _inputForCategory();\n    const div2 = _divForCategories();\n    const div3 = _inputForItem();\n    const div4 = _divForItems();\n\n    document.querySelector(\"body\").appendChild(div1);\n    document.querySelector(\"body\").appendChild(div2);\n    document.querySelector(\"body\").appendChild(div3);\n    document.querySelector(\"body\").appendChild(div4);\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (default_page);\n\nfunction _inputForCategory(){\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\",\"container1\");\n    const input = document.createElement(\"input\");\n    input.setAttribute(\"placeholder\",\"Add a title...\");\n    input.setAttribute(\"id\",\"input_category\");\n    const button = document.createElement(\"button\");\n    button.textContent = \"Add\";\n    button.setAttribute(\"id\",\"add_category\");\n    button.addEventListener(\"click\",_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display_new_category);\n    button.addEventListener(\"click\",_clearInpus.bind(null,\"category\"));\n\n    div.appendChild(input);\n    div.appendChild(button);\n\n    return div;\n}\n\nfunction _inputForItem(){\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\",\"container3\");\n    const input = document.createElement(\"input\");\n    input.setAttribute(\"id\",\"input_title\");\n    input.setAttribute(\"placeholder\",\"Add a title...\");\n    //a changer mais pour l'instant je mets un input (a changer avec un calendrier);\n    const input_calendrier = document.createElement(\"input\");\n    input_calendrier.setAttribute(\"placeholder\",\"Pick your due date...\");\n    input_calendrier.setAttribute(\"id\",\"input_dueDate\");\n    input_calendrier.setAttribute(\"type\",\"date\");\n    const input_description = document.createElement(\"textarea\");\n    input_description.setAttribute(\"placeholder\",\"Description...\");\n    input_description.setAttribute(\"id\",\"input_description\");\n    input_description.setAttribute(\"row\",\"3\");\n    //radio stuff (I forgot how its working);\n    const fieldset = document.createElement(\"fieldset\");\n    fieldset.setAttribute(\"id\",\"fieldset\");\n    const legend = document.createElement(\"legend\");\n    legend.textContent = \"Priority\";\n\n    const div_radio_1 = document.createElement(\"div\");\n\n    const radio_hight = document.createElement(\"input\");\n    radio_hight.setAttribute(\"id\",\"hight\");\n    radio_hight.setAttribute(\"name\",\"priority\");\n    radio_hight.setAttribute(\"value\",\"hight\");\n    radio_hight.setAttribute(\"type\",\"radio\");\n    const label_hight = document.createElement(\"label\");\n    label_hight.setAttribute(\"for\",\"hight\");\n    label_hight.textContent = \"Hight\";\n    div_radio_1.appendChild(radio_hight);\n    div_radio_1.appendChild(label_hight);\n\n    const div_radio_2 = document.createElement(\"div\");\n\n    const radio_low = document.createElement(\"input\");\n    radio_low.setAttribute(\"id\",\"low\");\n    radio_low.setAttribute(\"name\",\"priority\");\n    radio_low.setAttribute(\"value\",\"low\");\n    radio_low.setAttribute(\"type\",\"radio\");\n    const label_low = document.createElement(\"label\");\n    label_low.setAttribute(\"for\",\"low\");\n    label_low.textContent = \"Low\";\n    div_radio_2.appendChild(radio_low);\n    div_radio_2.appendChild(label_low);\n\n    fieldset.appendChild(legend);\n    fieldset.appendChild(div_radio_1);\n    fieldset.appendChild(div_radio_2);\n\n    const add_btn = document.createElement(\"button\");\n    add_btn.setAttribute(\"id\",\"add_item\");\n    add_btn.textContent = \"Add\";\n    add_btn.addEventListener(\"click\",_events__WEBPACK_IMPORTED_MODULE_0__[\"default\"].display_new_item);\n    add_btn.addEventListener(\"click\",_clearInpus.bind(null,\"item\"))\n    \n    div.appendChild(input);\n    div.appendChild(input_calendrier); \n    div.appendChild(input_description);\n    div.appendChild(fieldset);\n    div.appendChild(add_btn);\n    \n    return div;\n}\n\nfunction _divForCategories(){\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\",\"categories_container\");\n    \n    return div;\n}\n\nfunction _divForItems(){\n    const div = document.createElement(\"div\");\n    div.setAttribute(\"id\",\"items_container\");\n    \n    return div;\n}\n\nfunction _clearInpus(arg){\n    if(arg==\"category\"){\n        document.querySelector(\"#input_category\").value = \"\";\n        return;\n    } else {\n        document.querySelector(\"#input_title\").value = \"\";\n        document.querySelector(\"#input_dueDate\").value = \"\";\n        document.querySelector(\"#input_description\").value = \"\";\n        const ele = document.getElementsByName(\"priority\");\n        for(var i=0;i<ele.length;i++){\n            ele[i].checked = false;\n        }\n       \n        }\n}\n\n\n//# sourceURL=webpack://todolist/./src/default_page.js?");

/***/ }),

/***/ "./src/displayer.js":
/*!**************************!*\
  !*** ./src/displayer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayer = (()=>{\n    const display =(arr)=>{\n        arr.forEach(element => {\n            console.log(\"le titre de cette categorie est : \",element.title)\n            element.items.forEach(e=>{\n                console.log(`${e.id} ) titre: ${e.title} , description : \n                ${e.description} , due Date: ${e.dueDate},Priority: ${e.priority}`);\n                console.log(\"Done: \",e.checklist);\n            })\n        });\n    }\n\n    return {\n        display,\n    }\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayer);\n\n//# sourceURL=webpack://todolist/./src/displayer.js?");

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collector */ \"./src/collector.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stock */ \"./src/stock.js\");\n/* harmony import */ var _appender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appender */ \"./src/appender.js\");\n/* harmony import */ var _default_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default_category */ \"./src/default_category.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\n\n\n\n\n\n\nconst events = (()=>{\n    const display_new_category = ()=>{\n        const data = _collector__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getDataForNewCategory();\n        const category = (0,_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data.title,_stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length);\n        _remove_bold();\n        _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add_category(category);   \n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].append_category(category);\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove_items_from_DOM();\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].append_items(category);\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_7__.update_Storage)();\n    };\n\n    const display_new_item = ()=>{\n        const data = _collector__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getDataForItem();\n        console.log(data);\n        const category = _stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][+data.category_id];//undefined\n        \n        const item = (0,_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data.title,data.description,category.items.length,data.dueDate,data.priority)\n        _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add_item(category,item);\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove_items_from_DOM();\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].append_items(category);\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_7__.update_Storage)();\n    };\n\n    const display_items = (e) =>{\n        //Cherche l'element qui donne la categorie \n        let index = +e.parentNode.id;\n        const category = _stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][index];\n        //enleve tout les bold\n        _remove_bold();\n        //donne bold a cet element p;\n        e.classList.add(\"bold\");\n        _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update_bold(category);\n        //remove all items from Dom\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove_items_from_DOM();\n        //append its items\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].append_items(category);\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_7__.update_Storage)();\n    };\n\n    const remove_category = (e) =>{\n        let index = +e.parentNode.id;\n        const category = _stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][index]; // obj ( que je veux supprimer)\n        let isThisCategoryBold = category.isBold; //true\n        _stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"].splice(index,1);\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove_categories_from_DOM(); // nothing on the DOM\n\n        \n        _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update_id();\n        if(isThisCategoryBold){\n            _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove_items_from_DOM();\n            if(_stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length>0){\n                _stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][0].isBold = true;\n                _stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach(e=>_appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].append_category(e));\n                _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].append_items(_stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][0]);\n                (0,_localStorage__WEBPACK_IMPORTED_MODULE_7__.update_Storage)();\n                return;\n            } else {\n                (0,_default_category__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n                (0,_localStorage__WEBPACK_IMPORTED_MODULE_7__.update_Storage)();\n                return;\n            }\n        } else {\n            _stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"].forEach(e=>_appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].append_category(e));\n            (0,_localStorage__WEBPACK_IMPORTED_MODULE_7__.update_Storage)();\n            return;\n        }\n    };\n\n    const remove_item =(e)=>{\n        let category;\n        for(let i = 0;i<_stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length;i++){\n            if(_stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][i].isBold){\n                category = _stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][i];\n                break;\n            }\n        }\n        let index = +e.parentNode.parentNode.dataset.id;\n        category.items.splice(index,1);\n        _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update_item_id(category);\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove_items_from_DOM();\n        _appender__WEBPACK_IMPORTED_MODULE_5__[\"default\"].append_items(category);\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_7__.update_Storage)();\n    }\n\n   \n\n    const _remove_bold = ()=>{\n        for(let i = 0;i<_stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"].length;i++){\n            if(_stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][i].isBold){\n                _controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update_bold(_stock__WEBPACK_IMPORTED_MODULE_4__[\"default\"][i]);\n            } \n            const p = [...document.querySelectorAll(\"#categories_container p\")];\n            p.forEach(e=>{e.classList.remove(\"bold\")});  \n        }\n\n    };\n\n    const display_details = (e) =>{\n        let div = e.parentNode.previousSibling;\n        console.log(div)\n        div.classList.toggle(\"hidden\");\n        _change_icon(div,e);\n    }\n\n    const _change_icon =(div,button)=>{\n        if(div.className.includes(\"hidden\")){\n            button.textContent = \"___\";\n        } else {\n            button.textContent = '---';\n        }\n       \n    }\n    return{\n        display_new_item,\n        display_new_category,\n        display_items,\n        remove_category,\n        remove_item,\n        display_details,\n    }\n})();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n//# sourceURL=webpack://todolist/./src/events.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction itemFactory(title,description=\"none\",id,dueDate=\"none\",priority=\"low\",checklist=false){\nreturn{\n    title,\n    description,\n    id,\n    dueDate,\n    priority,\n    checklist,\n    \n}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemFactory);\n\n//# sourceURL=webpack://todolist/./src/item.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkState\": () => (/* binding */ checkState),\n/* harmony export */   \"update_Storage\": () => (/* binding */ update_Storage)\n/* harmony export */ });\n/* harmony import */ var _appender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appender */ \"./src/appender.js\");\n/* harmony import */ var _default_category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default_category */ \"./src/default_category.js\");\n/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock */ \"./src/stock.js\");\n\n\n\n\nfunction checkState(){\n    if(localStorage.length==0){\n        (0,_default_category__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        _addToStorage();\n    } else {\n        for(let i=0;i<localStorage.length;i++){\n            _stock__WEBPACK_IMPORTED_MODULE_2__[\"default\"][i]=JSON.parse(localStorage.getItem(i));\n        }\n        for(let n=0;n<_stock__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length;n++){\n            _appender__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append_category(_stock__WEBPACK_IMPORTED_MODULE_2__[\"default\"][n]);\n        }\n        for(let k=0;k<_stock__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length;k++){\n            if(_stock__WEBPACK_IMPORTED_MODULE_2__[\"default\"][k].isBold){\n                _appender__WEBPACK_IMPORTED_MODULE_0__[\"default\"].append_items(_stock__WEBPACK_IMPORTED_MODULE_2__[\"default\"][k]);\n            }\n        }\n    }\n}\n\nfunction _addToStorage(){\n    for(let i = 0;i<_stock__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length;i++){\n        localStorage.setItem(i,JSON.stringify(_stock__WEBPACK_IMPORTED_MODULE_2__[\"default\"][i]))\n    }\n}\n\nfunction update_Storage(){\n    localStorage.clear();\n    _addToStorage();\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/localStorage.js?");

/***/ }),

/***/ "./src/stock.js":
/*!**********************!*\
  !*** ./src/stock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst categories = [];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categories);\n\n//# sourceURL=webpack://todolist/./src/stock.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/allIn.js");
/******/ 	
/******/ })()
;
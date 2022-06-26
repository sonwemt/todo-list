"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    padding:0;\n    margin:0;\n}\ninput:focus {\n    outline: none;\n    box-shadow: 0px 0px 5px #61C5FA;\n    border:1px solid #5AB0DB;\n}\ninput focus:hover {\n    outline: none;\n    box-shadow: 0px 0px 5px #61C5FA;\n    border:1px solid #5AB0DB;\n    border-radius:0;\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-rows: 3rem 3rem 5fr;\n}\n.header {\n    font-size: 2rem;\n    place-self: center;\n    grid-row: 1/2;\n}\n#addProject{\n    grid-row:2/3;\n    display: grid;\n    place-content: center;\n}\n\n#projectBody {\n    display: grid;\n    grid-row: 3/4;\n    grid-template-columns: 2fr 2fr 1fr;\n    gap:2rem;\n    padding: 2rem;\n}\n.project {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-template-rows: 1fr 5fr;\n    height: 400px;\n    padding: 1rem;\n}\n.addTask {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    display: grid;\n    place-content: center;\n}\n.removeProject {\n    grid-column: 3/4;\n    display: grid;\n    place-content: center;\n}\n.projectTitle {\n    font-size: 2rem;\n    place-self: center;\n}\n.items {\n    grid-column: 1/4;\n    overflow: auto;\n    padding: 2rem;\n}\n.project:nth-child(1n) {\n    grid-column: 1/4;\n    \n}\n\n.project:nth-child(1n){\n    background-color: rgb(217, 217, 217);\n}\n\n.project:nth-child(2n) {\n    background-color: lightgray;\n}\n\n#addItemOverlay {\n    display: grid;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    place-items: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 2;\n}\n.toDoItemForm {\n    display: grid;\n    grid-template-rows: 1fr 2fr repeat(3, 1fr);\n    gap:15px;\n    background-color: white;\n    padding: 1.5rem;\n    border-radius: 4px;\n    height: 600px;\n    width: 400px;\n}\n\n\n#closeOverlay {\n    font-size: 5rem;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,QAAQ;AACZ;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,wBAAwB;AAC5B;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,iCAAiC;AACrC;AACA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,QAAQ;IACR,aAAa;AACjB;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,2BAA2B;IAC3B,aAAa;IACb,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,cAAc;IACd,aAAa;AACjB;AACA;IACI,gBAAgB;;AAEpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,oCAAoC;IACpC,UAAU;AACd;AACA;IACI,aAAa;IACb,0CAA0C;IAC1C,QAAQ;IACR,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;;AAGA;IACI,eAAe;AACnB","sourcesContent":["* {\n    box-sizing: border-box;\n    padding:0;\n    margin:0;\n}\ninput:focus {\n    outline: none;\n    box-shadow: 0px 0px 5px #61C5FA;\n    border:1px solid #5AB0DB;\n}\ninput focus:hover {\n    outline: none;\n    box-shadow: 0px 0px 5px #61C5FA;\n    border:1px solid #5AB0DB;\n    border-radius:0;\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-rows: 3rem 3rem 5fr;\n}\n.header {\n    font-size: 2rem;\n    place-self: center;\n    grid-row: 1/2;\n}\n#addProject{\n    grid-row:2/3;\n    display: grid;\n    place-content: center;\n}\n\n#projectBody {\n    display: grid;\n    grid-row: 3/4;\n    grid-template-columns: 2fr 2fr 1fr;\n    gap:2rem;\n    padding: 2rem;\n}\n.project {\n    display: grid;\n    grid-template-columns: 2fr 1fr 1fr;\n    grid-template-rows: 1fr 5fr;\n    height: 400px;\n    padding: 1rem;\n}\n.addTask {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    display: grid;\n    place-content: center;\n}\n.removeProject {\n    grid-column: 3/4;\n    display: grid;\n    place-content: center;\n}\n.projectTitle {\n    font-size: 2rem;\n    place-self: center;\n}\n.items {\n    grid-column: 1/4;\n    overflow: auto;\n    padding: 2rem;\n}\n.project:nth-child(1n) {\n    grid-column: 1/4;\n    \n}\n\n.project:nth-child(1n){\n    background-color: rgb(217, 217, 217);\n}\n\n.project:nth-child(2n) {\n    background-color: lightgray;\n}\n\n#addItemOverlay {\n    display: grid;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    place-items: center;\n    background-color: rgba(0, 0, 0, 0.4);\n    z-index: 2;\n}\n.toDoItemForm {\n    display: grid;\n    grid-template-rows: 1fr 2fr repeat(3, 1fr);\n    gap:15px;\n    background-color: white;\n    padding: 1.5rem;\n    border-radius: 4px;\n    height: 600px;\n    width: 400px;\n}\n\n\n#closeOverlay {\n    font-size: 5rem;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplayController)
/* harmony export */ });
class DisplayController {
    constructor() {
        this.#createPageBody();
    }
    #createPageBody () {
        const wrapper = document.getElementById('content');

        const header = document.createElement('div');
        header.classList.add('header');
        header.textContent = 'To Do List';
        
        

        const projectBody = document.createElement('div');
        projectBody.id = 'projectBody';

        const buttonWrapper = document.createElement('div');
        
        const addButton = document.createElement('button');
        buttonWrapper.id = 'addProject';
        addButton.textContent = ('New Project');
        addButton.id = 'addProjectButton';
        buttonWrapper.appendChild(addButton);
        
        
        wrapper.appendChild(header);
        wrapper.appendChild(buttonWrapper);
        wrapper.appendChild(projectBody);
        
    }

    updateProjects(projects) {
        const wrapper = document.getElementById('projectBody');

        this.#clearWrapper(wrapper);

        for(let i = 0; i < projects.numberOfProjects;i++) {

            const card = document.createElement('div');
            card.classList.add('project');
            card.setAttribute('data-id', i);
            
            const addButton = document.createElement('button');
            addButton.textContent = 'Add Task'; 
            addButton.classList.add('addTask');
            addButton.setAttribute('data-id', i);
            
            const cardContent = document.createElement('div');
            cardContent.classList.add('items');

            const projectInfo = projects.getProject(i);
            const projectName = document.createElement('div');
            projectName.textContent = projectInfo.name;
            projectName.classList.add('projectTitle');

            const removeButton = document.createElement('button');
            removeButton.textContent = ('Remove Project');
            removeButton.classList.add('removeProject');
            removeButton.setAttribute('data-id', i);

            card.appendChild(projectName);
            card.appendChild(removeButton);
            
            
    
            for(let x = 0; x < projectInfo.NumberOfItems; x++) {
                const item = document.createElement('div');
                const toDoItem = projectInfo.getToDoItem(x);
                item.textContent = `Title: ${toDoItem.title} Description: ${toDoItem.description} Date: ${toDoItem.dueDate} Priority: ${toDoItem.priority}`;
                cardContent.appendChild(item);

                const removeItem = document.createElement('button');
                removeItem.textContent = 'Remove';
                removeItem.classList.add(`removeItem`);
                removeItem.setAttribute('data-id', x);

                cardContent.appendChild(removeItem);

            }
            card.appendChild(addButton);
            card.appendChild(cardContent);
            wrapper.appendChild(card);
        }
    }
    #clearWrapper (wrapper) {
        while(wrapper.firstChild) {
            wrapper.removeChild(wrapper.lastChild);
        }
    }

    createProjectForm() {
        const addButton = document.getElementById('addProject');
        
        const form = document.createElement('form');
        form.setAttribute('id', 'projectForm');

        const projectName = document.createElement('input');
        projectName.setAttribute('type', 'text');
        projectName.setAttribute('name', 'projectName');
        projectName.setAttribute('id', 'projectInput');
        projectName.setAttribute('placeholder', 'Name');
        projectName.setAttribute('minlength', '1');
        projectName.setAttribute('maxlength', '30');


        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submitProject');
        submit.textContent = 'Add Project';

        form.appendChild(projectName);
        form.appendChild(submit);
        addButton.appendChild(form);
    }

    removeProjectForm() {
        let wrapper = document.getElementById('addProject');
        wrapper.removeChild(wrapper.lastChild)
    }

    createToDoItemForm () {
        const overlay = document.createElement(`div`);
        overlay.id = 'addItemOverlay';
        const wrapper = document.getElementById('content');
        const addButton = document.getElementById('addProject');
        
        const form = document.createElement('form');
        form.classList.add('toDoItemForm');

        const itemTitle = document.createElement('input');
        itemTitle.setAttribute('type', 'text');
        itemTitle.setAttribute('name', 'Title');
        itemTitle.setAttribute('id', 'itemTitle');
        itemTitle.setAttribute('placeholder', 'Title');
        itemTitle.setAttribute('minlength', '1');

        const itemDescription = document.createElement('input');
        itemDescription.setAttribute('type', 'text');
        itemDescription.setAttribute('name', 'Description');
        itemDescription.setAttribute('id', 'itemDescription');
        itemDescription.setAttribute('placeholder', 'Description');
        itemDescription.setAttribute('minlength', '1');
        itemDescription.setAttribute('maxlength', '400');

        
        const itemDate = document.createElement('input');
        itemDate.setAttribute('type', 'date');
        itemDate.setAttribute('name', 'Date');
        itemDate.setAttribute('id', 'itemDate');
        itemDate.setAttribute('placeholder', 'Date');


        const itemPriority = document.createElement('select');
        itemPriority.setAttribute('name', 'Priority');
        itemPriority.setAttribute('id', 'itemPriority');
        const highPriority = document.createElement('option');
        const mediumPriority = document.createElement('option');
        const lowPriority = document.createElement('option');
        
        highPriority.setAttribute('value', 'high');
        mediumPriority.setAttribute('value', 'medium');
        lowPriority.setAttribute('value', 'low');

        highPriority.textContent = 'High';
        mediumPriority.textContent = 'Medium';
        lowPriority.textContent = 'Low';

        itemPriority.appendChild(highPriority);
        itemPriority.appendChild(mediumPriority);
        itemPriority.appendChild(lowPriority);

        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('id', 'submitToDoItem');
        submit.textContent = 'Add Item';

        form.appendChild(itemTitle);
        form.appendChild(itemDescription);
        form.appendChild(itemDate);
        form.appendChild(itemPriority);
        form.appendChild(submit);
        overlay.appendChild(form);
        wrapper.appendChild(overlay);

    }
    

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDoProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoProject */ "./src/toDoProject.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




class PageController {
    #projectController;
    #displayController; 
    #projectFormActive = false;
    constructor (name) {
        this.#projectController = new _toDoProject__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.#displayController = new _display__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.addProjectAddListener();
        this.#updateProjectList();
    }



    #updateProjectList () {
        this.#displayController.updateProjects(this.#projectController);
        this.addProjectRemovalListener();
        this.addItemAddListeners();
        this.addItemRemovalListener();
    }

    #addProject(name) {
        this.#projectController.newProject(name);
        this.#updateProjectList();
    }

    #removeProject (projectIndex) {
        this.#projectController.removeProject(projectIndex);
        this.#updateProjectList();
    }

    #addToDoItem(project, title, description, dueDate, priority) {
        this.#projectController.addToDoItem(project, title, description, dueDate, priority);
    }

    #removeToDoItem(projectIndex, item) {
        this.#projectController.removeToDoItem(projectIndex, item);
        this.#updateProjectList();
    }

    addProjectAddListener () {
        const addProjectButton = document.getElementById('addProjectButton');
            
        addProjectButton.addEventListener('click', () => {
            if(!this.#projectFormActive){
                console.log('addprojectif');
                this.#displayController.createProjectForm();
                this.#projectFormActive = true;
                this.addProjectSubmitListener();
            }
            else {
                console.log('addprojectelse');
                this.#displayController.removeProjectForm();
                this.#projectFormActive = false;
            }
        });
    }

    addProjectSubmitListener() {
        const submitButton = document.querySelector('#submitProject');
        const projectInput = document.querySelector('#projectInput');
        const addProjectButton = document.getElementById('addProjectButton');
        submitButton.addEventListener('click', () => {
            this.#addProject(projectInput.value);
            this.#displayController.removeProjectForm();
            this.#projectFormActive = false;
            this.#updateProjectList();
            console.log(this.#projectController.consoleLogProjects());
        });
    }
            
    addProjectRemovalListener() {
        const removeProjectButtons = document.querySelectorAll('.removeProject');
        removeProjectButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                console.log(`removeButtonCLicked${e.target.getAttribute('data-id')}`);
                this.#removeProject(e.target.getAttribute('data-id'));
                this.#updateProjectList();
            });
        });
    }

    addItemAddListeners () {
        const addItemButtons = document.querySelectorAll('.addTask');
        addItemButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                if(document.getElementById('addItemOverlay') === null){
                    let projectIndex = e.target.getAttribute('data-id');
                    this.#displayController.createToDoItemForm(projectIndex);
                    
                    const overlay = document.getElementById('addItemOverlay');

                    let submitButton = document.getElementById('submitToDoItem');
                    submitButton.addEventListener('click', () => {
                        console.log()
                        this.#addToDoItem(projectIndex, itemTitle.value, itemDescription.value, itemDate.value, itemPriority.value);
                        this.#updateProjectList();
                        overlay.remove();
                        console.log(this.#projectController.toJson);

                    });
                    
                    window.addEventListener('keydown', function escapeHit(e) {
                        if(e.key === 'Escape'){
                            overlay.remove();
                            window.removeEventListener('keydown', escapeHit);
                        }
                    });
                    

                    let closeOverlay = document.createElement('div');
                    closeOverlay.id = 'closeOverlay';
                    closeOverlay.textContent = 'X';
                    closeOverlay.addEventListener('click', () => {overlay.remove();});
                    overlay.appendChild(closeOverlay);

                }
            });
        });
    }
    
    addItemRemovalListener() {
        const removeItemButtons = document.querySelectorAll('.removeItem');
        removeItemButtons.forEach((item) => {
            item.addEventListener('click', (e) => {
                let project = e.target.closest('.project').getAttribute('data-id');
                let item = e.target.getAttribute('data-id');
                this.#removeToDoItem(project, item);
                this.#updateProjectList();
            })
        });
    }
    

}

const page = new PageController();








/***/ }),

/***/ "./src/toDoProject.js":
/*!****************************!*\
  !*** ./src/toDoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectController)
/* harmony export */ });
class ToDoItem {
    #title;
    #description;
    #dueDate;
    #priority;
    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }
    get title() {
        return this.#title;
    }
    get description () {
        return this.#description;
    }
    get dueDate () {
        return this.#dueDate;
    }
    get priority () {
        return this.#priority;
    }

    set title(title) {
        this.#title = title;
    }
    set description (description) {
        this.#description = description;
    }
    set dueDate (dueDate) {
        this.#dueDate = dueDate;
    }
    set priority (priority) {
        this.#priority = priority;
    }

    consoleLogItems () {
        console.log(this.#title + ' ' + this.#description + ' ' + this.#dueDate + ' ' + this.#priority)
    }

    get toJson () {
        return {title: this.#title, description: this.#description, dueDate: this.#dueDate, priority: this.#priority};
    }

}


class ToDoProject {
    #projectName;
    #toDoItems = [];
    constructor (projectName = 'Default Project') {
        this.#projectName = projectName;
    }

    get name() {
        return this.#projectName;
    }

    get NumberOfItems () {
        return this.#toDoItems.length;
    }

    get toJson () {
        let stringedItems = [];
        for(let item of this.#toDoItems) {
            stringedItems.push(item.toJson);
        }
        return {projectName: this.#projectName, toDoItems: stringedItems};
    }


    

    addToDoItem (title, description, dueDate, priority) {
        this.#toDoItems.push(new ToDoItem(title, description, dueDate, priority));
    }

    removeToDoItem (index) {
        if(this.containsToDoItem()){
            this.#toDoItems.splice(index, 1);
        }
    }
    
    getToDoItem (item) {
        if(item < this.#toDoItems.length && item > -1){
            return this.#toDoItems[item];
        }
        return false;
    }


    containsToDoItem () {
        return this.#toDoItems.length > 0;
    }

}

class ProjectController {
    #currentProjects = [new ToDoProject()];
    constructor () {
        if(!localStorage.getItem('currentProjects')){
            this.#updateLocalStorage();
        }
        else{
            this.#setLocalStorage();
        }
        
    }
    get numberOfProjects () {
        return this.#currentProjects.length;
    }
    get toJson () {
        let stringedArray = [];
        for(let project of this.#currentProjects) {
            stringedArray.push(project.toJson);
        }
        return JSON.stringify(stringedArray);
    }

    fromJson(json) {
        let data = JSON.parse(json);
        let returnArray = [];
        for(let project of data) {
            let newProject = new ToDoProject(project.projectName);
            for(let item of project.toDoItems) {
                newProject.addToDoItem(item.title, item.description, item.dueDate, item.priority);
            }
            returnArray.push(newProject);
        }
        return returnArray;
    }



    #updateLocalStorage() {
        console.log('if');
        let jsonArray = this.toJson;
        localStorage.setItem('currentProjects', jsonArray);
    }

    #setLocalStorage () {
        let storedArray = localStorage.getItem('currentProjects');
        let parsedArray = this.fromJson(storedArray);
        this.#currentProjects = parsedArray;
        this.#updateLocalStorage();
    }

    

    newProject (name) {
        let project = new ToDoProject(name);
        this.#currentProjects.push(project);
        this.#updateLocalStorage();
    }

    getProject (projectIndex) {
        return this.#currentProjects[projectIndex];
    }
    
    addToDoItem(project, title, description, dueDate, priority){
        this.#currentProjects[project].addToDoItem(title, description, dueDate, priority);
        this.#updateLocalStorage();
    }

    removeToDoItem(projectIndex, item) {
        this.#currentProjects[projectIndex].removeToDoItem(item);
        this.#updateLocalStorage();
    }

    removeProject(projectIndex) {
        this.#currentProjects.splice(projectIndex, 1);
        this.#updateLocalStorage();
    }

    consoleLogProjects() {
        if(this.#currentProjects.length) {
            for(let project of this.#currentProjects) {
                console.log(project);
            }
        }
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Qcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzYxQzVGQTtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNUFCMERCO1xcbn1cXG5pbnB1dCBmb2N1czpob3ZlciB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM2MUM1RkE7XFxuICAgIGJvcmRlcjoxcHggc29saWQgIzVBQjBEQjtcXG4gICAgYm9yZGVyLXJhZGl1czowO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gM3JlbSA1ZnI7XFxufVxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuI2FkZFByb2plY3R7XFxuICAgIGdyaWQtcm93OjIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdEJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMWZyO1xcbiAgICBnYXA6MnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5hZGRUYXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG4ucmVtb3ZlUHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG4uaXRlbXMge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLnByb2plY3Q6bnRoLWNoaWxkKDFuKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdDpudGgtY2hpbGQoMW4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyMTcsIDIxNyk7XFxufVxcblxcbi5wcm9qZWN0Om50aC1jaGlsZCgybikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbiNhZGRJdGVtT3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4udG9Eb0l0ZW1Gb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6MTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcblxcbiNjbG9zZU92ZXJsYXkge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxRQUFRO0lBQ1IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46MDtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNjFDNUZBO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICM1QUIwREI7XFxufVxcbmlucHV0IGZvY3VzOmhvdmVyIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzYxQzVGQTtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNUFCMERCO1xcbiAgICBib3JkZXItcmFkaXVzOjA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAzcmVtIDVmcjtcXG59XFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4jYWRkUHJvamVjdHtcXG4gICAgZ3JpZC1yb3c6Mi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0Qm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAxZnI7XFxuICAgIGdhcDoycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmFkZFRhc2sge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yZW1vdmVQcm9qZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcbi5pdGVtcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4ucHJvamVjdDpudGgtY2hpbGQoMW4pIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgXFxufVxcblxcbi5wcm9qZWN0Om50aC1jaGlsZCgxbil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDIxNywgMjE3KTtcXG59XFxuXFxuLnByb2plY3Q6bnRoLWNoaWxkKDJuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuI2FkZEl0ZW1PdmVybGF5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcbi50b0RvSXRlbUZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDoxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuXFxuI2Nsb3NlT3ZlcmxheSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2NyZWF0ZVBhZ2VCb2R5KCk7XG4gICAgfVxuICAgICNjcmVhdGVQYWdlQm9keSAoKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUbyBEbyBMaXN0JztcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHByb2plY3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RCb2R5LmlkID0gJ3Byb2plY3RCb2R5JztcblxuICAgICAgICBjb25zdCBidXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uV3JhcHBlci5pZCA9ICdhZGRQcm9qZWN0JztcbiAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gKCdOZXcgUHJvamVjdCcpO1xuICAgICAgICBhZGRCdXR0b24uaWQgPSAnYWRkUHJvamVjdEJ1dHRvbic7XG4gICAgICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uV3JhcHBlcik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJvZHkpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RCb2R5Jyk7XG5cbiAgICAgICAgdGhpcy4jY2xlYXJXcmFwcGVyKHdyYXBwZXIpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5udW1iZXJPZlByb2plY3RzO2krKykge1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJzsgXG4gICAgICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVGFzaycpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaXRlbXMnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZm8gPSBwcm9qZWN0cy5nZXRQcm9qZWN0KGkpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdEluZm8ubmFtZTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuXG4gICAgICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICgnUmVtb3ZlIFByb2plY3QnKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQcm9qZWN0Jyk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG5cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBwcm9qZWN0SW5mby5OdW1iZXJPZkl0ZW1zOyB4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBwcm9qZWN0SW5mby5nZXRUb0RvSXRlbSh4KTtcbiAgICAgICAgICAgICAgICBpdGVtLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3RvRG9JdGVtLnRpdGxlfSBEZXNjcmlwdGlvbjogJHt0b0RvSXRlbS5kZXNjcmlwdGlvbn0gRGF0ZTogJHt0b0RvSXRlbS5kdWVEYXRlfSBQcmlvcml0eTogJHt0b0RvSXRlbS5wcmlvcml0eX1gO1xuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0udGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtLmNsYXNzTGlzdC5hZGQoYHJlbW92ZUl0ZW1gKTtcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHgpO1xuXG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQocmVtb3ZlSXRlbSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjY2xlYXJXcmFwcGVyICh3cmFwcGVyKSB7XG4gICAgICAgIHdoaWxlKHdyYXBwZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Rm9ybScpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdElucHV0Jyk7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmFtZScpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzMwJyk7XG5cblxuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0UHJvamVjdCcpO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIGFkZEJ1dHRvbi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKVxuICAgIH1cblxuICAgIGNyZWF0ZVRvRG9JdGVtRm9ybSAoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICAgICAgb3ZlcmxheS5pZCA9ICdhZGRJdGVtT3ZlcmxheSc7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd0b0RvSXRlbUZvcm0nKTtcblxuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdUaXRsZScpO1xuICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtVGl0bGUnKTtcbiAgICAgICAgaXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcbiAgICAgICAgaXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcblxuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbmFtZScsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtRGVzY3JpcHRpb24nKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzQwMCcpO1xuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBpdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGl0ZW1EYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGl0ZW1EYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdEYXRlJyk7XG4gICAgICAgIGl0ZW1EYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbURhdGUnKTtcbiAgICAgICAgaXRlbURhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEYXRlJyk7XG5cblxuICAgICAgICBjb25zdCBpdGVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgaXRlbVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdQcmlvcml0eScpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtUHJpb3JpdHknKTtcbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG5cbiAgICAgICAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICBsb3dQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gICAgICAgIGl0ZW1Qcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRUb0RvSXRlbScpO1xuICAgICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkIEl0ZW0nO1xuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGl0ZW1EYXRlKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpdGVtUHJpb3JpdHkpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICB9XG4gICAgXG5cbn0iLCJpbXBvcnQgUHJvamVjdENvbnRyb2xsZXIgZnJvbSBcIi4vdG9Eb1Byb2plY3RcIjtcbmltcG9ydCBEaXNwbGF5Q29udHJvbGxlciBmcm9tIFwiLi9kaXNwbGF5XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jbGFzcyBQYWdlQ29udHJvbGxlciB7XG4gICAgI3Byb2plY3RDb250cm9sbGVyO1xuICAgICNkaXNwbGF5Q29udHJvbGxlcjsgXG4gICAgI3Byb2plY3RGb3JtQWN0aXZlID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdENvbnRyb2xsZXIgPSBuZXcgUHJvamVjdENvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIgPSBuZXcgRGlzcGxheUNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0QWRkTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB9XG5cblxuXG4gICAgI3VwZGF0ZVByb2plY3RMaXN0ICgpIHtcbiAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIudXBkYXRlUHJvamVjdHModGhpcy4jcHJvamVjdENvbnRyb2xsZXIpO1xuICAgICAgICB0aGlzLmFkZFByb2plY3RSZW1vdmFsTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtQWRkTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuYWRkSXRlbVJlbW92YWxMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgICNhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdENvbnRyb2xsZXIubmV3UHJvamVjdChuYW1lKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB9XG5cbiAgICAjcmVtb3ZlUHJvamVjdCAocHJvamVjdEluZGV4KSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RDb250cm9sbGVyLnJlbW92ZVByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB9XG5cbiAgICAjYWRkVG9Eb0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5hZGRUb0RvSXRlbShwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB9XG5cbiAgICAjcmVtb3ZlVG9Eb0l0ZW0ocHJvamVjdEluZGV4LCBpdGVtKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RDb250cm9sbGVyLnJlbW92ZVRvRG9JdGVtKHByb2plY3RJbmRleCwgaXRlbSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdEFkZExpc3RlbmVyICgpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLiNwcm9qZWN0Rm9ybUFjdGl2ZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZHByb2plY3RpZicpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3BsYXlDb250cm9sbGVyLmNyZWF0ZVByb2plY3RGb3JtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvamVjdEZvcm1BY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvamVjdFN1Ym1pdExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkcHJvamVjdGVsc2UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3RGb3JtQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFByb2plY3RTdWJtaXRMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3QnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jYWRkUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIucmVtb3ZlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgIHRoaXMuI3Byb2plY3RGb3JtQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4jcHJvamVjdENvbnRyb2xsZXIuY29uc29sZUxvZ1Byb2plY3RzKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgICAgICAgICBcbiAgICBhZGRQcm9qZWN0UmVtb3ZhbExpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVQcm9qZWN0Jyk7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZW1vdmVCdXR0b25DTGlja2VkJHtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKX1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW1vdmVQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEl0ZW1BZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBjb25zdCBhZGRJdGVtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRUYXNrJyk7XG4gICAgICAgIGFkZEl0ZW1CdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRJdGVtT3ZlcmxheScpID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVUb0RvSXRlbUZvcm0ocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSXRlbU92ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFRvRG9JdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI2FkZFRvRG9JdGVtKHByb2plY3RJbmRleCwgaXRlbVRpdGxlLnZhbHVlLCBpdGVtRGVzY3JpcHRpb24udmFsdWUsIGl0ZW1EYXRlLnZhbHVlLCBpdGVtUHJpb3JpdHkudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiNwcm9qZWN0Q29udHJvbGxlci50b0pzb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiBlc2NhcGVIaXQoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFc2NhcGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbG9zZU92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPdmVybGF5LmlkID0gJ2Nsb3NlT3ZlcmxheSc7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT3ZlcmxheS50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge292ZXJsYXkucmVtb3ZlKCk7fSk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY2xvc2VPdmVybGF5KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYWRkSXRlbVJlbW92YWxMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlSXRlbUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlSXRlbScpO1xuICAgICAgICByZW1vdmVJdGVtQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW1vdmVUb0RvSXRlbShwcm9qZWN0LCBpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG59XG5cbmNvbnN0IHBhZ2UgPSBuZXcgUGFnZUNvbnRyb2xsZXIoKTtcblxuXG5cblxuXG5cbiIsImNsYXNzIFRvRG9JdGVtIHtcbiAgICAjdGl0bGU7XG4gICAgI2Rlc2NyaXB0aW9uO1xuICAgICNkdWVEYXRlO1xuICAgICNwcmlvcml0eTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgc2V0IGR1ZURhdGUgKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nSXRlbXMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiN0aXRsZSArICcgJyArIHRoaXMuI2Rlc2NyaXB0aW9uICsgJyAnICsgdGhpcy4jZHVlRGF0ZSArICcgJyArIHRoaXMuI3ByaW9yaXR5KVxuICAgIH1cblxuICAgIGdldCB0b0pzb24gKCkge1xuICAgICAgICByZXR1cm4ge3RpdGxlOiB0aGlzLiN0aXRsZSwgZGVzY3JpcHRpb246IHRoaXMuI2Rlc2NyaXB0aW9uLCBkdWVEYXRlOiB0aGlzLiNkdWVEYXRlLCBwcmlvcml0eTogdGhpcy4jcHJpb3JpdHl9O1xuICAgIH1cblxufVxuXG5cbmNsYXNzIFRvRG9Qcm9qZWN0IHtcbiAgICAjcHJvamVjdE5hbWU7XG4gICAgI3RvRG9JdGVtcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yIChwcm9qZWN0TmFtZSA9ICdEZWZhdWx0IFByb2plY3QnKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgTnVtYmVyT2ZJdGVtcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldCB0b0pzb24gKCkge1xuICAgICAgICBsZXQgc3RyaW5nZWRJdGVtcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy4jdG9Eb0l0ZW1zKSB7XG4gICAgICAgICAgICBzdHJpbmdlZEl0ZW1zLnB1c2goaXRlbS50b0pzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7cHJvamVjdE5hbWU6IHRoaXMuI3Byb2plY3ROYW1lLCB0b0RvSXRlbXM6IHN0cmluZ2VkSXRlbXN9O1xuICAgIH1cblxuXG4gICAgXG5cbiAgICBhZGRUb0RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiN0b0RvSXRlbXMucHVzaChuZXcgVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG9JdGVtIChpbmRleCkge1xuICAgICAgICBpZih0aGlzLmNvbnRhaW5zVG9Eb0l0ZW0oKSl7XG4gICAgICAgICAgICB0aGlzLiN0b0RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRUb0RvSXRlbSAoaXRlbSkge1xuICAgICAgICBpZihpdGVtIDwgdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCAmJiBpdGVtID4gLTEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtc1tpdGVtXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjb250YWluc1RvRG9JdGVtICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gICAgI2N1cnJlbnRQcm9qZWN0cyA9IFtuZXcgVG9Eb1Byb2plY3QoKV07XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0cycpKXtcbiAgICAgICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLiNzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aDtcbiAgICB9XG4gICAgZ2V0IHRvSnNvbiAoKSB7XG4gICAgICAgIGxldCBzdHJpbmdlZEFycmF5ID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiB0aGlzLiNjdXJyZW50UHJvamVjdHMpIHtcbiAgICAgICAgICAgIHN0cmluZ2VkQXJyYXkucHVzaChwcm9qZWN0LnRvSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN0cmluZ2VkQXJyYXkpO1xuICAgIH1cblxuICAgIGZyb21Kc29uKGpzb24pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICBsZXQgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFRvRG9Qcm9qZWN0KHByb2plY3QucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIHByb2plY3QudG9Eb0l0ZW1zKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRUb0RvSXRlbShpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG5cblxuICAgICN1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpZicpO1xuICAgICAgICBsZXQganNvbkFycmF5ID0gdGhpcy50b0pzb247XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdHMnLCBqc29uQXJyYXkpO1xuICAgIH1cblxuICAgICNzZXRMb2NhbFN0b3JhZ2UgKCkge1xuICAgICAgICBsZXQgc3RvcmVkQXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFByb2plY3RzJyk7XG4gICAgICAgIGxldCBwYXJzZWRBcnJheSA9IHRoaXMuZnJvbUpzb24oc3RvcmVkQXJyYXkpO1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHMgPSBwYXJzZWRBcnJheTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgXG5cbiAgICBuZXdQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFRvRG9Qcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCAocHJvamVjdEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICB9XG4gICAgXG4gICAgYWRkVG9Eb0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0XS5hZGRUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Eb0l0ZW0ocHJvamVjdEluZGV4LCBpdGVtKSB7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnJlbW92ZVRvRG9JdGVtKGl0ZW0pO1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGNvbnNvbGVMb2dQcm9qZWN0cygpIHtcbiAgICAgICAgaWYodGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIHRoaXMuI2N1cnJlbnRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
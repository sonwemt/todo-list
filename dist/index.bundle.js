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
        if(name === 'undefined'){
            this.#projectController.newProject();
        }
        else {
            this.#projectController.newProject(name);
        }
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
    #currentProjects = [];
    constructor () {
        this.#updateLocalStorage(true);
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

    #updateLocalStorage(firstRun = false) {
        if(firstRun){
            if(localStorage.getItem('currentProjects') === null) {
                console.log('if');
                let jsonArray = JSON.stringify(this.#currentProjects);
                localStorage.setItem('currentProjects', jsonArray);
            }
            else{
                console.log('else');
                let storedArray = localStorage.getItem('currentProjects');
                let parseIt = this.fromJson(storedArray);
                this.#currentProjects = parseIt;
            }
        }
        else {
            console.log('elseif')
            let jsonArray = this.toJson;
            localStorage.setItem('currentProjects', jsonArray);
        }
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
        if(projectIndex > 0){ //Default project should not be removable
            this.#currentProjects.splice(projectIndex, 1);
            console.log(`Remove project ${projectIndex}`);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsMENBQTBDLGFBQWE7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb1Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46MDtcXG59XFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNjFDNUZBO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICM1QUIwREI7XFxufVxcbmlucHV0IGZvY3VzOmhvdmVyIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzYxQzVGQTtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNUFCMERCO1xcbiAgICBib3JkZXItcmFkaXVzOjA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1pbi13aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAzcmVtIDVmcjtcXG59XFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4jYWRkUHJvamVjdHtcXG4gICAgZ3JpZC1yb3c6Mi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0Qm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtcm93OiAzLzQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAxZnI7XFxuICAgIGdhcDoycmVtO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmFkZFRhc2sge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yZW1vdmVQcm9qZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxufVxcbi5pdGVtcyB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4ucHJvamVjdDpudGgtY2hpbGQoMW4pIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgXFxufVxcblxcbi5wcm9qZWN0Om50aC1jaGlsZCgxbil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDIxNywgMjE3KTtcXG59XFxuXFxuLnByb2plY3Q6bnRoLWNoaWxkKDJuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuI2FkZEl0ZW1PdmVybGF5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcbi50b0RvSXRlbUZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDoxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuXFxuI2Nsb3NlT3ZlcmxheSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsUUFBUTtBQUNaO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLFFBQVE7SUFDUixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjowO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM2MUM1RkE7XFxuICAgIGJvcmRlcjoxcHggc29saWQgIzVBQjBEQjtcXG59XFxuaW5wdXQgZm9jdXM6aG92ZXIge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNjFDNUZBO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICM1QUIwREI7XFxuICAgIGJvcmRlci1yYWRpdXM6MDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDNyZW0gNWZyO1xcbn1cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbiNhZGRQcm9qZWN0e1xcbiAgICBncmlkLXJvdzoyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RCb2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDFmcjtcXG4gICAgZ2FwOjJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uYWRkVGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJlbW92ZVByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuLml0ZW1zIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcbi5wcm9qZWN0Om50aC1jaGlsZCgxbikge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBcXG59XFxuXFxuLnByb2plY3Q6bnRoLWNoaWxkKDFuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgMjE3LCAyMTcpO1xcbn1cXG5cXG4ucHJvamVjdDpudGgtY2hpbGQoMm4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4jYWRkSXRlbU92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuLnRvRG9JdGVtRm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOjE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG5cXG4jY2xvc2VPdmVybGF5IHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4jY3JlYXRlUGFnZUJvZHkoKTtcbiAgICB9XG4gICAgI2NyZWF0ZVBhZ2VCb2R5ICgpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvIERvIExpc3QnO1xuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgcHJvamVjdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdEJvZHkuaWQgPSAncHJvamVjdEJvZHknO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25XcmFwcGVyLmlkID0gJ2FkZFByb2plY3QnO1xuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAoJ05ldyBQcm9qZWN0Jyk7XG4gICAgICAgIGFkZEJ1dHRvbi5pZCA9ICdhZGRQcm9qZWN0QnV0dG9uJztcbiAgICAgICAgYnV0dG9uV3JhcHBlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b25XcmFwcGVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Qm9keSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEJvZHknKTtcblxuICAgICAgICB0aGlzLiNjbGVhcldyYXBwZXIod3JhcHBlcik7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLm51bWJlck9mUHJvamVjdHM7aSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snOyBcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJyk7XG4gICAgICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdpdGVtcycpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5mbyA9IHByb2plY3RzLmdldFByb2plY3QoaSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0SW5mby5uYW1lO1xuICAgICAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLnRleHRDb250ZW50ID0gKCdSZW1vdmUgUHJvamVjdCcpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3QnKTtcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcblxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHByb2plY3RJbmZvLk51bWJlck9mSXRlbXM7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b0RvSXRlbSA9IHByb2plY3RJbmZvLmdldFRvRG9JdGVtKHgpO1xuICAgICAgICAgICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dG9Eb0l0ZW0udGl0bGV9IERlc2NyaXB0aW9uOiAke3RvRG9JdGVtLmRlc2NyaXB0aW9ufSBEYXRlOiAke3RvRG9JdGVtLmR1ZURhdGV9IFByaW9yaXR5OiAke3RvRG9JdGVtLnByaW9yaXR5fWA7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbS50ZXh0Q29udGVudCA9ICdSZW1vdmUnO1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0uY2xhc3NMaXN0LmFkZChgcmVtb3ZlSXRlbWApO1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgeCk7XG5cbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChyZW1vdmVJdGVtKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgICNjbGVhcldyYXBwZXIgKHdyYXBwZXIpIHtcbiAgICAgICAgd2hpbGUod3JhcHBlci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RGb3JtJyk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdE5hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOYW1lJyk7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgJzEnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMzAnKTtcblxuXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgYWRkQnV0dG9uLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3RGb3JtKCkge1xuICAgICAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpXG4gICAgfVxuXG4gICAgY3JlYXRlVG9Eb0l0ZW1Gb3JtICgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgICAgICBvdmVybGF5LmlkID0gJ2FkZEl0ZW1PdmVybGF5JztcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3RvRG9JdGVtRm9ybScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ1RpdGxlJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW1UaXRsZScpO1xuICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgICAgICBpdGVtVGl0bGUuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW1EZXNjcmlwdGlvbicpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdEZXNjcmlwdGlvbicpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNDAwJyk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaXRlbURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgaXRlbURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ0RhdGUnKTtcbiAgICAgICAgaXRlbURhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtRGF0ZScpO1xuICAgICAgICBpdGVtRGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0RhdGUnKTtcblxuXG4gICAgICAgIGNvbnN0IGl0ZW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBpdGVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywgJ1ByaW9yaXR5Jyk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW1Qcmlvcml0eScpO1xuICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgbWVkaXVtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgXG4gICAgICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICAgICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcblxuICAgICAgICBoaWdoUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG5cbiAgICAgICAgaXRlbVByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFRvRG9JdGVtJyk7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQgSXRlbSc7XG5cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaXRlbURhdGUpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGl0ZW1Qcmlvcml0eSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIH1cbiAgICBcblxufSIsImltcG9ydCBQcm9qZWN0Q29udHJvbGxlciBmcm9tIFwiLi90b0RvUHJvamVjdFwiO1xuaW1wb3J0IERpc3BsYXlDb250cm9sbGVyIGZyb20gXCIuL2Rpc3BsYXlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNsYXNzIFBhZ2VDb250cm9sbGVyIHtcbiAgICAjcHJvamVjdENvbnRyb2xsZXI7XG4gICAgI2Rpc3BsYXlDb250cm9sbGVyOyBcbiAgICAjcHJvamVjdEZvcm1BY3RpdmUgPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlciA9IG5ldyBQcm9qZWN0Q29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLiNkaXNwbGF5Q29udHJvbGxlciA9IG5ldyBEaXNwbGF5Q29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLmFkZFByb2plY3RBZGRMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgIH1cblxuXG5cbiAgICAjdXBkYXRlUHJvamVjdExpc3QgKCkge1xuICAgICAgICB0aGlzLiNkaXNwbGF5Q29udHJvbGxlci51cGRhdGVQcm9qZWN0cyh0aGlzLiNwcm9qZWN0Q29udHJvbGxlcik7XG4gICAgICAgIHRoaXMuYWRkUHJvamVjdFJlbW92YWxMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFkZEl0ZW1BZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtUmVtb3ZhbExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgI2FkZFByb2plY3QobmFtZSkge1xuICAgICAgICBpZihuYW1lID09PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5uZXdQcm9qZWN0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgfVxuXG4gICAgI3JlbW92ZVByb2plY3QgKHByb2plY3RJbmRleCkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5yZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgfVxuXG4gICAgI2FkZFRvRG9JdGVtKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jcHJvamVjdENvbnRyb2xsZXIuYWRkVG9Eb0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgfVxuXG4gICAgI3JlbW92ZVRvRG9JdGVtKHByb2plY3RJbmRleCwgaXRlbSkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5yZW1vdmVUb0RvSXRlbShwcm9qZWN0SW5kZXgsIGl0ZW0pO1xuICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgIH1cblxuICAgIGFkZFByb2plY3RBZGRMaXN0ZW5lciAoKSB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xuICAgICAgICAgICAgXG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZighdGhpcy4jcHJvamVjdEZvcm1BY3RpdmUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRwcm9qZWN0aWYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3RGb3JtQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFByb2plY3RTdWJtaXRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZHByb2plY3RlbHNlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIucmVtb3ZlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNwcm9qZWN0Rm9ybUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0U3VibWl0TGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2FkZFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuI2Rpc3BsYXlDb250cm9sbGVyLnJlbW92ZVByb2plY3RGb3JtKCk7XG4gICAgICAgICAgICB0aGlzLiNwcm9qZWN0Rm9ybUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuI3Byb2plY3RDb250cm9sbGVyLmNvbnNvbGVMb2dQcm9qZWN0cygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgICAgICAgICAgXG4gICAgYWRkUHJvamVjdFJlbW92YWxMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlUHJvamVjdCcpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZlQnV0dG9uQ0xpY2tlZCR7ZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyl9YCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcmVtb3ZlUHJvamVjdChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRJdGVtQWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgY29uc3QgYWRkSXRlbUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkVGFzaycpO1xuICAgICAgICBhZGRJdGVtQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSXRlbU92ZXJsYXknKSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlVG9Eb0l0ZW1Gb3JtKHByb2plY3RJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEl0ZW1PdmVybGF5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRUb0RvSXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiNhZGRUb0RvSXRlbShwcm9qZWN0SW5kZXgsIGl0ZW1UaXRsZS52YWx1ZSwgaXRlbURlc2NyaXB0aW9uLnZhbHVlLCBpdGVtRGF0ZS52YWx1ZSwgaXRlbVByaW9yaXR5LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4jcHJvamVjdENvbnRyb2xsZXIudG9Kc29uKTtcblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gZXNjYXBlSGl0KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUua2V5ID09PSAnRXNjYXBlJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGVzY2FwZUhpdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xvc2VPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT3ZlcmxheS5pZCA9ICdjbG9zZU92ZXJsYXknO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZU92ZXJsYXkudGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtvdmVybGF5LnJlbW92ZSgpO30pO1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGNsb3NlT3ZlcmxheSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGFkZEl0ZW1SZW1vdmFsTGlzdGVuZXIoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUl0ZW1CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZUl0ZW0nKTtcbiAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcmVtb3ZlVG9Eb0l0ZW0ocHJvamVjdCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcblxufVxuXG5jb25zdCBwYWdlID0gbmV3IFBhZ2VDb250cm9sbGVyKCk7XG5cblxuXG5cblxuXG4iLCJjbGFzcyBUb0RvSXRlbSB7XG4gICAgI3RpdGxlO1xuICAgICNkZXNjcmlwdGlvbjtcbiAgICAjZHVlRGF0ZTtcbiAgICAjcHJpb3JpdHk7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLiNkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLiNkdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdGl0bGU7XG4gICAgfVxuICAgIGdldCBkZXNjcmlwdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgZ2V0IGR1ZURhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jZHVlRGF0ZTtcbiAgICB9XG4gICAgZ2V0IHByaW9yaXR5ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3ByaW9yaXR5O1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBzZXQgZGVzY3JpcHRpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuICAgIHNldCBkdWVEYXRlIChkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cbiAgICBzZXQgcHJpb3JpdHkgKHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc29sZUxvZ0l0ZW1zICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4jdGl0bGUgKyAnICcgKyB0aGlzLiNkZXNjcmlwdGlvbiArICcgJyArIHRoaXMuI2R1ZURhdGUgKyAnICcgKyB0aGlzLiNwcmlvcml0eSlcbiAgICB9XG5cbiAgICBnZXQgdG9Kc29uICgpIHtcbiAgICAgICAgcmV0dXJuIHt0aXRsZTogdGhpcy4jdGl0bGUsIGRlc2NyaXB0aW9uOiB0aGlzLiNkZXNjcmlwdGlvbiwgZHVlRGF0ZTogdGhpcy4jZHVlRGF0ZSwgcHJpb3JpdHk6IHRoaXMuI3ByaW9yaXR5fTtcbiAgICB9XG5cbn1cblxuXG5jbGFzcyBUb0RvUHJvamVjdCB7XG4gICAgI3Byb2plY3ROYW1lO1xuICAgICN0b0RvSXRlbXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUgPSAnRGVmYXVsdCBQcm9qZWN0Jykge1xuICAgICAgICB0aGlzLiNwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IE51bWJlck9mSXRlbXMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXQgdG9Kc29uICgpIHtcbiAgICAgICAgbGV0IHN0cmluZ2VkSXRlbXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIHRoaXMuI3RvRG9JdGVtcykge1xuICAgICAgICAgICAgc3RyaW5nZWRJdGVtcy5wdXNoKGl0ZW0udG9Kc29uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge3Byb2plY3ROYW1lOiB0aGlzLiNwcm9qZWN0TmFtZSwgdG9Eb0l0ZW1zOiBzdHJpbmdlZEl0ZW1zfTtcbiAgICB9XG5cblxuICAgIFxuXG4gICAgYWRkVG9Eb0l0ZW0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jdG9Eb0l0ZW1zLnB1c2gobmV3IFRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb0RvSXRlbSAoaW5kZXgpIHtcbiAgICAgICAgaWYodGhpcy5jb250YWluc1RvRG9JdGVtKCkpe1xuICAgICAgICAgICAgdGhpcy4jdG9Eb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0VG9Eb0l0ZW0gKGl0ZW0pIHtcbiAgICAgICAgaWYoaXRlbSA8IHRoaXMuI3RvRG9JdGVtcy5sZW5ndGggJiYgaXRlbSA+IC0xKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXNbaXRlbV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgY29udGFpbnNUb0RvSXRlbSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdENvbnRyb2xsZXIge1xuICAgICNjdXJyZW50UHJvamVjdHMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZSh0cnVlKTtcbiAgICB9XG4gICAgZ2V0IG51bWJlck9mUHJvamVjdHMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aDtcbiAgICB9XG4gICAgZ2V0IHRvSnNvbiAoKSB7XG4gICAgICAgIGxldCBzdHJpbmdlZEFycmF5ID0gW107XG4gICAgICAgIGZvcihsZXQgcHJvamVjdCBvZiB0aGlzLiNjdXJyZW50UHJvamVjdHMpIHtcbiAgICAgICAgICAgIHN0cmluZ2VkQXJyYXkucHVzaChwcm9qZWN0LnRvSnNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN0cmluZ2VkQXJyYXkpO1xuICAgIH1cblxuICAgIGZyb21Kc29uKGpzb24pIHtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICBsZXQgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFRvRG9Qcm9qZWN0KHByb2plY3QucHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIHByb2plY3QudG9Eb0l0ZW1zKSB7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdC5hZGRUb0RvSXRlbShpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgI3VwZGF0ZUxvY2FsU3RvcmFnZShmaXJzdFJ1biA9IGZhbHNlKSB7XG4gICAgICAgIGlmKGZpcnN0UnVuKXtcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UHJvamVjdHMnKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZicpO1xuICAgICAgICAgICAgICAgIGxldCBqc29uQXJyYXkgPSBKU09OLnN0cmluZ2lmeSh0aGlzLiNjdXJyZW50UHJvamVjdHMpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdHMnLCBqc29uQXJyYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZScpO1xuICAgICAgICAgICAgICAgIGxldCBzdG9yZWRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50UHJvamVjdHMnKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VJdCA9IHRoaXMuZnJvbUpzb24oc3RvcmVkQXJyYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cyA9IHBhcnNlSXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxzZWlmJylcbiAgICAgICAgICAgIGxldCBqc29uQXJyYXkgPSB0aGlzLnRvSnNvbjtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50UHJvamVjdHMnLCBqc29uQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICBuZXdQcm9qZWN0IChuYW1lKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFRvRG9Qcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLiNjdXJyZW50UHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdCAocHJvamVjdEluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdHNbcHJvamVjdEluZGV4XTtcbiAgICB9XG4gICAgXG4gICAgYWRkVG9Eb0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0XS5hZGRUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9Eb0l0ZW0ocHJvamVjdEluZGV4LCBpdGVtKSB7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0SW5kZXhdLnJlbW92ZVRvRG9JdGVtKGl0ZW0pO1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICByZW1vdmVQcm9qZWN0KHByb2plY3RJbmRleCkge1xuICAgICAgICBpZihwcm9qZWN0SW5kZXggPiAwKXsgLy9EZWZhdWx0IHByb2plY3Qgc2hvdWxkIG5vdCBiZSByZW1vdmFibGVcbiAgICAgICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmUgcHJvamVjdCAke3Byb2plY3RJbmRleH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGVMb2dQcm9qZWN0cygpIHtcbiAgICAgICAgaWYodGhpcy4jY3VycmVudFByb2plY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIHRoaXMuI2N1cnJlbnRQcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvUHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjowO1xcbn1cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM2MUM1RkE7XFxuICAgIGJvcmRlcjoxcHggc29saWQgIzVBQjBEQjtcXG59XFxuaW5wdXQgZm9jdXM6aG92ZXIge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNjFDNUZBO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICM1QUIwREI7XFxuICAgIGJvcmRlci1yYWRpdXM6MDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDNyZW0gNWZyO1xcbn1cXG4uaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbiNhZGRQcm9qZWN0e1xcbiAgICBncmlkLXJvdzoyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3RCb2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1yb3c6IDMvNDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDFmcjtcXG4gICAgZ2FwOjJyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcbi5wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uYWRkVGFzayB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJlbW92ZVByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0VGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG59XFxuLml0ZW1zIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcbi5wcm9qZWN0Om50aC1jaGlsZCgxbikge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBcXG59XFxuXFxuLnByb2plY3Q6bnRoLWNoaWxkKDFuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgMjE3LCAyMTcpO1xcbn1cXG5cXG4ucHJvamVjdDpudGgtY2hpbGQoMm4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4jYWRkSXRlbU92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuLnRvRG9JdGVtRm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOjE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG5cXG4jY2xvc2VPdmVybGF5IHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxRQUFRO0FBQ1o7QUFDQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxufVxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzYxQzVGQTtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNUFCMERCO1xcbn1cXG5pbnB1dCBmb2N1czpob3ZlciB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM2MUM1RkE7XFxuICAgIGJvcmRlcjoxcHggc29saWQgIzVBQjBEQjtcXG4gICAgYm9yZGVyLXJhZGl1czowO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gM3JlbSA1ZnI7XFxufVxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuI2FkZFByb2plY3R7XFxuICAgIGdyaWQtcm93OjIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdEJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnIgMWZyO1xcbiAgICBnYXA6MnJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLnByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcbi5hZGRUYXNrIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG4ucmVtb3ZlUHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbn1cXG4uaXRlbXMge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLnByb2plY3Q6bnRoLWNoaWxkKDFuKSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdDpudGgtY2hpbGQoMW4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyMTcsIDIxNyk7XFxufVxcblxcbi5wcm9qZWN0Om50aC1jaGlsZCgybikge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbiNhZGRJdGVtT3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4udG9Eb0l0ZW1Gb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6MTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcblxcbiNjbG9zZU92ZXJsYXkge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNjcmVhdGVQYWdlQm9keSgpO1xuICAgIH1cbiAgICAjY3JlYXRlUGFnZUJvZHkgKCkge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG8gRG8gTGlzdCc7XG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgICBjb25zdCBwcm9qZWN0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Qm9keS5pZCA9ICdwcm9qZWN0Qm9keSc7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbldyYXBwZXIuaWQgPSAnYWRkUHJvamVjdCc7XG4gICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICgnTmV3IFByb2plY3QnKTtcbiAgICAgICAgYWRkQnV0dG9uLmlkID0gJ2FkZFByb2plY3RCdXR0b24nO1xuICAgICAgICBidXR0b25XcmFwcGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbldyYXBwZXIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RCb2R5KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Qm9keScpO1xuXG4gICAgICAgIHRoaXMuI2NsZWFyV3JhcHBlcih3cmFwcGVyKTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubnVtYmVyT2ZQcm9qZWN0cztpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7IFxuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmZvID0gcHJvamVjdHMuZ2V0UHJvamVjdChpKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RJbmZvLm5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24udGV4dENvbnRlbnQgPSAoJ1JlbW92ZSBQcm9qZWN0Jyk7XG4gICAgICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlUHJvamVjdCcpO1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGkpO1xuXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgcHJvamVjdEluZm8uTnVtYmVyT2ZJdGVtczsgeCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvRG9JdGVtID0gcHJvamVjdEluZm8uZ2V0VG9Eb0l0ZW0oeCk7XG4gICAgICAgICAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHt0b0RvSXRlbS50aXRsZX0gRGVzY3JpcHRpb246ICR7dG9Eb0l0ZW0uZGVzY3JpcHRpb259IERhdGU6ICR7dG9Eb0l0ZW0uZHVlRGF0ZX0gUHJpb3JpdHk6ICR7dG9Eb0l0ZW0ucHJpb3JpdHl9YDtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbS5jbGFzc0xpc3QuYWRkKGByZW1vdmVJdGVtYCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB4KTtcblxuICAgICAgICAgICAgICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHJlbW92ZUl0ZW0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI2NsZWFyV3JhcHBlciAod3JhcHBlcikge1xuICAgICAgICB3aGlsZSh3cmFwcGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdEZvcm0nKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0TmFtZScpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RJbnB1dCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ05hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAnMScpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICczMCcpO1xuXG5cbiAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFByb2plY3QnKTtcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICBhZGRCdXR0b24uYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZClcbiAgICB9XG5cbiAgICBjcmVhdGVUb0RvSXRlbUZvcm0gKCkge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgICAgIG92ZXJsYXkuaWQgPSAnYWRkSXRlbU92ZXJsYXknO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3QnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndG9Eb0l0ZW1Gb3JtJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnVGl0bGUnKTtcbiAgICAgICAgaXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbVRpdGxlJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG4gICAgICAgIGl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbURlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJyk7XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICc0MDAnKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgaXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpdGVtRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICBpdGVtRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnRGF0ZScpO1xuICAgICAgICBpdGVtRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW1EYXRlJyk7XG4gICAgICAgIGl0ZW1EYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGF0ZScpO1xuXG5cbiAgICAgICAgY29uc3QgaXRlbVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGl0ZW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnUHJpb3JpdHknKTtcbiAgICAgICAgaXRlbVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbVByaW9yaXR5Jyk7XG4gICAgICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnaGlnaCcpO1xuICAgICAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuXG4gICAgICAgIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgbWVkaXVtUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICAgICAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcblxuICAgICAgICBpdGVtUHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICAgICAgaXRlbVByaW9yaXR5LmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcbiAgICAgICAgaXRlbVByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0VG9Eb0l0ZW0nKTtcbiAgICAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ0FkZCBJdGVtJztcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpdGVtRGF0ZSk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaXRlbVByaW9yaXR5KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgfVxuICAgIFxuXG59IiwiaW1wb3J0IFByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL3RvRG9Qcm9qZWN0XCI7XG5pbXBvcnQgRGlzcGxheUNvbnRyb2xsZXIgZnJvbSBcIi4vZGlzcGxheVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY2xhc3MgUGFnZUNvbnRyb2xsZXIge1xuICAgICNwcm9qZWN0Q29udHJvbGxlcjtcbiAgICAjZGlzcGxheUNvbnRyb2xsZXI7IFxuICAgICNwcm9qZWN0Rm9ybUFjdGl2ZSA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RDb250cm9sbGVyID0gbmV3IFByb2plY3RDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuI2Rpc3BsYXlDb250cm9sbGVyID0gbmV3IERpc3BsYXlDb250cm9sbGVyKCk7XG4gICAgICAgIHRoaXMuYWRkUHJvamVjdEFkZExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgfVxuXG5cblxuICAgICN1cGRhdGVQcm9qZWN0TGlzdCAoKSB7XG4gICAgICAgIHRoaXMuI2Rpc3BsYXlDb250cm9sbGVyLnVwZGF0ZVByb2plY3RzKHRoaXMuI3Byb2plY3RDb250cm9sbGVyKTtcbiAgICAgICAgdGhpcy5hZGRQcm9qZWN0UmVtb3ZhbExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkSXRlbUFkZExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmFkZEl0ZW1SZW1vdmFsTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAjYWRkUHJvamVjdChuYW1lKSB7XG4gICAgICAgIGlmKG5hbWUgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgIHRoaXMuI3Byb2plY3RDb250cm9sbGVyLm5ld1Byb2plY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI3Byb2plY3RDb250cm9sbGVyLm5ld1Byb2plY3QobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB9XG5cbiAgICAjcmVtb3ZlUHJvamVjdCAocHJvamVjdEluZGV4KSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RDb250cm9sbGVyLnJlbW92ZVByb2plY3QocHJvamVjdEluZGV4KTtcbiAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB9XG5cbiAgICAjYWRkVG9Eb0l0ZW0ocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiNwcm9qZWN0Q29udHJvbGxlci5hZGRUb0RvSXRlbShwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB9XG5cbiAgICAjcmVtb3ZlVG9Eb0l0ZW0ocHJvamVjdEluZGV4LCBpdGVtKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3RDb250cm9sbGVyLnJlbW92ZVRvRG9JdGVtKHByb2plY3RJbmRleCwgaXRlbSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgfVxuXG4gICAgYWRkUHJvamVjdEFkZExpc3RlbmVyICgpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLiNwcm9qZWN0Rm9ybUFjdGl2ZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZHByb2plY3RpZicpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3BsYXlDb250cm9sbGVyLmNyZWF0ZVByb2plY3RGb3JtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvamVjdEZvcm1BY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvamVjdFN1Ym1pdExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkcHJvamVjdGVsc2UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNkaXNwbGF5Q29udHJvbGxlci5yZW1vdmVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb2plY3RGb3JtQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFByb2plY3RTdWJtaXRMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3QnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4jYWRkUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy4jZGlzcGxheUNvbnRyb2xsZXIucmVtb3ZlUHJvamVjdEZvcm0oKTtcbiAgICAgICAgICAgIHRoaXMuI3Byb2plY3RGb3JtQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4jcHJvamVjdENvbnRyb2xsZXIuY29uc29sZUxvZ1Byb2plY3RzKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgICAgICAgICBcbiAgICBhZGRQcm9qZWN0UmVtb3ZhbExpc3RlbmVyKCkge1xuICAgICAgICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVQcm9qZWN0Jyk7XG4gICAgICAgIHJlbW92ZVByb2plY3RCdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZW1vdmVCdXR0b25DTGlja2VkJHtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKX1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW1vdmVQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEl0ZW1BZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBjb25zdCBhZGRJdGVtQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRUYXNrJyk7XG4gICAgICAgIGFkZEl0ZW1CdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRJdGVtT3ZlcmxheScpID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVUb0RvSXRlbUZvcm0ocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkSXRlbU92ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFRvRG9JdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI2FkZFRvRG9JdGVtKHByb2plY3RJbmRleCwgaXRlbVRpdGxlLnZhbHVlLCBpdGVtRGVzY3JpcHRpb24udmFsdWUsIGl0ZW1EYXRlLnZhbHVlLCBpdGVtUHJpb3JpdHkudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiNwcm9qZWN0Q29udHJvbGxlci50b0pzb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiBlc2NhcGVIaXQoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFc2NhcGUnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXNjYXBlSGl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjbG9zZU92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPdmVybGF5LmlkID0gJ2Nsb3NlT3ZlcmxheSc7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT3ZlcmxheS50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge292ZXJsYXkucmVtb3ZlKCk7fSk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoY2xvc2VPdmVybGF5KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYWRkSXRlbVJlbW92YWxMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlSXRlbUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlSXRlbScpO1xuICAgICAgICByZW1vdmVJdGVtQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNyZW1vdmVUb0RvSXRlbShwcm9qZWN0LCBpdGVtKTtcbiAgICAgICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuXG59XG5cbmNvbnN0IHBhZ2UgPSBuZXcgUGFnZUNvbnRyb2xsZXIoKTtcblxuXG5cblxuXG5cbiIsImNsYXNzIFRvRG9JdGVtIHtcbiAgICAjdGl0bGU7XG4gICAgI2Rlc2NyaXB0aW9uO1xuICAgICNkdWVEYXRlO1xuICAgICNwcmlvcml0eTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuI2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuI2R1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Rlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBnZXQgZHVlRGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNkdWVEYXRlO1xuICAgIH1cbiAgICBnZXQgcHJpb3JpdHkgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIHNldCBkZXNjcmlwdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy4jZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgc2V0IGR1ZURhdGUgKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy4jZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIHNldCBwcmlvcml0eSAocHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nSXRlbXMgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiN0aXRsZSArICcgJyArIHRoaXMuI2Rlc2NyaXB0aW9uICsgJyAnICsgdGhpcy4jZHVlRGF0ZSArICcgJyArIHRoaXMuI3ByaW9yaXR5KVxuICAgIH1cblxuICAgIGdldCB0b0pzb24gKCkge1xuICAgICAgICByZXR1cm4ge3RpdGxlOiB0aGlzLiN0aXRsZSwgZGVzY3JpcHRpb246IHRoaXMuI2Rlc2NyaXB0aW9uLCBkdWVEYXRlOiB0aGlzLiNkdWVEYXRlLCBwcmlvcml0eTogdGhpcy4jcHJpb3JpdHl9O1xuICAgIH1cblxufVxuXG5cbmNsYXNzIFRvRG9Qcm9qZWN0IHtcbiAgICAjcHJvamVjdE5hbWU7XG4gICAgI3RvRG9JdGVtcyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yIChwcm9qZWN0TmFtZSA9ICdEZWZhdWx0IFByb2plY3QnKSB7XG4gICAgICAgIHRoaXMuI3Byb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgTnVtYmVyT2ZJdGVtcyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0b0RvSXRlbXMubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldCB0b0pzb24gKCkge1xuICAgICAgICBsZXQgc3RyaW5nZWRJdGVtcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy4jdG9Eb0l0ZW1zKSB7XG4gICAgICAgICAgICBzdHJpbmdlZEl0ZW1zLnB1c2goaXRlbS50b0pzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7cHJvamVjdE5hbWU6IHRoaXMuI3Byb2plY3ROYW1lLCB0b0RvSXRlbXM6IHN0cmluZ2VkSXRlbXN9O1xuICAgIH1cblxuXG4gICAgXG5cbiAgICBhZGRUb0RvSXRlbSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLiN0b0RvSXRlbXMucHVzaChuZXcgVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkpO1xuICAgIH1cblxuICAgIHJlbW92ZVRvRG9JdGVtIChpbmRleCkge1xuICAgICAgICBpZih0aGlzLmNvbnRhaW5zVG9Eb0l0ZW0oKSl7XG4gICAgICAgICAgICB0aGlzLiN0b0RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBnZXRUb0RvSXRlbSAoaXRlbSkge1xuICAgICAgICBpZihpdGVtIDwgdGhpcy4jdG9Eb0l0ZW1zLmxlbmd0aCAmJiBpdGVtID4gLTEpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtc1tpdGVtXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBjb250YWluc1RvRG9JdGVtICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RvRG9JdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0Q29udHJvbGxlciB7XG4gICAgI2N1cnJlbnRQcm9qZWN0cyA9IFtdO1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKHRydWUpO1xuICAgIH1cbiAgICBnZXQgbnVtYmVyT2ZQcm9qZWN0cyAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNjdXJyZW50UHJvamVjdHMubGVuZ3RoO1xuICAgIH1cbiAgICBnZXQgdG9Kc29uICgpIHtcbiAgICAgICAgbGV0IHN0cmluZ2VkQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBwcm9qZWN0IG9mIHRoaXMuI2N1cnJlbnRQcm9qZWN0cykge1xuICAgICAgICAgICAgc3RyaW5nZWRBcnJheS5wdXNoKHByb2plY3QudG9Kc29uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3RyaW5nZWRBcnJheSk7XG4gICAgfVxuXG4gICAgZnJvbUpzb24oanNvbikge1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGxldCByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IobGV0IHByb2plY3Qgb2YgZGF0YSkge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgVG9Eb1Byb2plY3QocHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgcHJvamVjdC50b0RvSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0LmFkZFRvRG9JdGVtKGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uZHVlRGF0ZSwgaXRlbS5wcmlvcml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICAjdXBkYXRlTG9jYWxTdG9yYWdlKGZpcnN0UnVuID0gZmFsc2UpIHtcbiAgICAgICAgaWYoZmlyc3RSdW4pe1xuICAgICAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0cycpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lmJyk7XG4gICAgICAgICAgICAgICAgbGV0IGpzb25BcnJheSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuI2N1cnJlbnRQcm9qZWN0cyk7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0cycsIGpzb25BcnJheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbHNlJyk7XG4gICAgICAgICAgICAgICAgbGV0IHN0b3JlZEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0cycpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZUl0ID0gdGhpcy5mcm9tSnNvbihzdG9yZWRBcnJheSk7XG4gICAgICAgICAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3RzID0gcGFyc2VJdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbHNlaWYnKVxuICAgICAgICAgICAgbGV0IGpzb25BcnJheSA9IHRoaXMudG9Kc29uO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRQcm9qZWN0cycsIGpzb25BcnJheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIG5ld1Byb2plY3QgKG5hbWUpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgVG9Eb1Byb2plY3QobmFtZSk7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0IChwcm9qZWN0SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2N1cnJlbnRQcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuICAgIH1cbiAgICBcbiAgICBhZGRUb0RvSXRlbShwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KXtcbiAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3RzW3Byb2plY3RdLmFkZFRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICB0aGlzLiN1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb0RvSXRlbShwcm9qZWN0SW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgdGhpcy4jY3VycmVudFByb2plY3RzW3Byb2plY3RJbmRleF0ucmVtb3ZlVG9Eb0l0ZW0oaXRlbSk7XG4gICAgICAgIHRoaXMuI3VwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gICAgICAgIHRoaXMuI2N1cnJlbnRQcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy4jdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc29sZUxvZ1Byb2plY3RzKCkge1xuICAgICAgICBpZih0aGlzLiNjdXJyZW50UHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IobGV0IHByb2plY3Qgb2YgdGhpcy4jY3VycmVudFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
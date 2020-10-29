(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/blocks/accordion/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/accordion/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_radio_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/radio-group */ "./src/components/radio-group.js");







function Edit(props) {
  var titleColor = props.titleColor,
      setTitleColor = props.setTitleColor,
      titleBackground = props.titleBackground,
      setTitleBackground = props.setTitleBackground,
      contentBackground = props.contentBackground,
      setContentBackground = props.setContentBackground,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      mediaControl = props.mediaControl;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var titleColorClass = titleColor.class != undefined ? titleColor.class : '';
  var titleBackgroundClass = titleBackground.class != undefined ? titleBackground.class : '';
  var contentBackgroundClass = contentBackground.class != undefined ? contentBackground.class : '';
  var titleTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  var icons = {
    expand: ['arrow-down', 'arrow-right', 'arrow-down-alt2', 'arrow-right-alt2', 'arrow-down-alt', 'arrow-right-alt', 'plus'],
    collapse: ['arrow-up', 'arrow-up-alt2', 'minus', 'arrow-up-alt', 'no-alt']
  };

  var setTitleTag = function setTitleTag(event) {
    return setAttributes({
      titleTag: event.target.value
    });
  };

  var setExpandIcon = function setExpandIcon(event) {
    event.preventDefault();
    return setAttributes({
      expandIcon: event.currentTarget.value
    });
  };

  var setCollapseIcon = function setCollapseIcon(event) {
    event.preventDefault();
    return setAttributes({
      collapseIcon: event.currentTarget.value
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Base Settings'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "block-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Anchor title'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalInputControl"], {
    value: attributes.anchorContent,
    onChange: function onChange(anchorContent) {
      return setAttributes({
        anchorContent: anchorContent
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "block-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Initial state'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: attributes.initialState ? 'Expanded by default' : 'Collapsed by default',
    checked: attributes.initialState,
    onChange: function onChange() {
      return setAttributes({
        initialState: !attributes.initialState
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_radio_group__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title size'),
    onClick: setTitleTag,
    options: titleTags,
    initialChecked: attributes.titleTag
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon settings'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_radio_group__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expand Icon'),
    onClick: setExpandIcon,
    options: icons.expand,
    initialChecked: attributes.expandIcon,
    showIcons: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_radio_group__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Collapse Icon'),
    onClick: setCollapseIcon,
    options: icons.collapse,
    initialChecked: attributes.collapseIcon,
    showIcons: true
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Mobile View Control'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("".concat(props.attributes.mediaControl ? 'Display' : 'Hide', " on mobile")),
    checked: props.attributes.mediaControl,
    onChange: function onChange(mediaControl) {
      return props.setAttributes({
        mediaControl: mediaControl
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color settings'),
    initialOpen: false,
    colorSettings: [{
      value: titleColor.color,
      onChange: setTitleColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title text color')
    }, {
      value: titleBackground.color,
      onChange: setTitleBackground,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Title background color')
    }, {
      value: contentBackground.color,
      onChange: setContentBackground,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Content background color')
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "#".concat(attributes.anchorContent),
    className: "noor-block-accordion ".concat(titleBackgroundClass),
    onClick: function onClick() {
      return setExpanded(!expanded);
    },
    "aria-expanded": "".concat(attributes.initialState || expanded)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    className: "noor-block-accordion__title ".concat(titleColorClass),
    tagName: attributes.titleTag,
    value: attributes.titleContent,
    formattingControls: ['bold', 'italic', 'align'],
    onChange: function onChange(titleContent) {
      return setAttributes({
        titleContent: titleContent
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dashicon"], {
    icon: expanded ? attributes.collapseIcon : attributes.expandIcon,
    className: "noor-block-accordion__icon ".concat(titleColorClass)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "noor-block-accordion__content ".concat(contentBackgroundClass)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
    allowedBlocks: ['core/paragraph', 'core/list', 'core/button'],
    template: [['core/paragraph', {}]]
  })));
}

/***/ }),

/***/ "./src/blocks/accordion/index.js":
/*!***************************************!*\
  !*** ./src/blocks/accordion/index.js ***!
  \***************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/accordion/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/accordion/save.js");




var name = 'accordion';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Accordion', 'accordion'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Accordion block', 'blocks'),
  category: 'noor-collection',
  icon: 'list-view',
  supports: {
    html: false
  },
  attributes: {
    anchorContent: {
      type: 'string',
      default: ''
    },
    titleContent: {
      type: 'string',
      default: 'Example title...'
    },
    titleTag: {
      type: 'string',
      default: 'h4'
    },
    initialState: {
      type: 'boolean',
      default: false
    },
    titleColor: {
      type: 'string'
    },
    titleBackground: {
      type: 'string'
    },
    contentBackground: {
      type: 'string'
    },
    expandIcon: {
      type: 'string',
      default: 'arrow-down-alt2'
    },
    collapseIcon: {
      type: 'string',
      default: 'arrow-up-alt2'
    },
    iconAlignment: {
      type: 'string',
      default: 'right'
    },
    mediaControl: {
      type: 'boolean',
      default: true
    }
  },
  edit: Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["withColors"])({
    titleColor: 'color',
    titleBackground: 'background-color',
    contentBackground: 'background-color'
  })(_edit__WEBPACK_IMPORTED_MODULE_2__["default"]),
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/blocks/accordion/save.js":
/*!**************************************!*\
  !*** ./src/blocks/accordion/save.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function save(_ref) {
  var attributes = _ref.attributes;
  var titleColor = attributes.titleColor,
      titleBackground = attributes.titleBackground,
      contentBackground = attributes.contentBackground,
      mediaControl = attributes.mediaControl;
  var titleColorClass = titleColor != undefined ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["getColorClassName"])('color', titleColor) : '';
  var titleBackgroundClass = titleBackground != undefined ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["getColorClassName"])('background-color', titleBackground) : '';
  var contentBackgroundClass = contentBackground != undefined ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["getColorClassName"])('background-color', contentBackground) : '';
  var hide = mediaControl ? '' : 'on-media-hide';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "#".concat(attributes.anchorContent),
    className: "noor-block-accordion ".concat(titleBackgroundClass, " ").concat(hide),
    "aria-expanded": attributes.initialState
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    className: "noor-block-accordion__title ".concat(titleColorClass),
    tagName: attributes.titleTag,
    value: attributes.titleContent
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "noor-block-accordion__icon dashicons dashicons-".concat(attributes.expandIcon, " ").concat(titleColorClass),
    "aria-hidden": "true",
    "data-state": !attributes.initialState
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "noor-block-accordion__icon dashicons dashicons-".concat(attributes.collapseIcon, " ").concat(titleColorClass),
    "aria-hidden": "true",
    "data-state": attributes.initialState
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "noor-block-accordion__content ".concat(contentBackgroundClass)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null)));
}

/***/ }),

/***/ "./src/blocks/bulletpoint/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/bulletpoint/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





function Edit(props) {
  var color = props.color,
      setColor = props.setColor,
      backgroundColor = props.backgroundColor,
      setBackgroundColor = props.setBackgroundColor,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className;
  var align = attributes.align,
      mediaId = attributes.mediaId,
      mediaControl = attributes.mediaControl;
  var colorClass = color.class != undefined ? color.class : '';
  var backgroundColorClass = backgroundColor.class != undefined ? backgroundColor.class : '';

  var removeMedia = function removeMedia() {
    props.setAttributes({
      mediaId: 0,
      mediaUrl: ''
    });
  };

  var onSelectMedia = function onSelectMedia(media) {
    props.setAttributes({
      mediaId: media.id,
      mediaUrl: media.url
    });
  };

  var blockStyle = {
    backgroundImage: attributes.mediaUrl != '' ? 'url("' + attributes.mediaUrl + '")' : 'none'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Content settings'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: attributes.useMedia ? 'Set text content' : 'Set background image',
    checked: attributes.useMedia,
    onChange: function onChange() {
      return setAttributes({
        useMedia: !attributes.useMedia
      });
    }
  }), attributes.useMedia ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "editor-post-featured-image"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    onSelect: onSelectMedia,
    value: mediaId,
    allowedTypes: ['image'],
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
        onClick: open
      }, mediaId == 0 && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Choose an image'), props.media != undefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ResponsiveWrapper"], {
        naturalWidth: props.media.media_details.width,
        naturalHeight: props.media.media_details.height
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
        src: props.media.source_url
      })));
    }
  }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["__experimentalInputControl"], {
    value: attributes.mediaInput,
    onChange: function onChange(mediaInput) {
      return setAttributes({
        mediaInput: mediaInput
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile View Control'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("".concat(props.attributes.mediaControl ? 'Display' : 'Hide', " on mobile")),
    checked: props.attributes.mediaControl,
    onChange: function onChange(mediaControl) {
      return props.setAttributes({
        mediaControl: mediaControl
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Colot settings'),
    initialOpen: true,
    colorSettings: [{
      value: color.color,
      onChange: setColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text color')
    }, {
      value: backgroundColor.color,
      onChange: setBackgroundColor,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color')
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockAlignmentToolbar"], {
    value: align,
    onChange: function onChange(nextAlign) {
      setAttributes({
        align: nextAlign
      });
    },
    controls: ['left', 'right', 'center']
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "noor-block-bullet-point has-align-".concat(align)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "noor-block-bullet-point__point ".concat(backgroundColorClass)
  }, attributes.useMedia && attributes.mediaId != 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: attributes.mediaUrl
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
    className: "noor-block-bullet-point__text-content ".concat(colorClass)
  }, attributes.mediaInput))));
}

/***/ }),

/***/ "./src/blocks/bulletpoint/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/bulletpoint/index.js ***!
  \*****************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/blocks/bulletpoint/edit.js");







var name = 'bullet-point';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bullet point', 'accordion'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Bullet point block', 'blocks'),
  category: 'noor-collection',
  icon: 'marker',
  supports: {
    html: false
  },
  attributes: {
    color: {
      type: 'string'
    },
    backgroundColor: {
      type: 'string'
    },
    align: {
      type: 'string',
      default: 'center'
    },
    useMedia: {
      type: 'boolean',
      default: false
    },
    mediaInput: {
      type: 'string',
      default: ''
    },
    mediaId: {
      type: 'number',
      default: 0
    },
    mediaUrl: {
      type: 'string',
      default: ''
    },
    mediaControl: {
      type: 'boolean',
      default: true
    }
  },
  edit: Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["withColors"])({
    color: 'color',
    backgroundColor: 'background-color'
  }), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select, props) {
    return {
      media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined
    };
  }))(_edit__WEBPACK_IMPORTED_MODULE_5__["default"]),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var color = attributes.color,
        backgroundColor = attributes.backgroundColor,
        align = attributes.align,
        mediaControl = attributes.mediaControl;
    var colorClass = color != undefined ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["getColorClassName"])('color', color) : '';
    var backgroundColorClass = backgroundColor != undefined ? Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["getColorClassName"])('background-color', backgroundColor) : '';
    var hide = mediaControl ? '' : 'on-media-hide';
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "noor-block-bullet-point has-align-".concat(align, " ").concat(hide)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "noor-block-bullet-point__point ".concat(backgroundColorClass)
    }, attributes.useMedia && attributes.mediaId != 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: attributes.mediaUrl
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "noor-block-bullet-point__text-content ".concat(colorClass)
    }, attributes.mediaInput)));
  }
};

/***/ }),

/***/ "./src/blocks/google-map/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/google-map/edit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Edit(props) {
  var srcBase = 'https://www.google.com/maps/embed/v1/place?key=';
  var googleAPIKey = options.map_secret_key;
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var width = attributes.width,
      height = attributes.height,
      zoom = attributes.zoom,
      address = attributes.address,
      mediaControl = attributes.mediaControl;
  var getaddress = Object.values(address).filter(function (line) {
    return line != '';
  });
  var queryString = getaddress.reduce(function (acc, curr, i) {
    return acc + ' ' + curr;
  }, '').trim().toLowerCase();
  var getSrc = "".concat(srcBase + googleAPIKey, "&q=").concat(encodeURI(queryString), "&zoom=").concat(zoom);
  setAttributes({
    src: getSrc
  });
  var styles = {
    width: width + '%',
    paddingBottom: height + '%'
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Map Controls'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Frame Width'),
    value: width,
    onChange: function onChange(width) {
      return setAttributes({
        width: width
      });
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Frame Height'),
    value: height,
    onChange: function onChange(height) {
      return setAttributes({
        height: height
      });
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Frame Zoom'),
    value: zoom,
    onChange: function onChange(zoom) {
      return setAttributes({
        zoom: zoom
      });
    },
    min: 0,
    max: 100
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Map Location'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "block-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Street Address'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalInputControl"], {
    value: address.street,
    onChange: function onChange(street) {
      return setAttributes({
        address: _objectSpread(_objectSpread({}, address), {}, {
          street: street
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "block-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Postal Code/Zip'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalInputControl"], {
    value: address.zip,
    onChange: function onChange(zip) {
      return setAttributes({
        address: _objectSpread(_objectSpread({}, address), {}, {
          zip: zip
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "block-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('City'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalInputControl"], {
    value: address.city,
    onChange: function onChange(city) {
      return setAttributes({
        address: _objectSpread(_objectSpread({}, address), {}, {
          city: city
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "block-base-control__label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Country'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["__experimentalInputControl"], {
    value: address.country,
    onChange: function onChange(country) {
      return setAttributes({
        address: _objectSpread(_objectSpread({}, address), {}, {
          country: country
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Mobile View Control'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("".concat(props.attributes.mediaControl ? 'Display' : 'Hide', " on mobile")),
    checked: props.attributes.mediaControl,
    onChange: function onChange(mediaControl) {
      return props.setAttributes({
        mediaControl: mediaControl
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "noor-block-google-map",
    style: styles
  }, googleAPIKey != '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("iframe", {
    width: "361",
    height: "160",
    src: getSrc,
    frameBorder: "0",
    allowFullScreen: true
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Please provide API key in settings'))));
}

/***/ }),

/***/ "./src/blocks/google-map/index.js":
/*!****************************************!*\
  !*** ./src/blocks/google-map/index.js ***!
  \****************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/google-map/edit.js");



var name = 'google-map';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Google map', 'noorblocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Embeds an google maps iframe', 'noorblocks'),
  category: 'noor-collection',
  icon: 'location-alt',
  supports: {
    html: false,
    align: true
  },
  attributes: {
    zoom: {
      type: 'number',
      default: 20
    },
    width: {
      type: 'number',
      default: 100
    },
    height: {
      type: 'number',
      default: 75
    },
    address: {
      type: 'object',
      default: {
        street: '',
        zip: '',
        city: '',
        country: 'sweden'
      }
    },
    src: {
      type: 'string'
    },
    mediaControl: {
      type: 'boolean',
      default: true
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save(props) {
    var _props$attributes = props.attributes,
        width = _props$attributes.width,
        height = _props$attributes.height,
        src = _props$attributes.src;
    props.className = "noor-block-google-map ".concat(props.attributes.mediaControl ? '' : 'on-media-hide');
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className,
      style: {
        width: "".concat(width, "%"),
        paddingBottom: "".concat(height, "%")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("iframe", {
      width: "361",
      height: "160",
      frameBorder: "0",
      src: src,
      allowFullScreen: true
    }));
  }
};

/***/ }),

/***/ "./src/components/controls.js":
/*!************************************!*\
  !*** ./src/components/controls.js ***!
  \************************************/
/*! exports provided: SmallScreenControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallScreenControl", function() { return SmallScreenControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function SmallScreenControl(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Mobile View Control'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("".concat(props.attributes.mediaControl ? 'Display' : 'Hide', " on mobile")),
    checked: props.attributes.mediaControl,
    onChange: function onChange(mediaControl) {
      return props.setAttributes({
        mediaControl: mediaControl
      });
    }
  }));
}

/***/ }),

/***/ "./src/components/radio-group.js":
/*!***************************************!*\
  !*** ./src/components/radio-group.js ***!
  \***************************************/
/*! exports provided: RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



var RadioGroup = function RadioGroup(_ref) {
  var _onClick = _ref.onClick,
      options = _ref.options,
      initialChecked = _ref.initialChecked,
      showIcons = _ref.showIcons,
      label = _ref.label;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    mode: "radio"
  }, !showIcons && {
    onClick: function onClick(event) {
      return _onClick(event);
    }
  }), label && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, label)), options.map(function (option, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, showIcons && {
      onClick: function onClick(event) {
        return _onClick(event);
      }
    }, {
      className: initialChecked === option && 'is-primary',
      key: index,
      checked: initialChecked,
      value: option
    }), showIcons ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
      icon: option
    }) : option);
  }));
};

/***/ }),

/***/ "./src/filters/attributes.js":
/*!***********************************!*\
  !*** ./src/filters/attributes.js ***!
  \***********************************/
/*! exports provided: attributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
var attributes = function attributes(settings, name) {
  if (!name.includes('noor')) {
    Object.assign(settings.attributes, {
      mediaControl: {
        type: 'boolean',
        default: true
      }
    });
  }

  if ('core/button' === name) {
    Object.assign(settings.attributes, {
      useIcon: {
        type: 'boolean',
        default: true
      },
      alignIcon: {
        type: 'boolean',
        default: false
      },
      icon: {
        type: 'string',
        default: 'arrow-right-alt'
      }
    });
  }

  if ('core/column' === name) {
    Object.assign(settings.attributes, {
      backgroundColor: {
        type: 'string'
      }
    });
  }

  return settings;
};

/***/ }),

/***/ "./src/filters/blockEdit.js":
/*!**********************************!*\
  !*** ./src/filters/blockEdit.js ***!
  \**********************************/
/*! exports provided: blockEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockEdit", function() { return blockEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_radio_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/radio-group */ "./src/components/radio-group.js");
/* harmony import */ var _components_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls */ "./src/components/controls.js");









var iconControlOptions = ['arrow-right-alt', 'arrow-left-alt', 'arrow-right-alt2', 'arrow-left-alt2', 'clock', 'location'];
var blockEdit = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["withColors"])({
  backgroundColor: 'background-color'
}), Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(function (BlockEdit) {
  return function (props) {
    if (!props.name.includes('noor')) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_controls__WEBPACK_IMPORTED_MODULE_6__["SmallScreenControl"], props)));
    }

    if (props.name === 'core/column') {
      var backgroundColor = props.backgroundColor,
          setBackgroundColor = props.setBackgroundColor;
      props.setAttributes({
        className: backgroundColor.class != undefined ? backgroundColor.class + ' has-background' : ''
      });
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PanelColorSettings"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color settings'),
        initialOpen: false,
        colorSettings: [{
          value: backgroundColor.color,
          onChange: setBackgroundColor,
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Column background color')
        }]
      })));
    }

    if (props.name === 'core/button') {
      var attributes = props.attributes,
          setAttributes = props.setAttributes;
      var _props$attributes = props.attributes,
          useIcon = _props$attributes.useIcon,
          alignIcon = _props$attributes.alignIcon,
          icon = _props$attributes.icon;

      var setIconClassList = function setIconClassList() {
        var align = alignIcon ? 'has-left-icon' : 'has-right-icon';
        var iconName = useIcon && icon !== '' ? "has-icon-".concat(icon) : undefined;
        var className = align + ' ' + iconName;
        setAttributes({
          className: className
        });
      };

      var setUseIcon = function setUseIcon(useIcon) {
        setAttributes({
          useIcon: useIcon
        });

        if (!useIcon) {
          setIcon('');
        }
      };

      var setIcon = function setIcon(value, event) {
        if (event) {
          event.preventDefault();
        }

        setAttributes({
          icon: value
        });
        setIconClassList();
      };

      setIcon(icon);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inline Icon Control'),
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Use inline icon'),
        checked: useIcon,
        onChange: setUseIcon
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
        label: alignIcon ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon before') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon after'),
        checked: alignIcon,
        onChange: function onChange() {
          return setAttributes({
            alignIcon: !alignIcon
          });
        }
      }), useIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_radio_group__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Inline Icon'),
        onClick: function onClick(event) {
          event.preventDefault();
          setAttributes({
            icon: event.currentTarget.value,
            event: event
          });
        },
        options: iconControlOptions,
        initialChecked: props.attributes.icon,
        showIcons: true
      }))));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  };
}, 'blockEdit'));

/***/ }),

/***/ "./src/filters/extraProps.js":
/*!***********************************!*\
  !*** ./src/filters/extraProps.js ***!
  \***********************************/
/*! exports provided: extraProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extraProps", function() { return extraProps; });
var extraProps = function extraProps(props, blockType, attributes) {
  if (!attributes.mediaControl && !blockType.name.includes('noor')) {
    props.className = props.className + ' on-media-hide';
  }

  return props;
};

/***/ }),

/***/ "./src/filters/index.js":
/*!******************************!*\
  !*** ./src/filters/index.js ***!
  \******************************/
/*! exports provided: filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes */ "./src/filters/attributes.js");
/* harmony import */ var _blockEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockEdit */ "./src/filters/blockEdit.js");
/* harmony import */ var _extraProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extraProps */ "./src/filters/extraProps.js");



var filters = {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_0__["attributes"],
  blockEdit: _blockEdit__WEBPACK_IMPORTED_MODULE_1__["blockEdit"],
  extraProps: _extraProps__WEBPACK_IMPORTED_MODULE_2__["extraProps"]
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_accordion_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/accordion/index */ "./src/blocks/accordion/index.js");
/* harmony import */ var _blocks_bulletpoint_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/bulletpoint/index */ "./src/blocks/bulletpoint/index.js");
/* harmony import */ var _blocks_google_map_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/google-map/index */ "./src/blocks/google-map/index.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _filters_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/index */ "./src/filters/index.js");






var prefix = 'noor/';

var registerBlock = function registerBlock(block) {
  var name = block.name,
      settings = block.settings;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(prefix + name, settings);
};

var registerNoorBlocks = function registerNoorBlocks() {
  return [_blocks_accordion_index__WEBPACK_IMPORTED_MODULE_1__, _blocks_bulletpoint_index__WEBPACK_IMPORTED_MODULE_2__, _blocks_google_map_index__WEBPACK_IMPORTED_MODULE_3__].forEach(function (block) {
    return registerBlock(block);
  });
};

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('blocks.registerBlockType', 'noor/gutenberg-blocks/custom-attributes', _filters_index__WEBPACK_IMPORTED_MODULE_5__["filters"].attributes);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('editor.BlockEdit', 'noor/gutenberg-blocks/custom-control', _filters_index__WEBPACK_IMPORTED_MODULE_5__["filters"].blockEdit);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('blocks.getSaveContent.extraProps', 'noor/gutenberg-blocks/extraProps', _filters_index__WEBPACK_IMPORTED_MODULE_5__["filters"].extraProps);
registerNoorBlocks();

/***/ }),

/***/ "./src/styles/editor.scss":
/*!********************************!*\
  !*** ./src/styles/editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi ./src/index.js ./src/styles/style.scss ./src/styles/editor.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Christoffer\Projects\Wordpress\Plugins\gutenberg-blocks\src\index.js */"./src/index.js");
__webpack_require__(/*! C:\Users\Christoffer\Projects\Wordpress\Plugins\gutenberg-blocks\src\styles\style.scss */"./src/styles/style.scss");
module.exports = __webpack_require__(/*! C:\Users\Christoffer\Projects\Wordpress\Plugins\gutenberg-blocks\src\styles\editor.scss */"./src/styles/editor.scss");


/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
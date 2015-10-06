/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4)
	module.exports.template = __webpack_require__(6)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	        section: {
	            label: 'Appearance',
	            priority: 90
	        },

	        data: function () {
	            return window.$bixie;
	        },

	        props: ['node'],

	        filters: __webpack_require__(5)

	    };

	    window.Site.components['node-theme'] = module.exports;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	    themeStyles: function (value, select) {
	        var vm = this, options = select ? [{value: '', text: vm.$trans('- default style -')}] : [];
	        _.each(value, function (style) {
	            options.push({value: style, text: vm.$trans(_.startCase(style))});
	        });
	        return options;
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-horizontal\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label class=\"uk-form-label\">{{ 'Style' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select class=\"uk-form-width-large\" v-model=\"node.theme.style\" options=\"styles | themeStyles true\"></select>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Title' | trans }}</span>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <label><input type=\"checkbox\" value=\"center-content\" v-model=\"node.theme.title_hide\"> {{ 'Hide Title' | trans }}</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"form-class\" class=\"uk-form-label\">{{ 'HTML Class' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"form-class\" class=\"uk-form-width-large\" type=\"text\" v-model=\"node.theme.html_class\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label class=\"uk-form-label\">{{ 'Sidebar' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select class=\"uk-form-width-small\" v-model=\"node.theme.sidebar_position\">\r\n                    <option value=\"right\">{{ 'Right' | trans }}</option>\r\n                    <option value=\"left\">{{ 'Left' | trans }}</option>\r\n                </select>\r\n                <select class=\"uk-form-width-small uk-margin-small-left\" v-model=\"node.theme.sidebar_width\">\r\n                    <option value=\"1-4\">{{ '25%' | trans }}</option>\r\n                    <option value=\"1-3\">{{ '33%' | trans }}</option>\r\n                    <option value=\"1-2\">{{ '50%' | trans }}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";

/***/ }
/******/ ]);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
    Vue.component('nova-big-filter', __webpack_require__(2));
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9bc2c0a", Component.options)
  } else {
    hotAPI.reload("data-v-b9bc2c0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        card: {
            filterMenuTitle: String,
            filterMaxHeight: Number,
            filterHideTitle: {
                type: Boolean,
                default: false
            }
        },
        resourceName: String,
        softDeletes: Boolean,
        viaResource: String,
        viaHasOne: Boolean,
        trashed: {
            type: String,
            validator: function validator(value) {
                return ['', 'with', 'only'].indexOf(value) != -1;
            }
        },
        perPage: [String, Number],
        showTrashedOption: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        trashedChanged: function trashedChanged(event) {
            this.$emit('trashed-changed', event.target.value);
        },
        perPageChanged: function perPageChanged(event) {
            this.$emit('per-page-changed', event.target.value);
        }
    },

    computed: {
        /**
         * Return the filters from state
         */
        filters: function filters() {
            return this.$store.getters[this.resourceName + '/filters'];
        },


        /**
         * Determine via state whether filters are applied
         */
        filtersAreApplied: function filtersAreApplied() {
            return this.$store.getters[this.resourceName + '/filtersAreApplied'];
        },


        /**
         * Return the number of active filters
         */
        activeFilterCount: function activeFilterCount() {
            return this.$store.getters[this.resourceName + '/activeFilterCount'];
        },
        filterRows: function filterRows() {
            if (this.filters.length > 3) {
                return _.chunk(this.filters, 3);
            } else {
                return [this.filters];
            }
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.filters.length > 0
    ? _c(
        "div",
        { staticClass: "bg-30 border-b border-60" },
        [
          _c(
            "scroll-wrap",
            {
              attrs: {
                height: _vm.card.filterMaxHeight
                  ? _vm.card.filterMaxHeight
                  : 350
              }
            },
            [
              !_vm.card.filterHideTitle
                ? _c(
                    "div",
                    {
                      staticClass:
                        "py-2 w-full block text-xs uppercase tracking-wide text-center text-80 dim font-bold focus:outline-none"
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(
                            this.card.filterMenuTitle
                              ? this.card.filterMenuTitle
                              : "Filter Menu"
                          ) +
                          "\n        "
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._l(this.filterRows, function(filters) {
                return _c("div", [
                  _c(
                    "div",
                    { staticClass: "float-left nova-big-filter-col" },
                    [
                      filters[0]
                        ? _c(filters[0].component, {
                            key: filters[0].name,
                            tag: "component",
                            attrs: {
                              "resource-name": _vm.resourceName,
                              "filter-key": filters[0].class
                            },
                            on: {
                              input: function($event) {
                                return _vm.$emit("filter-changed")
                              },
                              change: function($event) {
                                return _vm.$emit("filter-changed")
                              }
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "float-left nova-big-filter-col" },
                    [
                      filters[1]
                        ? _c(filters[1].component, {
                            key: filters[1].name,
                            tag: "component",
                            attrs: {
                              "resource-name": _vm.resourceName,
                              "filter-key": filters[1].class
                            },
                            on: {
                              input: function($event) {
                                return _vm.$emit("filter-changed")
                              },
                              change: function($event) {
                                return _vm.$emit("filter-changed")
                              }
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "float-left nova-big-filter-col" },
                    [
                      filters[2]
                        ? _c(filters[2].component, {
                            key: filters[2].name,
                            tag: "component",
                            attrs: {
                              "resource-name": _vm.resourceName,
                              "filter-key": filters[2].class
                            },
                            on: {
                              input: function($event) {
                                return _vm.$emit("filter-changed")
                              },
                              change: function($event) {
                                return _vm.$emit("filter-changed")
                              }
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ])
              }),
              _vm._v(" "),
              _vm.softDeletes && _vm.showTrashedOption
                ? _c("div", [
                    _c(
                      "h3",
                      {
                        staticClass:
                          "text-sm uppercase tracking-wide text-80 bg-30 p-3",
                        attrs: { slot: "default" },
                        slot: "default"
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.__("Trashed")) +
                            "\n            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "p-2" }, [
                      _c(
                        "select",
                        {
                          staticClass:
                            "block w-full form-control-sm form-select",
                          attrs: { slot: "select", dusk: "trashed-select" },
                          domProps: { value: _vm.trashed },
                          on: { change: _vm.trashedChanged },
                          slot: "select"
                        },
                        [
                          _c("option", { attrs: { value: "", selected: "" } }, [
                            _vm._v("—")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "with" } }, [
                            _vm._v(_vm._s(_vm.__("With Trashed")))
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "only" } }, [
                            _vm._v(_vm._s(_vm.__("Only Trashed")))
                          ])
                        ]
                      )
                    ])
                  ])
                : _vm._e()
            ],
            2
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9bc2c0a", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
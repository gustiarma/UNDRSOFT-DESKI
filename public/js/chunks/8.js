(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/Pengajar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/Pengajar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      selected: [],
      pengajar: null
    };
  },
  computed: {},
  created: function created() {
    this.fetchPengajar();
  },
  methods: {
    fetchPengajar: function fetchPengajar() {
      var vm = this; // this.$http.defaults.headers.common = { 'Authorization': `Bearer g0OcD4QsTWxsn5fNPQu9rvJCGSOYkfFSCl05nIHpcriEHEs6KcmGEQPKRDpa` }

      this.$http.get('/api/master/list/siswa').then(function (response) {
        if (response.status == 200 && response.data.success == true) {
          vm.pengajar = response.data.data;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/Pengajar.vue?vue&type=template&id=6312741c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/admin/Pengajar.vue?vue&type=template&id=6312741c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      [
        _vm.pengajar != null
          ? _c(
              "vs-table",
              {
                attrs: {
                  multiple: "",
                  pagination: "",
                  "max-items": "10",
                  search: "",
                  data: _vm.pengajar
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var data = ref.data
                        return _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].email } },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(data[indextr].email) +
                                      "\n          "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].name } },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(data[indextr].name) +
                                      "\n          "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].id } },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(data[indextr].website) +
                                      "\n          "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].id } },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(data[indextr].id) +
                                      "\n          "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        })
                      }
                    }
                  ],
                  null,
                  false,
                  2069199369
                ),
                model: {
                  value: _vm.selected,
                  callback: function($$v) {
                    _vm.selected = $$v
                  },
                  expression: "selected"
                }
              },
              [
                _c("template", { slot: "header" }, [
                  _c("h3", [_vm._v("\n          Users\n        ")])
                ]),
                _vm._v(" "),
                _c(
                  "template",
                  { slot: "thead" },
                  [
                    _c("vs-th", { attrs: { "sort-key": "email" } }, [
                      _vm._v("\n          Email\n        ")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "name" } }, [
                      _vm._v("\n          Name\n        ")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "photoUrl" } }, [
                      _vm._v("\n          Website\n        ")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "id" } }, [
                      _vm._v("\n          Nro\n        ")
                    ])
                  ],
                  1
                )
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        _c("pre", [_vm._v(_vm._s(_vm.selected))])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/admin/Pengajar.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/admin/Pengajar.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pengajar_vue_vue_type_template_id_6312741c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pengajar.vue?vue&type=template&id=6312741c& */ "./resources/js/src/views/admin/Pengajar.vue?vue&type=template&id=6312741c&");
/* harmony import */ var _Pengajar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pengajar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/admin/Pengajar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pengajar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pengajar_vue_vue_type_template_id_6312741c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pengajar_vue_vue_type_template_id_6312741c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/admin/Pengajar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/admin/Pengajar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/admin/Pengajar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengajar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengajar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/Pengajar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengajar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/admin/Pengajar.vue?vue&type=template&id=6312741c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/admin/Pengajar.vue?vue&type=template&id=6312741c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengajar_vue_vue_type_template_id_6312741c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Pengajar.vue?vue&type=template&id=6312741c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/admin/Pengajar.vue?vue&type=template&id=6312741c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengajar_vue_vue_type_template_id_6312741c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pengajar_vue_vue_type_template_id_6312741c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
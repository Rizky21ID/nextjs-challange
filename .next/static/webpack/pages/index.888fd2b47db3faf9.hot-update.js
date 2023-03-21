"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/posts */ \"./pages/api/posts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { data: posts , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"posts\", _api_posts__WEBPACK_IMPORTED_MODULE_2__.getAllPosts);\n    const [showAlert, setShowAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [deletedTitle, setDeletedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this);\n    }\n    if (showAlert === true) {\n        setTimeout(()=>{\n            setShowAlert(false);\n        }, 2000);\n    }\n    const onDeleteHandler = (post)=>{\n        setDeletedTitle(post.title);\n        setShowAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        m: \"20px\",\n        children: [\n            showAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Alert, {\n                status: \"success\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertIcon, {}, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertTitle, {\n                        children: \"Your post deleted!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertDescription, {\n                        children: [\n                            \"Your Post with title \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: deletedTitle\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 48\n                            }, this),\n                            \", has been deleted.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                mb: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            mt: \"4\",\n                            colorScheme: \"white\",\n                            textColor: \"black\",\n                            children: \"All Post\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/create-post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    mt: \"4\",\n                                    colorScheme: \"blue\",\n                                    children: \"Create Post\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {\n                columns: 2,\n                spacing: 4,\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        borderWidth: \"1px\",\n                        borderRadius: \"lg\",\n                        overflow: \"hidden\",\n                        p: \"4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                size: \"md\",\n                                mb: \"2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    children: [\n                                        post.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/create-post\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                mt: \"4\",\n                                                colorScheme: \"blue\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                            mt: \"4\",\n                                            ms: \"2\",\n                                            colorScheme: \"red\",\n                                            onClick: ()=>{\n                                                onDeleteHandler(post);\n                                            },\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1py4n34ckMB+TFsQD7BZzuA+iBE=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUk7QUFDM0Y7QUFDRztBQUNiO0FBQ2U7QUFFNUIsU0FBU2UsT0FBTzs7SUFDN0IsTUFBTSxFQUFFQyxNQUFNQyxNQUFLLEVBQUVDLFVBQVMsRUFBRSxHQUFHUixxREFBUUEsQ0FBQyxTQUFTQyxtREFBV0E7SUFDaEUsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDTyxjQUFjQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUM7SUFFakQsSUFBSUksV0FBVztRQUNiLHFCQUFPLDhEQUFDSztzQkFBSTs7Ozs7O0lBQ2QsQ0FBQztJQUVELElBQUdKLGNBQWMsSUFBSSxFQUFFO1FBQ3JCSyxXQUFXLElBQU07WUFDZkosYUFBYSxLQUFLO1FBQ3BCLEdBQUc7SUFDTCxDQUFDO0lBRUQsTUFBTUssa0JBQWtCLENBQUNDLE9BQVM7UUFDaENKLGdCQUFnQkksS0FBS0MsS0FBSztRQUMxQlAsYUFBYSxJQUFJO0lBQ25CO0lBRUEscUJBQ0UsOERBQUNsQixpREFBR0E7UUFBQzBCLEdBQUU7O1lBQ0pULDJCQUFhLDhEQUFDYixtREFBS0E7Z0JBQUN1QixRQUFPOztrQ0FDMUIsOERBQUN0Qix1REFBU0E7Ozs7O2tDQUNWLDhEQUFDRSx3REFBVUE7a0NBQUM7Ozs7OztrQ0FDWiw4REFBQ0QsOERBQWdCQTs7NEJBQUM7MENBQXFCLDhEQUFDc0I7MENBQUdUOzs7Ozs7NEJBQWlCOzs7Ozs7Ozs7Ozs7OzBCQUU5RCw4REFBQ3JCLHFEQUFPQTtnQkFBQytCLElBQUc7MEJBQ1YsNEVBQUMzQixrREFBSUE7O3NDQUNELDhEQUFDRCxvREFBTUE7NEJBQUM2QixJQUFHOzRCQUFJQyxhQUFZOzRCQUFRQyxXQUFXO3NDQUFTOzs7Ozs7c0NBR3pELDhEQUFDN0Isb0RBQU1BOzs7OztzQ0FDUCw4REFBQ2tCO3NDQUNELDRFQUFDWCxrREFBSUE7Z0NBQUN1QixNQUFLOzBDQUNULDRFQUFDaEMsb0RBQU1BO29DQUFDNkIsSUFBRztvQ0FBSUMsYUFBWTs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVF4Qyw4REFBQ2hDLHdEQUFVQTtnQkFBQ21DLFNBQVM7Z0JBQUdDLFNBQVM7MEJBQzlCcEIsTUFBTXFCLEdBQUcsQ0FBQ1osQ0FBQUEscUJBQ1QsOERBQUN4QixpREFBR0E7d0JBRUZxQyxhQUFZO3dCQUNaQyxjQUFhO3dCQUNiQyxVQUFTO3dCQUNUQyxHQUFFOzswQ0FFRiw4REFBQzFDLHFEQUFPQTtnQ0FBQzJDLE1BQUs7Z0NBQUtaLElBQUc7MENBQ3RCLDRFQUFDM0Isa0RBQUlBOzt3Q0FDSnNCLEtBQUtDLEtBQUs7c0RBQ1gsOERBQUN0QixvREFBTUE7Ozs7O3NEQUNQLDhEQUFDTyxrREFBSUE7NENBQUN1QixNQUFLO3NEQUNULDRFQUFDaEMsb0RBQU1BO2dEQUFDNkIsSUFBRztnREFBSUMsYUFBWTswREFBTzs7Ozs7Ozs7Ozs7c0RBSXBDLDhEQUFDOUIsb0RBQU1BOzRDQUFDNkIsSUFBRzs0Q0FBSVksSUFBRzs0Q0FBSVgsYUFBWTs0Q0FBTVksU0FBUyxJQUFNO2dEQUFDcEIsZ0JBQWdCQzs0Q0FBSztzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBTWhGLDhEQUFDSDswQ0FBS0csS0FBS29CLElBQUk7Ozs7Ozs7dUJBckJWcEIsS0FBS3FCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQnhCLENBQUM7R0F6RXVCaEM7O1FBQ2FMLGlEQUFRQTs7O0tBRHJCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRpbmcsIFNpbXBsZUdyaWQsIEJveCwgQnV0dG9uLCBGbGV4LCBTcGFjZXIsIEFsZXJ0LCBBbGVydEljb24sIEFsZXJ0RGVzY3JpcHRpb24sIEFsZXJ0VGl0bGUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi9hcGkvcG9zdHMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgZGF0YTogcG9zdHMsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoJ3Bvc3RzJywgZ2V0QWxsUG9zdHMpXG4gIGNvbnN0IFtzaG93QWxlcnQsIHNldFNob3dBbGVydF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2RlbGV0ZWRUaXRsZSwgc2V0RGVsZXRlZFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICBpZihzaG93QWxlcnQgPT09IHRydWUpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3dBbGVydChmYWxzZSlcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIGNvbnN0IG9uRGVsZXRlSGFuZGxlciA9IChwb3N0KSA9PiB7XG4gICAgc2V0RGVsZXRlZFRpdGxlKHBvc3QudGl0bGUpXG4gICAgc2V0U2hvd0FsZXJ0KHRydWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3ggbT1cIjIwcHhcIj5cbiAgICAgIHtzaG93QWxlcnQgJiYgPEFsZXJ0IHN0YXR1cz0nc3VjY2Vzcyc+XG4gICAgICAgIDxBbGVydEljb24gLz5cbiAgICAgICAgPEFsZXJ0VGl0bGU+WW91ciBwb3N0IGRlbGV0ZWQhPC9BbGVydFRpdGxlPlxuICAgICAgICA8QWxlcnREZXNjcmlwdGlvbj5Zb3VyIFBvc3Qgd2l0aCB0aXRsZSA8Yj57ZGVsZXRlZFRpdGxlfTwvYj4sIGhhcyBiZWVuIGRlbGV0ZWQuPC9BbGVydERlc2NyaXB0aW9uPlxuICAgICAgPC9BbGVydD59XG4gICAgICA8SGVhZGluZyBtYj1cIjRcIj5cbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8QnV0dG9uIG10PVwiNFwiIGNvbG9yU2NoZW1lPVwid2hpdGVcIiB0ZXh0Q29sb3I9e1wiYmxhY2tcIn0+XG4gICAgICAgICAgICAgIEFsbCBQb3N0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZS1wb3N0XCI+XG4gICAgICAgICAgICA8QnV0dG9uIG10PVwiNFwiIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlxuICAgICAgICAgICAgICBDcmVhdGUgUG9zdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0hlYWRpbmc+XG4gICAgICBcbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezJ9IHNwYWNpbmc9ezR9PlxuICAgICAgICB7cG9zdHMubWFwKHBvc3QgPT4gKFxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGtleT17cG9zdC5pZH1cbiAgICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImxnXCJcbiAgICAgICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgICAgIHA9XCI0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIiBtYj1cIjJcIj5cbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZS1wb3N0XCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgY29sb3JTY2hlbWU9XCJibHVlXCI+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgbXM9XCIyXCIgY29sb3JTY2hlbWU9XCJyZWRcIiBvbkNsaWNrPXsoKSA9PiB7b25EZWxldGVIYW5kbGVyKHBvc3QpfX0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxkaXY+e3Bvc3QuYm9keX08L2Rpdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiU2ltcGxlR3JpZCIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJTcGFjZXIiLCJBbGVydCIsIkFsZXJ0SWNvbiIsIkFsZXJ0RGVzY3JpcHRpb24iLCJBbGVydFRpdGxlIiwidXNlUXVlcnkiLCJnZXRBbGxQb3N0cyIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwicG9zdHMiLCJpc0xvYWRpbmciLCJzaG93QWxlcnQiLCJzZXRTaG93QWxlcnQiLCJkZWxldGVkVGl0bGUiLCJzZXREZWxldGVkVGl0bGUiLCJkaXYiLCJzZXRUaW1lb3V0Iiwib25EZWxldGVIYW5kbGVyIiwicG9zdCIsInRpdGxlIiwibSIsInN0YXR1cyIsImIiLCJtYiIsIm10IiwiY29sb3JTY2hlbWUiLCJ0ZXh0Q29sb3IiLCJocmVmIiwiY29sdW1ucyIsInNwYWNpbmciLCJtYXAiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicCIsInNpemUiLCJtcyIsIm9uQ2xpY2siLCJib2R5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
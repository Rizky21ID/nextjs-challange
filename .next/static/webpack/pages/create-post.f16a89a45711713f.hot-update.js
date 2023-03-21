"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-post",{

/***/ "./pages/create-post.js":
/*!******************************!*\
  !*** ./pages/create-post.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreatePost; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/posts */ \"./pages/api/posts.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreatePost() {\n    _s();\n    const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();\n    const { mutate: createNewPost , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_api_posts__WEBPACK_IMPORTED_MODULE_2__.createPost, {\n        onSuccess: ()=>{\n            queryClient.invalidateQueries(\"posts\");\n        }\n    });\n    const onSubmit = async (data)=>{\n        data.userId = 1;\n        console.log(\"data: \", data);\n        await createNewPost(data).then((res)=>console.log(res.data));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        maxW: \"800px\",\n        mx: \"20px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                mb: \"4\",\n                children: \"Create Post\"\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit(onSubmit),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                        mb: \"4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                ...register(\"title\", {\n                                    required: true\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormControl, {\n                        mb: \"4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.FormLabel, {\n                                children: \"Body\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                ...register(\"body\", {\n                                    required: true\n                                }),\n                                mb: \"3\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                type: \"submit\",\n                                isLoading: isLoading,\n                                mr: \"4\",\n                                children: \"Create Post\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                type: \"submit\",\n                                onClick: ()=>history.back(),\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/create-post.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(CreatePost, \"cy1PRvhKbCqBqbGBAh3cKNKUCMo=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm,\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation\n    ];\n});\n_c = CreatePost;\nvar _c;\n$RefreshReg$(_c, \"CreatePost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtcG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0c7QUFDdkQ7QUFDZ0I7QUFDakI7QUFFekIsU0FBU1csYUFBYTs7SUFDbkMsTUFBTUMsY0FBY0gsMkRBQWNBO0lBQ2xDLE1BQU0sRUFBRUksU0FBUSxFQUFFQyxhQUFZLEVBQUUsR0FBR1Asd0RBQU9BO0lBQzFDLE1BQU0sRUFBRVEsUUFBUUMsY0FBYSxFQUFFQyxVQUFTLEVBQUUsR0FBR1Qsd0RBQVdBLENBQUNFLGtEQUFVQSxFQUFFO1FBQ25FUSxXQUFXLElBQU07WUFDZk4sWUFBWU8saUJBQWlCLENBQUM7UUFDaEM7SUFDRjtJQUVBLE1BQU1DLFdBQVcsT0FBTUMsT0FBUztRQUM5QkEsS0FBS0MsTUFBTSxHQUFHO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVSDtRQUN0QixNQUFNTCxjQUFjSyxNQUFNSSxJQUFJLENBQUNDLENBQUFBLE1BQU9ILFFBQVFDLEdBQUcsQ0FBQ0UsSUFBSUwsSUFBSTtJQUU1RDtJQUVBLHFCQUNFLDhEQUFDcEIsaURBQUdBO1FBQUMwQixNQUFLO1FBQVFDLElBQUc7OzBCQUNuQiw4REFBQzVCLHFEQUFPQTtnQkFBQzZCLElBQUc7MEJBQUk7Ozs7OzswQkFDaEIsOERBQUNDO2dCQUFLVixVQUFVTixhQUFhTTs7a0NBQzNCLDhEQUFDbEIseURBQVdBO3dCQUFDMkIsSUFBRzs7MENBQ2QsOERBQUMxQix1REFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0MsbURBQUtBO2dDQUFFLEdBQUdTLFNBQVMsU0FBUztvQ0FBRWtCLFVBQVUsSUFBSTtnQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7a0NBRWxELDhEQUFDN0IseURBQVdBO3dCQUFDMkIsSUFBRzs7MENBQ2QsOERBQUMxQix1REFBU0E7MENBQUM7Ozs7OzswQ0FDWCw4REFBQ0Usc0RBQVFBO2dDQUFFLEdBQUdRLFNBQVMsUUFBUTtvQ0FBRWtCLFVBQVUsSUFBSTtnQ0FBQyxFQUFFO2dDQUFFRixJQUFHOzs7Ozs7MENBQ3ZELDhEQUFDdkIsb0RBQU1BO2dDQUFDMEIsTUFBSztnQ0FBU2YsV0FBV0E7Z0NBQVdnQixJQUFHOzBDQUFJOzs7Ozs7MENBR25ELDhEQUFDM0Isb0RBQU1BO2dDQUFDMEIsTUFBSztnQ0FBU0UsU0FBUyxJQUFNQyxRQUFRQyxJQUFJOzBDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0QsQ0FBQztHQXJDdUJ6Qjs7UUFDRkYsdURBQWNBO1FBQ0NGLG9EQUFPQTtRQUNHQyxvREFBV0E7OztLQUhsQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLXBvc3QuanM/N2IyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkaW5nLCBCb3gsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0LCBUZXh0YXJlYSwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSdcbmltcG9ydCB7IGNyZWF0ZVBvc3QgfSBmcm9tICcuL2FwaS9wb3N0cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUG9zdCgpIHtcbiAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpXG4gIGNvbnN0IHsgbXV0YXRlOiBjcmVhdGVOZXdQb3N0LCBpc0xvYWRpbmcgfSA9IHVzZU11dGF0aW9uKGNyZWF0ZVBvc3QsIHtcbiAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKCdwb3N0cycpXG4gICAgfSxcbiAgfSlcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jKGRhdGEpID0+IHtcbiAgICBkYXRhLnVzZXJJZCA9IDE7XG4gICAgY29uc29sZS5sb2coXCJkYXRhOiBcIiwgZGF0YSlcbiAgICBhd2FpdCBjcmVhdGVOZXdQb3N0KGRhdGEpLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcy5kYXRhKSlcbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBtYXhXPVwiODAwcHhcIiBteD1cIjIwcHhcIj5cbiAgICAgIDxIZWFkaW5nIG1iPVwiNFwiPkNyZWF0ZSBQb3N0PC9IZWFkaW5nPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICA8Rm9ybUNvbnRyb2wgbWI9XCI0XCI+XG4gICAgICAgICAgPEZvcm1MYWJlbD5UaXRsZTwvRm9ybUxhYmVsPlxuICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ3RpdGxlJywgeyByZXF1aXJlZDogdHJ1ZSB9KX0gLz5cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgPEZvcm1Db250cm9sIG1iPVwiNFwiPlxuICAgICAgICAgIDxGb3JtTGFiZWw+Qm9keTwvRm9ybUxhYmVsPlxuICAgICAgICAgIDxUZXh0YXJlYSB7Li4ucmVnaXN0ZXIoJ2JvZHknLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBtYj1cIjNcIi8+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IG1yPVwiNFwiPlxuICAgICAgICAgIENyZWF0ZSBQb3N0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gaGlzdG9yeS5iYWNrKCl9PlxuICAgICAgICAgIEJhY2tcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0JveD5cbiAgKVxufSJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiQm94IiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIlRleHRhcmVhIiwiQnV0dG9uIiwidXNlRm9ybSIsInVzZU11dGF0aW9uIiwidXNlUXVlcnlDbGllbnQiLCJjcmVhdGVQb3N0IiwiQ3JlYXRlUG9zdCIsInF1ZXJ5Q2xpZW50IiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJtdXRhdGUiLCJjcmVhdGVOZXdQb3N0IiwiaXNMb2FkaW5nIiwib25TdWNjZXNzIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJ1c2VySWQiLCJjb25zb2xlIiwibG9nIiwidGhlbiIsInJlcyIsIm1heFciLCJteCIsIm1iIiwiZm9ybSIsInJlcXVpcmVkIiwidHlwZSIsIm1yIiwib25DbGljayIsImhpc3RvcnkiLCJiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/create-post.js\n"));

/***/ })

});
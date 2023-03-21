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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/posts */ \"./pages/api/posts.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { data: posts  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"posts\", _api_posts__WEBPACK_IMPORTED_MODULE_2__.getAllPosts);\n    const [showAlert, setShowAlert] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const [deletedTitle, setDeletedTitle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [postsData, setPostData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(JSON.stringify(posts));\n    if (showAlert === true) {\n        setTimeout(()=>{\n            setShowAlert(false);\n        }, 3000);\n    }\n    const onDeleteHandler = (post)=>{\n        const index = posts.findIndex((obj)=>obj.id === post.id); // find the index of the object with id value of 5\n        if (index !== -1) {\n            posts.splice(index, 1); // remove the object at that index from the array\n        }\n        console.log(posts);\n        (0,_api_posts__WEBPACK_IMPORTED_MODULE_2__.deletePost)(post.id);\n        setDeletedTitle(post.title);\n        setShowAlert(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        m: \"20px\",\n        children: [\n            showAlert && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Alert, {\n                status: \"success\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertIcon, {}, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertTitle, {\n                        children: \"Deleted!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.AlertDescription, {\n                        children: [\n                            \"Your Post with title \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: deletedTitle\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 42,\n                                columnNumber: 48\n                            }, this),\n                            \", has been deleted.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                mb: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            mt: \"4\",\n                            colorScheme: \"white\",\n                            textColor: \"black\",\n                            children: \"NextJS Challange\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/create-post\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    mt: \"4\",\n                                    colorScheme: \"blue\",\n                                    children: \"Create Post\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.SimpleGrid, {\n                columns: 2,\n                spacing: 4,\n                children: posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        borderWidth: \"1px\",\n                        borderRadius: \"lg\",\n                        overflow: \"hidden\",\n                        p: \"4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                size: \"md\",\n                                mb: \"2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                                    children: [\n                                        post.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spacer, {}, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/edit-post?id=\".concat(post.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                mt: \"4\",\n                                                ms: \"2\",\n                                                colorScheme: \"blue\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 14\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                            mt: \"4\",\n                                            ms: \"2\",\n                                            colorScheme: \"red\",\n                                            onClick: ()=>{\n                                                onDeleteHandler(post);\n                                            },\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ilhamakbarahmadi/Documents/Training/nextjs-challange/pages/index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"XJCTXLjWmNFGjoDao5Qii2Zbozo=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7MENBTWhGLDhEQUFDUDswQ0FBS08sS0FBS3lCLElBQUk7Ozs7Ozs7dUJBckJWekIsS0FBS0ksRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQTJCeEIsQ0FBQztHQW5GdUJyQjs7UUFDRU4saURBQVFBOzs7S0FEVk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkaW5nLCBTaW1wbGVHcmlkLCBCb3gsIEJ1dHRvbiwgRmxleCwgU3BhY2VyLCBBbGVydCwgQWxlcnRJY29uLCBBbGVydERlc2NyaXB0aW9uLCBBbGVydFRpdGxlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgZGVsZXRlUG9zdCB9IGZyb20gJy4vYXBpL3Bvc3RzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGE6IHBvc3RzIH0gPSB1c2VRdWVyeSgncG9zdHMnLCBnZXRBbGxQb3N0cylcbiAgY29uc3QgW3Nob3dBbGVydCwgc2V0U2hvd0FsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZGVsZXRlZFRpdGxlLCBzZXREZWxldGVkVGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwb3N0c0RhdGEsIHNldFBvc3REYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cbiAgXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBvc3RzKSk7XG5cbiAgaWYoc2hvd0FsZXJ0ID09PSB0cnVlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93QWxlcnQoZmFsc2UpXG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBjb25zdCBvbkRlbGV0ZUhhbmRsZXIgPSAocG9zdCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcG9zdHMuZmluZEluZGV4KG9iaiA9PiBvYmouaWQgPT09IHBvc3QuaWQpOyAvLyBmaW5kIHRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IHdpdGggaWQgdmFsdWUgb2YgNVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHBvc3RzLnNwbGljZShpbmRleCwgMSk7IC8vIHJlbW92ZSB0aGUgb2JqZWN0IGF0IHRoYXQgaW5kZXggZnJvbSB0aGUgYXJyYXlcbiAgICB9XG4gICAgY29uc29sZS5sb2cocG9zdHMpO1xuXG4gICAgZGVsZXRlUG9zdChwb3N0LmlkKVxuICAgIHNldERlbGV0ZWRUaXRsZShwb3N0LnRpdGxlKVxuICAgIHNldFNob3dBbGVydCh0cnVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IG09XCIyMHB4XCI+XG4gICAgICB7c2hvd0FsZXJ0ICYmIDxBbGVydCBzdGF0dXM9J3N1Y2Nlc3MnPlxuICAgICAgICA8QWxlcnRJY29uIC8+XG4gICAgICAgIDxBbGVydFRpdGxlPkRlbGV0ZWQhPC9BbGVydFRpdGxlPlxuICAgICAgICA8QWxlcnREZXNjcmlwdGlvbj5Zb3VyIFBvc3Qgd2l0aCB0aXRsZSA8Yj57ZGVsZXRlZFRpdGxlfTwvYj4sIGhhcyBiZWVuIGRlbGV0ZWQuPC9BbGVydERlc2NyaXB0aW9uPlxuICAgICAgPC9BbGVydD59XG4gICAgICA8SGVhZGluZyBtYj1cIjRcIj5cbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICA8QnV0dG9uIG10PVwiNFwiIGNvbG9yU2NoZW1lPVwid2hpdGVcIiB0ZXh0Q29sb3I9e1wiYmxhY2tcIn0+XG4gICAgICAgICAgICAgIE5leHRKUyBDaGFsbGFuZ2VcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3JlYXRlLXBvc3RcIj5cbiAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgY29sb3JTY2hlbWU9XCJibHVlXCI+XG4gICAgICAgICAgICAgIENyZWF0ZSBQb3N0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIFxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gc3BhY2luZz17NH0+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxuICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwibGdcIlxuICAgICAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICAgICAgcD1cIjRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiIG1iPVwiMlwiPlxuICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgIDxTcGFjZXIgLz5cbiAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VkaXQtcG9zdD9pZD0ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgbXM9XCIyXCIgY29sb3JTY2hlbWU9XCJibHVlXCI+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxCdXR0b24gbXQ9XCI0XCIgbXM9XCIyXCIgY29sb3JTY2hlbWU9XCJyZWRcIiBvbkNsaWNrPXsoKSA9PiB7b25EZWxldGVIYW5kbGVyKHBvc3QpfX0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxkaXY+e3Bvc3QuYm9keX08L2Rpdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L1NpbXBsZUdyaWQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiU2ltcGxlR3JpZCIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJTcGFjZXIiLCJBbGVydCIsIkFsZXJ0SWNvbiIsIkFsZXJ0RGVzY3JpcHRpb24iLCJBbGVydFRpdGxlIiwidXNlUXVlcnkiLCJnZXRBbGxQb3N0cyIsImRlbGV0ZVBvc3QiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsInBvc3RzIiwic2hvd0FsZXJ0Iiwic2V0U2hvd0FsZXJ0IiwiZGVsZXRlZFRpdGxlIiwic2V0RGVsZXRlZFRpdGxlIiwicG9zdHNEYXRhIiwic2V0UG9zdERhdGEiLCJpc0xvYWRpbmciLCJkaXYiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFRpbWVvdXQiLCJvbkRlbGV0ZUhhbmRsZXIiLCJwb3N0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJvYmoiLCJpZCIsInNwbGljZSIsInRpdGxlIiwibSIsInN0YXR1cyIsImIiLCJtYiIsIm10IiwiY29sb3JTY2hlbWUiLCJ0ZXh0Q29sb3IiLCJocmVmIiwiY29sdW1ucyIsInNwYWNpbmciLCJtYXAiLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicCIsInNpemUiLCJtcyIsIm9uQ2xpY2siLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
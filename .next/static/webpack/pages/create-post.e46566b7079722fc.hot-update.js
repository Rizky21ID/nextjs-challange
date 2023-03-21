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

/***/ "./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPost\": function() { return /* binding */ createPost; },\n/* harmony export */   \"getAllPosts\": function() { return /* binding */ getAllPosts; },\n/* harmony export */   \"getPost\": function() { return /* binding */ getPost; },\n/* harmony export */   \"updatePost\": function() { return /* binding */ updatePost; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nfunction getAllPosts() {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://jsonplaceholder.typicode.com/posts\").then((res)=>{\n        return res.data;\n    });\n}\nfunction getPost(_, postId) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://jsonplaceholder.typicode.com/posts/\".concat(postId)).then((res)=>res.data);\n}\nfunction createPost(postData) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://jsonplaceholder.typicode.com/posts\", postData).then((res)=>console.log(res.data));\n}\nfunction updatePost(param) {\n    let { id , ...postData } = param;\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"https://jsonplaceholder.typicode.com/posts/\".concat(id), postData).then((res)=>console.log(res.data));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUI7QUFFbEIsU0FBU0MsY0FBYztJQUM1QixPQUFPRCxpREFBUyxDQUFDLDhDQUE4Q0csSUFBSSxDQUFDQyxDQUFBQSxNQUFPO1FBQUMsT0FBT0EsSUFBSUMsSUFBSTtJQUFBO0FBQzdGLENBQUM7QUFFTSxTQUFTQyxRQUFRQyxDQUFDLEVBQUVDLE1BQU0sRUFBRTtJQUNqQyxPQUFPUixpREFDRCxDQUFDLDhDQUFxRCxPQUFQUSxTQUNsREwsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO0FBQ3pCLENBQUM7QUFFTSxTQUFTSSxXQUFXQyxRQUFRLEVBQUU7SUFDbkMsT0FBT1Ysa0RBQVUsQ0FBQyw4Q0FBOENVLFVBQVVQLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT1EsUUFBUUMsR0FBRyxDQUFDVCxJQUFJQyxJQUFJO0FBQzVHLENBQUM7QUFFTSxTQUFTUyxXQUFXLEtBQW1CLEVBQUU7UUFBckIsRUFBRUMsR0FBRSxFQUFFLEdBQUdMLFVBQVUsR0FBbkI7SUFDekIsT0FBT1YsbURBQVcsQ0FBQyw4Q0FBaUQsT0FBSGUsS0FBTUwsVUFBVVAsSUFBSSxDQUFDQyxDQUFBQSxNQUFPUSxRQUFRQyxHQUFHLENBQUNULElBQUlDLElBQUk7QUFDbkgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGkvcG9zdHMuanM/NjlmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJykudGhlbihyZXMgPT4ge3JldHVybiByZXMuZGF0YX0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0KF8sIHBvc3RJZCkge1xuICByZXR1cm4gYXhpb3NcbiAgICAuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtwb3N0SWR9YClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3N0KHBvc3REYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLCBwb3N0RGF0YSkudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzLmRhdGEpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUG9zdCh7IGlkLCAuLi5wb3N0RGF0YSB9KSB7XG4gIHJldHVybiBheGlvcy5wYXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YCwgcG9zdERhdGEpLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcy5kYXRhKSlcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldEFsbFBvc3RzIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJnZXRQb3N0IiwiXyIsInBvc3RJZCIsImNyZWF0ZVBvc3QiLCJwb3N0RGF0YSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlUG9zdCIsImlkIiwicGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/posts.js\n"));

/***/ })

});
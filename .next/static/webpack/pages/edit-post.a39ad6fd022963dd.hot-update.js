"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/edit-post",{

/***/ "./pages/api/posts.js":
/*!****************************!*\
  !*** ./pages/api/posts.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPost\": function() { return /* binding */ createPost; },\n/* harmony export */   \"deletePost\": function() { return /* binding */ deletePost; },\n/* harmony export */   \"getAllPosts\": function() { return /* binding */ getAllPosts; },\n/* harmony export */   \"getPost\": function() { return /* binding */ getPost; },\n/* harmony export */   \"updatePost\": function() { return /* binding */ updatePost; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nfunction getAllPosts() {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://jsonplaceholder.typicode.com/posts\").then((res)=>res.data);\n}\nfunction getPost(postId) {\n    console.log(\"postId: \", postId.queryKey[0]);\n    const id = postId.queryKey[0];\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://jsonplaceholder.typicode.com/posts/\".concat(id)).then((res)=>res.data);\n}\nfunction createPost(postData) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"https://jsonplaceholder.typicode.com/posts\", postData).then((res)=>{\n        console.log(res.data);\n        history.back();\n    });\n}\nfunction updatePost(param) {\n    let { id , ...postData } = param;\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"https://jsonplaceholder.typicode.com/posts/\".concat(id), postData).then((res)=>console.log(res.data));\n}\nfunction deletePost(postId) {\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"https://jsonplaceholder.typicode.com/posts/\".concat(postId)).then((res)=>console.log(res.data));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcG9zdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBRWxCLFNBQVNDLGNBQWM7SUFDNUIsT0FBT0QsaURBQVMsQ0FBQyw4Q0FBOENHLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtBQUNyRixDQUFDO0FBRU0sU0FBU0MsUUFBUUMsTUFBTSxFQUFFO0lBQzlCQyxRQUFRQyxHQUFHLENBQUMsWUFBWUYsT0FBT0csUUFBUSxDQUFDLEVBQUU7SUFDMUMsTUFBTUMsS0FBS0osT0FBT0csUUFBUSxDQUFDLEVBQUU7SUFDN0IsT0FBT1YsaURBQ0QsQ0FBQyw4Q0FBaUQsT0FBSFcsS0FDbERSLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtBQUN6QixDQUFDO0FBRU0sU0FBU08sV0FBV0MsUUFBUSxFQUFFO0lBQ25DLE9BQU9iLGtEQUFVLENBQUMsOENBQThDYSxVQUFVVixJQUFJLENBQUNDLENBQUFBLE1BQU87UUFDcEZJLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSUMsSUFBSTtRQUNwQlUsUUFBUUMsSUFBSTtJQUNkO0FBQ0YsQ0FBQztBQUVNLFNBQVNDLFdBQVcsS0FBbUIsRUFBRTtRQUFyQixFQUFFTixHQUFFLEVBQUUsR0FBR0UsVUFBVSxHQUFuQjtJQUN6QixPQUFPYixtREFBVyxDQUFDLDhDQUFpRCxPQUFIVyxLQUFNRSxVQUFVVixJQUFJLENBQUNDLENBQUFBLE1BQU9JLFFBQVFDLEdBQUcsQ0FBQ0wsSUFBSUMsSUFBSTtBQUNuSCxDQUFDO0FBRU0sU0FBU2MsV0FBV1osTUFBTSxFQUFFO0lBQ2pDLE9BQU9QLHVEQUFZLENBQUMsOENBQXFELE9BQVBPLFNBQVVKLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0ksUUFBUUMsR0FBRyxDQUFDTCxJQUFJQyxJQUFJO0FBQzlHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3Bvc3RzLmpzPzY5ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdChwb3N0SWQpIHtcbiAgY29uc29sZS5sb2coXCJwb3N0SWQ6IFwiLCBwb3N0SWQucXVlcnlLZXlbMF0pO1xuICBjb25zdCBpZCA9IHBvc3RJZC5xdWVyeUtleVswXTtcbiAgcmV0dXJuIGF4aW9zXG4gICAgLmdldChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7aWR9YClcbiAgICAudGhlbihyZXMgPT4gcmVzLmRhdGEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3N0KHBvc3REYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLCBwb3N0RGF0YSkudGhlbihyZXMgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgIGhpc3RvcnkuYmFjaygpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQb3N0KHsgaWQsIC4uLnBvc3REYXRhIH0pIHtcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJHtpZH1gLCBwb3N0RGF0YSkudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzLmRhdGEpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUG9zdChwb3N0SWQpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyR7cG9zdElkfWApLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcy5kYXRhKSlcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRBbGxQb3N0cyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZ2V0UG9zdCIsInBvc3RJZCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeUtleSIsImlkIiwiY3JlYXRlUG9zdCIsInBvc3REYXRhIiwicG9zdCIsImhpc3RvcnkiLCJiYWNrIiwidXBkYXRlUG9zdCIsInBhdGNoIiwiZGVsZXRlUG9zdCIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/posts.js\n"));

/***/ })

});
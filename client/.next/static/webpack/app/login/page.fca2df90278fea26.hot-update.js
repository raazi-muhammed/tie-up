"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/lib/API.ts":
/*!************************!*\
  !*** ./src/lib/API.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAPI: function() { return /* binding */ getAPI; },\n/* harmony export */   postAPI: function() { return /* binding */ postAPI; }\n/* harmony export */ });\n/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/server */ \"(app-pages-browser)/./src/config/server.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = _config_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nasync function getAPI(url) {\n    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    return (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        url,\n        method: \"GET\",\n        params\n    }).then((res)=>res.data).catch((err)=>{\n        var _err_response_data, _err_response;\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || \"Invalid Details\");\n    });\n}\nasync function postAPI(url) {\n    let data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        url,\n        method: \"POST\",\n        data\n    }).then((res)=>{\n        return res;\n    }).catch((err)=>{\n        var _err_response_data, _err_response;\n        console.log(err);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || \"An Error occurred\");\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvQVBJLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ1g7QUFDVTtBQUVwQ0MsNkNBQUtBLENBQUNFLFFBQVEsQ0FBQ0MsT0FBTyxHQUFHSixzREFBTUE7QUFFeEIsZUFBZUssT0FBT0MsR0FBVztRQUFFQyxTQUFBQSxpRUFBUyxDQUFDO0lBQ2hELE9BQU9OLGlEQUFLQSxDQUFDO1FBQ1RLO1FBQ0FFLFFBQVE7UUFDUkQ7SUFDSixHQUNLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxFQUN0QkMsS0FBSyxDQUFDLENBQUNDO1lBQ1FBLG9CQUFBQTtlQUFaWCx1REFBS0EsQ0FBQ1ksS0FBSyxDQUFDRCxFQUFBQSxnQkFBQUEsSUFBSUUsUUFBUSxjQUFaRixxQ0FBQUEscUJBQUFBLGNBQWNGLElBQUksY0FBbEJFLHlDQUFBQSxtQkFBb0JHLE9BQU8sS0FBSTs7QUFFdkQ7QUFFTyxlQUFlQyxRQUFRWCxHQUFXO1FBQUVLLE9BQUFBLGlFQUFPLENBQUM7SUFDL0NWLGlEQUFLQSxDQUFDO1FBQ0ZLO1FBQ0FFLFFBQVE7UUFDUkc7SUFDSixHQUNLRixJQUFJLENBQUMsQ0FBQ0M7UUFDSCxPQUFPQTtJQUNYLEdBQ0NFLEtBQUssQ0FBQyxDQUFDQztZQUVRQSxvQkFBQUE7UUFEWkssUUFBUUMsR0FBRyxDQUFDTjtRQUNaWCx1REFBS0EsQ0FBQ1ksS0FBSyxDQUFDRCxFQUFBQSxnQkFBQUEsSUFBSUUsUUFBUSxjQUFaRixxQ0FBQUEscUJBQUFBLGNBQWNGLElBQUksY0FBbEJFLHlDQUFBQSxtQkFBb0JHLE9BQU8sS0FBSTtJQUMvQztBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvQVBJLnRzPzFkNGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlcnZlciBmcm9tIFwiQC9jb25maWcvc2VydmVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gc2VydmVyO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QVBJKHVybDogc3RyaW5nLCBwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiBheGlvcyh7XG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBwYXJhbXMsXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PlxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IFwiSW52YWxpZCBEZXRhaWxzXCIpXG4gICAgICAgICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0QVBJKHVybDogc3RyaW5nLCBkYXRhID0ge30pIHtcbiAgICBheGlvcyh7XG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgZGF0YSxcbiAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBcIkFuIEVycm9yIG9jY3VycmVkXCIpO1xuICAgICAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJheGlvcyIsInRvYXN0IiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiZ2V0QVBJIiwidXJsIiwicGFyYW1zIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsImVycm9yIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwicG9zdEFQSSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/API.ts\n"));

/***/ })

});
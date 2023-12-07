"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./src/lib/API.ts":
/*!************************!*\
  !*** ./src/lib/API.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAPI: function() { return /* binding */ getAPI; },\n/* harmony export */   postAPI: function() { return /* binding */ postAPI; }\n/* harmony export */ });\n/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/server */ \"(app-pages-browser)/./src/config/server.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = _config_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nasync function getAPI(url) {\n    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    return (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        url,\n        method: \"GET\",\n        params\n    }).then((res)=>res.data).catch((err)=>{\n        var _err_response_data, _err_response;\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || \"Invalid Details\");\n    });\n}\nasync function postAPI(url) {\n    let data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};\n    return (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        url,\n        method: \"POST\",\n        data\n    }).then((res)=>res.data).catch((err)=>{\n        var _err_response_data, _err_response;\n        console.log(err);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || \"An Error occurred\");\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvQVBJLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXFDO0FBQ1g7QUFDVTtBQUVwQ0MsNkNBQUtBLENBQUNFLFFBQVEsQ0FBQ0MsT0FBTyxHQUFHSixzREFBTUE7QUFFeEIsZUFBZUssT0FBT0MsR0FBVztRQUFFQyxTQUFBQSxpRUFBUyxDQUFDO0lBQ2hELE9BQU9OLGlEQUFLQSxDQUFDO1FBQ1RLO1FBQ0FFLFFBQVE7UUFDUkQ7SUFDSixHQUNLRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxFQUN0QkMsS0FBSyxDQUFDLENBQUNDO1lBQ1FBLG9CQUFBQTtlQUFaWCx1REFBS0EsQ0FBQ1ksS0FBSyxDQUFDRCxFQUFBQSxnQkFBQUEsSUFBSUUsUUFBUSxjQUFaRixxQ0FBQUEscUJBQUFBLGNBQWNGLElBQUksY0FBbEJFLHlDQUFBQSxtQkFBb0JHLE9BQU8sS0FBSTs7QUFFdkQ7QUFFTyxlQUFlQyxRQUFRWCxHQUFXO1FBQUVLLE9BQUFBLGlFQUFPLENBQUM7SUFDL0MsT0FBT1YsaURBQUtBLENBQUM7UUFDVEs7UUFDQUUsUUFBUTtRQUNSRztJQUNKLEdBQ0tGLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLEVBQ3RCQyxLQUFLLENBQUMsQ0FBQ0M7WUFHUUEsb0JBQUFBO1FBRlpLLFFBQVFDLEdBQUcsQ0FBQ047UUFFWlgsdURBQUtBLENBQUNZLEtBQUssQ0FBQ0QsRUFBQUEsZ0JBQUFBLElBQUlFLFFBQVEsY0FBWkYscUNBQUFBLHFCQUFBQSxjQUFjRixJQUFJLGNBQWxCRSx5Q0FBQUEsbUJBQW9CRyxPQUFPLEtBQUk7SUFDL0M7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL0FQSS50cz8xZDRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZXJ2ZXIgZnJvbSBcIkAvY29uZmlnL3NlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHNlcnZlcjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFQSSh1cmw6IHN0cmluZywgcGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gYXhpb3Moe1xuICAgICAgICB1cmwsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgcGFyYW1zLFxuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuICAgICAgICAuY2F0Y2goKGVycikgPT5cbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGVyci5yZXNwb25zZT8uZGF0YT8ubWVzc2FnZSB8fCBcIkludmFsaWQgRGV0YWlsc1wiKVxuICAgICAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdEFQSSh1cmw6IHN0cmluZywgZGF0YSA9IHt9KSB7XG4gICAgcmV0dXJuIGF4aW9zKHtcbiAgICAgICAgdXJsLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBkYXRhLFxuICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5kYXRhKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoZXJyLnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8IFwiQW4gRXJyb3Igb2NjdXJyZWRcIik7XG4gICAgICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbInNlcnZlciIsImF4aW9zIiwidG9hc3QiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJnZXRBUEkiLCJ1cmwiLCJwYXJhbXMiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJwb3N0QVBJIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/API.ts\n"));

/***/ })

});
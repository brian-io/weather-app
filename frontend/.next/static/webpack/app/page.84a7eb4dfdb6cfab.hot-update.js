"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Loading.tsx":
/*!************************************!*\
  !*** ./src/components/Loading.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Loading)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Sun!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/sun.js\");\n\n\n\n// Assuming loading is a prop or state in your component\nfunction Loading(param) {\n    let { loading } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50\",\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            exit: {\n                opacity: 0\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"flex flex-col items-center\",\n                initial: {\n                    scale: 0.8,\n                    opacity: 0\n                },\n                animate: {\n                    scale: 1,\n                    opacity: 1\n                },\n                exit: {\n                    scale: 0.8,\n                    opacity: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative w-32 h-32 mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute inset-0 bg-blue-500/20 rounded-full blur-xl\"\n                        }, void 0, false, {\n                            fileName: \"/home/brian/Projects/weather-app/frontend/src/components/Loading.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                            className: \"absolute inset-0 text-yellow-400 flex items-center justify-center\",\n                            animate: {\n                                rotate: 360,\n                                scale: [\n                                    1,\n                                    1.1,\n                                    1\n                                ]\n                            },\n                            transition: {\n                                rotate: {\n                                    duration: 10,\n                                    repeat: Infinity,\n                                    ease: \"linear\"\n                                },\n                                scale: {\n                                    duration: 2,\n                                    repeat: Infinity,\n                                    ease: \"easeInOut\"\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Sun_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                size: 56\n                            }, void 0, false, {\n                                fileName: \"/home/brian/Projects/weather-app/frontend/src/components/Loading.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/brian/Projects/weather-app/frontend/src/components/Loading.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/brian/Projects/weather-app/frontend/src/components/Loading.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/brian/Projects/weather-app/frontend/src/components/Loading.tsx\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/brian/Projects/weather-app/frontend/src/components/Loading.tsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/brian/Projects/weather-app/frontend/src/components/Loading.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Loading;\nvar _c;\n$RefreshReg$(_c, \"Loading\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUNIO0FBRXJELHdEQUF3RDtBQUN6QyxTQUFTRyxRQUFTLEtBQWlDO1FBQWpDLEVBQUVDLE9BQU8sRUFBd0IsR0FBakM7SUFDL0IscUJBQ0UsOERBQUNILDBEQUFlQTtrQkFDYkcseUJBQ0MsOERBQUNKLGlEQUFNQSxDQUFDSyxHQUFHO1lBQ1RDLFdBQVU7WUFDVkMsU0FBUztnQkFBRUMsU0FBUztZQUFFO1lBQ3RCQyxTQUFTO2dCQUFFRCxTQUFTO1lBQUU7WUFDdEJFLE1BQU07Z0JBQUVGLFNBQVM7WUFBRTtzQkFFbkIsNEVBQUNSLGlEQUFNQSxDQUFDSyxHQUFHO2dCQUNUQyxXQUFVO2dCQUNWQyxTQUFTO29CQUFFSSxPQUFPO29CQUFLSCxTQUFTO2dCQUFFO2dCQUNsQ0MsU0FBUztvQkFBRUUsT0FBTztvQkFBR0gsU0FBUztnQkFBRTtnQkFDaENFLE1BQU07b0JBQUVDLE9BQU87b0JBQUtILFNBQVM7Z0JBQUU7MEJBRS9CLDRFQUFDSDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7c0NBQ0QsOERBQUNOLGlEQUFNQSxDQUFDSyxHQUFHOzRCQUN2QkMsV0FBVTs0QkFDVkcsU0FBUztnQ0FDUEcsUUFBUTtnQ0FDUkQsT0FBTztvQ0FBQztvQ0FBRztvQ0FBSztpQ0FBRTs0QkFDcEI7NEJBQ0FFLFlBQVk7Z0NBQ1ZELFFBQVE7b0NBQUVFLFVBQVU7b0NBQUlDLFFBQVFDO29DQUFVQyxNQUFNO2dDQUFTO2dDQUN6RE4sT0FBTztvQ0FBRUcsVUFBVTtvQ0FBR0MsUUFBUUM7b0NBQVVDLE1BQU07Z0NBQVk7NEJBQzVEO3NDQUVBLDRFQUFDZiwrRUFBR0E7Z0NBQUNnQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMzQjtLQXRDd0JmIiwic291cmNlcyI6WyIvaG9tZS9icmlhbi9Qcm9qZWN0cy93ZWF0aGVyLWFwcC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQ2xvdWQsIFN1biwgQ2xvdWRSYWluIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuLy8gQXNzdW1pbmcgbG9hZGluZyBpcyBhIHByb3Agb3Igc3RhdGUgaW4geW91ciBjb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmcgKHsgbG9hZGluZyB9IDogeyBsb2FkaW5nOiBib29sZWFufSl7XG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjay81MCBiYWNrZHJvcC1ibHVyLXNtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHotNTBcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICBpbml0aWFsPXt7IHNjYWxlOiAwLjgsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIGV4aXQ9e3sgc2NhbGU6IDAuOCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0zMiBoLTMyIG1iLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsdWUtNTAwLzIwIHJvdW5kZWQtZnVsbCBibHVyLXhsXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB0ZXh0LXllbGxvdy00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgXG4gICAgICAgICAgICAgICAgICByb3RhdGU6IDM2MCxcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiBbMSwgMS4xLCAxXVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZTogeyBkdXJhdGlvbjogMTAsIHJlcGVhdDogSW5maW5pdHksIGVhc2U6IFwibGluZWFyXCIgfSxcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiB7IGR1cmF0aW9uOiAyLCByZXBlYXQ6IEluZmluaXR5LCBlYXNlOiBcImVhc2VJbk91dFwiIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFN1biBzaXplPXs1Nn0gLz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKX1cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJTdW4iLCJMb2FkaW5nIiwibG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJzY2FsZSIsInJvdGF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwiZWFzZSIsInNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Loading.tsx\n"));

/***/ })

});
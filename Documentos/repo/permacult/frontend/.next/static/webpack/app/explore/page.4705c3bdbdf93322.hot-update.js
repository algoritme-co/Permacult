"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/explore/page",{

/***/ "(app-pages-browser)/./app/explore/page.js":
/*!*****************************!*\
  !*** ./app/explore/page.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Explore_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Explore.module.css */ \"(app-pages-browser)/./app/explore/Explore.module.css\");\n/* harmony import */ var _Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Explore_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FAB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FAB */ \"(app-pages-browser)/./app/components/FAB.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ExplorePage = ()=>{\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [filteredCategories, setFilteredCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSearchActive, setIsSearchActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Controla a visibilidade do campo de busca\n    const tagColors = [\n        \"#f75b3c\",\n        \"#008575\",\n        \"#f7afad\",\n        \"#c5dfe1\",\n        \"#f4b50b\",\n        \"#02b7d3\",\n        \"#c0e189\",\n        \"#efdbdd\",\n        \"#c5dfe1\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ExplorePage.useEffect\": ()=>{\n            const fetchCategories = {\n                \"ExplorePage.useEffect.fetchCategories\": async ()=>{\n                    try {\n                        const response = await fetch(\"http://localhost:9000/categories/\");\n                        const data = await response.json();\n                        setCategories(data.categories || []);\n                        setFilteredCategories(data.categories || []);\n                    } catch (error) {\n                        console.error(\"Erro ao buscar categorias:\", error);\n                    }\n                }\n            }[\"ExplorePage.useEffect.fetchCategories\"];\n            fetchCategories();\n        }\n    }[\"ExplorePage.useEffect\"], []);\n    const handleSearch = ()=>{\n        setIsSearchActive(true); // Ativa o campo de busca\n        setSearchTerm(\"\"); // Limpa o termo de busca\n        setFilteredCategories(categories); // Reseta a lista filtrada\n    };\n    const handleInputChange = (e)=>{\n        const value = e.target.value.toLowerCase();\n        setSearchTerm(value);\n        const filtered = categories.filter((category)=>category._id.toLowerCase().includes(value));\n        setFilteredCategories(filtered);\n    };\n    const handleKeyPress = (e)=>{\n        if (e.key === \"Enter\") {\n            setIsSearchActive(false); // Fecha o campo de busca ao pressionar \"Enter\"\n        }\n    };\n    const closeSearch = ()=>{\n        setIsSearchActive(false);\n        setSearchTerm(\"\");\n        setFilteredCategories(categories); // Reseta as categorias\n    };\n    // Fechar ao clicar fora\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ExplorePage.useEffect\": ()=>{\n            const handleClickOutside = {\n                \"ExplorePage.useEffect.handleClickOutside\": (event)=>{\n                    if (!event.target.closest(\".\".concat((_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchContainer)))) {\n                        closeSearch();\n                    }\n                }\n            }[\"ExplorePage.useEffect.handleClickOutside\"];\n            if (isSearchActive) {\n                document.addEventListener(\"click\", handleClickOutside);\n            } else {\n                document.removeEventListener(\"click\", handleClickOutside);\n            }\n            return ({\n                \"ExplorePage.useEffect\": ()=>document.removeEventListener(\"click\", handleClickOutside)\n            })[\"ExplorePage.useEffect\"];\n        }\n    }[\"ExplorePage.useEffect\"], [\n        isSearchActive\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().explorePage),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/border-l.svg\",\n                alt: \"Moldura Lateral Esquerda\",\n                className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().borderLeft)\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/border-r.svg\",\n                alt: \"Moldura Lateral Direita\",\n                className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().borderRight)\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().logoContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/permacult_logo-name.svg\",\n                    alt: \"Permacult Logo\"\n                }, void 0, false, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().sectionHeading),\n                    children: \"Browse the categories and discover incredible stories.\"\n                }, void 0, false, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().tagCloud),\n                children: filteredCategories.map((category, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().tag),\n                        style: {\n                            backgroundColor: tagColors[index % tagColors.length]\n                        },\n                        onClick: ()=>console.log(\"Categoria: \".concat(category._id)),\n                        children: category._id\n                    }, category._id, false, {\n                        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            isSearchActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    value: searchTerm,\n                    onChange: handleInputChange,\n                    onKeyDown: handleKeyPress,\n                    placeholder: \"Search categories...\",\n                    className: (_Explore_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchInput)\n                }, void 0, false, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                    lineNumber: 119,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FAB__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onSearch: handleSearch\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/explore/page.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExplorePage, \"mu9dMFhYNmn6ZW0bGgKZS9pX/Rc=\");\n_c = ExplorePage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExplorePage);\nvar _c;\n$RefreshReg$(_c, \"ExplorePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9leHBsb3JlL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1Q7QUFDTjtBQUVwQyxNQUFNSyxjQUFjOztJQUNsQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNNLG9CQUFvQkMsc0JBQXNCLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0QsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsZ0JBQWdCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLENBQUMsUUFBUSw0Q0FBNEM7SUFFekcsTUFBTVksWUFBWTtRQUFDO1FBQVc7UUFBVztRQUFXO1FBQVc7UUFBVztRQUFXO1FBQVc7UUFBVztLQUFVO0lBRXJIYixnREFBU0E7aUNBQUM7WUFDUixNQUFNYzt5REFBa0I7b0JBQ3RCLElBQUk7d0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO3dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7d0JBQ2hDWixjQUFjVyxLQUFLWixVQUFVLElBQUksRUFBRTt3QkFDbkNHLHNCQUFzQlMsS0FBS1osVUFBVSxJQUFJLEVBQUU7b0JBQzdDLEVBQUUsT0FBT2MsT0FBTzt3QkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7b0JBQzlDO2dCQUNGOztZQUVBTDtRQUNGO2dDQUFHLEVBQUU7SUFFTCxNQUFNTyxlQUFlO1FBQ25CVCxrQkFBa0IsT0FBTyx5QkFBeUI7UUFDbERGLGNBQWMsS0FBSyx5QkFBeUI7UUFDNUNGLHNCQUFzQkgsYUFBYSwwQkFBMEI7SUFDL0Q7SUFFQSxNQUFNaUIsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLFFBQVFELEVBQUVFLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDRSxXQUFXO1FBQ3hDaEIsY0FBY2M7UUFDZCxNQUFNRyxXQUFXdEIsV0FBV3VCLE1BQU0sQ0FBQyxDQUFDQyxXQUNsQ0EsU0FBU0MsR0FBRyxDQUFDSixXQUFXLEdBQUdLLFFBQVEsQ0FBQ1A7UUFFdENoQixzQkFBc0JtQjtJQUN4QjtJQUVBLE1BQU1LLGlCQUFpQixDQUFDVDtRQUN0QixJQUFJQSxFQUFFVSxHQUFHLEtBQUssU0FBUztZQUNyQnJCLGtCQUFrQixRQUFRLCtDQUErQztRQUMzRTtJQUNGO0lBRUEsTUFBTXNCLGNBQWM7UUFDbEJ0QixrQkFBa0I7UUFDbEJGLGNBQWM7UUFDZEYsc0JBQXNCSCxhQUFhLHVCQUF1QjtJQUM1RDtJQUVBLHdCQUF3QjtJQUN4QkwsZ0RBQVNBO2lDQUFDO1lBQ1IsTUFBTW1DOzREQUFxQixDQUFDQztvQkFDMUIsSUFBSSxDQUFDQSxNQUFNWCxNQUFNLENBQUNZLE9BQU8sQ0FBQyxJQUEyQixPQUF2Qm5DLDRFQUFzQixJQUFLO3dCQUN2RGdDO29CQUNGO2dCQUNGOztZQUVBLElBQUl2QixnQkFBZ0I7Z0JBQ2xCNEIsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU0w7WUFDckMsT0FBTztnQkFDTEksU0FBU0UsbUJBQW1CLENBQUMsU0FBU047WUFDeEM7WUFFQTt5Q0FBTyxJQUFNSSxTQUFTRSxtQkFBbUIsQ0FBQyxTQUFTTjs7UUFDckQ7Z0NBQUc7UUFBQ3hCO0tBQWU7SUFFbkIscUJBQ0UsOERBQUMrQjtRQUFJQyxXQUFXekMsd0VBQWtCOzswQkFFaEMsOERBQUMyQztnQkFDQ0MsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkosV0FBV3pDLHVFQUFpQjs7Ozs7OzBCQUU5Qiw4REFBQzJDO2dCQUNDQyxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKSixXQUFXekMsd0VBQWtCOzs7Ozs7MEJBSS9CLDhEQUFDd0M7Z0JBQUlDLFdBQVd6QywwRUFBb0I7MEJBQ2xDLDRFQUFDMkM7b0JBQUlDLEtBQUk7b0JBQTJCQyxLQUFJOzs7Ozs7Ozs7OzswQkFJMUMsOERBQUNJO2dCQUFPUixXQUFXekMsbUVBQWE7MEJBQzlCLDRFQUFDa0Q7b0JBQUdULFdBQVd6QywyRUFBcUI7OEJBQUU7Ozs7Ozs7Ozs7OzBCQU14Qyw4REFBQ3dDO2dCQUFJQyxXQUFXekMscUVBQWU7MEJBQzVCSyxtQkFBbUJnRCxHQUFHLENBQUMsQ0FBQzFCLFVBQVUyQixzQkFDakMsOERBQUNDO3dCQUVDZCxXQUFXekMsZ0VBQVU7d0JBQ3JCeUQsT0FBTzs0QkFDTEMsaUJBQWlCL0MsU0FBUyxDQUFDMkMsUUFBUTNDLFVBQVVnRCxNQUFNLENBQUM7d0JBQ3REO3dCQUNBQyxTQUFTLElBQU0xQyxRQUFRMkMsR0FBRyxDQUFDLGNBQTJCLE9BQWJsQyxTQUFTQyxHQUFHO2tDQUVwREQsU0FBU0MsR0FBRzt1QkFQUkQsU0FBU0MsR0FBRzs7Ozs7Ozs7OztZQWF0Qm5CLGdDQUNDLDhEQUFDK0I7Z0JBQUlDLFdBQVd6Qyw0RUFBc0I7MEJBQ3BDLDRFQUFDOEQ7b0JBQ0NDLE1BQUs7b0JBQ0x6QyxPQUFPZjtvQkFDUHlELFVBQVU1QztvQkFDVjZDLFdBQVduQztvQkFDWG9DLGFBQVk7b0JBQ1p6QixXQUFXekMsd0VBQWtCOzs7Ozs7Ozs7OzswQkFNbkMsOERBQUNDLHVEQUFHQTtnQkFBQ21FLFVBQVVqRDs7Ozs7Ozs7Ozs7O0FBR3JCO0dBL0hNakI7S0FBQUE7QUFpSU4saUVBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL2FsZ29yaXRtZS9Eb2N1bWVudG9zL3Byb2pldG9zL2xhYmxhYi9wZXJtYWN1bHQvZnJvbnRlbmQvYXBwL2V4cGxvcmUvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRXhwbG9yZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgRkFCIGZyb20gXCIuLi9jb21wb25lbnRzL0ZBQlwiO1xuXG5jb25zdCBFeHBsb3JlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsdGVyZWRDYXRlZ29yaWVzLCBzZXRGaWx0ZXJlZENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU2VhcmNoQWN0aXZlLCBzZXRJc1NlYXJjaEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIENvbnRyb2xhIGEgdmlzaWJpbGlkYWRlIGRvIGNhbXBvIGRlIGJ1c2NhXG5cbiAgY29uc3QgdGFnQ29sb3JzID0gW1wiI2Y3NWIzY1wiLCBcIiMwMDg1NzVcIiwgXCIjZjdhZmFkXCIsIFwiI2M1ZGZlMVwiLCBcIiNmNGI1MGJcIiwgXCIjMDJiN2QzXCIsIFwiI2MwZTE4OVwiLCBcIiNlZmRiZGRcIiwgXCIjYzVkZmUxXCJdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9jYXRlZ29yaWVzL1wiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhkYXRhLmNhdGVnb3JpZXMgfHwgW10pO1xuICAgICAgICBzZXRGaWx0ZXJlZENhdGVnb3JpZXMoZGF0YS5jYXRlZ29yaWVzIHx8IFtdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGJ1c2NhciBjYXRlZ29yaWFzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoQ2F0ZWdvcmllcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldElzU2VhcmNoQWN0aXZlKHRydWUpOyAvLyBBdGl2YSBvIGNhbXBvIGRlIGJ1c2NhXG4gICAgc2V0U2VhcmNoVGVybShcIlwiKTsgLy8gTGltcGEgbyB0ZXJtbyBkZSBidXNjYVxuICAgIHNldEZpbHRlcmVkQ2F0ZWdvcmllcyhjYXRlZ29yaWVzKTsgLy8gUmVzZXRhIGEgbGlzdGEgZmlsdHJhZGFcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIHNldFNlYXJjaFRlcm0odmFsdWUpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PlxuICAgICAgY2F0ZWdvcnkuX2lkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpXG4gICAgKTtcbiAgICBzZXRGaWx0ZXJlZENhdGVnb3JpZXMoZmlsdGVyZWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2V0SXNTZWFyY2hBY3RpdmUoZmFsc2UpOyAvLyBGZWNoYSBvIGNhbXBvIGRlIGJ1c2NhIGFvIHByZXNzaW9uYXIgXCJFbnRlclwiXG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNsb3NlU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldElzU2VhcmNoQWN0aXZlKGZhbHNlKTtcbiAgICBzZXRTZWFyY2hUZXJtKFwiXCIpO1xuICAgIHNldEZpbHRlcmVkQ2F0ZWdvcmllcyhjYXRlZ29yaWVzKTsgLy8gUmVzZXRhIGFzIGNhdGVnb3JpYXNcbiAgfTtcblxuICAvLyBGZWNoYXIgYW8gY2xpY2FyIGZvcmFcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYC4ke3N0eWxlcy5zZWFyY2hDb250YWluZXJ9YCkpIHtcbiAgICAgICAgY2xvc2VTZWFyY2goKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGlzU2VhcmNoQWN0aXZlKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICB9LCBbaXNTZWFyY2hBY3RpdmVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhwbG9yZVBhZ2V9PlxuICAgICAgey8qIEltYWdlbnMgZGVjb3JhdGl2YXMgbGF0ZXJhaXMgKi99XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi9ib3JkZXItbC5zdmdcIlxuICAgICAgICBhbHQ9XCJNb2xkdXJhIExhdGVyYWwgRXNxdWVyZGFcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ib3JkZXJMZWZ0fVxuICAgICAgLz5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL2JvcmRlci1yLnN2Z1wiXG4gICAgICAgIGFsdD1cIk1vbGR1cmEgTGF0ZXJhbCBEaXJlaXRhXCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYm9yZGVyUmlnaHR9XG4gICAgICAvPlxuXG4gICAgICB7LyogTG9nbyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0NvbnRhaW5lcn0+XG4gICAgICAgIDxpbWcgc3JjPVwiL3Blcm1hY3VsdF9sb2dvLW5hbWUuc3ZnXCIgYWx0PVwiUGVybWFjdWx0IExvZ29cIiAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDYWJlw6dhbGhvICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbkhlYWRpbmd9PlxuICAgICAgICAgIEJyb3dzZSB0aGUgY2F0ZWdvcmllcyBhbmQgZGlzY292ZXIgaW5jcmVkaWJsZSBzdG9yaWVzLlxuICAgICAgICA8L2gyPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIHsvKiBOdXZlbSBkZSBUYWdzICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdDbG91ZH0+XG4gICAgICAgIHtmaWx0ZXJlZENhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5Ll9pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhZ31cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGFnQ29sb3JzW2luZGV4ICUgdGFnQ29sb3JzLmxlbmd0aF0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coYENhdGVnb3JpYTogJHtjYXRlZ29yeS5faWR9YCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NhdGVnb3J5Ll9pZH1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENhbXBvIGRlIFBlc3F1aXNhICovfVxuICAgICAge2lzU2VhcmNoQWN0aXZlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hDb250YWluZXJ9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleVByZXNzfSAvLyBEZXRlY3RhIFwiRW50ZXJcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggY2F0ZWdvcmllcy4uLlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJbnB1dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBGQUIgKi99XG4gICAgICA8RkFCIG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRkFCIiwiRXhwbG9yZVBhZ2UiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsInNldEZpbHRlcmVkQ2F0ZWdvcmllcyIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiaXNTZWFyY2hBY3RpdmUiLCJzZXRJc1NlYXJjaEFjdGl2ZSIsInRhZ0NvbG9ycyIsImZldGNoQ2F0ZWdvcmllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidG9Mb3dlckNhc2UiLCJmaWx0ZXJlZCIsImZpbHRlciIsImNhdGVnb3J5IiwiX2lkIiwiaW5jbHVkZXMiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsImNsb3NlU2VhcmNoIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjbG9zZXN0Iiwic2VhcmNoQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImV4cGxvcmVQYWdlIiwiaW1nIiwic3JjIiwiYWx0IiwiYm9yZGVyTGVmdCIsImJvcmRlclJpZ2h0IiwibG9nb0NvbnRhaW5lciIsImhlYWRlciIsImgyIiwic2VjdGlvbkhlYWRpbmciLCJ0YWdDbG91ZCIsIm1hcCIsImluZGV4IiwiYnV0dG9uIiwidGFnIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZW5ndGgiLCJvbkNsaWNrIiwibG9nIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJvbktleURvd24iLCJwbGFjZWhvbGRlciIsInNlYXJjaElucHV0Iiwib25TZWFyY2giXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/explore/page.js\n"));

/***/ })

});
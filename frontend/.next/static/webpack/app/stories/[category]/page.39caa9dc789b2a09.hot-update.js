"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/stories/[category]/page",{

/***/ "(app-pages-browser)/./app/components/ModalStory.js":
/*!**************************************!*\
  !*** ./app/components/ModalStory.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalStory.module.css */ \"(app-pages-browser)/./app/components/ModalStory.module.css\");\n/* harmony import */ var _ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ModalStory = (param)=>{\n    let { story, closeModal } = param;\n    _s();\n    const [isOriginalText, setIsOriginalText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [audio, setAudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Armazena o áudio para reprodução\n    // Extrair título do texto, assumindo que ele está entre os primeiros \"**\" em text_en\n    const extractTitle = (text)=>{\n        const match = text.match(/\\*\\*(.*?)\\*\\*/);\n        return match ? match[1] : \"Story Details\";\n    };\n    // Alternar entre text_en e text\n    const getTextToDisplay = ()=>isOriginalText ? story.text : story.text_en;\n    // Requisitar áudio do servidor\n    const handleAudioRequest = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:9000/story/\".concat(story._id, \"/audio/?language=\").concat(isOriginalText ? \"original\" : \"en\"));\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch audio.\");\n            }\n            // Criar URL para o áudio recebido\n            const audioBlob = await response.blob();\n            const audioURL = URL.createObjectURL(audioBlob);\n            // Reproduzir o áudio\n            const audioElement = new Audio(audioURL);\n            setAudio(audioElement);\n            audioElement.play();\n        } catch (error) {\n            console.error(\"Error fetching audio:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalOverlay),\n        onClick: closeModal,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalContent),\n            onClick: (e)=>e.stopPropagation(),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButton),\n                    onClick: closeModal,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/close.svg\",\n                        alt: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalTitle),\n                    children: extractTitle(story.text_en)\n                }, void 0, false, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Author:\"\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 53,\n                            columnNumber: 12\n                        }, undefined),\n                        \" \",\n                        story.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Age:\"\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 54,\n                            columnNumber: 12\n                        }, undefined),\n                        \" \",\n                        story.age\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Location:\"\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 55,\n                            columnNumber: 12\n                        }, undefined),\n                        \" \",\n                        story.location\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Language:\"\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 56,\n                            columnNumber: 12\n                        }, undefined),\n                        \" \",\n                        story.language\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: \"Content Type:\"\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 57,\n                            columnNumber: 12\n                        }, undefined),\n                        \" \",\n                        story.content_type\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().storyBody),\n                    children: getTextToDisplay().split(\"\\n\").map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().paragraph),\n                            children: paragraph\n                        }, index, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButtons),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                            onClick: ()=>setIsOriginalText((prev)=>!prev),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/original.svg\",\n                                alt: \"Original\"\n                            }, void 0, false, {\n                                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                            onClick: handleAudioRequest,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/sound.svg\",\n                                alt: \"Sound\"\n                            }, void 0, false, {\n                                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/chat.svg\",\n                                alt: \"Chat\"\n                            }, void 0, false, {\n                                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/version.svg\",\n                                alt: \"Version\"\n                            }, void 0, false, {\n                                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/report.svg\",\n                                alt: \"Report\"\n                            }, void 0, false, {\n                                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ModalStory, \"q7HxYMp/WdF/cUJeF3VKLfsiJ+s=\");\n_c = ModalStory;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalStory);\nvar _c;\n$RefreshReg$(_c, \"ModalStory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL01vZGFsU3RvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFd0M7QUFDSztBQUU3QyxNQUFNRyxhQUFhO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLE9BQU8sbUNBQW1DO0lBRTdFLHFGQUFxRjtJQUNyRixNQUFNUyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLFFBQVFELEtBQUtDLEtBQUssQ0FBQztRQUN6QixPQUFPQSxRQUFRQSxLQUFLLENBQUMsRUFBRSxHQUFHO0lBQzVCO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1DLG1CQUFtQixJQUFPUCxpQkFBaUJGLE1BQU1PLElBQUksR0FBR1AsTUFBTVUsT0FBTztJQUUzRSwrQkFBK0I7SUFDL0IsTUFBTUMscUJBQXFCO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLCtCQUE0RFgsT0FBN0JGLE1BQU1jLEdBQUcsRUFBQyxxQkFBc0QsT0FBbkNaLGlCQUFpQixhQUFhO1lBRTVGLElBQUksQ0FBQ1UsU0FBU0csRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxrQ0FBa0M7WUFDbEMsTUFBTUMsWUFBWSxNQUFNTCxTQUFTTSxJQUFJO1lBQ3JDLE1BQU1DLFdBQVdDLElBQUlDLGVBQWUsQ0FBQ0o7WUFFckMscUJBQXFCO1lBQ3JCLE1BQU1LLGVBQWUsSUFBSUMsTUFBTUo7WUFDL0JkLFNBQVNpQjtZQUNUQSxhQUFhRSxJQUFJO1FBQ25CLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN6QztJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVc5Qiw0RUFBbUI7UUFBRWdDLFNBQVM3QjtrQkFDNUMsNEVBQUMwQjtZQUFJQyxXQUFXOUIsNEVBQW1CO1lBQUVnQyxTQUFTLENBQUNFLElBQU1BLEVBQUVDLGVBQWU7OzhCQUNwRSw4REFBQ0M7b0JBQU9OLFdBQVc5QiwyRUFBa0I7b0JBQUVnQyxTQUFTN0I7OEJBQzlDLDRFQUFDbUM7d0JBQUlDLEtBQUk7d0JBQWFDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUk1Qiw4REFBQ0M7b0JBQUdYLFdBQVc5QiwwRUFBaUI7OEJBQUdRLGFBQWFOLE1BQU1VLE9BQU87Ozs7Ozs4QkFHN0QsOERBQUMrQjs7c0NBQUUsOERBQUNDO3NDQUFPOzs7Ozs7d0JBQWdCO3dCQUFFMUMsTUFBTTJDLElBQUk7Ozs7Ozs7OEJBQ3ZDLDhEQUFDRjs7c0NBQUUsOERBQUNDO3NDQUFPOzs7Ozs7d0JBQWE7d0JBQUUxQyxNQUFNNEMsR0FBRzs7Ozs7Ozs4QkFDbkMsOERBQUNIOztzQ0FBRSw4REFBQ0M7c0NBQU87Ozs7Ozt3QkFBa0I7d0JBQUUxQyxNQUFNNkMsUUFBUTs7Ozs7Ozs4QkFDN0MsOERBQUNKOztzQ0FBRSw4REFBQ0M7c0NBQU87Ozs7Ozt3QkFBa0I7d0JBQUUxQyxNQUFNOEMsUUFBUTs7Ozs7Ozs4QkFDN0MsOERBQUNMOztzQ0FBRSw4REFBQ0M7c0NBQU87Ozs7Ozt3QkFBc0I7d0JBQUUxQyxNQUFNK0MsWUFBWTs7Ozs7Ozs4QkFHckQsOERBQUNwQjtvQkFBSUMsV0FBVzlCLHlFQUFnQjs4QkFDN0JXLG1CQUFtQndDLEtBQUssQ0FBQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msc0JBQzlDLDhEQUFDWDs0QkFBY2IsV0FBVzlCLHlFQUFnQjtzQ0FDdkNxRDsyQkFES0M7Ozs7Ozs7Ozs7OEJBT1osOERBQUN6QjtvQkFBSUMsV0FBVzlCLDZFQUFvQjs7c0NBRWxDLDhEQUFDb0M7NEJBQ0NOLFdBQVc5Qiw0RUFBbUI7NEJBQzlCZ0MsU0FBUyxJQUFNM0Isa0JBQWtCLENBQUNvRCxPQUFTLENBQUNBO3NDQUU1Qyw0RUFBQ25CO2dDQUFJQyxLQUFJO2dDQUFnQkMsS0FBSTs7Ozs7Ozs7Ozs7c0NBSS9CLDhEQUFDSjs0QkFBT04sV0FBVzlCLDRFQUFtQjs0QkFBRWdDLFNBQVNuQjtzQ0FDL0MsNEVBQUN5QjtnQ0FBSUMsS0FBSTtnQ0FBYUMsS0FBSTs7Ozs7Ozs7Ozs7c0NBSTVCLDhEQUFDSjs0QkFBT04sV0FBVzlCLDRFQUFtQjtzQ0FDcEMsNEVBQUNzQztnQ0FBSUMsS0FBSTtnQ0FBWUMsS0FBSTs7Ozs7Ozs7Ozs7c0NBSTNCLDhEQUFDSjs0QkFBT04sV0FBVzlCLDRFQUFtQjtzQ0FDcEMsNEVBQUNzQztnQ0FBSUMsS0FBSTtnQ0FBZUMsS0FBSTs7Ozs7Ozs7Ozs7c0NBSTlCLDhEQUFDSjs0QkFBT04sV0FBVzlCLDRFQUFtQjtzQ0FDcEMsNEVBQUNzQztnQ0FBSUMsS0FBSTtnQ0FBY0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12QztHQS9GTXZDO0tBQUFBO0FBaUdOLGlFQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9hbGdvcml0bWUvRG9jdW1lbnRvcy9wcm9qZXRvcy9sYWJsYWIvcGVybWFjdWx0L2Zyb250ZW5kL2FwcC9jb21wb25lbnRzL01vZGFsU3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Nb2RhbFN0b3J5Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgTW9kYWxTdG9yeSA9ICh7IHN0b3J5LCBjbG9zZU1vZGFsIH0pID0+IHtcbiAgY29uc3QgW2lzT3JpZ2luYWxUZXh0LCBzZXRJc09yaWdpbmFsVGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGUobnVsbCk7IC8vIEFybWF6ZW5hIG8gw6F1ZGlvIHBhcmEgcmVwcm9kdcOnw6NvXG5cbiAgLy8gRXh0cmFpciB0w610dWxvIGRvIHRleHRvLCBhc3N1bWluZG8gcXVlIGVsZSBlc3TDoSBlbnRyZSBvcyBwcmltZWlyb3MgXCIqKlwiIGVtIHRleHRfZW5cbiAgY29uc3QgZXh0cmFjdFRpdGxlID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2goL1xcKlxcKiguKj8pXFwqXFwqLyk7XG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiBcIlN0b3J5IERldGFpbHNcIjtcbiAgfTtcblxuICAvLyBBbHRlcm5hciBlbnRyZSB0ZXh0X2VuIGUgdGV4dFxuICBjb25zdCBnZXRUZXh0VG9EaXNwbGF5ID0gKCkgPT4gKGlzT3JpZ2luYWxUZXh0ID8gc3RvcnkudGV4dCA6IHN0b3J5LnRleHRfZW4pO1xuXG4gIC8vIFJlcXVpc2l0YXIgw6F1ZGlvIGRvIHNlcnZpZG9yXG4gIGNvbnN0IGhhbmRsZUF1ZGlvUmVxdWVzdCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9zdG9yeS8ke3N0b3J5Ll9pZH0vYXVkaW8vP2xhbmd1YWdlPSR7aXNPcmlnaW5hbFRleHQgPyBcIm9yaWdpbmFsXCIgOiBcImVuXCJ9YFxuICAgICAgKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF1ZGlvLlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JpYXIgVVJMIHBhcmEgbyDDoXVkaW8gcmVjZWJpZG9cbiAgICAgIGNvbnN0IGF1ZGlvQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgIGNvbnN0IGF1ZGlvVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChhdWRpb0Jsb2IpO1xuXG4gICAgICAvLyBSZXByb2R1emlyIG8gw6F1ZGlvXG4gICAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBuZXcgQXVkaW8oYXVkaW9VUkwpO1xuICAgICAgc2V0QXVkaW8oYXVkaW9FbGVtZW50KTtcbiAgICAgIGF1ZGlvRWxlbWVudC5wbGF5KCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhdWRpbzpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxPdmVybGF5fSBvbkNsaWNrPXtjbG9zZU1vZGFsfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDb250ZW50fSBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Nsb3NlLnN2Z1wiIGFsdD1cIkNsb3NlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgey8qIEV4aWJpciBUw610dWxvIEV4dHJhw61kbyBkZSB0ZXh0X2VuICovfVxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUaXRsZX0+e2V4dHJhY3RUaXRsZShzdG9yeS50ZXh0X2VuKX08L2gyPlxuXG4gICAgICAgIHsvKiBFeGliaW5kbyBJbmZvcm1hw6fDtWVzIGRvIEF1dG9yIGUgTWV0YWRhZG9zICovfVxuICAgICAgICA8cD48c3Ryb25nPkF1dGhvcjo8L3N0cm9uZz4ge3N0b3J5Lm5hbWV9PC9wPlxuICAgICAgICA8cD48c3Ryb25nPkFnZTo8L3N0cm9uZz4ge3N0b3J5LmFnZX08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+TG9jYXRpb246PC9zdHJvbmc+IHtzdG9yeS5sb2NhdGlvbn08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+TGFuZ3VhZ2U6PC9zdHJvbmc+IHtzdG9yeS5sYW5ndWFnZX08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+Q29udGVudCBUeXBlOjwvc3Ryb25nPiB7c3RvcnkuY29udGVudF90eXBlfTwvcD5cblxuICAgICAgICB7LyogUmVuZGVyaXphbmRvIG8gVGV4dG8gQ29tcGxldG8gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RvcnlCb2R5fT5cbiAgICAgICAgICB7Z2V0VGV4dFRvRGlzcGxheSgpLnNwbGl0KFwiXFxuXCIpLm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEJvdMO1ZXMgQWJhaXhvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbnN9PlxuICAgICAgICAgIHsvKiBCb3TDo28gcGFyYSBhbHRlcm5hciBwYXJhIG8gdGV4dG8gb3JpZ2luYWwgKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcmlnaW5hbFRleHQoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9vcmlnaW5hbC5zdmdcIiBhbHQ9XCJPcmlnaW5hbFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogQm90w6NvIHBhcmEgc29tICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVBdWRpb1JlcXVlc3R9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc291bmQuc3ZnXCIgYWx0PVwiU291bmRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgey8qIEJvdMOjbyBwYXJhIGNoYXQgKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25CdXR0b259PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvY2hhdC5zdmdcIiBhbHQ9XCJDaGF0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHsvKiBCb3TDo28gcGFyYSB2ZXJzw6NvICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQnV0dG9ufT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZlcnNpb24uc3ZnXCIgYWx0PVwiVmVyc2lvblwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7LyogQm90w6NvIHBhcmEgcmVwb3J0YXIgKi99XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25CdXR0b259PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcmVwb3J0LnN2Z1wiIGFsdD1cIlJlcG9ydFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFN0b3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJNb2RhbFN0b3J5Iiwic3RvcnkiLCJjbG9zZU1vZGFsIiwiaXNPcmlnaW5hbFRleHQiLCJzZXRJc09yaWdpbmFsVGV4dCIsImF1ZGlvIiwic2V0QXVkaW8iLCJleHRyYWN0VGl0bGUiLCJ0ZXh0IiwibWF0Y2giLCJnZXRUZXh0VG9EaXNwbGF5IiwidGV4dF9lbiIsImhhbmRsZUF1ZGlvUmVxdWVzdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJfaWQiLCJvayIsIkVycm9yIiwiYXVkaW9CbG9iIiwiYmxvYiIsImF1ZGlvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYXVkaW9FbGVtZW50IiwiQXVkaW8iLCJwbGF5IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kYWxPdmVybGF5Iiwib25DbGljayIsIm1vZGFsQ29udGVudCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJidXR0b24iLCJjbG9zZUJ1dHRvbiIsImltZyIsInNyYyIsImFsdCIsImgyIiwibW9kYWxUaXRsZSIsInAiLCJzdHJvbmciLCJuYW1lIiwiYWdlIiwibG9jYXRpb24iLCJsYW5ndWFnZSIsImNvbnRlbnRfdHlwZSIsInN0b3J5Qm9keSIsInNwbGl0IiwibWFwIiwicGFyYWdyYXBoIiwiaW5kZXgiLCJhY3Rpb25CdXR0b25zIiwiYWN0aW9uQnV0dG9uIiwicHJldiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ModalStory.js\n"));

/***/ })

});
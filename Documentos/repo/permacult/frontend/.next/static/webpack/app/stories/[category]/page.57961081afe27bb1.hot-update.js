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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalStory.module.css */ \"(app-pages-browser)/./app/components/ModalStory.module.css\");\n/* harmony import */ var _ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ChatModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatModal */ \"(app-pages-browser)/./app/components/ChatModal.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ModalStory = (param)=>{\n    let { story, closeModal } = param;\n    _s();\n    const [isOriginalText, setIsOriginalText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [audio, setAudio] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Armazena o áudio para reprodução\n    const [isChatModalOpen, setIsChatModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const openChatModal = ()=>setIsChatModalOpen(true);\n    const closeChatModal = ()=>setIsChatModalOpen(false);\n    // Extrair título do texto, assumindo que ele está entre os primeiros \"**\" em text_en\n    const extractTitle = (text)=>{\n        const match = text.match(/\\*\\*(.*?)\\*\\*/);\n        return match ? match[1] : \"Story Details\";\n    };\n    // Alternar entre text_en e text\n    const getTextToDisplay = ()=>isOriginalText ? story.text : story.text_en;\n    // Requisitar áudio do servidor\n    const handleAudioRequest = async ()=>{\n        try {\n            if (audio) {\n                audio.pause();\n                if (audio.src) {\n                    URL.revokeObjectURL(audio.src); // Libera o URL anterior\n                }\n                setAudio(null);\n            }\n            const response = await fetch(\"http://localhost:9000/story/\".concat(story._id, \"/audio/?language=\").concat(isOriginalText ? \"original\" : \"en\"));\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch audio.\");\n            }\n            const audioBlob = await response.blob();\n            const audioURL = URL.createObjectURL(audioBlob);\n            const audioElement = new Audio(audioURL);\n            audioElement.addEventListener(\"error\", (e)=>{\n                console.error(\"Audio playback error.\", e);\n            });\n            const playPromise = audioElement.play();\n            if (playPromise !== undefined) {\n                playPromise.then(()=>{\n                    console.log(\"Audio playback started.\");\n                    setAudio(audioElement);\n                }).catch((error)=>{\n                    console.error(\"Audio playback failed:\", error);\n                });\n            }\n        } catch (error) {\n            console.error(\"Error fetching or playing audio:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalOverlay),\n                onClick: closeModal,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalContent),\n                    onClick: (e)=>e.stopPropagation(),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButton),\n                            onClick: closeModal,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/close.svg\",\n                                alt: \"Close\"\n                            }, void 0, false, {\n                                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalTitle),\n                            children: extractTitle(story.text_en)\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Author:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                story.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Age:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                story.age\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Location:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                story.location\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Language:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                story.language\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"Content Type:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                story.content_type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().storyBody),\n                            children: getTextToDisplay().split(\"\\n\").map((paragraph, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().paragraph),\n                                    children: paragraph\n                                }, index, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButtons),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                                    onClick: ()=>setIsOriginalText((prev)=>!prev),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/original.svg\",\n                                        alt: \"Original\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                                    onClick: handleAudioRequest,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/sound.svg\",\n                                        alt: \"Sound\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                                    onClick: openChatModal,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/chat.svg\",\n                                        alt: \"Chat\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/version.svg\",\n                                        alt: \"Version\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_ModalStory_module_css__WEBPACK_IMPORTED_MODULE_2___default().actionButton),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/report.svg\",\n                                        alt: \"Report\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            isChatModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                story: story,\n                closeChatModal: closeChatModal\n            }, void 0, false, {\n                fileName: \"/home/algoritme/Documentos/projetos/lablab/permacult/frontend/app/components/ModalStory.js\",\n                lineNumber: 128,\n                columnNumber: 27\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ModalStory, \"kw2fCl3Z8rct+6HAv9uyOncVfw8=\");\n_c = ModalStory;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalStory);\nvar _c;\n$RefreshReg$(_c, \"ModalStory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL01vZGFsU3RvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ0s7QUFDVDtBQUVwQyxNQUFNSSxhQUFhO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLE9BQU8sbUNBQW1DO0lBQzdFLE1BQU0sQ0FBQ1UsaUJBQWlCQyxtQkFBbUIsR0FBR1gsK0NBQVFBLENBQUM7SUFFdkQsTUFBTVksZ0JBQWdCLElBQU1ELG1CQUFtQjtJQUMvQyxNQUFNRSxpQkFBaUIsSUFBTUYsbUJBQW1CO0lBRWhELHFGQUFxRjtJQUNyRixNQUFNRyxlQUFlLENBQUNDO1FBQ3BCLE1BQU1DLFFBQVFELEtBQUtDLEtBQUssQ0FBQztRQUN6QixPQUFPQSxRQUFRQSxLQUFLLENBQUMsRUFBRSxHQUFHO0lBQzVCO0lBRUEsZ0NBQWdDO0lBQ2hDLE1BQU1DLG1CQUFtQixJQUFPWCxpQkFBaUJGLE1BQU1XLElBQUksR0FBR1gsTUFBTWMsT0FBTztJQUUzRSwrQkFBK0I7SUFDL0IsTUFBTUMscUJBQXFCO1FBQ3pCLElBQUk7WUFDRixJQUFJWCxPQUFPO2dCQUNUQSxNQUFNWSxLQUFLO2dCQUNYLElBQUlaLE1BQU1hLEdBQUcsRUFBRTtvQkFDYkMsSUFBSUMsZUFBZSxDQUFDZixNQUFNYSxHQUFHLEdBQUcsd0JBQXdCO2dCQUMxRDtnQkFDQVosU0FBUztZQUNYO1lBRUEsTUFBTWUsV0FBVyxNQUFNQyxNQUNyQiwrQkFBNERuQixPQUE3QkYsTUFBTXNCLEdBQUcsRUFBQyxxQkFBc0QsT0FBbkNwQixpQkFBaUIsYUFBYTtZQUc1RixJQUFJLENBQUNrQixTQUFTRyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZ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QUFtQiw4REFBQ1Isa0RBQVNBO2dCQUFDRSxPQUFPQTtnQkFBT1MsZ0JBQWdCQTs7Ozs7Ozs7QUFHbkU7R0E1SE1WO0tBQUFBO0FBOEhOLGlFQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS9hbGdvcml0bWUvRG9jdW1lbnRvcy9wcm9qZXRvcy9sYWJsYWIvcGVybWFjdWx0L2Zyb250ZW5kL2FwcC9jb21wb25lbnRzL01vZGFsU3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Nb2RhbFN0b3J5Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBDaGF0TW9kYWwgZnJvbSBcIi4vQ2hhdE1vZGFsXCI7XG5cbmNvbnN0IE1vZGFsU3RvcnkgPSAoeyBzdG9yeSwgY2xvc2VNb2RhbCB9KSA9PiB7XG4gIGNvbnN0IFtpc09yaWdpbmFsVGV4dCwgc2V0SXNPcmlnaW5hbFRleHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYXVkaW8sIHNldEF1ZGlvXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBBcm1hemVuYSBvIMOhdWRpbyBwYXJhIHJlcHJvZHXDp8Ojb1xuICBjb25zdCBbaXNDaGF0TW9kYWxPcGVuLCBzZXRJc0NoYXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9wZW5DaGF0TW9kYWwgPSAoKSA9PiBzZXRJc0NoYXRNb2RhbE9wZW4odHJ1ZSk7XG4gIGNvbnN0IGNsb3NlQ2hhdE1vZGFsID0gKCkgPT4gc2V0SXNDaGF0TW9kYWxPcGVuKGZhbHNlKTtcblxuICAvLyBFeHRyYWlyIHTDrXR1bG8gZG8gdGV4dG8sIGFzc3VtaW5kbyBxdWUgZWxlIGVzdMOhIGVudHJlIG9zIHByaW1laXJvcyBcIioqXCIgZW0gdGV4dF9lblxuICBjb25zdCBleHRyYWN0VGl0bGUgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaCgvXFwqXFwqKC4qPylcXCpcXCovKTtcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6IFwiU3RvcnkgRGV0YWlsc1wiO1xuICB9O1xuXG4gIC8vIEFsdGVybmFyIGVudHJlIHRleHRfZW4gZSB0ZXh0XG4gIGNvbnN0IGdldFRleHRUb0Rpc3BsYXkgPSAoKSA9PiAoaXNPcmlnaW5hbFRleHQgPyBzdG9yeS50ZXh0IDogc3RvcnkudGV4dF9lbik7XG5cbiAgLy8gUmVxdWlzaXRhciDDoXVkaW8gZG8gc2Vydmlkb3JcbiAgY29uc3QgaGFuZGxlQXVkaW9SZXF1ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoYXVkaW8pIHtcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgaWYgKGF1ZGlvLnNyYykge1xuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYXVkaW8uc3JjKTsgLy8gTGliZXJhIG8gVVJMIGFudGVyaW9yXG4gICAgICAgIH1cbiAgICAgICAgc2V0QXVkaW8obnVsbCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjkwMDAvc3RvcnkvJHtzdG9yeS5faWR9L2F1ZGlvLz9sYW5ndWFnZT0ke2lzT3JpZ2luYWxUZXh0ID8gXCJvcmlnaW5hbFwiIDogXCJlblwifWBcbiAgICAgICk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGF1ZGlvLlwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYXVkaW9CbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xuICAgICAgY29uc3QgYXVkaW9VUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGF1ZGlvQmxvYik7XG4gICAgICBjb25zdCBhdWRpb0VsZW1lbnQgPSBuZXcgQXVkaW8oYXVkaW9VUkwpO1xuXG4gICAgICBhdWRpb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdWRpbyBwbGF5YmFjayBlcnJvci5cIiwgZSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGxheVByb21pc2UgPSBhdWRpb0VsZW1lbnQucGxheSgpO1xuICAgICAgaWYgKHBsYXlQcm9taXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGxheVByb21pc2VcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1ZGlvIHBsYXliYWNrIHN0YXJ0ZWQuXCIpO1xuICAgICAgICAgICAgc2V0QXVkaW8oYXVkaW9FbGVtZW50KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdWRpbyBwbGF5YmFjayBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG9yIHBsYXlpbmcgYXVkaW86XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbE92ZXJsYXl9IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0gb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvY2xvc2Uuc3ZnXCIgYWx0PVwiQ2xvc2VcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGl0bGV9PntleHRyYWN0VGl0bGUoc3RvcnkudGV4dF9lbil9PC9oMj5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5BdXRob3I6PC9zdHJvbmc+IHtzdG9yeS5uYW1lfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+QWdlOjwvc3Ryb25nPiB7c3RvcnkuYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+TG9jYXRpb246PC9zdHJvbmc+IHtzdG9yeS5sb2NhdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkxhbmd1YWdlOjwvc3Ryb25nPiB7c3RvcnkubGFuZ3VhZ2V9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5Db250ZW50IFR5cGU6PC9zdHJvbmc+IHtzdG9yeS5jb250ZW50X3R5cGV9XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9yeUJvZHl9PlxuICAgICAgICAgICAge2dldFRleHRUb0Rpc3BsYXkoKS5zcGxpdChcIlxcblwiKS5tYXAoKHBhcmFncmFwaCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQnV0dG9uc30+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcmlnaW5hbFRleHQoKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvb3JpZ2luYWwuc3ZnXCIgYWx0PVwiT3JpZ2luYWxcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVBdWRpb1JlcXVlc3R9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zb3VuZC5zdmdcIiBhbHQ9XCJTb3VuZFwiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25CdXR0b259IG9uQ2xpY2s9e29wZW5DaGF0TW9kYWx9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jaGF0LnN2Z1wiIGFsdD1cIkNoYXRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQnV0dG9ufT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdmVyc2lvbi5zdmdcIiBhbHQ9XCJWZXJzaW9uXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJ1dHRvbn0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3JlcG9ydC5zdmdcIiBhbHQ9XCJSZXBvcnRcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc0NoYXRNb2RhbE9wZW4gJiYgPENoYXRNb2RhbCBzdG9yeT17c3Rvcnl9IGNsb3NlQ2hhdE1vZGFsPXtjbG9zZUNoYXRNb2RhbH0gLz59XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFN0b3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJDaGF0TW9kYWwiLCJNb2RhbFN0b3J5Iiwic3RvcnkiLCJjbG9zZU1vZGFsIiwiaXNPcmlnaW5hbFRleHQiLCJzZXRJc09yaWdpbmFsVGV4dCIsImF1ZGlvIiwic2V0QXVkaW8iLCJpc0NoYXRNb2RhbE9wZW4iLCJzZXRJc0NoYXRNb2RhbE9wZW4iLCJvcGVuQ2hhdE1vZGFsIiwiY2xvc2VDaGF0TW9kYWwiLCJleHRyYWN0VGl0bGUiLCJ0ZXh0IiwibWF0Y2giLCJnZXRUZXh0VG9EaXNwbGF5IiwidGV4dF9lbiIsImhhbmRsZUF1ZGlvUmVxdWVzdCIsInBhdXNlIiwic3JjIiwiVVJMIiwicmV2b2tlT2JqZWN0VVJMIiwicmVzcG9uc2UiLCJmZXRjaCIsIl9pZCIsIm9rIiwiRXJyb3IiLCJhdWRpb0Jsb2IiLCJibG9iIiwiYXVkaW9VUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhdWRpb0VsZW1lbnQiLCJBdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29uc29sZSIsImVycm9yIiwicGxheVByb21pc2UiLCJwbGF5IiwidW5kZWZpbmVkIiwidGhlbiIsImxvZyIsImNhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kYWxPdmVybGF5Iiwib25DbGljayIsIm1vZGFsQ29udGVudCIsInN0b3BQcm9wYWdhdGlvbiIsImJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiaW1nIiwiYWx0IiwiaDIiLCJtb2RhbFRpdGxlIiwicCIsInN0cm9uZyIsIm5hbWUiLCJhZ2UiLCJsb2NhdGlvbiIsImxhbmd1YWdlIiwiY29udGVudF90eXBlIiwic3RvcnlCb2R5Iiwic3BsaXQiLCJtYXAiLCJwYXJhZ3JhcGgiLCJpbmRleCIsImFjdGlvbkJ1dHRvbnMiLCJhY3Rpb25CdXR0b24iLCJwcmV2Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ModalStory.js\n"));

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Simple authentication handling for the electrician website\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Check if user is logged in from localStorage\n        const savedUser = localStorage.getItem(\"user\");\n        if (savedUser) {\n            try {\n                setUser(JSON.parse(savedUser));\n            } catch (error) {\n                console.error(\"Error parsing user from localStorage:\", error);\n            }\n        }\n        setLoading(false);\n    }, []);\n    const login = (username, password)=>{\n        // Simple authentication - in a real app, this would call an API\n        if (username === \"s\" && password === \"s\") {\n            const userData = {\n                id: \"1\",\n                name: \"Demo User\",\n                email: \"demo@example.com\",\n                role: \"client\"\n            };\n            setUser(userData);\n            localStorage.setItem(\"user\", JSON.stringify(userData));\n            return true;\n        }\n        return false;\n    };\n    const logout = ()=>{\n        setUser(null);\n        localStorage.removeItem(\"user\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            loading,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/runner/workspace/lib/auth.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSw2REFBNkQ7O0FBRVU7QUFFdkUsTUFBTUksNEJBQWNGLG9EQUFhQTtBQUUxQixTQUFTRyxhQUFhLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSLCtDQUErQztRQUMvQyxNQUFNVSxZQUFZQyxhQUFhQyxPQUFPLENBQUM7UUFDdkMsSUFBSUYsV0FBVztZQUNiLElBQUk7Z0JBQ0ZILFFBQVFNLEtBQUtDLEtBQUssQ0FBQ0o7WUFDckIsRUFBRSxPQUFPSyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMseUNBQXlDQTtZQUN6RDtRQUNGO1FBQ0FOLFdBQVc7SUFDYixHQUFHLEVBQUU7SUFFTCxNQUFNUSxRQUFRLENBQUNDLFVBQVVDO1FBQ3ZCLGdFQUFnRTtRQUNoRSxJQUFJRCxhQUFhLE9BQU9DLGFBQWEsS0FBSztZQUN4QyxNQUFNQyxXQUFXO2dCQUNmQyxJQUFJO2dCQUNKQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxNQUFNO1lBQ1I7WUFDQWpCLFFBQVFhO1lBQ1JULGFBQWFjLE9BQU8sQ0FBQyxRQUFRWixLQUFLYSxTQUFTLENBQUNOO1lBQzVDLE9BQU87UUFDVDtRQUNBLE9BQU87SUFDVDtJQUVBLE1BQU1PLFNBQVM7UUFDYnBCLFFBQVE7UUFDUkksYUFBYWlCLFVBQVUsQ0FBQztJQUMxQjtJQUVBLHFCQUNFLDhEQUFDekIsWUFBWTBCLFFBQVE7UUFBQ0MsT0FBTztZQUFFeEI7WUFBTUU7WUFBU1M7WUFBT1U7UUFBTztrQkFDekR0Qjs7Ozs7O0FBR1A7QUFFTyxTQUFTMEI7SUFDZCxPQUFPN0IsaURBQVVBLENBQUNDO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3RyaWNpYW4tdGVtcGxhdGUvLi9saWIvYXV0aC5qcz8yODdiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gU2ltcGxlIGF1dGhlbnRpY2F0aW9uIGhhbmRsaW5nIGZvciB0aGUgZWxlY3RyaWNpYW4gd2Vic2l0ZVxuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW4gZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBjb25zdCBzYXZlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xuICAgIGlmIChzYXZlZFVzZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldFVzZXIoSlNPTi5wYXJzZShzYXZlZFVzZXIpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIHVzZXIgZnJvbSBsb2NhbFN0b3JhZ2U6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dpbiA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICAvLyBTaW1wbGUgYXV0aGVudGljYXRpb24gLSBpbiBhIHJlYWwgYXBwLCB0aGlzIHdvdWxkIGNhbGwgYW4gQVBJXG4gICAgaWYgKHVzZXJuYW1lID09PSAncycgJiYgcGFzc3dvcmQgPT09ICdzJykge1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIG5hbWU6ICdEZW1vIFVzZXInLFxuICAgICAgICBlbWFpbDogJ2RlbW9AZXhhbXBsZS5jb20nLFxuICAgICAgICByb2xlOiAnY2xpZW50J1xuICAgICAgfTtcbiAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvYWRpbmcsIGxvZ2luLCBsb2dvdXQgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzYXZlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlckRhdGEiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInJvbGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/auth.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/runner/workspace/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/runner/workspace/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0I7QUFDWTtBQUUzQyxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCxtREFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cmljaWFuLXRlbXBsYXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vbGliL2F1dGgnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
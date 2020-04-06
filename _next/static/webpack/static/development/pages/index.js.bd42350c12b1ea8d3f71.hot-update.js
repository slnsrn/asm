webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Services */ "./components/Services.js");
/* harmony import */ var _components_WorkingHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WorkingHours */ "./components/WorkingHours.js");
/* harmony import */ var _components_UsefulInformation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UsefulInformation */ "./components/UsefulInformation.js");
/* harmony import */ var _components_OurTeam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/OurTeam */ "./components/OurTeam.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");


var _jsxFileName = "/Users/slnsrn/Documents/Projects/PelinAsm/pages/index.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var bgStyle = {
  background: "linear-gradient(\n    rgb(26,26,26),\n    rgba(0, 0, 0, 0.45)\n  ),url(\"asm.jpeg\")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

var Banner = __jsx("img", {
  className: "w-full",
  src: "banner.png",
  alt: "banner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 16
  }
});

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      wHeight = _useState[0],
      setWHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setWHeight(window.innerHeight);
  }, []);
  return __jsx("div", {
    className: "w-full h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full bg-cover bg-no-repeat",
    style: _objectSpread({}, bgStyle, {
      height: "".concat(wHeight, "px")
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "absolute top-0 w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "text-center w-full flex flex-row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "items-center mx-auto text-white text-center mt- mt-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "logo.png",
    className: "h-32 md:h-40 w-auto mx-auto",
    alt: "saglik bakanligi logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("h1", {
    className: "text-4xl md:text-6xl font-thin mt-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "\u015Eehit Velit Bekta\u015F"), __jsx("h3", {
    className: "text-2xl md:text-4xl font-thin mb-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Aile Sa\u011Fl\u0131\u011F\u0131 Merkezi"), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    text: "Randevu Al\u0131n",
    link: "https://www.mhrs.gov.tr/Vatandas/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  })))), __jsx(_components_Services__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_components_WorkingHours__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hasBg: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), Banner, __jsx(_components_UsefulInformation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    hasBg: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_OurTeam__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.bd42350c12b1ea8d3f71.hot-update.js.map
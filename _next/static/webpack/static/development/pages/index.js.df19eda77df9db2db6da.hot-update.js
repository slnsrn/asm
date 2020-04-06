webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/UsefulInformation.js":
/*!*****************************************!*\
  !*** ./components/UsefulInformation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withSectionLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withSectionLayout */ "./components/withSectionLayout.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _this = undefined,
    _jsxFileName = "/Users/slnsrn/Documents/Projects/PelinAsm/components/UsefulInformation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var INFO = [{
  icon: "injector",
  link: "https://asi.saglik.gov.tr/asi-takvimi/",
  text: "2019 Yılı Aşı Takvimi"
}, {
  icon: "prescription",
  link: "https://webportal.bolu.bel.tr/web/guest/68/",
  text: "Nöbetçi Eczaneler"
}, {
  icon: "health",
  link: "https://enabiz.gov.tr/",
  text: "E-Nabız",
  title: "Kişisel Sağlık Kaydı Sistemi"
}, {
  icon: "smoking",
  link: "https://alo171.saglik.gov.tr/",
  text: "Alo 171",
  title: "Sigarayı Bırakma Hattı"
}];

var returnUsefulInfo = function returnUsefulInfo() {
  return INFO.map(function (info) {
    return __jsx("div", {
      className: "w-1/2 py-4 px-2 md:px-6 flex flex-col mb-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx("img", {
      className: "w-16 h-16 md:w-24 md:h-24 mx-auto mb-6",
      src: "".concat(info.icon, ".png"),
      alt: info.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }), info.title && __jsx("h6", {
      className: "text-center md:text-xl font-thin my-4 -mx-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, info.title), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: info.text,
      link: info.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }));
  });
};

var UsefulInformation = function UsefulInformation() {
  return __jsx("div", {
    id: "useful-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 3
    }
  }, __jsx("h3", {
    className: "font-thin text-4xl md:text-6xl text-center w-full mb-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "Faydal\u0131 Bilgiler"), __jsx("div", {
    className: "flex flex-row flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, returnUsefulInfo()));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withSectionLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(UsefulInformation));

/***/ })

})
//# sourceMappingURL=index.js.df19eda77df9db2db6da.hot-update.js.map
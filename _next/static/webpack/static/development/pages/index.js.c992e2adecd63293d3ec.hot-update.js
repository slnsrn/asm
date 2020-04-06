webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withSectionLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withSectionLayout */ "./components/withSectionLayout.js");
var _this = undefined,
    _jsxFileName = "/Users/slnsrn/Documents/Projects/PelinAsm/components/Services.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var SERVICES = [{
  title: "Muayene",
  description: 'Kimliğinizle merkezimize başvurabilir ya da "Randevu Alın" seçeneğiyle randevunuzu oluşturabilirsiniz.',
  icon: "muayene"
}, {
  title: "Aşılama, Bebek ve Çocuk İzlemleri",
  description: "Sağlık Bakanlığının aşı takvimi kapsamında 2 yaşına kadar tüm bebek ve çocuklar, merkezimizde ücretsiz aşılanmaktadır.",
  icon: "asilama"
}, {
  title: "Gebe ve Lohusa İzlemleri",
  description: "Merkezimizde gebelik süresince ve doğumdan sonra, anne ve bebeğin takibi yapılmaktadır.",
  icon: "gebelik"
}, {
  title: "Kanser Tarama",
  description: "Meme, Rahim Ağzı ve Kolorektal Kanser taramaları merkezimizde ücretsiz olarak yapılmaktadır.",
  icon: "kanser"
}, {
  title: "Obezite İzlem",
  description: "Merkezimizde, koruyucu hekimlik hizmeti kapsamında, vücut kitle indeksiniz hesaplanmakta, kilo takibiniz yapılmakta ve gerekli görülen durumlarda uzmana sevk edilmektedir.",
  icon: "obezite"
}, {
  title: "Check-Up Taraması",
  description: "Kanser Taraması, İdrar Tahlili, Tansiyon Ölçümü, Obezite İzlem ve Kan Tahlili, merkezimizde yapılmaktadır.",
  icon: "check-up"
}];

var returnServices = function returnServices() {
  return SERVICES.map(function (service) {
    return __jsx("div", {
      key: service.icon,
      className: "w-1/2 md:w-1/3 py-4 px-6 flex flex-col mb-8",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx("img", {
      className: "w-16 h-16 md:w-24 md:h-24 mx-auto",
      src: "".concat(service.icon, ".png"),
      alt: service.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }), __jsx("h6", {
      className: "text-center text-lg md:text-xl font-thin my-4 -mx-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, service.title), __jsx("p", {
      className: "tex-left text-sm md:text-base font-light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, service.description));
  });
};

var Services = function Services() {
  return __jsx("div", {
    id: "services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 3
    }
  }, __jsx("h3", {
    className: "font-thin text-4xl md:text-6xl text-center w-full mb-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "Hizmetler"), __jsx("div", {
    className: "flex flex-row flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, returnServices()));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withSectionLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(Services));

/***/ })

})
//# sourceMappingURL=index.js.c992e2adecd63293d3ec.hot-update.js.map
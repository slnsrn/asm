(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    RNiq: function (e, t, a) {
      "use strict";
      function i(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      a.r(t);
      var r = a("q1tI"),
        n = a.n(r),
        l = a("YFqc"),
        s = a.n(l),
        o = n.a.createElement,
        c = function () {
          return o(
            "div",
            {
              className:
                "text-white flex flex-wrap w-full justify-center font-thin text-base md:text-xl text-lg tracking-wide pt-4 z-10",
            },
            o(
              s.a,
              { href: "/#services" },
              o(
                "a",
                { className: "mr-6 no-underline mb-4", href: "/#hizmetler" },
                "Hizmetler"
              )
            ),
            o(
              s.a,
              { href: "/#working-hours" },
              o(
                "a",
                { className: "mr-6 no-underline mb-4" },
                "\xc7al\u0131\u015fma Saatleri"
              )
            ),
            o(
              s.a,
              { href: "/#useful-info" },
              o(
                "a",
                { className: "mr-6 no-underline mb-4" },
                "Faydal\u0131 Bilgiler"
              )
            ),
            o(
              s.a,
              { href: "/#our-team" },
              o("a", { className: "mr-6 no-underline mb-4" }, "Ekibimiz")
            ),
            o(
              s.a,
              { href: "/#contact" },
              o(
                "a",
                { className: "mr-6 no-underline mb-4" },
                "\u0130leti\u015fim"
              )
            )
          );
        },
        m = n.a.createElement,
        u = function (e) {
          return function (t) {
            var a = t.hasBg;
            return m(
              "div",
              { className: "".concat(a ? "bg-gray-100" : "") },
              m(
                "div",
                {
                  className:
                    "py-12 w-full md:w-grid-md lg:w-grid-lg xl:w-grid-xl mx-auto",
                },
                m(e, null)
              )
            );
          };
        },
        f = n.a.createElement,
        d = [
          {
            title: "Muayene",
            description:
              'Kimli\u011finizle merkezimize ba\u015fvurabilir ya da "Randevu Al\u0131n" se\xe7ene\u011fiyle randevunuzu olu\u015fturabilirsiniz.',
            icon: "muayene",
          },
          {
            title: "A\u015f\u0131lama, Bebek ve \xc7ocuk \u0130zlemleri",
            description:
              "Sa\u011fl\u0131k Bakanl\u0131\u011f\u0131n\u0131n a\u015f\u0131 takvimi kapsam\u0131nda 2 ya\u015f\u0131na kadar t\xfcm bebek ve \xe7ocuklar, merkezimizde \xfccretsiz a\u015f\u0131lanmaktad\u0131r.",
            icon: "asilama",
          },
          {
            title: "Gebe ve Lohusa \u0130zlemleri",
            description:
              "Merkezimizde gebelik s\xfcresince ve do\u011fumdan sonra, anne ve bebe\u011fin takibi yap\u0131lmaktad\u0131r.",
            icon: "gebelik",
          },
          {
            title: "Kanser Tarama",
            description:
              "Meme, Rahim A\u011fz\u0131 ve Kolorektal Kanser taramalar\u0131 merkezimizde \xfccretsiz olarak yap\u0131lmaktad\u0131r.",
            icon: "kanser",
          },
          {
            title: "Obezite \u0130zlem",
            description:
              "Merkezimizde, koruyucu hekimlik hizmeti kapsam\u0131nda, v\xfccut kitle indeksiniz hesaplanmakta, kilo takibiniz yap\u0131lmakta ve gerekli g\xf6r\xfclen durumlarda uzmana sevk edilmektedir.",
            icon: "obezite",
          },
          {
            title: "Check-Up Taramas\u0131",
            description:
              "Kanser Taramas\u0131, \u0130drar Tahlili, Tansiyon \xd6l\xe7\xfcm\xfc, Obezite \u0130zlem ve Kan Tahlili, merkezimizde yap\u0131lmaktad\u0131r.",
            icon: "check-up",
          },
        ],
        p = u(function () {
          return f(
            "div",
            { id: "services" },
            f(
              "h3",
              {
                className:
                  "font-thin text-4xl md:text-6xl text-center w-full mb-6 md:mb-12",
              },
              "Hizmetler"
            ),
            f(
              "div",
              { className: "flex flex-row flex-wrap" },
              d.map(function (e) {
                return f(
                  "div",
                  {
                    key: e.icon,
                    className: "w-1/2 md:w-1/3 py-4 px-6 flex flex-col mb-8",
                  },
                  f("img", {
                    className: "w-16 h-16 md:w-24 md:h-24 mx-auto",
                    src: "".concat(e.icon, ".png"),
                    alt: e.icon,
                  }),
                  f(
                    "h6",
                    { className: "text-center text-xl font-thin my-4 -mx-2" },
                    e.title
                  ),
                  f(
                    "p",
                    { className: "tex-left text-sm md:text-base font-light" },
                    e.description
                  )
                );
              })
            )
          );
        }),
        h = n.a.createElement,
        v = u(function () {
          return h(
            "div",
            { id: "working-hours" },
            h(
              "h3",
              {
                className:
                  "font-thin text-4xl md:text-6xl text-center w-full mb-6 md:mb-12",
              },
              "\xc7al\u0131\u015fma Saatleri"
            ),
            h(
              "div",
              { className: "flex flex-row flex-wrap" },
              h("img", { src: "working-hours.png", alt: "working-hours" }),
              h(
                "div",
                { className: "p-4 bg-dark-blue text-center" },
                h(
                  "p",
                  {
                    className:
                      "text-white tracking-wide text-sm md:text-base md:text-lg",
                  },
                  "Kan tahlilleri i\xe7in numuneler sabah saat 10:00\u2019a kadar al\u0131nabilmektedir. Aile Sa\u011fl\u0131\u011f\u0131 Merkezimizde al\u0131nan kanlar \u0130zzet Baysal Devlet Hastanesi laboratuvar\u0131na sevk edilmektedir."
                )
              )
            )
          );
        }),
        x = n.a.createElement,
        g = function (e) {
          var t = e.link,
            a = e.text;
          return x(
            "div",
            { className: "my-4 text-center" },
            x(
              "a",
              {
                href: t,
                target: "_blank",
                className:
                  "px-4 py-2 mx-auto rounded-full bg-dark-blue text-white text-xs sm:text-lg",
              },
              a
            )
          );
        },
        w = n.a.createElement,
        k = [
          {
            icon: "injector",
            link: "https://asi.saglik.gov.tr/asi-takvimi/",
            text: "2019 Y\u0131l\u0131 A\u015f\u0131 Takvimi",
          },
          {
            icon: "prescription",
            link: "https://webportal.bolu.bel.tr/web/guest/68/",
            text: "N\xf6bet\xe7i Eczaneler",
          },
          {
            icon: "health",
            link: "https://enabiz.gov.tr/",
            text: "E-Nab\u0131z",
            title: "Ki\u015fisel Sa\u011fl\u0131k Kayd\u0131 Sistemi",
          },
          {
            icon: "smoking",
            link: "https://alo171.saglik.gov.tr/",
            text: "Alo 171",
            title: "Sigaray\u0131 B\u0131rakma Hatt\u0131",
          },
        ],
        b = u(function () {
          return w(
            "div",
            { id: "useful-info" },
            w(
              "h3",
              {
                className:
                  "font-thin text-4xl md:text-6xl text-center w-full mb-6",
              },
              "Faydal\u0131 Bilgiler"
            ),
            w(
              "div",
              { className: "flex flex-row flex-wrap" },
              k.map(function (e) {
                return w(
                  "div",
                  { className: "w-1/2 py-4 px-2 md:px-6 flex flex-col mb-8" },
                  w("img", {
                    className: "w-16 h-16 md:w-24 md:h-24 mx-auto mb-6",
                    src: "".concat(e.icon, ".png"),
                    alt: e.icon,
                  }),
                  e.title &&
                    w(
                      "h6",
                      {
                        className:
                          "text-center md:text-xl font-thin my-4 -mx-2",
                      },
                      e.title
                    ),
                  w(g, { text: e.text, link: e.link })
                );
              })
            )
          );
        }),
        N = n.a.createElement,
        y = u(function () {
          return N(
            "div",
            { id: "our-team" },
            N(
              "h3",
              {
                className:
                  "font-thin text-4xl md:text-6xl text-center w-full mb-6",
              },
              "Ekibimiz"
            ),
            N(
              "div",
              { className: "flex flex-row flex-wrap" },
              N(
                "div",
                { className: "w-full md:w-1/2 p-4" },
                N("img", { src: "doctor.jpeg", alt: "Pelin Serin" }),
                N(
                  "div",
                  {
                    className:
                      "bg-dark-blue p-4 text-white text-center tracking-wide",
                  },
                  N(
                    "div",
                    { className: "md:text-xl font-light " },
                    "Dr. Pelin Serin"
                  ),
                  N(
                    "div",
                    { className: "text-sm md:text-base font-thin my-2" },
                    " 14.01.034 No.lu Aile Hekimli\u011fi Birimi "
                  ),
                  N(
                    "div",
                    { className: "text-medium text-sm md:text-base" },
                    "Aile Hekimi"
                  )
                )
              ),
              N(
                "div",
                { className: "w-full md:w-1/2 p-4" },
                N("img", { src: "nurse.jpeg", alt: "" }),
                N(
                  "div",
                  {
                    className:
                      "bg-dark-blue p-4 text-white text-center tracking-wide",
                  },
                  N(
                    "div",
                    { className: "md:text-xl font-light" },
                    "Hem. Hilal Büyüktopaç"
                  ),
                  N(
                    "div",
                    { className: "text-sm md:text-base font-thin my-2" },
                    "14.01.034 No.lu Aile Hekimli\u011fi Birimi "
                  ),
                  N(
                    "div",
                    { className: "text-medium text-sm md:text-base" },
                    "Hem\u015fire"
                  )
                )
              )
            )
          );
        }),
        z = n.a.createElement,
        E = function () {
          return z(
            "div",
            {
              id: "contact",
              className:
                "border-t-2 border-dark-blue text-dark-blue bg-gray-100",
            },
            z(
              "div",
              {
                className:
                  "py-12 w-full md:w-grid-md lg:w-grid-lg xl:w-grid-xl mx-auto text-center",
              },
              z(
                "div",
                { className: "text-xl font-light tracking-wider mb-4" },
                "\u0130leti\u015fim"
              ),
              z(
                "div",
                { className: "mx-auto", style: { width: "320px" } },
                z(
                  "div",
                  { className: "flex" },
                  z(
                    "svg",
                    {
                      "aria-hidden": "true",
                      "data-prefix": "fas",
                      "data-icon": "clock",
                      className: "svg-inline--fa fa-clock fa-w-16 mt-1",
                      role: "img",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 512 512",
                      width: "16",
                      height: "16",
                    },
                    z("path", {
                      fill: "currentColor",
                      d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z",
                    })
                  ),
                  z(
                    "div",
                    { className: "self-center ml-4" },
                    z("div", null, "Haftai\xe7i 08:00 - 12:00 / 13:00 - 17:00"),
                    z(
                      "div",
                      null,
                      "\xc7ar\u015famba: 11:00 - 17:00 mobil hizmet"
                    )
                  )
                ),
                z(
                  "div",
                  { className: "flex mt-4" },
                  z(
                    "svg",
                    {
                      "aria-hidden": "true",
                      "data-prefix": "fas",
                      "data-icon": "map-marker-alt",
                      className:
                        "svg-inline--fa fa-map-marker-alt fa-w-12 mt-1",
                      role: "img",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 384 512",
                      width: "16",
                      height: "16",
                    },
                    z("path", {
                      fill: "currentColor",
                      d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
                    })
                  ),
                  z(
                    "div",
                    { className: "self-center ml-4" },
                    z(
                      "div",
                      null,
                      "Do\u011fanc\u0131 K\xf6y\xfc Okul 3. Sokak No:9"
                    ),
                    z(
                      "div",
                      null,
                      "14030 Do\u011fanc\u0131 K\xf6y\xfc / Bolu Merkez"
                    )
                  )
                ),
                z(
                  "div",
                  { className: "flex mt-4" },
                  z(
                    "svg",
                    {
                      "aria-hidden": "true",
                      "data-prefix": "fas",
                      "data-icon": "envelope",
                      className:
                        "self-center svg-inline--fa fa-envelope fa-w-16",
                      role: "img",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 512 512",
                      width: "16",
                      height: "16",
                    },
                    z("path", {
                      fill: "currentColor",
                      d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
                    })
                  ),
                  z(
                    "div",
                    { className: "self-center ml-4" },
                    z(
                      "a",
                      { href: "mailto:pelin.serin@saglik.gov.tr" },
                      "pelin.serin@saglik.gov.tr"
                    )
                  )
                ),
                z(
                  "div",
                  { className: "flex mt-4" },
                  z(
                    "svg",
                    {
                      "aria-hidden": "true",
                      "data-prefix": "fas",
                      "data-icon": "phone",
                      className: "self-center svg-inline--fa fa-phone fa-w-16",
                      role: "img",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 512 512",
                      width: "16",
                      height: "16",
                    },
                    z("path", {
                      fill: "currentColor",
                      d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
                    })
                  ),
                  z("div", { className: "self-center ml-4" }, "0 374 253 40 44")
                )
              )
            )
          );
        },
        O = n.a.createElement;
      function j(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(a), !0).forEach(function (t) {
                i(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : j(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var A = {
          background:
            'linear-gradient(\n    rgb(26,26,26),\n    rgba(0, 0, 0, 0.45)\n  ),url("asm.jpeg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
        _ = O("img", {
          className: "md:w-full",
          src: "banner.png",
          alt: "banner",
        });
      t.default = function () {
        var e = Object(r.useState)(),
          t = e[0],
          a = e[1];
        return (
          Object(r.useEffect)(function () {
            a(window.innerHeight);
          }, []),
          O(
            "div",
            { className: "w-full h-full" },
            O("div", {
              className: "w-full bg-cover bg-no-repeat",
              style: M({}, A, { height: "".concat(t, "px") }),
            }),
            O(
              "div",
              { className: "absolute top-0 w-full" },
              O(c, null),
              O(
                "div",
                { className: "text-center w-full flex flex-row" },
                O(
                  "div",
                  {
                    className:
                      "items-center mx-auto text-white text-center mt-24 md:mt-32",
                  },
                  O("img", {
                    src: "logo.png",
                    className: "h-32 md:h-40 w-auto mx-auto",
                    alt: "saglik bakanligi logo",
                  }),
                  O(
                    "h1",
                    { className: "text-4xl md:text-6xl font-thin mt-12" },
                    "\u015eehit Velit Bekta\u015f"
                  ),
                  O(
                    "h3",
                    { className: "text-2xl md:text-4xl font-thin mb-12" },
                    "Aile Sa\u011fl\u0131\u011f\u0131 Merkezi"
                  ),
                  O(g, {
                    text: "Randevu Al\u0131n",
                    link: "https://www.mhrs.gov.tr/Vatandas/",
                  })
                )
              )
            ),
            O(p, null),
            O(v, { hasBg: !0 }),
            _,
            O(b, { hasBg: !0 }),
            O(y, null),
            O(E, null)
          )
        );
      };
    },
    YFqc: function (e, t, a) {
      e.exports = a("cTJO");
    },
    cTJO: function (e, t, a) {
      "use strict";
      var i = a("lwsE"),
        r = a("W8MJ"),
        n = a("a1gu"),
        l = a("Nsbk"),
        s = a("7W2i");
      function o() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var c = a("TqRt"),
        m = a("284h");
      (t.__esModule = !0), (t.default = void 0);
      var u,
        f = m(a("q1tI")),
        d = a("QmWs"),
        p = a("g/15"),
        h = c(a("nOHt"));
      function v(e) {
        return e && "object" === typeof e ? (0, p.formatWithValidation)(e) : e;
      }
      var x = new Map(),
        g = window.IntersectionObserver,
        w = {};
      function k() {
        return (
          u ||
          (g
            ? (u = new g(
                function (e) {
                  e.forEach(function (e) {
                    if (x.has(e.target)) {
                      var t = x.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (u.unobserve(e.target), x.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              ))
            : void 0)
        );
      }
      var b = (function (e) {
        s(m, e);
        var t,
          c =
            ((t = m),
            function () {
              var e,
                a = l(t);
              if (o()) {
                var i = l(this).constructor;
                e = Reflect.construct(a, arguments, i);
              } else e = a.apply(this, arguments);
              return n(this, e);
            });
        function m(e) {
          var t;
          return (
            i(this, m),
            ((t = c.call(this, e)).p = void 0),
            (t.cleanUpListeners = function () {}),
            (t.formatUrls = (function (e) {
              var t = null,
                a = null,
                i = null;
              return function (r, n) {
                if (i && r === t && n === a) return i;
                var l = e(r, n);
                return (t = r), (a = n), (i = l), l;
              };
            })(function (e, t) {
              return { href: v(e), as: t ? v(t) : t };
            })),
            (t.linkClicked = function (e) {
              var a = e.currentTarget,
                i = a.nodeName,
                r = a.target;
              if (
                "A" !== i ||
                !(
                  (r && "_self" !== r) ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && 2 === e.nativeEvent.which)
                )
              ) {
                var n = t.formatUrls(t.props.href, t.props.as),
                  l = n.href,
                  s = n.as;
                if (
                  (function (e) {
                    var t = (0, d.parse)(e, !1, !0),
                      a = (0, d.parse)((0, p.getLocationOrigin)(), !1, !0);
                    return (
                      !t.host ||
                      (t.protocol === a.protocol && t.host === a.host)
                    );
                  })(l)
                ) {
                  var o = window.location.pathname;
                  (l = (0, d.resolve)(o, l)),
                    (s = s ? (0, d.resolve)(o, s) : l),
                    e.preventDefault();
                  var c = t.props.scroll;
                  null == c && (c = s.indexOf("#") < 0),
                    h.default[t.props.replace ? "replace" : "push"](l, s, {
                      shallow: t.props.shallow,
                    }).then(function (e) {
                      e && c && (window.scrollTo(0, 0), document.body.focus());
                    });
                }
              }
            }),
            (t.p = !1 !== e.prefetch),
            t
          );
        }
        return (
          r(m, [
            {
              key: "componentWillUnmount",
              value: function () {
                this.cleanUpListeners();
              },
            },
            {
              key: "getPaths",
              value: function () {
                var e = window.location.pathname,
                  t = this.formatUrls(this.props.href, this.props.as),
                  a = t.href,
                  i = t.as,
                  r = (0, d.resolve)(e, a);
                return [r, i ? (0, d.resolve)(e, i) : r];
              },
            },
            {
              key: "handleRef",
              value: function (e) {
                var t = this;
                this.p &&
                  g &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  w[this.getPaths().join("%")] ||
                    (this.cleanUpListeners = (function (e, t) {
                      var a = k();
                      return a
                        ? (a.observe(e),
                          x.set(e, t),
                          function () {
                            try {
                              a.unobserve(e);
                            } catch (t) {
                              console.error(t);
                            }
                            x.delete(e);
                          })
                        : function () {};
                    })(e, function () {
                      t.prefetch();
                    })));
              },
            },
            {
              key: "prefetch",
              value: function (e) {
                if (this.p) {
                  var t = this.getPaths();
                  h.default.prefetch(t[0], t[1], e).catch(function (e) {
                    0;
                  }),
                    (w[t.join("%")] = !0);
                }
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.children,
                  i = this.formatUrls(this.props.href, this.props.as),
                  r = i.href,
                  n = i.as;
                "string" === typeof t &&
                  (t = f.default.createElement("a", null, t));
                var l = f.Children.only(t),
                  s = {
                    ref: function (t) {
                      e.handleRef(t),
                        l &&
                          "object" === typeof l &&
                          l.ref &&
                          ("function" === typeof l.ref
                            ? l.ref(t)
                            : "object" === typeof l.ref && (l.ref.current = t));
                    },
                    onMouseEnter: function (t) {
                      l.props &&
                        "function" === typeof l.props.onMouseEnter &&
                        l.props.onMouseEnter(t),
                        e.prefetch({ priority: !0 });
                    },
                    onClick: function (t) {
                      l.props &&
                        "function" === typeof l.props.onClick &&
                        l.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t);
                    },
                  };
                (!this.props.passHref &&
                  ("a" !== l.type || "href" in l.props)) ||
                  (s.href = n || r);
                var o = a("P5f7").rewriteUrlForNextExport;
                return (
                  s.href &&
                    "undefined" !== typeof __NEXT_DATA__ &&
                    __NEXT_DATA__.nextExport &&
                    (s.href = o(s.href)),
                  f.default.cloneElement(l, s)
                );
              },
            },
          ]),
          m
        );
      })(f.Component);
      t.default = b;
    },
    vlRD: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a("RNiq");
        },
      ]);
    },
  },
  [["vlRD", 0, 2, 1]],
]);

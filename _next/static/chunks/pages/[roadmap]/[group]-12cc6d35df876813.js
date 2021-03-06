(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [911], {
        11739: function(e, r, a) {
            "use strict";
            a.d(r, { aG: function() { return g }, gN: function() { return f }, At: function() { return h } });
            var n = a(42846),
                t = a(15031),
                i = a(26450),
                s = a(67294);

            function c() { return (c = Object.assign || function(e) { for (var r = 1; r < arguments.length; r++) { var a = arguments[r]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function o(e, r) {
                if (null == e) return {};
                var a, n, t = {},
                    i = Object.keys(e);
                for (n = 0; n < i.length; n++) a = i[n], r.indexOf(a) >= 0 || (t[a] = e[a]);
                return t
            }
            var l = ["spacing"],
                u = ["isCurrentPage", "as", "className", "href"],
                p = ["isCurrentPage", "separator", "isLastChild", "spacing", "children", "className"],
                d = ["children", "spacing", "separator", "className"],
                m = (0, n.Gp)((function(e, r) {
                    var a = e.spacing,
                        t = o(e, l),
                        i = c({ mx: a }, (0, n.yK)().separator);
                    return s.createElement(n.m$.span, c({ ref: r, role: "presentation" }, t, { __css: i }))
                }));
            t.Ts && (m.displayName = "BreadcrumbSeparator");
            var h = (0, n.Gp)((function(e, r) {
                var a = e.isCurrentPage,
                    i = e.as,
                    l = e.className,
                    p = e.href,
                    d = o(e, u),
                    m = (0, n.yK)(),
                    h = c({ ref: r, as: i, className: (0, t.cx)("chakra-breadcrumb__link", l) }, d);
                return a ? s.createElement(n.m$.span, c({ "aria-current": "page", __css: m.link }, h)) : s.createElement(n.m$.a, c({ __css: m.link, href: p }, h))
            }));
            t.Ts && (h.displayName = "BreadcrumbLink");
            var f = (0, n.Gp)((function(e, r) {
                var a = e.isCurrentPage,
                    l = e.separator,
                    u = e.isLastChild,
                    d = e.spacing,
                    f = e.children,
                    g = e.className,
                    x = o(e, p),
                    v = (0, i.WR)(f).map((function(e) { return e.type === h ? s.cloneElement(e, { isCurrentPage: a }) : e.type === m ? s.cloneElement(e, { spacing: d, children: e.props.children || l }) : e })),
                    _ = c({ display: "inline-flex", alignItems: "center" }, (0, n.yK)().item),
                    b = (0, t.cx)("chakra-breadcrumb__list-item", g);
                return s.createElement(n.m$.li, c({ ref: r, className: b }, x, { __css: _ }), v, !u && s.createElement(m, { spacing: d }, l))
            }));
            t.Ts && (f.displayName = "BreadcrumbItem");
            var g = (0, n.Gp)((function(e, r) {
                var a = (0, n.jC)("Breadcrumb", e),
                    l = (0, n.Lr)(e),
                    u = l.children,
                    p = l.spacing,
                    m = void 0 === p ? "0.5rem" : p,
                    h = l.separator,
                    f = void 0 === h ? "/" : h,
                    g = l.className,
                    x = o(l, d),
                    v = (0, i.WR)(u),
                    _ = v.length,
                    b = v.map((function(e, r) { return s.cloneElement(e, { separator: f, spacing: m, isLastChild: _ === r + 1 }) })),
                    j = (0, t.cx)("chakra-breadcrumb", g);
                return s.createElement(n.m$.nav, c({ ref: r, "aria-label": "breadcrumb", className: j, __css: a.container }, x), s.createElement(n.Fo, { value: a }, s.createElement(n.m$.ol, { className: "chakra-breadcrumb__list" }, b)))
            }));
            t.Ts && (g.displayName = "Breadcrumb")
        },
        65553: function(e, r, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[roadmap]/[group]", function() { return a(2903) }])
        },
        2903: function(e, r, a) {
            "use strict";
            a.r(r), a.d(r, { __N_SSG: function() { return v }, default: function() { return _ } });
            var n = a(85893),
                t = a(25115),
                i = a(11739),
                s = a(82438),
                c = a(1832),
                o = a(80600),
                l = a(16673),
                u = a(92348),
                p = a(80202),
                d = (a(67294), a(71277)),
                m = a(28641),
                h = a(15193);

            function f(e) { var r = e.href; return (0, n.jsxs)(t.xu, { my: "30px", children: [(0, n.jsx)(t.iz, { mb: "15px", orientation: "horizontal" }), (0, n.jsx)(t.xv, { lineHeight: "23px", fontWeight: 500, fontSize: "14px", color: "gray.500", mb: "10px", children: "This page is a work in progress. Help us by writing a small introduction to the topic and suggesting a few links to read more about this topic." }), (0, n.jsx)(h.zx, { size: "sm", py: "20px", as: t.rU, href: r, target: "_blank", isFullWidth: !0, colorScheme: "gray", _hover: { textDecoration: "none", bg: "gray.200" }, children: "Edit this Page" })] }) }

            function g(e) {
                var r = e.roadmap,
                    i = e.group;
                if (!r.contentPathsFilePath) return null;
                var s = r.contentPathsFilePath.replace(/^\//, ""),
                    c = (a(79280)("./".concat(s))[i] || "").replace(/^\//, ""),
                    o = a(79280)("./".concat(c)).default;
                return (0, n.jsx)(t.xu, { children: (0, n.jsxs)(u.Z, { children: [(0, n.jsx)(o, {}), (0, n.jsx)(f, { href: "".concat(m.url.repoData, "/").concat(c) })] }) })
            }

            function x(e) {
                var r = e.roadmap,
                    a = e.group.split(":");
                return (0, n.jsxs)(i.aG, { fontWeight: "medium", fontSize: "sm", separator: (0, n.jsx)(d.XC, { color: "gray.500" }), children: [(0, n.jsx)(i.gN, { children: (0, n.jsx)(i.At, { color: "blue.500", href: "/".concat(r.id), children: r.featuredTitle }) }), a.map((function(e, t) { return (0, n.jsx)(i.gN, { isCurrentPage: t === a.length - 1, children: (0, n.jsx)(i.At, { textTransform: "capitalize", color: "blue.500", href: "/".concat(r.id, "/").concat(a.slice(0, t + 1).join(":")), children: e.split("-").join(" ") }) }, e) }))] })
            }
            var v = !0;

            function _(e) {
                var r, a, i = e.roadmap,
                    u = e.group,
                    d = e.isOutlet;
                return void 0 !== d && d ? (0, n.jsx)(g, { roadmap: i, group: u }) : (0, n.jsxs)(t.xu, { bg: "white", minH: "100vh", children: [(0, n.jsx)(s.e, {}), (0, n.jsx)(p.Z, { title: (null === i || void 0 === i || null === (r = i.seo) || void 0 === r ? void 0 : r.title) || i.title, description: (null === i || void 0 === i || null === (a = i.seo) || void 0 === a ? void 0 : a.description) || i.description, keywords: (null === i || void 0 === i ? void 0 : i.seo.keywords) || [] }), (0, n.jsxs)(t.W2, { my: "60px", maxW: "container.md", position: "relative", children: [(0, n.jsx)(x, { roadmap: i, group: u }), (0, n.jsx)(g, { roadmap: i, group: u })] }), (0, n.jsx)(c.z, {}), (0, n.jsx)(o.q, {}), (0, n.jsx)(l.$, {})] })
            }
        }
    },
    function(e) {
        e.O(0, [680, 22, 515, 13, 994, 547, 280, 774, 888, 179], (function() { return r = 65553, e(e.s = r); var r }));
        var r = e.O();
        _N_E = r
    }
]);
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [26], {
        11739: function(e, r, n) {
            n.d(r, { aG: function() { return y }, gN: function() { return h }, At: function() { return v } });
            var t = n(42846),
                o = n(15031),
                a = n(26450),
                i = n(67294);

            function u() { return (u = Object.assign || function(e) { for (var r = 1; r < arguments.length; r++) { var n = arguments[r]; for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]) } return e }).apply(this, arguments) }

            function c(e, r) {
                if (null == e) return {};
                var n, t, o = {},
                    a = Object.keys(e);
                for (t = 0; t < a.length; t++) n = a[t], r.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }
            var s = ["spacing"],
                l = ["isCurrentPage", "as", "className", "href"],
                f = ["isCurrentPage", "separator", "isLastChild", "spacing", "children", "className"],
                d = ["children", "spacing", "separator", "className"],
                p = (0, t.Gp)((function(e, r) {
                    var n = e.spacing,
                        o = c(e, s),
                        a = u({ mx: n }, (0, t.yK)().separator);
                    return i.createElement(t.m$.span, u({ ref: r, role: "presentation" }, o, { __css: a }))
                }));
            o.Ts && (p.displayName = "BreadcrumbSeparator");
            var v = (0, t.Gp)((function(e, r) {
                var n = e.isCurrentPage,
                    a = e.as,
                    s = e.className,
                    f = e.href,
                    d = c(e, l),
                    p = (0, t.yK)(),
                    v = u({ ref: r, as: a, className: (0, o.cx)("chakra-breadcrumb__link", s) }, d);
                return n ? i.createElement(t.m$.span, u({ "aria-current": "page", __css: p.link }, v)) : i.createElement(t.m$.a, u({ __css: p.link, href: f }, v))
            }));
            o.Ts && (v.displayName = "BreadcrumbLink");
            var h = (0, t.Gp)((function(e, r) {
                var n = e.isCurrentPage,
                    s = e.separator,
                    l = e.isLastChild,
                    d = e.spacing,
                    h = e.children,
                    y = e.className,
                    b = c(e, f),
                    m = (0, a.WR)(h).map((function(e) { return e.type === v ? i.cloneElement(e, { isCurrentPage: n }) : e.type === p ? i.cloneElement(e, { spacing: d, children: e.props.children || s }) : e })),
                    g = u({ display: "inline-flex", alignItems: "center" }, (0, t.yK)().item),
                    w = (0, o.cx)("chakra-breadcrumb__list-item", y);
                return i.createElement(t.m$.li, u({ ref: r, className: w }, b, { __css: g }), m, !l && i.createElement(p, { spacing: d }, s))
            }));
            o.Ts && (h.displayName = "BreadcrumbItem");
            var y = (0, t.Gp)((function(e, r) {
                var n = (0, t.jC)("Breadcrumb", e),
                    s = (0, t.Lr)(e),
                    l = s.children,
                    f = s.spacing,
                    p = void 0 === f ? "0.5rem" : f,
                    v = s.separator,
                    h = void 0 === v ? "/" : v,
                    y = s.className,
                    b = c(s, d),
                    m = (0, a.WR)(l),
                    g = m.length,
                    w = m.map((function(e, r) { return i.cloneElement(e, { separator: h, spacing: p, isLastChild: g === r + 1 }) })),
                    E = (0, o.cx)("chakra-breadcrumb", y);
                return i.createElement(t.m$.nav, u({ ref: r, "aria-label": "breadcrumb", className: E, __css: n.container }, b), i.createElement(t.Fo, { value: n }, i.createElement(t.m$.ol, { className: "chakra-breadcrumb__list" }, w)))
            }));
            o.Ts && (y.displayName = "Breadcrumb")
        },
        12779: function(e, r, n) {
            n.d(r, { Z: function() { return H } });
            var t = function() {
                return (t = Object.assign || function(e) {
                    for (var r, n = 1, t = arguments.length; n < t; n++)
                        for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                    return e
                }).apply(this, arguments)
            };
            var o = n(67294),
                a = "right-scroll-bar-position",
                i = "width-before-scroll-bar";
            var u = function() {
                return (u = Object.assign || function(e) {
                    for (var r, n = 1, t = arguments.length; n < t; n++)
                        for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                    return e
                }).apply(this, arguments)
            };

            function c(e) { return e }

            function s(e, r) {
                void 0 === r && (r = c);
                var n = [],
                    t = !1;
                return {
                    read: function() { if (t) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."); return n.length ? n[n.length - 1] : e },
                    useMedium: function(e) {
                        var o = r(e, t);
                        return n.push(o),
                            function() { n = n.filter((function(e) { return e !== o })) }
                    },
                    assignSyncMedium: function(e) {
                        for (t = !0; n.length;) {
                            var r = n;
                            n = [], r.forEach(e)
                        }
                        n = { push: function(r) { return e(r) }, filter: function() { return n } }
                    },
                    assignMedium: function(e) {
                        t = !0;
                        var r = [];
                        if (n.length) {
                            var o = n;
                            n = [], o.forEach(e), r = n
                        }
                        var a = function() {
                                var n = r;
                                r = [], n.forEach(e)
                            },
                            i = function() { return Promise.resolve().then(a) };
                        i(), n = { push: function(e) { r.push(e), i() }, filter: function(e) { return r = r.filter(e), n } }
                    }
                }
            }
            var l = function(e) { void 0 === e && (e = {}); var r = s(null); return r.options = u({ async: !0, ssr: !1 }, e), r }();

            function f(e, r) {
                return function(e, r) {
                    var n = (0, o.useState)((function() {
                        return {
                            value: e,
                            callback: r,
                            facade: {get current() { return n.value },
                                set current(e) {
                                    var r = n.value;
                                    r !== e && (n.value = e, n.callback(e, r))
                                }
                            }
                        }
                    }))[0];
                    return n.callback = r, n.facade
                }(r, (function(r) { return e.forEach((function(e) { return function(e, r) { return "function" === typeof e ? e(r) : e && (e.current = r), e }(e, r) })) }))
            }
            var d = function() {},
                p = o.forwardRef((function(e, r) {
                    var n = o.useRef(null),
                        a = o.useState({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: d }),
                        i = a[0],
                        u = a[1],
                        c = e.forwardProps,
                        s = e.children,
                        p = e.className,
                        v = e.removeScrollBar,
                        h = e.enabled,
                        y = e.shards,
                        b = e.sideCar,
                        m = e.noIsolation,
                        g = e.inert,
                        w = e.allowPinchZoom,
                        E = e.as,
                        O = void 0 === E ? "div" : E,
                        C = function(e, r) { var n = {}; for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]); if (null != e && "function" === typeof Object.getOwnPropertySymbols) { var o = 0; for (t = Object.getOwnPropertySymbols(e); o < t.length; o++) r.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (n[t[o]] = e[t[o]]) } return n }(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        S = b,
                        T = f([n, r]),
                        N = t({}, C, i);
                    return o.createElement(o.Fragment, null, h && o.createElement(S, { sideCar: l, removeScrollBar: v, shards: y, noIsolation: m, inert: g, setCallbacks: u, allowPinchZoom: !!w, lockRef: n }), c ? o.cloneElement(o.Children.only(s), t({}, N, { ref: T })) : o.createElement(O, t({}, N, { className: p, ref: T }), s))
                }));
            p.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }, p.classNames = { fullWidth: i, zeroRight: a };
            var v, h = function(e) {
                var r = e.sideCar,
                    n = function(e, r) { var n = {}; for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]); if (null != e && "function" === typeof Object.getOwnPropertySymbols) { var o = 0; for (t = Object.getOwnPropertySymbols(e); o < t.length; o++) r.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (n[t[o]] = e[t[o]]) } return n }(e, ["sideCar"]);
                if (!r) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                var t = r.read();
                if (!t) throw new Error("Sidecar medium not found");
                return o.createElement(t, u({}, n))
            };
            h.isSideCarExport = !0;

            function y() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var r = v || n.nc;
                return r && e.setAttribute("nonce", r), e
            }
            var b = function() {
                    var e = 0,
                        r = null;
                    return {
                        add: function(n) {
                            var t, o;
                            0 == e && (r = y()) && (o = n, (t = r).styleSheet ? t.styleSheet.cssText = o : t.appendChild(document.createTextNode(o)), function(e) {
                                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                            }(r)), e++
                        },
                        remove: function() {!--e && r && (r.parentNode && r.parentNode.removeChild(r), r = null) }
                    }
                },
                m = function() {
                    var e = function() {
                        var e = b();
                        return function(r) {
                            o.useEffect((function() {
                                return e.add(r),
                                    function() { e.remove() }
                            }), [])
                        }
                    }();
                    return function(r) { var n = r.styles; return e(n), null }
                },
                g = { left: 0, top: 0, right: 0, gap: 0 },
                w = function(e) { return parseInt(e || "", 10) || 0 },
                E = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" === typeof window) return g;
                    var r = function(e) {
                            var r = window.getComputedStyle(document.body),
                                n = r["padding" === e ? "paddingLeft" : "marginLeft"],
                                t = r["padding" === e ? "paddingTop" : "marginTop"],
                                o = r["padding" === e ? "paddingRight" : "marginRight"];
                            return [w(n), w(t), w(o)]
                        }(e),
                        n = document.documentElement.clientWidth,
                        t = window.innerWidth;
                    return { left: r[0], top: r[1], right: r[2], gap: Math.max(0, t - n + r[2] - r[0]) }
                },
                O = m(),
                C = function(e, r, n, t) {
                    var o = e.left,
                        u = e.top,
                        c = e.right,
                        s = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .with-scroll-bars-hidden {\n   overflow: hidden " + t + ";\n   padding-right: " + s + "px " + t + ";\n  }\n  body {\n    overflow: hidden " + t + ";\n    " + [r && "position: relative " + t + ";", "margin" === n && "\n    padding-left: " + o + "px;\n    padding-top: " + u + "px;\n    padding-right: " + c + "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: " + s + "px " + t + ";\n    ", "padding" === n && "padding-right: " + s + "px " + t + ";"].filter(Boolean).join("") + "\n  }\n  \n  ." + a + " {\n    right: " + s + "px " + t + ";\n  }\n  \n  ." + i + " {\n    margin-right: " + s + "px " + t + ";\n  }\n  \n  ." + a + " ." + a + " {\n    right: 0 " + t + ";\n  }\n  \n  ." + i + " ." + i + " {\n    margin-right: 0 " + t + ";\n  }\n  \n  body {\n    --removed-body-scroll-bar-size: " + s + "px;\n  }\n"
                },
                S = function(e) {
                    var r = o.useState(E(e.gapMode)),
                        n = r[0],
                        t = r[1];
                    o.useEffect((function() { t(E(e.gapMode)) }), [e.gapMode]);
                    var a = e.noRelative,
                        i = e.noImportant,
                        u = e.gapMode,
                        c = void 0 === u ? "margin" : u;
                    return o.createElement(O, { styles: C(n, !a, c, i ? "" : "!important") })
                },
                T = function(e, r) {
                    var n = r;
                    do {
                        if ("undefined" !== typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), N(e, n)) { var t = P(e, n); if (t[1] > t[2]) return !0 }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                N = function(e, r) { return "v" === e ? function(e) { var r = window.getComputedStyle(e); return "hidden" !== r.overflowY && !(r.overflowY === r.overflowX && "visible" === r.overflowY) }(r) : function(e) { var r = window.getComputedStyle(e); return "range" === e.type || "hidden" !== r.overflowX && !(r.overflowY === r.overflowX && "visible" === r.overflowX) }(r) },
                P = function(e, r) { return "v" === e ? [(n = r).scrollTop, n.scrollHeight, n.clientHeight] : function(e) { return [e.scrollLeft, e.scrollWidth, e.clientWidth] }(r); var n },
                k = !1;
            if ("undefined" !== typeof window) try {
                var x = Object.defineProperty({}, "passive", { get: function() { return k = !0, !0 } });
                window.addEventListener("test", x, x), window.removeEventListener("test", x, x)
            } catch (Y) { k = !1 }
            var R = !!k && { passive: !1 },
                j = function(e) { return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0] },
                A = function(e) { return [e.deltaX, e.deltaY] },
                L = function(e) { return e && "current" in e ? e.current : e },
                _ = function(e) { return "\n  .block-interactivity-" + e + " {pointer-events: none;}\n  .allow-interactivity-" + e + " {pointer-events: all;}\n" },
                I = 0,
                D = [];
            var M, W = (M = function(e) {
                    var r = o.useRef([]),
                        n = o.useRef([0, 0]),
                        t = o.useRef(),
                        a = o.useState(I++)[0],
                        i = o.useState((function() { return m() }))[0],
                        u = o.useRef(e);
                    o.useEffect((function() { u.current = e }), [e]), o.useEffect((function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-" + a);
                            var r = [e.lockRef.current].concat((e.shards || []).map(L)).filter(Boolean);
                            return r.forEach((function(e) { return e.classList.add("allow-interactivity-" + a) })),
                                function() { document.body.classList.remove("block-interactivity-" + a), r.forEach((function(e) { return e.classList.remove("allow-interactivity-" + a) })) }
                        }
                    }), [e.inert, e.lockRef.current, e.shards]);
                    var c = o.useCallback((function(e, r) {
                            if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
                            var o, a = j(e),
                                i = n.current,
                                c = "deltaX" in e ? e.deltaX : i[0] - a[0],
                                s = "deltaY" in e ? e.deltaY : i[1] - a[1],
                                l = e.target,
                                f = Math.abs(c) > Math.abs(s) ? "h" : "v",
                                d = T(f, l);
                            if (!d) return !0;
                            if (d ? o = f : (o = "v" === f ? "h" : "v", d = T(f, l)), !d) return !1;
                            if (!t.current && "changedTouches" in e && (c || s) && (t.current = o), !o) return !0;
                            var p = t.current || o;
                            return function(e, r, n, t, o) {
                                var a = t,
                                    i = n.target,
                                    u = r.contains(i),
                                    c = !1,
                                    s = a > 0,
                                    l = 0,
                                    f = 0;
                                do {
                                    var d = P(e, i),
                                        p = d[0],
                                        v = d[1] - d[2] - p;
                                    (p || v) && N(e, i) && (l += v, f += p), i = i.parentNode
                                } while (!u && i !== document.body || u && (r.contains(i) || r === i));
                                return (s && (o && 0 === l || !o && a > l) || !s && (o && 0 === f || !o && -a > f)) && (c = !0), c
                            }(p, r, e, "h" === p ? c : s, !0)
                        }), []),
                        s = o.useCallback((function(e) {
                            var n = e;
                            if (D.length && D[D.length - 1] === i) {
                                var t = "deltaY" in n ? A(n) : j(n),
                                    o = r.current.filter((function(e) { return e.name === n.type && e.target === n.target && (r = e.delta, o = t, r[0] === o[0] && r[1] === o[1]); var r, o }))[0];
                                if (o && o.should) n.preventDefault();
                                else if (!o) {
                                    var a = (u.current.shards || []).map(L).filter(Boolean).filter((function(e) { return e.contains(n.target) }));
                                    (a.length > 0 ? c(n, a[0]) : !u.current.noIsolation) && n.preventDefault()
                                }
                            }
                        }), []),
                        l = o.useCallback((function(e, n, t, o) {
                            var a = { name: e, delta: n, target: t, should: o };
                            r.current.push(a), setTimeout((function() { r.current = r.current.filter((function(e) { return e !== a })) }), 1)
                        }), []),
                        f = o.useCallback((function(e) { n.current = j(e), t.current = void 0 }), []),
                        d = o.useCallback((function(r) { l(r.type, A(r), r.target, c(r, e.lockRef.current)) }), []),
                        p = o.useCallback((function(r) { l(r.type, j(r), r.target, c(r, e.lockRef.current)) }), []);
                    o.useEffect((function() {
                        return D.push(i), e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: p }), document.addEventListener("wheel", s, R), document.addEventListener("touchmove", s, R), document.addEventListener("touchstart", f, R),
                            function() { D = D.filter((function(e) { return e !== i })), document.removeEventListener("wheel", s, R), document.removeEventListener("touchmove", s, R), document.removeEventListener("touchstart", f, R) }
                    }), []);
                    var v = e.removeScrollBar,
                        h = e.inert;
                    return o.createElement(o.Fragment, null, h ? o.createElement(i, { styles: _(a) }) : null, v ? o.createElement(S, { gapMode: "margin" }) : null)
                }, l.useMedium(M), h),
                B = o.forwardRef((function(e, r) { return o.createElement(p, t({}, e, { ref: r, sideCar: W })) }));
            B.classNames = p.classNames;
            var H = B
        },
        42609: function(e, r, n) {
            var t = n(67294);

            function o(e, r) {
                void 0 === r && (r = !0);
                var n = function() {
                        var e = t.useRef(!1);
                        return t.useEffect((function() {
                            return e.current = !0,
                                function() { e.current = !1 }
                        }), []), e
                    }(),
                    o = t.useState(e),
                    a = o[0],
                    i = o[1],
                    u = t.useRef(a),
                    c = t.useCallback((function(e) {!n.current && r || (u.current = "function" === typeof e ? e(u.current) : e, i(u.current)) }), []);
                return [u, c]
            }
            r.ZP = o
        },
        62730: function(e, r, n) {
            n.d(r, { ib: function() { return fe } });
            var t, o, a = n(67294),
                i = n(38137),
                u = n.n(i),
                c = n(42609);
            ! function(e) { e.DELETE = "DELETE", e.GET = "GET", e.HEAD = "HEAD", e.OPTIONS = "OPTIONS", e.PATCH = "PATCH", e.POST = "POST", e.PUT = "PUT", e.CONNECT = "CONNECT", e.TRACE = "TRACE" }(t || (t = {})),
            function(e) { e.CACHE_FIRST = "cache-first", e.CACHE_AND_NETWORK = "cache-and-network", e.NETWORK_ONLY = "network-only", e.CACHE_ONLY = "cache-only", e.NO_CACHE = "no-cache", e.EXACT_CACHE_AND_NETWORK = "exact-cache-and-network" }(o || (o = {}));
            var s = function(e, r, n, t) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) { try { c(t.next(e)) } catch (r) { a(r) } }

                        function u(e) { try { c(t.throw(e)) } catch (r) { a(r) } }

                        function c(e) {
                            var r;
                            e.done ? o(e.value) : (r = e.value, r instanceof n ? r : new n((function(e) { e(r) }))).then(i, u)
                        }
                        c((t = t.apply(e, r || [])).next())
                    }))
                },
                l = function(e, r) {
                    var n, t, o, a, i = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                    return a = { next: u(0), throw: u(1), return: u(2) }, "function" === typeof Symbol && (a[Symbol.iterator] = function() { return this }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, t && (o = 2 & a[0] ? t.return : a[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, a[1])).done) return o;
                                    switch (t = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, { value: a[1], done: !1 };
                                        case 5:
                                            i.label++, t = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) { i = 0; continue }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) { i.label = a[1]; break }
                                            if (6 === a[0] && i.label < o[1]) { i.label = o[1], o = a; break }
                                            if (o && i.label < o[2]) { i.label = o[2], i.ops.push(a); break }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (u) { a = [6, u], t = 0 } finally { n = o = 0 }
                                if (5 & a[0]) throw a[1];
                                return { value: a[0] ? a[1] : void 0, done: !0 }
                            }([a, u])
                        }
                    }
                },
                f = function() {
                    for (var e = 0, r = 0, n = arguments.length; r < n; r++) e += arguments[r].length;
                    var t = Array(e),
                        o = 0;
                    for (r = 0; r < n; r++)
                        for (var a = arguments[r], i = 0, u = a.length; i < u; i++, o++) t[o] = a[i];
                    return t
                };

            function d(e, r, n, t, o, a, i, u) {
                if (void 0 === n && (n = ""), void 0 === t && (t = ""), void 0 === o && (o = ""), void 0 === a && (a = ""), void 0 === i && (i = ""), void 0 === u && (u = ""), !e) {
                    var c = void 0;
                    if (void 0 === r) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var s = [n, t, o, a, i, u],
                            l = 0;
                        (c = new Error(r.replace(/%s/g, (function() { return s[l++] })))).name = "Invariant Violation"
                    }
                    throw c
                }
            }
            var p, v = function(e) { return "string" === typeof e },
                h = function(e) { return "[object Object]" === Object.prototype.toString.call(e) },
                y = function(e) { return h(e) || Array.isArray(e) },
                b = function(e) { return "function" === typeof e },
                m = function(e) { return void 0 === e || null === e };
            ! function(e) { e.Browser = "browser", e.Server = "server", e.Native = "native" }(p || (p = {}));
            var g = p.Browser,
                w = p.Server,
                E = p.Native,
                O = !("undefined" === typeof window || !window.document || !window.document.createElement),
                C = "undefined" !== typeof navigator && "ReactNative" === navigator.product ? E : O ? g : w,
                S = C === w,
                T = function(e, r, n) {
                    return s(void 0, void 0, void 0, (function() {
                        var t, o;
                        return l(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    if ("undefined" === typeof e) throw Error("Response cannot be undefined... \ud83d\ude35");
                                    if ("undefined" === typeof n) throw Error("responseType cannot be undefined... \ud83d\ude35");
                                    if (null == (t = Array.isArray(n) ? n : [n])[0]) throw Error("could not parse data from response \ud83d\ude35");
                                    return [4, N(e, t)];
                                case 1:
                                    return o = a.sent(), [2, !m(r) && m(o) ? r : o]
                            }
                        }))
                    }))
                },
                N = function(e, r, n) {
                    return void 0 === n && (n = 0), s(void 0, void 0, void 0, (function() {
                        var t;
                        return l(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, e.clone()[r[n]]()];
                                case 1:
                                    return [2, o.sent()];
                                case 2:
                                    if (t = o.sent(), r.length - 1 === n) throw t;
                                    return [2, N(e.clone(), r, ++n)];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                },
                P = ["headers", "ok", "redirected", "trailer", "status", "statusText", "type", "url", "body", "bodyUsed", "data"],
                k = ["clone", "arrayBuffer", "blob", "formData", "json", "text"],
                x = f(P, k),
                R = function(e, r) { return Object.defineProperties({}, x.reduce((function(n, t) { return P.includes(t) ? n[t] = { get: function() { var n = e instanceof Response ? e : e && e.current; if (n) return "data" === t ? r.current : ("clone" in n ? n.clone() : {})[t] }, enumerable: !0 } : k.includes(t) && (n[t] = { value: function() { var r = e instanceof Response ? e : e && e.current; if (r) return ("clone" in r ? r.clone() : {})[t]() }, enumerable: !0 }), n }), {})) },
                j = (R(), function(e) {
                    return s(void 0, void 0, void 0, (function() {
                        var r, n, t, o;
                        return l(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, e.text()];
                                case 1:
                                    return r = a.sent(), n = e.status, t = e.statusText, o = function(e) { var r = {}; return e.forEach((function(e, n) { r[n] = e })), r }(e.headers), [2, { body: r, status: n, statusText: t, headers: o }]
                            }
                        }))
                    }))
                });
            var A = function(e, r) { return (0, a.useCallback)(e, function(e) { var r = (0, a.useRef)(); return JSON.stringify(e) !== JSON.stringify(r.current) && (r.current = e), r.current }(r)) },
                L = function(e) { return new Promise((function(r) { return setTimeout(r, e) })) },
                _ = function(e) { return Number.isInteger(e) && e > 0 },
                I = function(e, r) { var n = new Error(r); return n.name = e + "", n },
                D = function(e, r) { return e ? r ? r.endsWith("/") && e.startsWith("/") ? e.substr(1) : r.endsWith("/") || e.startsWith("/") || e.startsWith("?") || e.startsWith("&") || r.includes("?") ? e : "/" + e : e.startsWith("?") || e.startsWith("&") || e.startsWith("/") ? e : "/" + e : "" },
                M = (0, a.createContext)({ url: "", options: {}, graphql: !1 }),
                W = function() {
                    return (W = Object.assign || function(e) {
                        for (var r, n = 1, t = arguments.length; n < t; n++)
                            for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                        return e
                    }).apply(this, arguments)
                },
                B = { host: "", path: void 0, customOptions: { cacheLife: 0, cachePolicy: o.CACHE_FIRST, interceptors: {}, onAbort: function() {}, onError: function() {}, onNewData: function(e, r) { return r }, onTimeout: function() {}, perPage: 0, persist: !1, responseType: ["json", "text", "blob", "arrayBuffer"], retries: 0, retryDelay: 1e3, retryOn: [], suspense: !1, timeout: 0, data: void 0, loading: !1 }, requestInit: { headers: { Accept: "application/json, text/plain, */*" } }, dependencies: void 0 },
                H = Object.entries(B).reduce((function(e, r) {
                    var n, t = r[0],
                        o = r[1];
                    return h(o) ? W(W({}, e), o) : W(W({}, e), ((n = {})[t] = o, n))
                }), {}),
                Y = function() {
                    return (Y = Object.assign || function(e) {
                        for (var r, n = 1, t = arguments.length; n < t; n++)
                            for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                        return e
                    }).apply(this, arguments)
                };

            function q(e, r, n) {
                d(!(h(e) && h(r)), "You cannot have a 2nd parameter of useFetch as object when your first argument is an object.");
                var t = (0, a.useContext)(M),
                    o = (0, a.useMemo)((function() { var r = e; return v(r) && r.includes("://") ? r : t.url ? t.url : H.host }), [t.url, e]),
                    i = (0, a.useMemo)((function() { var r = e; if (v(r) && !r.includes("://")) return r }), [e]),
                    u = (0, a.useMemo)((function() { return b(e) ? e : b(r) ? r : void 0 }), []),
                    c = (0, a.useMemo)((function() {
                        var n = { headers: {} };
                        h(e) ? n = e : h(r) && (n = r);
                        var o = t.options,
                            a = Y(Y(Y(Y({}, H), o), n), { headers: Y(Y(Y({}, H.headers), o.headers), n.headers), interceptors: Y(Y(Y({}, H.interceptors), o.interceptors), n.interceptors) });
                        return u ? u(a) : a
                    }), [e, u, t.options]),
                    s = (0, a.useMemo)((function() { return function(e) { return e ? ["body", "cache", "credentials", "headers", "integrity", "keepalive", "method", "mode", "redirect", "referrer", "referrerPolicy", "signal", "window"].reduce((function(r, n) { return n in e && (r[n] = e[n]), r }), {}) : {} }(c) }), [c]),
                    l = (0, a.useMemo)((function() { return Array.isArray(r) ? r : Array.isArray(n) ? n : H.dependencies }), [r, n]),
                    f = c.cacheLife,
                    p = c.retries,
                    y = c.retryDelay,
                    m = c.retryOn;
                d(Number.isInteger(f) && f >= 0, "`cacheLife` must be a number >= 0"), d(Number.isInteger(p) && p >= 0, "`retries` must be a number >= 0"), d(b(y) || Number.isInteger(y) && y >= 0, "`retryDelay` must be a positive number or a function returning a positive number."), d(b(m) || Array.isArray(m) && m.every(_), "`retryOn` must be an array of positive numbers or a function returning a boolean.");
                var g = c.loading || Array.isArray(l),
                    w = (0, a.useMemo)((function() { var e = {}; return "request" in c.interceptors && (e.request = c.interceptors.request), "response" in c.interceptors && (e.response = c.interceptors.response), e }), [c]);
                return { host: o, path: i, customOptions: (0, a.useMemo)((function() { var e = Object.keys(B.customOptions).reduce((function(e, r) { return e[r] = c[r], e }), {}); return Y(Y({}, e), { interceptors: w, loading: g }) }), [w, g]), requestInit: s, dependencies: l }
            }
            var G = function() {
                    return (G = Object.assign || function(e) {
                        for (var r, n = 1, t = arguments.length; n < t; n++)
                            for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                        return e
                    }).apply(this, arguments)
                },
                F = function(e, r, n, t) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) { try { c(t.next(e)) } catch (r) { a(r) } }

                        function u(e) { try { c(t.throw(e)) } catch (r) { a(r) } }

                        function c(e) {
                            var r;
                            e.done ? o(e.value) : (r = e.value, r instanceof n ? r : new n((function(e) { e(r) }))).then(i, u)
                        }
                        c((t = t.apply(e, r || [])).next())
                    }))
                },
                U = function(e, r) {
                    var n, t, o, a, i = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                    return a = { next: u(0), throw: u(1), return: u(2) }, "function" === typeof Symbol && (a[Symbol.iterator] = function() { return this }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, t && (o = 2 & a[0] ? t.return : a[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, a[1])).done) return o;
                                    switch (t = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, { value: a[1], done: !1 };
                                        case 5:
                                            i.label++, t = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) { i = 0; continue }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) { i.label = a[1]; break }
                                            if (6 === a[0] && i.label < o[1]) { i.label = o[1], o = a; break }
                                            if (o && i.label < o[2]) { i.label = o[2], i.ops.push(a); break }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (u) { a = [6, u], t = 0 } finally { n = o = 0 }
                                if (5 & a[0]) throw a[1];
                                return { value: a[0] ? a[1] : void 0, done: !0 }
                            }([a, u])
                        }
                    }
                },
                J = t.GET;

            function X(e, r, n, o, a, i, u, c, s, l) {
                return F(this, void 0, void 0, (function() {
                    var o, f, p, h, b, m, g, w, E = this;
                    return U(this, (function(O) {
                        switch (O.label) {
                            case 0:
                                return d(!(y(c) && y(s)), "If first argument of " + r.toLowerCase() + "() is an object, you cannot have a 2nd argument. \ud83d\ude1c"), d(!(r === J && y(c)), "You can only have query params as 1st argument of request.get()"), d(!(r === J && void 0 !== s), "You can only have query params as 1st argument of request.get()"), o = !S && c instanceof URLSearchParams ? "?" + c : v(c) ? c : "", f = "" + i + D(u, i) + D(o), p = c instanceof FormData ? c : y(c) ? JSON.stringify(c) : !S && (s instanceof FormData || s instanceof URLSearchParams) ? s : y(s) || v(s) ? JSON.stringify(s) : y(e.body) || v(s) ? JSON.stringify(e.body) : null, h = function() {
                                    var n = (e.headers || {})["Content-Type"],
                                        o = !!n || [t.POST, t.PUT, t.PATCH].includes(r) && !(p instanceof FormData),
                                        a = G({}, e.headers);
                                    if (o) a["Content-Type"] = n || "application/json";
                                    else if (0 === Object.keys(a).length) return null;
                                    return a
                                }(), [4, F(E, void 0, void 0, (function() {
                                    var t;
                                    return U(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return t = G(G({}, e), { method: r, signal: n.signal }), null !== h ? t.headers = h : delete t.headers, null !== p && (t.body = p), l ? [4, l({ options: t, url: i, path: u, route: o })] : [3, 2];
                                            case 1:
                                                return [2, a.sent()];
                                            case 2:
                                                return [2, t]
                                        }
                                    }))
                                }))];
                            case 1:
                                return b = O.sent(), m = Object.entries({ url: f, method: r, body: b.body || "" }).map((function(e) { return e[0] + ":" + e[1] })).join("||"), g = { url: f, options: b }, w = {}, [4, a.has(m)];
                            case 2:
                                return w.isCached = O.sent(), w.id = m, [4, a.get(m)];
                            case 3:
                                return [2, (g.response = (w.cached = O.sent(), w), g)]
                        }
                    }))
                }))
            }
            var K = function(e, r, n, t) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) { try { c(t.next(e)) } catch (r) { a(r) } }

                        function u(e) { try { c(t.throw(e)) } catch (r) { a(r) } }

                        function c(e) {
                            var r;
                            e.done ? o(e.value) : (r = e.value, r instanceof n ? r : new n((function(e) { e(r) }))).then(i, u)
                        }
                        c((t = t.apply(e, r || [])).next())
                    }))
                },
                Z = function(e, r) {
                    var n, t, o, a, i = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                    return a = { next: u(0), throw: u(1), return: u(2) }, "function" === typeof Symbol && (a[Symbol.iterator] = function() { return this }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, t && (o = 2 & a[0] ? t.return : a[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, a[1])).done) return o;
                                    switch (t = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, { value: a[1], done: !1 };
                                        case 5:
                                            i.label++, t = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) { i = 0; continue }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) { i.label = a[1]; break }
                                            if (6 === a[0] && i.label < o[1]) { i.label = o[1], o = a; break }
                                            if (o && i.label < o[2]) { i.label = o[2], i.ops.push(a); break }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (u) { a = [6, u], t = 0 } finally { n = o = 0 }
                                if (5 & a[0]) throw a[1];
                                return { value: a[0] ? a[1] : void 0, done: !0 }
                            }([a, u])
                        }
                    }
                },
                $ = "useHTTPcache",
                z = function() { try { return JSON.parse(localStorage.getItem($) || "{}") } catch (e) { return localStorage.removeItem($), {} } },
                V = function(e) {
                    var r = e.cacheLife,
                        n = function() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; return K(void 0, void 0, void 0, (function() { var r; return Z(this, (function(n) { return r = z(), e.forEach((function(e) { return delete r[e] })), localStorage.setItem($, JSON.stringify(r)), [2] })) })) },
                        t = function(e) {
                            var r = z()[e] || {},
                                t = r.expiration,
                                o = r.response,
                                a = t > 0 && t < Date.now();
                            return a && n(e), a || !o
                        };
                    return Object.defineProperties(z(), {
                        get: { value: function(e) { return K(void 0, void 0, void 0, (function() { var r, n, o, a, i, u; return Z(this, (function(c) { return t(e) ? [2] : (r = z(), n = r[e].response, o = n.body, a = n.headers, i = n.status, u = n.statusText, [2, new Response(o, { status: i, statusText: u, headers: new Headers(a || {}) })]) })) })) }, writable: !1 },
                        set: {
                            value: function(e, n) {
                                return K(void 0, void 0, void 0, (function() {
                                    var t, o, a, i;
                                    return Z(this, (function(u) {
                                        switch (u.label) {
                                            case 0:
                                                return t = z(), o = t, a = e, i = {}, [4, j(n)];
                                            case 1:
                                                return o[a] = (i.response = u.sent(), i.expiration = Date.now() + r, i), localStorage.setItem($, JSON.stringify(t)), [2]
                                        }
                                    }))
                                }))
                            },
                            writable: !1
                        },
                        has: { value: function(e) { return K(void 0, void 0, void 0, (function() { return Z(this, (function(r) { return [2, !t(e)] })) })) }, writable: !1 },
                        delete: { value: n, writable: !1 },
                        clear: { value: function() { return K(void 0, void 0, void 0, (function() { return Z(this, (function(e) { return localStorage.setItem($, JSON.stringify({})), [2] })) })) }, writable: !1 }
                    })
                },
                Q = function(e, r, n, t) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) { try { c(t.next(e)) } catch (r) { a(r) } }

                        function u(e) { try { c(t.throw(e)) } catch (r) { a(r) } }

                        function c(e) {
                            var r;
                            e.done ? o(e.value) : (r = e.value, r instanceof n ? r : new n((function(e) { e(r) }))).then(i, u)
                        }
                        c((t = t.apply(e, r || [])).next())
                    }))
                },
                ee = function(e, r) {
                    var n, t, o, a, i = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                    return a = { next: u(0), throw: u(1), return: u(2) }, "function" === typeof Symbol && (a[Symbol.iterator] = function() { return this }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, t && (o = 2 & a[0] ? t.return : a[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, a[1])).done) return o;
                                    switch (t = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, { value: a[1], done: !1 };
                                        case 5:
                                            i.label++, t = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) { i = 0; continue }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) { i.label = a[1]; break }
                                            if (6 === a[0] && i.label < o[1]) { i.label = o[1], o = a; break }
                                            if (o && i.label < o[2]) { i.label = o[2], i.ops.push(a); break }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (u) { a = [6, u], t = 0 } finally { n = o = 0 }
                                if (5 & a[0]) throw a[1];
                                return { value: a[0] ? a[1] : void 0, done: !0 }
                            }([a, u])
                        }
                    }
                },
                re = {},
                ne = function(e) {
                    var r = e.cacheLife,
                        n = function() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; return Q(void 0, void 0, void 0, (function() { var r, n, t; return ee(this, (function(o) { for (r = 0, n = e; r < n.length; r++) t = n[r], delete re[t], delete re[t + ":ts"]; return [2] })) })) },
                        t = function(e) {
                            var r = re[e + ":ts"],
                                t = r > 0 && r < Date.now();
                            return t && n(e), t || !re[e]
                        };
                    return Object.defineProperties(re, { get: { value: function(e) { return Q(void 0, void 0, void 0, (function() { return ee(this, (function(r) { return t(e) ? [2] : [2, re[e]] })) })) }, writable: !1, configurable: !0 }, set: { value: function(e, n) { return Q(void 0, void 0, void 0, (function() { return ee(this, (function(t) { return re[e] = n, re[e + ":ts"] = r > 0 ? Date.now() + r : 0, [2] })) })) }, writable: !1, configurable: !0 }, has: { value: function(e) { return Q(void 0, void 0, void 0, (function() { return ee(this, (function(r) { return [2, !t(e)] })) })) }, writable: !1, configurable: !0 }, delete: { value: n, writable: !1, configurable: !0 }, clear: { value: function() { return Q(void 0, void 0, void 0, (function() { return ee(this, (function(e) { return re = {}, [2] })) })) }, writable: !1, configurable: !0 } })
                },
                te = o.NETWORK_ONLY,
                oe = o.NO_CACHE,
                ae = function(e) {
                    var r = e.persist,
                        n = e.cacheLife,
                        t = e.cachePolicy,
                        o = u()(),
                        a = o.isNative;
                    return d(!(o.isServer && r), "There is no persistent storage on the Server currently! \ud83d\ude45\u200d\u2642\ufe0f"), d(!(a && r), "React Native support for persistent cache is not yet implemented. \ud83d\ude45\u200d\u2642\ufe0f"), d(!(r && [oe, te].includes(t)), "You cannot use option 'persist' with cachePolicy: " + t + " \ud83d\ude45\u200d\u2642\ufe0f"), r ? V({ cacheLife: n || 864e5 }) : ne({ cacheLife: n })
                },
                ie = function() {
                    return (ie = Object.assign || function(e) {
                        for (var r, n = 1, t = arguments.length; n < t; n++)
                            for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                        return e
                    }).apply(this, arguments)
                },
                ue = function(e, r, n, t) {
                    return new(n || (n = Promise))((function(o, a) {
                        function i(e) { try { c(t.next(e)) } catch (r) { a(r) } }

                        function u(e) { try { c(t.throw(e)) } catch (r) { a(r) } }

                        function c(e) {
                            var r;
                            e.done ? o(e.value) : (r = e.value, r instanceof n ? r : new n((function(e) { e(r) }))).then(i, u)
                        }
                        c((t = t.apply(e, r || [])).next())
                    }))
                },
                ce = function(e, r) {
                    var n, t, o, a, i = { label: 0, sent: function() { if (1 & o[0]) throw o[1]; return o[1] }, trys: [], ops: [] };
                    return a = { next: u(0), throw: u(1), return: u(2) }, "function" === typeof Symbol && (a[Symbol.iterator] = function() { return this }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, t && (o = 2 & a[0] ? t.return : a[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, a[1])).done) return o;
                                    switch (t = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, { value: a[1], done: !1 };
                                        case 5:
                                            i.label++, t = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) { i = 0; continue }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) { i.label = a[1]; break }
                                            if (6 === a[0] && i.label < o[1]) { i.label = o[1], o = a; break }
                                            if (o && i.label < o[2]) { i.label = o[2], i.ops.push(a); break }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (u) { a = [6, u], t = 0 } finally { n = o = 0 }
                                if (5 & a[0]) throw a[1];
                                return { value: a[0] ? a[1] : void 0, done: !0 }
                            }([a, u])
                        }
                    }
                },
                se = function(e, r) { var n = {}; for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]); if (null != e && "function" === typeof Object.getOwnPropertySymbols) { var o = 0; for (t = Object.getOwnPropertySymbols(e); o < t.length; o++) r.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, t[o]) && (n[t[o]] = e[t[o]]) } return n },
                le = o.CACHE_FIRST;

            function fe() {
                for (var e = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                var o = q.apply(void 0, r),
                    i = o.host,
                    s = o.path,
                    l = o.customOptions,
                    f = o.requestInit,
                    p = o.dependencies,
                    v = l.cacheLife,
                    h = l.cachePolicy,
                    y = l.interceptors,
                    m = l.onAbort,
                    g = l.onError,
                    w = l.onNewData,
                    E = l.onTimeout,
                    O = l.perPage,
                    C = l.persist,
                    S = l.responseType,
                    N = l.retries,
                    P = l.retryDelay,
                    k = l.retryOn,
                    x = l.suspense,
                    j = l.timeout,
                    _ = se(l, ["cacheLife", "cachePolicy", "interceptors", "onAbort", "onError", "onNewData", "onTimeout", "perPage", "persist", "responseType", "retries", "retryDelay", "retryOn", "suspense", "timeout"]),
                    D = ae({ persist: C, cacheLife: v, cachePolicy: h }),
                    M = u()().isServer,
                    W = (0, a.useRef)(),
                    B = (0, a.useRef)({}),
                    H = (0, a.useRef)(_.data),
                    Y = (0, a.useRef)(!1),
                    G = (0, a.useRef)(0),
                    F = (0, a.useRef)(),
                    U = (0, a.useRef)(!0),
                    J = (0, a.useRef)("pending"),
                    K = (0, a.useRef)(),
                    Z = (0, a.useRef)(!1),
                    $ = (0, c.ZP)(_.loading),
                    z = $[0],
                    V = $[1],
                    Q = (0, a.useReducer)((function() { return {} }), [])[1],
                    ee = A((function(r) {
                        var n = function(n, o) {
                                return ue(e, void 0, void 0, (function() {
                                    var e, a, u, c, l, p, v, C, P, R, A, L, q, J, K, Z;
                                    return ce(this, (function($) {
                                        switch ($.label) {
                                            case 0:
                                                return M ? [2] : (W.current = new AbortController, W.current.signal.onabort = m, e = W.current, [4, X(f, r, e, 0, D, i, s, n, o, y.request)]);
                                            case 1:
                                                if (a = $.sent(), u = a.url, c = a.options, l = a.response, F.current = void 0, O > 0 && !U.current && !F.current) return [2, H.current];
                                                x || V(!0), p = j && setTimeout((function() { Y.current = !0, e.abort(), E && E() }), j), $.label = 2;
                                            case 2:
                                                return $.trys.push([2, 17, 23, 24]), l.isCached && h === le ? (C = l.cached, [3, 5]) : [3, 3];
                                            case 3:
                                                return [4, fetch(u, c)];
                                            case 4:
                                                C = $.sent().clone(), $.label = 5;
                                            case 5:
                                                return B.current = C.clone(), [4, T(C, _.data, S)];
                                            case 6:
                                                return v = $.sent(), B.current.data = w(H.current, v), P = B, y.response ? [4, y.response({ response: B.current, request: f })] : [3, 8];
                                            case 7:
                                                return R = $.sent(), [3, 9];
                                            case 8:
                                                R = B.current, $.label = 9;
                                            case 9:
                                                return P.current = R, d("data" in B.current, "You must have `data` field on the Response returned from your `interceptors.response`"), H.current = B.current.data, J = { attempt: G.current, response: C }, (A = !b(k) && Array.isArray(k) && k.length < 1 && !1 === (null === C || void 0 === C ? void 0 : C.ok) || Array.isArray(k) && k.includes(C.status)) ? [3, 12] : (L = b(k)) ? [4, k(J)] : [3, 11];
                                            case 10:
                                                L = $.sent(), $.label = 11;
                                            case 11:
                                                A = L, $.label = 12;
                                            case 12:
                                                return A && N > 0 && N > G.current ? [4, t(J, n, o)] : [3, 14];
                                            case 13:
                                                return [2, $.sent()];
                                            case 14:
                                                return h !== le || l.isCached ? [3, 16] : [4, D.set(l.id, C.clone())];
                                            case 15:
                                                $.sent(), $.label = 16;
                                            case 16:
                                                return Array.isArray(H.current) && H.current.length % O && (U.current = !1), [3, 24];
                                            case 17:
                                                return q = $.sent(), G.current >= N && Y.current && (F.current = I("AbortError", "Timeout Error")), J = { attempt: G.current, error: q }, (K = !b(k) && Array.isArray(k) && k.length < 1) ? [3, 20] : (Z = b(k)) ? [4, k(J)] : [3, 19];
                                            case 18:
                                                Z = $.sent(), $.label = 19;
                                            case 19:
                                                K = Z, $.label = 20;
                                            case 20:
                                                return K && N > 0 && N > G.current ? [4, t(J, n, o)] : [3, 22];
                                            case 21:
                                                return [2, $.sent()];
                                            case 22:
                                                return "AbortError" !== q.name && (F.current = q), [3, 24];
                                            case 23:
                                                return Y.current = !1, p && clearTimeout(p), W.current = void 0, [7];
                                            case 24:
                                                return !C || C.ok || F.current || (F.current = I(C.status, C.statusText)), x || V(!1), G.current === N && (G.current = 0), F.current && g({ error: F.current }), [2, H.current]
                                        }
                                    }))
                                }))
                            },
                            t = function(r, t, o) {
                                return ue(e, void 0, void 0, (function() {
                                    var e;
                                    return ce(this, (function(a) {
                                        switch (a.label) {
                                            case 0:
                                                return e = b(P) ? P(r) : P, Number.isInteger(e) && e >= 0 || console.error("retryDelay must be a number >= 0! If you're using it as a function, it must also return a number >= 0."), G.current++, e ? [4, L(e)] : [3, 2];
                                            case 1:
                                                a.sent(), a.label = 2;
                                            case 2:
                                                return [4, n(t, o)];
                                            case 3:
                                                return [2, a.sent()]
                                        }
                                    }))
                                }))
                            };
                        return x ? function() {
                            for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                            return ue(e, void 0, void 0, (function() {
                                return ce(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return K.current = n.apply(void 0, r).then((function(e) { return J.current = "success", e }), (function() { J.current = "error" })), Q(), [4, K.current];
                                        case 1:
                                            return [2, e.sent()]
                                    }
                                }))
                            }))
                        } : n
                    }), [M, m, f, i, s, y, h, O, j, C, v, E, _.data, w, Q, x]),
                    re = (0, a.useCallback)(ee(t.POST), [ee]),
                    ne = (0, a.useCallback)(ee(t.DELETE), [ee]),
                    te = (0, a.useMemo)((function() { return Object.defineProperties({ get: ee(t.GET), post: re, patch: ee(t.PATCH), put: ee(t.PUT), options: ee(t.OPTIONS), head: ee(t.HEAD), connect: ee(t.CONNECT), trace: ee(t.TRACE), del: ne, delete: ne, abort: function() { return W.current && W.current.abort() }, query: function(e, r) { return re({ query: e, variables: r }) }, mutate: function(e, r) { return re({ mutation: e, variables: r }) }, cache: D }, { loading: { get: function() { return z.current } }, error: { get: function() { return F.current } }, data: { get: function() { return H.current } } }) }), [ee]),
                    oe = (0, a.useMemo)((function() { return R(B, H) }), []);
                if ((0, a.useEffect)((function() {
                        if (Z.current = !0, Array.isArray(p)) {
                            var e = (f.method || t.GET).toLowerCase();
                            (0, te[e])()
                        }
                        return function() { return Z.current = !1 }
                    }), p), (0, a.useEffect)((function() { return te.abort }), []), x && K.current) {
                    if (M) throw new Error("Suspense on server side is not yet supported! \ud83d\ude45\u200d\u2642\ufe0f");
                    switch (J.current) {
                        case "pending":
                            throw K.current;
                        case "error":
                            throw F.current
                    }
                }
                return Object.assign([te, oe, z.current, F.current], ie(ie({ request: te, response: oe }, te), { loading: z.current, data: H.current, error: F.current }))
            }
        },
        38137: function(e, r) {
            var n, t = this && this.__assign || function() {
                return (t = Object.assign || function(e) {
                    for (var r, n = 1, t = arguments.length; n < t; n++)
                        for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                    return e
                }).apply(this, arguments)
            };
            Object.defineProperty(r, "__esModule", { value: !0 }),
                function(e) { e.Browser = "browser", e.Server = "server", e.Native = "native" }(n = r.Device || (r.Device = {}));
            var o = n.Browser,
                a = n.Server,
                i = n.Native,
                u = !("undefined" === typeof window || !window.document || !window.document.createElement),
                c = "undefined" != typeof navigator && "ReactNative" == navigator.product ? i : u ? o : a,
                s = { isBrowser: c === o, isServer: c === a, isNative: c === i, device: c, canUseWorkers: "undefined" !== typeof Worker, canUseEventListeners: c === o && !!window.addEventListener, canUseViewport: c === o && !!window.screen },
                l = function() { return function() { for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r]; return e.reduce((function(e, r) { return t(t({}, e), r) }), {}) }((e = s, Object.keys(e).map((function(r) { return e[r] })), s)); var e },
                f = l();
            r.weAreServer = function() { s.isServer = !0, f = l() }, r.useSSR = function() { return f }, r.default = r.useSSR
        }
    }
]);
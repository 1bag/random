import { S as Xr, i as Yr, s as Jr, C as Al, k as l, l as s, m as o, h as r, n as t, b as Ce, G as e, D as Cl, E as Sl, F as Ml, g as Pe, d as Ae, y as Ue, z as Ge, A as qe, B as He, q as $, a as b, r as k, c as w, $ as te, H as gr, a2 as Y, a3 as J, P as jl, p as er, a8 as yl, u as Ll, o as El } from "./index.4c78ea70.js";
import { C as nr } from "./check-circle-2.025d8ff8.js";
function zl(d) {
    let a, c, i;
    const u = d[2].default
        , f = Al(u, d, d[1], null);
    return {
        c() {
            a = l("section"),
                c = l("div"),
                f && f.c(),
                this.h()
        },
        l(p) {
            a = s(p, "SECTION", {
                id: !0,
                class: !0
            });
            var _ = o(a);
            c = s(_, "DIV", {
                class: !0
            });
            var v = o(c);
            f && f.l(v),
                v.forEach(r),
                _.forEach(r),
                this.h()
        },
        h() {
            t(c, "class", "flex flex-col flex-1 max-w-[1440px] mx-auto w-full"),
                t(a, "id", d[0]),
                t(a, "class", "flex flex-col px-0 xl:px-4 overflow-hidden")
        },
        m(p, _) {
            Ce(p, a, _),
                e(a, c),
                f && f.m(c, null),
                i = !0
        },
        p(p, [_]) {
            f && f.p && (!i || _ & 2) && Cl(f, u, p, p[1], i ? Ml(u, p[1], _, null) : Sl(p[1]), null),
                (!i || _ & 1) && t(a, "id", p[0])
        },
        i(p) {
            i || (Pe(f, p),
                i = !0)
        },
        o(p) {
            Ae(f, p),
                i = !1
        },
        d(p) {
            p && r(a),
                f && f.d(p)
        }
    }
}
function Nl(d, a, c) {
    let { $$slots: i = {}, $$scope: u } = a
        , { id: f } = a;
    return d.$$set = p => {
        "id" in p && c(0, f = p.id),
            "$$scope" in p && c(1, u = p.$$scope)
    }
        ,
        [f, u, i]
}
class oa extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, Nl, zl, Jr, {
                id: 0
            })
    }
}
function Ol(d) {
    let a, c, i, u, f, p, _, v, n, h, x, g, m, y, E, A, S, j;
    return {
        c() {
            a = l("div"),
                c = l("div"),
                i = l("div"),
                u = l("div"),
                f = l("div"),
                p = l("p"),
                _ = $("Dive into the Fun!"),
                v = b(),
                n = l("p"),
                h = $("Unlock the Ultimate Community Experience on Discord"),
                x = b(),
                g = l("div"),
                m = l("a"),
                y = $("Join our Discord    →"),
                E = b(),
                A = l("div"),
                S = l("img"),
                this.h()
        },
        l(L) {
            a = s(L, "DIV", {
                class: !0
            });
            var P = o(a);
            c = s(P, "DIV", {
                class: !0
            });
            var I = o(c);
            i = s(I, "DIV", {
                class: !0,
                "data-aos": !0
            });
            var D = o(i);
            u = s(D, "DIV", {
                class: !0
            });
            var C = o(u);
            f = s(C, "DIV", {
                class: !0
            });
            var V = o(f);
            p = s(V, "P", {
                class: !0
            });
            var M = o(p);
            _ = k(M, "Dive into the Fun!"),
                M.forEach(r),
                v = w(V),
                n = s(V, "P", {
                    class: !0
                });
            var G = o(n);
            h = k(G, "Unlock the Ultimate Community Experience on Discord"),
                G.forEach(r),
                x = w(V),
                g = s(V, "DIV", {
                    class: !0
                });
            var O = o(g);
            m = s(O, "A", {
                href: !0,
                class: !0
            });
            var z = o(m);
            y = k(z, "Join our Discord    →"),
                z.forEach(r),
                O.forEach(r),
                V.forEach(r),
                C.forEach(r),
                E = w(D),
                A = s(D, "DIV", {
                    class: !0
                });
            var B = o(A);
            S = s(B, "IMG", {
                class: !0,
                alt: !0,
                src: !0
            }),
                B.forEach(r),
                D.forEach(r),
                I.forEach(r),
                P.forEach(r),
                this.h()
        },
        h() {
            t(p, "class", "text-3xl lg:text-5xl font-extrabold tracking-tight text-white"),
                t(n, "class", "mt-4 text-base text-vulcan-300"),
                t(m, "href", "https://discord.gg/wanted"),
                t(m, "class", "rounded-lg px-4 py-2 text-sm font-semibold transition-all flex items-center justify-center text-white bg-gradient-to-b from-white/[.105] to-white/[.15] hover:to-white/[.25] h-10 ring-1 ring-inset ring-white/20"),
                t(g, "class", "flex flex-col justify-center mt-12 sm:flex-row lg:justify-start"),
                t(f, "class", "text-center lg:text-left"),
                t(u, "class", "relative items-center gap-12 m-auto lg:inline-flex"),
                t(S, "class", "object-cover object-center top-[-50px] w-full mx-auto lg:absolute lg:ml-auto"),
                t(S, "alt", "hero"),
                te(S.src, j = "/discord.png") || t(S, "src", j),
                t(A, "class", "relative order-first hidden w-full mt-0 lg:block z-[1]"),
                t(i, "class", "grid grid-cols-1 gap-6 p-8 overflow-hidden borderborder-white/5 bg-black/50 bg-gradientdown backdrop-blur-3xl shadow-gray-900 rounded-3xl ring-1 ring-white/10 shadow-2xl lg:grid-cols-2 lg:gap-24 lg:p-20 "),
                t(i, "data-aos", "fade-down"),
                t(c, "class", "relative overflow-hidden mx-auto max-w-7xl px-6 lg:px-8"),
                t(a, "class", "mx-auto max-w-7xl px-8 lg:px-32 md:px-12 py-12 lg:py-32")
        },
        m(L, P) {
            Ce(L, a, P),
                e(a, c),
                e(c, i),
                e(i, u),
                e(u, f),
                e(f, p),
                e(p, _),
                e(f, v),
                e(f, n),
                e(n, h),
                e(f, x),
                e(f, g),
                e(g, m),
                e(m, y),
                e(i, E),
                e(i, A),
                e(A, S)
        },
        p: gr,
        d(L) {
            L && r(a)
        }
    }
}
function Bl(d) {
    let a, c;
    return a = new oa({
        props: {
            id: "cta",
            $$slots: {
                default: [Ol]
            },
            $$scope: {
                ctx: d
            }
        }
    }),
    {
        c() {
            Ue(a.$$.fragment)
        },
        l(i) {
            Ge(a.$$.fragment, i)
        },
        m(i, u) {
            qe(a, i, u),
                c = !0
        },
        p(i, [u]) {
            const f = {};
            u & 1 && (f.$$scope = {
                dirty: u,
                ctx: i
            }),
                a.$set(f)
        },
        i(i) {
            c || (Pe(a.$$.fragment, i),
                c = !0)
        },
        o(i) {
            Ae(a.$$.fragment, i),
                c = !1
        },
        d(i) {
            He(a, i)
        }
    }
}
class Qs extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, null, Bl, Jr, {})
    }
}
function Tl(d) {
    let a, c, i, u;
    return {
        c() {
            a = l("li"),
                c = l("li"),
                i = l("a"),
                u = $("Dashboard"),
                this.h()
        },
        l(f) {
            a = s(f, "LI", {});
            var p = o(a);
            p.forEach(r),
                c = s(f, "LI", {});
            var _ = o(c);
            i = s(_, "A", {
                class: !0,
                href: !0
            });
            var v = o(i);
            u = k(v, "Dashboard"),
                v.forEach(r),
                _.forEach(r),
                this.h()
        },
        h() {
            t(i, "class", "items-center justify-between inline-flex font-medium text-sm px-6 py-2.5 text-center text-white duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"),
                t(i, "href", "/dashboard")
        },
        m(f, p) {
            Ce(f, a, p),
                Ce(f, c, p),
                e(c, i),
                e(i, u)
        },
        d(f) {
            f && r(a),
                f && r(c)
        }
    }
}
function Ul(d) {
    let a, c, i, u, f, p, _;
    return {
        c() {
            a = l("li"),
                c = l("a"),
                i = $("Login"),
                u = b(),
                f = l("li"),
                p = l("a"),
                _ = $("Sign up"),
                this.h()
        },
        l(v) {
            a = s(v, "LI", {});
            var n = o(a);
            c = s(n, "A", {
                class: !0,
                href: !0
            });
            var h = o(c);
            i = k(h, "Login"),
                h.forEach(r),
                n.forEach(r),
                u = w(v),
                f = s(v, "LI", {
                    class: !0
                });
            var x = o(f);
            p = s(x, "A", {
                class: !0,
                href: !0
            });
            var g = o(p);
            _ = k(g, "Sign up"),
                g.forEach(r),
                x.forEach(r),
                this.h()
        },
        h() {
            t(c, "class", "text-white text-sm hover:text-opacity-75"),
                t(c, "href", "/login"),
                t(p, "class", "items-center justify-between inline-flex font-medium text-sm px-6 py-2.5 text-center text-white duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"),
                t(p, "href", "/register"),
                t(f, "class", "ml-[1.5rem]")
        },
        m(v, n) {
            Ce(v, a, n),
                e(a, c),
                e(c, i),
                Ce(v, u, n),
                Ce(v, f, n),
                e(f, p),
                e(p, _)
        },
        d(v) {
            v && r(a),
                v && r(u),
                v && r(f)
        }
    }
}
function hl(d) {
    let a, c;
    function i(p, _) {
        return p[0] === void 0 ? ql : Gl
    }
    let u = i(d)
        , f = u(d);
    return {
        c() {
            a = l("div"),
                c = l("ul"),
                f.c(),
                this.h()
        },
        l(p) {
            a = s(p, "DIV", {
                class: !0
            });
            var _ = o(a);
            c = s(_, "UL", {
                class: !0
            });
            var v = o(c);
            f.l(v),
                v.forEach(r),
                _.forEach(r),
                this.h()
        },
        h() {
            t(c, "class", "flex flex-col items-center"),
                t(a, "class", "lg:hidden py-4")
        },
        m(p, _) {
            Ce(p, a, _),
                e(a, c),
                f.m(c, null)
        },
        p(p, _) {
            u !== (u = i(p)) && (f.d(1),
                f = u(p),
                f && (f.c(),
                    f.m(c, null)))
        },
        d(p) {
            p && r(a),
                f.d()
        }
    }
}
function Gl(d) {
    let a, c, i;
    return {
        c() {
            a = l("li"),
                c = l("a"),
                i = $("Dashboard"),
                this.h()
        },
        l(u) {
            a = s(u, "LI", {});
            var f = o(a);
            c = s(f, "A", {
                class: !0,
                href: !0
            });
            var p = o(c);
            i = k(p, "Dashboard"),
                p.forEach(r),
                f.forEach(r),
                this.h()
        },
        h() {
            t(c, "class", "items-center justify-between inline-flex font-medium text-sm px-6 py-2.5 text-center text-white duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"),
                t(c, "href", "/dashboard")
        },
        m(u, f) {
            Ce(u, a, f),
                e(a, c),
                e(c, i)
        },
        d(u) {
            u && r(a)
        }
    }
}
function ql(d) {
    let a, c, i, u, f, p, _;
    return {
        c() {
            a = l("li"),
                c = l("a"),
                i = $("Login"),
                u = b(),
                f = l("li"),
                p = l("a"),
                _ = $("Sign up"),
                this.h()
        },
        l(v) {
            a = s(v, "LI", {});
            var n = o(a);
            c = s(n, "A", {
                class: !0,
                href: !0
            });
            var h = o(c);
            i = k(h, "Login"),
                h.forEach(r),
                n.forEach(r),
                u = w(v),
                f = s(v, "LI", {
                    class: !0
                });
            var x = o(f);
            p = s(x, "A", {
                class: !0,
                href: !0
            });
            var g = o(p);
            _ = k(g, "Sign up"),
                g.forEach(r),
                x.forEach(r),
                this.h()
        },
        h() {
            t(c, "class", "text-white text-sm hover:text-opacity-75"),
                t(c, "href", "/login"),
                t(p, "class", "items-center justify-between inline-flex font-medium text-sm px-6 py-2.5 text-center text-white duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"),
                t(p, "href", "/register"),
                t(f, "class", "mt-2")
        },
        m(v, n) {
            Ce(v, a, n),
                e(a, c),
                e(c, i),
                Ce(v, u, n),
                Ce(v, f, n),
                e(f, p),
                e(p, _)
        },
        d(v) {
            v && r(a),
                v && r(u),
                v && r(f)
        }
    }
}
function Hl(d) {
    let a, c, i, u, f, p, _, v, n, h, x, g, m, y, E, A;
    function S(I, D) {
        return I[0] === void 0 ? Ul : Tl
    }
    let j = S(d)
        , L = j(d)
        , P = d[1] && hl(d);
    return {
        c() {
            a = l("header"),
                c = l("div"),
                i = l("div"),
                u = l("div"),
                f = l("a"),
                p = l("img"),
                v = b(),
                n = l("button"),
                h = Y("svg"),
                x = Y("path"),
                g = b(),
                m = l("ul"),
                L.c(),
                y = b(),
                P && P.c(),
                this.h()
        },
        l(I) {
            a = s(I, "HEADER", {
                class: !0
            });
            var D = o(a);
            c = s(D, "DIV", {
                class: !0
            });
            var C = o(c);
            i = s(C, "DIV", {
                class: !0
            });
            var V = o(i);
            u = s(V, "DIV", {
                class: !0
            });
            var M = o(u);
            f = s(M, "A", {
                href: !0
            });
            var G = o(f);
            p = s(G, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }),
                G.forEach(r),
                M.forEach(r),
                v = w(V),
                n = s(V, "BUTTON", {
                    class: !0
                });
            var O = o(n);
            h = J(O, "svg", {
                class: !0,
                fill: !0,
                viewBox: !0,
                stroke: !0
            });
            var z = o(h);
            x = J(z, "path", {
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
                "stroke-width": !0,
                d: !0
            }),
                o(x).forEach(r),
                z.forEach(r),
                O.forEach(r),
                g = w(V),
                m = s(V, "UL", {
                    class: !0
                });
            var B = o(m);
            L.l(B),
                B.forEach(r),
                V.forEach(r),
                C.forEach(r),
                y = w(D),
                P && P.l(D),
                D.forEach(r),
                this.h()
        },
        h() {
            t(p, "class", "h-8"),
                te(p.src, _ = "/logo.svg") || t(p, "src", _),
                t(p, "alt", "Logo"),
                t(f, "href", "/"),
                t(u, "class", "w-1/2 lg:w-1/4 flex items-center justify-between"),
                t(x, "stroke-linecap", "round"),
                t(x, "stroke-linejoin", "round"),
                t(x, "stroke-width", "2"),
                t(x, "d", "M4 6h16M4 12h16M4 18h16"),
                t(h, "class", "h-6 w-6 text-white"),
                t(h, "fill", "none"),
                t(h, "viewBox", "0 0 24 24"),
                t(h, "stroke", "currentColor"),
                t(n, "class", "lg:hidden"),
                t(m, "class", "lg:flex hidden justify-end items-center flex-1"),
                t(i, "class", "max-w-[85rem] flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8 justify-between"),
                t(c, "class", "px-4 md:px-6 max-w-9xl mx-auto w-full"),
                t(a, "class", "z-[50] fixed top-0 w-full border-b border-white/5 bg-black/5 py-4 backdrop-blur-md")
        },
        m(I, D) {
            Ce(I, a, D),
                e(a, c),
                e(c, i),
                e(i, u),
                e(u, f),
                e(f, p),
                e(i, v),
                e(i, n),
                e(n, h),
                e(h, x),
                e(i, g),
                e(i, m),
                L.m(m, null),
                e(a, y),
                P && P.m(a, null),
                E || (A = jl(n, "click", d[2]),
                    E = !0)
        },
        p(I, [D]) {
            j !== (j = S(I)) && (L.d(1),
                L = j(I),
                L && (L.c(),
                    L.m(m, null))),
                I[1] ? P ? P.p(I, D) : (P = hl(I),
                    P.c(),
                    P.m(a, null)) : P && (P.d(1),
                        P = null)
        },
        i: gr,
        o: gr,
        d(I) {
            I && r(a),
                L.d(),
                P && P.d(),
                E = !1,
                A()
        }
    }
}
function Rl(d, a, c) {
    let i = !1
        , { loggedin: u } = a;
    function f() {
        c(1, i = !i)
    }
    return d.$$set = p => {
        "loggedin" in p && c(0, u = p.loggedin)
    }
        ,
        [u, i, f]
}
class Xs extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, Rl, Hl, Jr, {
                loggedin: 0
            })
    }
}
var Fl = Object.create
    , $l = Object.defineProperty
    , Wl = Object.getOwnPropertyDescriptor
    , Zl = Object.getOwnPropertyNames
    , Ql = Object.getPrototypeOf
    , Xl = Object.prototype.hasOwnProperty
    , Yl = (d => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(d, {
        get: (a, c) => (typeof require < "u" ? require : a)[c]
    }) : d)(function (d) {
        if (typeof require < "u")
            return require.apply(this, arguments);
        throw Error('Dynamic require of "' + d + '" is not supported')
    })
    , ra = (d, a) => () => (a || d((a = {
        exports: {}
    }).exports, a),
        a.exports)
    , Jl = (d, a, c, i) => {
        if (a && typeof a == "object" || typeof a == "function")
            for (let u of Zl(a))
                !Xl.call(d, u) && u !== c && $l(d, u, {
                    get: () => a[u],
                    enumerable: !(i = Wl(a, u)) || i.enumerable
                });
        return d
    }
    , Kl = (d, a, c) => (c = d != null ? Fl(Ql(d)) : {},
        Jl(a || !d || !d.__esModule ? $l(c, "default", {
            value: d,
            enumerable: !0
        }) : c, d))
    , es = ra((d, a) => {
        (function (c, i, u) {
            function f(n) {
                var h = this
                    , x = v();
                h.next = function () {
                    var g = 2091639 * h.s0 + h.c * 23283064365386963e-26;
                    return h.s0 = h.s1,
                        h.s1 = h.s2,
                        h.s2 = g - (h.c = g | 0)
                }
                    ,
                    h.c = 1,
                    h.s0 = x(" "),
                    h.s1 = x(" "),
                    h.s2 = x(" "),
                    h.s0 -= x(n),
                    h.s0 < 0 && (h.s0 += 1),
                    h.s1 -= x(n),
                    h.s1 < 0 && (h.s1 += 1),
                    h.s2 -= x(n),
                    h.s2 < 0 && (h.s2 += 1),
                    x = null
            }
            function p(n, h) {
                return h.c = n.c,
                    h.s0 = n.s0,
                    h.s1 = n.s1,
                    h.s2 = n.s2,
                    h
            }
            function _(n, h) {
                var x = new f(n)
                    , g = h && h.state
                    , m = x.next;
                return m.int32 = function () {
                    return x.next() * 4294967296 | 0
                }
                    ,
                    m.double = function () {
                        return m() + (m() * 2097152 | 0) * 11102230246251565e-32
                    }
                    ,
                    m.quick = m,
                    g && (typeof g == "object" && p(g, x),
                        m.state = function () {
                            return p(x, {})
                        }
                    ),
                    m
            }
            function v() {
                var n = 4022871197
                    , h = function (x) {
                        x = String(x);
                        for (var g = 0; g < x.length; g++) {
                            n += x.charCodeAt(g);
                            var m = .02519603282416938 * n;
                            n = m >>> 0,
                                m -= n,
                                m *= n,
                                n = m >>> 0,
                                m -= n,
                                n += m * 4294967296
                        }
                        return (n >>> 0) * 23283064365386963e-26
                    };
                return h
            }
            i && i.exports ? i.exports = _ : u && u.amd ? u(function () {
                return _
            }) : this.alea = _
        }
        )(d, typeof a == "object" && a, typeof define == "function" && define)
    }
    )
    , ts = ra((d, a) => {
        (function (c, i, u) {
            function f(v) {
                var n = this
                    , h = "";
                n.x = 0,
                    n.y = 0,
                    n.z = 0,
                    n.w = 0,
                    n.next = function () {
                        var g = n.x ^ n.x << 11;
                        return n.x = n.y,
                            n.y = n.z,
                            n.z = n.w,
                            n.w ^= n.w >>> 19 ^ g ^ g >>> 8
                    }
                    ,
                    v === (v | 0) ? n.x = v : h += v;
                for (var x = 0; x < h.length + 64; x++)
                    n.x ^= h.charCodeAt(x) | 0,
                        n.next()
            }
            function p(v, n) {
                return n.x = v.x,
                    n.y = v.y,
                    n.z = v.z,
                    n.w = v.w,
                    n
            }
            function _(v, n) {
                var h = new f(v)
                    , x = n && n.state
                    , g = function () {
                        return (h.next() >>> 0) / 4294967296
                    };
                return g.double = function () {
                    do
                        var m = h.next() >>> 11
                            , y = (h.next() >>> 0) / 4294967296
                            , E = (m + y) / (1 << 21);
                    while (E === 0);
                    return E
                }
                    ,
                    g.int32 = h.next,
                    g.quick = g,
                    x && (typeof x == "object" && p(x, h),
                        g.state = function () {
                            return p(h, {})
                        }
                    ),
                    g
            }
            i && i.exports ? i.exports = _ : u && u.amd ? u(function () {
                return _
            }) : this.xor128 = _
        }
        )(d, typeof a == "object" && a, typeof define == "function" && define)
    }
    )
    , rs = ra((d, a) => {
        (function (c, i, u) {
            function f(v) {
                var n = this
                    , h = "";
                n.next = function () {
                    var g = n.x ^ n.x >>> 2;
                    return n.x = n.y,
                        n.y = n.z,
                        n.z = n.w,
                        n.w = n.v,
                        (n.d = n.d + 362437 | 0) + (n.v = n.v ^ n.v << 4 ^ (g ^ g << 1)) | 0
                }
                    ,
                    n.x = 0,
                    n.y = 0,
                    n.z = 0,
                    n.w = 0,
                    n.v = 0,
                    v === (v | 0) ? n.x = v : h += v;
                for (var x = 0; x < h.length + 64; x++)
                    n.x ^= h.charCodeAt(x) | 0,
                        x == h.length && (n.d = n.x << 10 ^ n.x >>> 4),
                        n.next()
            }
            function p(v, n) {
                return n.x = v.x,
                    n.y = v.y,
                    n.z = v.z,
                    n.w = v.w,
                    n.v = v.v,
                    n.d = v.d,
                    n
            }
            function _(v, n) {
                var h = new f(v)
                    , x = n && n.state
                    , g = function () {
                        return (h.next() >>> 0) / 4294967296
                    };
                return g.double = function () {
                    do
                        var m = h.next() >>> 11
                            , y = (h.next() >>> 0) / 4294967296
                            , E = (m + y) / (1 << 21);
                    while (E === 0);
                    return E
                }
                    ,
                    g.int32 = h.next,
                    g.quick = g,
                    x && (typeof x == "object" && p(x, h),
                        g.state = function () {
                            return p(h, {})
                        }
                    ),
                    g
            }
            i && i.exports ? i.exports = _ : u && u.amd ? u(function () {
                return _
            }) : this.xorwow = _
        }
        )(d, typeof a == "object" && a, typeof define == "function" && define)
    }
    )
    , as = ra((d, a) => {
        (function (c, i, u) {
            function f(v) {
                var n = this;
                n.next = function () {
                    var x = n.x, g = n.i, m, y;
                    return m = x[g],
                        m ^= m >>> 7,
                        y = m ^ m << 24,
                        m = x[g + 1 & 7],
                        y ^= m ^ m >>> 10,
                        m = x[g + 3 & 7],
                        y ^= m ^ m >>> 3,
                        m = x[g + 4 & 7],
                        y ^= m ^ m << 7,
                        m = x[g + 7 & 7],
                        m = m ^ m << 13,
                        y ^= m ^ m << 9,
                        x[g] = y,
                        n.i = g + 1 & 7,
                        y
                }
                    ;
                function h(x, g) {
                    var m, y = [];
                    if (g === (g | 0))
                        y[0] = g;
                    else
                        for (g = "" + g,
                            m = 0; m < g.length; ++m)
                            y[m & 7] = y[m & 7] << 15 ^ g.charCodeAt(m) + y[m + 1 & 7] << 13;
                    for (; y.length < 8;)
                        y.push(0);
                    for (m = 0; m < 8 && y[m] === 0; ++m)
                        ;
                    for (m == 8 ? y[7] = -1 : y[m],
                        x.x = y,
                        x.i = 0,
                        m = 256; m > 0; --m)
                        x.next()
                }
                h(n, v)
            }
            function p(v, n) {
                return n.x = v.x.slice(),
                    n.i = v.i,
                    n
            }
            function _(v, n) {
                v == null && (v = +new Date);
                var h = new f(v)
                    , x = n && n.state
                    , g = function () {
                        return (h.next() >>> 0) / 4294967296
                    };
                return g.double = function () {
                    do
                        var m = h.next() >>> 11
                            , y = (h.next() >>> 0) / 4294967296
                            , E = (m + y) / (1 << 21);
                    while (E === 0);
                    return E
                }
                    ,
                    g.int32 = h.next,
                    g.quick = g,
                    x && (x.x && p(x, h),
                        g.state = function () {
                            return p(h, {})
                        }
                    ),
                    g
            }
            i && i.exports ? i.exports = _ : u && u.amd ? u(function () {
                return _
            }) : this.xorshift7 = _
        }
        )(d, typeof a == "object" && a, typeof define == "function" && define)
    }
    )
    , ls = ra((d, a) => {
        (function (c, i, u) {
            function f(v) {
                var n = this;
                n.next = function () {
                    var x = n.w, g = n.X, m = n.i, y, E;
                    return n.w = x = x + 1640531527 | 0,
                        E = g[m + 34 & 127],
                        y = g[m = m + 1 & 127],
                        E ^= E << 13,
                        y ^= y << 17,
                        E ^= E >>> 15,
                        y ^= y >>> 12,
                        E = g[m] = E ^ y,
                        n.i = m,
                        E + (x ^ x >>> 16) | 0
                }
                    ;
                function h(x, g) {
                    var m, y, E, A, S, j = [], L = 128;
                    for (g === (g | 0) ? (y = g,
                        g = null) : (g = g + "\0",
                            y = 0,
                            L = Math.max(L, g.length)),
                        E = 0,
                        A = -32; A < L; ++A)
                        g && (y ^= g.charCodeAt((A + 32) % g.length)),
                            A === 0 && (S = y),
                            y ^= y << 10,
                            y ^= y >>> 15,
                            y ^= y << 4,
                            y ^= y >>> 13,
                            A >= 0 && (S = S + 1640531527 | 0,
                                m = j[A & 127] ^= y + S,
                                E = m == 0 ? E + 1 : 0);
                    for (E >= 128 && (j[(g && g.length || 0) & 127] = -1),
                        E = 127,
                        A = 4 * 128; A > 0; --A)
                        y = j[E + 34 & 127],
                            m = j[E = E + 1 & 127],
                            y ^= y << 13,
                            m ^= m << 17,
                            y ^= y >>> 15,
                            m ^= m >>> 12,
                            j[E] = y ^ m;
                    x.w = S,
                        x.X = j,
                        x.i = E
                }
                h(n, v)
            }
            function p(v, n) {
                return n.i = v.i,
                    n.w = v.w,
                    n.X = v.X.slice(),
                    n
            }
            function _(v, n) {
                v == null && (v = +new Date);
                var h = new f(v)
                    , x = n && n.state
                    , g = function () {
                        return (h.next() >>> 0) / 4294967296
                    };
                return g.double = function () {
                    do
                        var m = h.next() >>> 11
                            , y = (h.next() >>> 0) / 4294967296
                            , E = (m + y) / (1 << 21);
                    while (E === 0);
                    return E
                }
                    ,
                    g.int32 = h.next,
                    g.quick = g,
                    x && (x.X && p(x, h),
                        g.state = function () {
                            return p(h, {})
                        }
                    ),
                    g
            }
            i && i.exports ? i.exports = _ : u && u.amd ? u(function () {
                return _
            }) : this.xor4096 = _
        }
        )(d, typeof a == "object" && a, typeof define == "function" && define)
    }
    )
    , ss = ra((d, a) => {
        (function (c, i, u) {
            function f(v) {
                var n = this
                    , h = "";
                n.next = function () {
                    var g = n.b
                        , m = n.c
                        , y = n.d
                        , E = n.a;
                    return g = g << 25 ^ g >>> 7 ^ m,
                        m = m - y | 0,
                        y = y << 24 ^ y >>> 8 ^ E,
                        E = E - g | 0,
                        n.b = g = g << 20 ^ g >>> 12 ^ m,
                        n.c = m = m - y | 0,
                        n.d = y << 16 ^ m >>> 16 ^ E,
                        n.a = E - g | 0
                }
                    ,
                    n.a = 0,
                    n.b = 0,
                    n.c = -1640531527,
                    n.d = 1367130551,
                    v === Math.floor(v) ? (n.a = v / 4294967296 | 0,
                        n.b = v | 0) : h += v;
                for (var x = 0; x < h.length + 20; x++)
                    n.b ^= h.charCodeAt(x) | 0,
                        n.next()
            }
            function p(v, n) {
                return n.a = v.a,
                    n.b = v.b,
                    n.c = v.c,
                    n.d = v.d,
                    n
            }
            function _(v, n) {
                var h = new f(v)
                    , x = n && n.state
                    , g = function () {
                        return (h.next() >>> 0) / 4294967296
                    };
                return g.double = function () {
                    do
                        var m = h.next() >>> 11
                            , y = (h.next() >>> 0) / 4294967296
                            , E = (m + y) / (1 << 21);
                    while (E === 0);
                    return E
                }
                    ,
                    g.int32 = h.next,
                    g.quick = g,
                    x && (typeof x == "object" && p(x, h),
                        g.state = function () {
                            return p(h, {})
                        }
                    ),
                    g
            }
            i && i.exports ? i.exports = _ : u && u.amd ? u(function () {
                return _
            }) : this.tychei = _
        }
        )(d, typeof a == "object" && a, typeof define == "function" && define)
    }
    )
    , os = ra((d, a) => {
        (function (c, i, u) {
            var f = 256, p = 6, _ = 52, v = "random", n = u.pow(f, p), h = u.pow(2, _), x = h * 2, g = f - 1, m;
            function y(I, D, C) {
                var V = [];
                D = D == !0 ? {
                    entropy: !0
                } : D || {};
                var M = j(S(D.entropy ? [I, P(i)] : I ?? L(), 3), V)
                    , G = new E(V)
                    , O = function () {
                        for (var z = G.g(p), B = n, T = 0; z < h;)
                            z = (z + T) * f,
                                B *= f,
                                T = G.g(1);
                        for (; z >= x;)
                            z /= 2,
                                B /= 2,
                                T >>>= 1;
                        return (z + T) / B
                    };
                return O.int32 = function () {
                    return G.g(4) | 0
                }
                    ,
                    O.quick = function () {
                        return G.g(4) / 4294967296
                    }
                    ,
                    O.double = O,
                    j(P(G.S), i),
                    (D.pass || C || function (z, B, T, N) {
                        return N && (N.S && A(N, G),
                            z.state = function () {
                                return A(G, {})
                            }
                        ),
                            T ? (u[v] = z,
                                B) : z
                    }
                    )(O, M, "global" in D ? D.global : this == u, D.state)
            }
            function E(I) {
                var D, C = I.length, V = this, M = 0, G = V.i = V.j = 0, O = V.S = [];
                for (C || (I = [C++]); M < f;)
                    O[M] = M++;
                for (M = 0; M < f; M++)
                    O[M] = O[G = g & G + I[M % C] + (D = O[M])],
                        O[G] = D;
                (V.g = function (z) {
                    for (var B, T = 0, N = V.i, q = V.j, R = V.S; z--;)
                        B = R[N = g & N + 1],
                            T = T * f + R[g & (R[N] = R[q = g & q + B]) + (R[q] = B)];
                    return V.i = N,
                        V.j = q,
                        T
                }
                )(f)
            }
            function A(I, D) {
                return D.i = I.i,
                    D.j = I.j,
                    D.S = I.S.slice(),
                    D
            }
            function S(I, D) {
                var C = [], V = typeof I, M;
                if (D && V == "object")
                    for (M in I)
                        try {
                            C.push(S(I[M], D - 1))
                        } catch { }
                return C.length ? C : V == "string" ? I : I + "\0"
            }
            function j(I, D) {
                for (var C = I + "", V, M = 0; M < C.length;)
                    D[g & M] = g & (V ^= D[g & M] * 19) + C.charCodeAt(M++);
                return P(D)
            }
            function L() {
                try {
                    var I;
                    return m && (I = m.randomBytes) ? I = I(f) : (I = new Uint8Array(f),
                        (c.crypto || c.msCrypto).getRandomValues(I)),
                        P(I)
                } catch {
                    var D = c.navigator
                        , C = D && D.plugins;
                    return [+new Date, c, C, c.screen, P(i)]
                }
            }
            function P(I) {
                return String.fromCharCode.apply(0, I)
            }
            if (j(u.random(), i),
                typeof a == "object" && a.exports) {
                a.exports = y;
                try {
                    m = Yl("crypto")
                } catch { }
            } else
                typeof define == "function" && define.amd ? define(function () {
                    return y
                }) : u["seed" + v] = y
        }
        )(typeof self < "u" ? self : d, [], Math)
    }
    )
    , is = ra((d, a) => {
        var c = es()
            , i = ts()
            , u = rs()
            , f = as()
            , p = ls()
            , _ = ss()
            , v = os();
        v.alea = c,
            v.xor128 = i,
            v.xorwow = u,
            v.xorshift7 = f,
            v.xor4096 = p,
            v.tychei = _,
            a.exports = v
    }
    )
    , Aa = {
        once: !1,
        responsive: {
            mobile: {
                enabled: !0,
                breakpoint: 425
            },
            tablet: {
                enabled: !0,
                breakpoint: 768
            },
            laptop: {
                enabled: !0,
                breakpoint: 1440
            },
            desktop: {
                enabled: !0,
                breakpoint: 2560
            }
        }
    }
    , Ia = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: .6
    }
    , kl = {
        fade: {
            preset: "fade",
            opacity: 0
        },
        slide: {
            preset: "slide",
            opacity: 0,
            x: -20
        },
        fly: {
            preset: "fly",
            opacity: 0,
            y: -20
        },
        spin: {
            preset: "spin",
            opacity: 0,
            rotate: -10
        },
        blur: {
            preset: "blur",
            opacity: 0,
            blur: 2
        },
        scale: {
            preset: "scale",
            opacity: 0,
            scale: .8
        }
    }
    , ns = {
        disable: !1,
        reset: !1,
        duration: 800,
        delay: 0,
        x: 0,
        y: 0,
        rotate: 0,
        blur: 0,
        scale: 1,
        ...kl.fade
    }
    , cs = "easeInOutCubic"
    , ds = {
        onRevealStart: () => null,
        onRevealEnd: () => null,
        onResetStart: () => null,
        onResetEnd: () => null,
        onMount: () => null,
        onUpdate: () => null,
        onDestroy: () => null
    }
    , Ca = {
        ...Ia,
        ...ns,
        ...ds,
        easing: cs
    }
    , us = /^(-?(0|([1-9]\d*))(px|%)?\s*){0,4}$/
    , gl = (d, a, c) => d >= a && d <= c
    , sa = d => d >= 0
    , fs = d => sa(d) && Number.isInteger(d)
    , vs = d => {
        let { mobile: a, tablet: c, laptop: i, desktop: u } = d;
        return a.breakpoint > c.breakpoint || c.breakpoint > i.breakpoint || i.breakpoint > u.breakpoint
    }
    , ps = d => {
        let a = Object.values(d).map(u => u.breakpoint)
            , c = vs(d)
            , i = a.every(u => fs(u));
        return !c && i
    }
    , hs = d => {
        let a = us.test(d.rootMargin)
            , c = gl(d.threshold, 0, 1)
            , i = gl(d.opacity, 0, 1)
            , u = sa(d.delay)
            , f = sa(d.duration)
            , p = a && c && i && u && f;
        if (d.transition === "blur") {
            let _ = d.transition === "blur" && sa(d.blur);
            p && (p = _)
        } else if (d.transition === "scale") {
            let _ = sa(d.scale);
            p && (p = _)
        }
        if (!p)
            throw new Error("Invalid options");
        return d
    }
    , Il = d => d.trim().replace(/[\n|\t]/g, "").replace(/\s(\s+)/g, " ")
    , gs = d => ({
        root: (d == null ? void 0 : d.root) ?? Ia.root,
        rootMargin: (d == null ? void 0 : d.rootMargin) ?? Ia.rootMargin,
        threshold: (d == null ? void 0 : d.threshold) ?? Ia.threshold
    })
    , ms = d => {
        let a = Object.fromEntries(Object.entries(d).filter(([, c]) => c !== void 0));
        return hs({
            ...Ca,
            ...kl[(d == null ? void 0 : d.preset) ?? Ca.preset],
            ...a
        })
    }
    ;
function Pa() { }
function xs(d, a) {
    return d != d ? a == a : d !== a || d && typeof d == "object" || typeof d == "function"
}
var aa = [];
function Dl(d, a = Pa) {
    let c, i = new Set;
    function u(_) {
        if (xs(d, _) && (d = _,
            c)) {
            let v = !aa.length;
            for (let n of i)
                n[1](),
                    aa.push(n, d);
            if (v) {
                for (let n = 0; n < aa.length; n += 2)
                    aa[n][0](aa[n + 1]);
                aa.length = 0
            }
        }
    }
    function f(_) {
        u(_(d))
    }
    function p(_, v = Pa) {
        let n = [_, v];
        return i.add(n),
            i.size === 1 && (c = a(u, f) || Pa),
            _(d),
            () => {
                i.delete(n),
                    i.size === 0 && c && (c(),
                        c = null)
            }
    }
    return {
        set: u,
        update: f,
        subscribe: p
    }
}
var ml = Dl(!1)
    , xl = Dl(!1)
    , bs = Kl(is(), 1)
    , ws = {
        linear: [0, 0, 1, 1],
        easeInSine: [.12, 0, .39, 0],
        easeOutSine: [.61, 1, .88, 1],
        easeInOutSine: [.37, 0, .63, 1],
        easeInQuad: [.11, 0, .5, 0],
        easeOutQuad: [.5, 1, .89, 1],
        easeInOutQuad: [.45, 0, .55, 1],
        easeInCubic: [.32, 0, .67, 0],
        easeOutCubic: [.33, 1, .68, 1],
        easeInOutCubic: [.65, 0, .35, 1],
        easeInQuart: [.5, 0, .75, 0],
        easeOutQuart: [.25, 1, .5, 1],
        easeInOutQuart: [.76, 0, .24, 1],
        easeInQuint: [.64, 0, .78, 0],
        easeOutQuint: [.22, 1, .36, 1],
        easeInOutQuint: [.83, 0, .17, 1],
        easeInExpo: [.7, 0, .84, 0],
        easeOutExpo: [.16, 1, .3, 1],
        easeInOutExpo: [.87, 0, .13, 1],
        easeInCirc: [.55, 0, 1, .45],
        easeOutCirc: [0, .55, .45, 1],
        easeInOutCirc: [.85, 0, .15, 1],
        easeInBack: [.36, 0, .66, -.56],
        easeOutBack: [.34, 1.56, .64, 1],
        easeInOutBack: [.68, -.6, .32, 1.6]
    }
    , _s = (d, a, c, i) => {
        let u = Math.min(...d.map(([, v]) => v.breakpoint))
            , f = Math.max(...d.map(([, v]) => v.breakpoint))
            , p = `(max-width: ${c}px)`;
        if (i === void 0 || a === u)
            return p;
        let _ = `(min-width: ${i[1].breakpoint + 1}px)`;
        return c === f ? _ : `${_} and ${p}`
    }
    , ys = d => {
        var i, u;
        let a = []
            , c = 0;
        for (; c < d.length;) {
            let f = (i = d[c]) == null ? void 0 : i[1];
            if (!f || !f.enabled) {
                c++;
                continue
            }
            let p = c
                , _ = ""
                , v = f;
            for (; p < d.length && v.enabled;) {
                let n = f.breakpoint
                    , h = v.breakpoint
                    , x = d[c - 1];
                _ = _s(d, n, h, x),
                    p++,
                    v = ((u = d[p]) == null ? void 0 : u[1]) || v
            }
            a.push(_),
                c = p
        }
        return a
    }
    , Es = d => {
        if (!ps(Aa.responsive))
            throw new Error("Cannot create media queries due to invalid breakpoints");
        let a = Object.entries(Aa.responsive)
            , c = a.every(([, f]) => f.enabled)
            , i = a.every(([, f]) => !f.enabled);
        if (c)
            return d;
        if (i)
            return "";
        let u = ys(a).join(", ");
        return Il(`
		@media ${u} {
			${d}
		}
	`)
    }
    , $s = () => {
        let d = document.createElement("style");
        d.setAttribute("type", "text/css"),
            Vl(d);
        let a = document.querySelector("head");
        a !== null && a.appendChild(d)
    }
    , bl = (d, a) => `sr__${a}__${d}`
    , ks = () => {
        let d = document.querySelectorAll('[data-action="reveal"]').length.toString()
            , a = (0,
                bs.default)(d)().toString().slice(2)
            , c = bl("transition", a)
            , i = bl("properties", a);
        return [c, i]
    }
    , Is = ({ opacity: d, x: a, y: c, rotate: i, scale: u, blur: f }) => `
    opacity: ${d};
    transform: translateX(${a}px) translateY(${c}px) rotate(${i}deg) scale(${u});
    filter: blur(${f}px);
  `
    , Ds = ({ className: d, duration: a, delay: c, easing: i }) => `
		.${d} {
			transition: all ${a / 1e3}s ${c / 1e3}s ${As(i)};
		}
	`
    , Vs = ({ className: d, options: a }) => {
        let c = Is(a);
        return `
		.${d} {
			${c}
		}
	`
    }
    , Ps = (d, a) => [d, Es(a).trim()].join(" ")
    , As = d => (c => `cubic-bezier(${c.join(", ")})`)(typeof d != "string" ? d : ws[d])
    , Vl = d => (d.setAttribute("data-action", "reveal"),
        d)
    , Cs = (d, a, c, i) => {
        var _;
        (_ = d.firstElementChild) == null || _.classList.remove("sr__hide"),
            Vl(d);
        let u = Vs({
            className: a,
            options: i
        })
            , f = Ds({
                className: c,
                duration: i.duration,
                delay: i.delay,
                easing: i.easing
            })
            , p = document.querySelector('style[data-action="reveal"]');
        if (p) {
            let v = Il([u, f].join(" "))
                , n = Ps(p.innerHTML, v);
            p.innerHTML = n,
                d.classList.add(a, c)
        }
        return d
    }
    , Ss = d => {
        var c;
        let a = document.createElement("div");
        return (c = d.parentElement) == null || c.insertBefore(a, d),
            a.appendChild(d),
            a
    }
    , Ms = (d, a, c) => {
        let { reset: i, duration: u, delay: f, threshold: p, onResetStart: _, onResetEnd: v, onRevealEnd: n } = a
            , h = gs()
            , x = u + f;
        return new IntersectionObserver((g, m) => {
            g.forEach(y => {
                i && !y.isIntersecting ? (_(d),
                    d.classList.add(c),
                    setTimeout(() => v(d), x)) : y.intersectionRatio >= p && (setTimeout(() => n(d), x),
                        d.classList.remove(c),
                        i || m.unobserve(d))
            }
            )
        }
            , h)
    }
    , Pl = (d, a = Ca) => {
        var E;
        let c = ms(a)
            , { disable: i, onRevealStart: u, onMount: f, onUpdate: p, onDestroy: _ } = c
            , v = Ss(d)
            , [n, h] = ks();
        f(v);
        let x = xl.subscribe(A => A);
        if (((E = window.performance.getEntriesByType("navigation")[0]) == null ? void 0 : E.type) === "reload" && xl.set(!0),
            i || Aa.once)
            return {};
        let g = !1
            , m = ml.subscribe(A => g = A);
        g || ($s(),
            ml.set(!0)),
            u(v),
            Cs(v, n, h, c);
        let y = Ms(v, c, n);
        return y.observe(v),
        {
            update() {
                p(v)
            },
            destroy() {
                _(v),
                    m(),
                    x(),
                    y.disconnect()
            }
        }
    }
    ;
function js(d) {
    let a, c, i, u, f, p, _, v, n, h, x, g, m, y, E, A, S, j, L, P, I, D, C, V, M, G, O, z, B, T, N, q, R, Tt, se, oe, K, Re, Se, re, Fe, Z, W, me, We, Me, pe, he, xe, ft, be, F, vt, Q, ae, tr, _t, le, we, je, pt, Ut, H, _e, Ze, Gt, et, Le, yt, tt, ie, rt, at, mr, lt, st, ne, ht, ot, St, rr, Et, ze, gt, Ne, Sr, xr, X, it, br, $t, Qe, Mt, jt, nt, ye, ct, qt, Ht, Xe, Ee, Rt, kt, ge, Ye, ce, Ft, Je, $e, Wt, Zt, mt, It, ar, Dt, dt, Lt, Oe, ke, de, Ie, xt, Be, wr, _r, Ke, Te, yr, cr;
    return {
        c() {
            a = l("div"),
                c = l("div"),
                i = l("div"),
                u = l("div"),
                f = l("img"),
                _ = b(),
                v = l("div"),
                n = l("img"),
                x = b(),
                g = l("div"),
                m = l("img"),
                E = b(),
                A = l("div"),
                S = l("img"),
                L = b(),
                P = l("div"),
                I = l("img"),
                C = b(),
                V = l("div"),
                M = l("img"),
                O = b(),
                z = l("div"),
                B = b(),
                T = l("div"),
                N = l("div"),
                q = l("h1"),
                R = $("A streamlined biolink experience"),
                Tt = b(),
                se = l("p"),
                oe = $("Streamline your online presence by linking all your preferred social media platforms to a single URL. Our platform provides the best experience for your audience to find you online."),
                K = b(),
                Re = l("a"),
                Se = $("Get Started "),
                re = l("span"),
                Fe = $("→"),
                Z = b(),
                W = l("div"),
                me = l("div"),
                We = l("div"),
                Me = l("img"),
                he = b(),
                xe = l("div"),
                ft = l("div"),
                be = l("div"),
                F = l("div"),
                vt = l("div"),
                Q = l("div"),
                ae = l("img"),
                _t = b(),
                le = l("div"),
                we = l("button"),
                je = l("span"),
                pt = $("lunacy"),
                Ut = b(),
                H = l("span"),
                _e = $("Owner @ Wanted.lol"),
                Ze = b(),
                Gt = l("div"),
                et = l("div"),
                Le = l("img"),
                tt = b(),
                ie = l("div"),
                rt = l("button"),
                at = l("span"),
                mr = $("zb"),
                lt = b(),
                st = l("span"),
                ne = b(),
                ht = l("div"),
                ot = l("div"),
                St = l("img"),
                Et = b(),
                ze = l("div"),
                gt = l("button"),
                Ne = l("span"),
                Sr = $("Karti"),
                xr = b(),
                X = l("span"),
                it = $("You're only in this world once, so make your life worth it."),
                br = b(),
                $t = l("div"),
                Qe = l("div"),
                Mt = l("img"),
                nt = b(),
                ye = l("div"),
                ct = l("button"),
                qt = l("span"),
                Ht = $("gang"),
                Xe = b(),
                Ee = l("span"),
                Rt = $("sticks and stones."),
                kt = b(),
                ge = l("div"),
                Ye = l("div"),
                ce = l("img"),
                Je = b(),
                $e = l("div"),
                Wt = l("button"),
                Zt = l("span"),
                mt = $("gov"),
                It = b(),
                ar = l("span"),
                Dt = b(),
                dt = l("div"),
                Lt = l("div"),
                Oe = l("img"),
                de = b(),
                Ie = l("div"),
                xt = l("button"),
                Be = l("span"),
                wr = $("archilinux"),
                _r = b(),
                Ke = l("span"),
                Te = $("i use arch btw"),
                this.h()
        },
        l(ue) {
            a = s(ue, "DIV", {
                class: !0
            });
            var De = o(a);
            c = s(De, "DIV", {
                class: !0
            });
            var Nr = o(c);
            i = s(Nr, "DIV", {
                class: !0
            });
            var Ve = o(i);
            u = s(Ve, "DIV", {
                class: !0
            });
            var fe = o(u);
            f = s(fe, "IMG", {
                src: !0,
                alt: !0
            }),
                fe.forEach(r),
                _ = w(Ve),
                v = s(Ve, "DIV", {
                    class: !0
                });
            var Vt = o(v);
            n = s(Vt, "IMG", {
                src: !0,
                alt: !0
            }),
                Vt.forEach(r),
                x = w(Ve),
                g = s(Ve, "DIV", {
                    class: !0
                });
            var Or = o(g);
            m = s(Or, "IMG", {
                src: !0,
                alt: !0
            }),
                Or.forEach(r),
                E = w(Ve),
                A = s(Ve, "DIV", {
                    class: !0
                });
            var Br = o(A);
            S = s(Br, "IMG", {
                src: !0,
                alt: !0
            }),
                Br.forEach(r),
                L = w(Ve),
                P = s(Ve, "DIV", {
                    class: !0
                });
            var ee = o(P);
            I = s(ee, "IMG", {
                src: !0,
                alt: !0
            }),
                ee.forEach(r),
                C = w(Ve),
                V = s(Ve, "DIV", {
                    class: !0
                });
            var Pt = o(V);
            M = s(Pt, "IMG", {
                src: !0,
                alt: !0
            }),
                Pt.forEach(r),
                Ve.forEach(r),
                Nr.forEach(r),
                O = w(De),
                z = s(De, "DIV", {
                    class: !0
                }),
                o(z).forEach(r),
                B = w(De),
                T = s(De, "DIV", {
                    class: !0
                });
            var zt = o(T);
            N = s(zt, "DIV", {
                class: !0
            });
            var Nt = o(N);
            q = s(Nt, "H1", {
                class: !0
            });
            var Er = o(q);
            R = k(Er, "A streamlined biolink experience"),
                Er.forEach(r),
                Tt = w(Nt),
                se = s(Nt, "P", {
                    class: !0
                });
            var Tr = o(se);
            oe = k(Tr, "Streamline your online presence by linking all your preferred social media platforms to a single URL. Our platform provides the best experience for your audience to find you online."),
                Tr.forEach(r),
                K = w(Nt),
                Re = s(Nt, "A", {
                    class: !0,
                    href: !0
                });
            var dr = o(Re);
            Se = k(dr, "Get Started "),
                re = s(dr, "SPAN", {
                    "data-svelte-h": !0
                });
            var Qt = o(re);
            Fe = k(Qt, "→"),
                Qt.forEach(r),
                dr.forEach(r),
                Nt.forEach(r),
                Z = w(zt),
                W = s(zt, "DIV", {
                    class: !0
                });
            var Ot = o(W);
            me = s(Ot, "DIV", {
                class: !0
            });
            var Ur = o(me);
            We = s(Ur, "DIV", {
                class: !0
            });
            var $r = o(We);
            Me = s($r, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }),
                $r.forEach(r),
                Ur.forEach(r),
                Ot.forEach(r),
                zt.forEach(r),
                De.forEach(r),
                he = w(ue),
                xe = s(ue, "DIV", {
                    class: !0
                });
            var kr = o(xe);
            ft = s(kr, "DIV", {
                class: !0
            });
            var Gr = o(ft);
            be = s(Gr, "DIV", {
                class: !0,
                style: !0
            });
            var At = o(be);
            F = s(At, "DIV", {
                class: !0
            });
            var ve = o(F);
            vt = s(ve, "DIV", {
                class: !0
            });
            var qr = o(vt);
            Q = s(qr, "DIV", {
                class: !0
            });
            var bt = o(Q);
            ae = s(bt, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }),
                _t = w(bt),
                le = s(bt, "DIV", {
                    class: !0
                });
            var Ir = o(le);
            we = s(Ir, "BUTTON", {
                "data-state": !0
            });
            var Hr = o(we);
            je = s(Hr, "SPAN", {
                class: !0
            });
            var Xt = o(je);
            pt = k(Xt, "lunacy"),
                Xt.forEach(r),
                Hr.forEach(r),
                Ut = w(Ir),
                H = s(Ir, "SPAN", {
                    class: !0
                });
            var lr = o(H);
            _e = k(lr, "Owner @ Wanted.lol"),
                lr.forEach(r),
                Ir.forEach(r),
                bt.forEach(r),
                qr.forEach(r),
                Ze = w(ve),
                Gt = s(ve, "DIV", {
                    class: !0
                });
            var Rr = o(Gt);
            et = s(Rr, "DIV", {
                class: !0
            });
            var Bt = o(et);
            Le = s(Bt, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }),
                tt = w(Bt),
                ie = s(Bt, "DIV", {
                    class: !0
                });
            var Dr = o(ie);
            rt = s(Dr, "BUTTON", {
                "data-state": !0
            });
            var Vr = o(rt);
            at = s(Vr, "SPAN", {
                class: !0
            });
            var Yt = o(at);
            mr = k(Yt, "zb"),
                Yt.forEach(r),
                Vr.forEach(r),
                lt = w(Dr),
                st = s(Dr, "SPAN", {
                    class: !0
                }),
                o(st).forEach(r),
                Dr.forEach(r),
                Bt.forEach(r),
                Rr.forEach(r),
                ne = w(ve),
                ht = s(ve, "DIV", {
                    class: !0
                });
            var sr = o(ht);
            ot = s(sr, "DIV", {
                class: !0
            });
            var ur = o(ot);
            St = s(ur, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }),
                Et = w(ur),
                ze = s(ur, "DIV", {
                    class: !0
                });
            var wt = o(ze);
            gt = s(wt, "BUTTON", {
                "data-state": !0
            });
            var Fr = o(gt);
            Ne = s(Fr, "SPAN", {
                class: !0
            });
            var Wr = o(Ne);
            Sr = k(Wr, "Karti"),
                Wr.forEach(r),
                Fr.forEach(r),
                xr = w(wt),
                X = s(wt, "SPAN", {
                    class: !0
                });
            var fr = o(X);
            it = k(fr, "You're only in this world once, so make your life worth it."),
                fr.forEach(r),
                wt.forEach(r),
                ur.forEach(r),
                sr.forEach(r),
                br = w(ve),
                $t = s(ve, "DIV", {
                    class: !0
                });
            var ut = o($t);
            Qe = s(ut, "DIV", {
                class: !0
            });
            var Pr = o(Qe);
            Mt = s(Pr, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }),
                nt = w(Pr),
                ye = s(Pr, "DIV", {
                    class: !0
                });
            var or = o(ye);
            ct = s(or, "BUTTON", {
                "data-state": !0
            });
            var Zr = o(ct);
            qt = s(Zr, "SPAN", {
                class: !0
            });
            var vr = o(qt);
            Ht = k(vr, "gang"),
                vr.forEach(r),
                Zr.forEach(r),
                Xe = w(or),
                Ee = s(or, "SPAN", {
                    class: !0
                });
            var U = o(Ee);
            Rt = k(U, "sticks and stones."),
                U.forEach(r),
                or.forEach(r),
                Pr.forEach(r),
                ut.forEach(r),
                kt = w(ve),
                ge = s(ve, "DIV", {
                    class: !0
                });
            var Jt = o(ge);
            Ye = s(Jt, "DIV", {
                class: !0
            });
            var Mr = o(Ye);
            ce = s(Mr, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }),
                Je = w(Mr),
                $e = s(Mr, "DIV", {
                    class: !0
                });
            var Ar = o($e);
            Wt = s(Ar, "BUTTON", {
                "data-state": !0
            });
            var jr = o(Wt);
            Zt = s(jr, "SPAN", {
                class: !0
            });
            var Qr = o(Zt);
            mt = k(Qr, "gov"),
                Qr.forEach(r),
                jr.forEach(r),
                It = w(Ar),
                ar = s(Ar, "SPAN", {
                    class: !0
                }),
                o(ar).forEach(r),
                Ar.forEach(r),
                Mr.forEach(r),
                Jt.forEach(r),
                Dt = w(ve),
                dt = s(ve, "DIV", {
                    class: !0
                });
            var pr = o(dt);
            Lt = s(pr, "DIV", {
                class: !0
            });
            var hr = o(Lt);
            Oe = s(hr, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }),
                de = w(hr),
                Ie = s(hr, "DIV", {
                    class: !0
                });
            var Lr = o(Ie);
            xt = s(Lr, "BUTTON", {
                "data-state": !0
            });
            var Kr = o(xt);
            Be = s(Kr, "SPAN", {
                class: !0
            });
            var Kt = o(Be);
            wr = k(Kt, "archilinux"),
                Kt.forEach(r),
                Kr.forEach(r),
                _r = w(Lr),
                Ke = s(Lr, "SPAN", {
                    class: !0
                });
            var ea = o(Ke);
            Te = k(ea, "i use arch btw"),
                ea.forEach(r),
                Lr.forEach(r),
                hr.forEach(r),
                pr.forEach(r),
                ve.forEach(r),
                At.forEach(r),
                Gr.forEach(r),
                kr.forEach(r),
                this.h()
        },
        h() {
            te(f.src, p = "/one-star.png") || t(f, "src", p),
                t(f, "alt", ""),
                t(u, "class", "absolute top-0 left-[-75px] w-[17px] zoominout"),
                te(n.src, h = "/one-star.png") || t(n, "src", h),
                t(n, "alt", ""),
                t(v, "class", "absolute top-0 right-[-75px] w-[17px] zoominout"),
                te(m.src, y = "/one-star.png") || t(m, "src", y),
                t(m, "alt", ""),
                t(g, "class", "absolute top-[300px] right-[350px] w-[17px] zoominout"),
                te(S.src, j = "/one-star.png") || t(S, "src", j),
                t(S, "alt", ""),
                t(A, "class", "absolute top-[400px] left-[350px] w-[17px] zoominout"),
                te(I.src, D = "/one-star.png") || t(I, "src", D),
                t(I, "alt", ""),
                t(P, "class", "absolute top-[400px] left-[-30px] w-[17px] zoominout"),
                te(M.src, G = "/one-star.png") || t(M, "src", G),
                t(M, "alt", ""),
                t(V, "class", "absolute top-[400px] right-[-25px] w-[17px] zoominout"),
                t(i, "class", "relative block z-[10]"),
                t(c, "class", "grid"),
                t(z, "class", "hero-background"),
                t(q, "class", "text-white mb-6 text-3xl font-extrabold sm:text-7xl xl:text-heading-1"),
                t(se, "class", "max-w-[500px] mb-9 font-medium text-neutral-400 md:text-lg"),
                t(re, "data-svelte-h", "svelte-1xb5tc"),
                t(Re, "class", "items-center justify-between inline-flex font-medium px-6 py-2.5 text-center text-white duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"),
                t(Re, "href", "/register"),
                t(N, "class", "flex flex-col justify-center items-start xl:pe-10"),
                te(Me.src, pe = "/lunacy.png") || t(Me, "src", pe),
                t(Me, "class", "max-w-full max-h-full"),
                t(Me, "alt", "mockup"),
                t(We, "class", "flex justify-center bg-base-200"),
                t(me, "class", "mockup-window bg-base-300 z-20 svelte-1rw2bd3"),
                t(W, "class", "w-full h-[20rem] sm:h-[30rem] lg:h-[35rem] flex items-end"),
                t(T, "class", "grid lg:grid-cols-2 gap-8 relative z-20 overflow-hidden"),
                t(a, "class", "max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-[7.5rem] md:pt-20 md:pb-24 relative"),
                te(ae.src, tr = "/lunacy.jpg") || t(ae, "src", tr),
                t(ae, "class", "rounded-full w-32 h-32 object-cover drop-shadow-2xl"),
                t(ae, "alt", "avatar"),
                t(je, "class", "text-2xl font-semibold text-center svelte-14wm1pi text-white"),
                t(we, "data-state", "closed"),
                t(H, "class", "font-medium text-center text-gray-500"),
                t(le, "class", "flex flex-col items-center"),
                t(Q, "class", "flex flex-col items-center space-y-2"),
                t(vt, "class", "drop-shadow-2xl max-w-[800px] w-full p-4 rounded-3xl mx-auto backdrop-blur-sm border border-white/5 bg-gray-950/10 "),
                te(Le.src, yt = "/zb.png") || t(Le, "src", yt),
                t(Le, "class", "rounded-full w-32 h-32 object-cover drop-shadow-2xl"),
                t(Le, "alt", "avatar"),
                t(at, "class", "text-2xl font-semibold text-center svelte-14wm1pi text-white"),
                t(rt, "data-state", "closed"),
                t(st, "class", "font-medium text-center text-gray-500"),
                t(ie, "class", "flex flex-col items-center"),
                t(et, "class", "flex flex-col items-center space-y-2"),
                t(Gt, "class", "drop-shadow-2xl max-w-[800px] w-full p-4 rounded-3xl mx-auto backdrop-blur-sm border border-white/5 bg-gray-950/10 "),
                te(St.src, rr = "/karti.jpg") || t(St, "src", rr),
                t(St, "class", "rounded-full w-32 h-32 object-cover drop-shadow-2xl"),
                t(St, "alt", "avatar"),
                t(Ne, "class", "text-2xl font-semibold text-center svelte-14wm1pi text-white"),
                t(gt, "data-state", "closed"),
                t(X, "class", "font-medium text-center text-gray-500"),
                t(ze, "class", "flex flex-col items-center"),
                t(ot, "class", "flex flex-col items-center space-y-2"),
                t(ht, "class", "drop-shadow-2xl max-w-[800px] w-full p-4 rounded-3xl mx-auto backdrop-blur-sm border border-white/5 bg-gray-950/10 "),
                te(Mt.src, jt = "/gang.gif") || t(Mt, "src", jt),
                t(Mt, "class", "rounded-full w-32 h-32 object-cover drop-shadow-2xl"),
                t(Mt, "alt", "avatar"),
                t(qt, "class", "text-2xl font-semibold text-center svelte-14wm1pi text-white"),
                t(ct, "data-state", "closed"),
                t(Ee, "class", "font-medium text-center text-gray-500"),
                t(ye, "class", "flex flex-col items-center"),
                t(Qe, "class", "flex flex-col items-center space-y-2"),
                t($t, "class", "drop-shadow-2xl max-w-[800px] w-full p-4 rounded-3xl mx-auto backdrop-blur-sm border border-white/5 bg-gray-950/10 "),
                te(ce.src, Ft = "/gov.webp") || t(ce, "src", Ft),
                t(ce, "class", "rounded-full w-32 h-32 object-cover drop-shadow-2xl"),
                t(ce, "alt", "avatar"),
                t(Zt, "class", "text-2xl font-semibold text-center svelte-14wm1pi text-white"),
                t(Wt, "data-state", "closed"),
                t(ar, "class", "font-medium text-center text-gray-500"),
                t($e, "class", "flex flex-col items-center"),
                t(Ye, "class", "flex flex-col items-center space-y-2"),
                t(ge, "class", "drop-shadow-2xl max-w-[800px] w-full p-4 rounded-3xl mx-auto backdrop-blur-sm border border-white/5 bg-gray-950/10 "),
                te(Oe.src, ke = "/archilinux.png") || t(Oe, "src", ke),
                t(Oe, "class", "rounded-full w-32 h-32 object-cover drop-shadow-2xl"),
                t(Oe, "alt", "avatar"),
                t(Be, "class", "text-2xl font-semibold text-center svelte-14wm1pi text-white"),
                t(xt, "data-state", "closed"),
                t(Ke, "class", "font-medium text-center text-gray-500"),
                t(Ie, "class", "flex flex-col items-center"),
                t(Lt, "class", "flex flex-col items-center space-y-2"),
                t(dt, "class", "drop-shadow-2xl max-w-[800px] w-full p-4 rounded-3xl mx-auto backdrop-blur-sm border border-white/5 bg-gray-950/10 "),
                t(F, "class", "grid col-start-2 gap-9 w-full h-[440px] animation-sliding-img-up-1"),
                t(be, "class", "grid grid-cols-2 gap-12 w-[60rem] sm:w-[80rem] lg:w-[50rem] h-[55rem] md:h-[90rem] lg:h-[75rem] origin-[50%_0%] flex"),
                er(be, "transform", "translate3d(7%, -2%, 0px) scale3d(0.9, 0.8, 1) rotateX(15deg) rotateY(-9deg) rotateZ(32deg)"),
                t(ft, "class", "flex"),
                t(xe, "class", "max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-20 md:pb-24 w-full flex justify-end gap-8 absolute z-10 overflow-hidden")
        },
        m(ue, De) {
            Ce(ue, a, De),
                e(a, c),
                e(c, i),
                e(i, u),
                e(u, f),
                e(i, _),
                e(i, v),
                e(v, n),
                e(i, x),
                e(i, g),
                e(g, m),
                e(i, E),
                e(i, A),
                e(A, S),
                e(i, L),
                e(i, P),
                e(P, I),
                e(i, C),
                e(i, V),
                e(V, M),
                e(a, O),
                e(a, z),
                e(a, B),
                e(a, T),
                e(T, N),
                e(N, q),
                e(q, R),
                e(N, Tt),
                e(N, se),
                e(se, oe),
                e(N, K),
                e(N, Re),
                e(Re, Se),
                e(Re, re),
                e(re, Fe),
                e(T, Z),
                e(T, W),
                e(W, me),
                e(me, We),
                e(We, Me),
                Ce(ue, he, De),
                Ce(ue, xe, De),
                e(xe, ft),
                e(ft, be),
                e(be, F),
                e(F, vt),
                e(vt, Q),
                e(Q, ae),
                e(Q, _t),
                e(Q, le),
                e(le, we),
                e(we, je),
                e(je, pt),
                e(le, Ut),
                e(le, H),
                e(H, _e),
                e(F, Ze),
                e(F, Gt),
                e(Gt, et),
                e(et, Le),
                e(et, tt),
                e(et, ie),
                e(ie, rt),
                e(rt, at),
                e(at, mr),
                e(ie, lt),
                e(ie, st),
                e(F, ne),
                e(F, ht),
                e(ht, ot),
                e(ot, St),
                e(ot, Et),
                e(ot, ze),
                e(ze, gt),
                e(gt, Ne),
                e(Ne, Sr),
                e(ze, xr),
                e(ze, X),
                e(X, it),
                e(F, br),
                e(F, $t),
                e($t, Qe),
                e(Qe, Mt),
                e(Qe, nt),
                e(Qe, ye),
                e(ye, ct),
                e(ct, qt),
                e(qt, Ht),
                e(ye, Xe),
                e(ye, Ee),
                e(Ee, Rt),
                e(F, kt),
                e(F, ge),
                e(ge, Ye),
                e(Ye, ce),
                e(Ye, Je),
                e(Ye, $e),
                e($e, Wt),
                e(Wt, Zt),
                e(Zt, mt),
                e($e, It),
                e($e, ar),
                e(F, Dt),
                e(F, dt),
                e(dt, Lt),
                e(Lt, Oe),
                e(Lt, de),
                e(Lt, Ie),
                e(Ie, xt),
                e(xt, Be),
                e(Be, wr),
                e(Ie, _r),
                e(Ie, Ke),
                e(Ke, Te),
                yr || (cr = yl(Pl.call(null, W, {
                    delay: 150,
                    easing: "easeOutCubic"
                })),
                    yr = !0)
        },
        p: gr,
        d(ue) {
            ue && r(a),
                ue && r(he),
                ue && r(xe),
                yr = !1,
                cr()
        }
    }
}
function Ls(d) {
    let a, c;
    return a = new oa({
        props: {
            id: "hero",
            $$slots: {
                default: [js]
            },
            $$scope: {
                ctx: d
            }
        }
    }),
    {
        c() {
            Ue(a.$$.fragment)
        },
        l(i) {
            Ge(a.$$.fragment, i)
        },
        m(i, u) {
            qe(a, i, u),
                c = !0
        },
        p(i, [u]) {
            const f = {};
            u & 2 && (f.$$scope = {
                dirty: u,
                ctx: i
            }),
                a.$set(f)
        },
        i(i) {
            c || (Pe(a.$$.fragment, i),
                c = !0)
        },
        o(i) {
            Ae(a.$$.fragment, i),
                c = !1
        },
        d(i) {
            He(a, i)
        }
    }
}
function zs(d, a, c) {
    let { useReveal: i = {} } = a;
    return d.$$set = u => {
        "useReveal" in u && c(0, i = u.useReveal)
    }
        ,
        [i]
}
class Ys extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, zs, Ls, Jr, {
                useReveal: 0
            })
    }
}
function Ns(d) {
    let a, c, i, u, f, p, _, v, n, h, x, g, m, y, E, A, S, j, L, P, I, D, C, V, M, G, O, z, B, T, N, q, R, Tt, se, oe, K, Re, Se, re, Fe, Z, W, me, We, Me, pe, he, xe, ft, be, F, vt, Q, ae, tr, _t, le, we, je, pt, Ut, H, _e, Ze, Gt, et, Le, yt, tt, ie, rt, at, mr, lt, st, ne, ht, ot, St, rr, Et, ze, gt, Ne, Sr, xr, X, it, br, $t, Qe, Mt, jt, nt, ye, ct, qt, Ht, Xe, Ee, Rt, kt, ge, Ye, ce, Ft, Je, $e, Wt, Zt, mt, It, ar, Dt, dt, Lt, Oe, ke, de, Ie, xt, Be, wr, _r, Ke, Te, yr;
    return {
        c() {
            a = l("div"),
                c = l("div"),
                i = l("h2"),
                u = $("All your links in one place"),
                f = b(),
                p = l("p"),
                _ = $("With wanted.lol you can create a single link that points to all your social media while being stylish in the process."),
                v = b(),
                n = l("div"),
                h = l("div"),
                x = l("h2"),
                g = $("Discord Integrated"),
                m = b(),
                y = l("p"),
                E = $("With Discord integration, wanted.lol allows you to seamlessly connect your discord account easily."),
                A = b(),
                S = l("div"),
                j = l("div"),
                L = l("div"),
                P = l("img"),
                D = b(),
                C = l("div"),
                V = l("div"),
                M = $("zbu"),
                G = b(),
                O = l("div"),
                z = $("online"),
                B = b(),
                T = l("div"),
                N = l("div"),
                q = l("img"),
                Tt = b(),
                se = l("div"),
                oe = l("div"),
                K = $("obbn"),
                Re = b(),
                Se = l("div"),
                re = $("offline"),
                Fe = b(),
                Z = l("div"),
                W = l("div"),
                me = l("img"),
                Me = b(),
                pe = l("div"),
                he = l("div"),
                xe = $("onbot"),
                ft = b(),
                be = l("div"),
                F = $("offline"),
                vt = b(),
                Q = l("div"),
                ae = l("h2"),
                tr = $("Profile Music"),
                _t = b(),
                le = l("p"),
                we = $("Enhance your bio link page with our Profile Music feature. Choose a song to reflect your style and make your page stand out. Set the perfect tone for everyone who visits!"),
                je = b(),
                pt = l("div"),
                Ut = l("div"),
                H = l("div"),
                _e = l("div"),
                Ze = l("label"),
                Gt = $("Music"),
                et = b(),
                Le = l("div"),
                yt = Y("svg"),
                tt = Y("g"),
                ie = Y("g"),
                rt = Y("rect"),
                at = Y("path"),
                mr = b(),
                lt = l("input"),
                st = b(),
                ne = l("div"),
                ht = l("h2"),
                ot = $("Customizable"),
                St = b(),
                rr = l("p"),
                Et = $("Discover endless customization options with our bio link website! Tailor your page to fit your unique style with a variety of themes, fonts, and color schemes. Add your personal touch with custom profile pictures, backgrounds and songs to create a standout online presence that truly represents you."),
                ze = b(),
                gt = l("div"),
                Ne = l("img"),
                xr = b(),
                X = l("div"),
                it = l("h2"),
                br = $("Social Connections"),
                $t = b(),
                Qe = l("p"),
                Mt = $("Effortlessly link all your social media profiles in one place, making it easier than ever for visitors to follow you across platforms. Streamline your online presence and grow your network with just a few clicks."),
                jt = b(),
                nt = l("div"),
                ye = l("div"),
                ct = l("div"),
                qt = b(),
                Ht = l("div"),
                Xe = l("div"),
                Ee = l("div"),
                Rt = l("div"),
                kt = l("div"),
                ge = Y("svg"),
                Ye = Y("path"),
                ce = Y("path"),
                Ft = b(),
                Je = l("div"),
                $e = l("h2"),
                Wt = $("Analytics Page"),
                Zt = b(),
                mt = l("p"),
                It = $("Unlock valuable insights with our Analytics feature! Track visits, clicks, and interactions on your bio link page to understand your audience better. Use this data to optimize your content and boost engagement, helping you make informed decisions to enhance your online presence."),
                ar = b(),
                Dt = l("div"),
                dt = l("img"),
                Oe = b(),
                ke = l("div"),
                de = l("h2"),
                Ie = $("Premium Plan"),
                xt = b(),
                Be = l("p"),
                wr = $("Elevate your experience with our Premium Plan! Unlock a suite of exclusive perks including advanced customization options, priority support, and access to premium-only features. Enhance your page's functionality and aesthetics, and enjoy detailed analytics to fine-tune your audience engagement. Experience the best our platform has to offer and make your bio link stand out!"),
                _r = b(),
                Ke = l("div"),
                Te = l("a"),
                yr = $("Upgrade Premium"),
                this.h()
        },
        l(cr) {
            a = s(cr, "DIV", {
                class: !0
            });
            var ue = o(a);
            c = s(ue, "DIV", {
                class: !0
            });
            var De = o(c);
            i = s(De, "H2", {
                class: !0
            });
            var Nr = o(i);
            u = k(Nr, "All your links in one place"),
                Nr.forEach(r),
                f = w(De),
                p = s(De, "P", {
                    class: !0
                });
            var Ve = o(p);
            _ = k(Ve, "With wanted.lol you can create a single link that points to all your social media while being stylish in the process."),
                Ve.forEach(r),
                v = w(De),
                n = s(De, "DIV", {
                    class: !0
                });
            var fe = o(n);
            h = s(fe, "DIV", {
                class: !0,
                "data-aos": !0
            });
            var Vt = o(h);
            x = s(Vt, "H2", {
                class: !0
            });
            var Or = o(x);
            g = k(Or, "Discord Integrated"),
                Or.forEach(r),
                m = w(Vt),
                y = s(Vt, "P", {
                    class: !0
                });
            var Br = o(y);
            E = k(Br, "With Discord integration, wanted.lol allows you to seamlessly connect your discord account easily."),
                Br.forEach(r),
                A = w(Vt),
                S = s(Vt, "DIV", {
                    class: !0
                });
            var ee = o(S);
            j = s(ee, "DIV", {
                class: !0
            });
            var Pt = o(j);
            L = s(Pt, "DIV", {});
            var zt = o(L);
            P = s(zt, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }),
                zt.forEach(r),
                D = w(Pt),
                C = s(Pt, "DIV", {
                    class: !0
                });
            var Nt = o(C);
            V = s(Nt, "DIV", {
                class: !0
            });
            var Er = o(V);
            M = k(Er, "zbu"),
                Er.forEach(r),
                G = w(Nt),
                O = s(Nt, "DIV", {
                    class: !0
                });
            var Tr = o(O);
            z = k(Tr, "online"),
                Tr.forEach(r),
                Nt.forEach(r),
                Pt.forEach(r),
                B = w(ee),
                T = s(ee, "DIV", {
                    class: !0
                });
            var dr = o(T);
            N = s(dr, "DIV", {});
            var Qt = o(N);
            q = s(Qt, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }),
                Qt.forEach(r),
                Tt = w(dr),
                se = s(dr, "DIV", {
                    class: !0
                });
            var Ot = o(se);
            oe = s(Ot, "DIV", {
                class: !0
            });
            var Ur = o(oe);
            K = k(Ur, "obbn"),
                Ur.forEach(r),
                Re = w(Ot),
                Se = s(Ot, "DIV", {
                    class: !0
                });
            var $r = o(Se);
            re = k($r, "offline"),
                $r.forEach(r),
                Ot.forEach(r),
                dr.forEach(r),
                Fe = w(ee),
                Z = s(ee, "DIV", {
                    class: !0
                });
            var kr = o(Z);
            W = s(kr, "DIV", {});
            var Gr = o(W);
            me = s(Gr, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }),
                Gr.forEach(r),
                Me = w(kr),
                pe = s(kr, "DIV", {
                    class: !0
                });
            var At = o(pe);
            he = s(At, "DIV", {
                class: !0
            });
            var ve = o(he);
            xe = k(ve, "onbot"),
                ve.forEach(r),
                ft = w(At),
                be = s(At, "DIV", {
                    class: !0
                });
            var qr = o(be);
            F = k(qr, "offline"),
                qr.forEach(r),
                At.forEach(r),
                kr.forEach(r),
                ee.forEach(r),
                Vt.forEach(r),
                vt = w(fe),
                Q = s(fe, "DIV", {
                    class: !0,
                    "data-aos": !0
                });
            var bt = o(Q);
            ae = s(bt, "H2", {
                class: !0
            });
            var Ir = o(ae);
            tr = k(Ir, "Profile Music"),
                Ir.forEach(r),
                _t = w(bt),
                le = s(bt, "P", {
                    class: !0
                });
            var Hr = o(le);
            we = k(Hr, "Enhance your bio link page with our Profile Music feature. Choose a song to reflect your style and make your page stand out. Set the perfect tone for everyone who visits!"),
                Hr.forEach(r),
                je = w(bt),
                pt = s(bt, "DIV", {
                    class: !0
                });
            var Xt = o(pt);
            Ut = s(Xt, "DIV", {
                class: !0
            });
            var lr = o(Ut);
            H = s(lr, "DIV", {
                class: !0
            });
            var Rr = o(H);
            _e = s(Rr, "DIV", {
                class: !0
            });
            var Bt = o(_e);
            Ze = s(Bt, "LABEL", {
                class: !0,
                for: !0
            });
            var Dr = o(Ze);
            Gt = k(Dr, "Music"),
                Dr.forEach(r),
                et = w(Bt),
                Le = s(Bt, "DIV", {
                    class: !0
                });
            var Vr = o(Le);
            yt = J(Vr, "svg", {
                xmlns: !0,
                class: !0,
                viewBox: !0,
                id: !0
            });
            var Yt = o(yt);
            tt = J(Yt, "g", {});
            var sr = o(tt);
            ie = J(sr, "g", {});
            var ur = o(ie);
            rt = J(ur, "rect", {
                width: !0,
                height: !0,
                opacity: !0
            }),
                o(rt).forEach(r),
                at = J(ur, "path", {
                    d: !0
                }),
                o(at).forEach(r),
                ur.forEach(r),
                sr.forEach(r),
                Yt.forEach(r),
                mr = w(Vr),
                lt = s(Vr, "INPUT", {
                    class: !0,
                    placeholder: !0,
                    type: !0,
                    name: !0,
                    id: !0,
                    accept: !0
                }),
                Vr.forEach(r),
                Bt.forEach(r),
                Rr.forEach(r),
                lr.forEach(r),
                Xt.forEach(r),
                bt.forEach(r),
                st = w(fe),
                ne = s(fe, "DIV", {
                    class: !0,
                    "data-aos": !0
                });
            var wt = o(ne);
            ht = s(wt, "H2", {
                class: !0
            });
            var Fr = o(ht);
            ot = k(Fr, "Customizable"),
                Fr.forEach(r),
                St = w(wt),
                rr = s(wt, "P", {
                    class: !0
                });
            var Wr = o(rr);
            Et = k(Wr, "Discover endless customization options with our bio link website! Tailor your page to fit your unique style with a variety of themes, fonts, and color schemes. Add your personal touch with custom profile pictures, backgrounds and songs to create a standout online presence that truly represents you."),
                Wr.forEach(r),
                ze = w(wt),
                gt = s(wt, "DIV", {
                    class: !0
                });
            var fr = o(gt);
            Ne = s(fr, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }),
                fr.forEach(r),
                wt.forEach(r),
                xr = w(fe),
                X = s(fe, "DIV", {
                    class: !0,
                    "data-aos": !0
                });
            var ut = o(X);
            it = s(ut, "H2", {
                class: !0
            });
            var Pr = o(it);
            br = k(Pr, "Social Connections"),
                Pr.forEach(r),
                $t = w(ut),
                Qe = s(ut, "P", {
                    class: !0
                });
            var or = o(Qe);
            Mt = k(or, "Effortlessly link all your social media profiles in one place, making it easier than ever for visitors to follow you across platforms. Streamline your online presence and grow your network with just a few clicks."),
                or.forEach(r),
                jt = w(ut),
                nt = s(ut, "DIV", {
                    class: !0
                });
            var Zr = o(nt);
            ye = s(Zr, "DIV", {
                class: !0
            });
            var vr = o(ye);
            ct = s(vr, "DIV", {
                class: !0
            }),
                o(ct).forEach(r),
                qt = w(vr),
                Ht = s(vr, "DIV", {
                    class: !0
                });
            var U = o(Ht);
            Xe = s(U, "DIV", {
                class: !0
            });
            var Jt = o(Xe);
            Ee = s(Jt, "DIV", {
                class: !0
            });
            var Mr = o(Ee);
            Rt = s(Mr, "DIV", {
                class: !0
            });
            var Ar = o(Rt);
            kt = s(Ar, "DIV", {
                class: !0
            });
            var jr = o(kt);
            ge = J(jr, "svg", {
                xmlns: !0,
                class: !0,
                "enable-background": !0,
                viewBox: !0,
                id: !0
            });
            var Qr = o(ge);
            Ye = J(Qr, "path", {
                fill: !0,
                d: !0
            }),
                o(Ye).forEach(r),
                ce = J(Qr, "path", {
                    fill: !0,
                    d: !0
                }),
                o(ce).forEach(r),
                Qr.forEach(r),
                jr.forEach(r),
                Ar.forEach(r),
                Mr.forEach(r),
                Jt.forEach(r),
                U.forEach(r),
                vr.forEach(r),
                Zr.forEach(r),
                ut.forEach(r),
                Ft = w(fe),
                Je = s(fe, "DIV", {
                    class: !0,
                    "data-aos": !0
                });
            var pr = o(Je);
            $e = s(pr, "H2", {
                class: !0
            });
            var hr = o($e);
            Wt = k(hr, "Analytics Page"),
                hr.forEach(r),
                Zt = w(pr),
                mt = s(pr, "P", {
                    class: !0
                });
            var Lr = o(mt);
            It = k(Lr, "Unlock valuable insights with our Analytics feature! Track visits, clicks, and interactions on your bio link page to understand your audience better. Use this data to optimize your content and boost engagement, helping you make informed decisions to enhance your online presence."),
                Lr.forEach(r),
                ar = w(pr),
                Dt = s(pr, "DIV", {
                    class: !0
                });
            var Kr = o(Dt);
            dt = s(Kr, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }),
                Kr.forEach(r),
                pr.forEach(r),
                Oe = w(fe),
                ke = s(fe, "DIV", {
                    class: !0,
                    "data-aos": !0
                });
            var Kt = o(ke);
            de = s(Kt, "H2", {
                class: !0
            });
            var ea = o(de);
            Ie = k(ea, "Premium Plan"),
                ea.forEach(r),
                xt = w(Kt),
                Be = s(Kt, "P", {
                    class: !0
                });
            var la = o(Be);
            wr = k(la, "Elevate your experience with our Premium Plan! Unlock a suite of exclusive perks including advanced customization options, priority support, and access to premium-only features. Enhance your page's functionality and aesthetics, and enjoy detailed analytics to fine-tune your audience engagement. Experience the best our platform has to offer and make your bio link stand out!"),
                la.forEach(r),
                _r = w(Kt),
                Ke = s(Kt, "DIV", {
                    class: !0
                });
            var ir = o(Ke);
            Te = s(ir, "A", {
                href: !0,
                title: !0,
                "aria-label": !0,
                class: !0
            });
            var Cr = o(Te);
            yr = k(Cr, "Upgrade Premium"),
                Cr.forEach(r),
                ir.forEach(r),
                Kt.forEach(r),
                fe.forEach(r),
                De.forEach(r),
                ue.forEach(r),
                this.h()
        },
        h() {
            t(i, "class", "text-2xl text-center font-bold md:text-5xl text-gray-800 dark:text-neutral-200 text-white"),
                t(p, "class", "text-center my-9 font-medium text-neutral-400 md:text-lg"),
                t(x, "class", "text-xl py-3 mt-6 tracking-tight font-medium text-white"),
                t(y, "class", "mt-4 text-sm text-zinc-400 text-pretty"),
                te(P.src, I = "/zbu.webp") || t(P, "src", I),
                t(P, "alt", "Avatar"),
                t(P, "class", "rounded-full h-12 w-12"),
                t(V, "class", "text-white font-semibold"),
                t(O, "class", "text-white"),
                t(C, "class", "flex flex-col"),
                t(j, "class", "mr-auto flex flex-row space-x-4 p-4 rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10"),
                te(q.src, R = "/obbn.webp") || t(q, "src", R),
                t(q, "alt", "Avatar"),
                t(q, "class", "rounded-full h-12 w-12"),
                t(oe, "class", "text-white font-semibold"),
                t(Se, "class", "text-white"),
                t(se, "class", "flex flex-col"),
                t(T, "class", "opacity-75 ml-auto flex flex-row space-x-4 p-4 rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10"),
                te(me.src, We = "/onbot.webp") || t(me, "src", We),
                t(me, "alt", "Avatar"),
                t(me, "class", "rounded-full h-12 w-12"),
                t(he, "class", "text-white font-semibold"),
                t(be, "class", "text-white"),
                t(pe, "class", "flex flex-col"),
                t(Z, "class", "opacity-50 mr-auto flex flex-row space-x-4 p-4 rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10"),
                t(S, "class", "mt-12 relative gap-5 flex flex-col"),
                t(h, "class", "overflow-hidden mt-12 h-[550px] rounded-3xl lg:mt-0 bg-gradientdown bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10 p-8 lg:p-20"),
                t(h, "data-aos", "zoom-out"),
                t(ae, "class", "text-xl py-3 mt-6 tracking-tight font-medium text-white"),
                t(le, "class", "mt-4 text-sm text-zinc-400 text-pretty"),
                t(Ze, "class", "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"),
                t(Ze, "for", "avatar"),
                t(rt, "width", "24"),
                t(rt, "height", "24"),
                t(rt, "opacity", "0"),
                t(at, "d", "M19 15V4a1 1 0 0 0-.38-.78 1 1 0 0 0-.84-.2l-9 2A1 1 0 0 0 8 6v8.34a3.49 3.49 0 1 0 2 3.18 4.36 4.36 0 0 0 0-.52V6.8l7-1.55v7.09a3.49 3.49 0 1 0 2 3.17 4.57 4.57 0 0 0 0-.51z"),
                t(yt, "xmlns", "http://www.w3.org/2000/svg"),
                t(yt, "class", "fill-current w-[20px] h-[20px]"),
                t(yt, "viewBox", "0 0 24 24"),
                t(yt, "id", "music"),
                t(lt, "class", "flex h-10 w-full rounded-md border border-white/5 bg-white/5 px-3 py-2 text-sm ring-offset-background file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 file:rounded-full file:border-0 file:text-foreground"),
                t(lt, "placeholder", "Upload Music"),
                t(lt, "type", "file"),
                t(lt, "name", "music"),
                t(lt, "id", "music"),
                t(lt, "accept", "audio/mp3"),
                lt.disabled = !0,
                t(Le, "class", "flex items-center justify-center space-x-3"),
                t(_e, "class", "grid w-full max-w-full items-center space-y-3 rounded-3xl p-8 border border-white/5 bg-white/5 backdrop-blur-md"),
                t(H, "class", "flex flex-col gap-5 justify-center px-4 py-16 bg-[#09090b]"),
                t(Ut, "class", "mockup-window border border-base-300 w-[95%] absolute bg-[#000]"),
                t(pt, "class", "mt-12 flex justify-center"),
                t(Q, "class", "overflow-hidden mt-12 h-[550px] rounded-3xl lg:mt-0 bg-gradientdown bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10 p-8 lg:p-20"),
                t(Q, "data-aos", "zoom-out"),
                t(ht, "class", "text-xl py-3 mt-6 tracking-tight font-medium text-white"),
                t(rr, "class", "mt-4 text-sm text-zinc-400 text-pretty"),
                t(Ne, "class", "rounded-3xl absolute ring-1 ring-white/10"),
                te(Ne.src, Sr = "/dashboard.png") || t(Ne, "src", Sr),
                t(Ne, "alt", ""),
                t(gt, "class", "mt-12"),
                t(ne, "class", "overflow-hidden mt-12 h-[550px] rounded-3xl lg:mt-0 bg-gradientdown bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10 p-8 lg:p-20"),
                t(ne, "data-aos", "zoom-out"),
                t(it, "class", "text-xl py-3 mt-6 tracking-tight font-medium text-white"),
                t(Qe, "class", "mt-4 text-sm text-zinc-400 text-pretty"),
                t(ct, "class", "camera"),
                t(Ye, "fill", "#fff"),
                t(Ye, "d", `M6.92,9.31c1.01-1.01,2.76-1.01,3.77,0c0.45,0.45,1.19,0.45,1.64,0c0.45-0.45,0.45-1.19,0-1.64
                        c-0.94-0.94-2.19-1.46-3.52-1.46S6.22,6.73,5.28,7.67L1.96,11c-1.94,1.94-1.94,5.1,0,7.05c0.94,0.94,2.19,1.46,3.52,1.46
                        S8.06,18.98,9,18.04l1.42-1.42c0.45-0.45,0.45-1.19,0-1.64c-0.45-0.45-1.19-0.45-1.64,0L7.36,16.4c-1.01,1.01-2.76,1.01-3.77,0
                        c-1.04-1.04-1.04-2.73,0-3.77L6.92,9.31z`),
                t(ce, "fill", "#fff"),
                t(ce, "d", `M14.72,12.32L18.04,9c1.94-1.94,1.94-5.1,0-7.05c-1.94-1.94-5.1-1.94-7.05,0L9.58,3.37
                        c-0.45,0.45-0.45,1.19,0,1.64c0.45,0.45,1.19,0.45,1.64,0l1.42-1.42c1.04-1.04,2.73-1.04,3.77,0c1.04,1.04,1.04,2.73,0,3.77
                        l-3.32,3.32c-1.01,1.01-2.76,1.01-3.77,0c-0.45-0.45-1.19-0.45-1.64,0c-0.45,0.45-0.45,1.19,0,1.64c0.94,0.94,2.19,1.46,3.52,1.46
                        S13.78,13.26,14.72,12.32z`),
                t(ge, "xmlns", "http://www.w3.org/2000/svg"),
                t(ge, "class", "mx-auto h-8 w-auto fill-white dark:contrast-100 dark:grayscale dark:invert"),
                t(ge, "enable-background", "new 0 0 20 20"),
                t(ge, "viewBox", "0 0 20 20"),
                t(ge, "id", "link"),
                t(kt, "class", "rounded-2xl border-2 border-white border-dashed bg-white/5 p-10 "),
                t(Rt, "class", "relative"),
                t(Ee, "class", "relative rounded-3xl border border-base-200 bg-[#09090b] p-2 mt-12 "),
                t(Xe, "class", "artboard bg-[#09090b] artboard-demo phone-1 flex justify-start"),
                t(Ht, "class", "display flex justify-center"),
                t(ye, "class", "mockup-phone"),
                t(nt, "class", "mt-12 flex justify-center"),
                t(X, "class", "overflow-hidden mt-12 h-[550px] rounded-3xl lg:mt-0 bg-gradientup bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10 p-8 lg:p-20 lg:col-span-1"),
                t(X, "data-aos", "zoom-out"),
                t($e, "class", "text-xl py-3 mt-6 tracking-tight font-medium text-white"),
                t(mt, "class", "mt-4 text-sm text-zinc-400 text-pretty"),
                t(dt, "class", "rounded-3xl ring-1 ring-white/10"),
                te(dt.src, Lt = "/analytics.png") || t(dt, "src", Lt),
                t(dt, "alt", ""),
                t(Dt, "class", "mt-12"),
                t(Je, "class", "overflow-hidden mt-12 h-[550px] rounded-3xl lg:mt-0 bg-gradientup bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10 p-8 lg:p-20 lg:col-span-2"),
                t(Je, "data-aos", "zoom-out"),
                t(de, "class", "text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white"),
                t(Be, "class", "mt-4 text-sm text-zinc-300 max-w-xl mx-auto"),
                t(Te, "href", "/dashboard/premium"),
                t(Te, "title", "link to your page"),
                t(Te, "aria-label", "your label"),
                t(Te, "class", "text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent"),
                t(Ke, "class", "mt-10 flex items-center justify-center gap-x-6"),
                t(ke, "class", "mt-12 h-[550px] lg:h-full rounded-3xl lg:mt-0 bg-gradientdown bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 text-center ring-white/10 p-8 lg:p-20 lg:col-span-full"),
                t(ke, "data-aos", "zoom-out"),
                t(n, "class", "grid grid-cols-1 gap-4 list-none mt-12 lg:gap-3 lg:grid-cols-3"),
                t(c, "class", "py-24 sm:py-32"),
                t(a, "class", "max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8")
        },
        m(cr, ue) {
            Ce(cr, a, ue),
                e(a, c),
                e(c, i),
                e(i, u),
                e(c, f),
                e(c, p),
                e(p, _),
                e(c, v),
                e(c, n),
                e(n, h),
                e(h, x),
                e(x, g),
                e(h, m),
                e(h, y),
                e(y, E),
                e(h, A),
                e(h, S),
                e(S, j),
                e(j, L),
                e(L, P),
                e(j, D),
                e(j, C),
                e(C, V),
                e(V, M),
                e(C, G),
                e(C, O),
                e(O, z),
                e(S, B),
                e(S, T),
                e(T, N),
                e(N, q),
                e(T, Tt),
                e(T, se),
                e(se, oe),
                e(oe, K),
                e(se, Re),
                e(se, Se),
                e(Se, re),
                e(S, Fe),
                e(S, Z),
                e(Z, W),
                e(W, me),
                e(Z, Me),
                e(Z, pe),
                e(pe, he),
                e(he, xe),
                e(pe, ft),
                e(pe, be),
                e(be, F),
                e(n, vt),
                e(n, Q),
                e(Q, ae),
                e(ae, tr),
                e(Q, _t),
                e(Q, le),
                e(le, we),
                e(Q, je),
                e(Q, pt),
                e(pt, Ut),
                e(Ut, H),
                e(H, _e),
                e(_e, Ze),
                e(Ze, Gt),
                e(_e, et),
                e(_e, Le),
                e(Le, yt),
                e(yt, tt),
                e(tt, ie),
                e(ie, rt),
                e(ie, at),
                e(Le, mr),
                e(Le, lt),
                e(n, st),
                e(n, ne),
                e(ne, ht),
                e(ht, ot),
                e(ne, St),
                e(ne, rr),
                e(rr, Et),
                e(ne, ze),
                e(ne, gt),
                e(gt, Ne),
                e(n, xr),
                e(n, X),
                e(X, it),
                e(it, br),
                e(X, $t),
                e(X, Qe),
                e(Qe, Mt),
                e(X, jt),
                e(X, nt),
                e(nt, ye),
                e(ye, ct),
                e(ye, qt),
                e(ye, Ht),
                e(Ht, Xe),
                e(Xe, Ee),
                e(Ee, Rt),
                e(Rt, kt),
                e(kt, ge),
                e(ge, Ye),
                e(ge, ce),
                e(n, Ft),
                e(n, Je),
                e(Je, $e),
                e($e, Wt),
                e(Je, Zt),
                e(Je, mt),
                e(mt, It),
                e(Je, ar),
                e(Je, Dt),
                e(Dt, dt),
                e(n, Oe),
                e(n, ke),
                e(ke, de),
                e(de, Ie),
                e(ke, xt),
                e(ke, Be),
                e(Be, wr),
                e(ke, _r),
                e(ke, Ke),
                e(Ke, Te),
                e(Te, yr)
        },
        p: gr,
        d(cr) {
            cr && r(a)
        }
    }
}
function Os(d) {
    let a, c;
    return a = new oa({
        props: {
            id: "features",
            $$slots: {
                default: [Ns]
            },
            $$scope: {
                ctx: d
            }
        }
    }),
    {
        c() {
            Ue(a.$$.fragment)
        },
        l(i) {
            Ge(a.$$.fragment, i)
        },
        m(i, u) {
            qe(a, i, u),
                c = !0
        },
        p(i, [u]) {
            const f = {};
            u & 1 && (f.$$scope = {
                dirty: u,
                ctx: i
            }),
                a.$set(f)
        },
        i(i) {
            c || (Pe(a.$$.fragment, i),
                c = !0)
        },
        o(i) {
            Ae(a.$$.fragment, i),
                c = !1
        },
        d(i) {
            He(a, i)
        }
    }
}
class Js extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, null, Os, Jr, {})
    }
}
function Bs(d) {
    let a, c, i, u, f, p, _, v, n, h, x, g, m, y, E, A, S, j, L, P, I, D, C, V, M, G, O, z, B, T, N, q, R, Tt, se, oe, K, Re, Se, re, Fe, Z, W, me, We, Me, pe, he, xe, ft, be, F, vt, Q, ae, tr, _t, le, we, je, pt, Ut, H, _e, Ze, Gt, et, Le, yt, tt, ie, rt, at, mr, lt, st, ne, ht, ot, St, rr, Et, ze, gt, Ne, Sr, xr, X, it, br, $t, Qe, Mt, jt, nt, ye, ct, qt, Ht, Xe, Ee, Rt, kt, ge, Ye, ce, Ft, Je, $e, Wt, Zt, mt, It, ar, Dt, dt, Lt, Oe, ke, de, Ie, xt, Be, wr, _r, Ke, Te, yr, cr, ue, De, Nr, Ve, fe, Vt, Or, Br, ee, Pt, zt, Nt, Er, Tr, dr, Qt, Ot, Ur, $r, kr, Gr, At, ve, qr, bt, Ir, Hr, Xt, lr, Rr, Bt, Dr, Vr, Yt, sr, ur, wt, Fr, Wr, fr, ut, Pr, or, Zr, vr;
    return Ze = new nr({}),
        ie = new nr({}),
        ne = new nr({}),
        ze = new nr({}),
        it = new nr({}),
        nt = new nr({}),
        Ee = new nr({}),
        Ft = new nr({}),
        zt = new nr({}),
        Ot = new nr({}),
        ve = new nr({}),
        lr = new nr({}),
        sr = new nr({}),
    {
        c() {
            a = l("div"),
                c = l("div"),
                i = Y("svg"),
                u = Y("g"),
                f = Y("path"),
                p = Y("path"),
                _ = Y("path"),
                v = Y("defs"),
                n = Y("clipPath"),
                h = Y("rect"),
                x = b(),
                g = l("div"),
                m = l("p"),
                y = $("Choose your plan"),
                E = b(),
                A = l("p"),
                S = $("Unlimited access to all of our features"),
                j = b(),
                L = l("div"),
                P = l("div"),
                I = l("div"),
                D = l("div"),
                C = l("div"),
                V = l("span"),
                M = l("img"),
                O = b(),
                z = l("span"),
                B = l("img"),
                N = b(),
                q = l("span"),
                R = l("img"),
                se = b(),
                oe = l("span"),
                K = l("img"),
                Se = b(),
                re = l("div"),
                Fe = l("div"),
                Z = Y("svg"),
                W = Y("path"),
                me = b(),
                We = l("p"),
                Me = $("Premium Plan"),
                pe = b(),
                he = l("p"),
                xe = l("span"),
                ft = $("$5"),
                be = b(),
                F = l("span"),
                vt = $("/lifetime"),
                Q = b(),
                ae = l("p"),
                tr = $("Unlock full customization and exclusive features for the ultimate experience."),
                _t = b(),
                le = l("div"),
                we = l("div"),
                je = l("p"),
                pt = $("Features"),
                Ut = b(),
                H = l("ul"),
                _e = l("li"),
                Ue(Ze.$$.fragment),
                Gt = b(),
                et = l("span"),
                Le = $("Page Alias"),
                yt = b(),
                tt = l("li"),
                Ue(ie.$$.fragment),
                rt = b(),
                at = l("span"),
                mr = $("Custom Fonts"),
                lt = b(),
                st = l("li"),
                Ue(ne.$$.fragment),
                ht = b(),
                ot = l("span"),
                St = $("Exclusive Discord Role and Perks"),
                rr = b(),
                Et = l("li"),
                Ue(ze.$$.fragment),
                gt = b(),
                Ne = l("span"),
                Sr = $("Custom Text Colors"),
                xr = b(),
                X = l("li"),
                Ue(it.$$.fragment),
                br = b(),
                $t = l("span"),
                Qe = $("Title Effects"),
                Mt = b(),
                jt = l("li"),
                Ue(nt.$$.fragment),
                ye = b(),
                ct = l("span"),
                qt = $("Background Effects"),
                Ht = b(),
                Xe = l("li"),
                Ue(Ee.$$.fragment),
                Rt = b(),
                kt = l("span"),
                ge = $("Cursor Effects"),
                Ye = b(),
                ce = l("li"),
                Ue(Ft.$$.fragment),
                Je = b(),
                $e = l("span"),
                Wt = $("Priority Support"),
                Zt = b(),
                mt = l("div"),
                It = l("a"),
                ar = $("Upgrade Premium "),
                Dt = l("span"),
                dt = $("→"),
                Lt = b(),
                Oe = l("div"),
                ke = l("div"),
                de = l("div"),
                Ie = l("div"),
                xt = l("div"),
                Be = l("p"),
                wr = $("Basic Plan"),
                _r = b(),
                Ke = l("p"),
                Te = l("span"),
                yr = $("FREE"),
                cr = b(),
                ue = l("p"),
                De = $("Start building your online presence at no cost."),
                Nr = b(),
                Ve = l("div"),
                fe = l("div"),
                Vt = l("p"),
                Or = $("Features"),
                Br = b(),
                ee = l("ul"),
                Pt = l("li"),
                Ue(zt.$$.fragment),
                Nt = b(),
                Er = l("span"),
                Tr = $("Music Intergrations"),
                dr = b(),
                Qt = l("li"),
                Ue(Ot.$$.fragment),
                Ur = b(),
                $r = l("span"),
                kr = $("Any Social Media/Website Links"),
                Gr = b(),
                At = l("li"),
                Ue(ve.$$.fragment),
                qr = b(),
                bt = l("span"),
                Ir = $("Discord Intergration"),
                Hr = b(),
                Xt = l("li"),
                Ue(lr.$$.fragment),
                Rr = b(),
                Bt = l("span"),
                Dr = $("Custom Page Titles"),
                Vr = b(),
                Yt = l("li"),
                Ue(sr.$$.fragment),
                ur = b(),
                wt = l("span"),
                Fr = $("Next Level Customisation"),
                Wr = b(),
                fr = l("div"),
                ut = l("a"),
                Pr = $("Get started "),
                or = l("span"),
                Zr = $("→"),
                this.h()
        },
        l(U) {
            a = s(U, "DIV", {
                class: !0
            });
            var Jt = o(a);
            c = s(Jt, "DIV", {
                class: !0
            });
            var Mr = o(c);
            i = J(Mr, "svg", {
                class: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var Ar = o(i);
            u = J(Ar, "g", {
                "clip-path": !0
            });
            var jr = o(u);
            f = J(jr, "path", {
                "data-color": !0,
                class: !0,
                d: !0,
                fill: !0
            }),
                o(f).forEach(r),
                p = J(jr, "path", {
                    "data-color": !0,
                    class: !0,
                    d: !0,
                    fill: !0
                }),
                o(p).forEach(r),
                _ = J(jr, "path", {
                    "data-color": !0,
                    class: !0,
                    d: !0,
                    fill: !0
                }),
                o(_).forEach(r),
                jr.forEach(r),
                v = J(Ar, "defs", {});
            var Qr = o(v);
            n = J(Qr, "clipPath", {
                id: !0
            });
            var pr = o(n);
            h = J(pr, "rect", {
                width: !0,
                height: !0,
                fill: !0
            }),
                o(h).forEach(r),
                pr.forEach(r),
                Qr.forEach(r),
                Ar.forEach(r),
                Mr.forEach(r),
                x = w(Jt),
                g = s(Jt, "DIV", {});
            var hr = o(g);
            m = s(hr, "P", {
                class: !0
            });
            var Lr = o(m);
            y = k(Lr, "Choose your plan"),
                Lr.forEach(r),
                E = w(hr),
                A = s(hr, "P", {
                    class: !0
                });
            var Kr = o(A);
            S = k(Kr, "Unlimited access to all of our features"),
                Kr.forEach(r),
                hr.forEach(r),
                j = w(Jt),
                L = s(Jt, "DIV", {
                    class: !0
                });
            var Kt = o(L);
            P = s(Kt, "DIV", {
                class: !0,
                "data-aos": !0,
                "data-aos-delay": !0
            });
            var ea = o(P);
            I = s(ea, "DIV", {
                class: !0
            });
            var la = o(I);
            D = s(la, "DIV", {
                class: !0
            });
            var ir = o(D);
            C = s(ir, "DIV", {
                class: !0
            });
            var Cr = o(C);
            V = s(Cr, "SPAN", {
                class: !0
            });
            var Sa = o(V);
            M = s(Sa, "IMG", {
                src: !0,
                alt: !0
            }),
                Sa.forEach(r),
                O = w(Cr),
                z = s(Cr, "SPAN", {
                    class: !0
                });
            var Ma = o(z);
            B = s(Ma, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }),
                Ma.forEach(r),
                N = w(Cr),
                q = s(Cr, "SPAN", {
                    class: !0
                });
            var ja = o(q);
            R = s(ja, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }),
                ja.forEach(r),
                se = w(Cr),
                oe = s(Cr, "SPAN", {
                    class: !0
                });
            var La = o(oe);
            K = s(La, "IMG", {
                src: !0,
                alt: !0,
                class: !0
            }),
                La.forEach(r),
                Cr.forEach(r),
                Se = w(ir),
                re = s(ir, "DIV", {
                    class: !0
                });
            var ia = o(re);
            Fe = s(ia, "DIV", {
                class: !0
            });
            var na = o(Fe);
            Z = J(na, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0,
                id: !0
            });
            var za = o(Z);
            W = J(za, "path", {
                d: !0,
                fill: !0,
                class: !0
            }),
                o(W).forEach(r),
                za.forEach(r),
                me = w(na),
                We = s(na, "P", {
                    class: !0
                });
            var Na = o(We);
            Me = k(Na, "Premium Plan"),
                Na.forEach(r),
                na.forEach(r),
                pe = w(ia),
                he = s(ia, "P", {});
            var ca = o(he);
            xe = s(ca, "SPAN", {
                class: !0
            });
            var Oa = o(xe);
            ft = k(Oa, "$5"),
                Oa.forEach(r),
                be = w(ca),
                F = s(ca, "SPAN", {
                    class: !0
                });
            var Ba = o(F);
            vt = k(Ba, "/lifetime"),
                Ba.forEach(r),
                ca.forEach(r),
                ia.forEach(r),
                Q = w(ir),
                ae = s(ir, "P", {
                    class: !0
                });
            var Ta = o(ae);
            tr = k(Ta, "Unlock full customization and exclusive features for the ultimate experience."),
                Ta.forEach(r),
                _t = w(ir),
                le = s(ir, "DIV", {});
            var Ua = o(le);
            we = s(Ua, "DIV", {});
            var da = o(we);
            je = s(da, "P", {
                class: !0
            });
            var Ga = o(je);
            pt = k(Ga, "Features"),
                Ga.forEach(r),
                Ut = w(da),
                H = s(da, "UL", {
                    class: !0,
                    role: !0
                });
            var Ct = o(H);
            _e = s(Ct, "LI", {
                class: !0
            });
            var ua = o(_e);
            Ge(Ze.$$.fragment, ua),
                Gt = w(ua),
                et = s(ua, "SPAN", {});
            var qa = o(et);
            Le = k(qa, "Page Alias"),
                qa.forEach(r),
                ua.forEach(r),
                yt = w(Ct),
                tt = s(Ct, "LI", {
                    class: !0
                });
            var fa = o(tt);
            Ge(ie.$$.fragment, fa),
                rt = w(fa),
                at = s(fa, "SPAN", {});
            var Ha = o(at);
            mr = k(Ha, "Custom Fonts"),
                Ha.forEach(r),
                fa.forEach(r),
                lt = w(Ct),
                st = s(Ct, "LI", {
                    class: !0
                });
            var va = o(st);
            Ge(ne.$$.fragment, va),
                ht = w(va),
                ot = s(va, "SPAN", {});
            var Ra = o(ot);
            St = k(Ra, "Exclusive Discord Role and Perks"),
                Ra.forEach(r),
                va.forEach(r),
                rr = w(Ct),
                Et = s(Ct, "LI", {
                    class: !0
                });
            var pa = o(Et);
            Ge(ze.$$.fragment, pa),
                gt = w(pa),
                Ne = s(pa, "SPAN", {});
            var Fa = o(Ne);
            Sr = k(Fa, "Custom Text Colors"),
                Fa.forEach(r),
                pa.forEach(r),
                xr = w(Ct),
                X = s(Ct, "LI", {
                    class: !0
                });
            var ha = o(X);
            Ge(it.$$.fragment, ha),
                br = w(ha),
                $t = s(ha, "SPAN", {});
            var Wa = o($t);
            Qe = k(Wa, "Title Effects"),
                Wa.forEach(r),
                ha.forEach(r),
                Mt = w(Ct),
                jt = s(Ct, "LI", {
                    class: !0
                });
            var ga = o(jt);
            Ge(nt.$$.fragment, ga),
                ye = w(ga),
                ct = s(ga, "SPAN", {});
            var Za = o(ct);
            qt = k(Za, "Background Effects"),
                Za.forEach(r),
                ga.forEach(r),
                Ht = w(Ct),
                Xe = s(Ct, "LI", {
                    class: !0
                });
            var ma = o(Xe);
            Ge(Ee.$$.fragment, ma),
                Rt = w(ma),
                kt = s(ma, "SPAN", {});
            var Qa = o(kt);
            ge = k(Qa, "Cursor Effects"),
                Qa.forEach(r),
                ma.forEach(r),
                Ye = w(Ct),
                ce = s(Ct, "LI", {
                    class: !0
                });
            var xa = o(ce);
            Ge(Ft.$$.fragment, xa),
                Je = w(xa),
                $e = s(xa, "SPAN", {});
            var Xa = o($e);
            Wt = k(Xa, "Priority Support"),
                Xa.forEach(r),
                xa.forEach(r),
                Ct.forEach(r),
                da.forEach(r),
                Ua.forEach(r),
                Zt = w(ir),
                mt = s(ir, "DIV", {
                    class: !0
                });
            var Ya = o(mt);
            It = s(Ya, "A", {
                class: !0,
                href: !0
            });
            var Da = o(It);
            ar = k(Da, "Upgrade Premium "),
                Dt = s(Da, "SPAN", {});
            var Ja = o(Dt);
            dt = k(Ja, "→"),
                Ja.forEach(r),
                Da.forEach(r),
                Ya.forEach(r),
                ir.forEach(r),
                la.forEach(r),
                ea.forEach(r),
                Lt = w(Kt),
                Oe = s(Kt, "DIV", {
                    class: !0,
                    "data-aos": !0,
                    "data-aos-delay": !0
                });
            var Ka = o(Oe);
            ke = s(Ka, "DIV", {
                class: !0
            });
            var el = o(ke);
            de = s(el, "DIV", {
                class: !0
            });
            var ta = o(de);
            Ie = s(ta, "DIV", {
                class: !0
            });
            var ba = o(Ie);
            xt = s(ba, "DIV", {
                class: !0
            });
            var tl = o(xt);
            Be = s(tl, "P", {
                class: !0
            });
            var rl = o(Be);
            wr = k(rl, "Basic Plan"),
                rl.forEach(r),
                tl.forEach(r),
                _r = w(ba),
                Ke = s(ba, "P", {});
            var al = o(Ke);
            Te = s(al, "SPAN", {
                class: !0
            });
            var ll = o(Te);
            yr = k(ll, "FREE"),
                ll.forEach(r),
                al.forEach(r),
                ba.forEach(r),
                cr = w(ta),
                ue = s(ta, "P", {
                    class: !0
                });
            var sl = o(ue);
            De = k(sl, "Start building your online presence at no cost."),
                sl.forEach(r),
                Nr = w(ta),
                Ve = s(ta, "DIV", {});
            var ol = o(Ve);
            fe = s(ol, "DIV", {});
            var wa = o(fe);
            Vt = s(wa, "P", {
                class: !0
            });
            var il = o(Vt);
            Or = k(il, "Features"),
                il.forEach(r),
                Br = w(wa),
                ee = s(wa, "UL", {
                    class: !0,
                    role: !0
                });
            var zr = o(ee);
            Pt = s(zr, "LI", {
                class: !0
            });
            var _a = o(Pt);
            Ge(zt.$$.fragment, _a),
                Nt = w(_a),
                Er = s(_a, "SPAN", {});
            var nl = o(Er);
            Tr = k(nl, "Music Intergrations"),
                nl.forEach(r),
                _a.forEach(r),
                dr = w(zr),
                Qt = s(zr, "LI", {
                    class: !0
                });
            var ya = o(Qt);
            Ge(Ot.$$.fragment, ya),
                Ur = w(ya),
                $r = s(ya, "SPAN", {});
            var cl = o($r);
            kr = k(cl, "Any Social Media/Website Links"),
                cl.forEach(r),
                ya.forEach(r),
                Gr = w(zr),
                At = s(zr, "LI", {
                    class: !0
                });
            var Ea = o(At);
            Ge(ve.$$.fragment, Ea),
                qr = w(Ea),
                bt = s(Ea, "SPAN", {});
            var dl = o(bt);
            Ir = k(dl, "Discord Intergration"),
                dl.forEach(r),
                Ea.forEach(r),
                Hr = w(zr),
                Xt = s(zr, "LI", {
                    class: !0
                });
            var $a = o(Xt);
            Ge(lr.$$.fragment, $a),
                Rr = w($a),
                Bt = s($a, "SPAN", {});
            var ul = o(Bt);
            Dr = k(ul, "Custom Page Titles"),
                ul.forEach(r),
                $a.forEach(r),
                Vr = w(zr),
                Yt = s(zr, "LI", {
                    class: !0
                });
            var ka = o(Yt);
            Ge(sr.$$.fragment, ka),
                ur = w(ka),
                wt = s(ka, "SPAN", {});
            var fl = o(wt);
            Fr = k(fl, "Next Level Customisation"),
                fl.forEach(r),
                ka.forEach(r),
                zr.forEach(r),
                wa.forEach(r),
                ol.forEach(r),
                Wr = w(ta),
                fr = s(ta, "DIV", {
                    class: !0
                });
            var vl = o(fr);
            ut = s(vl, "A", {
                class: !0,
                href: !0
            });
            var Va = o(ut);
            Pr = k(Va, "Get started "),
                or = s(Va, "SPAN", {});
            var pl = o(or);
            Zr = k(pl, "→"),
                pl.forEach(r),
                Va.forEach(r),
                vl.forEach(r),
                ta.forEach(r),
                el.forEach(r),
                Ka.forEach(r),
                Kt.forEach(r),
                Jt.forEach(r),
                this.h()
        },
        h() {
            t(f, "data-color", "purple"),
                t(f, "class", "fill-[#19004E] transition duration-500 data-[color=blue]:fill-blue-950 data-[color=cyan]:fill-cyan-950 data-[color=indigo]:fill-indigo-950 data-[color=lime]:fill-lime-950 data-[color=orange]:fill-orange-950/40 data-[color=pink]:fill-pink-950/40 data-[color=purple]:fill-purple-950/40 data-[color=red]:fill-red-950/40"),
                t(f, "d", "M795.5 572C1247.1 572 1365 190.667 1367.5 0H1552V1021H50V806C110.333 728 343.9 572 795.5 572Z"),
                t(f, "fill", "currentColor"),
                t(p, "data-color", "purple"),
                t(p, "class", "fill-[#19004E] transition duration-500 data-[color=blue]:fill-blue-950 data-[color=cyan]:fill-cyan-950 data-[color=indigo]:fill-indigo-950 data-[color=lime]:fill-lime-600/5 data-[color=orange]:fill-orange-950/40 data-[color=pink]:fill-pink-950/40 data-[color=purple]:fill-purple-950/40 data-[color=red]:fill-red-950/40"),
                t(p, "d", "M-73.1784 0L-563 316L-73.1784 632L418 316L-73.1784 0Z"),
                t(p, "fill", "currentColor"),
                t(_, "data-color", "purple"),
                t(_, "class", "opacity-60 transition duration-500 data-[color=blue]:fill-blue-500 data-[color=cyan]:fill-cyan-500 data-[color=indigo]:fill-[#916AFF] data-[color=lime]:fill-lime-500 data-[color=orange]:fill-orange-500 data-[color=pink]:fill-pink-500 data-[color=purple]:fill-purple-500 data-[color=red]:fill-red-500"),
                t(_, "d", "M1099.5 477C1235.9 453.8 1363.33 327.333 1410 267C1367.17 351 1257.8 530.1 1163 574.5C1068.2 618.9 750.167 623.667 603 620.5C711.667 582.333 963.1 500.2 1099.5 477Z"),
                t(_, "fill", "currentColor"),
                t(u, "clip-path", "url(#clip0_103_49)"),
                t(h, "width", "1440"),
                t(h, "height", "1024"),
                t(h, "fill", "white"),
                t(n, "id", "clip0_103_49"),
                t(i, "class", "w-full blur-3xl contrast-150"),
                t(i, "viewBox", "0 0 1440 1024"),
                t(i, "fill", "none"),
                t(i, "xmlns", "http://www.w3.org/2000/svg"),
                t(c, "class", "absolute z-[-1] -inset-x-8 hidden scale-y-150 opacity-60 dark:block sm:scale-y-100 lg:-top-56"),
                t(m, "class", "mt-8 text-2xl text-center font-semibold tracking-tight text-white lg:text-5xl"),
                t(A, "class", "max-w-xl mt-4 text-lg text-gray-400 text-center"),
                te(M.src, G = "/shape-02.svg") || t(M, "src", G),
                t(M, "alt", "shape"),
                t(V, "class", "absolute left-0 top-0"),
                te(B.src, T = "/blur-03.svg") || t(B, "src", T),
                t(B, "alt", "blur"),
                t(B, "class", "max-w-none"),
                t(z, "class", "absolute left-1/2 -translate-x-1/2 bottom-0"),
                te(R.src, Tt = "/blur-04.svg") || t(R, "src", Tt),
                t(R, "alt", "blur"),
                t(R, "class", "max-w-none"),
                t(q, "class", "absolute left-1/2 -translate-x-1/2 bottom-0"),
                te(K.src, Re = "/blur-05.svg") || t(K, "src", Re),
                t(K, "alt", "blur"),
                t(K, "class", "max-w-none"),
                t(oe, "class", "absolute left-1/2 -translate-x-1/2 bottom-0"),
                t(C, "class", "absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28"),
                t(W, "d", "M21,12.33s0,0,0,0a.31.31,0,0,0-.1-.15l-.05-.05L17.85,9.15A.47.47,0,0,0,17.5,9H7.5a.47.47,0,0,0-.35.15L4.2,12.1l0,.05a.31.31,0,0,0-.1.15s0,0,0,0a.09.09,0,0,0,0,.07.28.28,0,0,0,0,.09.4.4,0,0,0,.06.22.37.37,0,0,0,.07.12l0,0,7.92,8.91a.6.6,0,0,0,.25.2h0l.12,0h0a.54.54,0,0,0,.22-.05.44.44,0,0,0,.15-.12l0,0,8-8.94,0,0,.08-.12a.51.51,0,0,0,.05-.22.28.28,0,0,0,0-.09A.09.09,0,0,0,21,12.33ZM12.53,20l-2.3-6h4.55ZM10.77,10h3.46l.65,3H10.12ZM7.71,10h2l-.64,2.91-3.59-.72ZM5.87,13.28l3.25.65,2.05,5.32ZM22,6.53a.5.5,0,0,1-.48.5c-.16,0-1.53.1-1.61,1.34a.92.92,0,0,1,0,.23.5.5,0,0,1-.49.4h-.1a.5.5,0,0,1-.39-.58.28.28,0,0,1,0-.13A1.27,1.27,0,0,0,17.47,7,.5.5,0,0,1,17,6.46.48.48,0,0,1,17.49,6a2.27,2.27,0,0,1,2,1,2.22,2.22,0,0,1,.46-.41,2.78,2.78,0,0,1-1-2.06.5.5,0,1,1,1,0A1.64,1.64,0,0,0,21.52,6,.5.5,0,0,1,22,6.53ZM5.47,5A3.06,3.06,0,0,1,3.55,6,.5.5,0,0,1,3,5.55.5.5,0,0,1,3.44,5C3.6,5,5,4.78,5,3.49H5A.51.51,0,0,1,5.52,3,.5.5,0,0,1,6,3.51H6A1.4,1.4,0,0,0,7.51,5,.5.5,0,0,1,8,5.48.5.5,0,0,1,7.55,6C7.39,6,6,6.19,6,7.46A.5.5,0,0,1,5.53,8h0A.51.51,0,0,1,5,7.48,2.18,2.18,0,0,1,6,5.54a1.32,1.32,0,0,1-.28-.25A1.49,1.49,0,0,1,5.47,5Z"),
                t(W, "fill", "#ffffff"),
                t(W, "class", "color000000 svgShape"),
                t(Z, "class", "w-8 h-8 text-black rounded-full"),
                t(Z, "xmlns", "http://www.w3.org/2000/svg"),
                t(Z, "viewBox", "0 0 25 25"),
                t(Z, "id", "Diamond"),
                t(We, "class", "text-base font-medium text-white uppercase"),
                t(Fe, "class", "flex items-center gap-3"),
                t(xe, "class", "text-4xl font-bold text-white uppercase"),
                t(F, "class", "text-base font-medium text-white"),
                t(re, "class", "flex items-center justify-between"),
                t(ae, "class", "mt-8 text-sm font-medium text-white"),
                t(je, "class", "mt-4 text-lg font-medium text-white uppercase lg:mt-8"),
                t(_e, "class", "flex items-center gap-2"),
                t(tt, "class", "flex items-center gap-2"),
                t(st, "class", "flex items-center gap-2"),
                t(Et, "class", "flex items-center gap-2"),
                t(X, "class", "flex items-center gap-2"),
                t(jt, "class", "flex items-center gap-2"),
                t(Xe, "class", "flex items-center gap-2"),
                t(ce, "class", "flex items-center gap-2"),
                t(H, "class", "gap-4 mt-4 space-y-3 text-white list-none"),
                t(H, "role", "list"),
                t(It, "class", "items-center justify-between inline-flex w-full font-medium px-6 py-2.5 text-center text-black duration-200 bg-white rounded-xl h-14 hover:bg-white/20 hover:border-white hover:text-white focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"),
                t(It, "href", "/dashboard/premium"),
                t(mt, "class", "flex mt-6"),
                t(D, "class", "p-8 shadow-2xl rounded-3xl bg-black/50 backdrop-blur-3xl shadow-gray-900 ring-1 ring-white/10 overflow-hidden"),
                t(I, "class", "flex flex-col "),
                t(P, "class", "lg:order-last"),
                t(P, "data-aos", "fade-up"),
                t(P, "data-aos-delay", "200"),
                t(Be, "class", "text-base font-medium text-white uppercase"),
                t(xt, "class", "flex items-center gap-3"),
                t(Te, "class", "text-lg font-medium text-white uppercase lg:text-xl"),
                t(Ie, "class", "flex justify-between"),
                t(ue, "class", "mt-8 text-sm font-medium text-gray-300"),
                t(Vt, "class", "mt-4 text-lg font-medium text-white uppercase lg:mt-8"),
                t(Pt, "class", "flex items-center gap-2"),
                t(Qt, "class", "flex items-center gap-2"),
                t(At, "class", "flex items-center gap-2"),
                t(Xt, "class", "flex items-center gap-2"),
                t(Yt, "class", "flex items-center gap-2"),
                t(ee, "class", "order-last gap-4 mt-4 space-y-3 text-gray-300 list-none"),
                t(ee, "role", "list"),
                t(ut, "class", "items-center justify-between inline-flex w-full font-medium px-6 py-2.5 text-center text-white duration-200 bg-white/5 border border-white/5 rounded-xl h-14 hover:bg-white/10 hover:border-white/10 focus:outline-none focus-visible:outline-black text-base focus-visible:ring-black"),
                t(ut, "href", "/authorize/?target=register"),
                t(fr, "class", "flex mt-6"),
                t(de, "class", "p-8 rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/5 ring-1 ring-white/10 shadow-2xl"),
                t(ke, "class", "flex flex-col "),
                t(Oe, "class", "lg:order-first"),
                t(Oe, "data-aos", "fade-up"),
                t(Oe, "data-aos-delay", "100"),
                t(L, "class", "grid grid-cols-1 gap-8 mt-12 lg:ap-2 lg:grid-cols-2"),
                t(a, "class", "relative flex flex-col items-center justify-center max-w-6xl px-8 py-12 mx-auto lg:py-24")
        },
        m(U, Jt) {
            Ce(U, a, Jt),
                e(a, c),
                e(c, i),
                e(i, u),
                e(u, f),
                e(u, p),
                e(u, _),
                e(i, v),
                e(v, n),
                e(n, h),
                e(a, x),
                e(a, g),
                e(g, m),
                e(m, y),
                e(g, E),
                e(g, A),
                e(A, S),
                e(a, j),
                e(a, L),
                e(L, P),
                e(P, I),
                e(I, D),
                e(D, C),
                e(C, V),
                e(V, M),
                e(C, O),
                e(C, z),
                e(z, B),
                e(C, N),
                e(C, q),
                e(q, R),
                e(C, se),
                e(C, oe),
                e(oe, K),
                e(D, Se),
                e(D, re),
                e(re, Fe),
                e(Fe, Z),
                e(Z, W),
                e(Fe, me),
                e(Fe, We),
                e(We, Me),
                e(re, pe),
                e(re, he),
                e(he, xe),
                e(xe, ft),
                e(he, be),
                e(he, F),
                e(F, vt),
                e(D, Q),
                e(D, ae),
                e(ae, tr),
                e(D, _t),
                e(D, le),
                e(le, we),
                e(we, je),
                e(je, pt),
                e(we, Ut),
                e(we, H),
                e(H, _e),
                qe(Ze, _e, null),
                e(_e, Gt),
                e(_e, et),
                e(et, Le),
                e(H, yt),
                e(H, tt),
                qe(ie, tt, null),
                e(tt, rt),
                e(tt, at),
                e(at, mr),
                e(H, lt),
                e(H, st),
                qe(ne, st, null),
                e(st, ht),
                e(st, ot),
                e(ot, St),
                e(H, rr),
                e(H, Et),
                qe(ze, Et, null),
                e(Et, gt),
                e(Et, Ne),
                e(Ne, Sr),
                e(H, xr),
                e(H, X),
                qe(it, X, null),
                e(X, br),
                e(X, $t),
                e($t, Qe),
                e(H, Mt),
                e(H, jt),
                qe(nt, jt, null),
                e(jt, ye),
                e(jt, ct),
                e(ct, qt),
                e(H, Ht),
                e(H, Xe),
                qe(Ee, Xe, null),
                e(Xe, Rt),
                e(Xe, kt),
                e(kt, ge),
                e(H, Ye),
                e(H, ce),
                qe(Ft, ce, null),
                e(ce, Je),
                e(ce, $e),
                e($e, Wt),
                e(D, Zt),
                e(D, mt),
                e(mt, It),
                e(It, ar),
                e(It, Dt),
                e(Dt, dt),
                e(L, Lt),
                e(L, Oe),
                e(Oe, ke),
                e(ke, de),
                e(de, Ie),
                e(Ie, xt),
                e(xt, Be),
                e(Be, wr),
                e(Ie, _r),
                e(Ie, Ke),
                e(Ke, Te),
                e(Te, yr),
                e(de, cr),
                e(de, ue),
                e(ue, De),
                e(de, Nr),
                e(de, Ve),
                e(Ve, fe),
                e(fe, Vt),
                e(Vt, Or),
                e(fe, Br),
                e(fe, ee),
                e(ee, Pt),
                qe(zt, Pt, null),
                e(Pt, Nt),
                e(Pt, Er),
                e(Er, Tr),
                e(ee, dr),
                e(ee, Qt),
                qe(Ot, Qt, null),
                e(Qt, Ur),
                e(Qt, $r),
                e($r, kr),
                e(ee, Gr),
                e(ee, At),
                qe(ve, At, null),
                e(At, qr),
                e(At, bt),
                e(bt, Ir),
                e(ee, Hr),
                e(ee, Xt),
                qe(lr, Xt, null),
                e(Xt, Rr),
                e(Xt, Bt),
                e(Bt, Dr),
                e(ee, Vr),
                e(ee, Yt),
                qe(sr, Yt, null),
                e(Yt, ur),
                e(Yt, wt),
                e(wt, Fr),
                e(de, Wr),
                e(de, fr),
                e(fr, ut),
                e(ut, Pr),
                e(ut, or),
                e(or, Zr),
                vr = !0
        },
        p: gr,
        i(U) {
            vr || (Pe(Ze.$$.fragment, U),
                Pe(ie.$$.fragment, U),
                Pe(ne.$$.fragment, U),
                Pe(ze.$$.fragment, U),
                Pe(it.$$.fragment, U),
                Pe(nt.$$.fragment, U),
                Pe(Ee.$$.fragment, U),
                Pe(Ft.$$.fragment, U),
                Pe(zt.$$.fragment, U),
                Pe(Ot.$$.fragment, U),
                Pe(ve.$$.fragment, U),
                Pe(lr.$$.fragment, U),
                Pe(sr.$$.fragment, U),
                vr = !0)
        },
        o(U) {
            Ae(Ze.$$.fragment, U),
                Ae(ie.$$.fragment, U),
                Ae(ne.$$.fragment, U),
                Ae(ze.$$.fragment, U),
                Ae(it.$$.fragment, U),
                Ae(nt.$$.fragment, U),
                Ae(Ee.$$.fragment, U),
                Ae(Ft.$$.fragment, U),
                Ae(zt.$$.fragment, U),
                Ae(Ot.$$.fragment, U),
                Ae(ve.$$.fragment, U),
                Ae(lr.$$.fragment, U),
                Ae(sr.$$.fragment, U),
                vr = !1
        },
        d(U) {
            U && r(a),
                He(Ze),
                He(ie),
                He(ne),
                He(ze),
                He(it),
                He(nt),
                He(Ee),
                He(Ft),
                He(zt),
                He(Ot),
                He(ve),
                He(lr),
                He(sr)
        }
    }
}
function Ts(d) {
    let a, c;
    return a = new oa({
        props: {
            id: "pricing",
            $$slots: {
                default: [Bs]
            },
            $$scope: {
                ctx: d
            }
        }
    }),
    {
        c() {
            Ue(a.$$.fragment)
        },
        l(i) {
            Ge(a.$$.fragment, i)
        },
        m(i, u) {
            qe(a, i, u),
                c = !0
        },
        p(i, [u]) {
            const f = {};
            u & 1 && (f.$$scope = {
                dirty: u,
                ctx: i
            }),
                a.$set(f)
        },
        i(i) {
            c || (Pe(a.$$.fragment, i),
                c = !0)
        },
        o(i) {
            Ae(a.$$.fragment, i),
                c = !1
        },
        d(i) {
            He(a, i)
        }
    }
}
class Ks extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, null, Ts, Jr, {})
    }
}
function Us(d) {
    let a, c, i, u, f, p, _, v, n, h, x, g, m, y, E, A, S, j, L, P, I, D, C, V, M, G, O, z, B, T, N, q, R, Tt, se, oe, K, Re;
    return {
        c() {
            a = l("footer"),
                c = l("div"),
                i = l("div"),
                u = l("div"),
                f = l("div"),
                p = l("img"),
                v = b(),
                n = l("p"),
                h = l("span"),
                x = $("© 2024 Wanted.lol "),
                g = l("br"),
                m = $(" All rights reserved"),
                y = b(),
                E = l("div"),
                A = l("a"),
                S = Y("svg"),
                j = Y("path"),
                L = b(),
                P = l("a"),
                I = Y("svg"),
                D = Y("path"),
                C = b(),
                V = l("a"),
                M = Y("svg"),
                G = Y("path"),
                O = b(),
                z = l("div"),
                B = l("div"),
                T = l("div"),
                N = l("ul"),
                q = l("li"),
                R = l("a"),
                Tt = $("Login"),
                se = b(),
                oe = l("li"),
                K = l("a"),
                Re = $("Register"),
                this.h()
        },
        l(Se) {
            a = s(Se, "FOOTER", {
                class: !0
            });
            var re = o(a);
            c = s(re, "DIV", {
                class: !0
            });
            var Fe = o(c);
            i = s(Fe, "DIV", {
                class: !0
            });
            var Z = o(i);
            u = s(Z, "DIV", {
                class: !0
            });
            var W = o(u);
            f = s(W, "DIV", {
                class: !0
            });
            var me = o(f);
            p = s(me, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }),
                me.forEach(r),
                v = w(W),
                n = s(W, "P", {
                    class: !0
                });
            var We = o(n);
            h = s(We, "SPAN", {
                class: !0
            });
            var Me = o(h);
            x = k(Me, "© 2024 Wanted.lol "),
                g = s(Me, "BR", {}),
                m = k(Me, " All rights reserved"),
                Me.forEach(r),
                We.forEach(r),
                y = w(W),
                E = s(W, "DIV", {
                    class: !0
                });
            var pe = o(E);
            A = s(pe, "A", {
                class: !0,
                href: !0,
                target: !0
            });
            var he = o(A);
            S = J(he, "svg", {
                xmlns: !0,
                x: !0,
                y: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var xe = o(S);
            j = J(xe, "path", {
                fill: !0,
                d: !0
            }),
                o(j).forEach(r),
                xe.forEach(r),
                he.forEach(r),
                L = w(pe),
                P = s(pe, "A", {
                    class: !0,
                    href: !0,
                    target: !0
                });
            var ft = o(P);
            I = J(ft, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var be = o(I);
            D = J(be, "path", {
                fill: !0,
                d: !0
            }),
                o(D).forEach(r),
                be.forEach(r),
                ft.forEach(r),
                C = w(pe),
                V = s(pe, "A", {
                    class: !0,
                    href: !0,
                    target: !0
                });
            var F = o(V);
            M = J(F, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var vt = o(M);
            G = J(vt, "path", {
                fill: !0,
                d: !0
            }),
                o(G).forEach(r),
                vt.forEach(r),
                F.forEach(r),
                pe.forEach(r),
                W.forEach(r),
                O = w(Z),
                z = s(Z, "DIV", {
                    class: !0
                });
            var Q = o(z);
            B = s(Q, "DIV", {
                class: !0
            });
            var ae = o(B);
            T = s(ae, "DIV", {});
            var tr = o(T);
            N = s(tr, "UL", {
                role: !0,
                class: !0
            });
            var _t = o(N);
            q = s(_t, "LI", {});
            var le = o(q);
            R = s(le, "A", {
                href: !0,
                title: !0,
                "aria-label": !0,
                class: !0
            });
            var we = o(R);
            Tt = k(we, "Login"),
                we.forEach(r),
                le.forEach(r),
                se = w(_t),
                oe = s(_t, "LI", {});
            var je = o(oe);
            K = s(je, "A", {
                href: !0,
                title: !0,
                "aria-label": !0,
                class: !0
            });
            var pt = o(K);
            Re = k(pt, "Register"),
                pt.forEach(r),
                je.forEach(r),
                _t.forEach(r),
                tr.forEach(r),
                ae.forEach(r),
                Q.forEach(r),
                Z.forEach(r),
                Fe.forEach(r),
                re.forEach(r),
                this.h()
        },
        h() {
            t(p, "class", "h-8"),
                te(p.src, _ = "/logo.svg") || t(p, "src", _),
                t(p, "alt", "Logo"),
                t(f, "class", "inline-flex items-center gap-3"),
                t(h, "class", "mt-6 text-sm font-normal text-vulcan-300"),
                t(n, "class", "my-5 text-sm text-vulcan-300"),
                t(j, "fill", "currentColor"),
                t(j, "d", "M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"),
                t(S, "xmlns", "http://www.w3.org/2000/svg"),
                t(S, "x", "0px"),
                t(S, "y", "0px"),
                t(S, "width", "1em"),
                t(S, "height", "1em"),
                t(S, "viewBox", "0 0 50 50"),
                t(A, "class", "h-4 cursor-pointer align-middle text-xl hover:opacity-60"),
                t(A, "href", "https://www.instagram.com/wantedbio"),
                t(A, "target", "_blank"),
                t(D, "fill", "currentColor"),
                t(D, "d", "M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"),
                t(I, "xmlns", "http://www.w3.org/2000/svg"),
                t(I, "width", "1em"),
                t(I, "height", "1em"),
                t(I, "viewBox", "0 0 24 24"),
                t(P, "class", "h-4 cursor-pointer align-middle text-xl hover:opacity-60"),
                t(P, "href", "https://discord.gg/wanted"),
                t(P, "target", "_blank"),
                t(G, "fill", "currentColor"),
                t(G, "d", "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"),
                t(M, "xmlns", "http://www.w3.org/2000/svg"),
                t(M, "width", "1em"),
                t(M, "height", "1em"),
                t(M, "viewBox", "0 0 24 24"),
                t(V, "class", "h-4 cursor-pointer align-middle text-xl hover:opacity-60"),
                t(V, "href", "https://www.tiktok.com/@wantedbiolink"),
                t(V, "target", "_blank"),
                t(E, "class", "flex flex-row gap-[1.2rem]"),
                t(u, "class", "text-white"),
                t(R, "href", "/authorize?target=login"),
                t(R, "title", "link to  page"),
                t(R, "aria-label", "your label"),
                t(R, "class", "inline-flex items-center text-sm text-vulcan-300 hover:text-white"),
                t(K, "href", "/authorize?target=register"),
                t(K, "title", "link to  page"),
                t(K, "aria-label", "your label"),
                t(K, "class", "inline-flex items-center text-sm text-vulcan-300 hover:text-white"),
                t(N, "role", "list"),
                t(N, "class", "mt-4 space-y-2"),
                t(B, "class", "md:grid md:grid-cols-2 md:gap-8"),
                t(z, "class", "grid grid-cols-2 gap-8 xl:col-span-3"),
                t(i, "class", "xl:grid xl:grid-cols-4 xl:gap-8 space-y-12 lg:space-y-0"),
                t(c, "class", "relative px-8 py-12 mx-auto max-w-7xl md:px-12 lg:px-32 lg:py-24"),
                t(a, "class", "overflow-hidden relative border-t bg-vulcan-900 border-white/5 bg-black/20 backdrop-blur-3xl shadow-gray-900/5")
        },
        m(Se, re) {
            Ce(Se, a, re),
                e(a, c),
                e(c, i),
                e(i, u),
                e(u, f),
                e(f, p),
                e(u, v),
                e(u, n),
                e(n, h),
                e(h, x),
                e(h, g),
                e(h, m),
                e(u, y),
                e(u, E),
                e(E, A),
                e(A, S),
                e(S, j),
                e(E, L),
                e(E, P),
                e(P, I),
                e(I, D),
                e(E, C),
                e(E, V),
                e(V, M),
                e(M, G),
                e(i, O),
                e(i, z),
                e(z, B),
                e(B, T),
                e(T, N),
                e(N, q),
                e(q, R),
                e(R, Tt),
                e(N, se),
                e(N, oe),
                e(oe, K),
                e(K, Re)
        },
        p: gr,
        i: gr,
        o: gr,
        d(Se) {
            Se && r(a)
        }
    }
}
class eo extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, null, Us, Jr, {})
    }
}
function Gs(d) {
    let a, c = wl(d[0]) + "", i;
    return {
        c() {
            a = l("span"),
                i = $(c),
                this.h()
        },
        l(u) {
            a = s(u, "SPAN", {
                class: !0
            });
            var f = o(a);
            i = k(f, c),
                f.forEach(r),
                this.h()
        },
        h() {
            t(a, "class", "value")
        },
        m(u, f) {
            Ce(u, a, f),
                e(a, i)
        },
        p(u, [f]) {
            f & 1 && c !== (c = wl(u[0]) + "") && Ll(i, c)
        },
        i: gr,
        o: gr,
        d(u) {
            u && r(a)
        }
    }
}
function wl(d) {
    return d >= 1e9 ? (d / 1e9).toFixed(1) + "B" : d >= 1e6 ? (d / 1e6).toFixed(1) + "M" : d >= 1e3 ? (d / 1e3).toFixed(d >= 9900 ? 0 : 1) + "K" : d.toString()
}
function qs(d, a, c) {
    let { value: i = 0 } = a
        , { speed: u = 200 } = a
        , f = 0;
    return El(() => {
        const p = setInterval(() => {
            const _ = i / u;
            f < i ? c(0, f = Math.ceil(f + _)) : (c(0, f = i),
                clearInterval(p))
        }
            , 1)
    }
    ),
        d.$$set = p => {
            "value" in p && c(1, i = p.value),
                "speed" in p && c(2, u = p.speed)
        }
        ,
        [f, i, u]
}
class _l extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, qs, Gs, Jr, {
                value: 1,
                speed: 2
            })
    }
}
function Hs(d) {
    let a, c, i, u, f, p, _, v, n, h, x, g, m, y, E, A, S, j, L, P, I, D;
    return n = new _l({
        props: {
            value: 9e3,
            speed: 500
        }
    }),
        A = new _l({
            props: {
                value: 4e5,
                speed: 500
            }
        }),
    {
        c() {
            a = l("div"),
                c = l("div"),
                i = l("h2"),
                u = $("Join the thriving community at Wanted.lol"),
                f = b(),
                p = l("div"),
                _ = l("div"),
                v = l("p"),
                Ue(n.$$.fragment),
                h = b(),
                x = l("span"),
                g = $("Users Created"),
                m = b(),
                y = l("div"),
                E = l("p"),
                Ue(A.$$.fragment),
                S = b(),
                j = l("span"),
                L = $("Total Views"),
                this.h()
        },
        l(C) {
            a = s(C, "DIV", {
                class: !0
            });
            var V = o(a);
            c = s(V, "DIV", {
                class: !0
            });
            var M = o(c);
            i = s(M, "H2", {
                class: !0
            });
            var G = o(i);
            u = k(G, "Join the thriving community at Wanted.lol"),
                G.forEach(r),
                M.forEach(r),
                f = w(V),
                p = s(V, "DIV", {
                    class: !0,
                    style: !0
                });
            var O = o(p);
            _ = s(O, "DIV", {
                class: !0,
                style: !0
            });
            var z = o(_);
            v = s(z, "P", {
                class: !0,
                style: !0
            });
            var B = o(v);
            Ge(n.$$.fragment, B),
                B.forEach(r),
                h = w(z),
                x = s(z, "SPAN", {
                    class: !0
                });
            var T = o(x);
            g = k(T, "Users Created"),
                T.forEach(r),
                z.forEach(r),
                m = w(O),
                y = s(O, "DIV", {
                    class: !0,
                    style: !0
                });
            var N = o(y);
            E = s(N, "P", {
                class: !0,
                style: !0
            });
            var q = o(E);
            Ge(A.$$.fragment, q),
                q.forEach(r),
                S = w(N),
                j = s(N, "SPAN", {
                    class: !0
                });
            var R = o(j);
            L = k(R, "Total Views"),
                R.forEach(r),
                N.forEach(r),
                O.forEach(r),
                V.forEach(r),
                this.h()
        },
        h() {
            t(i, "class", "text-2xl font-bold md:text-5xl text-white"),
                t(c, "class", "max-w-2xl text-center"),
                t(v, "class", "text-left font-bold bg-clip-text flex items-center h-full text-[90px] sm:text-[250px] lg:text-[300px] xl:text-[400px]"),
                er(v, "font-weight", "800"),
                er(v, "letter-spacing", "-0.02em"),
                er(v, "background", "linear-gradient(300deg, #6306aa9d 0.01%, #ba9cff 50.01%, #6306aa9d 100%)text"),
                er(v, "-webkit-text-fill-color", "transparent"),
                t(x, "class", "absolute inset-0 w-full h-full flex items-center justify-center text-white font-semibold text-2xl sm:text-5xl"),
                t(_, "class", "relative "),
                er(_, "transform-origin", "left center"),
                er(_, "transform", "rotateY(55deg)"),
                t(E, "class", "text-left font-extrabold bg-clip-text h-full flex items-center text-[90px] sm:text-[250px] lg:text-[300px] xl:text-[400px] "),
                er(E, "font-weight", "800"),
                er(E, "letter-spacing", "-0.02em"),
                er(E, "background", "linear-gradient(90deg, #6306aa9d 0.01%, #ba9cff 50.01%, #6306aa9d 100%) text"),
                er(E, "-webkit-text-fill-color", "transparent"),
                t(j, "class", "absolute inset-0 w-full h-full flex items-center justify-center font-semibold text-white text-2xl sm:text-5xl"),
                t(y, "class", "absolute right-0 h-[350px]"),
                er(y, "transform-origin", "right center"),
                er(y, "transform", "rotateY(-55deg)"),
                t(p, "class", "flex relative w-full h-[350px] statistics"),
                er(p, "perspective", "900px"),
                t(a, "class", "max-w-[85rem] px-4 sm:px-6 lg:px-8 py-12 md:pt-20 md:pb-24 stats-bg z-30 flex flex-col justify-center items-center bg-[url('/hyperdrive.svg')] bg-no-repeat bg-center")
        },
        m(C, V) {
            Ce(C, a, V),
                e(a, c),
                e(c, i),
                e(i, u),
                e(a, f),
                e(a, p),
                e(p, _),
                e(_, v),
                qe(n, v, null),
                e(_, h),
                e(_, x),
                e(x, g),
                e(p, m),
                e(p, y),
                e(y, E),
                qe(A, E, null),
                e(y, S),
                e(y, j),
                e(j, L),
                P = !0,
                I || (D = yl(Pl.call(null, p, {
                    delay: 200,
                    easing: "easeOutCubic"
                })),
                    I = !0)
        },
        p: gr,
        i(C) {
            P || (Pe(n.$$.fragment, C),
                Pe(A.$$.fragment, C),
                P = !0)
        },
        o(C) {
            Ae(n.$$.fragment, C),
                Ae(A.$$.fragment, C),
                P = !1
        },
        d(C) {
            C && r(a),
                He(n),
                He(A),
                I = !1,
                D()
        }
    }
}
function Rs(d) {
    let a, c;
    return a = new oa({
        props: {
            id: "stats",
            $$slots: {
                default: [Hs]
            },
            $$scope: {
                ctx: d
            }
        }
    }),
    {
        c() {
            Ue(a.$$.fragment)
        },
        l(i) {
            Ge(a.$$.fragment, i)
        },
        m(i, u) {
            qe(a, i, u),
                c = !0
        },
        p(i, [u]) {
            const f = {};
            u & 2 && (f.$$scope = {
                dirty: u,
                ctx: i
            }),
                a.$set(f)
        },
        i(i) {
            c || (Pe(a.$$.fragment, i),
                c = !0)
        },
        o(i) {
            Ae(a.$$.fragment, i),
                c = !1
        },
        d(i) {
            He(a, i)
        }
    }
}
function Fs(d, a, c) {
    let { useReveal: i = {} } = a;
    return El(() => {
        const u = document.querySelector(".statistics");
        if (u) {
            const f = u.parentElement;
            f && (f.style.width = "100%")
        }
    }
    ),
        d.$$set = u => {
            "useReveal" in u && c(0, i = u.useReveal)
        }
        ,
        [i]
}
class to extends Xr {
    constructor(a) {
        super(),
            Yr(this, a, Fs, Rs, Jr, {
                useReveal: 0
            })
    }
}
export { Qs as C, Js as F, Xs as H, Ks as P, to as S, Ys as a, eo as b };

import { w as u } from "./index.84e14c28.js";
import { a as v } from "./paths.6c27e217.js";
const m = "1727263156645"
    , R = "sveltekit:snapshot"
    , y = "sveltekit:scroll"
    , I = "sveltekit:index"
    , f = {
        tap: 1,
        hover: 2,
        viewport: 3,
        eager: 4,
        off: -1,
        false: -1
    }
    , _ = location.origin;
function S(e) {
    let t = e.baseURI;
    if (!t) {
        const n = e.getElementsByTagName("base");
        t = n.length ? n[0].href : e.URL
    }
    return t
}
function T() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}
function c(e, t) {
    return e.getAttribute(`data-sveltekit-${t}`)
}
const d = {
    ...f,
    "": f.hover
};
function h(e) {
    let t = e.assignedSlot ?? e.parentNode;
    return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host),
        t
}
function x(e, t) {
    for (; e && e !== t;) {
        if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href"))
            return e;
        e = h(e)
    }
}
function O(e, t) {
    let n;
    try {
        n = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI)
    } catch { }
    const s = e instanceof SVGAElement ? e.target.baseVal : e.target
        , r = !n || !!s || w(n, t) || (e.getAttribute("rel") || "").split(/\s+/).includes("external")
        , l = (n == null ? void 0 : n.origin) === _ && e.hasAttribute("download");
    return {
        url: n,
        external: r,
        target: s,
        download: l
    }
}
function U(e) {
    let t = null
        , n = null
        , s = null
        , r = null
        , l = null
        , o = null
        , a = e;
    for (; a && a !== document.documentElement;)
        s === null && (s = c(a, "preload-code")),
            r === null && (r = c(a, "preload-data")),
            t === null && (t = c(a, "keepfocus")),
            n === null && (n = c(a, "noscroll")),
            l === null && (l = c(a, "reload")),
            o === null && (o = c(a, "replacestate")),
            a = h(a);
    function i(b) {
        switch (b) {
            case "":
            case "true":
                return !0;
            case "off":
            case "false":
                return !1;
            default:
                return null
        }
    }
    return {
        preload_code: d[s ?? "off"],
        preload_data: d[r ?? "off"],
        keep_focus: i(t),
        noscroll: i(n),
        reload: i(l),
        replace_state: i(o)
    }
}
function p(e) {
    const t = u(e);
    let n = !0;
    function s() {
        n = !0,
            t.update(o => o)
    }
    function r(o) {
        n = !1,
            t.set(o)
    }
    function l(o) {
        let a;
        return t.subscribe(i => {
            (a === void 0 || n && i !== a) && o(a = i)
        }
        )
    }
    return {
        notify: s,
        set: r,
        subscribe: l
    }
}
function k() {
    const { set: e, subscribe: t } = u(!1);
    let n;
    async function s() {
        clearTimeout(n);
        try {
            const r = await fetch(`${v}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!r.ok)
                return !1;
            const o = (await r.json()).version !== m;
            return o && (e(!0),
                clearTimeout(n)),
                o
        } catch {
            return !1
        }
    }
    return {
        subscribe: t,
        check: s
    }
}
function w(e, t) {
    return e.origin !== _ || !e.pathname.startsWith(t)
}
let g;
function L(e) {
    g = e.client
}
function N(e) {
    return (...t) => g[e](...t)
}
const P = {
    url: p({}),
    page: p({}),
    navigating: u(null),
    updated: k()
};
export { I, f as P, y as S, R as a, O as b, U as c, P as d, L as e, x as f, S as g, N as h, w as i, _ as o, T as s };
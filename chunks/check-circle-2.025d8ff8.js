import { S as u, i as m, s as p, K as l, y as d, z as g, A as h, L as $, M as C, g as _, d as f, B as k, X as i, C as N, D as S, E as b, F as z } from "./index.4c78ea70.js";
import { I } from "./Icon.13e1386d.js";
function M(c) {
    let e;
    const o = c[2].default
        , n = N(o, c, c[3], null);
    return {
        c() {
            n && n.c()
        },
        l(s) {
            n && n.l(s)
        },
        m(s, t) {
            n && n.m(s, t),
                e = !0
        },
        p(s, t) {
            n && n.p && (!e || t & 8) && S(n, o, s, s[3], e ? z(o, s[3], t, null) : b(s[3]), null)
        },
        i(s) {
            e || (_(n, s),
                e = !0)
        },
        o(s) {
            f(n, s),
                e = !1
        },
        d(s) {
            n && n.d(s)
        }
    }
}
function j(c) {
    let e, o;
    const n = [{
        name: "check-circle-2"
    }, c[1], {
        iconNode: c[0]
    }];
    let s = {
        $$slots: {
            default: [M]
        },
        $$scope: {
            ctx: c
        }
    };
    for (let t = 0; t < n.length; t += 1)
        s = l(s, n[t]);
    return e = new I({
        props: s
    }),
    {
        c() {
            d(e.$$.fragment)
        },
        l(t) {
            g(e.$$.fragment, t)
        },
        m(t, a) {
            h(e, t, a),
                o = !0
        },
        p(t, [a]) {
            const r = a & 3 ? $(n, [n[0], a & 2 && C(t[1]), a & 1 && {
                iconNode: t[0]
            }]) : {};
            a & 8 && (r.$$scope = {
                dirty: a,
                ctx: t
            }),
                e.$set(r)
        },
        i(t) {
            o || (_(e.$$.fragment, t),
                o = !0)
        },
        o(t) {
            f(e.$$.fragment, t),
                o = !1
        },
        d(t) {
            k(e, t)
        }
    }
}
function q(c, e, o) {
    let { $$slots: n = {}, $$scope: s } = e;
    const t = [["path", {
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
    }], ["path", {
        d: "m9 12 2 2 4-4"
    }]];
    return c.$$set = a => {
        o(1, e = l(l({}, e), i(a))),
            "$$scope" in a && o(3, s = a.$$scope)
    }
        ,
        e = i(e),
        [t, e, n, s]
}
class v extends u {
    constructor(e) {
        super(),
            m(this, e, q, j, p, {})
    }
}
const D = v;
export { D as C };

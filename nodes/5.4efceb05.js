import { S as B, i as D, s as M, k as E, a as l, y as o, l as G, m as I, h as x, c as u, z as c, n as q, b as k, A as d, G as b, g as p, d as _, B as h } from "../chunks/index.4c78ea70.js";
import { H as N, a as T, S as V, F as j, P as J, C as K, b as L } from "../chunks/Stats.601aa689.js";
function O(y) {
    let r, w, t, a, S, s, A, $, C, m, F, f, H, i, P, g, v;
    return a = new N({
        props: {
            loggedin: y[0].session
        }
    }),
        s = new T({}),
        $ = new V({}),
        m = new j({}),
        f = new J({}),
        i = new K({}),
        g = new L({}),
    {
        c() {
            r = E("div"),
                w = l(),
                t = E("main"),
                o(a.$$.fragment),
                S = l(),
                o(s.$$.fragment),
                A = l(),
                o($.$$.fragment),
                C = l(),
                o(m.$$.fragment),
                F = l(),
                o(f.$$.fragment),
                H = l(),
                o(i.$$.fragment),
                P = l(),
                o(g.$$.fragment),
                this.h()
        },
        l(e) {
            r = G(e, "DIV", {
                class: !0
            }),
                I(r).forEach(x),
                w = u(e),
                t = G(e, "MAIN", {
                    class: !0
                });
            var n = I(t);
            c(a.$$.fragment, n),
                S = u(n),
                c(s.$$.fragment, n),
                A = u(n),
                c($.$$.fragment, n),
                C = u(n),
                c(m.$$.fragment, n),
                F = u(n),
                c(f.$$.fragment, n),
                H = u(n),
                c(i.$$.fragment, n),
                P = u(n),
                c(g.$$.fragment, n),
                n.forEach(x),
                this.h()
        },
        h() {
            q(r, "class", "inset-0 opacity-5 absolute z-[0] bgGrid"),
                q(t, "class", "flex flex-col bg-black text-white-500")
        },
        m(e, n) {
            k(e, r, n),
                k(e, w, n),
                k(e, t, n),
                d(a, t, null),
                b(t, S),
                d(s, t, null),
                b(t, A),
                d($, t, null),
                b(t, C),
                d(m, t, null),
                b(t, F),
                d(f, t, null),
                b(t, H),
                d(i, t, null),
                b(t, P),
                d(g, t, null),
                v = !0
        },
        p(e, [n]) {
            const z = {};
            n & 1 && (z.loggedin = e[0].session),
                a.$set(z)
        },
        i(e) {
            v || (p(a.$$.fragment, e),
                p(s.$$.fragment, e),
                p($.$$.fragment, e),
                p(m.$$.fragment, e),
                p(f.$$.fragment, e),
                p(i.$$.fragment, e),
                p(g.$$.fragment, e),
                v = !0)
        },
        o(e) {
            _(a.$$.fragment, e),
                _(s.$$.fragment, e),
                _($.$$.fragment, e),
                _(m.$$.fragment, e),
                _(f.$$.fragment, e),
                _(i.$$.fragment, e),
                _(g.$$.fragment, e),
                v = !1
        },
        d(e) {
            e && x(r),
                e && x(w),
                e && x(t),
                h(a),
                h(s),
                h($),
                h(m),
                h(f),
                h(i),
                h(g)
        }
    }
}
function Q(y, r, w) {
    let { data: t } = r;
    return y.$$set = a => {
        "data" in a && w(0, t = a.data)
    }
        ,
        [t]
}
class W extends B {
    constructor(r) {
        super(),
            D(this, r, Q, O, M, {
                data: 0
            })
    }
}
export { W as component };

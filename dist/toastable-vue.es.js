import { hasInjectionContext as ht, inject as dt, getCurrentInstance as pt, ref as nt, watch as _t, reactive as mt, markRaw as D, effectScope as Et, isRef as j, isReactive as F, toRef as k, toRaw as vt, nextTick as X, computed as B, getCurrentScope as Nt, onScopeDispose as bt, toRefs as Y, openBlock as yt, createBlock as gt, Transition as Ot, withCtx as Pt, withDirectives as Vt, createElementVNode as I, normalizeClass as xt, toDisplayString as Dt, unref as Z, vShow as wt } from "vue";
var St = !1;
function $(t, s, n) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, s), t.splice(s, 1, n), n) : (t[s] = n, n);
}
function W(t, s) {
  if (Array.isArray(t)) {
    t.splice(s, 1);
    return;
  }
  delete t[s];
}
/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let w;
const L = (t) => w = t, jt = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function g(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var S;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(S || (S = {}));
const H = typeof window < "u", R = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && H;
function rt(t, s) {
  for (const n in s) {
    const e = s[n];
    if (!(n in t))
      continue;
    const a = t[n];
    g(a) && g(e) && !j(e) && !F(e) ? t[n] = rt(a, e) : t[n] = e;
  }
  return t;
}
const ct = () => {
};
function K(t, s, n, e = ct) {
  t.push(s);
  const a = () => {
    const u = t.indexOf(s);
    u > -1 && (t.splice(u, 1), e());
  };
  return !n && Nt() && bt(a), a;
}
function P(t, ...s) {
  t.slice().forEach((n) => {
    n(...s);
  });
}
const Ct = (t) => t();
function U(t, s) {
  t instanceof Map && s instanceof Map && s.forEach((n, e) => t.set(e, n)), t instanceof Set && s instanceof Set && s.forEach(t.add, t);
  for (const n in s) {
    if (!s.hasOwnProperty(n))
      continue;
    const e = s[n], a = t[n];
    g(a) && g(e) && t.hasOwnProperty(n) && !j(e) && !F(e) ? t[n] = U(a, e) : t[n] = e;
  }
  return t;
}
const $t = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Lt(t) {
  return !g(t) || !t.hasOwnProperty($t);
}
const { assign: N } = Object;
function tt(t) {
  return !!(j(t) && t.effect);
}
function et(t, s, n, e) {
  const { state: a, actions: u, getters: d } = s, l = n.state.value[t];
  let b;
  function _() {
    !l && (process.env.NODE_ENV === "production" || !e) && (n.state.value[t] = a ? a() : {});
    const m = process.env.NODE_ENV !== "production" && e ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      Y(nt(a ? a() : {}).value)
    ) : Y(n.state.value[t]);
    return N(m, u, Object.keys(d || {}).reduce((f, h) => (process.env.NODE_ENV !== "production" && h in m && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${h}" in store "${t}".`), f[h] = D(B(() => {
      L(n);
      const E = n._s.get(t);
      return d[h].call(E, E);
    })), f), {}));
  }
  return b = M(t, _, s, n, e, !0), b;
}
function M(t, s, n = {}, e, a, u) {
  let d;
  const l = N({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !e._e.active)
    throw new Error("Pinia destroyed");
  const b = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !St && (b.onTrigger = (r) => {
    _ ? E = r : _ == !1 && !c._hotUpdating && (Array.isArray(E) ? E.push(r) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let _, m, f = [], h = [], E;
  const O = e.state.value[t];
  !u && !O && (process.env.NODE_ENV === "production" || !a) && (e.state.value[t] = {});
  const T = nt({});
  let J;
  function q(r) {
    let o;
    _ = m = !1, process.env.NODE_ENV !== "production" && (E = []), typeof r == "function" ? (r(e.state.value[t]), o = {
      type: S.patchFunction,
      storeId: t,
      events: E
    }) : (U(e.state.value[t], r), o = {
      type: S.patchObject,
      payload: r,
      storeId: t,
      events: E
    });
    const i = J = Symbol();
    X().then(() => {
      J === i && (_ = !0);
    }), m = !0, P(f, o, e.state.value[t]);
  }
  const at = u ? function() {
    const { state: o } = n, i = o ? o() : {};
    this.$patch((p) => {
      N(p, i);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`);
    } : ct
  );
  function it() {
    d.stop(), f = [], h = [], e._s.delete(t);
  }
  function G(r, o) {
    return function() {
      L(e);
      const i = Array.from(arguments), p = [], V = [];
      function lt(v) {
        p.push(v);
      }
      function ft(v) {
        V.push(v);
      }
      P(h, {
        args: i,
        name: r,
        store: c,
        after: lt,
        onError: ft
      });
      let x;
      try {
        x = o.apply(this && this.$id === t ? this : c, i);
      } catch (v) {
        throw P(V, v), v;
      }
      return x instanceof Promise ? x.then((v) => (P(p, v), v)).catch((v) => (P(V, v), Promise.reject(v))) : (P(p, x), x);
    };
  }
  const C = /* @__PURE__ */ D({
    actions: {},
    getters: {},
    state: [],
    hotState: T
  }), Q = {
    _p: e,
    // _s: scope,
    $id: t,
    $onAction: K.bind(null, h),
    $patch: q,
    $reset: at,
    $subscribe(r, o = {}) {
      const i = K(f, r, o.detached, () => p()), p = d.run(() => _t(() => e.state.value[t], (V) => {
        (o.flush === "sync" ? m : _) && r({
          storeId: t,
          type: S.direct,
          events: E
        }, V);
      }, N({}, b, o)));
      return i;
    },
    $dispose: it
  }, c = mt(process.env.NODE_ENV !== "production" || R ? N(
    {
      _hmrPayload: C,
      _customProperties: D(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    Q
    // must be added later
    // setupStore
  ) : Q);
  e._s.set(t, c);
  const ut = e._a && e._a.runWithContext || Ct, y = e._e.run(() => (d = Et(), ut(() => d.run(s))));
  for (const r in y) {
    const o = y[r];
    if (j(o) && !tt(o) || F(o))
      process.env.NODE_ENV !== "production" && a ? $(T.value, r, k(y, r)) : u || (O && Lt(o) && (j(o) ? o.value = O[r] : U(o, O[r])), e.state.value[t][r] = o), process.env.NODE_ENV !== "production" && C.state.push(r);
    else if (typeof o == "function") {
      const i = process.env.NODE_ENV !== "production" && a ? o : G(r, o);
      y[r] = i, process.env.NODE_ENV !== "production" && (C.actions[r] = o), l.actions[r] = o;
    } else
      process.env.NODE_ENV !== "production" && tt(o) && (C.getters[r] = u ? (
        // @ts-expect-error
        n.getters[r]
      ) : o, H && (y._getters || // @ts-expect-error: same
      (y._getters = D([]))).push(r));
  }
  if (N(c, y), N(vt(c), y), Object.defineProperty(c, "$state", {
    get: () => process.env.NODE_ENV !== "production" && a ? T.value : e.state.value[t],
    set: (r) => {
      if (process.env.NODE_ENV !== "production" && a)
        throw new Error("cannot set hotState");
      q((o) => {
        N(o, r);
      });
    }
  }), process.env.NODE_ENV !== "production" && (c._hotUpdate = D((r) => {
    c._hotUpdating = !0, r._hmrPayload.state.forEach((o) => {
      if (o in c.$state) {
        const i = r.$state[o], p = c.$state[o];
        typeof i == "object" && g(i) && g(p) ? rt(i, p) : r.$state[o] = p;
      }
      $(c, o, k(r.$state, o));
    }), Object.keys(c.$state).forEach((o) => {
      o in r.$state || W(c, o);
    }), _ = !1, m = !1, e.state.value[t] = k(r._hmrPayload, "hotState"), m = !0, X().then(() => {
      _ = !0;
    });
    for (const o in r._hmrPayload.actions) {
      const i = r[o];
      $(c, o, G(o, i));
    }
    for (const o in r._hmrPayload.getters) {
      const i = r._hmrPayload.getters[o], p = u ? (
        // special handling of options api
        B(() => (L(e), i.call(c, c)))
      ) : i;
      $(c, o, p);
    }
    Object.keys(c._hmrPayload.getters).forEach((o) => {
      o in r._hmrPayload.getters || W(c, o);
    }), Object.keys(c._hmrPayload.actions).forEach((o) => {
      o in r._hmrPayload.actions || W(c, o);
    }), c._hmrPayload = r._hmrPayload, c._getters = r._getters, c._hotUpdating = !1;
  })), R) {
    const r = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((o) => {
      Object.defineProperty(c, o, N({ value: c[o] }, r));
    });
  }
  return e._p.forEach((r) => {
    if (R) {
      const o = d.run(() => r({
        store: c,
        app: e._a,
        pinia: e,
        options: l
      }));
      Object.keys(o || {}).forEach((i) => c._customProperties.add(i)), N(c, o);
    } else
      N(c, d.run(() => r({
        store: c,
        app: e._a,
        pinia: e,
        options: l
      })));
  }), process.env.NODE_ENV !== "production" && c.$state && typeof c.$state == "object" && typeof c.$state.constructor == "function" && !c.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${c.$id}".`), O && u && n.hydrate && n.hydrate(c.$state, O), _ = !0, m = !0, c;
}
function Tt(t, s, n) {
  let e, a;
  const u = typeof s == "function";
  if (typeof t == "string")
    e = t, a = u ? n : s;
  else if (a = t, e = t.id, process.env.NODE_ENV !== "production" && typeof e != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function d(l, b) {
    const _ = ht();
    if (l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && w && w._testing ? null : l) || (_ ? dt(jt, null) : null), l && L(l), process.env.NODE_ENV !== "production" && !w)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    l = w, l._s.has(e) || (u ? M(e, s, a, l) : et(e, a, l), process.env.NODE_ENV !== "production" && (d._pinia = l));
    const m = l._s.get(e);
    if (process.env.NODE_ENV !== "production" && b) {
      const f = "__hot:" + e, h = u ? M(f, s, a, l, !0) : et(f, N({}, a), l, !0);
      b._hotUpdate(h), delete l.state.value[f], l._s.delete(f);
    }
    if (process.env.NODE_ENV !== "production" && H) {
      const f = pt();
      if (f && f.proxy && // avoid adding stores that are just built for hot module replacement
      !b) {
        const h = f.proxy, E = "_pStores" in h ? h._pStores : h._pStores = {};
        E[e] = m;
      }
    }
    return m;
  }
  return d.$id = e, d;
}
const z = Tt({
  id: "toast",
  state: () => ({
    active: !1,
    color: "success",
    text: "",
    timeout: 3e3,
    timer: null,
    disableLogs: !1,
    className: "toast-message",
    maxWidth: "1400px"
  }),
  actions: {
    show(t) {
      this.active = !0, this.text = t.text, this.color = t.color, this.timeout = t.timeout, this.timer && clearTimeout(this.timer), this.timer = setTimeout(() => {
        this.hide();
      }, this.timeout);
    },
    hide() {
      this.active = !1, this.timer && (clearTimeout(this.timer), this.timer = null);
    }
  }
});
class st {
  constructor({ text: s, color: n, timeout: e = 3e3, closeable: a = !0, autoclose: u = !0 }) {
    return this.text = s, this.color = n, this.closeable = a, this.autoclose = u, this.timeout = e, this.store = z(), this;
  }
  setCloseable(s) {
    return this.closeable = s, this;
  }
  setAutoClose(s) {
    return this.autoclose = s, this;
  }
  setTimeout(s) {
    return this.timeout = s, this;
  }
  show() {
    this.store.show(this);
  }
  hide() {
    this.store.hide();
  }
}
const kt = (t, s) => {
  const n = t.__vccOpts || t;
  for (const [e, a] of s)
    n[e] = a;
  return n;
}, It = { class: "toast-container" }, Wt = { class: "text" }, Rt = {
  __name: "ToastMessage",
  setup(t) {
    const s = z(), n = B(() => {
      let a = [s.className];
      return a.push(s.color), a;
    }), e = () => {
      s.hide();
    };
    return (a, u) => (yt(), gt(Ot, {
      name: "toast-slide-down",
      mode: "in-out"
    }, {
      default: Pt(() => [
        Vt(I("div", {
          class: xt(n.value),
          onClick: e
        }, [
          I("div", It, [
            I("div", Wt, Dt(Z(s).text), 1)
          ])
        ], 2), [
          [wt, Z(s).active]
        ])
      ]),
      _: 1
    }));
  }
}, At = /* @__PURE__ */ kt(Rt, [["__scopeId", "data-v-8b0fbbe2"]]), A = z(), ot = "[@sadrix/toastable-vue]", Ut = (t) => !!(t && typeof t == "boolean" && t.hasOwnProperty("disableLogs") && t.disableLogs), Mt = (t) => {
  const s = "1400px";
  return t && typeof t == "string" && t.hasOwnProperty("maxWidth") && typeof t.maxWidth == "string" ? t.maxWidth : s;
}, Ft = (t) => {
  const s = "ToastMessage";
  return t && typeof t == "object" && t.hasOwnProperty("componentName") && typeof t.componentName == "string" ? t.componentName : s;
}, Bt = (t) => {
  const s = "toast-message";
  return t && typeof t == "object" && t.hasOwnProperty("className") && typeof t.componentName == "string" ? t.className : s;
}, zt = {
  install(t, s) {
    try {
      const n = Ut(s), e = Ft(s), a = Bt(s), u = Mt(s);
      A.disableLogs = n, A.className = a, A.maxWidth = u, t.config.globalProperties.$Toastable = st, window.Toastable = st, t.component(e, At), n || console.log(`${ot}: Plugin installed successfully.`);
    } catch (n) {
      console.warn(`${ot}: ${n.name} - ${n.message}`);
    }
  }
};
export {
  zt as default
};

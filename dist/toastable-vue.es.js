import { computed as u, openBlock as h, createBlock as d, Transition as m, withCtx as _, withDirectives as p, createElementVNode as r, normalizeClass as b, toDisplayString as x, unref as l, vShow as T, reactive as g } from "vue";
class c {
  constructor({ text: e, color: s, timeout: a = 3e3, closeable: o = !0, autoclose: i = !0 }) {
    return this.text = e, this.color = s, this.closeable = o, this.autoclose = i, this.timeout = a, this;
  }
  setCloseable(e) {
    return this.closeable = e, this;
  }
  setAutoClose(e) {
    return this.autoclose = e, this;
  }
  setTimeout(e) {
    return this.timeout = e, this;
  }
  show() {
    $SadrixToastable.show(this);
  }
  hide() {
    $SadrixToastable.hide();
  }
}
const v = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [a, o] of e)
    s[a] = o;
  return s;
}, w = { class: "toast-container" }, f = { class: "text" }, y = {
  __name: "ToastMessage",
  setup(t) {
    const e = $SadrixToastable, s = u(() => {
      let o = ["toast-message"];
      return o.push(e.color), o;
    }), a = () => {
      e.hide();
    };
    return (o, i) => (h(), d(m, {
      name: "toast-slide-down",
      mode: "in-out"
    }, {
      default: _(() => [
        p(r("div", {
          class: b(s.value),
          onClick: a
        }, [
          r("div", w, [
            r("div", f, x(l(e).text), 1)
          ])
        ], 2), [
          [T, l(e).active]
        ])
      ]),
      _: 1
    }));
  }
}, $ = /* @__PURE__ */ v(y, [["__scopeId", "data-v-760d6b3a"]]), n = "[@sadrix/toastable-vue]", S = (t) => !!(t && typeof t == "object" && t.hasOwnProperty("disableLogger") && t.disableLogger), L = (t) => {
  const e = "ToastMessage";
  return t && typeof t == "object" && t.hasOwnProperty("componentName") && typeof t.componentName == "string" ? t.componentName : e;
}, C = {
  install(t, e) {
    try {
      const s = S(e), a = L(e);
      let o = g({
        active: !1,
        color: "success",
        text: "",
        timeout: 3e3,
        timer: null,
        disableLogs: s,
        show(i) {
          this.active = !0, this.text = i.text, this.color = i.color, this.timeout = i.timeout, this.timer && clearTimeout(this.timer), this.timer = setTimeout(() => {
            this.hide();
          }, this.timeout);
        },
        hide() {
          this.active = !1, this.timer && (clearTimeout(this.timer), this.timer = null);
        }
      });
      t.config.globalProperties.$SadrixToastable = o, window.$SadrixToastable = o, t.config.globalProperties.$Toastable = c, window.Toastable = c, t.component(a, $), s || console.log(`${n}: Plugin installed successfully.`);
    } catch (s) {
      console.warn(`${n}: ${s.name} - ${s.message}`);
    }
  }
};
export {
  C as default
};

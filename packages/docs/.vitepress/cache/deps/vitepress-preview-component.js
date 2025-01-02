import {
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  resolveComponent,
  toDisplayString,
  unref,
  watch,
  withCtx
} from "./chunk-LRI6K42L.js";

// ../../_node_modules/vitepress-preview-component/_product/preview-component.js
var T = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [c, l] of t)
    e[c] = l;
  return e;
};
var J = {};
var K = {
  t: "1661231422733",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3259",
  width: "20",
  height: "20"
};
var Q = createBaseVNode("path", {
  d: "M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z",
  "p-id": "3260"
}, null, -1);
var W = [
  Q
];
function X(o, t) {
  return openBlock(), createElementBlock("svg", K, W);
}
var O = T(J, [["render", X]]);
var Y = {};
var ee = {
  t: "1661231449868",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3541",
  width: "20",
  height: "20"
};
var te = createBaseVNode("path", {
  d: "M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z",
  "p-id": "3542"
}, null, -1);
var ne = [
  te
];
function oe(o, t) {
  return openBlock(), createElementBlock("svg", ee, ne);
}
var U = T(Y, [["render", oe]]);
var se = {};
var ce = {
  viewBox: "0 0 544 560",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var ie = createBaseVNode("path", {
  d: "M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z",
  fill: "currentColor"
}, null, -1);
var le = [
  ie
];
function re(o, t) {
  return openBlock(), createElementBlock("svg", ce, le);
}
var z = T(se, [["render", re]]);
var k = "vitepress-demo-preview";
var $ = (o, t, e, c) => {
  let l = t === "" ? `${o}` : `${o}-${t}`;
  return e && (l += `__${e}`), c && (l += `--${c}`), l;
};
var A = (o = "") => ({
  b: () => $(k, o),
  e: (_ = "") => $(k, o, _),
  m: (_ = "") => $(k, o, "", _),
  bem: (_, m, h) => $(k, _, m, h)
});
var R = () => {
  const o = ref(true);
  return {
    isCodeFold: o,
    setCodeFold: (e) => {
      o.value = e;
    }
  };
};
var E = () => ({
  copyContent: ref(""),
  clickCopy: async (e) => {
    await navigator.clipboard.writeText(e);
  }
});
var ae = {};
var de = {
  width: "20",
  height: "20",
  viewBox: "0 0 48 48",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
var ue = createBaseVNode("path", {
  d: "M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",
  fill: "currentColor",
  stroke: "#333",
  "stroke-width": "4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
var Ce = createBaseVNode("path", {
  d: "M17 24L22 29L32 19",
  fill: "currentColor",
  stroke: "#333",
  "stroke-width": "4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
var pe = [
  ue,
  Ce
];
function ve(o, t) {
  return openBlock(), createElementBlock("svg", de, pe);
}
var _e = T(ae, [["render", ve]]);
var me = defineComponent({
  __name: "message-notice",
  props: {
    content: { default: "复制成功！" },
    close: {}
  },
  setup(o, { expose: t }) {
    const e = o, c = A(), l = ref(false), _ = (u) => {
      l.value = u;
    }, m = ref(-999), h = (u) => {
      m.value = u;
    };
    watch(l, (u) => {
      u === true && setTimeout(() => {
        l.value = false;
      }, 3e3);
    });
    const C = () => {
      e.close();
    };
    return t({
      setVisible: _,
      setTopHeight: h
    }), (u, L) => (openBlock(), createBlock(Transition, {
      name: "slide-fade",
      onAfterLeave: C
    }, {
      default: withCtx(() => [
        l.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(c).bem("message-notice", "container")]),
          style: normalizeStyle({ top: m.value + "px" })
        }, [
          createVNode(_e),
          createBaseVNode("span", null, toDisplayString(u.content), 1)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var I = [];
var D = {
  open: () => {
    const o = document.createElement("div"), t = createApp(me, {
      content: "复制成功！",
      close: () => {
        document.body.removeChild(o), I.pop(), t.unmount();
      }
    }), e = t.mount(o);
    document.body.appendChild(o);
    const c = I.length, l = c === 0 ? 10 : (c + 1) * 10 + c * 42;
    e.setTopHeight(l), e.setVisible(true), I.push(e);
  }
};
var he = ["innerHTML"];
var Le = ["innerHTML"];
var He = defineComponent({
  __name: "AntDesign",
  props: {
    code: {},
    showCode: {},
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(o) {
    const t = o, e = A(), { isCodeFold: c, setCodeFold: l } = R(), { copyContent: _, clickCopy: m } = E(), h = ref(decodeURIComponent(t.code)), C = ref(decodeURIComponent(t.showCode)), u = ref(null), L = () => {
      m(h.value), D.open();
    }, f = computed(() => {
      var r;
      return u.value ? (r = u.value) == null ? void 0 : r.clientHeight : 0;
    }), s = (r) => {
      c.value ? u.value.style.height = "0px" : u.value.style.height = `${r}px`;
    };
    return onMounted(() => {
      const r = f.value;
      s(r);
    }), watch(c, () => {
      const r = f.value;
      s(r);
    }), (r, g) => {
      const w = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).e("ant-design__container")])
      }, [
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("preview")])
        }, [
          createVNode(w, null, {
            default: withCtx(() => [
              renderSlot(r.$slots, "default")
            ]),
            _: 3
          })
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("description")])
        }, [
          t.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(e).bem("description", "title")])
          }, toDisplayString(r.title), 3)) : createCommentVNode("", true),
          t.description ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(e).bem("description", "content")]),
            innerHTML: r.description
          }, null, 10, he)) : createCommentVNode("", true),
          t.description || !t.title && !t.description ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: normalizeClass([unref(e).bem("description", "split-line")])
          }, null, 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(e).bem("description", "handle-btn")])
          }, [
            unref(c) ? (openBlock(), createBlock(O, {
              key: 1,
              onClick: g[1] || (g[1] = (P) => unref(l)(false))
            })) : (openBlock(), createBlock(U, {
              key: 0,
              onClick: g[0] || (g[0] = (P) => unref(l)(true))
            })),
            createVNode(z, { onClick: L })
          ], 2)
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("source")]),
          ref_key: "sourceCodeArea",
          ref: u
        }, [
          createBaseVNode("div", {
            innerHTML: C.value,
            class: "language-vue"
          }, null, 8, Le)
        ], 2)
      ], 2);
    };
  }
});
var fe = ["innerHTML"];
var Me = defineComponent({
  __name: "ElementPlus",
  props: {
    code: {},
    showCode: {},
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(o) {
    const t = o, e = A(), { isCodeFold: c, setCodeFold: l } = R(), { clickCopy: _ } = E(), m = ref(decodeURIComponent(t.code)), h = ref(decodeURIComponent(t.showCode)), C = ref(null), u = () => {
      _(m.value), D.open();
    }, L = computed(() => {
      var s;
      return C.value ? (s = C.value) == null ? void 0 : s.clientHeight : 0;
    }), f = (s) => {
      c.value ? C.value.style.height = "0px" : C.value.style.height = `${s}px`;
    };
    return onMounted(() => {
      const s = L.value;
      f(s);
    }), watch(c, () => {
      const s = L.value;
      f(s);
    }), (s, r) => {
      const g = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).e("element-plus__container")])
      }, [
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("preview")])
        }, [
          createVNode(g, null, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          })
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("description")])
        }, [
          createBaseVNode("div", {
            class: normalizeClass([unref(e).bem("description", "split-line")])
          }, null, 2),
          createBaseVNode("div", {
            class: normalizeClass([unref(e).bem("description", "handle-btn")])
          }, [
            unref(c) ? (openBlock(), createBlock(O, {
              key: 1,
              onClick: r[1] || (r[1] = (w) => unref(l)(false))
            })) : (openBlock(), createBlock(U, {
              key: 0,
              onClick: r[0] || (r[0] = (w) => unref(l)(true))
            })),
            createVNode(z, { onClick: u })
          ], 2)
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("source")]),
          ref_key: "sourceCodeArea",
          ref: C
        }, [
          createBaseVNode("div", {
            innerHTML: h.value,
            class: "language-vue"
          }, null, 8, fe)
        ], 2)
      ], 2);
    };
  }
});
var ge = ["innerHTML"];
var we = defineComponent({
  __name: "NaiveUI",
  props: {
    code: {},
    showCode: {},
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(o) {
    const t = o, e = A(), { isCodeFold: c, setCodeFold: l } = R(), { clickCopy: _ } = E(), m = ref(decodeURIComponent(t.code)), h = ref(decodeURIComponent(t.showCode)), C = ref(null), u = () => {
      _(m.value), D.open();
    }, L = computed(() => {
      var s;
      return C.value ? (s = C.value) == null ? void 0 : s.clientHeight : 0;
    }), f = (s) => {
      c.value ? C.value.style.height = "0px" : C.value.style.height = `${s}px`;
    };
    return onMounted(() => {
      const s = L.value;
      f(s);
    }), watch(c, () => {
      const s = L.value;
      f(s);
    }), (s, r) => {
      const g = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(e).e("naive-ui__container")])
      }, [
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("name_handle")])
        }, [
          t.title ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(e).bem("component", "name")])
          }, toDisplayString(s.title), 3)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass([unref(e).bem("description", "btns")])
          }, [
            createVNode(z, { onClick: u }),
            unref(c) ? (openBlock(), createBlock(O, {
              key: 1,
              onClick: r[1] || (r[1] = (w) => unref(l)(false))
            })) : (openBlock(), createBlock(U, {
              key: 0,
              onClick: r[0] || (r[0] = (w) => unref(l)(true))
            }))
          ], 2)
        ], 2),
        t.description ? (openBlock(), createElementBlock("section", {
          key: 0,
          class: normalizeClass([unref(e).bem("description")])
        }, [
          createBaseVNode("span", null, toDisplayString(s.description), 1)
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("preview")])
        }, [
          createVNode(g, null, {
            default: withCtx(() => [
              renderSlot(s.$slots, "default")
            ]),
            _: 3
          })
        ], 2),
        createBaseVNode("section", {
          class: normalizeClass([unref(e).bem("source")]),
          ref_key: "sourceCodeArea",
          ref: C
        }, [
          createBaseVNode("div", {
            innerHTML: h.value,
            class: "language-vue"
          }, null, 8, ge)
        ], 2)
      ], 2);
    };
  }
});
export {
  He as AntDesignContainer,
  Me as ElementPlusContainer,
  we as NaiveUIContainer
};
//# sourceMappingURL=vitepress-preview-component.js.map

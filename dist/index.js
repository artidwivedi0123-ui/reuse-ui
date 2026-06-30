import { jsxs as r, jsx as l } from "react/jsx-runtime";
const b = "_button_1t323_1", g = "_primary_1t323_12", y = "_secondary_1t323_17", f = "_danger_1t323_23", h = "_outline_1t323_29", N = "_small_1t323_35", q = "_medium_1t323_39", x = "_large_1t323_43", u = {
  button: b,
  primary: g,
  secondary: y,
  danger: f,
  outline: h,
  small: N,
  medium: q,
  large: x
};
function k({
  children: s,
  variant: a = "primary",
  size: _ = "medium",
  disabled: n,
  leftIcon: c,
  rightIcon: o,
  onClick: e
}) {
  const i = `${u.button} ${u[a]} ${u[_]}`;
  return /* @__PURE__ */ r(
    "button",
    {
      className: i,
      disabled: n,
      onClick: e,
      children: [
        c,
        s,
        o
      ]
    }
  );
}
const W = "_container_1g5bf_1", $ = "_label_1g5bf_7", j = "_inputWrapper_1g5bf_15", v = "_input_1g5bf_15", B = "_req_1g5bf_11", t = {
  container: W,
  label: $,
  inputWrapper: j,
  input: v,
  req: B
};
function w({
  type: s = "text",
  value: a,
  placeholder: _,
  label: n,
  required: c,
  disabled: o,
  error: e,
  leftIcon: i,
  rightIcon: p,
  onChange: m,
  name: d
}) {
  return /* @__PURE__ */ r("div", { className: t.container, children: [
    n && /* @__PURE__ */ r("label", { className: t.label, children: [
      n,
      /* @__PURE__ */ l("span", { className: t.req, children: c && "*" })
    ] }),
    /* @__PURE__ */ r("div", { className: t.inputWrapper, children: [
      i,
      /* @__PURE__ */ l(
        "input",
        {
          className: t.input,
          name: d,
          type: s,
          value: a,
          placeholder: _,
          disabled: o,
          onChange: m
        }
      ),
      p
    ] }),
    e && /* @__PURE__ */ l("p", { children: e })
  ] });
}
export {
  k as Button,
  w as Input
};

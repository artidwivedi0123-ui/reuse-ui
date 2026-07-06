import { jsx as n, jsxs as a, Fragment as w } from "react/jsx-runtime";
const x = "_button_1q19o_20", b = "_primary_1q19o_43", C = "_secondary_1q19o_59", W = "_others_1q19o_70", T = "_danger_1q19o_79", j = "_outline_1q19o_90", B = "_success_1q19o_101", F = "_small_1q19o_111", L = "_medium_1q19o_115", M = "_large_1q19o_119", S = "_full_width_1q19o_129", m = {
  button: x,
  primary: b,
  secondary: C,
  others: W,
  danger: T,
  outline: j,
  success: B,
  small: F,
  medium: L,
  large: M,
  full_width: S
};
function g({
  children: e,
  variant: s = "primary",
  size: r = "medium",
  disabled: c,
  leftIcon: t,
  rightIcon: o,
  onClick: i,
  fullWidth: d = !1,
  buttonType: _,
  loading: p = !1
}) {
  const u = `${m.button} ${m[s]} ${m[r]} ${d ? m.fullWidth : ""}`;
  return /* @__PURE__ */ n(
    "button",
    {
      type: _,
      className: u,
      disabled: c || p,
      onClick: i,
      children: p ? "Loading..." : /* @__PURE__ */ a(w, { children: [
        t,
        e,
        o
      ] })
    }
  );
}
const z = "_container_1pknx_20", A = "_label_1pknx_26", D = "_required_1pknx_30", E = "_inputWrapper_1pknx_34", G = "_input_1pknx_34", H = "_error_1pknx_56", J = "_helperText_1pknx_65", l = {
  container: z,
  label: A,
  required: D,
  inputWrapper: E,
  input: G,
  error: H,
  helperText: J
};
function dn({
  type: e = "text",
  value: s,
  placeholder: r,
  name: c,
  label: t,
  helperText: o,
  required: i,
  disabled: d,
  error: _,
  leftIcon: p,
  rightIcon: u,
  readOnly: $,
  autoComplete: f,
  autoFocus: N,
  maxLength: q,
  onChange: v
}) {
  return /* @__PURE__ */ a("div", { className: l.container, children: [
    t && /* @__PURE__ */ a("label", { className: l.label, children: [
      t,
      i && /* @__PURE__ */ n("span", { className: l.required, children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: l.inputWrapper, children: [
      p && /* @__PURE__ */ n("span", { children: p }),
      /* @__PURE__ */ n(
        "input",
        {
          className: l.input,
          type: e,
          value: s,
          name: c,
          placeholder: r,
          disabled: d,
          readOnly: $,
          autoComplete: f,
          autoFocus: N,
          maxLength: q,
          onChange: v
        }
      ),
      u && /* @__PURE__ */ n("span", { children: u })
    ] }),
    o && !_ && /* @__PURE__ */ n("small", { className: l.helperText, children: o }),
    _ && /* @__PURE__ */ n("small", { className: l.error, children: _ })
  ] });
}
const K = "_card_luywp_20", O = "_image_luywp_39", P = "_content_luywp_47", Q = "_title_luywp_52", h = {
  card: K,
  image: O,
  content: P,
  title: Q
};
function pn({
  title: e,
  image: s,
  children: r,
  className: c,
  onClick: t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: `${h.card} ${c ?? ""}`,
      onClick: t,
      children: [
        s && /* @__PURE__ */ n(
          "img",
          {
            src: s,
            alt: e,
            className: h.image
          }
        ),
        /* @__PURE__ */ a("div", { className: h.content, children: [
          e && /* @__PURE__ */ n("h3", { className: h.title, children: e }),
          r
        ] })
      ]
    }
  );
}
const R = "_overlay_ous7d_20", U = "_modal_ous7d_30", V = "_footer_ous7d_55", k = {
  overlay: R,
  modal: U,
  footer: V
};
function un({
  open: e,
  title: s,
  description: r,
  children: c,
  confirmText: t = "Confirm",
  cancelText: o = "Cancel",
  onConfirm: i,
  onClose: d,
  showFooter: _ = !0
}) {
  return e ? /* @__PURE__ */ n("div", { className: k.overlay, children: /* @__PURE__ */ a("div", { className: k.modal, children: [
    /* @__PURE__ */ n("h2", { children: s }),
    r && /* @__PURE__ */ n("p", { children: r }),
    c,
    _ && /* @__PURE__ */ a("div", { className: k.footer, children: [
      /* @__PURE__ */ n(g, { variant: "outline", onClick: d, children: o }),
      /* @__PURE__ */ n(g, { variant: "primary", onClick: i, children: t })
    ] })
  ] }) }) : null;
}
const X = "_spinner_13tk7_20", Y = "_spin_13tk7_20", Z = "_small_13tk7_32", I = "_medium_13tk7_38", nn = "_large_13tk7_44", en = "_primary_13tk7_51", sn = "_secondary_13tk7_56", rn = "_success_13tk7_61", tn = "_warning_13tk7_66", an = "_danger_13tk7_71", cn = "_dark_13tk7_76", _n = "_light_13tk7_81", ln = "_wrapper_13tk7_87", y = {
  spinner: X,
  spin: Y,
  small: Z,
  medium: I,
  large: nn,
  primary: en,
  secondary: sn,
  success: rn,
  warning: tn,
  danger: an,
  dark: cn,
  light: _n,
  wrapper: ln
};
function mn({
  size: e = "medium",
  variant: s = "secondary"
}) {
  return /* @__PURE__ */ n("div", { className: y.wrapper, children: /* @__PURE__ */ n(
    "div",
    {
      className: `${y.spinner} ${y[e]} ${y[s]}`
    }
  ) });
}
export {
  g as Button,
  pn as Card,
  dn as Input,
  un as Modal,
  mn as Spinner
};

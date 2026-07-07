import { jsx as n, jsxs as a, Fragment as w } from "react/jsx-runtime";
const b = "_button_1q19o_20", x = "_primary_1q19o_43", C = "_secondary_1q19o_59", W = "_others_1q19o_70", T = "_danger_1q19o_79", j = "_outline_1q19o_90", B = "_success_1q19o_101", F = "_small_1q19o_111", L = "_medium_1q19o_115", M = "_large_1q19o_119", S = "_full_width_1q19o_129", p = {
  button: b,
  primary: x,
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
function q({
  children: e,
  variant: s = "primary",
  size: r = "medium",
  disabled: o,
  leftIcon: t,
  rightIcon: l,
  onClick: i,
  fullWidth: d = !1,
  buttonType: c,
  loading: u = !1
}) {
  const m = `${p.button} ${p[s]} ${p[r]} ${d ? p.fullWidth : ""}`;
  return /* @__PURE__ */ n(
    "button",
    {
      type: c,
      className: m,
      disabled: o || u,
      onClick: i,
      children: u ? "Loading..." : /* @__PURE__ */ a(w, { children: [
        t,
        e,
        l
      ] })
    }
  );
}
const z = "_container_12qod_20", A = "_label_12qod_26", D = "_required_12qod_30", E = "_inputWrapper_12qod_34", G = "_input_12qod_34", H = "_error_12qod_55", J = "_helperText_12qod_64", _ = {
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
  name: o,
  label: t,
  helperText: l,
  required: i,
  disabled: d,
  error: c,
  leftIcon: u,
  rightIcon: m,
  readOnly: $,
  autoComplete: k,
  autoFocus: f,
  maxLength: N,
  onChange: v
}) {
  return /* @__PURE__ */ a("div", { className: _.container, children: [
    t && /* @__PURE__ */ a("label", { className: _.label, children: [
      t,
      i && /* @__PURE__ */ n("span", { className: _.required, children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: _.inputWrapper, children: [
      u && /* @__PURE__ */ n("span", { children: u }),
      /* @__PURE__ */ n(
        "input",
        {
          className: _.input,
          type: e,
          value: s,
          name: o,
          placeholder: r,
          disabled: d,
          readOnly: $,
          autoComplete: k,
          autoFocus: f,
          maxLength: N,
          onChange: v
        }
      ),
      m && /* @__PURE__ */ n("span", { children: m })
    ] }),
    l && !c && /* @__PURE__ */ n("small", { className: _.helperText, children: l }),
    c && /* @__PURE__ */ n("small", { className: _.error, children: c })
  ] });
}
const K = "_card_luywp_20", O = "_image_luywp_39", P = "_content_luywp_47", Q = "_title_luywp_52", h = {
  card: K,
  image: O,
  content: P,
  title: Q
};
function un({
  title: e,
  image: s,
  children: r,
  className: o,
  onClick: t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: `${h.card} ${o ?? ""}`,
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
const R = "_overlay_ous7d_20", U = "_modal_ous7d_30", V = "_footer_ous7d_55", g = {
  overlay: R,
  modal: U,
  footer: V
};
function mn({
  open: e,
  title: s,
  description: r,
  children: o,
  confirmText: t = "Confirm",
  cancelText: l = "Cancel",
  onConfirm: i,
  onClose: d,
  showFooter: c = !0
}) {
  return e ? /* @__PURE__ */ n("div", { className: g.overlay, children: /* @__PURE__ */ a("div", { className: g.modal, children: [
    /* @__PURE__ */ n("h2", { children: s }),
    r && /* @__PURE__ */ n("p", { children: r }),
    o,
    c && /* @__PURE__ */ a("div", { className: g.footer, children: [
      /* @__PURE__ */ n(q, { variant: "outline", onClick: d, children: l }),
      /* @__PURE__ */ n(q, { variant: "primary", onClick: i, children: t })
    ] })
  ] }) }) : null;
}
const X = "_spinner_13tk7_20", Y = "_spin_13tk7_20", Z = "_small_13tk7_32", I = "_medium_13tk7_38", nn = "_large_13tk7_44", en = "_primary_13tk7_51", sn = "_secondary_13tk7_56", rn = "_success_13tk7_61", tn = "_warning_13tk7_66", an = "_danger_13tk7_71", on = "_dark_13tk7_76", cn = "_light_13tk7_81", _n = "_wrapper_13tk7_87", y = {
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
  dark: on,
  light: cn,
  wrapper: _n
};
function pn({
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
  q as Button,
  un as Card,
  dn as Input,
  mn as Modal,
  pn as Spinner
};

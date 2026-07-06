import { jsx as n, jsxs as c, Fragment as w } from "react/jsx-runtime";
const b = "_button_1q19o_20", j = "_primary_1q19o_43", x = "_secondary_1q19o_59", C = "_others_1q19o_70", W = "_danger_1q19o_79", T = "_outline_1q19o_90", B = "_success_1q19o_101", F = "_small_1q19o_111", L = "_medium_1q19o_115", M = "_large_1q19o_119", S = "_full_width_1q19o_129", p = {
  button: b,
  primary: j,
  secondary: x,
  others: C,
  danger: W,
  outline: T,
  success: B,
  small: F,
  medium: L,
  large: M,
  full_width: S
};
function $({
  children: e,
  variant: s = "primary",
  size: r = "medium",
  disabled: a,
  leftIcon: t,
  rightIcon: o,
  onClick: i,
  fullWidth: d = !1,
  buttonType: l,
  loading: u = !1
}) {
  const m = `${p.button} ${p[s]} ${p[r]} ${d ? p.fullWidth : ""}`;
  return /* @__PURE__ */ n(
    "button",
    {
      type: l,
      className: m,
      disabled: a || u,
      onClick: i,
      children: u ? "Loading..." : /* @__PURE__ */ c(w, { children: [
        t,
        e,
        o
      ] })
    }
  );
}
const z = "_container_cgl1j_20", A = "_label_cgl1j_26", D = "_required_cgl1j_30", E = "_inputWrapper_cgl1j_34", G = "_input_cgl1j_34", H = "_error_cgl1j_56", J = "_helperText_cgl1j_65", _ = {
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
  name: a,
  label: t,
  helperText: o,
  required: i,
  disabled: d,
  error: l,
  leftIcon: u,
  rightIcon: m,
  readOnly: k,
  autoComplete: f,
  autoFocus: N,
  maxLength: q,
  onChange: v
}) {
  return /* @__PURE__ */ c("div", { className: _.container, children: [
    t && /* @__PURE__ */ c("label", { className: _.label, children: [
      t,
      i && /* @__PURE__ */ n("span", { className: _.required, children: "*" })
    ] }),
    /* @__PURE__ */ c("div", { className: _.inputWrapper, children: [
      u && /* @__PURE__ */ n("span", { children: u }),
      /* @__PURE__ */ n(
        "input",
        {
          className: _.input,
          type: e,
          value: s,
          name: a,
          placeholder: r,
          disabled: d,
          readOnly: k,
          autoComplete: f,
          autoFocus: N,
          maxLength: q,
          onChange: v
        }
      ),
      m && /* @__PURE__ */ n("span", { children: m })
    ] }),
    o && !l && /* @__PURE__ */ n("small", { className: _.helperText, children: o }),
    l && /* @__PURE__ */ n("small", { className: _.error, children: l })
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
  className: a,
  onClick: t
}) {
  return /* @__PURE__ */ c(
    "div",
    {
      className: `${h.card} ${a ?? ""}`,
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
        /* @__PURE__ */ c("div", { className: h.content, children: [
          e && /* @__PURE__ */ n("h3", { className: h.title, children: e }),
          r
        ] })
      ]
    }
  );
}
const R = "_overlay_ous7d_20", U = "_modal_ous7d_30", V = "_footer_ous7d_55", y = {
  overlay: R,
  modal: U,
  footer: V
};
function mn({
  open: e,
  title: s,
  description: r,
  children: a,
  confirmText: t = "Confirm",
  cancelText: o = "Cancel",
  onConfirm: i,
  onClose: d,
  showFooter: l = !0
}) {
  return e ? /* @__PURE__ */ n("div", { className: y.overlay, children: /* @__PURE__ */ c("div", { className: y.modal, children: [
    /* @__PURE__ */ n("h2", { children: s }),
    r && /* @__PURE__ */ n("p", { children: r }),
    a,
    l && /* @__PURE__ */ c("div", { className: y.footer, children: [
      /* @__PURE__ */ n($, { variant: "outline", onClick: d, children: o }),
      /* @__PURE__ */ n($, { variant: "primary", onClick: i, children: t })
    ] })
  ] }) }) : null;
}
const X = "_spinner_13tk7_20", Y = "_spin_13tk7_20", Z = "_small_13tk7_32", I = "_medium_13tk7_38", nn = "_large_13tk7_44", en = "_primary_13tk7_51", sn = "_secondary_13tk7_56", rn = "_success_13tk7_61", tn = "_warning_13tk7_66", cn = "_danger_13tk7_71", an = "_dark_13tk7_76", ln = "_light_13tk7_81", _n = "_wrapper_13tk7_87", g = {
  spinner: X,
  spin: Y,
  small: Z,
  medium: I,
  large: nn,
  primary: en,
  secondary: sn,
  success: rn,
  warning: tn,
  danger: cn,
  dark: an,
  light: ln,
  wrapper: _n
};
function pn({
  size: e = "medium",
  variant: s = "secondary"
}) {
  return /* @__PURE__ */ n("div", { className: g.wrapper, children: /* @__PURE__ */ n(
    "div",
    {
      className: `${g.spinner} ${g[e]} ${g[s]}`
    }
  ) });
}
export {
  $ as Button,
  un as Card,
  dn as Input,
  mn as Modal,
  pn as Spinner
};

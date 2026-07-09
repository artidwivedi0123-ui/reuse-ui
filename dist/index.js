import { jsx as e, jsxs as l, Fragment as w } from "react/jsx-runtime";
const b = "_button_1q19o_20", j = "_primary_1q19o_43", x = "_secondary_1q19o_59", C = "_others_1q19o_70", W = "_danger_1q19o_79", S = "_outline_1q19o_90", T = "_success_1q19o_101", B = "_small_1q19o_111", F = "_medium_1q19o_115", L = "_large_1q19o_119", M = "_full_width_1q19o_129", p = {
  button: b,
  primary: j,
  secondary: x,
  others: C,
  danger: W,
  outline: S,
  success: T,
  small: B,
  medium: F,
  large: L,
  full_width: M
};
function $({
  children: n,
  variant: t = "primary",
  size: r = "medium",
  disabled: c,
  leftIcon: s,
  rightIcon: a,
  onClick: i,
  fullWidth: d = !1,
  buttonType: o,
  loading: u = !1
}) {
  const m = `${p.button} ${p[t]} ${p[r]} ${d ? p.fullWidth : ""}`;
  return /* @__PURE__ */ e(
    "button",
    {
      type: o,
      className: m,
      disabled: c || u,
      onClick: i,
      children: u ? "Loading..." : /* @__PURE__ */ l(w, { children: [
        s,
        n,
        a
      ] })
    }
  );
}
const O = "_container_cgl1j_20", z = "_label_cgl1j_26", A = "_required_cgl1j_30", D = "_inputWrapper_cgl1j_34", E = "_input_cgl1j_34", G = "_error_cgl1j_56", H = "_helperText_cgl1j_65", _ = {
  container: O,
  label: z,
  required: A,
  inputWrapper: D,
  input: E,
  error: G,
  helperText: H
};
function de({
  type: n = "text",
  value: t,
  placeholder: r,
  name: c,
  label: s,
  helperText: a,
  required: i,
  disabled: d,
  error: o,
  leftIcon: u,
  rightIcon: m,
  readOnly: f,
  autoComplete: k,
  autoFocus: v,
  maxLength: N,
  onChange: q
}) {
  return /* @__PURE__ */ l("div", { className: _.container, children: [
    s && /* @__PURE__ */ l("label", { className: _.label, children: [
      s,
      i && /* @__PURE__ */ e("span", { className: _.required, children: "*" })
    ] }),
    /* @__PURE__ */ l("div", { className: _.inputWrapper, children: [
      u && /* @__PURE__ */ e("span", { children: u }),
      /* @__PURE__ */ e(
        "input",
        {
          className: _.input,
          type: n,
          value: t,
          name: c,
          placeholder: r,
          disabled: d,
          readOnly: f,
          autoComplete: k,
          autoFocus: v,
          maxLength: N,
          onChange: q
        }
      ),
      m && /* @__PURE__ */ e("span", { children: m })
    ] }),
    a && !o && /* @__PURE__ */ e("small", { className: _.helperText, children: a }),
    o && /* @__PURE__ */ e("small", { className: _.error, children: o })
  ] });
}
const J = "_card_luywp_20", K = "_image_luywp_39", P = "_content_luywp_47", Q = "_title_luywp_52", h = {
  card: J,
  image: K,
  content: P,
  title: Q
};
function ue({
  title: n,
  image: t,
  children: r,
  className: c,
  onClick: s
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: `${h.card} ${c ?? ""}`,
      onClick: s,
      children: [
        t && /* @__PURE__ */ e(
          "img",
          {
            src: t,
            alt: n,
            className: h.image
          }
        ),
        /* @__PURE__ */ l("div", { className: h.content, children: [
          n && /* @__PURE__ */ e("h3", { className: h.title, children: n }),
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
function me({
  open: n,
  title: t,
  description: r,
  children: c,
  confirmText: s = "Confirm",
  cancelText: a = "Cancel",
  onConfirm: i,
  onClose: d,
  showFooter: o = !0
}) {
  return n ? /* @__PURE__ */ e("div", { className: g.overlay, children: /* @__PURE__ */ l("div", { className: g.modal, children: [
    /* @__PURE__ */ e("h2", { children: t }),
    r && /* @__PURE__ */ e("p", { children: r }),
    c,
    o && /* @__PURE__ */ l("div", { className: g.footer, children: [
      /* @__PURE__ */ e($, { variant: "outline", onClick: d, children: a }),
      /* @__PURE__ */ e($, { variant: "primary", onClick: i, children: s })
    ] })
  ] }) }) : null;
}
const X = "_spinner_13tk7_20", Y = "_spin_13tk7_20", Z = "_small_13tk7_32", I = "_medium_13tk7_38", ee = "_large_13tk7_44", ne = "_primary_13tk7_51", te = "_secondary_13tk7_56", se = "_success_13tk7_61", re = "_warning_13tk7_66", ce = "_danger_13tk7_71", le = "_dark_13tk7_76", ae = "_light_13tk7_81", oe = "_wrapper_13tk7_87", y = {
  spinner: X,
  spin: Y,
  small: Z,
  medium: I,
  large: ee,
  primary: ne,
  secondary: te,
  success: se,
  warning: re,
  danger: ce,
  dark: le,
  light: ae,
  wrapper: oe
};
function pe({
  size: n = "medium",
  variant: t = "secondary"
}) {
  return /* @__PURE__ */ e("div", { className: y.wrapper, children: /* @__PURE__ */ e(
    "div",
    {
      className: `${y.spinner} ${y[n]} ${y[t]}`
    }
  ) });
}
const _e = {
  "select-container": "_select-container_fk858_20"
};
function he({
  name: n,
  className: t,
  options: r,
  value: c
}) {
  return /* @__PURE__ */ e("div", { className: _e["select-container"], children: /* @__PURE__ */ l(
    "select",
    {
      name: n,
      value: c,
      className: t,
      children: [
        /* @__PURE__ */ e("option", { value: "", children: "Select  Options" }),
        r.map((s, a) => /* @__PURE__ */ e("option", { children: `${s.label}  ${s.value} ` }, a))
      ]
    }
  ) });
}
export {
  $ as Button,
  ue as Card,
  de as Input,
  me as Modal,
  he as Select,
  pe as Spinner
};

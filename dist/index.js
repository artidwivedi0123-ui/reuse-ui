import { jsx as e, jsxs as a, Fragment as w } from "react/jsx-runtime";
const b = "_button_1q19o_20", j = "_primary_1q19o_43", x = "_secondary_1q19o_59", C = "_others_1q19o_70", W = "_danger_1q19o_79", T = "_outline_1q19o_90", S = "_success_1q19o_101", B = "_small_1q19o_111", F = "_medium_1q19o_115", L = "_large_1q19o_119", M = "_full_width_1q19o_129", p = {
  button: b,
  primary: j,
  secondary: x,
  others: C,
  danger: W,
  outline: T,
  success: S,
  small: B,
  medium: F,
  large: L,
  full_width: M
};
function $({
  children: n,
  variant: s = "primary",
  size: t = "medium",
  disabled: l,
  leftIcon: r,
  rightIcon: c,
  onClick: i,
  fullWidth: d = !1,
  buttonType: _,
  loading: u = !1
}) {
  const m = `${p.button} ${p[s]} ${p[t]} ${d ? p.fullWidth : ""}`;
  return /* @__PURE__ */ e(
    "button",
    {
      type: _,
      className: m,
      disabled: l || u,
      onClick: i,
      children: u ? "Loading..." : /* @__PURE__ */ a(w, { children: [
        r,
        n,
        c
      ] })
    }
  );
}
const z = "_container_cgl1j_20", A = "_label_cgl1j_26", D = "_required_cgl1j_30", E = "_inputWrapper_cgl1j_34", G = "_input_cgl1j_34", H = "_error_cgl1j_56", J = "_helperText_cgl1j_65", o = {
  container: z,
  label: A,
  required: D,
  inputWrapper: E,
  input: G,
  error: H,
  helperText: J
};
function ue({
  type: n = "text",
  value: s,
  placeholder: t,
  name: l,
  label: r,
  helperText: c,
  required: i,
  disabled: d,
  error: _,
  leftIcon: u,
  rightIcon: m,
  readOnly: f,
  autoComplete: k,
  autoFocus: v,
  maxLength: N,
  onChange: q
}) {
  return /* @__PURE__ */ a("div", { className: o.container, children: [
    r && /* @__PURE__ */ a("label", { className: o.label, children: [
      r,
      i && /* @__PURE__ */ e("span", { className: o.required, children: "*" })
    ] }),
    /* @__PURE__ */ a("div", { className: o.inputWrapper, children: [
      u && /* @__PURE__ */ e("span", { children: u }),
      /* @__PURE__ */ e(
        "input",
        {
          className: o.input,
          type: n,
          value: s,
          name: l,
          placeholder: t,
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
    c && !_ && /* @__PURE__ */ e("small", { className: o.helperText, children: c }),
    _ && /* @__PURE__ */ e("small", { className: o.error, children: _ })
  ] });
}
const K = "_card_luywp_20", O = "_image_luywp_39", P = "_content_luywp_47", Q = "_title_luywp_52", h = {
  card: K,
  image: O,
  content: P,
  title: Q
};
function me({
  title: n,
  image: s,
  children: t,
  className: l,
  onClick: r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: `${h.card} ${l ?? ""}`,
      onClick: r,
      children: [
        s && /* @__PURE__ */ e(
          "img",
          {
            src: s,
            alt: n,
            className: h.image
          }
        ),
        /* @__PURE__ */ a("div", { className: h.content, children: [
          n && /* @__PURE__ */ e("h3", { className: h.title, children: n }),
          t
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
function pe({
  open: n,
  title: s,
  description: t,
  children: l,
  confirmText: r = "Confirm",
  cancelText: c = "Cancel",
  onConfirm: i,
  onClose: d,
  showFooter: _ = !0
}) {
  return n ? /* @__PURE__ */ e("div", { className: g.overlay, children: /* @__PURE__ */ a("div", { className: g.modal, children: [
    /* @__PURE__ */ e("h2", { children: s }),
    t && /* @__PURE__ */ e("p", { children: t }),
    l,
    _ && /* @__PURE__ */ a("div", { className: g.footer, children: [
      /* @__PURE__ */ e($, { variant: "outline", onClick: d, children: c }),
      /* @__PURE__ */ e($, { variant: "primary", onClick: i, children: r })
    ] })
  ] }) }) : null;
}
const X = "_spinner_13tk7_20", Y = "_spin_13tk7_20", Z = "_small_13tk7_32", I = "_medium_13tk7_38", ee = "_large_13tk7_44", ne = "_primary_13tk7_51", se = "_secondary_13tk7_56", te = "_success_13tk7_61", re = "_warning_13tk7_66", ce = "_danger_13tk7_71", le = "_dark_13tk7_76", ae = "_light_13tk7_81", _e = "_wrapper_13tk7_87", y = {
  spinner: X,
  spin: Y,
  small: Z,
  medium: I,
  large: ee,
  primary: ne,
  secondary: se,
  success: te,
  warning: re,
  danger: ce,
  dark: le,
  light: ae,
  wrapper: _e
};
function he({
  size: n = "medium",
  variant: s = "secondary"
}) {
  return /* @__PURE__ */ e("div", { className: y.wrapper, children: /* @__PURE__ */ e(
    "div",
    {
      className: `${y.spinner} ${y[n]} ${y[s]}`
    }
  ) });
}
const oe = "_select_16pq9_20", ie = {
  select: oe
};
function ye({
  name: n,
  value: s,
  options: t,
  className: l,
  onChange: r
}) {
  return /* @__PURE__ */ e(
    "select",
    {
      name: n,
      value: s,
      onChange: r,
      className: `${ie.select} ${l ?? ""}`,
      children: t?.map((c) => /* @__PURE__ */ e(
        "option",
        {
          value: c.value,
          children: c.label
        },
        c.value
      ))
    }
  );
}
export {
  $ as Button,
  me as Card,
  ue as Input,
  pe as Modal,
  ye as Select,
  he as Spinner
};

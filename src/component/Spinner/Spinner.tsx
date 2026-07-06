import style from "./Spinner.module.scss";
export type spinnerSize = "small" | "large" | "medium";
export type variranttype =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "dark"
  | "light";
interface SpinnerProps {
  size: spinnerSize;
  variant?: variranttype;
}

export default function Spinner({
  size = "medium",
  variant = "secondary",
}: SpinnerProps) {
  return (
    <div className={style.wrapper}>
      <div
        className={`${style.spinner} ${style[size]} ${style[variant]}`}
      ></div>
    </div>
  );
}

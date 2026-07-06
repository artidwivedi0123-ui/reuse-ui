export type spinnerSize = "small" | "large" | "medium";
export type variranttype = "primary" | "secondary" | "success" | "warning" | "danger" | "dark" | "light";
interface SpinnerProps {
    size: spinnerSize;
    variant?: variranttype;
}
export default function Spinner({ size, variant, }: SpinnerProps): import("react").JSX.Element;
export {};

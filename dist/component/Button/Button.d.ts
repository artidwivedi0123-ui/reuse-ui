import { ReactNode } from 'react';
export type variantType = "primary" | "secondary" | "danger" | "outline";
export type size = "small" | "medium" | "large";
export interface ButtonProps {
    variant?: variantType;
    size?: size;
    disabled?: boolean;
    children: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onClick?: () => void;
}
export default function Button({ children, variant, size, disabled, leftIcon, rightIcon, onClick }: ButtonProps): import("react").JSX.Element;

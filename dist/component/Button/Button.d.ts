import { ReactNode } from 'react';
export type variantType = "primary" | "secondary" | "danger" | "outline" | "others" | "success";
export type sizeType = "small" | "medium" | "large";
export type buttonType = "submit" | "reset" | "button";
export interface ButtonProps {
    variant?: variantType;
    size?: sizeType;
    buttonType?: buttonType;
    disabled?: boolean;
    children: ReactNode;
    leftIcon?: ReactNode;
    loading?: boolean;
    fullWidth?: boolean;
    rightIcon?: ReactNode;
    onClick?: () => void;
}
export default function Button({ children, variant, size, disabled, leftIcon, rightIcon, onClick, fullWidth, buttonType, loading }: ButtonProps): import("react").JSX.Element;

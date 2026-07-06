import styles from "./Button.module.scss";
import { ReactNode } from "react";

export type variantType = "primary" | "secondary" | "danger" | "outline" | "others" | "success"; 
 export type  sizeType = "small" | "medium" | "large"; 
 export type buttonType = "submit" | "reset" | "button";


export   interface ButtonProps {
  variant?: variantType;
  size?:  sizeType;
  buttonType?:buttonType;
  disabled?: boolean;
  children: ReactNode;
  leftIcon?: ReactNode;
  loading?:boolean;
  fullWidth?:boolean;
  rightIcon?: ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  disabled,
  leftIcon,
  rightIcon,
  onClick,
  fullWidth = false,
  buttonType,
  loading = false
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ""}`;
  return (
    <button
      type={buttonType}
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "Loading..." : (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  )}
    </button>
  );
}
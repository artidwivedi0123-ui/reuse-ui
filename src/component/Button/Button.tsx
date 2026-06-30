import styles from "./Button.module.scss";
import { ReactNode } from "react";

export type variantType = "primary" | "secondary" | "danger" | "outline" 
 export type  size = "small" | "medium" | "large"; 


export   interface ButtonProps {
  variant?: variantType;
  size?:  size;
  disabled?: boolean;
  children: ReactNode;
  leftIcon?: ReactNode;
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
  onClick
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;
  // console.log("className",className);
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
import styles from "./Input.module.scss";
import { ReactNode } from "react";

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  name?: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  readOnly?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  type = "text",
  value,
  placeholder,
  name,
  label,
  helperText,
  required,
  disabled,
  error,
  leftIcon,
  rightIcon,
  readOnly,
  autoComplete,
  autoFocus,
  maxLength,
  onChange,
}: InputProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.inputWrapper}>
        {leftIcon && <span>{leftIcon}</span>}

        <input
          className={styles.input}
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          onChange={onChange}
        />

        {rightIcon && <span>{rightIcon}</span>}
      </div>

      {helperText && !error && (
        <small className={styles.helperText}>{helperText}</small>
      )}

      {error && (
        <small className={styles.error}>{error}</small>
      )}
    </div>
  );
}
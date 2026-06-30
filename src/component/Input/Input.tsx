import styles from "./Input.module.scss";
import { ReactNode, ChangeEvent } from "react";
export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  name?:string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type = "text",
  value,
  placeholder,
  label,
  required,
  disabled,
  error,
  leftIcon,
  rightIcon,
  onChange,
  name
}: InputProps) {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label}>
          {label}
          <span className={styles.req}>{required && "*"}</span>
        </label>
      )}

      <div className={styles.inputWrapper}>
        {leftIcon}

        <input
          className={styles.input}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />

        {rightIcon}
      </div>

      {error && <p>{error}</p>}
    </div>
  );
}
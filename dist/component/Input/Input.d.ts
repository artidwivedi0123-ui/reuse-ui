import { ReactNode } from 'react';
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
export default function Input({ type, value, placeholder, name, label, helperText, required, disabled, error, leftIcon, rightIcon, readOnly, autoComplete, autoFocus, maxLength, onChange, }: InputProps): import("react").JSX.Element;

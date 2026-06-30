import { ReactNode, ChangeEvent } from 'react';
export interface InputProps {
    type?: React.HTMLInputTypeAttribute;
    value?: string;
    placeholder?: string;
    name?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ type, value, placeholder, label, required, disabled, error, leftIcon, rightIcon, onChange, name }: InputProps): import("react").JSX.Element;

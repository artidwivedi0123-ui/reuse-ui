interface SelectProps {
    name: string;
    value?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: {
        label: string;
        value: string | number;
    }[];
}
export default function Select({ name, value, options, className, onChange, }: SelectProps): import("react").JSX.Element;
export {};

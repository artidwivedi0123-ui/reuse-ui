interface SelectProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: {
        label: string;
        value: string | number;
    }[];
    className: string;
}
export default function Select({ name, className, options, value }: SelectProps): import("react").JSX.Element;
export {};

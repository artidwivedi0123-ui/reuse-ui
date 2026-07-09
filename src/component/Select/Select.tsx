import styles from "./Select.module.scss";

interface SelectProps {
  name: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  options: {
    label: string;
    value: string | number;
  }[];
}

export default function Select({
  name,
  value,
  options,
  className,
  onChange,
}: SelectProps) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`${styles.select} ${className ?? ""}`}
    >
      {options.map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
}
import style  from "./Select.module.scss";
interface  SelectProps {
    name:string;
    value:string;
    onChange?:(e:React.ChangeEvent<HTMLSelectElement>)=>void;
    options:{
        label:string | any;
        value:string |  number;
    } [];
    className:string;
}
export default function  Select({
    name,
    className,
    options,
    value
}:SelectProps) {
    return (
        <div className={style["select-container"]}>
            <select name={name}
             value={value}
              className={className}>
                <option value="">Select  Options</option>
                {options.map((opt,index)=>(
                    <option key={index}>
                        {`${opt.label}  ${opt.value} `}
                    </option>
                ))}
              </select>
        </div>
    )
}

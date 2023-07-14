import { ChangeEventHandler } from "react";

export interface InputProps {
  label?: string;
  name: string;
  type: string;
  htmlFor?: string;
  placeholder?: string;
  errors?: string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
  leadingIcon?: React.ReactElement;
  leadingIconOnClick?: () => void;
  trailingIcon?: React.ReactElement;
  trailingIconOnClick?: () => void;
}
const Input = (props: InputProps) => {
  return (
    <div className="relative flex flex-col flex-1">
      {props.label && (
        <label htmlFor={props.htmlFor} className="h-8 select-none">
          {props.label}
        </label>
      )}
      {props.placeholder && (
        <input
          type={props.type}
          name={props.name}
          placeholder={props?.placeholder}
          className="p-2 rounded-sm outline-none"
          onChange={props.onChange}
        />
      )}
      {props.trailingIcon && (
        <div
          onClick={props.trailingIconOnClick}
          className="absolute right-2 top-10 flex items-center justify-center
          h-6 w-6 rounded-full cursor-pointer"
        >
          {props.trailingIcon}
        </div>
      )}
      {props.errors && <div></div>}
    </div>
  );
};

export default Input;

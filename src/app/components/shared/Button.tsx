export interface ButtonProps {
  label?: string;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
  className?: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.leadingIcon && <div>{props.leadingIcon}</div>}
      <span>{props.label}</span>
      {props.trailingIcon && <div>{props.trailingIcon}</div>}
    </button>
  );
};

export default Button;

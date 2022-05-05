interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: String;
  variant?: String;
  icon?: React.ReactElement;
}

export const Button = ({
  onClick,
  text,
  variant = "primary",
  icon,
}: IProps): React.ReactElement => {
  const primaryClass =
    "flex items-center justify-center space-x-2 leading-10 px-6 bg-white text-black hover:bg-violet-700 w-52 hover:text-white text-sm font-thin group group:hover text-white";
  const secondaryClass =
    "flex items-center justify-center space-x-2 leading-10 px-6 bg-violet-700 text-white hover:bg-violet-900 w-52 hover:text-white text-sm font-thin group group:hover text-white";
  const buttonClass = variant === "primary" ? primaryClass : secondaryClass;
  return (
    <>
      <button className={buttonClass} onClick={onClick}>
        <span> {icon} </span>
        <span> {text} </span>
      </button>
    </>
  );
};

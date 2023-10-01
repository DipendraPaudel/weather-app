const Button = ({ label, isDisabled, handleClick = () => {} }: IButton) => {
  return (
    <button
      className={`px-8 h-full bg-primary text-white w-full ${
        isDisabled ? "cursor-not-allowed" : ""
      }`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;

interface IButton {
  label: string;
  isDisabled?: boolean;
  handleClick?: () => void;
}

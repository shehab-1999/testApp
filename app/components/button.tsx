interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = "",
  type,
 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`py-2 px-4 max-sm:p-1  rounded bg-[#222F66] text-white text-center items-center  hover:bg-blue-600 disabled:bg-gray-400 font-serif font-normal text-sm ${className}`}
    >
      {label}
  
    </button>
  );
};

export default Button;

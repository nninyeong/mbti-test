const Button = ({ children, type, className, onClick, ...props }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

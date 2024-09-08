const Button = ({ children, type, onSubmit, onClick, ...props }) => {
  return (
    <button
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

const FormInput = ({ label, name, type, value, setValue, className, ...props }) => {
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className={label ? 'grid grid-cols-[1fr_3fr]' : 'w-full'}>
      <span>{label}</span>
      <input
        className={`border rounded h-[35px] px-2 ${className}`}
        name={name}
        type={type}
        value={value.name}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default FormInput;

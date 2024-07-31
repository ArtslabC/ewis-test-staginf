import React, { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  const { name, value, onChange, onBlur, placeholder = "", type } = props;

  return (
    <input
      className="w-full rounded-2xl bg-white outline-blue-400 px-5 py-3 text-sm"
      name={name}
      value={value}
      ref={ref}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
});

export default FormInput;

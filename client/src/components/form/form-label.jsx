import React, { ReactNode } from "react";

const FormLabel = ({ text, htmlFor }) => {
  return (
    <label className="capitalize mb-2 text-sm" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default FormLabel;

import React, { ReactNode } from "react";

const Form = ({ children }) => {
  return (
    <div className="bg-blue-50/30  ring-1 rounded-2xl max-w-md border-blue-200 border-2 shadow-md m-6 p-6 w-full">
      {children}
    </div>
  );
};

export default Form;

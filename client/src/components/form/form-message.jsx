import React from "react";

const FormMessage = (props) => {
  const { error } = props;
  //   if (!message) return null;
  return <span className="text-xs text-red-400 mt-2">{error?.message}</span>;
};

export default FormMessage;

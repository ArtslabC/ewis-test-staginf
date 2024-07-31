import React from "react";

const FormLink = ({ href, text }) => {
  return (
    <a
      className="text-xs text-center text-text-1  font-semibold underline"
      href={href}
    >
      {text}
    </a>
  );
};

export default FormLink;

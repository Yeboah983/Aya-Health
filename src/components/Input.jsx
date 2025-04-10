import React from "react";

const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border px-3 py-2 rounded w-full focus:outline-blue-500"
    />
  );
};
export default Input;

import React from 'react'

const Button = ({ children, onClick, variant = "primary" }) => {
  const base = "px-4 py-2 rounded focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-black hover:bg-gray-300";
  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
};
export default Button;

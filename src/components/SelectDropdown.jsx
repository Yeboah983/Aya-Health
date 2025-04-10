import React from "react";

const SelectDropdown = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border px-3 py-2 rounded w-full focus:outline-blue-500"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
export default SelectDropdown;

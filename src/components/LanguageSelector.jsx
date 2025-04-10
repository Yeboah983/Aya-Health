import React from "react";

const LanguageSelector = ({ value, onChange }) => {
  const languages = [
    { label: "EN", value: "en" },
    { label: "TWI", value: "tw" },
    { label: "GA", value: "ga" },
    { label: "EWE", value: "ewe" },
    { label: "HAUSA", value: "hausa" },
  ];
  return (
    <SelectDropdown options={languages} value={value} onChange={onChange} />
  );
};
export default LanguageSelector;

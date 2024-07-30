// src/components/Dropdown.jsx
import React from "react";
import Select from "react-select";


const Dropdown = ({ label, value, onChange, options }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      <label style={{ fontSize: "1.2em", color: "#333" }}>{label}</label>
      <Select value={value} onChange={onChange} options={options} />
    </div>
  );
};

export default Dropdown;

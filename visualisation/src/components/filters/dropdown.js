import React from 'react';

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <label>
      {label}:
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;

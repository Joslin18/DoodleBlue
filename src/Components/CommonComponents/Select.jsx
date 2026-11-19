import React from "react";

export default function Select({
  label,
  name,
  value,
  onChange,
  options = [],
  error,
}) {
  return (
    <div className="input-group">
      <label className="label">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`select-field ${error ? "input-error" : ""}`}
      >
        <option value="">
          Select
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <span className="error-text">
          {error}
        </span>
      )}
    </div>
  );
}
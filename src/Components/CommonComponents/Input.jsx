import React from "react";

export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="input-group">
      <label className="label">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`input-field ${error ? "input-error" : ""}`}
      />

      {error && (
        <span className="error-text">
          {error}
        </span>
      )}
    </div>
  );
}
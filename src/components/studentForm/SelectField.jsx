
import React from "react";
import { AlertCircle } from "lucide-react";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 border rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        transition duration-300 ease-in-out 
        bg-white 
        border-gray-300 
        text-gray-900"
    >
      <option value="" className="text-gray-500">
        Select an option
      </option>
      {options.map((option) => (
        <option key={option} value={option} className="text-gray-900">
          {option}
        </option>
      ))}
    </select>
    {error && (
      <p className="text-red-500 mt-1 text-sm flex items-center">
        <AlertCircle size={16} className="mr-2" /> {error}
      </p>
    )}
  </div>
);

export default SelectField;
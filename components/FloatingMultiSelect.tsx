import React from "react";
import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  value: Option[] | null;
  onChange: (v: Option[] | null) => void;
  options: Option[];
}

const FloatingMultiSelect: React.FC<Props> = ({ label, value, onChange, options }) => {
  const hasValue = value && value.length > 0;

  return (
    <div className="relative w-64">
      {/* Floating Label */}
      <label
        className={`
          absolute left-3 px-1 bg-white text-gray-600 transition-all pointer-events-none
          ${hasValue ? "-top-2 text-xs" : "top-3 text-sm text-gray-400"}
        `}
      >
        {label}
      </label>

      <Select
        isMulti
        value={value || []}
        onChange={(v) => onChange(v as Option[])}
        options={options}
        className="text-sm"
        classNamePrefix="rs"
        styles={{
          control: (base, state) => ({
            ...base,
            paddingTop: hasValue ? 12 : 6,
            paddingBottom: 6,
            borderRadius: 12,
            borderColor: state.isFocused ? "#3b82f6" : "#9ca3af",
            boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
            "&:hover": { borderColor: state.isFocused ? "#3b82f6" : "#9ca3af" },
          }),
          valueContainer: (base) => ({
            ...base,
            paddingTop: 4,
          }),
        }}
      />
    </div>
  );
};

export default FloatingMultiSelect;

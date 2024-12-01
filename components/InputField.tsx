import React, { ChangeEvent, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface InputFieldProps {
  type: string;
  placeholder: string;
  id: string;
  name?: string;
  className?: string;
  defaultValue?: string;
  icon?: IconProp;
  suffixIcon?: IconProp;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSuffixIcon?: React.MouseEventHandler<SVGSVGElement>;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ type, name, id, icon, suffixIcon, className, defaultValue, placeholder, onChange, onClickSuffixIcon }, ref) => {
  return (
    <label className={`input input-bordered flex items-center gap-2 ${className}`}>
      {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4 opacity-70" />}
      <input
        ref={ref} // Forwarded ref to the input element
        type={type}
        id={id}
        name={name}
        className="grow"
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      {suffixIcon && <FontAwesomeIcon icon={suffixIcon} className="w-4 h-4 opacity-70 cursor-pointer" onClick={onClickSuffixIcon} />}
    </label>
  );
});

// Tambahkan displayName agar lebih mudah di-debug
InputField.displayName = "InputField";

export default InputField;

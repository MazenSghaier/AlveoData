import React, { useState, ChangeEvent } from "react";
import TextField from "@mui/material/TextField";

interface FormInputProps<T> {
  label: string;
  errorMessage: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: keyof T; // Use keyof T to represent the name property
}

const FormInput = <T extends {}>(props: FormInputProps<T>) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, name, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <TextField
        className={`inputAuth ${focused ? "focused" : ""} ${
          errorMessage ? "invalid" : ""
        }`}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
      />
      {errorMessage && <span className="spanAuth">{errorMessage}</span>}
    </div>
  );
};

export default FormInput;

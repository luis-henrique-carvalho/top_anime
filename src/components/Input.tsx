import React from "react";

interface Props {
  placeholder: string;
  type: "text" | "number" | "password"; // Specify the valid input types here
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = ({ placeholder, type, value, onChange }: Props) => {
  return (
    <input
      className="p-2 w-full text-white bg-transparent border-transparent placeholder-white placeholder-opacity-100 hover:placeholder-opacity-100 focus:placeholder-opacity-100 focus:text-blue focus:border-blue outline-none"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

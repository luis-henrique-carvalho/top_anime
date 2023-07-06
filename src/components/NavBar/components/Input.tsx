import React from "react";

interface Props {
  placeHolder: string;
}

const Input = ({ placeHolder }: Props) => {
  return (
    <input
      className="p-2 w-60 text-white bg-transparent border-transparent placeholder-white placeholder-opacity-100 hover:placeholder-opacity-100 focus:placeholder-opacity-100 focus:text-blue focus:border-blue outline-none"
      type="text"
      placeholder={placeHolder}
    />
  );
};

export default Input;

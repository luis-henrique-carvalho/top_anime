import React from "react";
import { redirect } from "next/navigation";

interface Props {
  value: string;
}

const Button: React.FC<Props> = ({ value }) => {
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    redirect(`/search?q=${value}`);
  };

  return (
    <button className="text-anime-white inline-block min-w-[7.5rem] h-10 text-center bg-transparent border-[0.1rem] border-solid border-anime-dark-200 rounded-full text-base leading-10 transition-all duration-300 select-none">
  {/* Conteúdo */}
      {value}
    </button>
  );
};

export default Button;

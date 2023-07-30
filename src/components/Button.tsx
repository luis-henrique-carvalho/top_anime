"use client";
import React from "react";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface Props {
  value: string;
}

const Button: React.FC<Props> = ({ value }) => {
  const searchParams = usePathname().replace("/search/", "");

  console.log(searchParams);

  return (
    <Link
      href={value === "Todos" ? "/" : `/search/${value}`}
      className={`text-anime-white ${
        searchParams === "/" && value === "Todos" ? "bg-[#151B26]" : ""
      } ${
        searchParams === value ? "bg-[#151B26]" : ""
      } inline-flex items-center justify-center w-20 md:w-32 text-xs md:text-lg h-10 text-center bg-transparent border-[0.1rem] border-solid border-anime-dark-200 rounded-full leading-10 transition-all duration-300 select-none`}
    >
      {value}
    </Link>
  );
};

export default Button;

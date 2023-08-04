"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  value: string;
}

const Button: React.FC<Props> = ({ value }) => {
  const searchParams = usePathname().replace("/search/", "");
  
  const isHome = searchParams == "/";
  const isSelected = searchParams == value;
  const isTodosButton = value == "Todos";

  return (
    <Link
      href={isTodosButton ? "/" : `/search/${value}`}
      className={`text-anime-white inline-flex hover:bg-anime-dark-200 hover:text-anime-white items-center justify-center w-20 md:w-32 text-xs md:text-lg h-10 text-center border-[0.1rem] border-solid border-anime-dark-200 rounded-full leading-10 transition-all duration-300 select-none ${
        (isHome && isTodosButton) || isSelected ? "bg-anime-blue" : ""
      }`}
    >
      {value}
    </Link>
  );
};

export default Button;

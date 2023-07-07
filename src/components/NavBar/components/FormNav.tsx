import Input from "@/components/Input";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  search: string;
  setSearch: (value: string) => void;
}

const FormNav = ({ handleSubmit, search, setSearch }: Props) => {
  return (
    <form
      className=" flex px-2  w-full md:w-60 lg:w-80 flex-row rounded-sm md:rounded-full border-2 hover:border hover:border-anime-blue border-transparent bg-anime-dark-200 justify-around transition duration-500 ease-out"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="w-12 h-12 text-white border-transparent bg-transparent transition-all duration-300 ease-out">
        <BiSearchAlt className="w-8 h-8 transition-all duration-300 ease-out" />
      </button>
    </form>
  );
};

export default FormNav;

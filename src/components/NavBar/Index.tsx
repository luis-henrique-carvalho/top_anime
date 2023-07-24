// Flow
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
// Components
import NoUnderlineLink from "./components/NoUnderlineLink";
import FormNav from "./components/FormNav";
import SearchNav from "./components/SearchNav";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const pathName = usePathname();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return;
  };

  return (
    <header className="mx-auto p-4 container">
      <nav className="flex flex-col w-full mt-6 gap-6 items-center justify-between  md:flex-row">
        <div>
          <p className="text-4xl md:text-3xl font-semibold text-anime-blue">
            <NoUnderlineLink href="/">TopAnimes</NoUnderlineLink>
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full lg:w-auto items-center  xl:gap-x-20 gap-x-10">
          <ul className="flex flex-row mb-2 w-full justify-between text-anime-white text-base ">
            <li>
              <NoUnderlineLink href="/">Início</NoUnderlineLink>
            </li>
            <li>
              <NoUnderlineLink href="/">Lista</NoUnderlineLink>
            </li>
            <li>
              <NoUnderlineLink href="/">Gêneros</NoUnderlineLink>
            </li>
            <li>
              <NoUnderlineLink href="/">Novos Episódios</NoUnderlineLink>
            </li>
          </ul>
          <FormNav
            search={search}
            setSearch={setSearch}
            handleSubmit={handleSubmit}
          />
        </div>
      </nav>
      {pathName === "/" && <SearchNav />}
    </header>
  );
};

export default NavBar;

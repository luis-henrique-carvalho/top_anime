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
    <header
      className={
        pathName === "/"
          ? "container  flex mx-auto flex-col h-63 items-center mt-12 font-normal text-base text-anime-white "
          : "container flex mx-auto flex-col items-center text-anime-white h-24  mt-12 text-base"
      }
    >
      <nav className="flex w-full h-1/2 flex-row justify-between items-center">
        <div>
          <p className=" text-[40px] font-medium text-anime-blue">
            <NoUnderlineLink href="/">TopAnimes</NoUnderlineLink>
          </p>
        </div>
        <div className=" flex items-center gap-8">
          <ul className=" flex flex-row gap-12 list-none p-4">
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
      {pathName === "/" ? <SearchNav /> : <></>}
    </header>
  );
};

export default NavBar;

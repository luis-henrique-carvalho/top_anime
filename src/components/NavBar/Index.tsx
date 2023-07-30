// Flow
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// Components
import NoUnderlineLink from "./components/NoUnderlineLink";
import FormNav from "./components/FormNav";
import SearchNav from "../SearchNav";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const pathName = usePathname();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`../search/${search}`);
    return;
  };

  return (
    <header className="container my-6 md:px-10 min-w-full ">
      <nav className="flex flex-col w-full gap-6 items-center justify-between  md:flex-row">
        <div>
          <p className="text-4xl md:text-3xl font-semibold text-anime-blue">
            <NoUnderlineLink href="/">TopAnimes</NoUnderlineLink>
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full lg:w-auto items-center xl:gap-x-20 gap-x-10">
          <ul className="flex flex-row mb-2 md:mb-0 w-full items-center justify-between text-anime-white text-base ">
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

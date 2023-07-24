"use client"
import React, { createContext, PropsWithChildren, useContext } from "react";

interface AnimeContextData {
    anime:string
}

const AnimeContext = createContext<AnimeContextData>({} as AnimeContextData);
const anime = "naruto"
export const AnimeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <AnimeContext.Provider value={{anime}}>{children}</AnimeContext.Provider>;
};

export function useAnime() {
  const context = useContext(AnimeContext);

  return context;
}

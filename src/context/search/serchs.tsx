import React, { createContext, useState, useCallback, useContext } from "react";

interface SearchContextProps {
  orderBy: string | undefined;
  setOrderBy: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [orderBy, setOrderBy] = useState<string | undefined>(undefined);

 

  return (
    <SearchContext.Provider
      value={{
        setOrderBy,
        orderBy,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

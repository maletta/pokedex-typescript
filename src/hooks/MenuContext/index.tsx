import { IGetPokemon, IGetPokemonList } from "api";
import React, { useState, createContext, useContext } from "react";

type IMenuContextProps = {
  children: React.ReactNode;
};

interface IMenuContext {
  isGeneration: boolean;
  isSort: boolean;
  isFilter: boolean;
  pokemonList: IGetPokemon[];
  pokemonResultList: IGetPokemonList | null;
  pageScrollY: number;
  setIsGeneration: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSort: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setPokemonList: React.Dispatch<React.SetStateAction<IGetPokemon[]>>;
  setPokemonResultList: React.Dispatch<React.SetStateAction<IGetPokemonList | null>>;
  setPageScrollY: React.Dispatch<React.SetStateAction<number>>;
}

const initialValues: IMenuContext = {
  isGeneration: false,
  isSort: false,
  isFilter: false,
  pokemonList: [],
  pokemonResultList: null,
  pageScrollY: 0,
  setIsGeneration: () => { /* intentionally empty */ },
  setIsSort: () => {/* intentionally empty */ },
  setIsFilter: () => { /* intentionally empty */ },
  setPokemonList: () => {/* intentionally empty */ },
  setPokemonResultList: () => { /* intentionally empty */ },
  setPageScrollY: () => {/* intentionally empty */ }
};

const MenuContext = createContext<IMenuContext>(initialValues);

const MenuContextProvider = ({ children }: IMenuContextProps) => {
  const [isGeneration, setIsGeneration] = useState<boolean>(false);
  const [isSort, setIsSort] = useState<boolean>(false);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  const [pokemonList, setPokemonList] = useState<IGetPokemon[]>([]);
  const [pokemonResultList, setPokemonResultList] = useState<IGetPokemonList | null>(null);
  const [pageScrollY, setPageScrollY] = useState<number>(0);

  return (
    <MenuContext.Provider
      value={{
        isGeneration,
        isSort,
        isFilter,
        pokemonList,
        pokemonResultList,
        pageScrollY,
        setIsGeneration,
        setIsSort,
        setIsFilter,
        setPokemonList,
        setPokemonResultList,
        setPageScrollY
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);

export default MenuContextProvider;

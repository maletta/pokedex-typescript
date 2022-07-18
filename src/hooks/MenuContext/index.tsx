import React, { useState, createContext, useContext } from "react";

type IMenuContextProps = {
  children: React.ReactNode;
};

interface IMenuContext {
  isGeneration: boolean;
  isSort: boolean;
  isFilter: boolean;
  setIsGeneration: (value: boolean) => void;
  setIsSort: (value: boolean) => void;
  setIsFilter: (value: boolean) => void;
}

const initialValues: IMenuContext = {
  isGeneration: false,
  isSort: false,
  isFilter: false,
  setIsGeneration: () => {
    return false;
  },
  setIsSort: () => {
    return false;
  },
  setIsFilter: () => {
    return false;
  },
};

const MenuContext = createContext<IMenuContext>(initialValues);

const MenuContextProvider = ({ children }: IMenuContextProps) => {
  const [menu, setMenu] = useState<IMenuContext>(initialValues);
  const [isGeneration, setIsGeneration] = useState<boolean>(true);
  const [isSort, setIsSort] = useState<boolean>(false);
  const [isFilter, setIsFilter] = useState<boolean>(false);

  return (
    <MenuContext.Provider
      value={{
        isGeneration,
        isSort,
        isFilter,
        setIsGeneration,
        setIsSort,
        setIsFilter,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);

export default MenuContextProvider;

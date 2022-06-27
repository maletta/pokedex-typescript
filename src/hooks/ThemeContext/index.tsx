import React, { createContext, useContext, useState, useEffect } from "react";

export type ColorName =
  | "BUG"
  | "DARK"
  | "DRAGON"
  | "ELECTRIC"
  | "FAIRY"
  | "FIGHTING"
  | "FIRE"
  | "FLYING"
  | "GHOST"
  | "GRASS"
  | "GROUND"
  | "ICE"
  | "NORMAL"
  | "POISON"
  | "PSYCHIC"
  | "ROCK"
  | "STEEL"
  | "WATER";

export enum PokemonTypes {
  BUG = "BUG",
  DARK = "DARK",
  DRAGON = "DRAGON",
  ELECTRIC = "ELECTRIC",
  FAIRY = "FAIRY",
  FIGHTING = "FIGHTING",
  FIRE = "FIRE",
  FLYING = "FLYING",
  GHOST = "GHOST",
  GRASS = "GRASS",
  GROUND = "GROUND",
  ICE = "ICE",
  NORMAL = "NORMAL",
  POISON = "POISON",
  PSYCHIC = "PSYCHIC",
  ROCK = "ROCK",
  STEEL = "STEEL",
  WATER = "WATER",
}

export enum PokemonHeight {
  SHORT = "SHORT",
  MEDIUM = "MEDIUM",
  TALL = "TALL",
}

export enum PokemonWeight {
  LIGHT = "LIGHT",
  NORMAL = "NORMAL",
  HEAVY = "HEAVY",
}

export type ColorTypesGenerics = {
  [key in PokemonTypes]: string;
};

export type ColorHeightGenerics = {
  [key in PokemonHeight]: string;
};

export type ColorWeightGenerics = {
  [key in PokemonWeight]: string;
};

const ColorType: ColorTypesGenerics = {
  BUG: "#8CB230",
  DARK: "#17171B",
  DRAGON: "#0F6AC0",
  ELECTRIC: "#EED535",
  FAIRY: "#ED6EC7",
  FIGHTING: "#D04164",
  FIRE: "#FD7D24",
  FLYING: "#748FC9",
  GHOST: "#556AAE",
  GRASS: "#62B957",
  GROUND: "#DD7748",
  ICE: "#61CEC0",
  NORMAL: "#9DA0AA",
  POISON: "#A552CC",
  PSYCHIC: "#EA5D60",
  ROCK: "#BAAB82",
  STEEL: "#417D9A",
  WATER: "#4A90DA",
};

const ColorTypeBackground: ColorTypesGenerics = {
  BUG: "#8BD674",
  DARK: "#6F6E78",
  DRAGON: "#7383B9",
  ELECTRIC: "#F2CB55",
  FAIRY: "#EBA8C3",
  FIGHTING: "#EB4971",
  FIRE: "#FFA756",
  FLYING: "#83A2E3",
  GHOST: "#8571BE",
  GRASS: "#8BBE8A",
  GROUND: "#F78551",
  ICE: "#91D8DF",
  NORMAL: "#B5B9C4",
  POISON: "#9F6E97",
  PSYCHIC: "#FF6568",
  ROCK: "#D4C294",
  STEEL: "#4C91B2",
  WATER: "#58ABF6",
};

const ColorHeight: ColorHeightGenerics = {
  SHORT: "#FFC5E6",
  MEDIUM: "#AEBFD7",
  TALL: "#AAACB8",
};

const ColorWeight: ColorWeightGenerics = {
  LIGHT: "#99CD7C",
  NORMAL: "#57B2DC",
  HEAVY: "#5A92A5",
};

type IThemeColors = {
  type: ColorTypesGenerics;
  background: ColorTypesGenerics;
  height: ColorHeightGenerics;
  weight: ColorWeightGenerics;
};

type ITheme = {
  colors: IThemeColors;
};

type IThemeProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ITheme>({
  colors: {
    type: ColorType,
    background: ColorTypeBackground,
    height: ColorHeight,
    weight: ColorWeight,
  },
});

const ThemeContextProvider = ({ children }: IThemeProps) => {
  const [colors, setColors] = useState<IThemeColors>({
    type: ColorType,
    background: ColorTypeBackground,
    height: ColorHeight,
    weight: ColorWeight,
  });

  function iterateColors<T>(array: T, label: string) {
    let key: keyof T;
    for (key in array) {
      console.log(label, array[key]);
    }
  }

  useEffect(() => {
    iterateColors(colors.height, "colors.height");
    iterateColors(colors.weight, "colors.weight");
  }, []);

  return <ThemeContext.Provider value={{ colors: colors }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as ThemeProviderStyledComponent } from "styled-components";
import {
  ColorHeightGenerics,
  // ColorName,
  ColorTypesGenerics,
  ColorWeightGenerics,
  ColorDefaultGenerics,
  ITheme,
  // IThemeColors,
  // PokemonHeight,
  // PokemonTypes,
  // PokemonWeight,
} from "types/theme-types";

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

const ColorDefault: ColorDefaultGenerics = {
  WHITE: "#FFF",
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
    default: ColorDefault,
  },
});

const ThemeContextProvider = ({ children }: IThemeProps) => {
  const [theme, setTheme] = useState<ITheme>({
    colors: {
      type: ColorType,
      background: ColorTypeBackground,
      height: ColorHeight,
      weight: ColorWeight,
      default: ColorDefault,
    },
  });

  function iterateColors<T>(array: T, label: string) {
    let key: keyof T;
    for (key in array) {
      console.log(label, array[key]);
    }
  }

  useEffect(() => {
    // iterateColors(theme.colors.height, "colors.height");
    // iterateColors(theme.colors.weight, "colors.weight");
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProviderStyledComponent theme={theme}>{children}</ThemeProviderStyledComponent>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;

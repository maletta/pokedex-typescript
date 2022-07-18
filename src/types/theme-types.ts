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
type PokemonTypesTypeOf = typeof PokemonTypes; // transforma o enum em tipo
export type PokemonTypesKeyOf = keyof PokemonTypesTypeOf; // obtem as chaves do tipo em union de strings

export enum PokemonHeight {
  SHORT = "SHORT",
  MEDIUM = "MEDIUM",
  TALL = "TALL",
}
type PokemonHeightTypeOf = typeof PokemonHeight; // transforma o enum em tipo
export type PokemonHeightKeyOf = keyof PokemonHeightTypeOf; // obtem as chaves do tipo em union de strings

export enum PokemonWeight {
  LIGHT = "LIGHT",
  NORMAL = "NORMAL",
  HEAVY = "HEAVY",
}
type PokemonWeightTypeOf = typeof PokemonWeight; // transforma o enum em tipo
export type PokemonWeightKeyOf = keyof PokemonWeightTypeOf; // obtem as chaves do tipo em union de strings

enum DefaultColors {
  WHITE = "WHITE",
  GREY = "GREY",
  BLACK = "BLACK",
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

export type ColorDefaultGenerics = {
  [key in DefaultColors]: string;
};

export type IThemeColors = {
  type: ColorTypesGenerics;
  typeOpacity: ColorTypesGenerics;
  background: ColorTypesGenerics;
  height: ColorHeightGenerics;
  weight: ColorWeightGenerics;
  default: ColorDefaultGenerics;
};

export type ITheme = {
  colors: IThemeColors;
};

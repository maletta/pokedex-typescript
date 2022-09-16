export enum PokemonTypes {
  NORMAL = "NORMAL",
  FIGHTING = "FIGHTING",
  FLYING = "FLYING",
  POISON = "POISON",
  GROUND = "GROUND",
  ROCK = "ROCK",
  BUG = "BUG",
  GHOST = "GHOST",
  STEEL = "STEEL",
  FIRE = "FIRE",
  WATER = "WATER",
  GRASS = "GRASS",
  ELECTRIC = "ELECTRIC",
  PSYCHIC = "PSYCHIC",
  ICE = "ICE",
  DRAGON = "DRAGON",
  DARK = "DARK",
  FAIRY = "FAIRY",
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
  heightOpacity: ColorHeightGenerics;
  weight: ColorWeightGenerics;
  weightOpacity: ColorWeightGenerics;
  default: ColorDefaultGenerics;
};

export type ITheme = {
  colors: IThemeColors;
  types: Array<PokemonTypes>;
  heights: Array<PokemonHeight>;
  weights: Array<PokemonWeight>;
};

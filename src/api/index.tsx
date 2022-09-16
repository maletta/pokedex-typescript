import axios from "axios";
import { Params } from "react-router-dom";

interface IGetPokemonSpecies {
  name: string;
  url: string;
}

interface IGetPokemonStats {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

interface IGetPokemoType {
  slot: number;
  type: { name: string; url: string };
}

interface IGetPokemon {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  past_types: [];
  species: IGetPokemonSpecies;
  sprites: { other: { "official-artwork": { front_default: string } } };
  stats: [IGetPokemonStats, IGetPokemonStats, IGetPokemonStats, IGetPokemonStats, IGetPokemonStats, IGetPokemonStats];
  types: IGetPokemoType[];
  weight: number;
}

interface IGetPokemonListParams {
  limit?: number;
  offset?: number;
}

interface IGetPokemonList {
  count: number;
  next: string;
  previous: string | null;
  results: Array<{ name: string; url: string }>;
}

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

function getPokemon(idOrName: string | number) {
  return instance.get<IGetPokemon>(`/pokemon/${idOrName}`);
}

function getPokemonList(parms: IGetPokemonListParams) {
  const { limit, offset } = parms;
  return instance.get<IGetPokemonList>(`/pokemon`, {
    params: {
      limit: limit || 20,
      offset: offset || 0,
    },
  });
}

export { getPokemon, getPokemonList };

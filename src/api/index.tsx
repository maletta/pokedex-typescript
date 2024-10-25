import axios, { CancelToken } from 'axios';
import { PokemonTypesKeyOf } from 'types/theme-types';

interface IGetPokemonSpecies {
  name: string;
  url: string;
}

interface IGetPokemonStats {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
}

interface IGetPokemonType {
  slot: number;
  type: { name: PokemonTypesKeyOf; url: string };
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
  sprites: { other: { 'official-artwork': { front_default: string } } };
  stats: [IGetPokemonStats, IGetPokemonStats, IGetPokemonStats, IGetPokemonStats, IGetPokemonStats, IGetPokemonStats];
  types: IGetPokemonType[];
  weight: number;
}

interface IGetPokemonListParams {
  limit?: number;
  offset?: number;
  token?: CancelToken | undefined;
}

interface IGetPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{ name: string; url: string }>;
}

interface IGetFlavorTextEntries {
  flavor_text: string;
  language: {
    name: 'en' | 'es';
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

interface IGetPokemonSpecies {
  id: number;
  name: string;
  egg_groups: [{ name: string; url: string }];
  growth_rate: { name: string; url: string };
  evolve_from_species: {
    name: string;
    url: string;
  } | null;
  evolution_chain: {
    url: string;
  };

  flavor_text_entries: Array<IGetFlavorTextEntries>;
  generation: {
    name: string;
    url: string;
  };

  genera: [
    {
      genus: string;
      language: {
        name: 'en' | 'es';
        url: string;
      };
    },
  ];
}

interface EvolvesTo {
  evolves_to: [EvolvesTo];
  evolution_details: [{ min_level: number }];
  is_baby: boolean;
  species: { name: string; url: string };
}
interface IGetPokemonEvolutionChain {
  chain: EvolvesTo;
  id: number;
}

const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

function getPokemon(idOrName: string | number) {
  return axiosInstance.get<IGetPokemon>(`/pokemon/${idOrName}`);
}

function getPokemonList(parms: IGetPokemonListParams = {}) {
  const { limit, offset, token } = parms;
  return axiosInstance.get<IGetPokemonList>(`/pokemon`, {
    params: {
      limit: limit || 20,
      offset: offset || 0,
    },
    cancelToken: token,
  });
}

function getPokemonSpecies(idOrName: string | number) {
  return axiosInstance.get<IGetPokemonSpecies>(`/pokemon-species/${idOrName}`);
}

function getPokemonEvolutionChain(evChainId: number) {
  return axiosInstance.get<IGetPokemonEvolutionChain>(`/evolution-chain/${evChainId}`);
}

export {
  IGetPokemon,
  IGetPokemonList,
  IGetPokemonType,
  IGetPokemonStats,
  IGetPokemonSpecies,
  IGetPokemonEvolutionChain,
  EvolvesTo,
  getPokemon,
  getPokemonList,
  getPokemonSpecies,
  getPokemonEvolutionChain,
};

import { IGetPokemonStats, IGetPokemonType } from 'api';
import { PokemonTypesKeyOf } from 'types/theme-types';

function fillPokemonNumber(number: number): string {
  const numberString = String(number);
  const numberFilled = numberString.padStart(3, '0');

  return `#${numberFilled}`;
}

function pokemonTypesRequestAdapter(types: IGetPokemonType[]): Array<PokemonTypesKeyOf> {
  const pokemonTypesAdapter = types.filter(itemTypes => itemTypes).map(itemTypes => itemTypes.type.name.toUpperCase() as PokemonTypesKeyOf);

  return pokemonTypesAdapter;
}

function sumPokemonStats(pokemonStats: IGetPokemonStats[]): number {
  return pokemonStats.reduce((acc, stats) => {
    return acc + stats.base_stat;
  }, 0);
}

function getEvolutionChainId(evolutionChainUrl: string): number | null {
  const stringSplitted = evolutionChainUrl.split('/') as Array<string>;
  const sliced = stringSplitted.slice(stringSplitted.length - 2, stringSplitted.length - 1);
  try {
    const evolutionChainId = parseInt(sliced[0]);
    return evolutionChainId;
  } catch (error) {
    return null;
  }
}

export { fillPokemonNumber, pokemonTypesRequestAdapter, sumPokemonStats, getEvolutionChainId };

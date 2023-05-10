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

export { fillPokemonNumber, pokemonTypesRequestAdapter, sumPokemonStats };

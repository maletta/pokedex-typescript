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


function slugify(text: string): string {
  return text
    .toString() // Garante que o input é uma string
    .normalize('NFD') // Normaliza a string para decompor caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
    .trim() // Remove espaços em branco do início e do final
    .toLowerCase() // Converte para minúsculas
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    // eslint-disable-next-line no-useless-escape
    .replace(/[^\w\-]+/g, '') // Remove caracteres especiais, exceto hífens e letras/números
    // eslint-disable-next-line no-useless-escape
    .replace(/\-\-+/g, '-') // Substitui múltiplos hífens por um único hífen
    .replace(/^-+|-+$/g, ''); // Remove hífens no início e no final
}

export { fillPokemonNumber, pokemonTypesRequestAdapter, sumPokemonStats, getEvolutionChainId, slugify };

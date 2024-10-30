export interface ICSVPokemon {
  id: number;
  name: string;
  genre: string | null | undefined;
  type1: string;
  type2: string;
  generation: number;
}


export const removeDuplicatePokemonsWithSet = (pokemons: ICSVPokemon[]): ICSVPokemon[] => {
  const seenIds = new Set<number>();

  return pokemons.filter(pokemon => {
    if (seenIds.has(pokemon.id)) {
      return false; // Ignora o Pokémon se o ID já foi visto
    }
    seenIds.add(pokemon.id); // Marca o ID como visto
    return true;
  });
};

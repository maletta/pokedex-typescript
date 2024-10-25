import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import { FilterTitle, PokemonName, PokemonNumber } from 'components/Titles';

import { PokemonTypesKeyOf } from 'types/theme-types';

import { EvolutionContainer, EvolutionGrid, PokemonInfo, PokemonImage, LevelUp } from './styles';

import { ReactComponent as BackIconSVG } from 'assets/back-icon.svg';
import { EvolvesTo, IGetPokemon, IGetPokemonSpecies, getPokemon, getPokemonEvolutionChain } from 'api';
import { fillPokemonNumber, getEvolutionChainId } from 'util/utilities';
import { useParams } from 'react-router-dom';

interface EvolutionProps {
  isOpen: boolean;
  type: PokemonTypesKeyOf;
  pokemonSpecies: IGetPokemonSpecies;
}

const Evolution: React.FC<EvolutionProps> = ({ isOpen, type, pokemonSpecies }) => {
  const { colors } = useTheme();
  const chainId = getEvolutionChainId(pokemonSpecies.evolution_chain.url);
  const [evolutions, setEvolutions] = useState<EvolvesTo[]>([]);
  const [pokemons, setPokemons] = useState<IGetPokemon[]>([]);
  const { pokemonId } = useParams();

  function spreadEvolutionsToArray(evolvesTo: EvolvesTo[], evolutionArray: EvolvesTo[]) {
    if (evolvesTo[0].evolves_to.length > 0) {
      spreadEvolutionsToArray(evolvesTo[0].evolves_to, evolutionArray);
    }

    evolutionArray.push(evolvesTo[0]);
  }

  useEffect(() => {
    if (chainId) {
      getPokemonEvolutionChain(chainId).then(response => {
        const evolutionsObjToArray: EvolvesTo[] = [];
        spreadEvolutionsToArray([response.data.chain], evolutionsObjToArray);
        setEvolutions(evolutionsObjToArray.reverse());
      });
    }
  }, [pokemonSpecies]);

  useEffect(() => {
    const getPokemonPromises = evolutions.length > 0 ? evolutions.map(pk => getPokemon(pk.species.name)) : [getPokemon(String(pokemonId))];
    Promise.all(getPokemonPromises).then(response => {
      const mapData = response.map(item => item.data);
      setPokemons(mapData);
    });
  }, [evolutions]);

  function render(pk: IGetPokemon[], evolvesTo: EvolvesTo[]): JSX.Element | JSX.Element[] {
    if (evolvesTo.length === 1) {
      return renderComponent(pk[0], evolvesTo[0]);
    } else {
      const elementJsx = [];

      for (let index = 0; index < pk.length - 1; index++) {
        elementJsx.push(renderComponent(pk[index], evolvesTo[index + 1], pk[index + 1]));
      }
      return elementJsx;
    }
  }

  function renderComponent(pk: IGetPokemon, evolvesTo: EvolvesTo, pkEvolvesTo?: IGetPokemon) {
    return (
      <EvolutionGrid key={pk.species.name}>
        <PokemonInfo>
          <PokemonImage>
            <img src={pk.sprites.other['official-artwork'].front_default} alt="pokemon illustrate" />
          </PokemonImage>
          <PokemonNumber customCss={{ color: colors.default.GREY, fontWeight: 500 }}>{fillPokemonNumber(pk.id)}</PokemonNumber>
          <PokemonName customCss={{ fontSize: '1.6rem', lineHeight: '1.9rem', textTransform: 'capitalize' }}>{pk.name}</PokemonName>
        </PokemonInfo>

        {pkEvolvesTo && (
          <LevelUp>
            <BackIconSVG />
            {evolvesTo.evolution_details[0].min_level && `Level ${evolvesTo.evolution_details[0].min_level}`}
          </LevelUp>
        )}

        {pkEvolvesTo && (
          <PokemonInfo>
            <PokemonImage>
              <img src={pkEvolvesTo.sprites.other['official-artwork'].front_default} alt="pokemon illustrate" />
            </PokemonImage>
            <PokemonNumber customCss={{ color: colors.default.GREY, fontWeight: 500 }}>{fillPokemonNumber(pkEvolvesTo.id)}</PokemonNumber>
            <PokemonName customCss={{ fontSize: '1.6rem', lineHeight: '1.9rem', textTransform: 'capitalize' }}>
              {pkEvolvesTo.name}
            </PokemonName>
          </PokemonInfo>
        )}
      </EvolutionGrid>
    );
  }

  return (
    <EvolutionContainer className={isOpen ? 'isOpen' : ''}>
      <FilterTitle customCss={{ color: colors.type[type] }}>Evolution Chart</FilterTitle>
      {render(pokemons, evolutions)}
    </EvolutionContainer>
  );
};

export default Evolution;

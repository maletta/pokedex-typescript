import React from 'react';
import { useTheme } from 'styled-components';
import { useTypeEffectiveness } from 'hooks/TypeCalculatorHook';

import { Description, FilterTitle } from 'components/Titles';
import { IconBasePokemonTypes } from 'components/IconBase';

import {
  StatsContainer,
  GridStats,
  GridStatsItem,
  Bar,
  GridStatsDescription,
  GridEffectiveness,
  GridEffectivenessItem,
  EffectivenessBadge,
} from './styles';
import { PokemonTypesKeyOf } from 'types/theme-types';
import { IGetPokemonStats } from 'api';
import { sumPokemonStats } from 'util/utilities';

interface StatsProps {
  isOpen: boolean;
  types: PokemonTypesKeyOf[];
  pokemonStats: IGetPokemonStats[];
}

const Stats: React.FC<StatsProps> = ({ isOpen, types, pokemonStats }) => {
  const { colors } = useTheme();

  const [effectivenessType, effectivenessValue] = useTypeEffectiveness(types);
  // console.log("effectiveness ", effectivenessValue);

  function getEffectivenessString(percent: number): string {
    switch (percent) {
      case 1:
        return '';
      case 1 / 2:
        return `½`;
      case 1 / 4:
        return `¼`;
      default:
        return `${percent}`;
    }
  }

  return (
    <StatsContainer className={isOpen ? 'isOpen' : ''}>
      <FilterTitle customCss={{ color: colors.type[types[0]] }}>Base Stats</FilterTitle>

      <GridStats>
        <GridStatsItem className="title">{pokemonStats[0].stat.name}</GridStatsItem>
        <GridStatsItem className="value">{pokemonStats[0].base_stat}</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={50} type={types[0]} />
        </GridStatsItem>
        <GridStatsItem className="min">X</GridStatsItem>
        <GridStatsItem className="max">X</GridStatsItem>

        <GridStatsItem className="title">{pokemonStats[1].stat.name}</GridStatsItem>
        <GridStatsItem className="value">{pokemonStats[1].base_stat}</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={types[0]} />
        </GridStatsItem>
        <GridStatsItem className="min">X</GridStatsItem>
        <GridStatsItem className="max">X</GridStatsItem>

        <GridStatsItem className="title">{pokemonStats[2].stat.name}</GridStatsItem>
        <GridStatsItem className="value">{pokemonStats[2].base_stat}</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={types[0]} />
        </GridStatsItem>
        <GridStatsItem className="min">X</GridStatsItem>
        <GridStatsItem className="max">X</GridStatsItem>

        <GridStatsItem className="title">{pokemonStats[3].stat.name}</GridStatsItem>
        <GridStatsItem className="value">{pokemonStats[3].base_stat}</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={types[0]} />
        </GridStatsItem>
        <GridStatsItem className="min">X</GridStatsItem>
        <GridStatsItem className="max">X</GridStatsItem>

        <GridStatsItem className="title">{pokemonStats[4].stat.name}</GridStatsItem>
        <GridStatsItem className="value">{pokemonStats[4].base_stat}</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={types[0]} />
        </GridStatsItem>
        <GridStatsItem className="min">X</GridStatsItem>
        <GridStatsItem className="max">X</GridStatsItem>

        <GridStatsItem className="title">{pokemonStats[5].stat.name}</GridStatsItem>
        <GridStatsItem className="value">{pokemonStats[5].base_stat}</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={types[0]} />
        </GridStatsItem>
        <GridStatsItem className="min">X</GridStatsItem>
        <GridStatsItem className="max">X</GridStatsItem>

        <GridStatsItem className="title">Total</GridStatsItem>
        <GridStatsItem className="value bold">{sumPokemonStats(pokemonStats)}</GridStatsItem>
        <GridStatsItem className="bar"></GridStatsItem>
        <GridStatsItem className="min bold">Min</GridStatsItem>
        <GridStatsItem className="max bold">Max</GridStatsItem>
      </GridStats>

      <GridStatsDescription>
        The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum
        values are based on a hindering nature, 0 EVs, 0 IVs.
      </GridStatsDescription>

      <FilterTitle customCss={{ color: colors.type[types[0]] }}>Type Defenses</FilterTitle>
      <Description customCss={{ color: colors.default.GREY, marginTop: '20px', marginBottom: '20px' }}>
        The effectiveness of each type on Bulbasaur.
      </Description>

      <GridEffectiveness>
        {effectivenessType.map((type, index) => (
          <GridEffectivenessItem key={type}>
            <EffectivenessBadge type={type}>
              <IconBasePokemonTypes type={type} variant={'secondary'} size={15} />
            </EffectivenessBadge>
            <span>{getEffectivenessString(effectivenessValue[index])}</span>
          </GridEffectivenessItem>
        ))}
      </GridEffectiveness>
    </StatsContainer>
  );
};

export default Stats;

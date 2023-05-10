import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { useTypeWeaknesses } from 'hooks/TypeCalculatorHook';

import { Description, FilterTitle } from 'components/Titles';
import { IconBasePokemonTypes } from 'components/IconBase';
import { PokemonTypesKeyOf } from 'types/theme-types';

import { AboutContainer, GridInfo, GridInfoItem, WeaknessBadge } from './styles';

interface AboutProps {
  isOpen: boolean;
  types: PokemonTypesKeyOf[];
}

const About: React.FC<AboutProps> = ({ isOpen, types }) => {
  const { colors } = useTheme();
  const pokemonDescription =
    "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.";
  const typeWeaknesses = useTypeWeaknesses(types);

  return (
    <AboutContainer className={isOpen ? 'isOpen' : ''}>
      <Description customCss={{ color: colors.default.GREY }}>{pokemonDescription}</Description>

      <FilterTitle customCss={{ marginTop: '30px' }}>Pokédex Data</FilterTitle>
      <GridInfo>
        <GridInfoItem>Especies</GridInfoItem>
        <GridInfoItem>Seed Pokémon</GridInfoItem>

        <GridInfoItem>Height</GridInfoItem>
        <GridInfoItem>
          0.7m <small>(2′04″)</small>
        </GridInfoItem>

        <GridInfoItem>Weight</GridInfoItem>
        <GridInfoItem>
          6.9kg <small>(15.2 lbs)</small>
        </GridInfoItem>

        <GridInfoItem className="abilities">Abilities</GridInfoItem>
        <GridInfoItem className="abilities">
          <span>1. Overgrow</span> <small>Chlorophyll (hidden ability)</small>
        </GridInfoItem>

        <GridInfoItem>Weaknesses</GridInfoItem>
        <GridInfoItem className="weaknesses">
          {typeWeaknesses.map(weakness => (
            <WeaknessBadge key={weakness} type={weakness}>
              <IconBasePokemonTypes type={weakness} variant={'secondary'} size={15} />
            </WeaknessBadge>
          ))}
        </GridInfoItem>
      </GridInfo>

      <FilterTitle>Training</FilterTitle>
      <GridInfo>
        <GridInfoItem>EV Yield</GridInfoItem>
        <GridInfoItem>1 Special Attack</GridInfoItem>

        <GridInfoItem>Catch Rate</GridInfoItem>
        <GridInfoItem>
          45 <small>(5.9% with PokéBall, full HP)</small>
        </GridInfoItem>

        <GridInfoItem>Base Friendship</GridInfoItem>
        <GridInfoItem>
          70 <small>(normal)</small>
        </GridInfoItem>

        <GridInfoItem>Base Exp</GridInfoItem>
        <GridInfoItem>64</GridInfoItem>

        <GridInfoItem>Growth Rate</GridInfoItem>
        <GridInfoItem>Medium Slow</GridInfoItem>
      </GridInfo>

      <FilterTitle>Breeding</FilterTitle>
      <GridInfo>
        <GridInfoItem>Gender</GridInfoItem>
        <GridInfoItem className="gender">
          <span>♀ 87.5%</span>, <span>♂ 12.5%</span>
        </GridInfoItem>

        <GridInfoItem>Egg Groups</GridInfoItem>
        <GridInfoItem>Grass, Monster</GridInfoItem>

        <GridInfoItem>Egg Cycles</GridInfoItem>
        <GridInfoItem>
          20 <small>(4,884 - 5,140 steps)</small>
        </GridInfoItem>
      </GridInfo>

      <FilterTitle>Location</FilterTitle>
      <GridInfo>
        <GridInfoItem>001</GridInfoItem>
        <GridInfoItem>(Red/Blue/Yellow)</GridInfoItem>

        <GridInfoItem>226</GridInfoItem>
        <GridInfoItem>(Gold/Silver/Crystal)</GridInfoItem>

        <GridInfoItem>001</GridInfoItem>
        <GridInfoItem>(FireRed/LeafGreen)</GridInfoItem>

        <GridInfoItem>231</GridInfoItem>
        <GridInfoItem>(HeartGold/SoulSilver)</GridInfoItem>

        <GridInfoItem>080</GridInfoItem>
        <GridInfoItem>(X/Y - Central Kalos)</GridInfoItem>

        <GridInfoItem>001</GridInfoItem>
        <GridInfoItem>(Let&apos;s Go Pikachu/Let&apos;s Go Eevee)</GridInfoItem>
      </GridInfo>
    </AboutContainer>
  );
};

export default About;

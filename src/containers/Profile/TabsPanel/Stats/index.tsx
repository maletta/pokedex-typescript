import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useTypeEffectiveness } from "hooks/TypeCalculatorHook";

import { Description, FilterTitle } from "components/Titles";
import { IconBasePokemonTypes } from "components/IconBase";
import { PokemonTypesKeyOf } from "types/theme-types";

import {
  StatsContainer,
  GridStats,
  GridStatsItem,
  Bar,
  GridStatsDescription,
  GridEffectiveness,
  GridEffectivenessItem,
  EffectivenessBadge,
} from "./styles";

interface StatsProps {
  isOpen: boolean;
}

const Stats: React.FC<StatsProps> = ({ isOpen }) => {
  const { colors } = useTheme();
  const mainType = "BUG";

  const [effectivenessType, effectivenessValue] = useTypeEffectiveness(["GRASS", "POISON"]);
  // console.log("effectiveness ", effectivenessValue);

  function getEffectivenessString(percent: number): string {
    switch (percent) {
      case 1:
        return "";
      case 1 / 2:
        return `½`;
      case 1 / 4:
        return `¼`;
      default:
        return `${percent}`;
    }
  }

  return (
    <StatsContainer className={isOpen ? "isOpen" : ""}>
      <FilterTitle customCss={{ color: colors.type[mainType] }}>Base Stats</FilterTitle>

      <GridStats>
        <GridStatsItem className="title">HP</GridStatsItem>
        <GridStatsItem className="value">45</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={50} type={mainType} />
        </GridStatsItem>
        <GridStatsItem className="min">200</GridStatsItem>
        <GridStatsItem className="max">294</GridStatsItem>

        <GridStatsItem className="title">Attack</GridStatsItem>
        <GridStatsItem className="value">49</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={mainType} />
        </GridStatsItem>
        <GridStatsItem className="min">92</GridStatsItem>
        <GridStatsItem className="max">216</GridStatsItem>

        <GridStatsItem className="title">Defense</GridStatsItem>
        <GridStatsItem className="value">49</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={mainType} />
        </GridStatsItem>
        <GridStatsItem className="min">92</GridStatsItem>
        <GridStatsItem className="max">216</GridStatsItem>

        <GridStatsItem className="title">Sp. Atk</GridStatsItem>
        <GridStatsItem className="value">65</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={mainType} />
        </GridStatsItem>
        <GridStatsItem className="min">121</GridStatsItem>
        <GridStatsItem className="max">251</GridStatsItem>

        <GridStatsItem className="title">Sp. Def</GridStatsItem>
        <GridStatsItem className="value">65</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={mainType} />
        </GridStatsItem>
        <GridStatsItem className="min">121</GridStatsItem>
        <GridStatsItem className="max">251</GridStatsItem>

        <GridStatsItem className="title">Speed</GridStatsItem>
        <GridStatsItem className="value">45</GridStatsItem>
        <GridStatsItem className="bar">
          <Bar percent={60} type={mainType} />
        </GridStatsItem>
        <GridStatsItem className="min">85</GridStatsItem>
        <GridStatsItem className="max">207</GridStatsItem>

        <GridStatsItem className="title">Total</GridStatsItem>
        <GridStatsItem className="value bold">318</GridStatsItem>
        <GridStatsItem className="bar"></GridStatsItem>
        <GridStatsItem className="min bold">Min</GridStatsItem>
        <GridStatsItem className="max bold">Max</GridStatsItem>
      </GridStats>

      <GridStatsDescription>
        The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum
        values are based on a hindering nature, 0 EVs, 0 IVs.
      </GridStatsDescription>

      <FilterTitle customCss={{ color: colors.type[mainType] }}>Type Defenses</FilterTitle>
      <Description customCss={{ color: colors.default.GREY, marginTop: "20px", marginBottom: "20px" }}>
        The effectiveness of each type on Bulbasaur.
      </Description>

      <GridEffectiveness>
        {effectivenessType.map((type, index) => (
          <GridEffectivenessItem key={type}>
            <EffectivenessBadge type={type}>
              <IconBasePokemonTypes type={type} variant={"secondary"} size={15} />
            </EffectivenessBadge>
            <span>{getEffectivenessString(effectivenessValue[index])}</span>
          </GridEffectivenessItem>
        ))}
      </GridEffectiveness>
    </StatsContainer>
  );
};

export default Stats;

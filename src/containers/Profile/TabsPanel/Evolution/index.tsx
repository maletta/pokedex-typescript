import React from "react";
import { useTheme } from "styled-components";

import { FilterTitle, PokemonName, PokemonNumber } from "components/Titles";

import { PokemonTypesKeyOf } from "types/theme-types";

import { EvolutionContainer, EvolutionGrid, PokemonInfo, PokemonImage, LevelUp } from "./styles";

import { ReactComponent as BackIconSVG } from "assets/back-icon.svg";

interface EvolutionProps {
  isOpen: boolean;
}

const Evolution: React.FC<EvolutionProps> = ({ isOpen }) => {
  const { colors } = useTheme();
  const mainType: PokemonTypesKeyOf = "GRASS";

  return (
    <EvolutionContainer className={isOpen ? "isOpen" : ""}>
      <FilterTitle customCss={{ color: colors.type[mainType] }}>Evolution Chart</FilterTitle>

      <EvolutionGrid>
        <PokemonInfo>
          <PokemonImage>
            <img src="assets/pokemon-example.png" alt="pokemon illustrate" />
          </PokemonImage>
          <PokemonNumber customCss={{ color: colors.default.GREY, fontWeight: 500 }}>#001</PokemonNumber>
          <PokemonName customCss={{ fontSize: "1.6rem", lineHeight: "1.9rem" }}>Bulbasaur</PokemonName>
        </PokemonInfo>

        <LevelUp>
          <BackIconSVG />
          (Level 16)
        </LevelUp>

        <PokemonInfo>
          <PokemonImage>
            <img src="assets/pokemon-example.png" alt="pokemon illustrate" />
          </PokemonImage>
          <PokemonNumber customCss={{ color: colors.default.GREY, fontWeight: 500 }}>#001</PokemonNumber>
          <PokemonName customCss={{ fontSize: "1.6rem", lineHeight: "1.9rem" }}>Bulbasaur</PokemonName>
        </PokemonInfo>
      </EvolutionGrid>

      <EvolutionGrid>
        <PokemonInfo>
          <PokemonImage>
            <img src="assets/pokemon-example.png" alt="pokemon illustrate" />
          </PokemonImage>
          <PokemonNumber customCss={{ color: colors.default.GREY, fontWeight: 500 }}>#001</PokemonNumber>
          <PokemonName customCss={{ fontSize: "1.6rem", lineHeight: "1.9rem" }}>Bulbasaur</PokemonName>
        </PokemonInfo>

        <LevelUp>
          <BackIconSVG />
          (Level 16)
        </LevelUp>

        <PokemonInfo>
          <PokemonImage>
            <img src="assets/pokemon-example.png" alt="pokemon illustrate" />
          </PokemonImage>
          <PokemonNumber customCss={{ color: colors.default.GREY, fontWeight: 500 }}>#001</PokemonNumber>
          <PokemonName customCss={{ fontSize: "1.6rem", lineHeight: "1.9rem" }}>Bulbasaur</PokemonName>
        </PokemonInfo>
      </EvolutionGrid>
    </EvolutionContainer>
  );
};

export default Evolution;

import React, { useState } from "react";

import { ApplicationTitle, FilterTitle } from "components/Titles";
import { ReactComponent as GenerationSVG } from "assets/icons/menu/generation-icon.svg";
import { ReactComponent as SortSVG } from "assets/icons/menu/sort-icon.svg";
import { ReactComponent as FilterSVG } from "assets/icons/menu/filter-icon.svg";
import TextInput from "components/TextInput";
import PokemonCard from "components/PokemonCard";
import ModalGeneration from "components/ModalGeneration";
import ModalFilter from "components/ModalFilter";
import { useMenuContext } from "hooks/MenuContext";

import { HomeContainer, MenuFilter, Main, IconButton, PokemonCardContainer } from "./styles";

const Home: React.FC = () => {
  const { isGeneration, setIsGeneration, isFilter, setIsFilter } = useMenuContext();

  return (
    <>
      <ModalGeneration isOpen={isGeneration} closeModal={() => setIsGeneration(false)} />
      <ModalFilter isOpen={isFilter} closeModal={() => setIsFilter(false)} />
      <HomeContainer>
        <MenuFilter>
          <IconButton onClick={() => setIsGeneration(true)}>
            <GenerationSVG />
          </IconButton>
          <IconButton>
            <SortSVG />
          </IconButton>
          <IconButton onClick={() => setIsFilter(true)}>
            <FilterSVG />
          </IconButton>
        </MenuFilter>
        <Main>
          <ApplicationTitle>Pokédex</ApplicationTitle>
          <FilterTitle customCss={{ color: "var(--text-grey)", marginTop: "10px" }}>
            Search for Pokémon by name or using the National Pokédex number.
          </FilterTitle>

          <TextInput placeholder="What Pokémon are you looking for?" customCss={{ marginTop: "25px" }} />

          <PokemonCardContainer>
            <PokemonCard name="Bulbasaur" number={1} types={["GRASS", "POISON"]} />
            <PokemonCard name="Bulbasaur" number={1} types={["GRASS", "POISON"]} />
            <PokemonCard name="Bulbasaur" number={1} types={["GRASS", "POISON"]} />
            <PokemonCard name="Bulbasaur" number={1} types={["GRASS", "POISON"]} />
          </PokemonCardContainer>
        </Main>
      </HomeContainer>
    </>
  );
};

export default Home;

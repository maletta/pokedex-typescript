import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ApplicationTitle, FilterTitle } from "components/Titles";
import { ReactComponent as GenerationSVG } from "assets/icons/menu/generation-icon.svg";
import { ReactComponent as SortSVG } from "assets/icons/menu/sort-icon.svg";
import { ReactComponent as FilterSVG } from "assets/icons/menu/filter-icon.svg";
import TextInput from "components/TextInput";
import PokemonCard from "components/PokemonCard";
import ModalGeneration from "components/ModalGeneration";
import ModalFilter from "components/ModalFilter";
import ModalSort from "components/ModalSort";
import Loading from "components/Loading";
import { useMenuContext } from "hooks/MenuContext";

import { HomeContainer, MenuFilter, Main, IconButton, PokemonCardContainer } from "./styles";

const Home: React.FC = () => {
  const { isGeneration, setIsGeneration, isSort, setIsSort, isFilter, setIsFilter } = useMenuContext();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  function onClickNavigate(pokemonNumber: number) {
    navigate(`/${pokemonNumber}`);
  }

  return (
    <>
      <ModalGeneration isOpen={isGeneration} closeModal={() => setIsGeneration(false)} />
      <ModalSort isOpen={isSort} closeModal={() => setIsSort(false)} />
      <ModalFilter isOpen={isFilter} closeModal={() => setIsFilter(false)} />
      <HomeContainer>
        <MenuFilter>
          <IconButton onClick={() => setIsGeneration(true)}>
            <GenerationSVG />
          </IconButton>
          <IconButton onClick={() => setIsSort(true)}>
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
            <PokemonCard name="Bulbasaur" number={1} types={["GRASS", "POISON"]} onClick={() => onClickNavigate(1)} />
            <PokemonCard name="Bulbasaur" number={1} types={["GRASS", "POISON"]} onClick={() => onClickNavigate(1)} />
          </PokemonCardContainer>
        </Main>
      </HomeContainer>
      <Loading isLoading={isLoading} />
    </>
  );
};

export default Home;

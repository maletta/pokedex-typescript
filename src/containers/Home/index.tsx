import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

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
import { IGetPokemon, IGetPokemonList, getPokemon, getPokemonList } from "api/";

import { HomeContainer, MenuFilter, Main, IconButton, PokemonCardContainer } from "./styles";
import { PokemonTypesKeyOf } from "types/theme-types";

const Home: React.FC = () => {
  const { isGeneration, setIsGeneration, isSort, setIsSort, isFilter, setIsFilter } = useMenuContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState<boolean>(true);
  const [pokemonList, setPokemonList] = useState(Array<IGetPokemon>);
  const [pokemonResultList, setPokemonResultList] = useState<IGetPokemonList>();
  const navigate = useNavigate();

  function onClickNavigate(pokemonNumber: number) {
    navigate(`/${pokemonNumber}`);
  }

  function verifyScrollToBottom(scrollHeight: number, scrollTop: number, clientHeight: number) {
    return scrollHeight - scrollTop === clientHeight;
  }

  function onHomeContainerScroll(e: React.MouseEvent<HTMLDivElement>) {
    if (verifyScrollToBottom(e.currentTarget.scrollHeight, e.currentTarget.scrollTop, e.currentTarget.clientHeight)) {
      setIsScrolledToBottom(true);
    }
  }

  function batchPokemonRequest(pokemonList: IGetPokemonList) {
    const requests: Array<Promise<AxiosResponse<IGetPokemon, any>>> = [];
    pokemonList.results.forEach(item => {
      requests.push(getPokemon(item.name));
    });

    const pokemonArray: Array<IGetPokemon> = [];

    return Promise.all(requests)
      .then(result => {
        result.forEach(({ data }) => {
          pokemonArray.push(data);
        });
      })
      .then(() => pokemonArray);
  }

  useEffect(() => {
    const next = pokemonResultList?.next || "?";
    const params = new URLSearchParams(next.split("?")[1]);
    const offset = parseInt(params.get("offset") || "0");
    const limit = parseInt(params.get("limit") || "20");
    const source = axios.CancelToken.source();

    if (isScrolledToBottom) {
      setIsLoading(true);

      getPokemonList({ offset, limit, token: source.token })
        .then(result => {
          const dataPokemonList: IGetPokemonList = result.data;
          setPokemonResultList(dataPokemonList);
          return dataPokemonList;
        })
        .then(dataPokemonList => {
          return batchPokemonRequest(dataPokemonList);
        })
        .then(pokemonArray => {
          setPokemonList(prev => prev.concat(pokemonArray));
          setIsScrolledToBottom(false);
        })
        .finally(() => {
          setIsLoading(false);
        })
        .catch(e => {
          if (axios.isCancel(e)) {
            console.log(`request cancelled: ${e.message}`);
          } else {
            console.log("another error happened in getPokemonList:" + e.message);
          }
        });
    }

    return () => {
      source.cancel("Canceling pokemon getPokemonList by useEffect ");
    };
  }, [isScrolledToBottom]);

  return (
    <>
      <ModalGeneration isOpen={isGeneration} closeModal={() => setIsGeneration(false)} />
      <ModalSort isOpen={isSort} closeModal={() => setIsSort(false)} />
      <ModalFilter isOpen={isFilter} closeModal={() => setIsFilter(false)} />
      <HomeContainer onScroll={onHomeContainerScroll}>
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
            {pokemonList.map(pokemon => {
              const types = pokemon.types.map(type => type.type.name.toUpperCase() as PokemonTypesKeyOf);
              return (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name.toUpperCase()}
                  number={pokemon.id}
                  types={types}
                  imageURL={pokemon.sprites.other["official-artwork"].front_default}
                  onClick={() => onClickNavigate(1)}
                />
              );
            })}
          </PokemonCardContainer>
        </Main>
        <Loading isLoading={isLoading} />
      </HomeContainer>
    </>
  );
};

export default Home;

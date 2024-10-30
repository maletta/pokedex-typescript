import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import { ApplicationTitle, FilterTitle } from 'components/Titles';
import { ReactComponent as GenerationSVG } from 'assets/icons/menu/generation-icon.svg';
import { ReactComponent as SortSVG } from 'assets/icons/menu/sort-icon.svg';
import { ReactComponent as FilterSVG } from 'assets/icons/menu/filter-icon.svg';
import TextInput from 'components/TextInput';
import PokemonCard from 'components/PokemonCard';
import ModalGeneration from 'components/ModalGeneration';
import ModalFilter from 'components/ModalFilter';
import ModalSort from 'components/ModalSort';
import Loading from 'components/Loading';
import { useMenuContext } from 'hooks/MenuContext';
import { IGetPokemon, IGetPokemonList, getPokemon, getPokemonList } from 'api/';

import { HomeContainer, MenuFilter, Main, IconButton, PokemonCardContainer, PageHomeOverFlow } from './styles';
import { PokemonTypesKeyOf } from 'types/theme-types';
import { useCSVReader } from 'hooks/useCSVReader';
import Autocomplete from 'components/AutoComplete';
import { removeDuplicatePokemonsWithSet } from 'util/csvPokemonsImport';
import { ok } from 'assert';
import { debounceFunction } from 'util/debounce';

interface ICSVPokemon {
  id: number;
  name: string;
  genre: string | null | undefined;
  type1: string;
  type2: string;
  generation: number;
}

const Home: React.FC = () => {
  const { isGeneration, setIsGeneration, isSort, setIsSort, isFilter, setIsFilter, pokemonList, setPokemonList, pokemonResultList, setPokemonResultList, pageScrollY, setPageScrollY } = useMenuContext();
  const [suggestionsPokemonList, setSuggestionPokemonList] = useState<IGetPokemon[]>([])
  const { dataRead, errorRead, readCSV, isReadLoading } = useCSVReader<ICSVPokemon>({
    transform: removeDuplicatePokemonsWithSet
  });
  const [isLoading, setIsLoading] = useState(false);
  const divHomeContainer = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const scrollHeightBiggerThanOffsetHeight = (divHomeContainer.current?.scrollHeight || 0) > (divHomeContainer.current?.offsetHeight || 0);
  // avoid request first render. if already have pokemons, so the scrollHeight is bigger than offsetHeight
  const [isScrolledToBottom, setIsScrolledToBottom] = useState<boolean>(!scrollHeightBiggerThanOffsetHeight);

  function onClickNavigate(pokemonNumber: number) {
    const params = searchParams.get("search") ? `?${searchParams.toString()}` : "";
    navigate(`/${pokemonNumber}${params}`);
  }

  function verifyScrollToBottom(scrollHeight: number, scrollTop: number, clientHeight: number) {
    // console.log(`${scrollHeight} - ${scrollTop} = ${scrollHeight - scrollTop} === ${clientHeight}`)
    return Math.round(scrollHeight - scrollTop) === clientHeight;
  }

  function choosePokemonList(): IGetPokemon[] {
    const haveSuggestionsList = suggestionsPokemonList.length > 0;
    const haveSearchParams = !!searchParams.get("search");
    console.log(" choosePokemonList ", haveSuggestionsList, haveSearchParams)
    return (haveSuggestionsList || haveSearchParams ? suggestionsPokemonList : pokemonList)
  }

  function onHomeContainerScroll(e: React.MouseEvent<HTMLDivElement>) {
    setPageScrollY(e.currentTarget.scrollTop);
    if (verifyScrollToBottom(e.currentTarget.scrollHeight, e.currentTarget.scrollTop, e.currentTarget.clientHeight)) {
      setIsScrolledToBottom(true);
    }
  }

  const onChangeAutoComplete = debounceFunction((input: string, suggestions: ICSVPokemon[]) => {
    setSearchParams({ search: input });

    if (suggestions.length > 0 && input.length > 0) {
      console.log("pesquisar sugestão ", suggestions)
      setIsLoading(true);
      setSearchParams({ search: input })
      const pkList = suggestions.map(pk => pk.name.toLocaleLowerCase());
      batchPokemonRequest(pkList).then((pks) => {
        setSuggestionPokemonList(pks)
      }).finally(() => {
        setIsLoading(false)
      })
    } else {
      setSuggestionPokemonList([])
    }
  }, 250)


  // transform a array of pokemon id  into a array of pokemon object
  // requesting a single pokemon at a time
  function batchPokemonRequest(pkNameList: string[]) {
    const requests: Promise<AxiosResponse<IGetPokemon, any>>[] = [];
    pkNameList.forEach(pkName => {
      requests.push(getPokemon(pkName));
    });

    const pokemonArray: Array<IGetPokemon> = [];

    return Promise.allSettled(requests)
      .then(result => {
        result.forEach((result) => {
          if (result.status === 'fulfilled') {
            pokemonArray.push(result.value.data);
          } else {
            console.error("Erro na requisição ", result.reason)
          }
        });
      })
      .then(() => pokemonArray);
  }

  useEffect(() => {
    const next = pokemonResultList?.next || '?';
    const params = new URLSearchParams(next.split('?')[1]);
    const offset = parseInt(params.get('offset') || '0');
    const limit = parseInt(params.get('limit') || '20');
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
          const pkNameList: string[] = dataPokemonList.results.map(pk => pk.name)
          return batchPokemonRequest(pkNameList);
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
            console.log('another error happened in getPokemonList:' + e.message);
          }
        });
    }

    return () => {
      source.cancel('Canceling pokemon getPokemonList by useEffect ');
    };
  }, [isScrolledToBottom]);

  useEffect(() => {
    console.dir(dataRead)
  }, [dataRead]);

  useEffect(() => {
    if (divHomeContainer) {
      divHomeContainer.current?.scrollTo({
        top: pageScrollY,
        behavior: "auto",
      })
    }

    readCSV("mocks/pokemon-database.csv");

  }, []);

  console.log("isReadLoading ", isReadLoading)

  return (
    <>
      <ModalGeneration
        isOpen={isGeneration}
        closeModal={() => setIsGeneration(false)}
      />
      <ModalSort isOpen={isSort} closeModal={() => setIsSort(false)} />
      <ModalFilter isOpen={isFilter} closeModal={() => setIsFilter(false)} />
      <HomeContainer ref={divHomeContainer} onScroll={onHomeContainerScroll}>
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
          <FilterTitle customCss={{ color: 'var(--text-grey)', marginTop: '10px', marginBottom: "25px" }}>
            Search for Pokémon by name or using the National Pokédex number.
          </FilterTitle>

          <Autocomplete
            placeholder='find your pokemon'
            suggestions={dataRead?.type === "right" ? dataRead.value : []} handleChange={onChangeAutoComplete}
            defaultValue={searchParams.get("search")}
          />

          {/* <TextInput placeholder="What Pokémon are you looking for?" customCss={{ marginTop: '25px' }} /> */}


          <PokemonCardContainer >
            {choosePokemonList().map(pokemon => {
              const types = pokemon.types.map(type => type.type.name.toUpperCase() as PokemonTypesKeyOf);
              return (
                <PokemonCard
                  key={pokemon.id}
                  name={pokemon.name.toUpperCase()}
                  number={pokemon.id}
                  types={types}
                  imageURL={pokemon.sprites.other['official-artwork'].front_default}
                  onClick={onClickNavigate}
                />
              );
            })}
          </PokemonCardContainer>
        </Main>
        <Loading isLoading={isLoading || isReadLoading} />
      </HomeContainer>
    </>
  );
};

export default Home;

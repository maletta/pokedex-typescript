import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PokemonNumber, PokemonName } from 'components/Titles';
import Badge from 'components/Badge';

import { PokemonTypesKeyOf } from 'types/theme-types';
import { getPokemon, getPokemonSpecies, IGetPokemon, IGetPokemonSpecies } from 'api';
import { fillPokemonNumber, pokemonTypesRequestAdapter } from 'util/utilities';

import { About, Stats, Evolution } from './TabsPanel';
import {
  ProfileWrapper,
  Banner,
  PokemonNameBackground,
  PokemonInfo,
  PokemonImage,
  PokemonDescription,
  BadgeGroup,
  PokemonInfoScrolled,
  Content,
  TabsContainer,
  TabsGroup,
  Tab,
} from './styles';

import { ReactComponent as BackIconSVG } from 'assets/back-icon.svg';

enum TabsENUM {
  ABOUT = 'ABOUT',
  STATS = 'STATS',
  EVOLUTION = 'EVOLUTION',
}

const Profile: React.FC = () => {
  // const types: Array<PokemonTypesKeyOf> = ['GRASS', 'POISON'];
  const [scrollY, setScrollY] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<TabsENUM>(TabsENUM.ABOUT);
  const [pokemon, setPokemon] = useState<IGetPokemon | null>(null);
  const [pokemonSpecies, setPokemonSpecies] = useState<IGetPokemonSpecies | null>(null);
  const [types, setTypes] = useState<Array<PokemonTypesKeyOf>>();
  const navigate = useNavigate();
  const { pokemonId } = useParams();

  /** função para add classe scroll */
  const onScrollPage = () => {
    if (window.scrollY > 100) setScrollY(true);
    else setScrollY(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollPage);
    Promise.all([getPokemon(String(pokemonId)), getPokemonSpecies(String(pokemonId))]).then(response => {
      const getPokResponse = response[0];
      setPokemon(getPokResponse.data);
      const typesAdapted = pokemonTypesRequestAdapter(getPokResponse.data.types);
      setTypes(typesAdapted);

      setPokemonSpecies(response[1].data);
    });
    // getPokemon(String(pokemonId)).then(response => {
    //   setPokemon(response.data);
    //   const typesAdapted = pokemonTypesRequestAdapter(response.data.types);
    //   setTypes(typesAdapted);
    // });
    return () => window.removeEventListener('scroll', onScrollPage);
  }, [pokemonId]);

  return pokemon && types && pokemonSpecies ? (
    <ProfileWrapper type={types[0]}>
      <Banner className={scrollY ? 'scrolled' : ''} type={pokemon.types[0].type.name.toUpperCase() as PokemonTypesKeyOf}>
        <BackIconSVG className="backIcon" onClick={() => navigate('/')} />
        <PokemonNameBackground className={scrollY ? 'scrolled' : ''} type={types[0]}>
          {pokemon.name.toUpperCase()}
        </PokemonNameBackground>
        <PokemonInfo className={scrollY ? 'scrolled' : ''}>
          <PokemonImage>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt="pokemon illustrate" />
          </PokemonImage>

          <PokemonDescription>
            <PokemonNumber variant="primary" customCss={{ fontSize: '1.6rem', opacity: 0.6 }}>
              {fillPokemonNumber(pokemon.id)}
            </PokemonNumber>
            <PokemonName variant="secondary" customCss={{ fontSize: '3.2rem', textTransform: 'capitalize' }}>
              {pokemon.name}
            </PokemonName>
            <BadgeGroup>
              {types.map(itemType => (
                <Badge key={itemType} type={itemType} />
              ))}
            </BadgeGroup>
          </PokemonDescription>
        </PokemonInfo>
        <PokemonInfoScrolled className={!scrollY ? 'scrolled' : ''}>
          <PokemonName variant="secondary" customCss={{ fontSize: '2.6rem', textTransform: 'capitalize' }}>
            {pokemon.name}
          </PokemonName>
        </PokemonInfoScrolled>
      </Banner>
      <TabsContainer className={scrollY ? 'scrolled' : ''} type={types[0]}>
        <TabsGroup>
          <Tab onClick={() => setSelectedTab(TabsENUM.ABOUT)} className={selectedTab === TabsENUM.ABOUT ? 'active' : ''}>
            About
          </Tab>
          <Tab onClick={() => setSelectedTab(TabsENUM.STATS)} className={selectedTab === TabsENUM.STATS ? 'active' : ''}>
            Stats
          </Tab>
          <Tab onClick={() => setSelectedTab(TabsENUM.EVOLUTION)} className={selectedTab === TabsENUM.EVOLUTION ? 'active' : ''}>
            Evolution
          </Tab>
        </TabsGroup>
      </TabsContainer>
      <Content className={scrollY ? 'scrolled' : ''}>
        <About isOpen={selectedTab === TabsENUM.ABOUT} types={types} pokemonSpecies={pokemonSpecies} />
        <Stats isOpen={selectedTab === TabsENUM.STATS} types={types} pokemonStats={pokemon.stats} name={pokemon.name} />
        <Evolution isOpen={selectedTab === TabsENUM.EVOLUTION} type={types[0]} pokemonSpecies={pokemonSpecies} />
      </Content>
    </ProfileWrapper>
  ) : (
    <div>Pokemon Not Found</div>
  );
};

export default Profile;

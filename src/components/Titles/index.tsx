import React from "react";

import {
  TitleStyle,
  ApplicationTitleStyle,
  PokemonNameStyle,
  FilterTitleStyle,
  DescriptionStyle,
  PokemonNumberStyle,
  PokemonTypeStyle,
} from "./styles";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

const ApplicationTitle: React.FC<Props> = ({ children }) => {
  return <ApplicationTitleStyle>{children}</ApplicationTitleStyle>;
};

const PokemonName: React.FC<Props> = ({ children }) => {
  return <PokemonNameStyle>{children}</PokemonNameStyle>;
};

const FilterTitle: React.FC<Props> = ({ children }) => {
  return <FilterTitleStyle>{children}</FilterTitleStyle>;
};

const Description: React.FC<Props> = ({ children }) => {
  return <DescriptionStyle>{children}</DescriptionStyle>;
};

const PokemonNumber: React.FC<Props> = ({ children }) => {
  return <PokemonNumberStyle>{children}</PokemonNumberStyle>;
};

const PokemonType: React.FC<Props> = ({ children }) => {
  return <PokemonTypeStyle>{children}</PokemonTypeStyle>;
};

export { Title, ApplicationTitle, PokemonName, FilterTitle, Description, PokemonNumber, PokemonType };

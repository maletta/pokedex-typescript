import React from "react";
import { CSSObject } from "styled-components/macro";

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
  variant?: "primary" | "secondary";
  customCss?: CSSObject;
}

const Title: React.FC<Props> = ({ children, variant = "primary", customCss }) => {
  return (
    <TitleStyle variant={variant} customCss={customCss}>
      {children}
    </TitleStyle>
  );
};

const ApplicationTitle: React.FC<Props> = ({ children, variant = "primary", customCss }) => {
  return (
    <ApplicationTitleStyle variant={variant} customCss={customCss}>
      {children}
    </ApplicationTitleStyle>
  );
};

const PokemonName: React.FC<Props> = ({ children, variant = "primary", customCss }) => {
  return (
    <PokemonNameStyle variant={variant} customCss={customCss}>
      {children}
    </PokemonNameStyle>
  );
};

const FilterTitle: React.FC<Props> = ({ children, variant = "primary", customCss }) => {
  return (
    <FilterTitleStyle variant={variant} customCss={customCss}>
      {children}
    </FilterTitleStyle>
  );
};

const Description: React.FC<Props> = ({ children, variant = "primary", customCss }) => {
  return (
    <DescriptionStyle variant={variant} customCss={customCss}>
      {children}
    </DescriptionStyle>
  );
};

const PokemonNumber: React.FC<Props> = ({ children, variant = "primary", customCss }) => {
  return (
    <PokemonNumberStyle variant={variant} customCss={customCss}>
      {children}
    </PokemonNumberStyle>
  );
};

const PokemonType: React.FC<Props> = ({ children, variant = "primary", customCss }) => {
  return (
    <PokemonTypeStyle variant={variant} customCss={customCss}>
      {children}
    </PokemonTypeStyle>
  );
};

export { Title, ApplicationTitle, PokemonName, FilterTitle, Description, PokemonNumber, PokemonType };

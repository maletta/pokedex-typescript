import React, { useState } from "react";

import { PokemonNumber, PokemonName } from "components/Titles";
import Badge from "components/Badge";

import { PokemonTypesKeyOf } from "types/theme-types";

import {
  ProfileWrapper,
  Banner,
  PokemonNameBackground,
  PokemonInfo,
  PokemonImage,
  PokemonDescription,
  BadgeGroup,
  Content,
} from "./styles";

const Profile: React.FC = () => {
  const name = "Bulbasaur";
  const number = "#001";
  const types: Array<PokemonTypesKeyOf> = ["GRASS", "POISON"];

  return (
    <ProfileWrapper>
      <Banner>
        <PokemonNameBackground>{name.toUpperCase()}</PokemonNameBackground>
        <PokemonInfo>
          <PokemonImage>
            <img src="assets/pokemon-example.png" alt="pokemon illustrate" />
          </PokemonImage>

          <PokemonDescription>
            <PokemonNumber variant="primary" customCss={{ fontSize: "1.6rem", opacity: 0.6 }}>
              #001
            </PokemonNumber>
            <PokemonName variant="secondary" customCss={{ fontSize: "3.2rem" }}>
              {name}
            </PokemonName>
            <BadgeGroup>
              {types.map(type => (
                <Badge key={type} type={type} />
              ))}
            </BadgeGroup>
          </PokemonDescription>
        </PokemonInfo>
      </Banner>
      <Content>1 2 3</Content>
    </ProfileWrapper>
  );
};

export default Profile;

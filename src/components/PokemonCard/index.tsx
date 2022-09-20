import React from "react";
import { PokemonNumber, PokemonType, PokemonName } from "components/Titles";
import { PokemonTypesKeyOf } from "types/theme-types";
import Badge from "components/Badge";

import { Container, ContainerBackground, BadgeContainer, PokemonInfo, PokemonImage } from "./styles";

interface IPokemonCard {
  imageURL: string;
  name: string;
  number: number;
  types: Array<PokemonTypesKeyOf>;
  onClick?: (args: any) => void;
}

const PokemonCard: React.FC<IPokemonCard> = ({ imageURL, name, number, types, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ContainerBackground type={types[0]}>
        <PokemonInfo>
          <PokemonNumber customCss={{ opacity: "0.6" }}>#{`${number}`}</PokemonNumber>
          <PokemonName variant="secondary">{name}</PokemonName>
          <BadgeContainer>
            {types.map(typeItem => (
              <Badge key={typeItem} type={typeItem} />
            ))}
          </BadgeContainer>
        </PokemonInfo>
        <PokemonImage>
          <img src={imageURL} alt="pokemon illustrate" />
        </PokemonImage>
      </ContainerBackground>
    </Container>
  );
};

export default PokemonCard;

import React from "react";

import { Container } from "./styles";
import { ColorHeightGenerics, PokemonTypes } from "types/theme-types";

interface Props {
  type: PokemonTypes;
}

const Badge: React.FC<Props> = ({ type }) => {
  return <Container type={type}>{type}</Container>;
};

export default Badge;

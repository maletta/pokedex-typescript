import React from "react";

import { Container } from "./styles";
import { PokemonTypesKeyOf } from "types/theme-types";
import { IconBasePokemonTypes } from "components/IconBase";

interface Props {
  type: PokemonTypesKeyOf;
}

const Badge: React.FC<Props> = ({ type }) => {
  return (
    <Container type={type}>
      <IconBasePokemonTypes type={type} variant={"secondary"} size={15} />
      <span>{type.toLowerCase()}</span>
    </Container>
  );
};

export default Badge;

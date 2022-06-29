import React from "react";
import { IconBasePokemonTypes } from "components/IconBase";
import { PokemonTypesKeyOf } from "types/theme-types";
import { Container } from "./styles";

interface Props {
  variant: "primary" | "secondary";
  type: PokemonTypesKeyOf;
}

const Icon: React.FC<Props> = ({ type, variant = "primary" }) => {
  return (
    <Container type={type} variant={variant}>
      <IconBasePokemonTypes type={type} size={25} variant={variant} />
    </Container>
  );
};

export default Icon;

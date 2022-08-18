import React from "react";
import { IconBasePokemonTypes } from "components/IconBase";
import { PokemonTypesKeyOf } from "types/theme-types";
import { Container } from "./styles";

interface Props {
  variant: "primary" | "secondary";
  type: PokemonTypesKeyOf;
  handleClick?: (type: PokemonTypesKeyOf) => void;
}

const PokemonTypesIcon: React.FC<Props> = ({ handleClick, type, variant = "primary" }) => {
  return (
    <Container type={type} variant={variant} onClick={() => (handleClick ? handleClick(type) : null)}>
      <IconBasePokemonTypes type={type} size={25} variant={variant} />
    </Container>
  );
};

export { PokemonTypesIcon };

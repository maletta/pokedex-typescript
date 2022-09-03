import React from "react";
import { IconBasePokemonTypes, IconBasePokemonHeights, IconBasePokemonWeights } from "components/IconBase";
import { PokemonTypesKeyOf, PokemonHeightKeyOf, PokemonWeightKeyOf } from "types/theme-types";
import { ContainerPokemonTypes, ContainerPokemonHeights, ContainerPokemonWeights } from "./styles";

interface PropsPokemonTypes {
  variant: "primary" | "secondary";
  type: PokemonTypesKeyOf;
  handleClick?: (type: PokemonTypesKeyOf) => void;
}

interface PropsPokemonHeights {
  variant: "primary" | "secondary";
  height: PokemonHeightKeyOf;
  handleClick?: (type: PokemonHeightKeyOf) => void;
}

interface PropsPokemonWeights {
  variant: "primary" | "secondary";
  weight: PokemonWeightKeyOf;
  handleClick?: (type: PokemonWeightKeyOf) => void;
}

const PokemonTypesIcon: React.FC<PropsPokemonTypes> = ({ handleClick, type, variant = "primary" }) => {
  return (
    <ContainerPokemonTypes type={type} variant={variant} onClick={() => (handleClick ? handleClick(type) : null)}>
      <IconBasePokemonTypes type={type} size={25} variant={variant} />
    </ContainerPokemonTypes>
  );
};

const PokemonHeightsIcon: React.FC<PropsPokemonHeights> = ({ handleClick, height, variant = "primary" }) => {
  return (
    <ContainerPokemonHeights height={height} variant={variant} onClick={() => (handleClick ? handleClick(height) : null)}>
      <IconBasePokemonHeights height={height} size={25} variant={variant} />
    </ContainerPokemonHeights>
  );
};

const PokemonWeightsIcon: React.FC<PropsPokemonWeights> = ({ handleClick, weight, variant = "primary" }) => {
  return (
    <ContainerPokemonWeights weight={weight} variant={variant} onClick={() => (handleClick ? handleClick(weight) : null)}>
      <IconBasePokemonWeights weight={weight} size={25} variant={variant} />
    </ContainerPokemonWeights>
  );
};

export { PokemonTypesIcon, PokemonHeightsIcon, PokemonWeightsIcon };

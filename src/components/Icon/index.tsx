import React from "react";
import { IconBasePokemonTypes, IconBasePokemonHeights, IconBasePokemonWeights } from "components/IconBase";
import { PokemonTypesKeyOf, PokemonHeightKeyOf, PokemonWeightKeyOf } from "types/theme-types";
import { ContainerPokemonTypes, ContainerPokemonHeights, ContainerPokemonWeights } from "./styles";

interface IconProps {
  variant: "primary" | "secondary";
  size?: number;
}
interface PropsPokemonTypes extends IconProps {
  type: PokemonTypesKeyOf;
  handleClick?: (type: PokemonTypesKeyOf) => void;
}

interface PropsPokemonHeights extends IconProps {
  height: PokemonHeightKeyOf;
  handleClick?: (type: PokemonHeightKeyOf) => void;
}

interface PropsPokemonWeights extends IconProps {
  weight: PokemonWeightKeyOf;
  handleClick?: (type: PokemonWeightKeyOf) => void;
}

const PokemonTypesIcon: React.FC<PropsPokemonTypes> = ({ handleClick, type, variant = "primary", size = 25 }) => {
  return (
    <ContainerPokemonTypes type={type} variant={variant} onClick={() => (handleClick ? handleClick(type) : null)}>
      <IconBasePokemonTypes type={type} size={size} variant={variant} />
    </ContainerPokemonTypes>
  );
};

const PokemonHeightsIcon: React.FC<PropsPokemonHeights> = ({ handleClick, height, variant = "primary", size = 25 }) => {
  return (
    <ContainerPokemonHeights height={height} variant={variant} onClick={() => (handleClick ? handleClick(height) : null)}>
      <IconBasePokemonHeights height={height} size={size} variant={variant} />
    </ContainerPokemonHeights>
  );
};

const PokemonWeightsIcon: React.FC<PropsPokemonWeights> = ({ handleClick, weight, variant = "primary", size = 25 }) => {
  return (
    <ContainerPokemonWeights weight={weight} variant={variant} onClick={() => (handleClick ? handleClick(weight) : null)}>
      <IconBasePokemonWeights weight={weight} size={size} variant={variant} />
    </ContainerPokemonWeights>
  );
};

export { PokemonTypesIcon, PokemonHeightsIcon, PokemonWeightsIcon };

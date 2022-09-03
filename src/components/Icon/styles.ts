import styled, { css } from "styled-components/macro";
import { PokemonTypesKeyOf, PokemonHeightKeyOf, PokemonWeightKeyOf } from "types/theme-types";

interface Props {
  variant: "primary" | "secondary";
}
interface PropsPokemonTypes extends Props {
  type: PokemonTypesKeyOf;
}
interface PropsPokemonHeights extends Props {
  height: PokemonHeightKeyOf;
}
interface PropsPokemonWeights extends Props {
  weight: PokemonWeightKeyOf;
}

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ variant }) => (variant === "primary" ? "25px" : "50px")};
  height: ${({ variant }) => (variant === "primary" ? "25px" : "50px")};

  border-radius: ${({ variant }) => (variant === "primary" ? "0px" : "50%")};
`;

const ContainerPokemonTypes = styled(Container)<PropsPokemonTypes>`
  background-color: ${({ theme, type, variant }) => (variant === "primary" ? "transparent" : theme.colors.type[type])};

  ${({ variant, theme, type }) => {
    if (variant !== "primary") {
      return css`
        box-shadow: ${() => `0px 10px 20px ${theme.colors.typeOpacity[type]}`};
      `;
    }
  }};
`;

const ContainerPokemonHeights = styled(Container)<PropsPokemonHeights>`
  background-color: ${({ theme, height, variant }) => (variant === "primary" ? "transparent" : theme.colors.height[height])};

  ${({ variant, theme, height }) => {
    if (variant !== "primary") {
      return css`
        box-shadow: ${() => `0px 10px 20px ${theme.colors.heightOpacity[height]}`};
      `;
    }
  }};
`;

const ContainerPokemonWeights = styled(Container)<PropsPokemonWeights>`
  background-color: ${({ theme, weight, variant }) => (variant === "primary" ? "transparent" : theme.colors.weight[weight])};

  ${({ variant, theme, weight }) => {
    if (variant !== "primary") {
      return css`
        box-shadow: ${() => `0px 10px 20px ${theme.colors.weightOpacity[weight]}`};
      `;
    }
  }};
`;

export { ContainerPokemonTypes, ContainerPokemonHeights, ContainerPokemonWeights };

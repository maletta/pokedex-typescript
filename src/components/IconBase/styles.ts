import React from "react";
import styled, { css } from "styled-components/macro";
import { PokemonTypesKeyOf, PokemonHeightKeyOf, PokemonWeightKeyOf } from "types/theme-types";

interface IIconBaseProps {
  variant: "primary" | "secondary";
}
interface IGetPokemonTypeProps extends IIconBaseProps {
  pokemonType: PokemonTypesKeyOf;
}

interface IGetPokemonHeightProps extends IIconBaseProps {
  pokemonHeight: PokemonHeightKeyOf;
}

interface IGetPokemonWeightProps extends IIconBaseProps {
  pokemonWeight: PokemonWeightKeyOf;
}

interface IGenericSVG {
  size?: number;
}

const GenericSVG = styled.div<IGenericSVG>`
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  svg {
    path {
      fill: ${({ theme }) => theme.colors.default.WHITE};
    }
  }
`;

const ContainerType = styled(GenericSVG)<IGetPokemonTypeProps>`
  svg {
    width: 100%;
    height: 100%;
    path {
      ${({ pokemonType, variant, theme }) => {
        if (variant === "primary")
          return css`
            fill: ${theme.colors.type[pokemonType]};
          `;
      }};
    }
  }
`;

const ContainerHeight = styled(GenericSVG)<IGetPokemonHeightProps>`
  svg {
    width: 100%;
    height: 100%;
    path {
      ${({ pokemonHeight, variant, theme }) => {
        if (variant === "primary")
          return css`
            fill: ${theme.colors.height[pokemonHeight]};
          `;
      }};
    }
  }
`;

const ContainerWeight = styled(GenericSVG)<IGetPokemonWeightProps>`
  svg {
    width: 100%;
    height: 100%;
    path {
      ${({ pokemonWeight, variant, theme }) => {
        if (variant === "primary")
          return css`
            fill: ${theme.colors.weight[pokemonWeight]};
          `;
      }};
    }
  }
`;

export { ContainerType, ContainerHeight, ContainerWeight, GenericSVG };

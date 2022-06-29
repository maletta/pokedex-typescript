import React from "react";
import styled, { css } from "styled-components";
import { PokemonTypesKeyOf, PokemonHeightKeyOf, PokemonWeightKeyOf } from "types/theme-types";

interface IIconBaseProps {
  variant: "primary" | "secondary";
}
interface IGetPokemonTypeProps extends IIconBaseProps {
  color: PokemonTypesKeyOf;
}

interface IGetPokemonHeightProps extends IIconBaseProps {
  color: PokemonHeightKeyOf;
}

interface IGetPokemonWeightProps extends IIconBaseProps {
  color: PokemonWeightKeyOf;
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
      ${({ color, variant, theme }) => {
        if (variant === "primary")
          return css`
            fill: ${theme.colors.type[color]};
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
      ${({ color, variant, theme }) => {
        if (variant === "primary")
          return css`
            fill: ${theme.colors.height[color]};
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
      ${({ color, variant, theme }) => {
        if (variant === "primary")
          return css`
            fill: ${theme.colors.weight[color]};
          `;
      }};
    }
  }
`;

export { ContainerType, ContainerHeight, ContainerWeight, GenericSVG };

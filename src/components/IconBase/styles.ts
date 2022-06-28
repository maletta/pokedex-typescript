import React from "react";
import styled, { css } from "styled-components";
import { PokemonTypes, PokemonTypesKeyOf } from "types/theme-types";

interface IIconBaseProps {
  variant: "primary" | "secondary";
}
interface IGetPokemonTypeProps extends IIconBaseProps {
  type: PokemonTypesKeyOf;
}

const Container = styled.div<IGetPokemonTypeProps>`
  background-color: black;
  display: flex;
  width: 25px;
  height: 25px;
  svg path {
    ${({ type, variant, theme }) => {
      if (variant === "primary")
        return css`
          fill: ${theme.colors.type[type]};
        `;
      else
        return css`
          fill: ${theme.colors.default.WHITE};
        `;
    }};
  }
`;

const GenericSVG = styled.div`
  background-color: black;
  display: flex;
  width: 25px;
  height: 25px;
`;

export { Container, GenericSVG };

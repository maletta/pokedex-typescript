import styled, { css } from "styled-components";
import { PokemonTypesKeyOf } from "types/theme-types";

interface Props {
  variant: "primary" | "secondary";
  type: PokemonTypesKeyOf;
}

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ variant }) => (variant === "primary" ? "25px" : "50px")};
  height: ${({ variant }) => (variant === "primary" ? "25px" : "50px")};

  background-color: ${({ theme, type, variant }) => (variant === "primary" ? "transparent" : theme.colors.type[type])};

  border-radius: ${({ variant }) => (variant === "primary" ? "0px" : "50%")};

  ${({ variant, theme, type }) => {
    if (variant !== "primary") {
      return css`
        box-shadow: ${() => `0px 10px 20px ${theme.colors.typeOpacity[type]}`};
      `;
    }
  }};
`;

export { Container };

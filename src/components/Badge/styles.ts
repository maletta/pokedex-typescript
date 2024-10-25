import styled from "styled-components/macro";
import { PokemonTypesKeyOf } from "types/theme-types";

interface Props {
  type: PokemonTypesKeyOf;
}

const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  height: 25px;
  padding: 5px;

  background-color: ${({ theme, type }) => theme.colors.type[type]};
  border-radius: 3px;

  span {
    font-size: 1.2rem;
    font-style: normal;
    line-height: 500;
    line-height: 1.4rem;
    text-align: center;

    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.default.WHITE};
  }
`;

export { Container };

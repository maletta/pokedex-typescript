import styled from "styled-components";
import { ColorHeightGenerics, PokemonTypes } from "types/theme-types";

interface Props {
  type: PokemonTypes;
}

const Container = styled.div<Props>`
  background-color: ${({ theme, type }) => theme.colors.type[type]};
`;

export { Container };

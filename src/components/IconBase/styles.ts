import styled from "styled-components";
import { PokemonTypes, PokemonTypesKeyOf } from "types/theme-types";

interface IIconBaseProps {
  color?: boolean;
}
interface IGetPokemonTypeProps extends IIconBaseProps {
  type: PokemonTypesKeyOf;
}

const Container = styled.div`
  background-color: black;
  display: flex;
  width: 25px;
  height: 25px;
  svg path {
    fill: white;
  }
`;

const GenericSVG = styled.div`
  background-color: black;
  display: flex;
  width: 25px;
  height: 25px;
`;

export { Container, GenericSVG };

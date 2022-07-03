import styled from "styled-components";
import { PokemonTypesKeyOf } from "types/theme-types";

interface IContainerBackground {
  type: PokemonTypesKeyOf;
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 130px;

  background-color: aqua;
`;

const ContainerBackground = styled.div<IContainerBackground>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 115px;

  padding: 20px 20px;

  border-radius: 10px;

  background-image: url("assets/patterns/6x3-gradient.svg");
  background-position-x: center;
  background-position-y: -10px;
  background-repeat: no-repeat;

  background-color: ${({ theme, type }) => theme.colors.background[type]};
  box-shadow: 0px 10px 20px rgba(139, 190, 138, 0.4);
`;

const BadgeContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const PokemonImage = styled.div`
  background-color: red;
  width: 130px;
  height: 100%;
  position: relative;

  img {
    position: absolute;
    top: -45px;

    width: 130px;
    height: 130px;
  }
`;

export { Container, ContainerBackground, BadgeContainer, PokemonInfo, PokemonImage };

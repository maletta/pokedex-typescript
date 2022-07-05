import styled from "styled-components";
import { PokemonTypesKeyOf } from "types/theme-types";

interface IContainerBackground {
  type: PokemonTypesKeyOf;
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;

  width: 334px;
  height: 130px;
`;

const ContainerBackground = styled.div<IContainerBackground>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 115px;

  padding: 20px 20px;

  border-radius: 10px;

  background-image: url("assets/patterns/6x3-gradient.svg"), url("assets/patterns/pokeball-gradient-pokemon-card.svg");
  background-position-x: 90px, right;
  background-position-y: -10px, center;
  background-size: 74px 32px, 145px 145px;
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
  width: 130px;
  height: 100%;
  position: relative;

  img {
    position: absolute;
    top: -45px;
    right: -5px;

    width: 130px;
    height: 130px;
  }
`;

export { Container, ContainerBackground, BadgeContainer, PokemonInfo, PokemonImage };

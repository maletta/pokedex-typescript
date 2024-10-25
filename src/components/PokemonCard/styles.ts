import styled from 'styled-components/macro';
import { PokemonTypesKeyOf } from 'types/theme-types';
import { device } from 'util/media';

interface IContainerBackground {
  type: PokemonTypesKeyOf;
}

const PokemonCardContainer = styled.div`
  display: flex;
  align-items: flex-end;
  align-self: center;
  width: 100%;
  height: 130px;

  @media ${device.mobileM} {
    width: 334px;
  }
`;

const ContainerBackground = styled.div<IContainerBackground>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 115px;

  padding: 20px 20px;

  border-radius: 10px;

  background-image: url('assets/patterns/6x3-gradient.svg'), url('assets/patterns/pokeball-gradient-pokemon-card.svg');
  background-position-x: 90px, right;
  background-position-y: -10px, center;
  background-size: 74px 32px, 145px 145px;
  background-repeat: no-repeat;

  background-color: ${({ theme, type }) => theme.colors.background[type]};
  /* box-shadow: 0px 10px 20px rgba(139, 190, 138, 0.4); */
  box-shadow: ${({ theme, type }) => `0px 10px 20px ${theme.colors.background[type]}80`}; // 66 representa 40% de opacidade em hexadecimal
  

  cursor: pointer;
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

export { PokemonCardContainer, ContainerBackground, BadgeContainer, PokemonInfo, PokemonImage };

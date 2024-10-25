import styled from 'styled-components';
import { PokemonTypesKeyOf } from 'types/theme-types';

interface Props {
  type: PokemonTypesKeyOf;
}

interface IPokemonNotFound {
  type: PokemonTypesKeyOf[] | undefined;

}


const ProfileWrapper = styled.div<Props>`
  position: relative;
  background-color: ${({ theme, type }) => theme.colors.background[type]};
  min-height: 100%;
`;

const Banner = styled.div<Props>`
  height: 265px;
  width: 100%;
  position: relative;
  overflow-x: hidden;

  background-color: ${({ theme, type }) => theme.colors.background[type]};
  z-index: 1;

  /* transition: height 0.5s cubic-bezier(0, 1, 0, 1); */

  &.scrolled {
    position: sticky;
    top: 0;
    height: 105px;
  }

  svg.backIcon {
    position: absolute;
    width: 20px;
    height: 20px;

    left: 42px;
    top: 42px;

    cursor: pointer;
    z-index: 2;
  }
`;

const PokemonNameBackground = styled.div<Props>`
  position: absolute;
  top: 25px;
  left: -86px;

  font-size: 10rem;
  font-weight: 700;
  line-height: 11.9rem;
  /* letter-spacing: 0.5rem; */

  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  -webkit-text-fill-color: ${({ theme, type }) => theme.colors.background[type]};

  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(0deg, ${({ theme, type }) => theme.colors.background[type]} 18%, transparent);

    z-index: 1;

    &.scrolled {
      display: none;
    }
  }

  &.scrolled {
    display: none;
  }
`;

const PokemonInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 125px;

  position: absolute;
  top: 90px;

  padding-left: 40px;

  z-index: 2;

  &.scrolled {
    display: none;
  }
`;

const PokemonInfoScrolled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &.scrolled {
    display: none;
  }
`;

const PokemonImage = styled.div`
  /* stored in public folder */
  background-image: url('assets/patterns/circle-gradient.svg');
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 125px;

  height: 125px;
  width: 125px;
  img {
    height: 125px;
    width: 125px;
  }
`;

const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BadgeGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const TabsContainer = styled.div<Props>`
  position: relative;
  height: 75px; /** before + TabsGroup height */

  background-color: ${({ theme, type }) => theme.colors.background[type]};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 50px;

    height: 25px;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.default.WHITE};
    border-radius: 30px 30px 0px 0px;
  }

  &.scrolled {
    position: sticky;
    top: 105px;
  }
`;

const TabsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;

  padding-inline: 20px;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;

  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: white;

  cursor: pointer;

  &.active {
    background-image: url('assets/patterns/pokeball-gradient-tab.svg');
    background-size: cover;
  }
`;

const Content = styled.div`
  /** tamanho do device - banner - tabs + banner comprimido + 1 */
  min-height: calc(100vh - 265px - 50px + (110px + 250px));
  width: 100%;
  padding-inline: 40px;
  padding-bottom: 50px;

  background-color: ${({ theme }) => theme.colors.default.WHITE};

  &.scrolled {
    /** margin-top is bigger then TabsContainer height*/
    margin-top: 90px;
  }
`;

const PokemonNotFound = styled.div<IPokemonNotFound>`
  position: relative;
  width:  320px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-inline: auto;
`;


export {
  ProfileWrapper,
  Banner,
  PokemonNameBackground,
  PokemonInfo,
  PokemonInfoScrolled,
  PokemonImage,
  PokemonDescription,
  BadgeGroup,
  TabsContainer,
  TabsGroup,
  Tab,
  Content,
  PokemonNotFound
};

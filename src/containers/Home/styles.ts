import styled from 'styled-components/macro';
import { device } from 'util/media';

const HomeContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40px auto;
  grid-template-areas:
    'MENU'
    'MAIN';
  width: 100%;
  height: 100vh;

  padding: 20px 5px 30px 5px;

  background-image: url('assets/patterns/pokeball-gradient-home.svg');
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.default.WHITE};

  overflow-y: scroll;
  overflow-x: hidden;

  @media ${device.mobileM} {
    padding: 40px 20px 30px 20px;
  }

  @media ${device.mobileL} {
    padding: 40px 40px 30px 40px;
  }
`;

const MenuFilter = styled.nav`
  grid-area: MENU;

  display: flex;
  justify-content: end;
  align-items: flex-end;
  gap: 25px;

  /* background-color: darkkhaki; */
`;

const Main = styled.main`
  grid-area: MAIN;

  padding: 40px 0 0 0;

  /* background-color: chocolate; */
`;

const IconButton = styled.button`
  /* display: flex;
  align-items: flex-end; */

  width: max-content;
  height: max-content;

  border: none;
  outline: none;
  background: none;

  cursor: pointer;

  svg:hover {
    path {
    }
  }
`;

const PokemonCardContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  width: 100%;

  margin-top: 30px;
`;

export { HomeContainer, MenuFilter, Main, IconButton, PokemonCardContainer };

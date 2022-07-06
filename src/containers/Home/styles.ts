import styled from "styled-components";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px auto;
  grid-template-areas:
    "MENU"
    "MAIN";
  width: 414px;
  height: 100vh;

  padding: 40px 40px 30px 40px;

  background-image: url("assets/patterns/pokeball-gradient-home.svg");
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.default.WHITE};

  overflow-y: scroll;
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
  flex-direction: column;
  gap: 15px;
  width: 100%;

  margin-top: 30px;
`;

export { HomeContainer, MenuFilter, Main, IconButton, PokemonCardContainer };

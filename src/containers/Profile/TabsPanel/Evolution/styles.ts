import styled from "styled-components";

const EvolutionContainer = styled.div`
  display: none;
  padding-top: 15px;

  &.isOpen {
    display: block;
  }
`;

const EvolutionGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px; ;
`;

const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;

  background-image: url("assets/patterns/pokeball-gradient-evolution.svg");

  margin-bottom: 15px;

  img {
    width: 75px;
    height: 75px;
  }
`;

const LevelUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  svg {
    height: 20px;
    width: 20px;
    transform: rotate(180deg);
    path {
      fill: ${({ theme }) => theme.colors.default.GREY};
    }
  }

  span {
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

export { EvolutionContainer, EvolutionGrid, PokemonInfo, PokemonImage, LevelUp };

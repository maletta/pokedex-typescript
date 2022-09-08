import styled from "styled-components";

import { PokemonTypesKeyOf } from "types/theme-types";

interface WeaknessProps {
  type: PokemonTypesKeyOf;
}

const AboutContainer = styled.div`
  display: none;
  padding-top: 15px;

  &.isOpen {
    display: block;
  }
`;

const GridInfo = styled.div`
  display: grid;
  grid-template-columns: 85px max-content;
  grid-template-rows: auto;
  grid-row-gap: 20px;
  grid-column-gap: 10px;

  margin-top: 22.5px;
  margin-bottom: 25.5px;

  & div:nth-child(odd) {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.default.BLACK};
    align-self: center;
  }

  & div:nth-child(2n) {
    font-size: 1.6rem;
    line-height: 1.909rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.default.GREY};

    align-self: center;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

const GridInfoItem = styled.div`
  &&.abilities {
    display: flex;
    flex-direction: column;
  }

  &&.weaknesses {
    display: flex;
    gap: 10px;
  }

  &&.gender {
    & span:first-child {
      color: ${({ theme }) => theme.colors.type.FLYING};
    }

    & span:last-child {
      color: ${({ theme }) => theme.colors.type.FAIRY};
    }
  }
`;

const WeaknessBadge = styled.span<WeaknessProps>`
  padding: 5px;
  background-color: ${({ theme, type }) => theme.colors.type[type]};
  border-radius: 3px;
`;

export { AboutContainer, GridInfo, GridInfoItem, WeaknessBadge };

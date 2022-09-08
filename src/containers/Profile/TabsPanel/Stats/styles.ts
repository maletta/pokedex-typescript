import styled from "styled-components";

import { PokemonTypesKeyOf } from "types/theme-types";

interface EffectivenessProps {
  type: PokemonTypesKeyOf;
}

interface BarProps {
  percent: number;
  type: PokemonTypesKeyOf;
}

const StatsContainer = styled.div`
  display: none;
  padding-top: 15px;

  &.isOpen {
    display: block;
  }
`;

const GridStats = styled.div`
  display: grid;
  grid-template-columns: min-content min-content auto min-content min-content;
  grid-template-rows: auto;
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  align-items: center;

  margin-top: 22.5px;
  margin-bottom: 20px;
`;

const GridStatsItem = styled.div`
  &.title {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.432rem;
    color: ${({ theme }) => theme.colors.default["BLACK"]};
  }

  &.value,
  &.min,
  &.max {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: right;
    color: ${({ theme }) => theme.colors.default["GREY"]};
  }

  &.value.bold {
    font-weight: 700;
  }

  &.min.bold,
  &.max.bold {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
`;

const Bar = styled.div<BarProps>`
  height: 4px;
  width: ${({ percent }) => `${percent}%`};
  border-radius: 2px;
  background-color: ${({ theme, type }) => theme.colors.type[type]}; ;
`;

const GridStatsDescription = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;

  color: ${({ theme }) => theme.colors.default["GREY"]};

  margin-bottom: 20px;
`;

const GridEffectiveness = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 25px);
  grid-template-rows: auto;
  grid-row-gap: 20px;
  justify-content: space-between;
`;

const GridEffectivenessItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.colors.default.GREY};
  }
`;

const EffectivenessBadge = styled.span<EffectivenessProps>`
  padding: 5px;
  background-color: ${({ theme, type }) => theme.colors.type[type]};
  border-radius: 3px;
`;

export {
  StatsContainer,
  GridStats,
  GridStatsItem,
  Bar,
  GridStatsDescription,
  GridEffectiveness,
  GridEffectivenessItem,
  EffectivenessBadge,
};

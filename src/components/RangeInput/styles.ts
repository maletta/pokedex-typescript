import styled, { css } from "styled-components";

interface ThumbProps {
  direction: "left" | "right";
  percent: number;
  value: number;
}

interface RangeProps {
  left: number;
  right: number;
}

const Container = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  /* background-color: yellow; */
`;

const Input = styled.input`
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 10;
  height: 10px;
  width: 100%;
  opacity: 0;

  top: calc(50% - 5px);

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: 30px;
    height: 24px;
    border-radius: 0;
    border: 0 none;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    pointer-events: all;
    position: relative;
    z-index: 1;
    height: 24px;
    width: 30px;
    -moz-appearance: none;
  }
`;

const Slider = styled.div`
  position: relative;

  width: 100%;
  height: 4px;

  top: calc(50% - 2px);
`;

const Track = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #f2f2f2;
`;
const Range = styled.div<RangeProps>`
  position: absolute;
  z-index: 2;
  left: ${({ left }) => `${left}%`};
  right: ${({ right }) => `${right}%`};
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background-color: #ea5d60;
`;

const Thumb = styled.label<ThumbProps>`
  position: absolute;
  z-index: 5;
  width: 20px;
  height: 20px;

  background-color: #fff;

  border: 4px solid #ea5d60;
  border-radius: 50%;
  top: calc(50% - 10px);

  box-shadow: 0px 10px 20px rgba(234, 93, 96, 0.3);
  transition: box-shadow 0.3s ease-in-out;

  ${({ direction, percent }) =>
    direction === "left" &&
    css`
      /** left: controla a posição da thumb referente a thumb do input */
      left: ${percent}%;
      /** transform = pequeno ajuste para a thumb artificial não ultrapassar muito
      a thumb do input*/
      transform: translate(-10px, 0px);
    `}

  ${({ direction, percent }) =>
    direction === "right" &&
    css`
      right: ${percent}%;
      transform: translate(7px, 0px);
    `}

  &&.hover {
    box-shadow: 0 0 0 20px rgba(234, 93, 96, 0.1);
  }

  &&.active {
    box-shadow: 0 0 0 40px rgba(234, 93, 96, 0.2);
  }

  ::before {
    content: ${({ value }) => `'${value}'`};
    position: absolute;
    top: 15px;
    left: -4px;
    font-size: 1.2rem;
    line-height: 1.432rem;
    font-weight: 400;
    width: 20px;
    text-align: center;
  }
`;

export { Container, Input, Slider, Track, Range, Thumb };

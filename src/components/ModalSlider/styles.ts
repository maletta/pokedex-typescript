import styled, { css } from "styled-components/macro";

interface ISliderContainer {
  isOpen: boolean;
}

interface ISliderContent {
  bottomOffset: number;
  isOpen: boolean;
}

const SliderContainer = styled.div<ISliderContainer>`
  ${({ isOpen }) => {
    if (isOpen)
      return css`
        display: flex;
      `;
    else
      return css`
        display: none;
      `;
  }};
  /* display: block; */
  position: absolute;

  width: 100vw;
  height: 100vh;

  background-color: rgba(23, 23, 27, 0.5);

  z-index: 100;
`;

// define styles inline to avoid generate styled component classes
const SliderContent = styled.div.attrs<ISliderContent>(({ bottomOffset }) => {
  const transition = bottomOffset === 0 ? "bottom 200ms ease 0s" : "none";

  return {
    style: {
      bottom: `${bottomOffset}px`,
      transition,
    },
  };
})<ISliderContent>`
  display: flex;
  flex-direction: column;

  position: absolute;

  width: 100vw;
  max-height: calc(100vh - 60px); /** tamanho max - espaço no top */

  padding-top: 30px;

  background-color: #fff;

  border-radius: 30px 30px 0px 0px;

  transition: transform 300ms;

  ${({ isOpen }) => {
    if (isOpen)
      return css`
        transform: translateY(0%);
        display: flex;
      `;
    else
      return css`
        transform: translateY(0%);
        display: none;
      `;
  }};
`;

const SliderContentOverFlow = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;

  /* pointer-events: none; */
`;

const DragBar = styled.div`
  position: absolute;

  top: -15px;
  right: 50%;
  left: calc(50% - 40px);

  width: 80px;
  height: 6px;

  border-radius: 3px;
  background-color: white;

  cursor: grab;
`;

export { SliderContainer, SliderContent, SliderContentOverFlow, DragBar };

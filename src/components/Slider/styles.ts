import styled from "styled-components/macro";

interface ISliderContainer {
  isOpen: boolean;
}

const SliderContainer = styled.div<ISliderContainer>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;

  width: 100vw;
  height: 100vh;

  background-color: rgba(23, 23, 27, 0.5);

  z-index: 100;
`;

const SliderContent = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;

  width: 100vw;
  max-height: calc(100vh - 60px); /** tamanho max - espaço no top */

  padding-top: 30px;

  background-color: #fff;

  border-radius: 30px 30px 0px 0px;

  &::after {
    content: "";

    position: absolute;

    top: -15px;
    right: 50%;
    left: calc(50% - 40px);

    width: 80px;
    height: 6px;

    border-radius: 3px;
    background-color: white;

    cursor: grab;
  }
`;

const SliderContentOverFlow = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 40px 50px 40px;

  overflow-y: scroll;
`;

export { SliderContainer, SliderContent, SliderContentOverFlow };

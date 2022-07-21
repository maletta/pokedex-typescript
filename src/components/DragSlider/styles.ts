import styled from "styled-components";

const DragSliderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  width: auto;
  height: 40px;

  overflow-x: hidden;

  cursor: grab;
`;

const DragSliderOverflow = styled.div`
  position: absolute;
  display: inline-flexbox;
  gap: 22px;
  width: 100%;
`;

export { DragSliderContainer, DragSliderOverflow };

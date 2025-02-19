import styled from 'styled-components';

export const DragContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  touch-action: pan-y pinch-zoom;
`;

export const SliderContent = styled.div<{ $isDragging: boolean }>`
  display: grid;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 100%;
  transition: ${({ $isDragging }) =>
    $isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'};
  will-change: transform;
`;

import styled from "styled-components";

interface IDragSliderOverflow {
  gap: number;
  leftOffset: number;
  maxLimitLeft: number;
  maxLimitRight: number;
  leftOffsetWithoutBoundary: number;
  isGrabbed: boolean;
}

const DragSliderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  width: auto;
  height: 40px;

  overflow-x: hidden;

  cursor: grab;
`;

const DragSliderOverflow = styled.div.attrs<IDragSliderOverflow>(
  ({ leftOffset, leftOffsetWithoutBoundary, maxLimitLeft, maxLimitRight, isGrabbed }) => {
    /**
     * se não estiver clicado e segurando (grab)
     * e se o deslocamento da esquerda for maior que 0
     * e se o deslocamento da direita ultrapassar o tamanho de todos os elementos
     * então haverá transition para reposicionar o conteúdo com suavidade
     */
    const transition =
      (leftOffsetWithoutBoundary > maxLimitLeft || leftOffsetWithoutBoundary < -maxLimitRight) && !isGrabbed
        ? "left 200ms ease 0s"
        : "none";

    return {
      style: {
        transition,
        left: `${leftOffset}px`,
      },
    };
  },
)<IDragSliderOverflow>`
  position: absolute;
  display: inline-flexbox;
  gap: ${({ gap }) => `${gap}px`};
  width: 100%;
`;

export { DragSliderContainer, DragSliderOverflow };

import React, { useState, useRef, useEffect } from "react";

import { DragSliderContainer, DragSliderOverflow } from "./styles";

interface DragSliderProps {
  children: Array<React.ReactNode>;
  totalChildrens: number;
  isVisible: boolean;
}

const DragSlider: React.FC<DragSliderProps> = ({ children, totalChildrens, isVisible }) => {
  const dragSliderCotainer = useRef<HTMLDivElement>(null);
  const dragSliderOverflow = useRef<HTMLDivElement>(null);
  const itemsGap = 22;
  const itemsWidth = 25;
  const [currentLeft, setCurrentLeft] = useState<number>(0);
  const [cursorSpaceX, setCursorSpaceX] = useState<number>(0);
  const [isGrabbed, setIsGrabbed] = useState<boolean>(false);
  const [maxLimitRight, setMaxLimitRight] = useState<number>(0);
  const [leftOffsetWithoutBoundary, setLeftOffsetWithoutBoundary] = useState<number>(0);
  const [leftOffset, setLeftOffset] = useState<number>(0);
  const maxLimitLeft = 0;

  function onMouseDown(e: React.MouseEvent) {
    if (isVisible) {
      // deltaX é a posição X do cusor na div, subtraindo o X do componente clicado
      // por que o componente clicado pode ter deslocamento X de padding
      const deltaX = e.clientX - e.currentTarget.getClientRects()[0].x;

      setIsGrabbed(true);
      setCursorSpaceX(deltaX);
      setCurrentLeft(dragSliderOverflow.current?.offsetLeft || 0);
    }
  }

  function onMouseUp() {
    setIsGrabbed(false);
  }

  function onMouseMove(e: React.MouseEvent) {
    if (isGrabbed && dragSliderOverflow.current && isVisible) {
      const deltaX = e.clientX - e.currentTarget.getClientRects()[0].x;
      const deltaClientX = cursorSpaceX - deltaX;
      const offsetLeft = currentLeft - deltaClientX;

      // dragSliderOverflow.current.style.left = `${offsetLeft}px`;

      setLeftOffset(offsetLeft);
      setLeftOffsetWithoutBoundary(offsetLeft);
    }
  }

  function windowMouseUp() {
    setIsGrabbed(false);
  }

  useEffect(() => {
    // se o deslocamento na esquerda for maior que 0, então deslocamento será 0
    // se o deslocamento na direita for maior que o tamanho do container dos elementos
    // então o deslocamento será do tamanho máximo do container com os itens
    if (leftOffset > maxLimitLeft) {
      setLeftOffset(0);
    } else if (leftOffset < -maxLimitRight) {
      setLeftOffset(-maxLimitRight);
    }
  }, [isGrabbed]);

  useEffect(() => {
    if (dragSliderCotainer.current && isVisible) {
      const dragSliderWidthDeafult = dragSliderCotainer.current.getClientRects()[0].right;
      // o tamanho máximo para o deslocamento da direita será
      // a soma da largura de todos os items + espaço entre os itens + largura de um item
      const dragSliderWidthCalculed = itemsWidth * totalChildrens + itemsGap * totalChildrens + itemsWidth;
      setMaxLimitRight(Math.abs(dragSliderWidthCalculed - dragSliderWidthDeafult));
    }
  }, [dragSliderCotainer.current, isVisible]);

  useEffect(() => {
    if (isVisible) window.addEventListener("mouseup", windowMouseUp);

    return () => {
      window.removeEventListener("mouseup", windowMouseUp);
    };
  }, []);

  return (
    <DragSliderContainer ref={dragSliderCotainer} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      <DragSliderOverflow
        ref={dragSliderOverflow}
        gap={itemsGap}
        leftOffset={leftOffset}
        leftOffsetWithoutBoundary={leftOffsetWithoutBoundary}
        maxLimitLeft={maxLimitLeft}
        maxLimitRight={maxLimitRight}
        isGrabbed={isGrabbed}
      >
        {children}
      </DragSliderOverflow>
    </DragSliderContainer>
  );
};

export default DragSlider;

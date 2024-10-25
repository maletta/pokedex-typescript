import React, { useState, useRef, useEffect } from "react";

import { DragSliderContainer, DragSliderOverflow } from "./styles";
import { debounceFunction } from "util/debounce";

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

  // Função para obter a posição X correta, dependendo de evento de toque ou mouse
  const getEventX = (e: React.MouseEvent | React.TouchEvent) => {
    if ("touches" in e) {
      return e.touches[0].clientX;
    }
    return e.clientX;
  };

  function onStartDrag(e: React.MouseEvent | React.TouchEvent) {
    if (isVisible) {
      // deltaX é a posição X do cusor na div, subtraindo o X do componente clicado
      // por que o componente clicado pode ter deslocamento X de padding
      const deltaX = getEventX(e) - e.currentTarget.getClientRects()[0].x;
      console.log("start to drag")

      setIsGrabbed(true);
      setCursorSpaceX(deltaX);
      setCurrentLeft(dragSliderOverflow.current?.offsetLeft || 0);
    }
  }

  function onEndDrag() {
    setIsGrabbed(false);
  }

  function onDragMove(e: React.MouseEvent | React.TouchEvent) {
    if (isGrabbed && dragSliderOverflow.current && isVisible) {
      const deltaX = getEventX(e) - e.currentTarget.getClientRects()[0].x;
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
      // a soma da largura de todos os items + espaço entre os itens + largura de um item + um gap de item
      const dragSliderWidthCalculed = itemsWidth * totalChildrens + itemsGap * totalChildrens + itemsWidth + itemsGap;
      setMaxLimitRight(Math.abs(dragSliderWidthCalculed - dragSliderWidthDeafult));
    }
  }, [dragSliderCotainer.current, isVisible]);

  useEffect(() => {
    const handleMouseUp = () => windowMouseUp();
    const handleTouchEnd = () => windowMouseUp();

    if (isVisible) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);


  return (
    <DragSliderContainer
      ref={dragSliderCotainer}
      onMouseDown={onStartDrag}
      onMouseUp={onEndDrag}
      onMouseMove={onDragMove}
      onTouchStart={onStartDrag}
      onTouchEnd={onEndDrag}
      onTouchMove={onDragMove}
    >
      <DragSliderOverflow
        ref={dragSliderOverflow}
        gap={itemsGap}
        leftOffset={leftOffset}
        leftOffsetWithoutBoundary={leftOffsetWithoutBoundary}
        maxLimitLeft={maxLimitLeft}
        maxLimitRight={maxLimitRight}
        isGrabbed={isGrabbed}
        totalChildrens={totalChildrens}
      >
        {children}
      </DragSliderOverflow>
    </DragSliderContainer>
  );
};

export default DragSlider;

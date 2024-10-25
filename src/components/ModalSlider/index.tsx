import React, { useRef, useEffect, useState } from "react";

import { SliderContainer, SliderContent, Close, SliderContentOverFlow, DragBar } from "./styles";

interface SliderProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const ModalSlider: React.FC<SliderProps> = ({ children, isOpen, closeModal }) => {
  const sliderContainer = useRef<HTMLDivElement>(null);
  const sliderContent = useRef<HTMLDivElement>(null);
  const [isGrabbed, setIsGrabbed] = useState<boolean>(false);
  const [currentTopOffset, setCurrentTopOffset] = useState<number>(0);
  const [cursorY, setCursorY] = useState<number>(0);
  const [bottom, setBottom] = useState<number>(0);
  const maxOffset = 0;
  const [minOffset, setMinOffset] = useState<number>(0);

  // Função para obter a posição Y correta, independentemente de toque ou mouse
  const getEventY = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e) {
      return e.touches[0].clientY;
    }
    return e.clientY;
  };

  function onStartDrag(e: React.MouseEvent | React.TouchEvent) {
    setCurrentTopOffset(bottom);
    setCursorY(getEventY(e));
    setIsGrabbed(true);
  }

  function onMoveDrag(e: React.MouseEvent | React.TouchEvent) {
    if (isGrabbed) {
      const offsetCursor = getEventY(e) - cursorY;
      const offsetTop = currentTopOffset - offsetCursor;

      if (offsetTop > maxOffset) {
        setBottom(0);
      } else if (offsetTop < -minOffset) {
        setBottom(-minOffset);
      } else {
        setBottom(offsetTop);
      }
    }
  }

  function onEndDrag() {
    setIsGrabbed(false);
    setCurrentTopOffset(bottom);
  }


  useEffect(() => {
    // if offset is too small, so return to initial offset, and dont close modal
    // else close modal
    if (!isGrabbed && sliderContent.current && isOpen) {
      const widthToBackToZero = -Math.floor(sliderContent.current?.getClientRects()[0].height / 2);
      if (bottom > widthToBackToZero) {
        setBottom(0);
      } else {
        closeModal();
        setCurrentTopOffset(0);
        setBottom(0);
      }
    }
  }, [isGrabbed, isOpen]);

  // add overflow hidden to body, content behind the slider dont scroll
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen && body) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    // Event listeners para mouse e toque
    const handleMouseUp = () => onEndDrag();
    const handleTouchEnd = () => onEndDrag();

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    if (isOpen) {
      setCurrentTopOffset(0);
      setMinOffset((sliderContainer.current?.getClientRects()[0].height || 0) - 100);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen]);

  return (
    <SliderContainer
      ref={sliderContainer}
      isOpen={isOpen}
      onMouseMove={onMoveDrag}
      onTouchMove={onMoveDrag}

    >
      <SliderContent ref={sliderContent} isOpen={isOpen} bottomOffset={bottom}>
        <Close onClick={() => { closeModal() }}>
          close [x]
        </Close>
        <DragBar
          onMouseDown={onStartDrag}
          onTouchStart={onStartDrag}
        />
        <SliderContentOverFlow>{children}</SliderContentOverFlow>
      </SliderContent>
    </SliderContainer>
  );
};

export default ModalSlider;

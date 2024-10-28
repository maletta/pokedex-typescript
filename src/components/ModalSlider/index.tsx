import React, { useRef, useEffect, useState, useCallback } from "react";
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
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const currentTopOffset = useRef<number>(0);
  const cursorY = useRef<number>(0);
  const minOffset = useRef<number>(0);

  const getEventY = (e: React.MouseEvent | React.TouchEvent) =>
    'touches' in e ? e.touches[0].clientY : e.clientY;

  const onStartDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (sliderContent.current) {
      currentTopOffset.current = parseInt(sliderContent.current.style.bottom || "0", 10);
    }
    cursorY.current = getEventY(e);
    setIsGrabbed(true);
  };

  const onEndDrag = () => {
    setIsGrabbed(false);
    if (sliderContent.current && isOpen) {
      const threshold = -(sliderContent.current.clientHeight / 2);
      const bottomValue = parseInt(sliderContent.current.style.bottom || "0", 10);

      if (bottomValue > threshold) {
        sliderContent.current.style.bottom = "0px";
      } else {
        closeWithAnimation();
      }
    }
  };

  const closeWithAnimation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
    }, 300); // Tempo da animação definido no CSS
  };

  const onMoveDrag = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();

    if (isGrabbed && sliderContent.current) {
      const offsetCursor = getEventY(e) - cursorY.current;
      const offsetTop = currentTopOffset.current - offsetCursor;

      if (offsetTop > 0) {
        sliderContent.current.style.bottom = "0px";
      } else if (offsetTop < -minOffset.current) {
        sliderContent.current.style.bottom = `${-minOffset.current}px`;
      } else {
        sliderContent.current.style.bottom = `${offsetTop}px`;
      }
    }
  }, [isGrabbed]);

  useEffect(() => {
    if (isOpen && sliderContainer.current) {
      minOffset.current = (sliderContainer.current.clientHeight || 0) - 100;
    }
  }, [isOpen]);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen && body) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }

    const handleMouseUp = () => onEndDrag();
    const handleTouchEnd = () => onEndDrag();

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen]);

  return (
    <SliderContainer
      ref={sliderContainer}
      className={isOpen && !isClosing ? "open" : isClosing ? "closing" : ""}
      onMouseMove={(e) => requestAnimationFrame(() => onMoveDrag(e))}
      onTouchMove={(e) => requestAnimationFrame(() => onMoveDrag(e))}
    >
      <SliderContent
        ref={sliderContent}
        className={isOpen && !isClosing ? "open" : isClosing ? "closing" : ""}
      >
        <Close onClick={closeWithAnimation}>close [x]</Close>
        <SliderContentOverFlow>{children}</SliderContentOverFlow>
      </SliderContent>
    </SliderContainer>
  );
};

export default ModalSlider
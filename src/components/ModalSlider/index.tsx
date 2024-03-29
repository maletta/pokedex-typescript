import React, { useRef, useEffect, useState } from "react";

import { SliderContainer, SliderContent, SliderContentOverFlow, DragBar } from "./styles";

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

  function onDragBarMouseDown(e: React.MouseEvent) {
    setCurrentTopOffset(bottom);
    setCursorY(e.clientY);
    setIsGrabbed(true);
  }

  function onSliderContainerMouseMove(e: React.MouseEvent) {
    if (isGrabbed) {
      const offsetCursor = e.clientY - cursorY;
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

  function onMouseUp() {
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
    window.addEventListener("mouseup", onMouseUp);
    if (isOpen) {
      setCurrentTopOffset(0);
      setMinOffset((sliderContainer.current?.getClientRects()[0].height || 0) - 100);
    }

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isOpen]);

  return (
    <SliderContainer ref={sliderContainer} isOpen={isOpen} onMouseMove={onSliderContainerMouseMove}>
      <SliderContent ref={sliderContent} isOpen={isOpen} bottomOffset={bottom}>
        <DragBar onMouseDown={onDragBarMouseDown} />
        <SliderContentOverFlow>{children}</SliderContentOverFlow>
      </SliderContent>
    </SliderContainer>
  );
};

export default ModalSlider;

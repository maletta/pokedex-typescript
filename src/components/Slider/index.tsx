import React, { useRef, useEffect, useState } from "react";

import { SliderContainer, SliderContent, SliderContentOverFlow, DragBar } from "./styles";

interface SliderProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Slider: React.FC<SliderProps> = ({ children, isOpen }) => {
  const dragBar = useRef<HTMLDivElement>(null);
  const sliderContent = useRef<HTMLDivElement>(null);
  const sliderContainer = useRef<HTMLDivElement>(null);
  const [isGrabbed, setIsGrabbed] = useState<boolean>(false);
  const [initialTopOffset, setInitialTopOffset] = useState<number>(sliderContent.current?.getClientRects()[0].top || 0);
  const [currentTopOffset, setCurrentTopOffset] = useState<number>(sliderContent.current?.getClientRects()[0].top || 0);
  const [cursorY, setCursorY] = useState<number>(0);

  function onDragBarMouseDown(e: React.MouseEvent) {
    const sliderContentTop = sliderContent.current?.getClientRects()[0].top || 0;

    setCurrentTopOffset(sliderContentTop);
    setCursorY(e.clientY);
    setIsGrabbed(true);
  }

  function onSliderContainerMouseMove(e: React.MouseEvent) {
    if (isGrabbed && sliderContent.current && sliderContainer.current) {
      const offsetCursor = e.clientY - cursorY;
      const offsetTop = currentTopOffset + offsetCursor;

      if (offsetTop < initialTopOffset) {
        sliderContent.current.style.top = `${initialTopOffset}px`;
      } else if (offsetTop > sliderContainer.current.getClientRects()[0].height - initialTopOffset) {
        sliderContent.current.style.top = `${sliderContainer.current.getClientRects()[0].height - initialTopOffset}px`;
      } else {
        sliderContent.current.style.top = `${offsetTop}px`;
      }
    }
  }

  function onMouseUp() {
    setIsGrabbed(false);
    setCurrentTopOffset(sliderContent.current?.getClientRects()[0].top || 0);
  }

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    setInitialTopOffset(sliderContent.current?.getClientRects()[0].top || 0);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <SliderContainer ref={sliderContainer} isOpen={isOpen} onMouseMove={onSliderContainerMouseMove}>
      <SliderContent ref={sliderContent}>
        <DragBar ref={dragBar} onMouseDown={onDragBarMouseDown} />
        <SliderContentOverFlow>{children}</SliderContentOverFlow>
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider;

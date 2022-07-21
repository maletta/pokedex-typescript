import React, { useState, useRef, useEffect } from "react";

import { DragSliderContainer, DragSliderOverflow } from "./styles";

interface DragSliderProps {
  children: Array<React.ReactNode>;
}

const DragSlider: React.FC<DragSliderProps> = ({ children }) => {
  const dragSliderCotainer = useRef<HTMLDivElement>(null);
  const dragSliderOverflow = useRef<HTMLDivElement>(null);
  const [initialX, setInitialX] = useState<number>(0);
  const [currentLeft, setCurrentLeft] = useState<number>(0);
  const [cursorSpaceX, setCursorSpaceX] = useState<number>(0);
  const [clientX, setClientX] = useState<number>(0);
  const [isGrabbed, setIsGrabbed] = useState<boolean>(false);

  function onMouseDown(e: React.MouseEvent) {
    console.log(e.currentTarget.getClientRects()[0]);
    console.log(e.clientX, e.currentTarget.getClientRects()[0].x);
    const deltaX = e.clientX - e.currentTarget.getClientRects()[0].x;

    setIsGrabbed(true);
    setCursorSpaceX(deltaX);
    setCurrentLeft(dragSliderOverflow.current?.offsetLeft || 0);
  }

  function onMouseUp(e: React.MouseEvent) {
    setIsGrabbed(false);
  }

  function onMouseMove(e: React.MouseEvent) {
    console.log();
    const offsetLef = dragSliderOverflow.current?.offsetLeft || 0;
    const deltaX = e.clientX - e.currentTarget.getClientRects()[0].x;
    const deltaClientX = cursorSpaceX - deltaX;
    if (isGrabbed && dragSliderOverflow.current) {
      console.log("onMouseMove");
      // console.log(currentLeft, deltaClientX, currentLeft - deltaClientX);
      console.log(dragSliderOverflow.current.style.left, dragSliderOverflow.current.offsetLeft);
      console.log(dragSliderOverflow.current.getClientRects()[0]);
      console.log(dragSliderOverflow.current.getBoundingClientRect());
      dragSliderOverflow.current.style.left = `${currentLeft - deltaClientX}px`;
    }
  }

  function windowMouseUp() {
    setIsGrabbed(false);
  }
  useEffect(() => {
    if (dragSliderCotainer.current) {
      setInitialX(dragSliderCotainer.current.getClientRects()[0].x);
    }
  }, [dragSliderCotainer.current]);

  useEffect(() => {
    window.addEventListener("mouseup", windowMouseUp);

    return () => {
      window.removeEventListener("mouseup", windowMouseUp);
    };
  }, []);

  return (
    <DragSliderContainer ref={dragSliderCotainer} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      <DragSliderOverflow ref={dragSliderOverflow}>{children}</DragSliderOverflow>
    </DragSliderContainer>
  );
};

export default DragSlider;

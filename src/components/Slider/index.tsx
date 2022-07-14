import React from "react";

import { SliderContainer, SliderContent, SliderContentOverFlow } from "./styles";

interface SliderProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Slider: React.FC<SliderProps> = ({ children, isOpen }) => {
  return (
    <SliderContainer isOpen={isOpen}>
      <SliderContent>
        <SliderContentOverFlow>{children}</SliderContentOverFlow>
      </SliderContent>
    </SliderContainer>
  );
};

export default Slider;

import React, { useState } from "react";
import { useTheme } from "styled-components";

import ModalSlider from "components/ModalSlider";
import { ApplicationTitle, Description, FilterTitle } from "components/Titles";
import { IconBasePokemonTypes } from "components/IconBase";
import DragSlider from "components/DragSlider";

import { ModalFilterContainer, GridFilter } from "./styles";

interface IModalFilter {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalFilter: React.FC<IModalFilter> = ({ isOpen, closeModal }) => {
  const { colors, types } = useTheme();

  return (
    <ModalSlider isOpen={isOpen} closeModal={closeModal}>
      <ModalFilterContainer>
        <ApplicationTitle>Filters</ApplicationTitle>
        <Description customCss={{ color: colors.default.GREY }}>
          Use advanced search to explore Pokémon by type, weakness, height and more!
        </Description>

        <FilterTitle customCss={{ marginTop: "35px" }}>Types</FilterTitle>
        <DragSlider>
          {types.map(currentType => (
            <IconBasePokemonTypes type={currentType} key={currentType} />
          ))}
        </DragSlider>
      </ModalFilterContainer>
    </ModalSlider>
  );
};

export default ModalFilter;

import React, { useState } from "react";
import { useTheme } from "styled-components";

import ModalSlider from "components/ModalSlider";
import { ApplicationTitle, Description } from "components/Titles";
import Button from "components/Button";

import { ModalSortContainer, ButtonGroup } from "./styles";

interface IModalSort {
  isOpen: boolean;
  closeModal: () => void;
}

enum EnumButtons {
  SMALLEST = "SMALLEST",
  HIGHEST = "HIGHEST",
  AZ = "AZ",
  ZA = "ZA",
}

const ModalSort: React.FC<IModalSort> = ({ isOpen, closeModal }) => {
  const { colors } = useTheme();
  const [selected, setSelected] = useState<EnumButtons>(EnumButtons.SMALLEST);

  function returnVariant(currentEnum: EnumButtons) {
    return currentEnum === selected ? "primary" : "secondary";
  }

  return (
    <ModalSlider isOpen={isOpen} closeModal={closeModal}>
      <ModalSortContainer>
        <Description
          customCss={{ color: colors.default.BLACK }}
        > [Feature in progress - Funcionalidade em desenvolvimento]</Description ><ApplicationTitle>Sort</ApplicationTitle>
        <Description customCss={{ color: colors.default.GREY }}>Sort Pokémons alphabetically or by National Pokédex number!</Description>

        <ButtonGroup>
          <Button variant={returnVariant(EnumButtons.SMALLEST)} handleClick={() => setSelected(EnumButtons.SMALLEST)}>
            Smallest number first
          </Button>
          <Button variant={returnVariant(EnumButtons.HIGHEST)} handleClick={() => setSelected(EnumButtons.HIGHEST)}>
            Highest number first
          </Button>
          <Button variant={returnVariant(EnumButtons.AZ)} handleClick={() => setSelected(EnumButtons.AZ)}>
            A-Z
          </Button>
          <Button variant={returnVariant(EnumButtons.ZA)} handleClick={() => setSelected(EnumButtons.ZA)}>
            Z-A
          </Button>
        </ButtonGroup>
      </ModalSortContainer>
    </ModalSlider>
  );
};

export default ModalSort;

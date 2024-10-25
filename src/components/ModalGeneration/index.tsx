import React, { useState } from "react";
import { useTheme } from "styled-components";

import ModalSlider from "components/ModalSlider";
import { ApplicationTitle, Description, } from "components/Titles";
import { GenerationCard } from "components/GenerationCard";

import { ModalGenerationContainer, GridGeneration } from "./styles";
import { PokemonNameStyle } from "components/Titles/styles";

interface IModalGeneration {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalGeneration: React.FC<IModalGeneration> = ({ isOpen, closeModal }) => {
  const { colors } = useTheme();
  const generations: [1, 2, 3, 4, 5, 6, 7, 8] = [1, 2, 3, 4, 5, 6, 7, 8];
  const [selected, setSelected] = useState(2);

  return (
    <ModalSlider isOpen={isOpen} closeModal={closeModal}>
      <ModalGenerationContainer>

        <Description
          customCss={{ color: colors.default.BLACK }}
        > [Feature in progress - Funcionalidade em desenvolvimento]</Description >
        <ApplicationTitle>Generations</ApplicationTitle>
        <Description customCss={{ color: colors.default.GREY }}>Use search for generations to explore your Pokémon!</Description>

        <GridGeneration>
          {generations.map(generation => (
            <GenerationCard
              key={generation}
              generation={generation}
              handleClick={() => setSelected(generation)}
              selected={generation === selected}
            />
          ))}
        </GridGeneration>
      </ModalGenerationContainer>
    </ModalSlider >
  );
};

export default ModalGeneration;

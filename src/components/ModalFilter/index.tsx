import React, { useState } from "react";
import { useTheme } from "styled-components";

import ModalSlider from "components/ModalSlider";
import { ApplicationTitle, Description, FilterTitle } from "components/Titles";
import DragSlider from "components/DragSlider";

import { ModalFilterContainer, GridFilter, ButtonGroup } from "./styles";
import { PokemonTypesKeyOf, PokemonHeightKeyOf, PokemonWeightKeyOf } from "types/theme-types";
import { PokemonHeightsIcon, PokemonTypesIcon, PokemonWeightsIcon } from "components/Icon";
import RangeInput from "components/RangeInput";
import Button from "components/Button";

interface IModalFilter {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalFilter: React.FC<IModalFilter> = ({ isOpen, closeModal }) => {
  const { colors, types, heights, weights } = useTheme();
  const [typeSelected, setTypeSelected] = useState<PokemonTypesKeyOf | null>(null);
  const [weaknessesSelected, setWeaknessesSelected] = useState<PokemonTypesKeyOf | null>(null);
  const [heightSelected, setHeightSelected] = useState<PokemonHeightKeyOf | null>(null);
  const [weightSelected, setWeightSelected] = useState<PokemonWeightKeyOf | null>(null);

  function onTypeClick(type: PokemonTypesKeyOf) {
    setTypeSelected(type);
  }

  function onWeaknessesClick(type: PokemonTypesKeyOf) {
    setWeaknessesSelected(type);
  }

  function onHeightClick(height: PokemonHeightKeyOf) {
    setHeightSelected(height);
  }

  function onWeightClick(weight: PokemonWeightKeyOf) {
    setWeightSelected(weight);
  }

  return (
    <ModalSlider isOpen={isOpen} closeModal={closeModal}>
      <ModalFilterContainer>
        <ApplicationTitle>Filters</ApplicationTitle>
        <Description customCss={{ color: colors.default.GREY }}>
          Use advanced search to explore Pokémon by type, weakness, height and more!
        </Description>
        <FilterTitle customCss={{ marginTop: "35px" }}>Types</FilterTitle>
        <DragSlider totalChildrens={types.length} isVisible={isOpen}>
          {types.map(currentType => (
            <PokemonTypesIcon
              key={currentType}
              type={currentType}
              variant={currentType === typeSelected ? "secondary" : "primary"}
              handleClick={onTypeClick}
            />
          ))}
        </DragSlider>
        <FilterTitle customCss={{ marginTop: "35px" }}>Weaknesses</FilterTitle>
        <DragSlider totalChildrens={types.length} isVisible={isOpen}>
          {types.map(currentType => (
            <PokemonTypesIcon
              key={currentType}
              type={currentType}
              variant={currentType === weaknessesSelected ? "secondary" : "primary"}
              handleClick={onWeaknessesClick}
            />
          ))}
        </DragSlider>

        <FilterTitle customCss={{ marginTop: "35px" }}>Heights</FilterTitle>
        <DragSlider totalChildrens={heights.length} isVisible={isOpen}>
          {heights.map(currentHeight => (
            <PokemonHeightsIcon
              key={currentHeight}
              height={currentHeight}
              variant={currentHeight === heightSelected ? "secondary" : "primary"}
              handleClick={onHeightClick}
            />
          ))}
        </DragSlider>

        <FilterTitle customCss={{ marginTop: "35px" }}>Weights</FilterTitle>
        <DragSlider totalChildrens={weights.length} isVisible={isOpen}>
          {weights.map(currentWeight => (
            <PokemonWeightsIcon
              key={currentWeight}
              weight={currentWeight}
              variant={currentWeight === weightSelected ? "secondary" : "primary"}
              handleClick={onWeightClick}
            />
          ))}
        </DragSlider>

        <FilterTitle customCss={{ marginTop: "35px" }}>Number Range</FilterTitle>
        <GridFilter>
          <RangeInput max={1000} min={0} />
        </GridFilter>

        <ButtonGroup>
          <Button variant="secondary">Reset</Button>
          <Button variant="primary">Apply</Button>
        </ButtonGroup>
      </ModalFilterContainer>
    </ModalSlider>
  );
};

export default ModalFilter;

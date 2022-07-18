import React from "react";

import { ReactComponent as Pattern6x3Gradient } from "assets/icons/patterns/6x3-gradient.svg";
import { ReactComponent as PatternPokeballGradient } from "assets/icons/patterns/pokeball-gradient.svg";

import { Container } from "./styles";

interface Props {
  generation: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

interface IGenerationCard extends Props {
  variant?: "primary" | "secondary";
  handleClick?: () => void;
  selected: boolean;
}

function convertGenerationNumber({ generation }: Props): string {
  switch (generation) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
    case 6:
      return "VI";
    case 7:
      return "VII";
    case 8:
      return "VIII";
    default:
      return "I";
  }
}

function getImg({ generation }: Props): string {
  switch (generation) {
    case 1:
      return "/assets/generations/generation-1.svg";
    case 2:
      return "/assets/generations/generation-2.svg";
    case 3:
      return "/assets/generations/generation-3.svg";
    case 4:
      return "/assets/generations/generation-4.svg";
    case 5:
      return "/assets/generations/generation-5.svg";
    case 6:
      return "/assets/generations/generation-6.svg";
    case 7:
      return "/assets/generations/generation-7.svg";
    case 8:
      return "/assets/generations/generation-8.svg";
    default:
      return "/assets/generations/generation-1.svg";
  }
}

const GenerationCard: React.FC<IGenerationCard> = ({ generation, selected, variant = "primary", handleClick }) => {
  return (
    <Container variant={selected ? "secondary" : "primary"} onClick={handleClick}>
      <Pattern6x3Gradient />
      {/* <GetGen generation={generation} /> */}
      <img src={getImg({ generation })} />
      <span>{`Generation ${convertGenerationNumber({ generation })}`}</span>
      <PatternPokeballGradient />
    </Container>
  );
};

export { GenerationCard };

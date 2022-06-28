import React from "react";
import { ReactComponent as BugSVG } from "assets/icons/types/bug.svg";
import { ReactComponent as DarkSVG } from "assets/icons/types/dark.svg";
import { ReactComponent as DragonSVG } from "assets/icons/types/dragon.svg";
import { ReactComponent as ElectricSVG } from "assets/icons/types/electric.svg";
import { ReactComponent as FairyVG } from "assets/icons/types/fairy.svg";
import { ReactComponent as FightingSVG } from "assets/icons/types/fighting.svg";
import { ReactComponent as FireSVG } from "assets/icons/types/fire.svg";
import { ReactComponent as FlyingSVG } from "assets/icons/types/flying.svg";
import { ReactComponent as GhostSVG } from "assets/icons/types/ghost.svg";
import { ReactComponent as GrassSVG } from "assets/icons/types/grass.svg";
import { ReactComponent as GroundSVG } from "assets/icons/types/ground.svg";
import { ReactComponent as IceSVG } from "assets/icons/types/ice.svg";
import { ReactComponent as NormalSVG } from "assets/icons/types/normal.svg";
import { ReactComponent as PoisonSVG } from "assets/icons/types/poison.svg";
import { ReactComponent as PsychicSVG } from "assets/icons/types/psychic.svg";
import { ReactComponent as RockSVG } from "assets/icons/types/rock.svg";
import { ReactComponent as SteelSVG } from "assets/icons/types/steel.svg";
import { ReactComponent as WaterSVG } from "assets/icons/types/water.svg";
import { IconBaseGenerics, PokemonTypes, PokemonTypesKeyOf } from "types/theme-types";

import { Container, GenericSVG } from "./styles";

interface IIconBaseProps {
  variant?: "primary" | "secondary";
}
interface IGetPokemonTypeProps extends IIconBaseProps {
  type: PokemonTypesKeyOf;
}

function GetPokemonType({ type }: IGetPokemonTypeProps) {
  switch (type) {
    case PokemonTypes.BUG:
      return <BugSVG />;
    case PokemonTypes.DARK:
      return <DarkSVG />;
    case PokemonTypes.DRAGON:
      return <DragonSVG />;
    case PokemonTypes.ELECTRIC:
      return <ElectricSVG />;
    case PokemonTypes.FAIRY:
      return <FairyVG />;
    case PokemonTypes.FIGHTING:
      return <FightingSVG />;
    case PokemonTypes.FIRE:
      return <FireSVG />;
    case PokemonTypes.FLYING:
      return <FlyingSVG />;
    case PokemonTypes.GHOST:
      return <GhostSVG />;
    case PokemonTypes.GRASS:
      return <GrassSVG />;
    case PokemonTypes.GROUND:
      return <GroundSVG />;
    case PokemonTypes.ICE:
      return <IceSVG />;
    case PokemonTypes.NORMAL:
      return <NormalSVG />;
    case PokemonTypes.POISON:
      return <PoisonSVG />;
    case PokemonTypes.PSYCHIC:
      return <PsychicSVG />;
    case PokemonTypes.ROCK:
      return <RockSVG />;
    case PokemonTypes.STEEL:
      return <SteelSVG />;
    case PokemonTypes.WATER:
      return <WaterSVG />;
    default:
      return <GenericSVG />;
  }
}

function teste<T, K extends keyof T>(type: T, chave: K) {
  console.log("teste ", type);
}

const IconBasePokemonTypes: React.FC<IGetPokemonTypeProps> = ({ type, variant = "primary" }) => {
  return (
    <Container type={type} variant={variant}>
      <GetPokemonType type={type} />
    </Container>
  );
};

export { IconBasePokemonTypes };

const icons: IconBaseGenerics = {
  BUG: "asd",
  DARK: "",
  DRAGON: "",
  ELECTRIC: "",
  FAIRY: "",
  FIGHTING: "",
  FIRE: "",
  FLYING: "",
  GHOST: "",
  GRASS: "",
  GROUND: "",
  ICE: "",
  NORMAL: "",
  POISON: "",
  PSYCHIC: "",
  ROCK: "",
  STEEL: "",
  WATER: "",
  LIGHT: "",
  HEAVY: "",
  SHORT: "",
  MEDIUM: "",
  TALL: "",
};

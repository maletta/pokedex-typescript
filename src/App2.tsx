import React, { useContext } from "react";
import styled from "styled-components/macro";

import { ApplicationTitle } from "components/Titles";
import Button from "components/Button";
import TextInput from "components/TextInput";
import RangeInput from "components/RangeInput";
import { IconBasePokemonTypes, IconBasePokemonHeights, IconBasePokemonWeights } from "components/IconBase";
import Badge from "components/Badge";
import { PokemonTypesIcon } from "components/Icon";
import { GenerationCard } from "components/GenerationCard";
import PokemonCard from "components/PokemonCard";

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  padding-inline: 10px;

  &.vermelho {
    background-color: red;
  }
`;

const Wrapper2 = styled.div`
  display: flex;
  margin-top: 10px;
  width: 500px;
  gap: 10px;
  padding-inline: 10px;
`;

const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <ApplicationTitle> Almost before we knew it, we had left the ground. </ApplicationTitle>
      </Wrapper>
      <Wrapper>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </Wrapper>
      <Wrapper>
        <TextInput placeholder="Default" />
      </Wrapper>

      <Wrapper2>
        <RangeInput min={0} max={75} />
      </Wrapper2>

      <Wrapper2>
        <IconBasePokemonTypes type="WATER" variant="primary" />
      </Wrapper2>

      <Wrapper2>
        <IconBasePokemonHeights height="MEDIUM" variant="primary" />
        <IconBasePokemonHeights height="SHORT" variant="primary" />
        <IconBasePokemonHeights height="TALL" variant="primary" />
      </Wrapper2>

      <Wrapper2>
        <IconBasePokemonWeights weight="HEAVY" variant="primary" />
        <IconBasePokemonWeights weight="LIGHT" variant="primary" />
        <IconBasePokemonWeights weight="NORMAL" variant="primary" />
      </Wrapper2>

      <Wrapper2>
        <Badge type={"BUG"} /> <Badge type={"DARK"} /> <Badge type={"DRAGON"} /> <Badge type={"ELECTRIC"} />
        <Badge type={"FAIRY"} /> <Badge type={"FIGHTING"} /> <Badge type={"FIRE"} /> <Badge type={"FLYING"} />
      </Wrapper2>

      <Wrapper2>
        <PokemonTypesIcon type={"BUG"} variant={"primary"} />
        <PokemonTypesIcon type={"DARK"} variant={"primary"} />
        <PokemonTypesIcon type={"DRAGON"} variant={"primary"} />
        <PokemonTypesIcon type={"ELECTRIC"} variant={"primary"} />
        <PokemonTypesIcon type={"FAIRY"} variant={"primary"} />
        <PokemonTypesIcon type={"FIGHTING"} variant={"primary"} />
        <PokemonTypesIcon type={"FIRE"} variant={"primary"} />
        <PokemonTypesIcon type={"FLYING"} variant={"primary"} />
      </Wrapper2>

      <Wrapper2 className="vermelho">
        <PokemonTypesIcon type={"BUG"} variant={"secondary"} />
        <PokemonTypesIcon type={"DARK"} variant={"secondary"} />
        <PokemonTypesIcon type={"DRAGON"} variant={"secondary"} />
        <PokemonTypesIcon type={"ELECTRIC"} variant={"secondary"} />
        <PokemonTypesIcon type={"FAIRY"} variant={"secondary"} />
        <PokemonTypesIcon type={"FIGHTING"} variant={"secondary"} />
        <PokemonTypesIcon type={"FIRE"} variant={"secondary"} />
        <PokemonTypesIcon type={"FLYING"} variant={"secondary"} />
      </Wrapper2>

      {/* <Wrapper
      // className="vermelho"
      >
        <GenerationCard generation={1} variant={"primary"} />
        <GenerationCard generation={2} variant={"secondary"} />
        <GenerationCard generation={3} variant={"primary"} />
        <GenerationCard generation={4} variant={"secondary"} />
      </Wrapper> */}

      <Wrapper2>
        <PokemonCard name="Bulbasaur" number={1} types={["GRASS", "POISON"]} imageURL={"assets/pokemon-example.png"} />
      </Wrapper2>
    </>
  );
};

export default App;

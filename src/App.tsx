import React, { useContext } from "react";
import styled from "styled-components";

import { ApplicationTitle } from "components/Titles";
import Button from "components/Button";
import TextInput from "components/TextInput";
import RangeInput from "components/RangeInput";
import { IconBasePokemonTypes, IconBasePokemonHeights, IconBasePokemonWeights } from "components/IconBase";
import Badge from "components/Badge";
import { Icon } from "components/Icon";
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
        <Icon type={"BUG"} variant={"primary"} />
        <Icon type={"DARK"} variant={"primary"} />
        <Icon type={"DRAGON"} variant={"primary"} />
        <Icon type={"ELECTRIC"} variant={"primary"} />
        <Icon type={"FAIRY"} variant={"primary"} />
        <Icon type={"FIGHTING"} variant={"primary"} />
        <Icon type={"FIRE"} variant={"primary"} />
        <Icon type={"FLYING"} variant={"primary"} />
      </Wrapper2>

      <Wrapper2 className="vermelho">
        <Icon type={"BUG"} variant={"secondary"} />
        <Icon type={"DARK"} variant={"secondary"} />
        <Icon type={"DRAGON"} variant={"secondary"} />
        <Icon type={"ELECTRIC"} variant={"secondary"} />
        <Icon type={"FAIRY"} variant={"secondary"} />
        <Icon type={"FIGHTING"} variant={"secondary"} />
        <Icon type={"FIRE"} variant={"secondary"} />
        <Icon type={"FLYING"} variant={"secondary"} />
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
        <PokemonCard name="Bulbassaur" number={1} types={["BUG", "POISON"]} />
      </Wrapper2>
    </>
  );
};

export default App;

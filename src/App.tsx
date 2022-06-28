import React, { useContext } from "react";
import styled from "styled-components";

import { ApplicationTitle } from "components/Titles";
import Button from "components/Button";
import TextInput from "components/TextInput";
import RangeInput from "components/RangeInput";

import { IconBasePokemonTypes } from "components/IconBase";

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Wrapper2 = styled.div`
  display: flex;
  margin-top: 10px;
  width: 500px;
`;

const App: React.FC = () => {
  return (
    <>
      <ApplicationTitle> Almost before we knew it, we had left the ground. </ApplicationTitle>
      <Wrapper>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </Wrapper>
      <Wrapper>
        <TextInput placeholder="Default" />
      </Wrapper>

      <Wrapper2>
        <RangeInput min={0} max={50} />
      </Wrapper2>

      <Wrapper2>
        <IconBasePokemonTypes color type="BUG" />
      </Wrapper2>
    </>
  );
};

export default App;

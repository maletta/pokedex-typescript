import React, { useState } from "react";
import { CSSObject } from "styled-components";

import { Container, Input, Image } from "./styles";

import { ReactComponent as SearchSVG } from "assets/icons/menu/search-icon.svg";

interface Props {
  placeholder: string;
  customCss?: CSSObject;
}

const TextInput: React.FC<Props> = ({ placeholder, customCss }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <Container focus={focus} customCss={customCss}>
      <SearchSVG />
      <Input placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    </Container>
  );
};

export default TextInput;

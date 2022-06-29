import React, { useState } from "react";

import { Container, Input, Image } from "./styles";

import { ReactComponent as SearchSVG } from "assets/icons/menu/search-icon.svg";

interface Props {
  placeholder: string;
}

const TextInput: React.FC<Props> = ({ placeholder }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <Container focus={focus}>
      <SearchSVG />
      <Input placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    </Container>
  );
};

export default TextInput;

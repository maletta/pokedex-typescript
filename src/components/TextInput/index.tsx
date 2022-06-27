import React, { useState } from "react";

import { Container, Input, Image } from "./styles";

interface Props {
  placeholder: string;
}

const TextInput: React.FC<Props> = ({ placeholder }) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <Container focus={focus}>
      <Image src="./assets/icons/menu/search-icon.svg" />
      <Input placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    </Container>
  );
};

export default TextInput;

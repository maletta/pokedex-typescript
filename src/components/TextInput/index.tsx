import React, { useState } from "react";
import { CSSObject } from "styled-components/macro";

import { Container, Input, Image } from "./styles";

import { ReactComponent as SearchSVG } from "assets/icons/menu/search-icon.svg";

interface Props {
  placeholder: string;
  customCss?: CSSObject;
  handleChange?: (value: string) => void;
  handleFocus?: () => void;
  handleBlur?: () => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = ({ placeholder, customCss, handleChange, handleFocus, handleBlur, handleKeyDown }) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | null>(null);


  const internalHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleChange && handleChange(e.target.value)
  };

  const internalHandleFocus = () => {
    setFocus(true);
    handleFocus && handleFocus();
  };

  const internalHandleBlur = () => {
    setFocus(false)
    handleBlur && handleBlur();
  }

  const internalHandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown && handleKeyDown(e);
  }


  return (
    <Container focus={focus} customCss={customCss}>
      <SearchSVG />
      <Input
        placeholder={placeholder}
        onFocus={internalHandleFocus}
        onBlur={internalHandleBlur}
        onChange={internalHandleChange}
        onKeyDown={internalHandleKeyDown}
      />
    </Container>
  );
};

export default TextInput;

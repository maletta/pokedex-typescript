import React, { useState } from "react";
import { CSSObject } from "styled-components/macro";

import { Container, Input, Image } from "./styles";

import { ReactComponent as SearchSVG } from "assets/icons/menu/search-icon.svg";

interface Props {
  placeholder: string;
  customCss?: CSSObject;
  value?: string;
  handleChange?: (value: string) => void;
  handleFocus?: () => void;
  handleBlur?: () => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<Props> = ({ value, placeholder, customCss, handleChange, handleFocus, handleBlur, handleKeyDown }) => {


  const internalHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange && handleChange(e.target.value)
  };

  const internalHandleFocus = () => {
    handleFocus && handleFocus();
  };

  const internalHandleBlur = () => {
    // isso causa problemas em dropdown e autocomplete
    // elemento perde o foco antes de ser clicado com onClick
    // então usar onMouseDown no LI que executa antes de perder o blur do input 
    handleBlur && handleBlur();
  }

  const internalHandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyDown && handleKeyDown(e);
  }


  return (
    <Container customCss={customCss}>
      <SearchSVG />
      <Input
        placeholder={placeholder}
        onFocus={internalHandleFocus}
        onBlur={internalHandleBlur}
        onChange={internalHandleChange}
        onKeyDown={internalHandleKeyDown}
        value={value || ""}
      />
    </Container>
  );
};

export default TextInput;

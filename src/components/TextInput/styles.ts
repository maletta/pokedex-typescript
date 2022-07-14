import styled, { css, CSSObject } from "styled-components/macro";

interface Props {
  focus?: boolean;
  customCss?: CSSObject;
}

const customCss = css<Props>`
  ${({ customCss }) => customCss}
`;

const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 60px;

  padding: 0px 25px 0px 25px;

  background-color: #f2f2f2;

  border-radius: 10px;

  input::placeholder {
    color: #747476;
  }

  ${({ focus }) =>
    focus &&
    css`
      background-color: #e2e2e2;
    `}

  ${customCss}
`;

const Input = styled.input`
  height: 100%;
  width: 100%;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #17171b;

  border: none;
  outline: none;

  background-color: transparent;
`;

const Image = styled.img`
  width: 16px;
  height: 16px;
`;

export { Container, Input, Image };

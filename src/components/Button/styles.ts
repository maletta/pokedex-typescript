import styled from "styled-components";

interface Props {
  variant: "primary" | "secondary";
}

export default styled.button<Props>`
  height: 60px;
  width: 100%;

  padding: 20px 30px;

  background-color: var(--button-primary-color);
  box-shadow: 0px 10px 20px rgba(234, 93, 96, 0.3);

  border-radius: 10px;
  border-width: 0;

  color: var(--text-white);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;

  cursor: pointer;

  ${({ variant }) => {
    if (variant === "secondary") {
      return `
      background-color: var(--button-secondary-color);
      color: #747476;
      box-shadow: none;
  `;
    }
  }}
`;

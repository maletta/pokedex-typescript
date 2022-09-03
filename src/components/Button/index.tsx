import React from "react";

import StyledButton from "./styles";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  handleClick?: () => void;
}

const Button: React.FC<Props> = ({ children, variant = "primary", handleClick }) => {
  return (
    <StyledButton variant={variant} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

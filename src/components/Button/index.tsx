import React from "react";

import StyledButton from "./styles";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({ children, variant = "primary" }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;

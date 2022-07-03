import styled, { css } from "styled-components";
interface ITitleStyle {
  variant?: "primary" | "secondary";
}

const commomStyle = css<ITitleStyle>`
  color: ${({ theme, variant }) => (variant === "primary" ? "#17171b" : theme.colors.default.WHITE)};
`;

const TitleStyle = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  line-height: 11.9rem;
  color: #17171b;
`;

const ApplicationTitleStyle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.8rem;
  color: #17171b;
`;

const PokemonNameStyle = styled.h3<ITitleStyle>`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.8rem;
  color: #17171b;

  ${commomStyle}
`;

const FilterTitleStyle = styled.p`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 3.1rem;
  color: #17171b;
`;

const DescriptionStyle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.9rem;
  color: #17171b;
`;

const PokemonNumberStyle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4rem;
  color: #17171b;
`;

const PokemonTypeStyle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.4rem;
  color: #17171b;
`;

export { TitleStyle, ApplicationTitleStyle, PokemonNameStyle, FilterTitleStyle, DescriptionStyle, PokemonNumberStyle, PokemonTypeStyle };

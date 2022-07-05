import styled, { css, CSSObject } from "styled-components";
interface ITitleStyle {
  variant?: "primary" | "secondary";
  customCss?: CSSObject;
}

const commomStyle = css<ITitleStyle>`
  color: ${({ theme, variant }) => (variant === "primary" ? "#17171b" : theme.colors.default.WHITE)};

  ${({ customCss }) => customCss}
`;

const TitleStyle = styled.h1<ITitleStyle>`
  font-size: 10rem;
  font-weight: 700;
  line-height: 11.9rem;

  ${commomStyle}
`;

const ApplicationTitleStyle = styled.h2<ITitleStyle>`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.8rem;

  ${commomStyle}
`;

const PokemonNameStyle = styled.h3<ITitleStyle>`
  font-style: normal;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 3.103rem;

  ${commomStyle}
`;

const FilterTitleStyle = styled.p<ITitleStyle>`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.909rem;

  ${commomStyle}
`;

const DescriptionStyle = styled.p<ITitleStyle>`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.909rem;

  ${commomStyle}
`;

const PokemonNumberStyle = styled.p<ITitleStyle>`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.432rem;

  ${commomStyle}
`;

const PokemonTypeStyle = styled.p<ITitleStyle>`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.432rem;

  ${commomStyle}
`;

export { TitleStyle, ApplicationTitleStyle, PokemonNameStyle, FilterTitleStyle, DescriptionStyle, PokemonNumberStyle, PokemonTypeStyle };

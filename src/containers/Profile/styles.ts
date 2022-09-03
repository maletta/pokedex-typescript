import styled from "styled-components";

const ProfileWrapper = styled.div`
  position: relative;
`;

const Banner = styled.div`
  height: 265px;
  width: 100%;
  position: sticky;

  background-color: cadetblue;
`;

const PokemonNameBackground = styled.div`
  position: absolute;
  top: 25px;
  left: -86px;

  font-size: 10rem;
  font-weight: 700;
  line-height: 11.9rem;
  /* letter-spacing: 0.5rem; */

  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  -webkit-text-fill-color: cadetblue;

  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(0deg, cadetblue 18%, transparent);

    z-index: 1;
  }
`;

const PokemonInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 125px;

  position: absolute;
  top: 90px;

  padding-left: 40px;

  z-index: 2;
`;

const PokemonImage = styled.div`
  /* stored in public folder */
  background-image: url("assets/patterns/circle-gradient.svg");
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 125px;

  height: 125px;
  width: 125px;
  img {
    height: 125px;
    width: 125px;
  }

  svg path {
    fill: red;
  }
`;

const PokemonDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const BadgeGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Content = styled.div`
  height: 300px;
  width: 100%;

  background-color: bisque;
`;

export { ProfileWrapper, Banner, PokemonNameBackground, PokemonInfo, PokemonImage, PokemonDescription, BadgeGroup, Content };

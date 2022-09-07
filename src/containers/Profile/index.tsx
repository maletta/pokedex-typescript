import React, { useState, useEffect } from "react";

import { PokemonNumber, PokemonName } from "components/Titles";
import Badge from "components/Badge";

import { PokemonTypesKeyOf } from "types/theme-types";

import { About, Stats, Evolution } from "./TabsPanel";
import {
  ProfileWrapper,
  Banner,
  PokemonNameBackground,
  PokemonInfo,
  PokemonImage,
  PokemonDescription,
  BadgeGroup,
  PokemonInfoScrolled,
  BackIcon,
  Content,
  TabsContainer,
  TabsGroup,
  Tab,
} from "./styles";

const Profile: React.FC = () => {
  const name = "Bulbasaur";
  const number = "#001";
  const types: Array<PokemonTypesKeyOf> = ["GRASS", "POISON"];
  const [scrollY, setScrollY] = useState<boolean>(false);

  /** função para add classe scroll */
  const onScrollPage = () => {
    if (window.scrollY > 100) setScrollY(true);
    else setScrollY(false);

    console.log("window.scrollY > 105", window.scrollY, window.scrollY > 105);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollPage);

    return () => window.removeEventListener("scroll", onScrollPage);
  }, []);

  return (
    <ProfileWrapper>
      <Banner className={scrollY ? "scrolled" : ""}>
        <BackIcon src="assets/back-icon.svg" />
        <PokemonNameBackground className={scrollY ? "scrolled" : ""}>{name.toUpperCase()}</PokemonNameBackground>
        <PokemonInfo className={scrollY ? "scrolled" : ""}>
          <PokemonImage>
            <img src="assets/pokemon-example.png" alt="pokemon illustrate" />
          </PokemonImage>

          <PokemonDescription>
            <PokemonNumber variant="primary" customCss={{ fontSize: "1.6rem", opacity: 0.6 }}>
              #001
            </PokemonNumber>
            <PokemonName variant="secondary" customCss={{ fontSize: "3.2rem" }}>
              {name}
            </PokemonName>
            <BadgeGroup>
              {types.map(type => (
                <Badge key={type} type={type} />
              ))}
            </BadgeGroup>
          </PokemonDescription>
        </PokemonInfo>
        <PokemonInfoScrolled>
          <PokemonName variant="secondary" customCss={{ fontSize: "2.6rem" }}>
            {name}
          </PokemonName>
        </PokemonInfoScrolled>
      </Banner>
      <TabsContainer className={scrollY ? "scrolled" : ""}>
        <TabsGroup>
          <Tab>About</Tab>
          <Tab>Stats</Tab>
          <Tab className="active">Evolution</Tab>
        </TabsGroup>
      </TabsContainer>
      <Content className={scrollY ? "scrolled" : ""}>
        <About />
      </Content>
    </ProfileWrapper>
  );
};

export default Profile;

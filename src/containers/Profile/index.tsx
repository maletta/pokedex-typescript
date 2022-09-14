import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PokemonNumber, PokemonName } from "components/Titles";
import Badge from "components/Badge";

import { PokemonTypesKeyOf } from "types/theme-types";
import { useTypeWeaknesses } from "hooks/TypeCalculatorHook";

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
  Content,
  TabsContainer,
  TabsGroup,
  Tab,
} from "./styles";

import { ReactComponent as BackIconSVG } from "assets/back-icon.svg";

enum TabsENUM {
  ABOUT = "ABOUT",
  STATS = "STATS",
  EVOLUTION = "EVOLUTION",
}

const Profile: React.FC = () => {
  const name = "Bulbasaur";
  const number = "#001";
  const types: Array<PokemonTypesKeyOf> = ["GRASS", "POISON"];
  const [scrollY, setScrollY] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<TabsENUM>(TabsENUM.ABOUT);
  const navigate = useNavigate();
  const typeWeaknesses = useTypeWeaknesses(types);

  console.log("typeWeaknesses ", typeWeaknesses);

  /** função para add classe scroll */
  const onScrollPage = () => {
    if (window.scrollY > 100) setScrollY(true);
    else setScrollY(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollPage);

    return () => window.removeEventListener("scroll", onScrollPage);
  }, []);

  return (
    <ProfileWrapper>
      <Banner className={scrollY ? "scrolled" : ""}>
        <BackIconSVG className="backIcon" onClick={() => navigate("/")} />
        <PokemonNameBackground className={scrollY ? "scrolled" : ""}>{name.toUpperCase()}</PokemonNameBackground>
        <PokemonInfo className={scrollY ? "scrolled" : ""}>
          <PokemonImage>
            <img src="assets/pokemon-example.png" alt="pokemon illustrate" />
          </PokemonImage>

          <PokemonDescription>
            <PokemonNumber variant="primary" customCss={{ fontSize: "1.6rem", opacity: 0.6 }}>
              {number}
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
          <Tab onClick={() => setSelectedTab(TabsENUM.ABOUT)} className={selectedTab === TabsENUM.ABOUT ? "active" : ""}>
            About
          </Tab>
          <Tab onClick={() => setSelectedTab(TabsENUM.STATS)} className={selectedTab === TabsENUM.STATS ? "active" : ""}>
            Stats
          </Tab>
          <Tab onClick={() => setSelectedTab(TabsENUM.EVOLUTION)} className={selectedTab === TabsENUM.EVOLUTION ? "active" : ""}>
            Evolution
          </Tab>
        </TabsGroup>
      </TabsContainer>
      <Content className={scrollY ? "scrolled" : ""}>
        <About isOpen={selectedTab === TabsENUM.ABOUT} />
        <Stats isOpen={selectedTab === TabsENUM.STATS} />
        <Evolution isOpen={selectedTab === TabsENUM.EVOLUTION} />
      </Content>
    </ProfileWrapper>
  );
};

export default Profile;

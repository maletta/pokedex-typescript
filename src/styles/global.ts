import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'); */

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    /* font-family: 'Roboto', sans-serif; */
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-size: 16px; 
  }

  html {
    /* scroll-behavior: smooth; */

    /** type-colors */
    /* --type-bug: #8CB230;
    --type-dark: #17171B;
    --type-dragon: #0F6AC0;
    --type-electric: #EED535;
    --type-fairy: #ED6EC7;
    --type-fighting: #D04164;
    --type-fire: #FD7D24;
    --type-flying: #748FC9;
    --type-ghost: #556AAE;
    --type-grass: #62B957;
    --type-ground: #DD7748;
    --type-ice: #61CEC0;
    --type-normal: #9DA0AA;
    --type-poison: #A552CC;
    --type-psychic: #EA5D60;
    --type-rock: #BAAB82;
    --type-steel: #417D9A;
    --type-water: #4A90DA; */
  }

  :root{
    font-size: 62.5%; /** 1rem = 10px*/

  

    /** background-type-colors */
    /* --background-type-bug: #8BD674;
    --background-type-dark: #6F6E78;
    --background-type-dragon: #7383B9;
    --background-type-electric: #F2CB55;
    --background-type-fairy: #EBA8C3;
    --background-type-fighting: #EB4971;
    --background-type-fire: #FFA756;
    --background-type-flying: #83A2E3;
    --background-type-ghost: #8571BE;
    --background-type-grass: #8BBE8A;
    --background-type-ground: #F78551;
    --background-type-ice: #91D8DF;
    --background-type-normal: #B5B9C4;
    --background-type-poison: #9F6E97;
    --background-type-psychic: #FF6568;
    --background-type-rock: #D4C294;
    --background-type-steel: #4C91B2;
    --background-type-water: #58ABF6; */

    /** background */
    --background-white: #fff;
    --background-default-input: #F2F2F2;
    --background-pressed-input: #E2E2E2;
    --background-modal: #17171B;

    /** gradient */
    --gradient-vector: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
    --gradient-pokeball:  linear-gradient(180deg, #F5F5F5 50%, #FFFFFF 94.81%);
    --gradient-vector-grey:  linear-gradient(100.59deg, #E5E5E5 0%, rgba(245, 245, 245, 0) 100%);
    --gradient-pokeball-grey:  linear-gradient(135deg, #ECECEC 0%, #F5F5F5 100%);
    --gradient-vector-white: linear-gradient(100.84deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
    --gradient-pokeball-white: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
    --gradient-pokemon-name:  linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 76.04%);
    --gradient-pokemon-circle:  linear-gradient(334.58deg, rgba(255, 255, 255, 0.35) 16.24%, rgba(255, 255, 255, 0) 44.6%);

    /** text color */
    --text-white:  #FFFFFF;
    --text-black: #17171B;
    --text-grey: #747476;
    --text-number: #17171B;

    /* height */
    /* --height-short: #FFC5E6;
    --height-medium: #AEBFD7;
    --height-tall: #AAACB8; */

    /* Weight */
    /* --weight-light: #99CD7C;
    --weight-normal: #57B2DC;
    --weight-heavy: #5A92A5; */

    /* button primary-color */
    --button-primary-color: #EA5D60;
    --button-secondary-color: #F2F2F2;


  }

`;

export default GlobalStyles;
